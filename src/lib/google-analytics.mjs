import settings from '../data/google-analytics.json' with { type: 'json' };
import { referringOrigin } from './statistics-consent.mjs';

const denied = {
  analytics_storage: 'denied', ad_storage: 'denied',
  ad_user_data: 'denied', ad_personalization: 'denied',
};

export function createGoogleAnalytics({ window, document, consent, countPage = true, now = Date.now }) {
  const { measurementId, productionHost, cookieMaxAgeSeconds } = settings;
  const disableKey = `ga-disable-${measurementId}`;
  const production = window.location.hostname === productionHost;
  const allowed = () => production && countPage && consent.allowed();
  let loading = null;
  let configured = false;
  let counted = false;
  let expiryTimer = null;
  window[disableKey] = true;

  function removeCookies() {
    if (!production) return;
    const ownCookies = new Set(['_ga', `_ga_${measurementId.slice(2)}`]);
    for (const item of document.cookie.split(';')) {
      const name = item.split('=')[0].trim();
      if (!ownCookies.has(name)) continue;
      for (const domain of ['', productionHost, `.${productionHost}`]) {
        document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax; Secure${domain ? `; Domain=${domain}` : ''}`;
      }
    }
  }

  function stop() {
    // Set before any further tag commands, including pending download callbacks.
    window[disableKey] = true;
    if (!consent.allowed()) removeCookies();
  }

  function gtag() {
    if (allowed()) window.dataLayer.push(arguments);
  }

  function load() {
    if (loading) return loading;
    window.dataLayer = window.dataLayer || [];
    window.gtag = gtag;
    loading = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      script.referrerPolicy = 'no-referrer';
      script.onload = resolve;
      script.onerror = () => {
        script.remove();
        loading = null;
        reject(new Error('Google Analytics unavailable'));
      };
      document.head.appendChild(script);
    });
    return loading;
  }

  async function count() {
    if (!allowed() || counted) return false;
    await load();
    if (!allowed()) { stop(); return false; }
    if (counted) return false;
    window[disableKey] = false;
    const page = {
      page_location: window.location.origin + window.location.pathname,
      page_referrer: referringOrigin(document.referrer, window.location.origin),
      page_title: document.title,
    };
    if (!configured) {
      gtag('consent', 'default', denied);
      gtag('consent', 'update', { ...denied, analytics_storage: 'granted' });
      gtag('js', new Date(now()));
      gtag('set', page);
      gtag('config', measurementId, {
        ...page,
        send_page_view: false,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
        cookie_domain: productionHost,
        cookie_path: '/',
        cookie_expires: cookieMaxAgeSeconds,
        cookie_update: false,
        cookie_flags: 'SameSite=Lax;Secure',
      });
      configured = true;
    }
    gtag('event', 'page_view', { ...page, send_to: measurementId });
    counted = true;
    return true;
  }

  function sync() {
    if (expiryTimer !== null) window.clearTimeout(expiryTimer);
    expiryTimer = null;
    if (!allowed()) stop();
    else {
      if (configured && counted) window[disableKey] = false;
      // Keep provider/network failures from affecting navigation or consent UI.
      void count().catch(stop);
      const expiry = consent.expiresAt();
      if (expiry !== null) expiryTimer = window.setTimeout(sync, Math.min(Math.max(0, expiry - now()), 2147483647));
    }
  }

  return { count, sync, stop };
}

import assert from 'node:assert/strict';
import { CONSENT_KEY, CONSENT_VERSION, CONSENT_MAX_AGE, createStatisticsConsent, referringOrigin } from '../src/lib/statistics-consent.mjs';
import { createGoogleAnalytics } from '../src/lib/google-analytics.mjs';
import settings from '../src/data/google-analytics.json' with { type: 'json' };

const start = 1800000000000;
const disableKey = `ga-disable-${settings.measurementId}`;
function fixture({ hostname = settings.productionHost, countPage = true, enabled = true } = {}) {
  let clock = start;
  const records = new Map();
  const storage = { getItem: key => records.get(key) ?? null, setItem: (key, value) => records.set(key, value) };
  const consent = createStatisticsConsent({ storage, enabled, now: () => clock });
  const scripts = [], cookieWrites = [], timers = new Map();
  let nextTimer = 0;
  const window = {
    location: { hostname, origin: `https://${hostname}`, pathname: '/de/', search: '?private=value', hash: '#secret' },
    setTimeout(callback, delay) { const id = ++nextTimer; timers.set(id, { callback, delay }); return id; },
    clearTimeout(id) { timers.delete(id); },
  };
  const document = {
    title: 'Test page', referrer: 'https://example.org/private?secret=value',
    get cookie() { return '_ga=old; _ga_LSVZMC8HFD=old; theme=dark; _ga_OTHER=unrelated'; },
    set cookie(value) { cookieWrites.push(value); },
    createElement(tag) { assert.equal(tag, 'script'); return { remove() {} }; },
    head: { appendChild(script) { scripts.push(script); } },
  };
  const analytics = createGoogleAnalytics({ window, document, consent, countPage, now: () => clock });
  return { records, storage, consent, scripts, cookieWrites, timers, window, analytics,
    commands: () => (window.dataLayer ?? []).map(command => [...command]),
    advance(ms) { clock += ms; },
  };
}
const tick = () => new Promise(resolve => setImmediate(resolve));

for (const options of [{}, { hostname: 'localhost' }, { countPage: false }, { enabled: false }]) {
  const f = fixture(options);
  f.analytics.sync();
  assert.equal(await f.analytics.count(), false);
  assert.equal(f.scripts.length, 0, 'No Google download without consent');
  f.consent.choose('deny'); f.analytics.sync();
  assert.equal(await f.analytics.count(), false);
  assert.equal(f.scripts.length, 0, 'Refusal must not request Google, including consent pings');
  if (Object.keys(options).length) {
    f.consent.choose('allow'); f.analytics.sync();
    assert.equal(await f.analytics.count(), false);
    assert.equal(f.scripts.length, 0, 'Local, privacy and disabled pages never load Google');
  }
}
const f = fixture();
assert.equal(f.window[disableKey], true);
for (const record of [
  '{broken',
  JSON.stringify({ value: 'allow', version: '2026-10-30', time: start }),
  JSON.stringify({ value: 'allow', version: CONSENT_VERSION, time: start - CONSENT_MAX_AGE }),
  JSON.stringify({ value: 'allow', version: CONSENT_VERSION, time: start + 1 }),
  JSON.stringify({ value: 'yes', version: CONSENT_VERSION, time: start }),
]) {
  f.storage.setItem(CONSENT_KEY, record);
  f.analytics.sync();
  assert.equal(f.consent.allowed(), false);
  assert.equal(f.scripts.length, 0, 'Stale/invalid consent and old provider approvals fail closed');
}
f.storage.setItem(CONSENT_KEY, JSON.stringify({ value: 'deny', version: '2026-10-30', time: start }));
assert.equal(f.consent.choice(), 'deny', 'Keep previous refusals');
f.consent.choose('allow');
const first = f.analytics.count();
const duplicate = f.analytics.count();
assert.equal(f.scripts.length, 1, 'Concurrent calls share the tag download');
assert.equal(f.scripts[0].src, `https://www.googletagmanager.com/gtag/js?id=${settings.measurementId}`);
assert.equal(f.scripts[0].referrerPolicy, 'no-referrer');
assert.equal(f.commands().length, 0, 'Do not queue events before the download completes');
assert.equal(f.window[disableKey], true);
f.scripts[0].onload();
assert.equal(await first, true);
assert.equal(await duplicate, false);
assert.equal(f.window[disableKey], false);
const commands = f.commands();
const config = commands.find(command => command[0] === 'config');
assert.equal(config[1], settings.measurementId);
assert.equal(config[2].send_page_view, false);
assert.equal(config[2].allow_google_signals, false);
assert.equal(config[2].allow_ad_personalization_signals, false);
assert.equal(config[2].cookie_expires, 180 * 24 * 60 * 60);
assert.equal(config[2].cookie_update, false);
assert.equal(config[2].cookie_domain, settings.productionHost);
const consentUpdate = commands.find(command => command[0] === 'consent' && command[1] === 'update')[2];
assert.equal(consentUpdate.analytics_storage, 'granted');
for (const key of ['ad_storage', 'ad_user_data', 'ad_personalization']) assert.equal(consentUpdate[key], 'denied');
const views = () => f.commands().filter(command => command[0] === 'event' && command[1] === 'page_view');
assert.equal(views().length, 1);
assert.equal(views()[0][2].page_location, 'https://tomnaiser.github.io/de/');
assert.equal(views()[0][2].page_referrer, 'https://example.org');
assert.ok(!JSON.stringify(commands).includes('private') && !JSON.stringify(commands).includes('secret'));
f.consent.choose('deny'); f.analytics.sync();
assert.equal(f.window[disableKey], true);
assert.ok(f.cookieWrites.some(value => value.startsWith('_ga=;')));
assert.ok(f.cookieWrites.some(value => value.startsWith('_ga_LSVZMC8HFD=;')));
assert.ok(f.cookieWrites.every(value => !value.startsWith('theme=') && !value.startsWith('_ga_OTHER=')));
const before = f.commands().length;
f.window.gtag('event', 'must-not-send');
assert.equal(f.commands().length, before, 'No tag commands or consent pings after refusal');
f.consent.choose('allow'); f.analytics.sync(); await tick();
assert.equal(f.window[disableKey], false, 'Allowing again resumes the tag');
assert.equal(views().length, 1, 'No duplicate page view on the same page');

// Another tab changes storage: syncing must disable immediately, without a network update.
f.storage.setItem(CONSENT_KEY, JSON.stringify({ value: 'deny', version: CONSENT_VERSION, time: start }));
f.analytics.sync();
assert.equal(f.window[disableKey], true);
f.consent.choose('allow'); f.analytics.sync();
f.advance(CONSENT_MAX_AGE);
for (const timer of [...f.timers.values()]) timer.callback();
assert.equal(f.window[disableKey], true, 'Expiry stops an already open page');
assert.equal(f.consent.choice(), null);

const pending = fixture();
pending.consent.choose('allow');
const delayed = pending.analytics.count();
pending.consent.choose('deny'); pending.analytics.sync();
pending.scripts[0].onload();
assert.equal(await delayed, false, 'Withdrawal during download prevents configuration and events');
assert.equal(pending.commands().length, 0);
assert.equal(pending.window[disableKey], true);

const error = fixture();
error.consent.choose('allow');
const failed = error.analytics.count();
error.scripts[0].onerror();
await assert.rejects(failed, /unavailable/);
assert.equal(error.commands().length, 0);
const retry = error.analytics.count();
assert.equal(error.scripts.length, 2);
error.scripts[1].onload(); assert.equal(await retry, true);

for (const readable of [true, false]) {
  const blocked = createStatisticsConsent({ enabled: true, now: () => start, storage: {
    getItem() { if (readable) return null; throw new Error('Blocked'); },
    setItem() { throw new Error('Blocked'); },
  } });
  assert.equal(blocked.allowed(), false);
  blocked.choose('allow'); assert.equal(blocked.allowed(), true);
  blocked.choose('deny'); assert.equal(blocked.allowed(), false);
}
assert.equal(referringOrigin('https://example.org/private?secret#fragment', 'https://tomnaiser.github.io'), 'https://example.org');
assert.equal(referringOrigin('https://tomnaiser.github.io/de/', 'https://tomnaiser.github.io'), '');
assert.equal(referringOrigin('file:///private', 'https://tomnaiser.github.io'), '');
assert.equal(referringOrigin('invalid', 'https://tomnaiser.github.io'), '');
console.log('Analytics checks passed: opt-in, provider migration, disabled/local/privacy pages, single page view, withdrawal and reallow, pending download, cross-tab changes, expiry, cookies, retry, blocked storage and URL minimisation. No real network requests.');

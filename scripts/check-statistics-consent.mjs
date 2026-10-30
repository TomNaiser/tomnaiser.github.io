import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createHash } from 'node:crypto';
import { CONSENT_KEY, CONSENT_VERSION, CONSENT_MAX_AGE, createStatisticsConsent, countConsentedPage, referringOrigin } from '../src/lib/statistics-consent.mjs';

const records = new Map();
const storage = { getItem: key => records.get(key) ?? null, setItem: (key, value) => records.set(key, value) };
const clock = 1800000000000;
const consent = createStatisticsConsent({ storage, enabled: true, now: () => clock });
let loads = 0;
let counts = 0;
const request = () => countConsentedPage({ consent, loadCounter: async () => { loads++; return {}; }, count: () => counts++ });

assert.equal(consent.choice(), null);
assert.equal(await request(), false);
assert.equal(loads, 0, 'No script request before consent');
consent.choose('deny');
assert.equal(await request(), false);
assert.equal(loads, 0, 'Rejecting must not load analytics');
consent.choose('allow');
assert.equal(await request(), true);
assert.equal(counts, 1);

// Withdrawal during a pending script download must prevent the count request.
let resolveDownload;
const pending = countConsentedPage({ consent, loadCounter: () => new Promise(resolve => { resolveDownload = resolve; }), count: () => counts++ });
consent.choose('deny');
resolveDownload({});
assert.equal(await pending, false);
assert.equal(counts, 1);

consent.choose('allow');
const disabled = createStatisticsConsent({ storage, enabled: false, now: () => clock });
assert.equal(disabled.allowed(), false, 'Saved consent cannot enable disabled statistics');
assert.equal(await countConsentedPage({ consent: disabled, loadCounter: () => { throw new Error('Unexpected request'); }, count: () => {} }), false);

for (const record of [
  '{broken',
  JSON.stringify({ value: 'allow', version: 'old', time: clock }),
  JSON.stringify({ value: 'allow', version: CONSENT_VERSION, time: clock - CONSENT_MAX_AGE }),
  JSON.stringify({ value: 'allow', version: CONSENT_VERSION, time: clock + 1 }),
  JSON.stringify({ value: 'yes', version: CONSENT_VERSION, time: clock }),
]) {
  storage.setItem(CONSENT_KEY, record);
  assert.equal(consent.allowed(), false, 'Invalid, stale or future-dated choices must fail closed');
}
const unavailable = createStatisticsConsent({ enabled: true, now: () => clock, storage: { getItem() { throw new Error('Blocked'); }, setItem() { throw new Error('Blocked'); } } });
assert.equal(unavailable.allowed(), false);
unavailable.choose('allow');
assert.equal(unavailable.allowed(), true);
unavailable.choose('deny');
assert.equal(unavailable.allowed(), false);

assert.equal(referringOrigin('https://example.org/private/path?email=private#secret', 'https://tomnaiser.github.io'), 'https://example.org');
assert.equal(referringOrigin('https://tomnaiser.github.io/de/', 'https://tomnaiser.github.io'), '');
assert.equal(referringOrigin('invalid', 'https://tomnaiser.github.io'), '');
assert.equal(referringOrigin('file:///private', 'https://tomnaiser.github.io'), '');
// Execute the actual shipped collector with networking intercepted. Accessing
// the screen or URL query fails this test, even if the fields are later dropped.
const source = fs.readFileSync(new URL('../public/js/goatcounter-count.js', import.meta.url), 'utf8').replaceAll('\r\n', '\n');
const provenance = JSON.parse(fs.readFileSync(new URL('../src/data/goatcounter-source.json', import.meta.url), 'utf8'));
assert.equal(createHash('sha256').update(source).digest('hex'), provenance.localSha256);
const outgoing = [];
const location = { hostname: 'tomnaiser.github.io', protocol: 'https:', pathname: '/de/', hash: '' };
Object.defineProperty(location, 'search', { get() { throw new Error('URL query must not be read'); } });
const environment = {
  goatcounter: { no_onload: true, no_events: true }, location, parent: { location },
  document: { visibilityState: 'visible', referrer: 'https://example.org/private?secret=value',
    querySelector: () => ({ dataset: { goatcounter: provenance.endpoint } }) },
  localStorage: { getItem: () => null },
  navigator: { sendBeacon: url => { outgoing.push(url); return true; } }, console,
};
environment.window = environment;
Object.defineProperty(environment, 'screen', { get() { throw new Error('Screen must not be read'); } });
vm.runInNewContext(source, environment);
assert.equal(outgoing.length, 0, 'Loading the collector must not send a count');
environment.goatcounter.count({ path: '/de/', title: '', referrer: referringOrigin(environment.document.referrer, 'https://tomnaiser.github.io') });
assert.equal(outgoing.length, 1);
const sent = new URL(outgoing[0]);
assert.equal(sent.origin + sent.pathname, provenance.endpoint);
assert.equal(sent.searchParams.get('p'), '/de/');
assert.equal(sent.searchParams.get('r'), 'https://example.org');
assert.ok(!sent.searchParams.has('s') && !sent.searchParams.has('q') && !sent.searchParams.has('t'));
assert.ok(!outgoing[0].includes('private') && !outgoing[0].includes('secret'));
console.log('Statistics checks passed: consent and withdrawal, no automatic count, expiry, disabled storage, private referrer removal, no screen or query access, and actual collector payload. All network requests were intercepted.');

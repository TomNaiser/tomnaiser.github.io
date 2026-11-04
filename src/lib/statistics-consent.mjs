export const CONSENT_VERSION = '2026-11-04-google-analytics';
export const CONSENT_KEY = 'pixel-labs-statistics';
export const CONSENT_MAX_AGE = 180 * 24 * 60 * 60 * 1000;

// Every count must pass this gate, including after an asynchronous script load.
export function createStatisticsConsent({ storage, enabled, now = Date.now }) {
  let temporaryChoice = null;

  function record() {
    let entry = temporaryChoice;
    let saved;
    try {
      if (!temporaryChoice) saved = storage.getItem(CONSENT_KEY);
    } catch { /* Keep the current-page choice when storage is inaccessible. */ }
    if (saved !== undefined) {
      try { entry = saved ? JSON.parse(saved) : null; } catch { return null; }
    }
    if (!entry || !['allow', 'deny'].includes(entry.value) ||
        !Number.isFinite(entry.time) || entry.time > now() ||
        now() - entry.time >= CONSENT_MAX_AGE) return null;
    // A previous refusal still applies. Consent to a different provider does not.
    if (entry.version !== CONSENT_VERSION && entry.value !== 'deny') return null;
    return entry;
  }

  const choice = () => record()?.value ?? null;

  function choose(value) {
    if (!['allow', 'deny'].includes(value)) throw new Error('Invalid statistics choice');
    const record = { version: CONSENT_VERSION, value, time: now() };
    try {
      storage.setItem(CONSENT_KEY, JSON.stringify(record));
      temporaryChoice = null;
    } catch { temporaryChoice = record; }
  }

  return {
    choice, choose, allowed: () => enabled && choice() === 'allow',
    expiresAt: () => {
      const entry = record();
      return entry ? entry.time + CONSENT_MAX_AGE : null;
    },
  };
}
export function referringOrigin(referrer, ownOrigin) {
  try {
    const url = new URL(referrer);
    return ['https:', 'http:'].includes(url.protocol) && url.origin !== ownOrigin ? url.origin : '';
  } catch { return ''; }
}

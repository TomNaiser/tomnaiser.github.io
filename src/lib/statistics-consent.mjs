export const CONSENT_VERSION = '2026-10-30';
export const CONSENT_KEY = 'pixel-labs-statistics';
export const CONSENT_MAX_AGE = 180 * 24 * 60 * 60 * 1000;

// Every count must pass this gate, including after an asynchronous script load.
export function createStatisticsConsent({ storage, enabled, now = Date.now }) {
  let temporaryChoice = null;

  function choice() {
    let record;
    let saved;
    try {
      saved = storage.getItem(CONSENT_KEY);
    } catch {
      record = temporaryChoice;
    }
    if (saved !== undefined) {
      try { record = saved ? JSON.parse(saved) : null; } catch { return null; }
    }
    if (!record || record.version !== CONSENT_VERSION ||
        !['allow', 'deny'].includes(record.value) ||
        !Number.isFinite(record.time) || record.time > now() ||
        now() - record.time >= CONSENT_MAX_AGE) return null;
    return record.value;
  }

  function choose(value) {
    if (!['allow', 'deny'].includes(value)) throw new Error('Invalid statistics choice');
    const record = { version: CONSENT_VERSION, value, time: now() };
    temporaryChoice = record;
    try { storage.setItem(CONSENT_KEY, JSON.stringify(record)); } catch {}
  }

  return { choice, choose, allowed: () => enabled && choice() === 'allow' };
}

export function referringOrigin(referrer, ownOrigin) {
  try {
    const url = new URL(referrer);
    return ['https:', 'http:'].includes(url.protocol) && url.origin !== ownOrigin ? url.origin : '';
  } catch { return ''; }
}

export async function countConsentedPage({ consent, loadCounter, count }) {
  if (!consent.allowed()) return false;
  const counter = await loadCounter();
  if (!consent.allowed()) return false;
  count(counter);
  return true;
}

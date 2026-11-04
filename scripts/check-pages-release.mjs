import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import collection from '../src/data/gigapan-collection.json' with { type: 'json' };
import germanTitles from '../src/data/gigapan-titles-de.json' with { type: 'json' };

const root = process.argv[2] || 'dist';
assert.deepEqual(Object.keys(germanTitles).sort(), collection.items.map(item => String(item.id)).sort(), 'Every Gigapan entry must have a German title');
assert.ok(Object.values(germanTitles).every(title => typeof title === 'string' && title.trim()), 'Empty German Gigapan title');
const origin = new URL(process.env.SITE_URL).origin;
const files = fs.readdirSync(root, { recursive: true }).filter(file => file.endsWith('.html'));
const canonicalUrls = new Set();
for (const file of files) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  assert.ok(!/https?:\/\/(localhost|127\.0\.0\.1)([:/]|\b)/i.test(html), `${file}: local address`);
  assert.ok(!/Lokaler Prototyp|Local prototype/.test(html), `${file}: prototype label`);
  assert.ok(!/noindex|nofollow/.test(html), `${file}: indexing blocked`);
  if (file !== 'index.html') {
    const canonical = html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/);
    assert.ok(canonical && new URL(canonical[1]).origin === origin, `${file}: incorrect canonical`);
    canonicalUrls.add(canonical[1]);
    const lang = file.replaceAll('\\', '/').split('/')[0];
    const privacyRoute = lang === 'de' ? '/de/datenschutz/' : '/en/privacy/';
    assert.ok(html.includes(`href="${privacyRoute}"`), `${file}: missing privacy notice`);
    assert.ok(html.includes('data-statistics-consent data-enabled="true"'), `${file}: missing consent controls`);
    assert.ok(!/<script\b[^>]*\bsrc=["'][^"']*(?:googletagmanager|google-analytics|gtag\/js)/i.test(html), `${file}: analytics script loaded before consent`);
    assert.ok(!/goatcounter|gc\.zgo\.at/i.test(html), `${file}: obsolete statistics provider`);
    if (file.replaceAll('\\', '/').endsWith(`${privacyRoute.slice(1)}index.html`)) {
      assert.ok(html.includes('data-count-page="false"'), `${file}: privacy notice must not be counted`);
    }
  }
}
for (const name of ['Archive', 'Docs', '.local', 'node_modules', 'src', '.git']) {
  assert.ok(!fs.existsSync(path.join(root, name)), `${name}: private/build sources in published artifact`);
}
assert.ok(!fs.existsSync(path.join(root, 'js/goatcounter-count.js')), 'Obsolete collector must not be published');
assert.ok(fs.readFileSync(path.join(root, 'index.html'), 'utf8').includes('url=/de/'), 'Root must open German home');
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
assert.equal(sitemapUrls.length, canonicalUrls.size, 'Sitemap must list each canonical page exactly once');
assert.deepEqual(new Set(sitemapUrls), canonicalUrls, 'Sitemap and generated canonical URLs must agree');
assert.ok(sitemap.includes('xmlns:xhtml="http://www.w3.org/1999/xhtml"'), 'Sitemap needs the language-alternate namespace');
assert.equal((sitemap.match(/hreflang="de"/g) || []).length, canonicalUrls.size, 'Each sitemap entry needs a German alternate');
assert.equal((sitemap.match(/hreflang="en"/g) || []).length, canonicalUrls.size, 'Each sitemap entry needs an English alternate');
const robots = fs.readFileSync(path.join(root, 'robots.txt'), 'utf8');
assert.ok(robots.includes(`Sitemap: ${new URL(`${process.env.BASE_PATH || '/'}sitemap.xml`, process.env.SITE_URL).href}`), 'Robots must link to the production sitemap');
assert.ok(!robots.includes('Disallow: /'), 'Published pages must be crawlable');
console.log(`Pages release: ${files.length} pages, production URLs and publication contents passed.`);

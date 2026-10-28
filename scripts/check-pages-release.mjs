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
for (const file of files) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  assert.ok(!/https?:\/\/(localhost|127\.0\.0\.1)([:/]|\b)/i.test(html), `${file}: local address`);
  assert.ok(!/Lokaler Prototyp|Local prototype/.test(html), `${file}: prototype label`);
  assert.ok(!/noindex|nofollow/.test(html), `${file}: indexing blocked`);
  if (file !== 'index.html') {
    const canonical = html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/);
    assert.ok(canonical && new URL(canonical[1]).origin === origin, `${file}: incorrect canonical`);
  }
}
for (const name of ['Archive', 'Docs', '.local', 'node_modules', 'src', '.git']) {
  assert.ok(!fs.existsSync(path.join(root, name)), `${name}: private/build sources in published artifact`);
}
assert.ok(fs.readFileSync(path.join(root, 'index.html'), 'utf8').includes('url=/de/'), 'Root must open German home');
console.log(`Pages release: ${files.length} pages, production URLs and publication contents passed.`);

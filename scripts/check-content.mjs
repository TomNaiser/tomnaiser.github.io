// Verify the generated artifact and the user's gallery invariants.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { groups, panoramas, groupItems } from '../src/data/catalog.mjs';

const root = path.resolve(process.argv[2] || 'dist');
const prefix = process.env.BASE_PATH?.replace(/\/$/, '') || '';
const failures = [];
const files = fs.readdirSync(root, { recursive: true }).filter((file) => file.endsWith('.html'));
assert.equal(new Set(panoramas.map((p) => p.id)).size, panoramas.length, 'Panorama IDs must be unique');
assert.equal(panoramas.length, 50, 'All 50 archived gallery entries should be present');
for (const g of groups) {
  const items = groupItems(g.id);
  assert.ok(items.length, `Empty group: ${g.id}`);
  assert.ok(items.every((p,i) => i === 0 || (items[i-1].date || '9999') <= (p.date || '9999')), `Chronology: ${g.id}`);
}
for (const p of panoramas) {
  assert.ok(groups.some((g) => g.id === p.groupId), `Unknown group: ${p.id}`);
  assert.ok(p.description.de && p.description.en, `Missing translation: ${p.id}`);
  if (p.image) assert.ok(fs.existsSync('public' + p.image), `Missing image: ${p.id}`);
}
const required = {'nenntmannsreuth':10,'himmelkron':2,'bindlacher-berg':2,'froettmaninger-berg':3,'zottaschen':3,'giechburg':2,'buechelstein':2};
for (const [id,count] of Object.entries(required)) assert.equal(groupItems(id).length,count,`Expected series members: ${id}`);

for (const file of files) {
  const html = fs.readFileSync(path.join(root,file),'utf8');
  if (/Thomas Naiser/i.test(html)) failures.push(`${file}: full personal name in public artifact`);
  if (/<a\b[^>]*\bhref=["']mailto:/i.test(html) || /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i.test(html)) failures.push(`${file}: email address embedded as plain text in public artifact`);
  const url = new URL(prefix + '/' + file.replace(/index\.html$/,''), 'http://localhost');
  if (/<iframe\b/i.test(html)) failures.push(`${file}: external iframe is loaded before activation`);
  if ((html.match(/class="[^"]*\bgroup-card\b/g) || []).length > 9) failures.push(`${file}: more than 9 viewpoint cards`);
  if ((html.match(/class="timeline-item"/g) || []).length > 9) failures.push(`${file}: more than 9 panorama cards`);
  if (!/<html lang="(?:de|en)"/.test(html)) failures.push(`${file}: missing page language`);
  for (const match of html.matchAll(/\b(?:href|src)="([^"<>]+)"/g)) {
    const raw = match[1].replace(/&amp;/g,'&');
    if (/^(?:mailto:|data:|javascript:)/.test(raw)) continue;
    const target = new URL(raw,url);
    if (!['localhost','127.0.0.1', ...(process.env.SITE_URL ? [new URL(process.env.SITE_URL).hostname] : [])].includes(target.hostname)) continue;
    let name = decodeURIComponent(target.pathname);
    if (prefix && !name.startsWith(prefix+'/')) { failures.push(`${file}: ignores base path: ${raw}`); continue; }
    if (prefix) name = name.slice(prefix.length);
    let destination = path.join(root,name);
    if (name.endsWith('/')) destination = path.join(destination,'index.html');
    if (!fs.existsSync(destination)) { failures.push(`${file}: missing local target ${raw}`); continue; }
    if (target.hash && destination.endsWith('.html')) {
      const fragment = decodeURIComponent(target.hash.slice(1));
      if (!fs.readFileSync(destination,'utf8').includes(`id="${fragment}"`)) failures.push(`${file}: missing anchor ${raw}`);
    }
  }
}
if (failures.length) { console.error(failures.join('\n')); process.exitCode = 1; }
else console.log(JSON.stringify({ htmlPages: files.length, panoramas: panoramas.length, viewpointGroups: groups.length, requiredSeries: required, localLinksAndAssets: 'passed', languagePairs: 'passed', noEagerIframes: 'passed', maxCardsPerPage: 'passed', noFullNameOrPlainEmail: 'passed' },null,2));

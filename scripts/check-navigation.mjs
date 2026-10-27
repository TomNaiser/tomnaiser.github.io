import fs from 'node:fs';
import assert from 'node:assert/strict';
import { panoramas, groupItems } from '../src/data/catalog.mjs';
import { gigapanCollection } from '../src/data/site-links.mjs';

const root = process.argv[2] || 'dist';
const prefix = process.env.BASE_PATH?.replace(/\/$/,'') || '';
const read = route => fs.readFileSync(`${root}/${route}/index.html`,'utf8');
const plain = html => html.replace(/<[^>]*>/g,' ').replace(/&#x([\da-f]+);/gi,(_,n)=>String.fromCodePoint(parseInt(n,16))).replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(Number(n))).replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&nbsp;/g,' ').replace(/\s+/g,' ').trim();
const routes = {de:['mechanik','elektronik','software','workflow'],en:['mechanics','electronics','software','workflow']};

for (const lang of ['de','en']) {
  const folder = lang === 'de' ? 'projekte' : 'projects';
  for (const current of routes[lang]) {
    const html = read(`${lang}/${folder}/${current}`);
    const navigation = html.match(/<nav class="project-navigation"[\s\S]*?<\/nav>/)?.[0];
    assert.ok(navigation,`Missing system navigation: ${lang}/${current}`);
    for (const target of routes[lang]) assert.ok(navigation.includes(`href="${prefix}/${lang}/${folder}/${target}/"`),`No route from ${current} to ${target}`);
    assert.ok(html.includes('class="breadcrumbs wrap"'),'Missing orientation trail');
  }
  const gallery = read(`${lang}/${lang === 'de' ? 'panoramen' : 'panoramas'}`);
  const gigapanRoute = `${lang}/${lang === 'de' ? 'panoramen' : 'panoramas'}/gigapan`;
  assert.ok(gallery.includes(`href="${prefix}/${gigapanRoute}/"`),'Local Gigapan directory must be linked from the gallery');
  const gigapan = read(gigapanRoute);
  assert.ok(gigapan.includes(gigapanCollection),'Public profile must remain linked from the directory');
  assert.equal((gigapan.match(/data-gigapan-item /g)||[]).length,99,'All public Gigapan entries must be retained');
  assert.ok(gigapan.includes('data-gigapan-search') && gigapan.includes('data-gigapan-sort'),'Gigapan search and sorting must be available');
  assert.ok(!gigapan.includes('<iframe'),'The directory must not load all panorama viewers');
  assert.ok(read(lang).includes(`href="${prefix}/${gigapanRoute}/"`),'Gigapan needs a visible homepage entry');
  const system = read(`${lang}/${folder}`);
  assert.equal((system.match(/class="system-card"/g)||[]).length,3,'All three technical areas need visible image cards');

  for (const item of panoramas) {
    const index = groupItems(item.groupId).findIndex(p=>p.id===item.id);
    const page = Math.floor(index/9)+1;
    const route = `${lang}/${lang === 'de' ? 'panoramen/serien' : 'panoramas/series'}/${item.groupId}${page>1?`/${lang==='de'?'seite':'page'}/${page}`:''}`;
    const series = plain(read(route));
    assert.ok(series.includes(plain(item.description[lang])),`Complete series caption missing: ${item.id}/${lang}`);
    const detail = plain(read(`${lang}/${lang==='de'?'panoramen/aufnahme':'panoramas/image'}/${item.id}`));
    assert.ok(detail.includes(plain(item.description[lang])),`Complete detail caption missing: ${item.id}/${lang}`);
  }
}
const fr = panoramas.find(p=>p.originalId==='Froettmanning16bit060222').description;
for (const lang of ['de','en']) for (const fact of ['400','1/400','11','500','DeepPRIME','2022']) assert.ok(fr[lang].includes(fact),`Capture detail lost: ${fact}/${lang}`);
const bu = panoramas.find(p=>p.originalId==='Buechelstein400mm290919_dehazed').description;
for (const lang of ['de','en']) for (const fact of ['220','70','Neutralhazer']) assert.ok(bu[lang].includes(fact),`Image detail lost: ${fact}/${lang}`);
assert.ok(read('de/projekte/elektronik').includes('hardware/12.webp') && read('de/projekte/elektronik').includes('hardware/14.webp'),'The electronics page needs actual schematic and electronics images');
assert.ok(read('de/').includes('?start=1#panorama-viewer'),'A panorama should open directly from the homepage');
console.log('Visitor paths passed: direct panorama links, complete captions for all 50 images in both languages, technical destinations, PCB images, breadcrumbs and Gigapan collection.');

for (const lang of ['de','en']) {
  const folder = lang === 'de' ? 'projekte' : 'projects';
  const workflow = read(`${lang}/${folder}/workflow`);
  assert.ok(workflow.includes('1/1000') && workflow.includes('DeepPRIME') && workflow.includes('dxo.com/dxo-photolab/'),'Current capture practice and RAW tool must be present');
  assert.ok(workflow.includes('LooseTileAlignment.py'),'Grid-repair tool must have a concrete link');
  assert.ok(workflow.indexOf('id="01-') < workflow.indexOf('id="02-'),'Levelling must precede camera settings');
  assert.ok(workflow.indexOf('id="02-') < workflow.indexOf('id="04-'),'Camera checks must precede RAW development');
  for (const [id,path] of [['workflow','workflow'],['hardware','panorama-system'],['software','software'],['history',lang==='de'?'mechanik':'mechanics']]) {
    const target = path === 'panorama-system' && lang === 'de' ? 'panoramasystem' : path;
    assert.ok(read(`${lang}/${folder}/${target}`).includes(`images/diagrams/${id}-${lang}-dark.svg`),`Missing ${id} diagram / ${lang}`);
    for (const theme of ['dark','light']) {
      const svg = fs.readFileSync(`${root}/images/diagrams/${id}-${lang}-${theme}.svg`,'utf8');
      assert.ok(svg.includes('<svg') && svg.includes('viewBox='),'Diagram must be a real SVG');
      assert.ok(!svg.includes('<foreignObject') && !svg.includes('<br>'),'Diagram must use standalone SVG text');
    }
  }
  const electronics = plain(read(`${lang}/${folder}/${lang==='de'?'elektronik':'electronics'}`));
  for (const value of ['Arduino Nano R4','RA4M1','48 MHz','32 KB','256 KB']) assert.ok(electronics.includes(value),`Controller comparison detail missing: ${value}`);
}
assert.ok(!fs.existsSync(`${root}/diagram-workbench/index.html`),'Temporary rendering page must not be published');
console.log('Editorial checks passed: 99 Gigapan entries, capture-first workflow, linked tools, Nano R4 comparison and all four bilingual diagrams.');

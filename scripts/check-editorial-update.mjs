import fs from 'node:fs';
import assert from 'node:assert/strict';
import { groups, themes, regions, panoramas } from '../src/data/catalog.mjs';

const root=process.argv[2] || 'dist';
const read=path=>fs.readFileSync(`${root}/${path}/index.html`,'utf8');
const plain=html=>html.replace(/<!--[\s\S]*?-->/g,'').replace(/<[^>]*>/g,' ').replace(/\s+/g,' ');
for(const lang of ['de','en']) {
  const project=lang==='de'?'projekte':'projects';
  const photo=lang==='de'?'fotografie':'photography';
  const gallery=lang==='de'?'panoramen':'panoramas';
  const workflow=plain(read(`${lang}/${project}/workflow`));
  for(const fact of ['PhotoLab 9','DeepPRIME','1/1000','1/600','13900','Z790-Creator','64 GB','RTX 3090','BigTIFF','PackBits','KRO']) assert.ok(workflow.includes(fact),`Missing workflow detail: ${fact}/${lang}`);
  assert.ok(!/private details|private Bild|private Details|unkenntlich/i.test(workflow),'Removed topic must not remain in visitor copy');
  assert.ok(!/Historisches Beispiel|Historische(s|r)? Beispiel|historical 2023 example|Notizen von 2023/i.test(workflow),'Use visitor-facing capture examples');
  const electronics=plain(read(`${lang}/${project}/${lang==='de'?'elektronik':'electronics'}`));
  for(const fact of ['KiCad','V5','V6','BLE',lang==='de'?'3,3':'3.3']) assert.ok(electronics.includes(fact),`Missing planned electronics detail: ${fact}`);
  assert.ok(read(`${lang}/${project}/3d-printing`).includes('Prusa i3 MK3'));
  const astronomy=read(`${lang}/${photo}/${lang==='de'?'astronomie':'astronomy'}`);
  assert.ok(astronomy.includes('https://www.youtube.com/watch?v=T7u88pwCMZ4'),'The user-specified ISS video must be linked');
  const overview=read(`${lang}/${photo}`);
  assert.ok(!overview.includes('sites.google.com'),'Photography navigation must stay local');
  for(const [route,folder,count] of [[lang==='de'?'landschaft-reisen':'landscapes-travel','landscapes',9],[lang==='de'?'drohnenfotografie':'aerial-photography','aerial',5]]) {
    const html=read(`${lang}/${photo}/${route}`);
    assert.ok(!html.includes('sites.google.com'),'Imported photo collections must not send visitors back to Google Sites');
    assert.equal((html.match(new RegExp(`<img[^>]+src="[^"]*/images/articles/${folder}/`,'g'))||[]).length,count,`All ${folder} images must be present`);
    assert.ok(html.includes('class="project-navigation photo-navigation"'),'Photo collections need cross-navigation');
  }
  const galleryHtml=read(`${lang}/${gallery}`);
  assert.ok(galleryHtml.indexOf('id="orte"')<galleryHtml.indexOf('class="gigapan-callout"'),'Gigapan callout must follow the primary gallery');
  assert.ok(galleryHtml.indexOf(`label="${lang==='de'?'Panorama-Galerie':'Panorama gallery'}"`)<galleryHtml.indexOf('label="Gigapan"'),'Viewpoint selection must list AWS first');
  for(const [kind,collections] of [['themen',themes],['orte',regions]]) for(const collection of collections) {
    const relevant=groups.filter(g=>kind==='themen'?g.themes.includes(collection.id):g.region===collection.id);
    let seenGigapan=false;
    for(let page=1;page<=Math.ceil(relevant.length/9);page++) {
      const part=kind==='themen' ? `${lang==='de'?'themen':'themes'}/${collection.slug[lang]}` : `${lang==='de'?'orte':'places'}/${collection.id}`;
      const html=read(`${lang}/${gallery}/${part}${page>1?`/${lang==='de'?'seite':'page'}/${page}`:''}`);
      for(const card of html.split('<article class="group-card">').slice(1)) {
        const markup=card.slice(0,card.indexOf('</article>'));
        const external=markup.includes('href="https://gigapan.com');
        if(external) seenGigapan=true;
        else assert.ok(!seenGigapan,`AWS entry follows Gigapan in ${collection.id}/${lang}`);
      }
    }
  }
  for(const theme of ['dark','light']) {
    const svg=fs.readFileSync(`${root}/images/diagrams/workflow-${lang}-${theme}.svg`,'utf8');
    assert.ok(!/private|privat|unkenntlich/i.test(svg),'Removed diagram node must not remain in SVG output');
    assert.ok(plain(svg).includes('PhotoLab 9'),'Workflow diagram must reflect current software');
  }
}
assert.equal(panoramas.length,50,'Existing gallery entries must be retained');
console.log('Editorial update passed: AWS before Gigapan, current workflow/equipment, planned board revisions, local photo collections and the correct ISS video.');

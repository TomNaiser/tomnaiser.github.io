import fs from 'node:fs';
import { panoramas } from '../src/data/catalog.mjs';

const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };
const root = process.argv[2] || 'dist';
const artifact = (name) => fs.existsSync(`${root}/${name}/index.html`) ? fs.readFileSync(`${root}/${name}/index.html`, 'utf8') : '';
check(panoramas.every(p => p.image?.startsWith('/images/posters/')), 'Nicht alle 50 Panoramen haben eine scharfe Web-Vorschau.');
check(['Fichtelgebirge181025','Fichtelgebirge271224V2'].every(id => panoramas.find(p=>p.originalId===id)?.groupId === 'nenntmannsreuth'), 'Die jüngsten Fichtelgebirgsansichten sind von der Nenntmannsreuth-Serie getrennt.');
check(artifact('de/projekte/mechanik').includes('<figure'), 'Lokale ausführliche Mechanikseite mit Bildern fehlt.');
check(artifact('de/fotografie/astronomie').includes('M51'), 'Lokale Astronomiebeschreibung fehlt.');
check(artifact('de/wissenschaft').includes('Microarray'), 'Lokale wissenschaftliche Arbeiten fehlen.');
const workflow = artifact('de/projekte/workflow');
check(['1/600','Capture One','ClearView','PackBits','RTX 3090','Kalibrier'].every(term=>workflow.includes(term)), 'Die ausführlichen Workflow-Details sind nicht vollständig übernommen.');
check(/class="home-link"/.test(artifact('de/')), 'Expliziter Home-Link fehlt.');
check(artifact('de/').includes("Tom&#39;s Pixel Labs") || artifact('de/').includes("Tom's Pixel Labs"), 'Die Marke muss Tom\'s Pixel Labs heißen.');
for (const [route,word] of [['en/projects/mechanics','AS5048B'],['en/photography/astronomy','M51'],['en/science','Microarray'],['en/projects/workflow','PackBits']]) check(artifact(route).includes(word),`Englische Detailseite unvollständig: ${route}`);
if(failures.length){console.error(failures.map(message=>'FEHLER: '+message).join('\n'));process.exitCode=1;}
else console.log('Alle gemeldeten Problembereiche geprüft: Vorschauen, Gruppierung, Mechanik, Workflow, Astronomie, Wissenschaft und Home-Link.');

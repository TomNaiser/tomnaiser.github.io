import fs from 'node:fs';
import source from './source-panoramas.json' with { type: 'json' };
import previewSources from './preview-sources.json' with { type: 'json' };
import captions from './panorama-captions.json' with { type: 'json' };

const pair = (de, en) => ({ de, en });
export const themes = [
  { id: 'mountains', slug: pair('berge-fernsicht', 'mountains-distant-views'), title: pair('Berge & Fernsicht', 'Mountains & distant views'), description: pair('Über Gipfel, Täler und den Horizont hinaus.', 'Across summits, valleys and far beyond the horizon.'), image: 'Hochries-Panorama1' },
  { id: 'cities', slug: pair('staedte-architektur', 'cities-architecture'), title: pair('Städte & Architektur', 'Cities & architecture'), description: pair('Vertraute Orte aus einer anderen Perspektive.', 'Familiar places from a different perspective.'), image: 'Froettmanning16bit060222' },
  { id: 'water', slug: pair('seen-wasser', 'lakes-water'), title: pair('Seen & Wasser', 'Lakes & water'), description: pair('Weite Wasserflächen und besondere Lichtstimmungen.', 'Open water and remarkable moments of light.'), image: 'TuerkenfeldOktober21_f200' },
  { id: 'nature', slug: pair('natur-jahreszeiten', 'nature-seasons'), title: pair('Natur & Jahreszeiten', 'Nature & seasons'), description: pair('Ein Ausblick. Immer wieder ein anderes Bild.', 'One view. A different picture every time.'), image: 'Nenntmannsreuth011023' },
];
export const regions = [
  { id: 'franconia', title: pair('Franken & Fichtelgebirge', 'Franconia & Fichtel Mountains') },
  { id: 'munich', title: pair('München & Umland', 'Munich & surrounding area') },
  { id: 'alps', title: pair('Alpen & Voralpenland', 'Alps & Alpine foothills') },
  { id: 'forest', title: pair('Bayerischer Wald', 'Bavarian Forest') },
  { id: 'swabia', title: pair('Augsburg & Umgebung', 'Augsburg & surrounding area') },
];
const group = (id, de, en, directionDE, directionEN, region, topicIds, cover, descriptionDE, descriptionEN) => ({ id, title: pair(de, en), direction: pair(directionDE, directionEN), region, themes: topicIds, cover, description: pair(descriptionDE, descriptionEN) });
export const groups = [
  group('nenntmannsreuth', 'Nenntmannsreuth', 'Nenntmannsreuth', 'Blick ins Fichtelgebirge', 'Looking towards the Fichtel Mountains', 'franconia', ['mountains', 'nature'], 'Nenntmannsreuth011023', 'Die Höhenzüge des Fichtelgebirges bei wechselndem Licht und im Lauf der Jahreszeiten. Acht Aufnahmen zeigen diesen Ausblick; ein 360°-Rundblick im Hof und eine weitere Herbstansicht ergänzen die Serie mit gekennzeichneter Blickrichtung.', 'The ridges of the Fichtel Mountains in changing light and through the seasons. Eight panoramas revisit this view; a 360° courtyard panorama and another autumn view complete the series with their directions labelled.'),
  group('himmelkron', 'Oberhalb Himmelkron', 'Above Himmelkron', 'Blick aufs Fichtelgebirge', 'Towards the Fichtel Mountains', 'franconia', ['mountains', 'nature'], 'Himmelkron170923', 'Zwei Septemberblicke, zwei Jahre auseinander. Die Aufnahmen westlich von Himmelkron bleiben hier als zusammengehörige Serie erhalten.', 'Two September views, two years apart. The panoramas west of Himmelkron stay together as one series.'),
  group('bindlacher-berg', 'Bindlacher Berg', 'Bindlacher Berg', 'Bayreuth im Blick', 'Overlooking Bayreuth', 'franconia', ['cities', 'nature'], 'Bayreuth040923b', 'Bayreuth und seine Umgebung vom Bindlacher Berg. Ein wiederkehrender Blick auf die Stadt und die Landschaft dahinter.', 'Bayreuth and its surroundings from Bindlacher Berg. A recurring view of the city and the landscape beyond.'),
  group('froettmaninger-berg', 'Fröttmaninger Berg', 'Fröttmaninger Berg', 'München & die Alpen', 'Munich & the Alps', 'munich', ['cities', 'mountains'], 'Froettmanning16bit060222', 'München, die Alpenkette und ein weiter Blick nach Norden. Die verschiedenen Blickrichtungen sind innerhalb dieses Standorts gekennzeichnet.', 'Munich, the Alpine skyline and a wide view to the north. The different directions are labelled within this viewpoint series.'),
  group('zottaschen', 'Zottaschen', 'Zottaschen', 'Über Bad Berneck nach Westen', 'West above Bad Berneck', 'franconia', ['mountains', 'nature'], 'Zottaschen191025V3', 'Ein wiederkehrender Standort oberhalb von Bad Berneck. Drei Aufnahmen aus den Jahren 2019, 2022 und 2025 zeigen den Wandel von Licht und Landschaft.', 'A recurring viewpoint above Bad Berneck. Three panoramas from 2019, 2022 and 2025 capture changes in light and landscape.'),
  group('giechburg', 'Giechburg', 'Giechburg Castle', 'Bamberg & das Umland', 'Bamberg & its surroundings', 'franconia', ['cities', 'nature'], 'Giechburg061024', 'Der Blick von der Giechburg reicht weit über das Bamberger Land. Die Ansichten von 2018 und 2024 stehen hier zusammen.', 'The view from Giechburg Castle stretches across the Bamberg countryside. The 2018 and 2024 panoramas are collected here.'),
  group('buechelstein', 'Büchelstein', 'Büchelstein', 'Vom Bayerischen Wald zu den Alpen', 'From the Bavarian Forest to the Alps', 'forest', ['mountains', 'nature'], 'Buechelstein400mm290919_dehazed', 'Zwei Aufnahmen an einem Septembermorgen. Mit dem wechselnden Licht werden weit entfernte Details bis hin zur Zugspitze sichtbar.', 'Two panoramas on a September morning. Changing light reveals distant details, reaching as far as the Zugspitze.'),
  group('hochries-gipfel', 'Hochries · Gipfel', 'Hochries · summit', 'Das bayerische Voralpenland', 'The Bavarian Alpine foothills', 'alps', ['mountains', 'nature'], 'Hochries-Panorama1', 'Vom Gipfel des Hochries öffnet sich der Blick auf das bayerische Voralpenland. Die Gipfelaufnahme bleibt von den Standorten am Hang getrennt.', 'The summit of Hochries opens up a view across the Bavarian Alpine foothills. This panorama is kept separate from the viewpoints on the slope.'),
  group('hochries-seitenalm', 'Hochries · Seitenalm', 'Hochries · Seitenalm', 'Oberhalb der Seitenalm', 'Above Seitenalm', 'alps', ['mountains', 'nature'], 'Hochries_auf_halber_Hoehe', 'Ein weiter Blick vom Hang oberhalb der Seitenalm. Die genaue Übereinstimmung mit dem Standort von 2023 ist noch offen.', 'An expansive view from the slope above Seitenalm. Whether this matches the 2023 viewpoint remains to be confirmed.'),
  group('hochries-hang', 'Hochries · Nordhang', 'Hochries · northern slope', 'Rosenheim, München & Chiemsee', 'Rosenheim, Munich & Lake Chiemsee', 'alps', ['mountains', 'nature'], 'HochriesPanorama', 'Eine Aufnahme von November 2023, etwa auf halber Höhe. Ein gemeinsamer Berg bedeutet hier nicht automatisch denselben Standort.', 'A panorama from November 2023, roughly halfway up the mountain. The same mountain does not necessarily mean the same viewpoint.'),
  group('goldberg', 'Goldberg', 'Goldberg', 'Bayreuth bei Goldkronach', 'Bayreuth from Goldkronach', 'franconia', ['cities', 'mountains'], 'Goldberg090619_f400', 'Bayreuth und Umgebung, vom Goldberg bei Goldkronach aus gesehen.', 'Bayreuth and its surroundings, seen from Goldberg near Goldkronach.'),
  group('schneeberg', 'Schneeberg', 'Schneeberg', 'Rundblick übers Fichtelgebirge', 'Across the Fichtel Mountains', 'franconia', ['mountains', 'nature'], 'Schneeberg050619_f135', 'Ein Rundblick vom höchsten Berg des Fichtelgebirges.', 'A panoramic view from the summit of Schneeberg.'),
  group('pressecker-knock', 'Pressecker Knock', 'Pressecker Knock', 'Frankenwald & Fichtelgebirge', 'Franconian Forest & Fichtel Mountains', 'franconia', ['mountains', 'nature'], 'PresseckerKnockF200ProcessedV4', 'Ein 360°-Blick vom Aussichtsturm, aufgenommen im August 2025.', 'A 360° view from the observation tower, captured in August 2025.'),
  group('puchheim', 'Puchheim', 'Puchheim', 'Blick auf Germering', 'Looking towards Germering', 'munich', ['cities'], 'Germering180619', 'Germering eine Woche nach dem Hagelsturm im Juni 2019.', 'Germering one week after the June 2019 hailstorm.'),
  group('tegelberg', 'Tegelberg', 'Tegelberg', 'Blick auf den Forggensee', 'Looking towards Lake Forggensee', 'alps', ['mountains', 'water'], 'Tegelberg_dehazed', 'Der Forggensee vom Tegelberg aus gesehen.', 'Lake Forggensee seen from Tegelberg.'),
  group('kreuzholzhausen', 'Kreuzholzhausen', 'Kreuzholzhausen', 'München & Alpenkette', 'Munich & the Alpine skyline', 'munich', ['cities', 'mountains'], 'Kreuzholzhausen_f400', 'Fernsicht, Luftspiegelungen und ziehende Vogelschwärme im Oktober 2019.', 'Distant views, atmospheric mirages and migrating birds in October 2019.'),
  group('olympiapark-sued', 'Olympiapark · Sonnenaufgang', 'Olympic Park · sunrise', 'Morgenlicht über München', 'Morning light over Munich', 'munich', ['cities'], 'Olyberg_Sued_f200', 'Sonnenaufgang über dem Olympiapark. Der genaue Standortabgleich mit der zweiten Ansicht ist noch offen.', 'Sunrise over Olympic Park. Whether this shares the second panorama’s exact viewpoint remains to be confirmed.'),
  group('olympiapark-nordwest', 'Olympiapark · Nordwest', 'Olympic Park · northwest', 'München im Oktober', 'Munich in October', 'munich', ['cities'], 'OlympiabergNordwest', 'Eine weitere Ansicht des Olympiaparks im Oktober 2019; bis zum Standortabgleich als eigene Ansicht geführt.', 'Another Olympic Park panorama from October 2019, kept separate until the exact viewpoint is verified.'),
  group('fischteich', 'Fischteich in Oberfranken', 'A pond in Upper Franconia', 'Am Wasser', 'By the water', 'franconia', ['water', 'nature'], 'Fischteichf135', 'Eine ruhige Wasserlandschaft in Oberfranken.', 'A quiet waterscape in Upper Franconia.'),
  group('diessen', 'Dießen', 'Dießen', 'Über den Ammersee', 'Across Lake Ammersee', 'alps', ['water', 'mountains'], 'DiessenAussichtsturm_v2', 'Ein Blick vom Aussichtsturm in Dießen über den Ammersee.', 'A view across Lake Ammersee from the observation tower in Dießen.'),
  group('raisting', 'Raisting', 'Raisting', 'Die Erdfunkstelle', 'The earth station', 'alps', ['cities'], 'Raisting360v4', 'Die Erdfunkstelle Raisting in einer weiten Landschaft.', 'Raisting Earth Station in its expansive landscape.'),
  group('jaudesberg', 'Jaudesberg', 'Jaudesberg', 'Blick auf den Ammersee', 'Looking towards Lake Ammersee', 'alps', ['water', 'nature'], 'Jaudesberg2021', 'Eine weitere Perspektive auf den Ammersee aus dem Jahr 2021.', 'A different perspective on Lake Ammersee from 2021.'),
  group('goessenreuth', 'Oberhalb Gössenreuth', 'Above Gössenreuth', 'Das Weismaintal', 'The Weismain Valley', 'franconia', ['mountains', 'nature'], 'Goessenreuth110824', 'Der Blick ins Weismaintal, aufgenommen 2024.', 'A view over the Weismain Valley, captured in 2024.'),
  group('sophienberg', 'Sophienberg', 'Sophienberg', 'Blick auf Bayreuth', 'Overlooking Bayreuth', 'franconia', ['cities', 'mountains'], 'BayreuthVomSophienberg190921', 'Bayreuth vom Sophienberg im September 2021.', 'Bayreuth from Sophienberg in September 2021.'),
  group('neufahrn', 'Nördlich von Neufahrn', 'North of Neufahrn', 'München am Horizont', 'Munich on the horizon', 'munich', ['cities', 'mountains'], 'Massenhausen250921ProcessedPTGUI11', 'Die Münchner Skyline aus nördlicher Richtung.', 'The Munich skyline viewed from the north.'),
  group('tuerkenfeld', 'Türkenfeld', 'Türkenfeld', 'Sonnenaufgang am Ammersee', 'Sunrise at Lake Ammersee', 'alps', ['water', 'nature'], 'TuerkenfeldOktober21_f200', 'Ein früher Morgen am Ammersee im Oktober 2021.', 'An early morning by Lake Ammersee in October 2021.'),
  group('eichelberg', 'Eichelberg', 'Eichelberg', 'Blick auf Bayreuth', 'Looking towards Bayreuth', 'franconia', ['cities'], 'Bayreuth160422', 'Bayreuth vom Eichelberg im April 2022.', 'Bayreuth from Eichelberg in April 2022.'),
  group('hochstaufen', 'Hochstaufen', 'Hochstaufen', 'Salzburg bis München', 'From Salzburg to Munich', 'alps', ['mountains'], 'Hochstaufenv20', 'Salzburg, Bayerischer Wald, Chiemsee und München in einem Panorama aus rund 2.500 Einzelbildern.', 'Salzburg, the Bavarian Forest, Lake Chiemsee and Munich in a panorama assembled from around 2,500 photographs.'),
  group('hoernle', 'Hörnle', 'Hörnle', 'Seen & Alpenvorland', 'Lakes & Alpine foothills', 'alps', ['mountains', 'water'], 'Hoernle070924', 'Murnau, Staffelsee, Starnberger See, München und Augsburg vom Hörnle.', 'Murnau, Lake Staffelsee, Lake Starnberg, Munich and Augsburg from Hörnle.'),
  group('alling', 'Oberhalb Alling', 'Above Alling', 'Die Münchner Skyline', 'The Munich skyline', 'munich', ['cities'], 'Alling290924', 'Die Münchner Skyline in fast 20 Kilometern Entfernung.', 'The Munich skyline from almost 20 kilometres away.'),
  group('augsburg', 'Augsburg', 'Augsburg', 'Stadtpanorama', 'City panorama', 'swabia', ['cities'], 'gigapan-208257', 'Eine Stadtansicht aus der bestehenden Gigapan-Sammlung.', 'A city panorama from the existing Gigapan collection.'),
  group('neubuerg', 'Neubürg', 'Neubürg', 'Mistelgau, Bayreuth & Fichtelgebirge', 'Mistelgau, Bayreuth & Fichtel Mountains', 'franconia', ['mountains', 'cities'], 'gigapan-208416', 'Ein weiter Blick von der Neubürg.', 'An expansive view from Neubürg.'),
  group('hirschberg', 'Hirschberg', 'Hirschberg', 'Blick in Richtung Raisting', 'Looking towards Raisting', 'alps', ['mountains'], 'gigapan-207566', 'Eine weitere Ansicht aus der bestehenden Gigapan-Sammlung.', 'Another view from the existing Gigapan collection.'),
];

// Dates follow the original captions, not numbers embedded in filenames.
const rows = [
  ['HochriesPanorama', 'hochries-hang', '2023-11'], ['Hochries-Panorama1', 'hochries-gipfel', '2024-09'], ['Hochries_auf_halber_Hoehe', 'hochries-seitenalm', '2024-09'],
  ['Goldberg090619_f400', 'goldberg', '2019-06'], ['Fichtelgebirge270619', 'nenntmannsreuth', '2019-06'], ['Fichtelgebirge010819', 'nenntmannsreuth', '2019-08-01'],
  ['NenntmannsreuthJuli2020', 'nenntmannsreuth', '2020-07-31'], ['Nenntmannsreuth011023', 'nenntmannsreuth', '2023-10-01'], ['Fichtelgebirge171123', 'nenntmannsreuth', '2023-11-17'],
  ['Fichtelgebirge090626mitDampflokV3', 'nenntmannsreuth', '2025'], ['Fichtelgebirge181025', 'nenntmannsreuth', '2025-10-18'], ['Fichtelgebirge271224V2', 'nenntmannsreuth', '2025-01'],
  ['UeberBadBerneck010819', 'zottaschen', '2019-08-01'], ['Maintal_030722', 'zottaschen', '2022-07'], ['Zottaschen191025V3', 'zottaschen', '2025-10'],
  ['Schneeberg050619_f135', 'schneeberg', '2019-07'], ['PresseckerKnockF200ProcessedV4', 'pressecker-knock', '2025-08'], ['Germering180619', 'puchheim', '2019-06'],
  ['Tegelberg_dehazed', 'tegelberg', '2019-09'], ['Buechelstein400mm290919', 'buechelstein', '2019-09'], ['Buechelstein400mm290919_dehazed', 'buechelstein', '2019-09'],
  ['Kreuzholzhausen_f400', 'kreuzholzhausen', '2019-10'], ['Olyberg_Sued_f200', 'olympiapark-sued', '2019-10'], ['OlympiabergNordwest', 'olympiapark-nordwest', '2019-10'],
  ['Fischteichf135', 'fischteich', null], ['Nenntmannsreuth_Hof360', 'nenntmannsreuth', '2019', '360°-Rundblick im Hof', '360° courtyard view'], ['Nenntmannsreuthf400', 'nenntmannsreuth', '2019', 'Herbstlandschaft · weiterer Blickausschnitt', 'Autumn landscape · another direction'],
  ['DiessenAussichtsturm_v2', 'diessen', '2019-11'], ['Raisting360v4', 'raisting', '2019-11'], ['Jaudesberg2021', 'jaudesberg', '2021'],
  ['Himmelkron050921', 'himmelkron', '2021-09'], ['Himmelkron170923', 'himmelkron', '2023-09'], ['Goessenreuth110824', 'goessenreuth', '2024-09'],
  ['BindlacherBerg130821', 'bindlacher-berg', '2021-08'], ['Bayreuth040923b', 'bindlacher-berg', '2023-09'], ['BayreuthVomSophienberg190921', 'sophienberg', '2021-09'],
  ['Massenhausen250921ProcessedPTGUI11', 'neufahrn', '2021-09'], ['TuerkenfeldOktober21_f200', 'tuerkenfeld', '2021-10'], ['Froettmanning16bit060222', 'froettmaninger-berg', '2022-02'],
  ['FroettmaningerBergBlickSued', 'froettmaninger-berg', '2023-11', 'Süden', 'South'], ['FroettmaningerBergBlickNord', 'froettmaninger-berg', '2023-11', 'Norden', 'North'],
  ['Bayreuth160422', 'eichelberg', '2022-04'], ['Hochstaufenv20', 'hochstaufen', '2014'], ['Hoernle070924', 'hoernle', '2024-09'], ['Alling290924', 'alling', '2024-10'],
  ['BambergVonDerGiechburg2018', 'giechburg', '2018'], ['Giechburg061024', 'giechburg', '2024-10'],
  ['gigapan-208257', 'augsburg', null], ['gigapan-208416', 'neubuerg', null], ['gigapan-207566', 'hirschberg', null],
];
export function sourceId(url) { return url.includes('gigapan.com') ? 'gigapan-' + url.split('/').at(-1) : url.split('/').at(-2); }
export function imageFor(id) {
  if (fs.existsSync(`public/images/posters/${id}.webp`)) return `/images/posters/${id}.webp`;
  return previewSources.find((entry) => sourceId(entry.viewer) === id && entry.status === 'saved')?.file || null;
}
export const panoramas = rows.map(([originalId, groupId, date, directionDE, directionEN]) => {
  const original = source.find((entry) => sourceId(entry.url) === originalId);
  if (!original) throw new Error(`Missing panorama source: ${originalId}`);
  const parent = groups.find((entry) => entry.id === groupId);
  const id = originalId.toLowerCase().replace(/[^a-z0-9-]+/g, '-');
  const additions = {
    Fichtelgebirge181025: 'A view of the Fichtel Mountains, captured on 18 October 2025.',
    Zottaschen191025V3: 'A view from Zottaschen above Bad Berneck in October 2025.',
  };
  const cleanCaption = (text) => text?.replace(/\s+/g, ' ').replace(/\s+([,.])/g,'$1').replace(/([.!?])(?=[A-ZÄÖÜ])/g,'$1 ').replace(/Hochriess/g,'Hochries').replace(/Jun e/g,'June').replace(/Jul y/g,'July').replace(/O c tober/g,'October').replace(/Sepember/g,'September').replace(/B ayreuth/g,'Bayreuth').replace(/Fis h/g,'Fish').replace(/beh ind/g,'behind').trim();
  return { id, originalId, groupId, date, direction: directionDE ? pair(directionDE, directionEN) : null, description: pair(captions[originalId]?.de || cleanCaption(original.de), captions[originalId]?.en || cleanCaption(original.en || additions[originalId])), sourceDescription: pair(original.de, original.en), url: original.url, image: imageFor(originalId), title: parent.title };
});
export const groupItems = (id) => panoramas.filter((entry) => entry.groupId === id).sort((a, b) => (a.date || '9999').localeCompare(b.date || '9999'));
export const isGigapanGroup = (group) => groupItems(group.id).every(item => item.url.includes('gigapan.com'));
export const compareGroups = (lang) => (a,b) => Number(isGigapanGroup(a))-Number(isGigapanGroup(b)) || a.title[lang].localeCompare(b.title[lang],lang);
export const groupImage = (g) => imageFor(g.cover) || groupItems(g.id).find((item) => item.image)?.image || null;
export const dateLabel = (value, lang) => {
  if (!value) return lang === 'de' ? 'Datum offen' : 'Date not recorded';
  const options = value.length === 4 ? { year: 'numeric' } : value.length === 7 ? { year: 'numeric', month: 'long' } : { year: 'numeric', month: 'long', day: 'numeric' };
  return new Intl.DateTimeFormat(lang === 'de' ? 'de-DE' : 'en-GB', { ...options, timeZone: 'UTC' }).format(new Date(value.padEnd(10, '-01').slice(0, 10)));
};
export const yearsLabel = (g) => {
  const years = [...new Set(groupItems(g.id).flatMap((entry) => entry.date ? [entry.date.slice(0, 4)] : []))];
  return years.length > 1 ? `${years[0]}–${years.at(-1)}` : years[0] || '—';
};
export const featuredGroups = ['froettmaninger-berg', 'himmelkron', 'nenntmannsreuth'].map((id) => groups.find((g) => g.id === id));

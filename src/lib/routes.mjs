import { groups, panoramas, themes, regions, groupItems } from '../data/catalog.mjs';

export const languages = ['de', 'en'];
export const basePath = (path = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
const sections = {
  gallery: { de: 'panoramen', en: 'panoramas' }, projects: { de: 'projekte', en: 'projects' },
  photography: { de: 'fotografie', en: 'photography' }, science: { de: 'wissenschaft', en: 'science' }, about: { de: 'ueber-mich', en: 'about' }, contact: { de: 'kontakt', en: 'contact' }, privacy: { de: 'datenschutz', en: 'privacy' },
};
export function route(page, lang) {
  let path = '';
  if (page.kind === 'home') return `${lang}/`;
  if (sections[page.kind]) path = sections[page.kind][lang];
  if (page.kind === 'gigapan') path = `${sections.gallery[lang]}/gigapan`;
  if (page.kind === 'theme') path = `${sections.gallery[lang]}/${lang === 'de' ? 'themen' : 'themes'}/${themes.find((x) => x.id === page.id).slug[lang]}`;
  if (page.kind === 'region') path = `${sections.gallery[lang]}/${lang === 'de' ? 'orte' : 'places'}/${page.id}`;
  if (page.kind === 'series') path = `${sections.gallery[lang]}/${lang === 'de' ? 'serien' : 'series'}/${page.id}`;
  if (page.kind === 'panorama') path = `${sections.gallery[lang]}/${lang === 'de' ? 'aufnahme' : 'image'}/${page.id}`;
  if (page.kind === 'project') {
    const slug = { 'panorama-system': { de:'panoramasystem', en:'panorama-system' }, mechanics: { de:'mechanik', en:'mechanics' }, electronics: { de:'elektronik', en:'electronics' } };
    path = `${sections.projects[lang]}/${slug[page.id]?.[lang] || page.id}`;
  }
  if (page.kind === 'astronomy') path = `${sections.photography[lang]}/${lang === 'de' ? 'astronomie' : 'astronomy'}`;
  if (page.kind === 'landscapes') path = `${sections.photography[lang]}/${lang === 'de' ? 'landschaft-reisen' : 'landscapes-travel'}`;
  if (page.kind === 'aerial') path = `${sections.photography[lang]}/${lang === 'de' ? 'drohnenfotografie' : 'aerial-photography'}`;
  if (page.page > 1) path += `/${lang === 'de' ? 'seite' : 'page'}/${page.page}`;
  return `${lang}/${path}/`;
}
export const href = (page, lang) => basePath(route(page, lang));
export const panoramaOpenHref = (panorama, lang) => panorama.url.includes('gigapan.com') ? panorama.url.replace(/^http:/,'https:') : `${href({kind:'panorama',id:panorama.id},lang)}?start=1#panorama-viewer`;
const pagesOf = (kind, id, count) => Array.from({ length: Math.max(1, Math.ceil(count / 9)) }, (_, i) => ({ kind, id, page: i + 1 }));
export const pages = [
  ...['home', 'gallery', 'gigapan', 'projects', 'photography', 'astronomy', 'landscapes', 'aerial', 'science', 'about', 'contact', 'privacy'].map((kind) => ({ kind })),
  ...themes.flatMap((theme) => pagesOf('theme', theme.id, groups.filter((g) => g.themes.includes(theme.id)).length)),
  ...regions.flatMap((region) => pagesOf('region', region.id, groups.filter((g) => g.region === region.id).length)),
  ...groups.flatMap((group) => pagesOf('series', group.id, groupItems(group.id).length)),
  ...panoramas.map((panorama) => ({ kind: 'panorama', id: panorama.id })),
  ...['panorama-system', 'mechanics', 'electronics', 'software', 'workflow', 'beehive-scale', '3d-printing'].map((id) => ({ kind: 'project', id })),
];
export const ui = {
  de: { privacy: 'Datenschutz', gallery: 'Panoramen', projects: 'Hardware & Software', workflow: 'Workflow', photography: 'Fotografie', about: 'Über mich', contact: 'Kontakt', home: 'Startseite', series: 'Bildserie ansehen', image: 'Panorama entdecken', all: 'Alle Panoramen', back: 'Zurück', previous: 'Zurück', next: 'Weiter', view: 'Aufnahmen', region: 'Region', topic: 'Thema', themeSwitch: 'Helle oder dunkle Darstellung umschalten', menu: 'Menü', missing: 'Vorschau noch nicht verfügbar', detail: 'Details entdecken', source: 'Ursprüngliche Website', prototype: 'Lokaler Prototyp · Oktober 2026' },
  en: { privacy: 'Privacy', gallery: 'Panoramas', projects: 'Hardware & software', workflow: 'Workflow', photography: 'Photography', about: 'About', contact: 'Contact', home: 'Home', series: 'Explore the series', image: 'Explore panorama', all: 'All panoramas', back: 'Back', previous: 'Previous', next: 'Next', view: 'images', region: 'Region', topic: 'Theme', themeSwitch: 'Switch between light and dark appearance', menu: 'Menu', missing: 'Preview not yet available', detail: 'Explore the details', source: 'Original website', prototype: 'Local prototype · October 2026' },
};

export const projectSections = [
  { id: 'panorama-system', de: 'Überblick', en: 'Overview' },
  { id: 'mechanics', de: 'Mechanik & Kamerakopf', en: 'Mechanics & camera head' },
  { id: 'electronics', de: 'Elektronik & PanoBoard', en: 'Electronics & PanoBoard' },
  { id: 'software', de: 'Software & Steuerung', en: 'Software & control' },
  { id: 'workflow', de: 'Workflow', en: 'Workflow' },
];
export const isSystemPage = (page) => page.kind === 'projects' || (page.kind === 'project' && (page.id === 'capture-preparation' || projectSections.some((section) => section.id === page.id)));

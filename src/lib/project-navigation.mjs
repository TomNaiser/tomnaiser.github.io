export const projectSections = [
  { id: 'panorama-system', de: 'Überblick', en: 'Overview' },
  { id: 'mechanics', de: 'Mechanik & Kamerakopf', en: 'Mechanics & camera head' },
  { id: 'electronics', de: 'Elektronik & Platine', en: 'Electronics & PCB' },
  { id: 'software', de: 'Software & Steuerung', en: 'Software & control' },
  { id: 'workflow', de: 'Workflow', en: 'Workflow' },
];
export const isSystemPage = (page) => page.kind === 'projects' || (page.kind === 'project' && projectSections.some((section) => section.id === page.id));

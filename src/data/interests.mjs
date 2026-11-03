const pair = (de, en) => ({ de, en });

export const mediaGroups = [
  {
    title: pair('Gesundheit & persönliche Entwicklung', 'Health & personal development'),
    items: [
      { title: 'The Diary Of A CEO', url: 'https://www.youtube.com/@TheDiaryOfACEO', type: pair('Podcast', 'Podcast') },
      { title: 'Schmerz beiseite – Ralf Blume', url: 'https://www.youtube.com/@RalfBlume', type: pair('Kanal', 'Channel') },
      { title: 'Liebscher & Bracht', url: 'https://www.youtube.com/@Liebscher.Bracht', type: pair('Kanal', 'Channel') },
      { title: 'Dr. Pradip Jamnadas', url: 'https://www.youtube.com/@pradipjamnadasmd', type: pair('Kanal', 'Channel') },
      { title: 'Robert Lustig – Sugar: The Bitter Truth', url: 'https://www.youtube.com/watch?v=dBnniua6-oM', type: pair('Vortrag bei UCTV', 'UCTV lecture') },
      { title: 'Andrew Huberman', url: 'https://www.youtube.com/@hubermanlab', type: pair('Podcast & Kanal', 'Podcast & channel') },
      { title: 'Mark Hyman', url: 'https://www.youtube.com/@drmarkhyman', type: pair('Podcast & Kanal', 'Podcast & channel') },
    ],
  },
  {
    title: pair('KI, Technik & Wissenschaft', 'AI, technology & science'),
    items: [
      { title: 'AI mit Arnie', url: 'https://www.youtube.com/channel/UCUODrgHdjPrFB8Q9VDjuQuw', type: pair('Kanal', 'Channel') },
      { title: 'The Morpheus Tutorials', url: 'https://www.youtube.com/@TheMorpheusTutorials', type: pair('Kanal', 'Channel') },
      { title: 'c’t 3003', url: 'https://www.youtube.com/@ct3003', type: pair('Kanal', 'Channel') },
      { title: 'Veritasium', url: 'https://www.youtube.com/@veritasium', type: pair('Kanal', 'Channel') },
      { title: 'SmarterEveryDay', url: 'https://www.youtube.com/@smartereveryday', type: pair('Kanal', 'Channel') },
    ],
  },
  {
    title: pair('Kurse & Bewegung', 'Courses & cycling'),
    items: [
      { title: 'Geoffrey Hinton – Neural Networks for Machine Learning', url: 'https://www.youtube.com/playlist?list=PLoRl3Ht4JOcdU872GhiYWf6jwrk_SNhz9', type: pair('Coursera-Vorlesungsreihe', 'Coursera lecture series') },
      { title: 'Alexander Amini – MIT Introduction to Deep Learning', url: 'https://www.youtube.com/watch?v=II4giR4vOOo&list=PLtBw6njQRU-rwp5__7C0oIVt26ZgjG9NI', type: pair('MIT 6.S191 · Vorlesungsreihe', 'MIT 6.S191 · lecture series') },
      { title: 'Global Cycling Network', url: 'https://www.youtube.com/@gcn', type: pair('Radsport-Kanal', 'Cycling channel') },
    ],
  },
];

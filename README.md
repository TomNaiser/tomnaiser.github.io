# Tom's Pixel Labs

Panoramen, Fotografie und die Technik hinter den Bildern. Zweisprachige statische Webseite mit Astro.

- Webseite: https://tomnaiser.github.io/
- Deutsch: https://tomnaiser.github.io/de/
- English: https://tomnaiser.github.io/en/

## Lokal bearbeiten

Benötigt werden Node.js 24.19.0 und pnpm 11.25.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Unter Windows kann alternativ `Start-Prototyp.ps1` die lokale Vorschau starten. Die Vorschau bleibt für Suchmaschinen gesperrt und trägt den Hinweis „Lokaler Prototyp“.

## Veröffentlichen

Ein Push auf `main` startet `.github/workflows/deploy.yml`. Der Workflow baut die Webseite, prüft interne Links, Bilder, Navigation und Veröffentlichungseinstellungen und veröffentlicht nur `dist/` über GitHub Pages. Der Ablauf kann auch unter Actions manuell gestartet werden. GitHub Pages muss in den Repository-Einstellungen auf „GitHub Actions“ stehen.

Der Workflow verwendet diese Build-Einstellungen:

```text
SITE_URL=https://tomnaiser.github.io
BASE_PATH=/
PUBLIC_SITE_LIVE=true
ASTRO_TELEMETRY_DISABLED=1
```

Mit diesen Umgebungsvariablen erzeugt `pnpm build:pages` denselben geprüften Veröffentlichungsstand lokal. Ohne `PUBLIC_SITE_LIVE=true` bleiben Prototyp-Hinweis und Suchmaschinensperre aktiv. Ein Upload auf einen anderen Zweig veröffentlicht keine Änderungen.

## Inhalte und Gestaltung

- `src/content/de/` und `src/content/en/`: ausführliche Artikel.
- `src/data/`: Panoramakatalog, Standortgruppen, Bildbeschreibungen und Quellen.
- `src/pages/` und `src/components/`: Seiten und Navigation.
- `src/styles/tokens.css`: Farben, Schrift und Designvariablen.
- `public/images/`: Vorschauen und Artikelbilder.
- `scripts/check-*.mjs`: Prüfungen des erzeugten Standes.

Die großen Panoramen und ihre Viewer bleiben auf AWS beziehungsweise Gigapan. Sie werden erst geöffnet, wenn ein Besucher das Panorama aufruft. Bilder und Texte stehen nicht pauschal unter einer Open-Source-Lizenz; Rechte an verlinkten und übernommenen Materialien bleiben bei ihren jeweiligen Urhebern.

Lokale Quellenarchive, Arbeitsunterlagen, Zugangsdaten und temporäre Dateien gehören nicht zum Repository. Die erzeugte Webseite benötigt nur einen statischen Webserver und kann auch bei einem anderen Anbieter betrieben werden.

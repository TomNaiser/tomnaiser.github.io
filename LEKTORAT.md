# Prüfung des Lektoratsberichts vom 3. November 2026

Grundlage ist der aktuelle lokale Quellstand. Der Bericht beschreibt stellenweise einen anderen Stand oder deutet vorhandene Inhalte als fehlend. Die folgenden Änderungen wurden lokal umgesetzt; es wurde nichts veröffentlicht.

| Bereich | Entscheidung und Umsetzung |
| --- | --- |
| Startseite | „Zusammenfügen“ statt „Stitchen“. Workflow-Nummern entsprechen den ausgewählten Artikelkapiteln 01/03/04/05/07; ein Satz erklärt die Auswahl. Der persönliche Abschnitt verbindet Bildverarbeitung, Werkstatt und Fotografie. |
| Serienkarten | Sichtbarer Texttrenner zwischen Jahr und Anzahl. „Zur Serie mit … Aufnahmen“. Nenntmannsreuth nennt zehn Aufnahmen und erklärt deren Zusammensetzung. |
| Galerie | Fünf individuelle Regionen-Einleitungen; Büchelstein-Satz geglättet; fehlendes Aufnahmedatum als „nicht dokumentiert“ gekennzeichnet. Herkunftstext erklärt Gigapan und krpano/AWS, ohne eine unbelegte chronologische Trennung zu behaupten. |
| Aufnahmedaten | Strukturierte Daten für das Fröttmaning-Bild von Februar 2022 und die dokumentierte ungefähre Einzelbildzahl beim Hochstaufen-Panorama. Weitere Werte werden nur mit Belegen ergänzt; keine Ableitung aus Dateinamen. |
| Gigapan | Anzahl aus `gigapan-collection.json`; auch die Navigation-Prüfung nutzt die Datenzahl. Gpx erklärt. Die zwei Ammersee- und Ochsenkopf-Titel anhand vorhandener Beschreibungen unterschieden. Unbekannte Archivdaten bleiben unbekannt. |
| Navigation | „Elektronik & PanoBoard“ und „Astrofotografie“ vereinheitlicht. Bestehende URLs bleiben erhalten. Bienenstockwaage und 3D-Druck waren bereits unter `/de/projekte/` verlinkt. Zusätzlich führt der Footer zu „Werkstatt & Versuche“; der Abschnitt erscheint auch in der Panoramasystem-Übersicht und ist von der Startseite erreichbar. Kein zusätzlicher Fotografie-Bereich für fachfremde Projekte. |
| Mechanik | Kabelauslösung verständlicher beschrieben; wiederholten Kamera-Hinweis und entbehrlichen Mega-Satz gekürzt. Absolute Winkelgeber einmal als Encoder erklärt. Die ungetestete alternative Basis steht als aufklappbare historische Überlegung außerhalb der laufenden Bauanleitung. Abmessungen stehen bereits in der Stückliste; ein Gesamtgewicht ist daraus nicht ableitbar. |
| Elektronik | Versionsüberblick vorangestellt. Direkt bei den Bildern steht, dass V3/V4 keine Vorlage für V5 mit Nano R4 sind. USB-UART-Zeile ausformuliert. V6 bleibt ausdrücklich eine Überlegung; Bestell- oder Teststatus wurde nicht erfunden. |
| Software | Grenze von einem verbundenen Steuergerät hervorgehoben; geprüfte Versionskombination mit ihren noch offenen Praxistests zusammengefasst. „Restauftrag“ war hier bereits erklärt und ist nun auch im Workflow bei Erstnennung erläutert. Der Windows-Screenshot war bereits als englisch und simuliert gekennzeichnet. |
| Aufnahmevorbereitung | Zahlenstil im Gewichtstitel angepasst, praktische Packliste ergänzt, unnötigen englischen Klammerbegriff entfernt und Sensorreinigung verdichtet. Sony-Quellenhinweis und Vorsicht beim Reinigen bleiben erhalten. |
| Workflow | Zusammenfügen im Kapiteltitel verständlich benannt; alter Anker bleibt als Alias erhalten. Rasterausrichtung, Banding und weitere PTGui-Begriffe erläutert. Dateiformat-Exkurs aufklappbar; Hinweise zum Betrachten auf Smartphones ergänzt. Nicht belegte Gesamtlaufzeiten bleiben offen. |
| Fotografie | Manuelle ISS-Nachführung präzisiert, Galaxy D10 eingeordnet und AVI-Links in Textreihenfolge mit Ereignis und Datum beschriftet. Zwei bildbasierte Reiseabschnitte unter „Unterwegs“ zusammengefasst. ND-Filter und Rolling Shutter verständlicher unterschieden. Bilder bleiben vollständig erhalten, da Unterschiede oder Redundanz ohne zusätzliche Aufnahmeinformationen nicht sicher beurteilbar sind. |
| Wissenschaft | Leerzeichen, Initialen, Zeitschriftenangabe und angehängte „Link“-Wörter in den Daten bereinigt; unbelegten KI-Nachtrag entfernt. Deutsche Rahmenangaben für Abschlussarbeiten und englische Vortragsformulierungen ergänzt. Fachbeitragstitel bleiben zitierfähig in der Originalsprache. Brücke zur heutigen Bildverarbeitung mit Workflow-Link ergänzt. Die ersten drei Dateneinträge werden auf der Wissenschaftsseite bereits durch ausführliche deutsche Abschlussarbeitsabschnitte ersetzt; es gab dort keine zusätzliche englische Diplomarbeitsliste. |
| Über mich und Kontakt | Markenüberschrift und Schutz des vollständigen Namens bleiben entsprechend den bestehenden Inhaltsprüfungen erhalten. Der Beginn der Panoramafotografie 2003 stand bereits auf der Profilseite. Die E-Mail-Adresse wird nach dem Laden aus den vorhandenen Codepoints in das zugängliche Button-Label gesetzt; sie steht weiterhin nicht als Klartext im ausgelieferten HTML. Eine Antwortfrist wird nicht versprochen. |
| Datenschutz | „meiner“ statt „unserer“ und Standdatum aktualisiert. Keine pauschale neue Lizenz für eigene oder fremde Bilder/Texte: deren Rechte sind bereits in der README differenziert beschrieben. |
| Sitemap und Barrierefreiheit | Statische `sitemap.xml` mit allen kanonischen DE-/EN-Seiten und Sprachalternativen; `robots.txt` verweist im Live-Build darauf. Vorschau-Builds erhalten eine leere Sitemap und `Disallow: /`. Release-Prüfung vergleicht Sitemap und kanonische Seiten vollständig. Alle vier Diagramme haben unterschiedliche Rubriken und aufklappbare Textbeschreibungen. |

## Rechtlicher Punkt und noch benötigte Originalangaben

Eine Impressumspflicht lässt sich weder allein aus der Bezeichnung „privat“ ausschließen noch pauschal mit § 5 DDG begründen. [§ 5 DDG](https://www.gesetze-im-internet.de/ddg/__5.html) regelt geschäftsmäßige, in der Regel gegen Entgelt angebotene digitale Dienste; daneben können die Anbieterpflichten des Medienstaatsvertrags relevant sein. Die [Medienanstalten erläutern DDG und MStV sowie die erforderlichen Anbieterangaben](https://www.die-medienanstalten.de/aufgaben/aufsicht/impressumspflicht/).

Für ein vollständiges Impressum fehlen eine vom Betreiber zur Veröffentlichung bestimmte ladungsfähige Anschrift und die Entscheidung über die Anbieterangaben. Deshalb wurde keine unvollständige Impressumsseite und keine erfundene Anschrift angelegt. Die bisherigen Schutzvorgaben für Namen und E-Mail-Adresse wurden beibehalten.

Für die weiteren Vorschläge braucht es Originalangaben oder neue Aufnahmen:

- Foto des aktuellen gepatchten V5-Aufbaus und gegebenenfalls deutsche App-Screenshots.
- Bestätigte Android-Mindestversion und Bluetooth-Anforderungen für die dokumentierte App-Version, falls eine FAQ gewünscht ist.
- Gesamtgewicht/Packmaß, Kosten und tatsächliche Zeiten für Weg, Aufbau, Aufnahme und Nachbearbeitung.
- Weitere belegte Kamera-/Objektiv-/Belichtungsdaten, genaue Ortsangaben und Reisedaten; Kamera und Bedingungen des Polarlichtbilds. Das vorhandene Datum 19. Januar 2026 bleibt in der Bildunterschrift.
- Das Verpixelungswerkzeug veröffentlichen und erst danach im Workflow konkret verlinken. Das frühere versteckte REDAKTION-To-do wurde hierher übertragen; es gibt weiterhin keinen ungültigen Besucherlink.

Alphabetische Gigapan-Gruppen standen im aktuellen Katalog bereits hinter den übrigen Galeriegruppen, genau wie im Dropdown. Diese gewollte, durch vorhandene Prüfungen abgesicherte Reihenfolge bleibt erhalten. Die dreimalige Herkunftsformulierung in kurzen Gigapan-Bildbeschreibungen bleibt ebenfalls erhalten: Jede Beschreibung ist auch für sich verständlich.

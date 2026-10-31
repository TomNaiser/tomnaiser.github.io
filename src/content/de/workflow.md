## Der Ablauf auf einen Blick

Ein gutes Gigapixelpanorama beginnt mit sauber aufgenommenen Einzelbildern. Eine falsche Blende, verwackelte Aufnahmen oder eine während der Serie veränderte Belichtung lassen sich später oft nicht zufriedenstellend korrigieren. Deshalb kontrolliere ich den Aufbau und die Kamera, bevor ich Hunderte Bilder aufnehme.

1. **Aufbauen und nivellieren:** Stativ und Panoramakopf mit der Libelle horizontal ausrichten.
2. **Kamera einstellen und testen:** Vignettierung durch die Blende begrenzen, Bewegung durch kurze Belichtungszeit einfrieren, ISO passend erhöhen und die Belichtung fest einstellen.
3. **Raster planen und aufnehmen:** Überlappung, Bildausschnitt und Zeitablauf prüfen; nach jeder Bewegung ausschwingen lassen.
4. **RAW-Dateien entwickeln:** Mit DxO PhotoLab 9 entrauschen und konsistent als 16-Bit-TIFF ausgeben; die Vignettierungskorrektur folgt in PTGui Pro.
5. **In PTGui zusammenfügen:** Positionsdaten übernehmen, mit „Align to Grid“ ausrichten, Kontrollpunkte und Masken prüfen.
6. **Ergebnis fertigstellen:** Horizont, Übergänge, Schärfe und bewegte Objekte kontrollieren.
7. **Für das Web vorbereiten:** krpano-Kacheln erzeugen, Dateizahl und Kachelgröße prüfen und veröffentlichen.

Im Folgenden beschreibe ich die einzelnen Schritte und meine Erfahrungen mit Aufnahme und Verarbeitung.

Wie viel sich in einem Panorama entdecken lässt, zeigt der [Blick vom Herzogstand nach München – mit Innenstadt und Allianz Arena im Zoom](../panoramasystem/#herzogstand-zoom).

## 01 · Stativ und Panoramakopf ausrichten

Zuerst richte ich **Stativ und Panoramakopf mit der Libelle horizontal** aus. Anschließend prüfe ich die tatsächliche Lage der Kamera. Die schwere Kombination aus Kamera und Teleobjektiv belastet den Kopf; die Mechanik gibt geringfügig nach, sodass die Kamera trotz nivellierter Basis etwas schief hängen kann.

Ich kontrolliere deshalb den Horizont über den geplanten Schwenkbereich und die Lage der mittleren Bildreihe. Eine möglichst horizontale Schwenkbewegung erleichtert später die Rasterausrichtung mit **„Align to Grid“** in PTGui. Eine schlecht ausgerichtete Aufnahme kann dagegen ein gebogenes Panorama ergeben: Der Horizont verläuft dann wie eine Welle. Das lässt sich mit vertikalen Kontrollpunkten oder „Straighten“ nicht immer einfach korrigieren.

Kamera und Objektiv werden ausbalanciert, Befestigungen und Stativ auf festen Sitz geprüft. Auch bei sorgfältigem Aufbau bleiben eine geringe Durchbiegung, Wind und Ausschwingbewegungen zu berücksichtigen. Die [Mechanikbeschreibung](../mechanik/) zeigt die verstellbare Kameraaufnahme und den Aufbau.

## 02 · Kamera einstellen und Testbilder prüfen

### Blende: Vignettierung schon bei der Aufnahme begrenzen

Eine gleichmäßige Bildhelligkeit ist bei Panoramen entscheidend. Ein leichter Helligkeitsabfall in jedem Einzelbild kann im zusammengesetzten Himmel als wiederkehrendes Muster sichtbar werden. **Die Blende muss bereits bei der Aufnahme passen.** Ein Objektivprofil oder eine Kalibrierung ist kein Ersatz dafür, zu starke Vignettierung durch eine ungeeignete Blendeneinstellung zu vermeiden.

Bei meinen 400-mm-Aufnahmen haben sich beispielsweise Blenden um **f/10 bis f/11 oder weiter abgeblendet** bewährt. Die genaue Einstellung hängt vom Objektiv ab. In früheren Versuchen waren bei f/8 noch störende Muster sichtbar. Auch beim Sigma 100–400 mm blieben selbst bei f/13 einige Prozent Helligkeitsabfall zu den Ecken. Deshalb prüfe ich Testbilder, Randbereiche und die geplante Überlappung, bevor die eigentliche Bildserie beginnt.

### Belichtungszeit und ISO: scharfe Bilder haben Vorrang

Aktuell bevorzuge ich bei langen Brennweiten **1/1000 s oder kürzer**, wenn Bewegung und Wind das erfordern. Dafür setze ich lieber den ISO-Wert höher. Das zusätzliche Rauschen lässt sich später mit **DxO PhotoLab und DeepPRIME** sehr gut reduzieren. Ein verwackeltes Einzelbild lässt sich auf diesem Weg nicht wieder scharf machen.

Ich stelle die **Belichtung vor dem Start richtig ein und verändere sie während der gesamten Serie nicht**. Blende, Belichtungszeit und ISO bleiben fest; automatische Belichtungsanpassungen zwischen den Bildern würden den späteren Helligkeitsabgleich erschweren. Ein kurzer Test auf wichtige helle und dunkle Bildbereiche gehört deshalb vor die Aufnahme.

### Fokussieren und den Fokus verriegeln

Ich stelle zunächst mit **Autofokus** scharf und schalte anschließend auf **manuellen Fokus** um. Dieser Fokus-Lock verhindert, dass die Kamera während der Bildserie neu fokussiert. Die Bilder speichere ich als **RAW mit typischerweise 10–14 Bit**, um Reserven für die Entwicklung und feine Helligkeitsverläufe zu erhalten.

### Silent Shutter für lange Bildserien

Ich verwende durchgehend **Silent Shutter, also den vollständig elektronischen Verschluss**, um die mechanische Verschlusseinheit bei den vielen Einzelaufnahmen zu schonen. Das ist etwas anderes als ein elektronischer erster Verschlussvorhang: Laut [Sony-Hilfe zur A7R V](https://helpguide.sony.net/ilc/2230/v1/en/contents/TP0002924537.html) ist diese Funktion beim vollständig elektronischen Verschluss nicht aktiv.

Das zeilenweise Auslesen kann bei Bewegung weiterhin Rolling-Shutter-Verzerrungen verursachen. Kurze Belichtungszeiten verhindern diesen Effekt nicht grundsätzlich; die Mechanik muss deshalb vor jeder Aufnahme zur Ruhe kommen. Unter flackerndem Kunstlicht können außerdem Helligkeitsbänder entstehen. Diese Einschränkungen beschreibt auch [Sony für Silent Shooting](https://www.sony.com/electronics/support/e-mount-body-ilce-1-series/ilce-1/articles/00122352).

**Aufnahmebeispiel aus 2023:** Sony A7R II mit Minolta AF 100–400 mm F4.5–6.7 APO, 400 mm, f/11, 1/400 s und ISO 100–200; mit DeepPRIME waren auch ISO 500 brauchbar. Bei damaligen Versuchen hatte ich Helligkeitsverläufe beobachtet und Zeiten kürzer als ungefähr **1/600 s** vermieden. Diese Beobachtung gilt für die damaligen Aufnahmen. Heute nutze ich die A7R V und bevorzuge unter passenden Bedingungen 1/1000 s oder kürzer.

### Sensorstaub vor der Bildserie prüfen

Staubflecken fallen besonders im gleichmäßigen Himmel auf und wiederholen sich in vielen Einzelbildern. Um den Staubeintrag zu begrenzen, wechsle ich das Objektiv eher selten. Vor einer großen Serie prüfe ich ein Testbild auf auffällige Flecken.

Mit den von mir ausprobierten Softwarekorrekturen war ich bislang unzufrieden; ein Blasebalg allein entfernte hartnäckigen Staub ebenfalls nicht zuverlässig. Mit passenden **Sensor Cleaning Swabs** habe ich dagegen sehr gute Ergebnisse erzielt, nachdem ich mich lange nicht daran gewagt hatte. Vor einem Wischen entferne ich lose, insbesondere harte Partikel mit dem Blasebalg, damit sie nicht über die Oberfläche gezogen werden und Kratzer verursachen.

Das ist eine Erfahrung mit meinem Aufbau, keine allgemeine Reinigungsanleitung. Swabs, Flüssigkeit und Vorgehen müssen zur Kamera passen; wer die Risiken und die modellbezogene Anleitung nicht sicher beurteilen kann, sollte den Service nutzen. [Sony beschreibt zunächst die kamerainterne Reinigung und einen geeigneten Blasebalg und verweist bei verbleibendem Staub an den Service.](https://support.d-imaging.sony.co.jp/www/support/ilc/sensor/en.html)

## 03 · Raster planen und die Bildserie aufnehmen

Ich stimme Bildwinkel, Brennweite, Abdeckung und Überlappung aufeinander ab. Meist plane ich **30–40 % Überlappung**. Sie hilft bei der späteren Ausrichtung und erlaubt es, problematische Bildränder beim Stitching weniger stark zu verwenden. Das ersetzt die passende Blendeneinstellung nicht.

Vorbeiziehende Wolken und ihre Schatten verändern die Helligkeit der Landschaft. Eine große Serie kurz vor Sonnenuntergang kann ebenfalls starke Helligkeitsverläufe bekommen. Das geeignete Aufnahmefenster ist deshalb genauso wichtig wie ein korrekt eingestelltes Raster.

Nach jeder Bewegung muss die Plattform zur Ruhe kommen, bevor die Kamera auslöst. Zusätzlich braucht die Kamera Zeit zum Speichern. In meinem früheren RAW-Aufbau begrenzte das die Geschwindigkeit auf etwa **2–3 Sekunden pro Bild**.

### Den Aufnahmeplan prüfen und starten

In der Vorschau prüfe ich Kameraprofil, Bildausschnitt, Überlappung und die Wartezeiten zwischen den Aufnahmen. Dann übertrage ich den Plan und warte auf die Bestätigung vom Kopf. Erst mit Start beginnt die Serie. Während die Firmware die Kamera bewegt und auslöst, zeigt die App den Fortschritt und mögliche Warnungen.

Android und Windows speichern den Aufnahmeverlauf und schreiben die Kamerapositionen als Papywizard-XML-Datei. Vor dem Export prüfe ich, ob alles gesichert ist. Nach einer Unterbrechung kontrolliere ich zuerst die Verbindung und die Referenzposition des Kopfes. Dann kann ich ab der betroffenen oder der vorherigen Spalte weitermachen. Bei sphärischen Aufnahmen bleiben die ursprünglichen Bänder erhalten. Auch diesen Restauftrag muss ich erst laden und danach starten.

Den Ablauf beschreibe ich im [Beispiel zur Wiederaufnahme](../software/#beispiel-eine-unterbrochene-serie-fortsetzen). Auf der [Softwareseite stehen die gemeinsam geprüften Versionen](../software/#geprüfter-stand-und-passende-anleitungen) von Apps, Firmware und Motorprofil. Vor einer wichtigen Bildserie teste ich die Einstellungen mit meinem Aufbau. Der erneute Praxistest der Wiederaufnahme nach einem echten Fehler und die Prüfung auf dem Surface stehen noch aus.

Die Steuerung zeichnet die gemessenen Kamerawinkel zu den Auslöseereignissen auf. Diese Daten helfen später bei der Anordnung in PTGui. Sie bestätigen jedoch nicht, dass die Kamera jede Datei gespeichert hat oder dass das Bild scharf ist. Vollständigkeit und Bildqualität werden anhand der tatsächlichen Kameradateien geprüft. Wird eine Spalte oder ein Band wiederholt, müssen die zusätzlichen Bilddateien beim Zusammenstellen des Projekts berücksichtigt werden.

Früher habe ich lange mit den leichten Bridgekameras Lumix FZ28 und FZ200 gearbeitet. Sie bieten einen großen Zoombereich. Bei vergleichbarem Bildausschnitt und langer Brennweite kann Vollformat die benötigte Bildzahl und Aufnahmezeit reduzieren; zugleich steht in meinen Aufnahmen mehr Spielraum beim Rauschen zur Verfügung. Das muss ich bei der Planung berücksichtigen.

## 04 · RAW-Dateien entwickeln

Eine RAW-Datei enthält die weitgehend unverarbeiteten Messwerte des Kamerasensors. **Entwickeln** bedeutet, daraus ein nutzbares Farbbild zu berechnen: Farbwerte rekonstruieren, Weißabgleich und Helligkeitsverlauf festlegen, Rauschen reduzieren und geeignete optische Korrekturen anwenden. Anders als bei einem fertigen Kamera-JPEG kann ich diese Entscheidungen später erneut aus den RAW-Daten berechnen.

Ich verwende **[DxO PhotoLab 9](https://www.dxo.com/dxo-photolab/)**. DeepPRIME hilft mir, die für kurze Belichtungszeiten bewusst erhöhten ISO-Werte zu nutzen, ohne zu viel Detail durch Rauschen zu verlieren. Alternativen sind etwa [Capture One](https://www.captureone.com/), Adobe Lightroom beziehungsweise Camera Raw sowie die freien RAW-Entwickler [darktable](https://www.darktable.org/) und [RawTherapee](https://rawtherapee.com/). Welche Ergebnisse passen, hängt auch von Kamera, Objektiv und den verwendeten Profilen ab.

### Kamera und Objektiv bestimmen die Korrekturen

RAW-Entwicklung ist **kamera- und objektivspezifisch**: Sensorrauschen, Farbwiedergabe, Verzeichnung und Randschärfe sind keine universellen Eigenschaften. DxO vermisst Kamera-/Objektivkombinationen und bietet dafür passende [Optikmodule](https://userguides.dxo.com/photolab/en/overview/). Bei adaptierten oder nicht unterstützten Kombinationen muss ich die Verfügbarkeit prüfen; ein beliebiges Profil ist kein Ersatz für das richtige Objektiv.

Ich entwickle die gesamte Serie mit abgestimmten Einstellungen und einheitlichem Weißabgleich. **Die Vignettierungskorrektur lasse ich bei der RAW-Entwicklung ausgeschaltet und führe sie erst in PTGui Pro aus.** Diese Reihenfolge hat sich für meine Panoramen bewährt und vermeidet, dass zwei Programme den Helligkeitsabfall unabhängig voneinander korrigieren. Andere Korrekturen, etwa chromatische Aberrationen, behandle ich bei Bedarf in der Entwicklung.

So erhält PTGui möglichst gleichmäßig entwickelte, entrauschte Einzelbilder. Das erleichtert Ausrichtung, Überblendung und Helligkeitsabgleich; eine verwackelte Aufnahme oder eine ungeeignete Blende wird dadurch nicht repariert.

### Dunstkorrektur vor dem Stapel testen

**ClearView Plus** kann entfernte Details sichtbar machen, aber auch neue Helligkeitsverläufe in jedem Einzelbild erzeugen. Im Panorama erschienen sie in meinen Versuchen als wiederkehrende Muster im Himmel. Die übliche DxO- oder PTGui-Korrektur entfernte sie nicht vollständig. Rund 40 % Überlappung und Randbeschnitt halfen teilweise. Deshalb teste ich eine starke Dunstkorrektur zunächst an einem repräsentativen Ausschnitt.

### Was inzwischen gegen Staubflecken möglich ist

Für vorhandene Aufnahmen gibt es inzwischen automatische Verfahren: Adobe beschreibt eine [KI-gestützte Staubentfernung in Lightroom Classic](https://helpx.adobe.com/lightroom-classic/desktop/process-and-develop-photos/distraction-removal-dust.html); DxO bietet [automatische Stauberkennung und Reparatur in PureRAW 6](https://www.dxo.com/en/news/automatic-dust-correction). Das sind Herstellerangaben, keine von mir bestätigten Ergebnisse für meine Panoramaserien und keine pauschale Funktionszusage für PhotoLab 9.

Ein Test sollte auch feine echte Details wie Vögel oder entfernte Strukturen einschließen. Bei einem solchen Test würde ich die Reparaturen sowohl an den Einzelbildern als auch im gestitchten Ergebnis prüfen. Sie ergänzen einen sauberen Sensor; meine Erfahrungen mit Swabs stehen im Abschnitt zur Aufnahmevorbereitung.

### Ausgabe und Speicherbedarf

Für PTGui exportiere ich **verlustfreie 16-Bit-TIFF-Dateien**. Die höhere Bittiefe bewahrt feine Helligkeitsverläufe für die weitere Bearbeitung und begrenzt Banding. Aus einer etwa **41 MB** großen RAW-Datei wurden in meinem Beispiel ungefähr **214 MB** TIFF, also rund fünfmal so viel. Bei mehr als 500 Bildern ist das ein erheblicher Zwischenbestand.

Die RAW-Dateien bleiben meine Grundlage für eine spätere Neuentwicklung. Entbehrliche TIFF-Zwischenstände entferne ich nach dem fertigen Panorama. In meinen Aufnahmen hatten chromatische Aberrationen mit der verwendeten Ausrüstung und den üblichen Einstellungen vergleichsweise wenig Einfluss.

## 05 · In PTGui ausrichten und stitchen

Die TIFF-Serie wird in PTGui geladen. **Papywizard-Positionsdaten** geben der Anordnung einen brauchbaren Ausgangspunkt. Bei ordentlich horizontal ausgerichtetem Panoramakopf funktioniert **„Align to Grid“** für die regelmäßige Rasteranordnung sehr gut — auch dort, wo Himmel oder unscharfer Vordergrund keine verlässlichen Kontrollpunkte liefern.

Ist der Kopf schlecht ausgerichtet oder hängt die Kamera unter Last schief, kann der Horizont im Panorama eine Welle beschreiben. Die Korrektur mit vertikalen Kontrollpunkten und der Horizontausrichtung ist dann mitunter schwierig. Deshalb prüfe ich nicht nur die Libelle, sondern auch die tatsächliche Kameralage. Bewegte Wolken sind trotz ihrer sichtbaren Struktur schlechte Kontrollpunkt-Referenzen.

### Raster und lose Bilder

Für nicht verbundene Bilder habe ich [**LooseTileAlignment.py**](https://github.com/TomNaiser/Gigapixel-Tools/blob/main/LooseTileAlignment.py) entwickelt. Es ordnet lose Bilder anhand des regelmäßigen Rasters und bereits verbundener Nachbarbilder ein. Bei gut ausgerichteter Aufnahme kann PTGui mit „Align to Grid“ bereits viel davon erledigen. Das Skript ergänzt diesen Weg; das Ergebnis bleibt im PTGui-Projekt überprüfbar. Bei einer schiefen Aufnahme muss auch eine Rasterreparatur sorgfältig kontrolliert werden.

### Horizont, Helligkeitsabgleich und Masken

Mit **PTGui Pro 12** nutzte ich für den Horizont meist **vier bis acht vertikale Kontrollpunkte** oder „Straighten“. Die geometrisch richtige Anordnung unterstützt auch einen brauchbaren Helligkeitsabgleich. In den Exposure-/HDR-Einstellungen prüfe ich Exposure Fusion und Tone Mapping; „Keep current“ kann bereits passende Belichtungs-/Vignettierungswerte erhalten. Einzelne verbleibende Belichtungsabweichungen korrigiere ich nötigenfalls manuell.

Bewegte Autos und Personen maskiere ich gegen Doppelkonturen und Geisterbilder. Kontrollpunkte, Masken, Horizont und Übergänge werden am Ergebnis geprüft. Die Aufnahmequalität bleibt dabei die Voraussetzung: Diese Arbeiten korrigieren keine grundsätzlich verwackelten Bilder.

### Wenn noch Vignettierung übrig bleibt

Die eigentliche Vignettierungskorrektur führe ich in **PTGui Pro** aus. Dabei prüfe ich den Helligkeitsabgleich und den verwendeten Randbeschnitt. Beim Sigma 100–400 mm war der Helligkeitsverlauf im Zentrum relativ flach und fiel in den Ecken stärker ab. In Versuchen mit PhotoLab 7 verbesserten ein passendes Profil und mehr Überlappung, von **25 auf 35 %**, das Ergebnis deutlich. Heute lasse ich die Vignettierungskorrektur bewusst bis PTGui ausgeschaltet; die frühere Profil-Erfahrung ist kein zweiter Korrekturschritt in meinem aktuellen Ablauf.

Für die Kalibrierung kann eine Serie strukturloser Himmelsbilder mit **denselben Einstellungen und demselben Fokus** verwendet werden. Aus ihrem Mittelwert lässt sich ein zweidimensionales Helligkeitsprofil ableiten und auf die 16-Bit-TIFF-Serie anwenden. Mein Werkzeug [**VignettingCorrection.py**](https://github.com/TomNaiser/Gigapixel-Tools/blob/main/VignettingCorrection.py) unterstützt das. Der Ansatz funktionierte in manchen Fällen gut, in anderen nicht. Eine ungeeignete Blende bei der Aufnahme lässt sich damit nicht zuverlässig nachträglich ausgleichen.

## 06 · Das fertige Panorama prüfen

Vor der Veröffentlichung kontrolliere ich das Panorama auch in hoher Vergrößerung: Übergänge, Geisterbilder, unerwartete Lücken, Schärfe, Horizont und auffällige Helligkeitsmuster. Bewegte Objekte und problematische Überblendungen prüfe ich im Zusammenhang, nicht nur an einzelnen Kontrollpunkten.

<!-- REDAKTION: Verpixelungstool ins GitHub-Repository hochladen und hier den konkreten Werkzeug-Link ergänzen. Bis dahin keinen ungültigen Besucherlink ausgeben. -->

## 07 · krpano-Kacheln erstellen und veröffentlichen

**krpano** besteht aus Werkzeugen zur Aufbereitung und einem interaktiven Panorama-Viewer für den Browser. Ein Gigapixelbild lässt sich nicht sinnvoll wie ein gewöhnliches Foto vollständig auf einmal laden: Die Datei wäre sehr groß, und Speicherbedarf sowie Wartezeit würden das Betrachten erschweren.

Deshalb zerlege ich das fertige Bild mit krpano in **kleine Bildkacheln und mehrere Auflösungsstufen**. In der Übersicht lädt der Viewer eine geringe Auflösung; beim Hineinzoomen nur die benötigten Kacheln des sichtbaren Ausschnitts. So können Besucher Details erkunden, ohne zuerst das gesamte Panorama herunterladen zu müssen. Die [krpano-Werkzeuge](https://krpano.com/docu/tools/) erzeugen die dafür nötige Struktur.

Mit **MAKE PANO (MULTIRES)** erzeuge ich mehrere Auflösungsstufen. Der Viewer lädt später nur die für den aktuellen Bildausschnitt und Zoom nötigen Kacheln. Im früheren Vergleich erzeugte FLAT ungefähr **zehnmal mehr Dateien** als die gewählte MULTIRES-Verarbeitung.

**Warum ich die Dateien zähle:** Viele kleine Dateien machen den Upload aufwendiger. Manche Hosting-Angebote begrenzen außerdem die Dateizahl. Deshalb prüfe ich vor dem Hochladen sowohl die Anzahl der Kacheln als auch ihren Speicherbedarf.

Meine damalige Ausgabe bestand leicht aus **rund 30.000 Dateien**. Kleine **512-Pixel-Kacheln mit etwa 64 kB** erzeugten viel Verwaltungsaufwand; ich beobachtete beim Upload teilweise nur ungefähr **30 kB/s**. Mit **2048-Pixel-Kacheln**, über `multires.config` / `tilesize` eingestellt, sank die Dateizahl und der Upload lief besser.

Die krpano-Ausgabe umfasst HTML, XML und JavaScript. Früher zusätzlich erzeugte Flash-Dateien gehören zur historischen Ausgabe und werden auf der heutigen Seite nicht benötigt. Die Kachelausgabe war kleiner als das große PSB. Die vollständigen Panoramen liegen weiterhin auf AWS/CloudFront; die Website zeigt zunächst eine lokale Vorschau und öffnet die interaktive Aufnahme auf Wunsch. Weitere Aufnahmen liegen auf Gigapan.

### Große Dateien: Erzeugen, Öffnen und Kacheln unterscheiden

**PTGui kann PSB-Panoramen mit mehr als 300.000 Pixeln Kantenlänge erzeugen.** Die Grenze von **300.000 × 300.000 Pixeln** betrifft das Öffnen in Photoshop; sie ist keine allgemeine Ausgabegrenze von PTGui. [PTGui erklärt diesen Unterschied ausdrücklich.](https://www.ptgui.com/faq/)

Für den nächsten Schritt zählt jedoch auch das Eingabeformat: Die aktuelle **krpano-Dokumentation nennt für PSB ebenfalls 300.000 × 300.000 Pixel**. Für größere Zwischenbilder kommen dort unter anderem **BigTIFF oder KRO** infrage. Die Kacheldarstellung und die Grenzen eines eingelesenen PSB sind also getrennte Fragen; ein größeres PTGui-PSB lässt sich nicht allein deshalb garantiert direkt in krpano verarbeiten. [Unterstützte krpano-Formate](https://krpano.com/docu/tools/).

Auch bei TIFF und JPG unterscheiden sich Format und Programm: Klassisches TIFF ist auf ungefähr **4 GB** begrenzt, PTGui kann für größere Dateien auf **BigTIFF** wechseln. JPEG erlaubt bis **65.535 Pixel pro Kante**; manche Programme beschränken das Öffnen auf etwa **30.000 Pixel**. Für Gigapan habe ich ein zusammengefügtes, flaches **16-Bit-PSB mit PackBits-Kompression** verwendet.

## Rechner und dokumentierte Laufzeiten

Mein aktueller Bearbeitungsrechner verwendet einen **Intel Core i9-13900**, ein **ASUS ProArt Z790-Creator**, **64 GB RAM** und eine **NVIDIA GeForce RTX 3090**. Die CPU übernimmt große Teile der allgemeinen Verarbeitung; RAM hält umfangreiche Bilddaten vor. Die GPU unterstützt dafür geeignete Entwicklungsschritte wie DeepPRIME und GPU-beschleunigtes Stitching.

Für die Bearbeitung großer Serien sind ausreichend Arbeitsspeicher, schnelle SSDs und eine geeignete GPU wichtig. Sie verkürzen Entwicklung, Laden und Stitching. Die wichtigste Voraussetzung bleibt trotzdem die korrekte Aufnahme: Ein anderer Rechner ersetzt weder Schärfe noch passende Blende und konstante Belichtung.

**Vorheriger Aufbau für die folgenden Erfahrungswerte:** Intel i7 der 9. Generation mit acht Kernen, Gigabyte Z390, **RTX 3090**, 64 GB DDR4-3000 und eine **1-TB-Samsung-970-Evo-M.2-SSD**. Das Laden Hunderter TIFFs mit jeweils ungefähr 200 MB dauerte auf diesem Aufbau weniger als eine Minute; auch die weitere Bearbeitung lief deutlich flüssiger.

Die folgenden älteren Projektmessungen zeigen die Größenordnung. Sie sind weder Messwerte des heutigen i9-Rechners noch ein direkter Hardwarevergleich:

- **GTX 980:** 650 Bilder, 10 × 65, je 5304 × 7952 Pixel; ungefähr zwei Stunden. Ausgabe: 237.875 × 54.107 Pixel, PSB rund 31 GB.
- **RTX 3090 und PTGui 12.13:** 395 Bilder mit je 5304 × 7952 Pixel; Ausgabe 227.230 × 23.426 Pixel in weniger als 20 Minuten.

## Werkzeuge und Quellen

- [DxO PhotoLab 9](https://www.dxo.com/dxo-photolab/) – RAW-Entwicklung, Objektivkorrekturen und DeepPRIME-Rauschreduzierung.
- [Capture One](https://www.captureone.com/) – alternative RAW-Entwicklung aus meinen früheren Versuchen.
- [PTGui](https://ptgui.com/) und [Anwenderforum](https://groups.google.com/g/ptgui) – Stitching, Rasterausrichtung und Austausch zu konkreten Problemen.
- [LooseTileAlignment.py](https://github.com/TomNaiser/Gigapixel-Tools/blob/main/LooseTileAlignment.py) – mein Werkzeug für nicht verbundene Rasterbilder.
- [VignettingCorrection.py](https://github.com/TomNaiser/Gigapixel-Tools/blob/main/VignettingCorrection.py) – Kalibrierungsansatz für 16-Bit-TIFF.
- [krpano](https://krpano.com/) – Aufbereitung und interaktive Darstellung.
- [Gigapan](https://gigapan.com/) – weitere veröffentlichte Panoramen.
- [Hugin](https://hugin.sourceforge.io/) – freie Stitching-Software als weiterführender Verweis.

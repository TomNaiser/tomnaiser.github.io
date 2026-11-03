## Der Ablauf auf einen Blick

Ein gutes Gigapixelpanorama beginnt mit sauber aufgenommenen Einzelbildern. Eine falsche Blende, verwackelte Aufnahmen oder eine während der Serie veränderte Belichtung lassen sich später oft nicht zufriedenstellend korrigieren. Deshalb kontrolliere ich den Aufbau und die Kamera, bevor ich Hunderte Bilder aufnehme.

1. **Standort und Aufnahmefenster planen:** Aussicht, Zugang mit der schweren Ausrüstung, Wetter, Licht und Platz für andere Besucher berücksichtigen.
2. **Aufnahmeziel und Aufbau wählen:** Landschaftsausschnitt oder sphärisches Panorama planen, Objektiv auswählen, Kamera ausbalancieren und Kopf nivellieren; bei nahem Vordergrund die parallaxenarme Drehung prüfen.
3. **Kamera einstellen und testen:** Fokusziel und Schärfentiefe prüfen, passende Blende, Belichtungszeit und ISO wählen und die Einstellungen für die Serie festlegen.
4. **Raster planen und aufnehmen:** Überlappung, Bildausschnitt und Zeitablauf prüfen; nach jeder Bewegung ausschwingen lassen.
5. **RAW-Dateien entwickeln:** Mit DxO PhotoLab 9 entrauschen und konsistent als 16-Bit-TIFF ausgeben; die Vignettierungskorrektur folgt in PTGui Pro.
6. **In PTGui zusammenfügen:** Positionsdaten übernehmen, mit „Align to Grid“ (Rasterausrichtung) ausrichten, Kontrollpunkte und Masken prüfen.
7. **In PTGui korrigieren:** Horizont ausrichten, falsch platzierte Einzelbilder einordnen und bewegte oder an Bildnähten abgeschnittene Objekte mit dem Mask Tool behandeln.
8. **Für das Web vorbereiten:** krpano-Kacheln erzeugen, Dateizahl und Kachelgröße prüfen und veröffentlichen.

Im Folgenden beschreibe ich die einzelnen Schritte und meine Erfahrungen mit Aufnahme und Verarbeitung.

Wie viel sich in einem Panorama entdecken lässt, zeigt der [Blick vom Herzogstand nach München – mit Innenstadt und Allianz Arena im Zoom](../panoramasystem/#herzogstand-zoom).

## Vorbereitung

[Zur Aufnahmevorbereitung: Standort, Objektiv und Kameracheck](../aufnahmevorbereitung/)

## 01 · Stativ und Panoramakopf ausrichten

Zuerst richte ich **Stativ und Panoramakopf mit der Libelle horizontal** aus. Anschließend prüfe ich die tatsächliche Lage der Kamera. Die schwere Kombination aus Kamera und Teleobjektiv belastet den Kopf; die Mechanik gibt geringfügig nach, sodass die Kamera trotz nivellierter Basis etwas schief hängen kann.

Ich kontrolliere deshalb den Horizont über den geplanten Schwenkbereich und die Lage der mittleren Bildreihe. Eine möglichst horizontale Schwenkbewegung erleichtert später die Rasterausrichtung mit **„Align to Grid“** in PTGui. Eine schlecht ausgerichtete Aufnahme kann dagegen ein gebogenes Panorama ergeben: Der Horizont verläuft dann wie eine Welle. Das lässt sich mit vertikalen Kontrollpunkten oder „Straighten“ nicht immer einfach korrigieren.

Kamera und Objektiv werden ausbalanciert, Befestigungen und Stativ auf festen Sitz geprüft. Auch bei sorgfältigem Aufbau bleiben eine geringe Durchbiegung, Wind und Ausschwingbewegungen zu berücksichtigen. Die [Mechanikbeschreibung](../mechanik/) zeigt die verstellbare Kameraaufnahme und den Aufbau.

### Warum ausbalancieren?

Eine kopflastige Kamera-Objektiv-Kombination erzeugt ein zusätzliches Drehmoment an der Neigeachse. Eine passende Position auf der Aufnahme entlastet den Antrieb und erleichtert reproduzierbare Bewegungen. Die Balance muss mit der tatsächlichen Ausrüstung und über den benötigten Neigebereich passen; eine stabile Stellung am Horizont allein genügt nicht.

### Wann ist der „Nodalpunkt“ wichtig?

Gemeint ist hier die Drehung möglichst um die **Eintrittspupille des Objektivs**, sodass nahe und ferne Motive beim Schwenken nicht gegeneinander wandern. Dieser Parallaxenfehler ist besonders bei Innenräumen, nahem Vordergrund und sphärischen Aufnahmen mit nahen Objekten relevant. **Meiner Erfahrung nach ist die genaue Position bei weit entfernten Landschaftsmotiven unkritisch, solange keine nahen Objekte im Bild sind.**

Ein praktischer Test nutzt ein nahes und ein fernes Motiv in Deckung: Beim Schwenken sollen sie möglichst nicht gegeneinander versetzt werden. Bei sphärischen Aufnahmen beide Drehachsen berücksichtigen. **Ausbalancieren und parallaxenarm drehen sind zwei verschiedene Anforderungen**, die sich am konkreten Kopf nicht immer zugleich ideal erfüllen lassen. [Die Hugin-Dokumentation erläutert Parallaxe beim Panoramaschwenk.](https://hugin.sourceforge.io/docs/manual/Parallax.html)

## 02 · Kamera einstellen und Testbilder prüfen

### Blende: Vignettierung schon bei der Aufnahme begrenzen

Eine gleichmäßige Bildhelligkeit ist bei Panoramen entscheidend. Ein leichter Helligkeitsabfall in jedem Einzelbild kann im zusammengesetzten Himmel als wiederkehrendes Muster sichtbar werden. **Die Blende muss bereits bei der Aufnahme passen.** Ein Objektivprofil oder eine Kalibrierung ist kein Ersatz dafür, zu starke Vignettierung durch eine ungeeignete Blendeneinstellung zu vermeiden.

Bei meinen 400-mm-Aufnahmen haben sich beispielsweise Blenden um **f/10 bis f/11 oder weiter abgeblendet** bewährt. Die genaue Einstellung hängt vom Objektiv ab. In früheren Versuchen waren bei f/8 noch störende Muster sichtbar. Auch beim Sigma 100–400 mm blieben selbst bei f/13 einige Prozent Helligkeitsabfall zu den Ecken. Deshalb prüfe ich Testbilder, Randbereiche und die geplante Überlappung, bevor die eigentliche Bildserie beginnt.

Abblenden vergrößert auch die Schärfentiefe. Sehr starkes Abblenden kann allerdings durch Beugung feine Details kosten. Die beste Einstellung ist deshalb ein Kompromiss aus Schärfentiefe, Abbildungsleistung und Vignettierung der konkreten Kombination. [Nikon beschreibt den möglichen Auflösungsverlust durch Beugung.](https://onlinemanual.nikonimglib.com/faq/en/shooting_issues/images_not_sharp.html)

### Belichtungszeit und ISO: scharfe Bilder haben Vorrang

Aktuell bevorzuge ich bei langen Brennweiten **1/1000 s oder kürzer**, wenn Bewegung und Wind das erfordern. Dafür setze ich lieber den ISO-Wert höher. Das zusätzliche Rauschen lässt sich später mit **DxO PhotoLab und DeepPRIME** sehr gut reduzieren. Ein verwackeltes Einzelbild lässt sich auf diesem Weg nicht wieder scharf machen.

Ich stelle die **Belichtung vor dem Start richtig ein und verändere sie während der gesamten Serie nicht**. Blende, Belichtungszeit und ISO bleiben fest; automatische Belichtungsanpassungen zwischen den Bildern würden den späteren Helligkeitsabgleich erschweren. Ein kurzer Test auf wichtige helle und dunkle Bildbereiche gehört deshalb vor die Aufnahme.

### Worauf fokussieren? Schärfentiefe und Vordergrund

Vor der Serie muss feststehen, **welcher Entfernungsbereich scharf sein soll**. Für eine reine Fernlandschaft dient ein geeignetes fernes Detail als Fokusziel. In einer vergrößerten Testaufnahme lässt sich prüfen, ob es tatsächlich scharf ist. Auf eine Unendlich-Markierung am Objektiv allein sollte man sich nicht verlassen.

Ein scharfer Hintergrund garantiert keinen scharfen Vordergrund. Die nutzbare **Schärfentiefe**, auch Tiefenschärfe genannt, hängt unter anderem von Brennweite, Blende, Fokusentfernung und dem geforderten Detailmaßstab ab. Gerade im Gigapixelzoom können nahe Wiesen, Äste oder ein Geländer deutlich unscharf erscheinen. Vor dem Start entscheiden: den Vordergrund bewusst unscharf lassen, aus dem Bild nehmen oder Aufnahmeabstand, Blende und Fokusplanung anpassen. Bei sphärischen Panoramen mit nahen Objekten ist diese Frage besonders wichtig.

Ich stelle zunächst mit **Autofokus** scharf und schalte anschließend auf **manuellen Fokus** um. Dieser Fokus-Lock verhindert, dass die Kamera während der Bildserie neu fokussiert. Den wichtigen Entfernungsbereich und gegebenenfalls den Vordergrund prüfe ich vor der großen Serie. **Bei der Entwicklung bleibt nur wenig Spielraum für eine Schärfekorrektur; ein falsch gesetzter Fokus lässt sich damit kaum retten.** Die Bilder speichere ich als **RAW**, um Reserven für die Entwicklung und feine Helligkeitsverläufe zu erhalten. Die **Sony A7R V liefert 14-Bit-RAW-Daten**; bei Serienbildern mit dem RAW-Dateityp „Compressed“ sind es 12 Bit. [Sony dokumentiert die Bittiefe und diese Ausnahme im Handbuch.](https://helpguide.sony.net/ilc/2230/v1/en/print.pdf)

### Silent Shutter für lange Bildserien

Ich verwende durchgehend **Silent Shutter, also den vollständig elektronischen Verschluss**, um die mechanische Verschlusseinheit bei den vielen Einzelaufnahmen zu schonen.

Das zeilenweise Auslesen kann bei Bewegung weiterhin Rolling-Shutter-Verzerrungen verursachen. Kurze Belichtungszeiten verhindern diesen Effekt nicht grundsätzlich; die Mechanik muss deshalb vor jeder Aufnahme zur Ruhe kommen. Unter flackerndem Kunstlicht können außerdem Helligkeitsbänder entstehen. Diese Einschränkungen beschreibt auch [Sony für Silent Shooting](https://www.sony.com/electronics/support/e-mount-body-ilce-1-series/ilce-1/articles/00122352).

**Aufnahmebeispiel aus 2023:** Sony A7R II mit Minolta AF 100–400 mm F4.5–6.7 APO, 400 mm, f/11, 1/400 s und ISO 100–200; mit DeepPRIME waren auch ISO 500 brauchbar. Bei damaligen Versuchen hatte ich Helligkeitsverläufe beobachtet und Zeiten kürzer als ungefähr **1/600 s** vermieden. Diese Beobachtung gilt für die damaligen Aufnahmen. Heute nutze ich die A7R V und bevorzuge unter passenden Bedingungen 1/1000 s oder kürzer.

## 03 · Raster planen und die Bildserie aufnehmen

Ich stimme Bildwinkel, Brennweite, Abdeckung und Überlappung aufeinander ab. Meist plane ich **30–40 % Überlappung**. Sie hilft bei der späteren Ausrichtung und erlaubt es, problematische Bildränder beim Stitching weniger stark zu verwenden. Das ersetzt die passende Blendeneinstellung nicht.

Vorbeiziehende Wolken und ihre Schatten verändern die Helligkeit der Landschaft. [Die PTGui-Rasteransicht weiter unten](#ptgui-align-to-grid) zeigt die starken Helligkeitsunterschiede durch schnellziehende Wolken im Fichtelgebirge-Panorama. Eine große Serie kurz vor Sonnenuntergang kann ebenfalls starke Helligkeitsverläufe bekommen. Das geeignete Aufnahmefenster ist deshalb genauso wichtig wie ein korrekt eingestelltes Raster.

Nach jeder Bewegung muss die Plattform zur Ruhe kommen, bevor die Kamera auslöst. Zusätzlich braucht die Kamera Zeit zum Speichern. In meinem früheren RAW-Aufbau begrenzte das die Geschwindigkeit auf etwa **2–3 Sekunden pro Bild**.

### Settlingdauer und Überlappung gemeinsam testen

Die **Settlingdauer** ist die Wartezeit nach dem Verstellen des Kopfes, in der die Mechanik ausschwingt. Sie hängt von Last, Bewegung, Aufbau und Wind ab. Eine kurze Belichtungszeit und ausreichendes Ausschwingen erfüllen unterschiedliche Aufgaben; sie ersetzen einander nicht pauschal. Die passende Wartezeit wird mit der tatsächlichen Kamera und dem Objektiv nach typischen Verfahrschritten geprüft.

Die Überlappung muss **horizontal und vertikal** passen. Gemeinsame Motivteile helfen beim Ausrichten und lassen Spielraum für Bildränder, Masken und die Nahtführung. Eine kleine Probeserie, beispielsweise 2 × 2 Bilder, zeigt mehr als ein einzelnes Testfoto: Sind die Bilder nach der Bewegung scharf, passen Fokus und Schärfentiefe, und decken Nachbarbilder die Szene ohne Lücken ab?

| Vor der großen Serie prüfen | Worauf es ankommt |
| --- | --- |
| Aufnahmeart und Objektiv | Gewünschte Abdeckung, Detailauflösung, Bildzahl und erreichbarer Schwenkbereich. |
| Balance und Drehachsen | Reale Last, Kameraneigung und bei nahem Vordergrund der Nah-/Fern-Versatz. |
| Fokus und Schärfentiefe | Wichtiges Motiv scharf; Umgang mit unscharfem Vordergrund bewusst festgelegt. |
| Blende | Schärfentiefe, Randabbildung und Vignettierung gegen Beugung abwägen. |
| Belichtungszeit und ISO | Scharfe Einzelbilder unter den tatsächlichen Bedingungen; konsistente Belichtung der Serie. |
| Settlingdauer | Nach typischen Bewegungen ausreichend ruhige Kamera; Aufnahme- und Speicherzyklus berücksichtigen. |
| Bildüberlappung | Horizontal und vertikal ausreichend gemeinsame Bildfläche; keine Lücken. |

### Den Aufnahmeplan prüfen und starten

In der Vorschau prüfe ich Kameraprofil, Bildausschnitt, Überlappung und die Wartezeiten zwischen den Aufnahmen. Dann übertrage ich den Plan und warte auf die Bestätigung vom Kopf. Erst mit Start beginnt die Serie. Während die Firmware die Kamera bewegt und auslöst, zeigt die App den Fortschritt und mögliche Warnungen.

Android und Windows speichern den Aufnahmeverlauf und schreiben die Kamerapositionen als Papywizard-XML-Datei. Vor dem Export prüfe ich, ob alles gesichert ist. Nach einer Unterbrechung kontrolliere ich zuerst die Verbindung und die Referenzposition des Kopfes. Dann kann ich ab der betroffenen oder der vorherigen Spalte weitermachen. Bei sphärischen Aufnahmen bleiben die ursprünglichen Bänder erhalten. Auch diesen **Restauftrag – einen Plan nur für die noch fehlenden Positionen –** muss ich erst laden und danach starten.

Den Ablauf beschreibe ich im [Beispiel zur Wiederaufnahme](../software/#beispiel-eine-unterbrochene-serie-fortsetzen). Auf der [Softwareseite stehen die gemeinsam geprüften Versionen](../software/#geprüfter-stand-und-passende-anleitungen) von Apps, Firmware und Motorprofil. Vor einer wichtigen Bildserie teste ich die Einstellungen mit meinem Aufbau. Der erneute Praxistest der Wiederaufnahme nach einem echten Fehler und die Prüfung auf dem Surface stehen noch aus.

Die Steuerung zeichnet die gemessenen Kamerawinkel zu den Auslöseereignissen auf. Diese Daten helfen später bei der Anordnung in PTGui. Sie bestätigen jedoch nicht, dass die Kamera jede Datei gespeichert hat oder dass das Bild scharf ist. Vollständigkeit und Bildqualität werden anhand der tatsächlichen Kameradateien geprüft. Wird eine Spalte oder ein Band wiederholt, müssen die zusätzlichen Bilddateien beim Zusammenstellen des Projekts berücksichtigt werden.

Früher habe ich lange mit den leichten Bridgekameras Lumix FZ28 und FZ200 gearbeitet. Sie bieten einen großen Zoombereich. Bei vergleichbarem Bildausschnitt und langer Brennweite kann Vollformat die benötigte Bildzahl und Aufnahmezeit reduzieren; zugleich steht in meinen Aufnahmen mehr Spielraum beim Rauschen zur Verfügung. Das muss ich bei der Planung berücksichtigen.

## 04 · RAW-Dateien entwickeln

Eine RAW-Datei enthält die weitgehend unverarbeiteten Messwerte des Kamerasensors. **Entwickeln** bedeutet, daraus ein nutzbares Farbbild zu berechnen: Farbwerte rekonstruieren, Weißabgleich und Helligkeitsverlauf festlegen, Rauschen reduzieren und geeignete optische Korrekturen anwenden. Anders als bei einem fertigen Kamera-JPEG kann ich diese Entscheidungen später erneut aus den RAW-Daten berechnen.

Ich verwende **[DxO PhotoLab 9](https://www.dxo.com/dxo-photolab/)**. DeepPRIME hilft mir, die für kurze Belichtungszeiten bewusst erhöhten ISO-Werte zu nutzen, ohne zu viel Detail durch Rauschen zu verlieren. Alternativen sind etwa [Capture One](https://www.captureone.com/), Adobe Lightroom beziehungsweise Camera Raw sowie die freien RAW-Entwickler [darktable](https://www.darktable.org/) und [RawTherapee](https://rawtherapee.com/). Welche Ergebnisse passen, hängt auch von Kamera, Objektiv und den verwendeten Profilen ab.

### Praxisbeispiel: Fichtelgebirge

Am Beispiel meines [Fichtelgebirge-Panoramas](https://d1cq0fc6qm76ez.cloudfront.net/Fichtelgebirge011126/index.html) zeige ich die Bearbeitung von der RAW-Entwicklung bis zum fertigen Panorama. Die Detailansichten des Sendeturms auf dem Ochsenkopf veranschaulichen die Entwicklung in DxO PhotoLab 9; die anschließenden PTGui-Screenshots zeigen, wie die Einzelbilder ausgerichtet und zusammengefügt werden.

<figure><img data-full-size="/images/articles/workflow/dxo-before-deepprime.webp" src="/images/articles/workflow/dxo-before-deepprime-preview.webp" alt="Sendeturm im Vergleich: links das RAW-Bild, rechts die DxO-PhotoLab-Vorschau mit ClearView und Kontrastverbesserung" width="1200" height="724" loading="lazy"/><figcaption>RAW-Entwicklung in DxO PhotoLab 9. Links: das RAW-Bild. Rechts: die PhotoLab-Vorschau mit ClearView, Kontrastverbesserung und weiteren Entwicklungseinstellungen. Zum Vergrößern anklicken.</figcaption></figure>

<figure><img data-full-size="/images/articles/workflow/dxo-with-deepprime.webp" src="/images/articles/workflow/dxo-with-deepprime-preview.webp" alt="Detail des Sendeturms auf dem Ochsenkopf aus einem in DxO PhotoLab 9 fertig entwickelten TIFF-Bild mit DeepPRIME-XD3-Rauschminderung" width="621" height="1200" loading="lazy"/><figcaption>Detailansicht eines mit DxO PhotoLab 9 fertig entwickelten TIFF-Bildes. Dabei kam die KI-gestützte Rauschminderung DeepPRIME XD3 zum Einsatz. Der Ausschnitt und die Vergrößerung unterscheiden sich von der Abbildung davor. Zum Vergrößern anklicken.</figcaption></figure>

### Kamera und Objektiv bestimmen die Korrekturen

RAW-Entwicklung ist **kamera- und objektivspezifisch**: Sensorrauschen, Farbwiedergabe, Verzeichnung und Randschärfe sind keine universellen Eigenschaften. DxO vermisst Kamera-/Objektivkombinationen und bietet dafür passende [Optikmodule](https://userguides.dxo.com/photolab/en/overview/). Bei adaptierten oder nicht unterstützten Kombinationen muss ich die Verfügbarkeit prüfen; ein beliebiges Profil ist kein Ersatz für das richtige Objektiv.

Ich entwickle die gesamte Serie mit abgestimmten Einstellungen und einheitlichem Weißabgleich. Die Vignettierung ließe sich bereits während der Entwicklung in DxO PhotoLab korrigieren. **Für meine Panoramen ist es aber besser, die Vignettierungskorrektur allein PTGui Pro zu überlassen.** Deshalb lasse ich sie in PhotoLab ausgeschaltet. Diese Reihenfolge vermeidet, dass zwei Programme den Helligkeitsabfall unabhängig voneinander korrigieren. Andere Korrekturen, etwa chromatische Aberrationen, behandle ich bei Bedarf in der Entwicklung.

So erhält PTGui möglichst gleichmäßig entwickelte, entrauschte Einzelbilder. Das erleichtert Ausrichtung, Überblendung und Helligkeitsabgleich; eine verwackelte Aufnahme oder eine ungeeignete Blende wird dadurch nicht repariert.

### Schärfe korrigieren: nur begrenzter Spielraum

Eine leichte Schärfekorrektur beziehungsweise Nachschärfung kann den Schärfeeindruck verbessern. **Bei falsch gesetztem Fokus lässt sich in der Entwicklung aber nicht mehr viel retten.** Die gewünschte Fokusebene und eine ausreichende Schärfentiefe müssen bereits bei der Aufnahme passen. Deshalb steht die Fokusprüfung vor der Bildserie.

### Dunstkorrektur vor dem Stapel testen

**ClearView Plus, das Werkzeug zur Dunstkorrektur in DxO PhotoLab,** kann entfernte Details sichtbar machen, aber auch neue Helligkeitsverläufe in jedem Einzelbild erzeugen. Im Panorama erschienen sie in meinen Versuchen als wiederkehrende Muster im Himmel. Die üblichen Korrekturen in DxO PhotoLab oder PTGui entfernten sie nicht vollständig. Rund 40 % Überlappung und Randbeschnitt halfen teilweise. Deshalb teste ich eine starke Dunstkorrektur zunächst an einem repräsentativen Ausschnitt.

### Ausgabe und Speicherbedarf

Für PTGui exportiere ich **verlustfreie 16-Bit-TIFF-Dateien**. Die höhere Bittiefe bewahrt feine Helligkeitsverläufe für die weitere Bearbeitung und begrenzt **Banding**, also sichtbare Streifen durch abgestufte Helligkeitsverläufe. Aus einer etwa **41 MB** großen RAW-Datei wurden in meinem Beispiel ungefähr **214 MB** TIFF, also rund fünfmal so viel. Bei mehr als 500 Bildern ist das ein erheblicher Zwischenbestand.

Die RAW-Dateien bleiben meine Grundlage für eine spätere Neuentwicklung. Entbehrliche TIFF-Zwischenstände entferne ich nach dem fertigen Panorama. In meinen Aufnahmen hatten chromatische Aberrationen mit der verwendeten Ausrüstung und den üblichen Einstellungen vergleichsweise wenig Einfluss.

<span id="05--in-ptgui-ausrichten-und-stitchen"></span>

## 05 · In PTGui ausrichten und zusammenfügen (stitchen)

Die TIFF-Serie wird in PTGui geladen. **Papywizard-Positionsdaten** geben der Anordnung einen brauchbaren Ausgangspunkt. Bei ordentlich horizontal ausgerichtetem Panoramakopf funktioniert **„Align to Grid“** für die regelmäßige Rasteranordnung sehr gut — auch dort, wo Himmel oder unscharfer Vordergrund keine verlässlichen Kontrollpunkte liefern.

Ist der Kopf schlecht ausgerichtet oder hängt die Kamera unter Last schief, kann der Horizont im Panorama eine Welle beschreiben. Die Korrektur mit vertikalen Kontrollpunkten und der Horizontausrichtung ist dann mitunter schwierig. Deshalb prüfe ich nicht nur die Libelle, sondern auch die tatsächliche Kameralage. Bewegte Wolken sind trotz ihrer sichtbaren Struktur schlechte Kontrollpunkt-Referenzen.

<figure><img data-full-size="/images/articles/workflow/ptgui-before-alignment.webp" src="/images/articles/workflow/ptgui-before-alignment-preview.webp" alt="PTGui-Detailansicht mit versetzten Häusern und Bäumen vor der Ausrichtung" width="1200" height="728" loading="lazy"/><figcaption>Vor der Ausrichtung: An Häusern und Bäumen sind die gegeneinander versetzten Einzelbilder deutlich zu erkennen. Zum Vergrößern anklicken.</figcaption></figure>

<figure id="ptgui-align-to-grid"><img data-full-size="/images/articles/workflow/ptgui-align-to-grid.webp" src="/images/articles/workflow/ptgui-align-to-grid-preview.webp" alt="PTGui-Gesamtansicht des Fichtelgebirges nach Align to Grid mit roten Einzelbildumrissen und starken Helligkeitsunterschieden durch Wolkenschatten" width="1200" height="197" loading="lazy"/><figcaption>Nach „Align to Grid“: Die Einzelbilder liegen im Aufnahmeraster. Die roten Umrisse zeigen ihre Anordnung. Schnellziehende Wolken und ihre Schatten haben während der Aufnahme starke Helligkeitsunterschiede verursacht. Zum Vergrößern anklicken.</figcaption></figure>

Anschließend sucht PTGui in den **überlappenden Bildbereichen nach Kontrollpunkten (Control Points)**: übereinstimmenden Motivdetails in benachbarten Bildern. Im nachfolgenden **Optimierungsschritt** werden diese Kontrollpunkte verwendet, um die Bilder exakt zueinander auszurichten.

### Rasteranordnung prüfen

Nach der Optimierung prüfe ich die Anordnung der Einzelbilder über das gesamte Panorama. Die eingeblendeten Bildumrisse helfen dabei, Versatz und Abweichungen vom Aufnahmeraster zu erkennen.

<figure><img data-full-size="/images/articles/workflow/ptgui-optimized.webp" src="/images/articles/workflow/ptgui-optimized-preview.webp" alt="Optimiertes Fichtelgebirge-Panorama in PTGui mit roten Einzelbildumrissen und transparenten Rändern" width="1200" height="185" loading="lazy"/><figcaption>Optimiertes Panorama mit eingeblendeten Einzelbildumrissen. Die Lage der Bilder lässt sich über die gesamte Aufnahme kontrollieren; Horizont und Helligkeitsverlauf werden danach geprüft. Zum Vergrößern anklicken.</figcaption></figure>

### Horizont, Helligkeitsabgleich und Masken

Mit **PTGui Pro 12** nutzte ich für den Horizont meist **vier bis acht vertikale Kontrollpunkte** oder „Straighten“ (Geraderichten). Die geometrisch richtige Anordnung unterstützt auch einen brauchbaren Helligkeitsabgleich. In den Exposure-/HDR-Einstellungen prüfe ich Exposure Fusion (Belichtungsfusion) und Tone Mapping (Abbildung des Tonwertumfangs); „Keep current“ (aktuelle Werte beibehalten) kann bereits passende Belichtungs-/Vignettierungswerte erhalten. Einzelne verbleibende Belichtungsabweichungen korrigiere ich nötigenfalls manuell.

Bewegte Autos und Personen können Doppelkonturen oder Geisterbilder erzeugen. Auch ein am Rand eines Einzelbilds oder an einer Bildnaht abgeschnittenes Objekt lässt sich häufig mit dem **Mask Tool in PTGui Pro** korrigieren: Rot markiert auszuschließende Bereiche, Grün die gewünschten Bildteile. Dafür muss ein anderes Bild das Motiv passend enthalten beziehungsweise ausreichend Ersatzfläche bieten. [Das PTGui-Masking-Tutorial zeigt unter anderem eine an der Naht geteilte Person.](https://www.ptgui.com/examples/masktutorial.html)

Fehlen Teile eines Objekts in sämtlichen Aufnahmen, kann die Maske sie nicht wiederherstellen. Dann kann beispielsweise ein anderer Beschnitt sinnvoll sein. Die Masken steuern die Auswahl vorhandener Bildinformationen.

### Wenn noch Vignettierung übrig bleibt

Die eigentliche Vignettierungskorrektur führe ich in **PTGui Pro** aus. Dabei prüfe ich den Helligkeitsabgleich und den verwendeten Randbeschnitt. Beim Sigma 100–400 mm war der Helligkeitsverlauf im Zentrum relativ flach und fiel in den Ecken stärker ab. In Versuchen mit PhotoLab 7 verbesserten ein passendes Profil und mehr Überlappung, von **25 auf 35 %**, das Ergebnis deutlich. Heute lasse ich die Vignettierungskorrektur bewusst bis PTGui ausgeschaltet; die frühere Profil-Erfahrung ist kein zweiter Korrekturschritt in meinem aktuellen Ablauf.

Für die Kalibrierung kann eine Serie strukturloser Himmelsbilder mit **denselben Einstellungen und demselben Fokus** verwendet werden. Aus ihrem Mittelwert lässt sich ein zweidimensionales Helligkeitsprofil ableiten und auf die 16-Bit-TIFF-Serie anwenden. Mein Werkzeug [**VignettingCorrection.py**](https://github.com/TomNaiser/Gigapixel-Tools/blob/main/VignettingCorrection.py) unterstützt das. Der Ansatz funktionierte in manchen Fällen gut, in anderen nicht. Eine ungeeignete Blende bei der Aufnahme lässt sich damit nicht zuverlässig nachträglich ausgleichen.

<figure><img data-full-size="/images/articles/workflow/ptgui-horizon-vignetting.webp" src="/images/articles/workflow/ptgui-horizon-vignetting-preview.webp" alt="PTGui-Gesamtansicht nach Horizont- und Vignettierungskorrektur ohne rote Einzelbildumrisse" width="1200" height="161" loading="lazy"/><figcaption>Nach Horizont- und Vignettierungskorrektur: Gesamtansicht ohne die roten Einzelbildumrisse. Die Schachbrettflächen am Rand enthalten keine Bilddaten und werden beim endgültigen Beschnitt berücksichtigt. Zum Vergrößern anklicken.</figcaption></figure>

## 06 · Das fertige Panorama prüfen

Das Ergebnis der gezeigten Bearbeitung lässt sich im [Panorama](https://d1cq0fc6qm76ez.cloudfront.net/Fichtelgebirge011126/index.html) interaktiv erkunden und bis in die Details vergrößern.

Vor der Veröffentlichung kontrolliere ich das Panorama auch in hoher Vergrößerung: Übergänge, Geisterbilder, unerwartete Lücken, Schärfe, Horizont und auffällige Helligkeitsmuster. Bewegte Objekte und problematische Überblendungen prüfe ich im Zusammenhang, nicht nur an einzelnen Kontrollpunkten.

Konkret wird im PTGui-Projekt der **Horizont ausgerichtet**, die Lage falsch platzierter Einzelbilder korrigiert und die Auswahl problematischer Objekte mit Masken angepasst. Mit falsch platzierten „Kacheln“ sind hier die Quellbilder im Stitchingprojekt gemeint; die Webkacheln entstehen erst im folgenden Schritt. Die Schärfekontrolle zeigt, ob die Aufnahme gelungen ist. Sie ist kein nachträgliches Einstellen des Fokus in PTGui.

## 07 · krpano-Kacheln erstellen und veröffentlichen

**krpano** besteht aus Werkzeugen zur Aufbereitung und einem interaktiven Panorama-Viewer für den Browser. Ein Gigapixelbild lässt sich nicht sinnvoll wie ein gewöhnliches Foto vollständig auf einmal laden: Die Datei wäre sehr groß, und Speicherbedarf sowie Wartezeit würden das Betrachten erschweren.

Deshalb zerlege ich das fertige Bild mit krpano in **kleine Bildkacheln und mehrere Auflösungsstufen**. In der Übersicht lädt der Viewer eine geringe Auflösung; beim Hineinzoomen nur die benötigten Kacheln des sichtbaren Ausschnitts. So können Besucher Details erkunden, ohne zuerst das gesamte Panorama herunterladen zu müssen. Die [krpano-Werkzeuge](https://krpano.com/docu/tools/) erzeugen die dafür nötige Struktur.

Mit **MAKE PANO (MULTIRES)** erzeuge ich mehrere Auflösungsstufen. Der Viewer lädt später nur die für den aktuellen Bildausschnitt und Zoom nötigen Kacheln. Im früheren Vergleich erzeugte FLAT ungefähr **zehnmal mehr Dateien** als die gewählte MULTIRES-Verarbeitung.

**Warum ich die Dateien zähle:** Viele kleine Dateien machen den Upload aufwendiger. Manche Hosting-Angebote begrenzen außerdem die Dateizahl. Deshalb prüfe ich vor dem Hochladen sowohl die Anzahl der Kacheln als auch ihren Speicherbedarf.

Meine damalige Ausgabe bestand leicht aus **rund 30.000 Dateien**. Kleine **512-Pixel-Kacheln mit etwa 64 kB** erzeugten viel Verwaltungsaufwand; ich beobachtete beim Upload teilweise nur ungefähr **30 kB/s**. Mit **2048-Pixel-Kacheln**, über `multires.config` / `tilesize` eingestellt, sank die Dateizahl und der Upload lief besser.

Die krpano-Ausgabe umfasst HTML, XML und JavaScript. Früher zusätzlich erzeugte Flash-Dateien gehören zur historischen Ausgabe und werden auf der heutigen Seite nicht benötigt. Die Kachelausgabe war kleiner als das große PSB. Die vollständigen Panoramen liegen weiterhin auf AWS/CloudFront; die Website zeigt zunächst eine lokale Vorschau und öffnet die interaktive Aufnahme auf Wunsch. Weitere Aufnahmen liegen auf Gigapan.

### Panoramen auf dem Smartphone betrachten

Auch auf dem Smartphone lädt der Viewer zunächst die Übersicht und beim Hineinzoomen die benötigten Detailkacheln. Mit einem Finger lässt sich der Ausschnitt verschieben, mit zwei Fingern zoomen. Bis neue Details erscheinen, kann je nach Verbindung ein Moment vergehen. Bei Darstellungsproblemen führt „Direkt öffnen“ zur Originalansicht; für mehr Platz lässt sich das Gerät ins Querformat drehen.

<details class="content-note"><summary>Hintergrund: große Dateien erzeugen, öffnen und kacheln</summary>

**PTGui kann PSB-Panoramen mit mehr als 300.000 Pixeln Kantenlänge erzeugen.** Die Grenze von **300.000 × 300.000 Pixeln** betrifft das Öffnen in Photoshop; sie ist keine allgemeine Ausgabegrenze von PTGui. [PTGui erklärt diesen Unterschied ausdrücklich.](https://www.ptgui.com/faq/)

Für den nächsten Schritt zählt jedoch auch das Eingabeformat: Die aktuelle **krpano-Dokumentation nennt für PSB ebenfalls 300.000 × 300.000 Pixel**. Für größere Zwischenbilder kommen dort unter anderem **BigTIFF oder KRO** infrage. Die Kacheldarstellung und die Grenzen eines eingelesenen PSB sind also getrennte Fragen; ein größeres PTGui-PSB lässt sich nicht allein deshalb garantiert direkt in krpano verarbeiten. [Unterstützte krpano-Formate](https://krpano.com/docu/tools/).

Auch bei TIFF und JPG unterscheiden sich Format und Programm: Klassisches TIFF ist auf ungefähr **4 GB** begrenzt, PTGui kann für größere Dateien auf **BigTIFF** wechseln. JPEG erlaubt bis **65.535 Pixel pro Kante**; manche Programme beschränken das Öffnen auf etwa **30.000 Pixel**. Für Gigapan habe ich ein zusammengefügtes, flaches **16-Bit-PSB mit PackBits-Kompression** verwendet.

</details>

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

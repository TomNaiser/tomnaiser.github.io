## Mechanik: leicht, stabil und einstellbar

Ein langes Teleobjektiv macht kleine Positionierfehler und Schwingungen sichtbar. Der Kamerakopf muss deshalb nicht nur schwenken und neigen: Er soll die Kamera tragen, reproduzierbar positionieren und vor jeder Auslösung zur Ruhe kommen. Die Fotos dokumentieren überwiegend den Aufbau mit einer **Sony A7R II**; heute verwende ich eine **Sony A7R V**. Die Entwicklung von Mechanik, Elektronik und Software gehört für mich zusammen.

<figure><img src="/images/articles/hardware/00.webp" alt="Motorisierter Panoramakopf mit Kamera und Teleobjektiv auf einem Stativ im Gelände" loading="lazy"/><figcaption>Der Kamerakopf im fotografischen Einsatz. Die älteren Fotos zeigen überwiegend die A7R II, nicht die heute verwendete A7R V. Kamera und Objektiv sitzen auf der verstellbaren Aufnahme.</figcaption></figure>

Die Kameraauslösung erfolgt über das Kabelinterface des PanoBoard. Die A7R V lässt sich im gleichen Prinzip per Kabel auslösen; zusätzlich bietet sie Möglichkeiten zur drahtlosen Fernbedienung. Eine drahtlose Auslösung durch meine Panoramasteuerung ist hier nicht als bereits umgesetzt dokumentiert.

Wie sich der Kopf bewegt, zeigen die [beiden Videos zum Panoramasystem](../panoramasystem/#kopf-in-aktion).

Die Konstruktion folgt dem mechanischen Grundgedanken von Phil Warners PanoDuino: zwei ServoCity-Getriebe bilden eine Schwenk- und Neigeplattform. Aluminiumrohre verbinden die Baugruppen; gedruckte Klemmblöcke, Winkel und Adapter ermöglichen einen leichten, individuell anpassbaren Aufbau. Die Kamera sitzt auf einer Montageplatte mit Makro-Einstellschlitten. Damit lässt sich ihre Position zur Neigeachse einstellen und die Kamera-Objektiv-Kombination ausbalancieren. Weitere Druckteile unterstützen Ausrichtung und Schwingungsdämpfung.

<figure><img src="/images/articles/hardware/05.webp" alt="Beschriftete Konstruktionsansicht mit Aluminiumrohren, Getrieben, Winkelgeber und Controllergehäuse" loading="lazy"/><figcaption>Beschriftete Konstruktionsansicht: Kameraplatte, Rohrrahmen, Servo-Getriebe, Winkelgeber, Libelle, Controller und Stativadapter.</figcaption></figure>

## Zwei Achsen und echte Positionsrückmeldung

Für Pan und Tilt kommen zwei HiTec HS-785HB mit jeweils einem ServoCity Top-Mount Servo Gearbox mit **5:1-Untersetzung** zum Einsatz. Die Servomotoren sind modifiziert: Ihre interne Positionsregelung ist abgetrennt. Stattdessen treiben externe H-Brücken die Motoren an. Ein PID-Regler in der Arduino-Firmware verwendet die Messwerte der absoluten Winkelgeber, um die Achsen auf ihre Sollposition zu bringen.

An beiden Achsen sitzt je ein **AS5048B mit 14 Bit Winkelauflösung**. Die Geber sind auf TSSOP-14-Trägerplatinen und über Adapter an den I²C-Bus angeschlossen. Die Auflösung des Sensors ist dabei keine pauschale Aussage über die erreichbare mechanische Genauigkeit: Spiel, Kamerabalance, Wind und das Ausschwingen des Aufbaus wirken sich ebenfalls auf das Ergebnis aus.

<figure><img src="/images/articles/hardware/06.webp" alt="Rückansicht der Konstruktion mit Einstellschlitten und Kameraausrichtung" loading="lazy"/><figcaption>Rückansicht mit verstellbarem Makroschlitten und Block zur Kameraausrichtung.</figcaption></figure>

Bei jeder Auslösung werden die gemessenen Schwenk- und Neigewinkel gespeichert. Diese Positionsdaten können als **Papywizard-XML** an PTGui weitergegeben werden. Damit verbinden die Geber die präzise Bewegung mit dem späteren Stitching. Sie bestätigen jedoch keine gespeicherte oder scharfe Bilddatei; das wird im fotografischen Workflow geprüft.

## Bauteile und Abmessungen

Die ursprüngliche Stückliste beschreibt den abgebildeten mechanischen Aufbau. Der darin genannte Mega-Controller gehört zu einer älteren Elektronikgeneration. Den heutigen **Arduino Nano R4** und die notwendigen Änderungen am PanoBoard beschreibe ich auf der [Elektronikseite](../elektronik/).

| Baugruppe | Ausführung / Anzahl |
| --- | --- |
| Winkelstück | 3D-gedruckt |
| Klemm- / Endblöcke | 2 ×, 3D-gedruckt |
| Horizontale Streben | 2 × Aluminiumrohr, Ø 12 mm, Länge 225 mm |
| Vertikale Streben | 2 × Aluminiumrohr, Ø 12 mm, Länge 198 mm |
| Getriebe | 2 × ServoCity Top-Mount Servo Gearbox, 5:1 |
| Motoren | 2 × HiTec HS-785HB, auf externe H-Brücke und PID-Regelung umgebaut |
| Absolute Winkelgeber | 2 × AS5048B, 14 Bit, TSSOP-14-Platine und I²C-Kabeladapter |
| Kameraaufnahme | Montageplatte, Makro-Einstellschlitten, Ausrichtungsblock |
| Nivellierung | Libelle |
| Stativanschluss | 3D-gedruckter Adapter |
| Gehäuse | Gedruckte Controllerbox |
| Weitere Teile | Gedruckte Hilfen für Kameraausrichtung und Schwingungsdämpfung |
| Historische Steuerung | Arduino Mega 2560 und Velleman KA03 Motor-/Power-Shield |

<figure><img src="/images/articles/hardware/07.webp" alt="Vorderansicht der Neigeachse und Rohrkonstruktion" loading="lazy"/><figcaption>Vorderansicht des Kamerakopfs.</figcaption></figure>
<figure><img src="/images/articles/hardware/08.webp" alt="Seitenansicht der Kamerabefestigung und des Makroschlittens" loading="lazy"/><figcaption>Seitenansicht der Kameraaufnahme.</figcaption></figure>
<figure><img src="/images/articles/hardware/09.webp" alt="Draufsicht von Kameraplatte und Einstellschlitten" loading="lazy"/><figcaption>Draufsicht: Einstellweg und Lage der Kamera zur Neigeachse.</figcaption></figure>
<figure><img src="/images/articles/hardware/10.webp" alt="Panoramakopf mit geneigter Kamera" loading="lazy"/><figcaption>Die Neigeachse in einer ausgelenkten Stellung.</figcaption></figure>
<figure><img src="/images/articles/hardware/11.webp" alt="Konstruktion mit Kamera in Hochformatausrichtung" loading="lazy"/><figcaption>Weitere Ansicht der Kameraausrichtung und Achslage.</figcaption></figure>

## Wie der Aufbau entstanden ist

2003 begann ich mit der Panoramafotografie. Die erste automatisierte Plattform von 2008 nutzte RC-Servos und eine Conrad C-Control. Mit ungefähr vier Sekunden pro Bild war sie recht schnell, mechanisch aber nicht zuverlässig genug: Große Überlappung half bei Positionierfehlern, verhinderte jedoch nicht jede ausgelassene Bildspalte.

<div class="video-callout"><div><span class="eyebrow">ENTWICKLUNGSGESCHICHTE / VIDEO</span><h3>Mein erster Pan-Tilt-Panoramakopf</h3><p>Das Video zeigt meinen ersten Pan-Tilt-Panoramakopf mit Servo-Triggerung.</p></div><a class="button primary" href="https://www.youtube.com/watch?v=dIgWIq7W5Yg" target="_blank" rel="noopener noreferrer">Ersten Panoramakopf auf YouTube ansehen ↗</a></div>

Eine Orion-/Merlin-Montierung war stabiler und per Bluetooth steuerbar, auf Bergtouren jedoch schwer. Wegen der tief in der Firmware verankerten Geschwindigkeitsgrenzen kam ich auf ungefähr sieben Sekunden pro Bild. Ein direkt angetriebener Schrittmotor an der Pan-Achse benötigte viel Strom zum Halten; ohne Microstepping blieb die Positionierung grob. Motor- und Batteriegewicht führten zurück zu leichten, schnellen RC-Servos und untersetzten Getrieben. Phil Warners [PanoDuino](https://blog.arduino.cc/2010/03/15/282/) gab die mechanische Inspiration.

### PanoDuino Nummer 1

Der Arduino Mega 2560 vermittelte zunächst zwischen Bluetooth, Pololu Micro Maestro und Kameraauslösung. Die Servo-Bewegungen wurden beschleunigt und abgebremst; ein **LSM303 direkt auf der Kameraplattform** erfasste Bewegung und Vibration über I²C. Erst nach dem Beruhigen wurde ausgelöst. In diesem historischen Aufbau erreichte ich etwa 40–45 Bilder pro Minute; das ist kein allgemeines Leistungsversprechen für den heutigen Kopf.

<figure><img src="/images/articles/hardware/16.webp" alt="Blockdiagramm der ersten Panoduino-Steuerung mit Mega und Pololu Maestro" loading="lazy"/><figcaption>Systemübersicht von PanoDuino Nummer 1. Diese Elektronik gehört zur frühen Version.</figcaption></figure>

Die Canon PowerShot G9 mit 2×-Telekonverter wurde über CHDK und den USB-Anschluss ausgelöst. Im manuellen Fokus auf unendlich genügte ein ungefähr 40 ms langer Impuls. Mit aktiviertem Safety Focus wurden zwei Impulse verwendet: einer zum Fokussieren und einer zum Auslösen. Später ergänzte die Lumix FZ200 das System mit 600 mm Kleinbildäquivalent bei f/2,8 und 12 Bildern/s im Serienmodus. Optokoppler ersetzten mechanische Kontakte der Fernauslösung.

Zur damaligen Versorgung gehörten ein minigorilla-Akku mit 9.000 mAh und bis zu 3 A sowie ein UBEC für die 5-V-Servoversorgung. Das F2M03GXA-Bluetooth-Modul erschien am Rechner als serieller COM-Port. Der Mega war dafür leistungsfähiger als nötig, bot aber die praktischen Arduino-Shield-Anschlüsse. Die älteren Fotos zeigen teilweise noch einen schweren NiMH-Akku.

<figure><img src="/images/articles/hardware/17.webp" alt="Früher Panoramakopf mit Canon PowerShot G9" loading="lazy"/><figcaption>Früher Aufbau mit Canon PowerShot G9 und Telekonverter.</figcaption></figure>
<figure><img src="/images/articles/hardware/18.webp" alt="Historischer Kamerakopf auf Stativ mit angeschlossenem Notebook" loading="lazy"/><figcaption>Die erste Plattform mit Notebook-Steuerung.</figcaption></figure>
<figure><img src="/images/articles/hardware/19.webp" alt="Rückseite der frühen Panoduino-Plattform mit Verkabelung" loading="lazy"/><figcaption>Rückansicht der frühen Elektronik und Mechanik.</figcaption></figure>
<figure><img src="/images/articles/hardware/20.webp" alt="Frontalansicht der frühen Servoplattform" loading="lazy"/><figcaption>Frühe Servo-Plattform, Vorderansicht.</figcaption></figure>
<figure><img src="/images/articles/hardware/21.webp" alt="Seitliche Detailansicht der frühen Achskonstruktion" loading="lazy"/><figcaption>Detail der frühen Achskonstruktion.</figcaption></figure>
<figure><img src="/images/articles/hardware/22.webp" alt="Kamera auf der ersten Panoduino-Plattform" loading="lazy"/><figcaption>Weitere Ansicht des historischen Aufbaus.</figcaption></figure>
<figure><img src="/images/articles/hardware/23.webp" alt="Panoramakopf im Außeneinsatz mit Telekamera" loading="lazy"/><figcaption>Ein früher Außeneinsatz der Plattform.</figcaption></figure>

### Alternative mechanische Basis

In den ursprünglichen Notizen hatte ich fertige ServoCity-Pan-/Tilt-Kits als mögliche Basis genannt. Ich habe diese Alternative selbst weder gesehen noch getestet. Die Übernahme der Steuerung würde Anpassungen erfordern, etwa das Abtrennen der internen Servo-Regelung. Ob ein vereinfachter Aufbau ohne externe Encoder ausreichend wäre, war eine damalige Überlegung und kein getestetes Ergebnis.

## Quelldateien und Weiterarbeit

- [PanoBoard: Elektronik und Nano-R4-Umrüstung](https://github.com/TomNaiser/PanoBoard)
- [PanoDuinoControl: Firmware, Bewegung und Auslösung](https://github.com/TomNaiser/PanoDuinoControl)
- [PanoramaControl: Windows-Anwendung](https://github.com/TomNaiser/PanoramaControl)
- [PanoramaSoftware: Android, Dokumentation und Systemüberblick](https://github.com/TomNaiser/PanoramaSoftware)

Die Abbildungen stammen aus meiner bisherigen Projektseite. Aufbaugeschichte, historische Stückliste und aktuelle Entwicklung sind hier zeitlich getrennt, damit die technischen Details nachvollziehbar bleiben.

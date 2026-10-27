## Vom Aufnahmeplan zum fertigen Bilderraster

Ein Gigapixel-Panorama besteht aus Hunderten, manchmal Tausenden Einzelbildern. Mit PanoramaControl lege ich fest, welchen Bereich die Kamera aufnehmen soll und wie stark sich die Bilder überlappen. Der motorisierte Kopf fährt die Positionen ab und löst die Kamera aus. Die aufgezeichneten Kamerawinkel helfen später beim Zusammensetzen in PTGui.

- **Planen:** Kamera-/Objektivprofil wählen und Raster oder sphärische Bänder in der Vorschau prüfen.
- **Aufnehmen:** Fortschritt und Warnpunkte verfolgen, pausieren oder eine Spalte wiederholen.
- **Weiterarbeiten:** Eine unterbrochene Serie fortsetzen und die Kamerapositionen für PTGui exportieren.

Den Kopf kann ich per Bluetooth vom Android-Gerät oder vom Windows-Rechner aus bedienen; verbunden ist jeweils **ein Gerät**. Das Übertragen des Plans startet noch keine Aufnahme. Erst mit Start beginnt die Bildserie. Bewegung, Warten auf eine ruhige Kamera und Auslösen übernimmt die Firmware im Kopf. Wie daraus ein fertiges Panorama wird, beschreibe ich im [Workflow](../workflow/).

## Android und Windows in der Praxis

**Android** ist für die Bedienung vor Ort gedacht: Kameraprofil wählen, den Aufnahmebereich festlegen und den Fortschritt verfolgen. Die Oberfläche gibt es auf Deutsch und Englisch. In der Vorschau markieren Blau und Rot den Anfang und das Ende der Serie. Das gezeigte Profil A7R II / 400 mm dient als Beispiel. Auch bei sphärischen Aufnahmen berücksichtigt die Planung die Bewegungsgrenzen des Kopfes.

<figure id="android-app-screenshot"><img src="/images/articles/software/android-app.png" alt="Android-App PanoramaControl in der Ansicht Plan mit Aufnahmeraster, Start- und Endpunkt sowie Kameraprofil" loading="lazy"/><figcaption>Planungsansicht der Android-App, hier ohne Verbindung zum Kopf. Zum Vergrößern das Bild anklicken.</figcaption></figure>

**Windows** bietet auf dem Notebook oder Surface mehr Platz für die Vorschau und die Kameraeinstellungen. Neben der Aufnahme in Rasterspalten oder sphärischen Bändern lassen sich einzelne Positionen anfahren, Spalten wiederholen und Zeitraffer planen. Beide Apps speichern Aufnahmeverläufe und können daraus die noch fehlenden Aufnahmen vorbereiten. Die Bedienung und einige Exportmöglichkeiten unterscheiden sich.

<figure id="windows-app-screenshot"><img src="/images/articles/software/windows-grid-27-5-4-fit-en.png" alt="PanoramaControl 27.5.4 auf Englisch mit eingepasstem Aufnahmeraster aus sieben Spalten und drei Zeilen" loading="lazy"/><figcaption>Windows-Version 27.5.4 mit englischer Oberfläche. „Fit plan“ passt die Vorschau an das geplante Raster an. Für diese Abbildung wurde ein Gerät simuliert; ein echter Kamerakopf war nicht verbunden.</figcaption></figure>

## Fortschritt sichern und für PTGui exportieren

Die Apps protokollieren die Aufnahmen auf dem jeweiligen Gerät in einer SQLite-Datenbank. Parallel schreiben sie die Kamerapositionen im **Papywizard-XML-Format**, das PTGui einlesen kann. Jede neue Sicherung ersetzt die vorherige erst, wenn die Datei fertig geschrieben ist. Die Statusanzeige meldet, wenn noch Daten fehlen oder das Speichern nicht geklappt hat. Nach einem Neustart lassen sich fehlende Einträge aus dem Archiv ergänzen.

Beim Export als XML oder CSV können mehrere zusammengehörige Teilläufe in eine Datei eingehen. Die Archive bleiben auf dem jeweiligen Gerät; Android und Windows gleichen sie nicht automatisch miteinander ab.

Die **Fotos bleiben auf der Kamera**. Erst beim Stitching kommen Bilder und Positionsdaten zusammen. Habe ich eine Spalte wiederholt, muss ich die zusätzlichen Fotos richtig zuordnen. Den nächsten Schritt zeige ich im [PTGui-Abschnitt des Workflows](../workflow/#05--in-ptgui-ausrichten-und-stitchen).

## Beispiel: eine unterbrochene Serie fortsetzen

Bricht eine Serie mitten in einer Spalte ab, bleiben die bisherigen Aufnahmen im Archiv. Aus dem ursprünglichen Plan lässt sich ein sogenannter Restauftrag erstellen, der die noch fehlenden Positionen enthält:

1. **Ursache klären:** Verbindung und Referenzposition des Kopfes prüfen. Nach einer normalen Pause genügt Fortsetzen; nach Stop oder einem Fehler kann ein Restauftrag nötig sein.
2. **Einstieg wählen:** Ab der unterbrochenen oder der vorherigen ganzen Spalte weitermachen. Bei sphärischen Aufnahmen bleiben die ursprünglichen Bänder erhalten.
3. **Plan laden:** Den Restauftrag übertragen und auf die Bestätigung vom Kopf warten.
4. **Aufnahme starten:** Erst jetzt beginnt die Fortsetzung. Beide Teilläufe bleiben für den Export verbunden. Wiederholte Aufnahmen werden dabei mitgeführt.

Unter Windows öffnet **„Läufe & Warnpunkte → Restauftrag …“** diese Auswahl. Passt die Referenzposition nicht mehr oder lässt sich die Verbindung keinem Gerät eindeutig zuordnen, bleibt die Fortsetzung gesperrt. Die [Bedienungsanleitung](https://github.com/TomNaiser/PanoramaSoftware/blob/main/docs/02-bedienung-und-acquise.md#pause-stop-und-fortsetzung) erklärt die einzelnen Fälle. Die Funktion ist in beiden Apps vorhanden. Noch ausstehend sind ein erneuter vollständiger Praxistest nach einem echten Fehler und die Prüfung des gesamten Ablaufs auf dem Surface.

## Präziser positionieren: die Messwerte

Die Winkelgeber zeigen, wie nah der Kopf an die geplante Kameraposition kommt. Mit engeren Toleranzen im **gespeicherten Motorprofil** korrigiert die Steuerung auch kleinere Abweichungen der Pan-Achse. Da diese Einstellung im Kopf liegt, wirkt sie bei beiden Apps.

Für Revision 40 wurden **96 Aufnahmeereignisse** ausgewertet. Die größte Pan-Abweichung lag bei **0,236°**, der Median bei **0,089°**. Im längeren Lauf mit 72 Aufnahmen gab es noch 13 Warnungen wegen verfehlter Zielpositionen; die größte Tilt-Abweichung betrug dort 0,315°. Die Werte gelten für diesen Testaufbau. Wie sich andere Lasten und Wind auswirken, muss weiter geprüft werden. Ob jedes Foto vorhanden und scharf ist, kontrolliere ich anschließend an den Bilddateien.

Der [Pan-Korrekturbericht](https://github.com/TomNaiser/PanoramaSoftware/blob/main/docs/validation/2026-10-27-pan-positioning.md) enthält die Messreihen, Bedingungen und geänderten Parameter.

## Geprüfter Stand und passende Anleitungen

**Stand vom 27. Oktober 2026:** Diese Kombination wurde gemeinsam am Kopf geprüft:

| Bestandteil | Referenzstand |
| --- | --- |
| Arduino-Nano-R4-Firmware | 2.4.75 |
| Android-App | 0.6.27 |
| Windows-Anwendung | 27.5.4 |
| Gespeichertes Motorprofil | Revision 40; Revision 39 als Rückfallprofil |

Die zugehörigen Quellen sind im [Referenzstand auf GitHub](https://github.com/TomNaiser/PanoramaSoftware/tree/referenz-2026-10-27-gut-laufend) festgehalten. Für die geänderten Pan-Toleranzen genügt das Motorprofil; eine neue Firmware ist dafür nicht nötig. Das Profil muss separat übertragen werden. Firmware **2.4.76** enthält einen Versuch zur Tilt-Referenzierung und gehört nicht zu der oben geprüften Kombination.

- **Bedienung:** [Deutsches Handbuch](https://github.com/TomNaiser/PanoramaSoftware/blob/main/docs/README.md) und [kurze englische Anleitung](https://github.com/TomNaiser/PanoramaSoftware/blob/main/docs/en/manual.md).
- **Funktionen und Prüfungen:** [Funktionsmatrix](https://github.com/TomNaiser/PanoramaSoftware/blob/main/docs/08-funktionsstand.md) und [Prüfbericht](https://github.com/TomNaiser/PanoramaSoftware/blob/main/docs/validation/2026-10-27-pan-positioning.md).
- **Apps und Quellcode:** [Android](https://github.com/TomNaiser/PanoramaSoftware/tree/main/PanoramaAndroid), [Windows](https://github.com/TomNaiser/PanoramaControl) und [Firmware](https://github.com/TomNaiser/PanoDuinoControl).
- **Aufbau und Bildverarbeitung:** [PanoBoard-Elektronik](../elektronik/) und [meine Stitching-Werkzeuge](../workflow/#05--in-ptgui-ausrichten-und-stitchen).

## Frühere Windows-Oberfläche

<figure><img src="/images/articles/hardware/15.webp" alt="Historische Windows-Oberfläche von PanoramaControl mit Aufnahmeraster" loading="lazy"/><figcaption>So sah eine frühere Version aus: Kameraeinstellungen und Aufnahmeraster waren schon damals die zentralen Elemente.</figcaption></figure>

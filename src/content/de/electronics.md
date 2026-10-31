## PanoBoard: Elektronik mit Versionsgeschichte

Anfangs bestand die Steuerung aus einem Arduino Mega mit Motor-Shield, Spannungswandlern, Bluetooth-Modul, Auslöseschaltungen und vielen Einzelverbindungen. Das PanoBoard führte die Funktionen auf einer eigenen Platine zusammen. Die damalige Nano-Version integrierte H-Brücken, ein SparkFun BlueSMiRF Gold und die Auslösung für Sony A7R II beziehungsweise Panasonic FZ200.

<figure><img src="/images/articles/hardware/12.webp" alt="PanoBoard V4 Schaltplan vom April 2019" loading="lazy"/><figcaption>PanoBoard V4, April 2019: historischer Eagle-Schaltplan. Zum Vergrößern das Bild öffnen; für einen Nachbau die revisionsbezogenen Quelldateien verwenden.</figcaption></figure>
<figure><img src="/images/articles/hardware/13.webp" alt="Leiterplattenlayout des PanoBoard V4" loading="lazy"/><figcaption>Leiterplattenlayout der Version V4.</figcaption></figure>
<figure><img src="/images/articles/hardware/14.webp" alt="PanoBoard V3 im Controllergehäuse mit Bluetooth-Modul und Spannungswandler" loading="lazy"/><figcaption>Ältere Version V3 im Gehäuse mit Nano, BlueSMiRF Gold und einem Wandler von 12 V auf 7,5 V.</figcaption></figure>

## Warum Arduino Nano R4?

**Entwicklungsstand 2026:** Die aktuelle Zielplattform verbindet **Arduino Nano R4**, AS5048B und PanoBoard mit der motorisierten Mechanik. Gegenüber dem früheren klassischen Arduino Nano bietet der Renesas-RA4M1-Controller vor allem mehr Rechenleistung und Speicher für Positionsregelung, Kommunikationspuffer, Kalibrierung und Protokollierung.

| Eigenschaft | Klassischer Arduino Nano | Arduino Nano R4 |
| --- | --- | --- |
| Mikrocontroller | ATmega328P, 8 Bit | Renesas RA4M1, ARM Cortex-M4, 32 Bit |
| Takt | 16 MHz | 48 MHz |
| Arbeitsspeicher | 2 KB SRAM | 32 KB SRAM |
| Programmspeicher | 32 KB Flash | 256 KB Flash |
| Logikpegel | 5 V | 5 V |
| USB und serielle Verbindung | USB-UART nutzt D0/D1 mit | USB-C und Hardware-UART sind getrennt |

Die getrennten seriellen Schnittstellen erleichtern insbesondere den gleichzeitigen Umgang mit USB-Diagnose und Bluetooth. Mit mehr Speicher und Rechenleistung lassen sich Regelung und Kommunikation erweitern. Wie schnell eine Bildserie läuft, hängt aber auch davon ab, wie lange der Kopf bewegt wird, die Kamera ausschwingt und ein Foto speichert.

Der [geprüfte Software- und Motorprofilstand](../software/#geprüfter-stand-und-passende-anleitungen) ist auf der Softwareseite dokumentiert. Die aktuelle Pan-Korrektur verändert das im Controller gespeicherte Motorprofil und benötigt keine neue Platinenrevision. Dort findest du auch die Messergebnisse und die noch ausstehenden Praxistests.

Der Arduino Nano R4 ist beim PanoBoard V5 **kein unveränderter Stecktausch**. Meine [Arduino-Nano-R4-Umrüstanleitung](https://github.com/TomNaiser/PanoBoard/blob/master/PanoBoard5KiCad/Nano-R4-Patch.md) beschreibt unter anderem fünf Widerstandsänderungen, die Pull-ups des Encoder-Busses, Versorgung und Firmware-Anpassungen. Die V5-KiCad-Dateien bilden weiterhin die ursprüngliche Bestückung ab. Für den Aufbau ist deshalb die Anleitung der tatsächlich verwendeten Revision maßgeblich.

Technische Eckdaten: [Arduino Nano R4](https://docs.arduino.cc/hardware/nano-r4/) und [klassischer Arduino Nano](https://docs.arduino.cc/hardware/nano/).

## Geplante nächste Schritte

Als Nächstes möchte ich die **KiCad-Dateien des PanoBoard V5 um die beschriebenen Änderungen ergänzen**. Damit würden Schaltung und Layout den gepatchten Aufbau direkt abbilden; derzeit gilt weiterhin die separate Umrüstanleitung.

Eine mögliche spätere **Version V6** könnte eine Arduino-Nano-Variante mit **integriertem Bluetooth Low Energy (BLE)** verwenden. Das ist eine Überlegung, noch kein fertiger Aufbau. Der Wechsel zur **3,3-V-Logik** erfordert eine Überprüfung und gegebenenfalls Anpassung der Pegel, Pull-ups, Ein-/Ausgänge und Versorgungsanschlüsse. BLE ist außerdem kein direkter Ersatz für den bisherigen seriellen Bluetooth-Kanal: Firmware sowie Android- und Windows-Anbindung müssten dazu passen. Erst danach ließe sich beurteilen, welche Baugruppen tatsächlich unverändert weiterverwendet werden können.

## Schaltpläne und Bestückungsdateien

Die Bilder zeigen die dokumentierten Revisionen V3 und V4. Bestückung, Versorgung und Kameraschnittstelle richten sich nach der konkret gebauten Revision. Die gepflegten Dateien und die V5-/Nano-R4-Umrüstung findest du im [PanoBoard-Repository](https://github.com/TomNaiser/PanoBoard).

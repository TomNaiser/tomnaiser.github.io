## PanoBoard and its revisions

Early electronics combined a Mega, motor shield, voltage converters, Bluetooth and shutter circuits with substantial wiring. PanoBoard integrated these functions. Earlier Nano designs incorporated H-bridges, SparkFun BlueSMiRF Gold and shutter interfaces for Sony A7R II and Panasonic FZ200.

<figure><img src="/images/articles/hardware/12.webp" alt="PanoBoard V4 schematic from April 2019" loading="lazy"/><figcaption>Historical V4 Eagle schematic, April 2019.</figcaption></figure>
<figure><img src="/images/articles/hardware/13.webp" alt="PanoBoard V4 PCB layout" loading="lazy"/><figcaption>V4 board layout.</figcaption></figure>
<figure><img src="/images/articles/hardware/14.webp" alt="PanoBoard V3 in its enclosure" loading="lazy"/><figcaption>V3 with Nano, BlueSMiRF Gold and a 12 V to 7.5 V converter.</figcaption></figure>

## Why Arduino Nano R4?

**2026 development target:** **Arduino Nano R4**, AS5048B and PanoBoard. Compared with the earlier classic Arduino Nano, its Renesas RA4M1 provides more processing and memory capacity for position control, communication buffers, calibration and logging.

| Property | Classic Arduino Nano | Arduino Nano R4 |
| --- | --- | --- |
| Microcontroller | ATmega328P, 8 bit | Renesas RA4M1, ARM Cortex-M4, 32 bit |
| Clock | 16 MHz | 48 MHz |
| RAM | 2 KB SRAM | 32 KB SRAM |
| Program memory | 32 KB flash | 256 KB flash |
| Logic level | 5 V | 5 V |
| USB and serial connection | USB UART shares D0/D1 | USB-C and hardware UART are separate |

Separate serial interfaces help with USB diagnostics alongside Bluetooth. More resources give the firmware room to grow; capture speed also depends on movement, settling and the camera.

The software page documents the [tested software and motor-profile reference](../software/#tested-reference-and-useful-guides). The current pan correction changes the motor profile stored in the controller and needs no new PCB revision. Measurements and remaining validation work are linked there.

The Arduino Nano R4 is **not an unchanged drop-in replacement** on PanoBoard V5. My [Arduino Nano R4 conversion guide](https://github.com/TomNaiser/PanoBoard/blob/master/PanoBoard5KiCad/Nano-R4-Patch.md) specifies five resistor changes, encoder-bus pull-ups, supply connections and firmware adjustments. V5 KiCad files still show the original assembly, so use the guide for the actual revision being built.

Technical specifications: [Arduino Nano R4](https://docs.arduino.cc/hardware/nano-r4/) and [classic Arduino Nano](https://docs.arduino.cc/hardware/nano/).

## Planned next steps

My next step is to **update the PanoBoard V5 KiCad files with the documented modifications**, so the schematic and layout directly describe the patched build. The separate conversion guide remains necessary for now.

A possible later **V6** could use an Arduino Nano variant with **integrated Bluetooth Low Energy (BLE)**. This is an idea, not a completed build. Moving to **3.3 V logic** requires checking and potentially adapting signal levels, pull-ups, inputs, outputs and power connections. BLE also does not directly replace the existing serial Bluetooth channel: firmware and the Android and Windows connections would need to support it. That work would establish which parts can actually be retained unchanged.

## Schematic and assembly files

The images document V3 and V4. Match supply, assembly and camera interface to the actual revision. Maintained files and the V5/Arduino Nano R4 conversion are in the [PanoBoard repository](https://github.com/TomNaiser/PanoBoard).

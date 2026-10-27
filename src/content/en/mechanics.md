## Mechanics: light, rigid and adjustable

A long lens reveals positioning errors and vibration. The head must carry the camera, position it repeatedly and settle before exposure. The photographs mainly document the build with a **Sony A7R II**; I now use a **Sony A7R V**. I develop mechanics, electronics and software together, using landscape photography as their practical test.

<figure><img src="/images/articles/hardware/00.webp" alt="Motorized panorama head with camera and telephoto lens in the field" loading="lazy"/><figcaption>The head in use with an adjustable camera mount. Most older photographs show the A7R II, rather than today’s A7R V.</figcaption></figure>

The PanoBoard cable interface triggers the camera. The A7R V supports the same cable-triggering principle and also offers wireless remote-control options. Wireless triggering from my panorama controller is not documented here as an implemented feature.

Watch the head moving in the [two panorama-system videos](../panorama-system/#kopf-in-aktion).

The mechanical approach follows Phil Warner’s PanoDuino: two ServoCity gearboxes form a pan/tilt platform. Aluminium tubes connect the assemblies. Printed clamps, angle pieces and adapters make it light and adaptable. A macro focusing rail adjusts the camera relative to the tilt axis and helps balance the camera/lens combination. Further printed parts support alignment and vibration damping.

<figure><img src="/images/articles/hardware/05.webp" alt="Annotated mechanical drawing showing tubes, gearboxes, encoder and controller enclosure" loading="lazy"/><figcaption>Camera plate, tube frame, geared servos, encoder, level, controller and tripod adapter.</figcaption></figure>

## Two axes with measured position feedback

Both axes use **HiTec HS-785HB servos and ServoCity Top-Mount Servo Gearboxes with 5:1 reduction**. The motors are disconnected from their internal controllers and driven through external H-bridges. An Arduino PID loop uses absolute encoder measurements to approach the requested position.

Each axis has a **14-bit AS5048B absolute encoder**, on a TSSOP-14 carrier with an I²C cable adapter. Sensor resolution is not a guarantee of mechanical accuracy: backlash, camera balance, wind and settling also affect the result. At each shutter release, measured yaw and pitch are recorded in **Papywizard XML** for initial arrangement in PTGui. These records do not verify that the camera saved a sharp photograph.

<figure><img src="/images/articles/hardware/06.webp" alt="Rear view showing the macro focusing rail and alignment block" loading="lazy"/><figcaption>Rear view of the adjustable rail and camera alignment.</figcaption></figure>

## Components and dimensions

This original parts list describes the illustrated build. The Mega controller belongs to an older generation. The [electronics article](../electronics/) describes today’s **Arduino Nano R4** and the required PanoBoard changes.

| Assembly | Specification / quantity |
| --- | --- |
| Angle piece | 3D printed |
| Clamping blocks | 2 ×, 3D printed |
| Horizontal beams | 2 × aluminium tube, Ø 12 mm × 225 mm |
| Vertical beams | 2 × aluminium tube, Ø 12 mm × 198 mm |
| Gearboxes | 2 × ServoCity Top-Mount Servo Gearbox, 5:1 |
| Motors | 2 × HiTec HS-785HB, modified for external H-bridge and PID |
| Encoders | 2 × AS5048B, 14 bit, TSSOP-14 carriers and I²C adapters |
| Camera support | Mounting plate, macro focusing rail, alignment block |
| Levelling | Bubble level |
| Tripod connection | 3D-printed adapter |
| Enclosure | Printed controller box |
| Other parts | Printed alignment and vibration-damping parts |
| Historical controller | Arduino Mega 2560 with Velleman KA03 motor/power shield |

<figure><img src="/images/articles/hardware/07.webp" alt="Front view of the head" loading="lazy"/><figcaption>Front view.</figcaption></figure>
<figure><img src="/images/articles/hardware/08.webp" alt="Side view of camera mount" loading="lazy"/><figcaption>Side view of the camera support.</figcaption></figure>
<figure><img src="/images/articles/hardware/09.webp" alt="Top view of adjustment rail" loading="lazy"/><figcaption>Top view of the adjustment travel.</figcaption></figure>
<figure><img src="/images/articles/hardware/10.webp" alt="Head with tilted camera" loading="lazy"/><figcaption>The tilt axis in an inclined position.</figcaption></figure>
<figure><img src="/images/articles/hardware/11.webp" alt="Another view of camera orientation" loading="lazy"/><figcaption>Camera orientation and axis position.</figcaption></figure>

## How the head evolved

Panorama photography began for me in 2003. A 2008 RC-servo/C-Control platform captured at about four seconds per image but sometimes missed columns through mechanical instability. An Orion/Merlin mount was stable and Bluetooth-capable but heavy, with firmware limiting capture to roughly seven seconds per image. A direct-drive stepper needed substantial holding power and was coarse without microstepping. Weight led me back to light, fast geared servos. [Phil Warner’s PanoDuino](https://blog.arduino.cc/2010/03/15/282/) inspired the mechanics.

<div class="video-callout"><div><span class="eyebrow">DEVELOPMENT HISTORY / VIDEO</span><h3>My first pan/tilt panorama head</h3><p>This video shows my first pan/tilt panorama head with servo triggering.</p></div><a class="button primary" href="https://www.youtube.com/watch?v=dIgWIq7W5Yg" target="_blank" rel="noopener noreferrer">Watch the first panorama head on YouTube ↗</a></div>

### PanoDuino number 1

A Mega 2560 relayed Bluetooth commands to a Pololu Micro Maestro and generated shutter signals. The Maestro provided accelerated motion. An **LSM303 directly on the camera support** measured motion and vibration over I²C, allowing exposure after settling. This historical build achieved 40–45 images per minute; that is not a general performance claim for today’s head.

<figure><img src="/images/articles/hardware/16.webp" alt="First PanoDuino electronics block diagram" loading="lazy"/><figcaption>PanoDuino number 1 with Mega and Pololu Maestro.</figcaption></figure>

A Canon G9 with 2× teleconverter used CHDK USB triggering. Manual infinity focus required one pulse of about 40 ms; Safety Focus used two, for focus and exposure. A later FZ200 provided 600 mm equivalent at f/2.8 and 12 fps continuous shooting. Optocouplers replaced mechanical shutter contacts. Power came from a 9,000 mAh minigorilla supply rated up to 3 A, and a 5 V UBEC for the servos. The F2M03GXA Bluetooth module appeared as a serial COM port. The Mega was more powerful than required but convenient for shields. Some early photos show a heavy NiMH pack.

<figure><img src="/images/articles/hardware/17.webp" alt="Early head with Canon G9" loading="lazy"/><figcaption>Early Canon G9 and teleconverter build.</figcaption></figure>
<figure><img src="/images/articles/hardware/18.webp" alt="Early platform and notebook" loading="lazy"/><figcaption>Original platform with notebook control.</figcaption></figure>
<figure><img src="/images/articles/hardware/19.webp" alt="Rear of early mechanism" loading="lazy"/><figcaption>Early wiring and mechanism.</figcaption></figure>
<figure><img src="/images/articles/hardware/20.webp" alt="Early servo platform front" loading="lazy"/><figcaption>Front view of the original platform.</figcaption></figure>
<figure><img src="/images/articles/hardware/21.webp" alt="Early axis detail" loading="lazy"/><figcaption>Axis detail.</figcaption></figure>
<figure><img src="/images/articles/hardware/22.webp" alt="Camera on the original head" loading="lazy"/><figcaption>Another historical view.</figcaption></figure>
<figure><img src="/images/articles/hardware/23.webp" alt="Early outdoor setup" loading="lazy"/><figcaption>An early field setup.</figcaption></figure>

### Alternative mechanical base

The original notes mentioned ready-made ServoCity pan/tilt kits as a possibility. I have neither seen nor tested them. Adapting the controller would require changes such as disconnecting internal servo control. Simpler mechanics without external encoder PID were an untested possibility.

## Source files

- [PanoBoard](https://github.com/TomNaiser/PanoBoard)
- [PanoDuinoControl firmware](https://github.com/TomNaiser/PanoDuinoControl)
- [PanoramaControl for Windows](https://github.com/TomNaiser/PanoramaControl)
- [PanoramaSoftware, Android and documentation](https://github.com/TomNaiser/PanoramaSoftware)

Illustrations come from my existing project page. Historical builds and current development are identified separately.

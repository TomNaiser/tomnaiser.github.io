## A winter panorama from the air

I captured this panorama in **winter 2010**, using a **GoPro HD Hero** on my home-built hexacopter. Alongside 1080p video, the camera could take a 5-megapixel photograph every two seconds. Its lens covered about 170°. I cropped the image edges before stitching in PTGui.

<figure><img src="/images/articles/aerial/00.webp" alt="Wide snow-covered landscape viewed from a drone" loading="lazy"/><figcaption>Winter panorama from 2010, photographed with a GoPro HD Hero and stitched in PTGui.</figcaption></figure>

## My home-built MikroKopter

The build is based on the [MikroKopter HexaKopter](https://wiki.mikrokopter.de/HexaKopter). The original wiki describes the system and provides technical documentation.

<figure><img src="/images/articles/aerial/01.webp" alt="Home-built six-propeller hexacopter in the sky" loading="lazy"/><figcaption>My home-built MikroKopter hexacopter in flight, 2010.</figcaption></figure>

The build combined photography with technical experimentation. The camera hung beneath the frame. A useful viewpoint was only part of the challenge: motor vibration could visibly distort the images.

## Vibration and the jello effect

A CMOS sensor reads the image sequentially. If vibration changes the camera’s orientation during readout, the result can have wave-like distortion: the **jello effect**. I isolated the camera from the frame using a soft, viscously damping sponge. Tape limited swinging, while well-balanced propellers reduced vibration at its source.

<figure><img src="/images/articles/aerial/02.webp" alt="GoPro below the copter frame with a soft foam isolator" loading="lazy"/><figcaption>Camera beneath the frame, softly isolated from motor vibration.</figcaption></figure>
<div class="article-photo-pair"><figure><img src="/images/articles/aerial/03.webp" alt="Detail of the GoPro mount with damping sponge and tape" loading="lazy"/><figcaption>GoPro mounting and damping.</figcaption></figure><figure><img src="/images/articles/aerial/04.webp" alt="Another view of the camera mounted on the hexacopter" loading="lazy"/><figcaption>Another view of the camera assembly.</figcaption></figure></div>

I noticed less visible jello in low light. Neutral-density filters were one approach discussed at the time: longer individual exposures can average high-frequency vibration into blur rather than sharply defined waves. That does not fundamentally eliminate rolling shutter, and it can add motion blur. Exposure time and sequential readout duration are different. My original observation was not a systematic filter comparison.

## Lessons from the build

Reducing vibration at its source and isolating the camera mechanically helped more than simply hoping to fix everything in software. Camera balance, vibration and settling before exposure also matter on my [panorama head](../../projects/mechanics/).

## The workflow at a glance

A good gigapixel panorama starts with sound individual photographs. An unsuitable aperture, camera shake or exposure changes during the sequence often cannot be repaired satisfactorily afterwards. I therefore check the setup and camera before capturing hundreds of images.

1. **Set up and level:** use the bubble level to align the tripod and panorama head horizontally.
2. **Set and test the camera:** limit vignetting with the aperture, freeze movement with a short exposure, raise ISO as needed and lock exposure.
3. **Plan and capture:** check overlap, coverage and timing; let the mechanism settle after every move.
4. **Develop the RAW files:** denoise with DxO PhotoLab 9 and export consistently as 16-bit TIFF; correct vignetting later in PTGui Pro.
5. **Stitch in PTGui:** import positions, use Align to Grid, and check control points and masks.
6. **Finish the result:** inspect the horizon, transitions, sharpness and moving objects.
7. **Prepare for the web:** create krpano tiles, check tile size and file count, then publish.

The detailed sections follow this same order. Capture examples and processing measurements accompany the relevant step, with camera and software versions identified where they matter.

The [view from Herzogstand towards Munich, with close-ups of the city centre and the Allianz Arena](../panorama-system/#herzogstand-zoom), shows how much detail a panorama can hold.

## 01 · Level the tripod and panorama head

I first align **the tripod and panorama head horizontally using the bubble level**, then check the camera itself. The heavy camera and telephoto lens load the head, and the mechanism flexes slightly. The camera can therefore hang at a small angle even when the base is level.

I check the horizon across the planned pan range and the position of the middle image row. A reasonably horizontal pan helps PTGui’s **Align to Grid**. Poor alignment can produce a curved panorama with a wave-like horizon that is sometimes difficult to correct with vertical control points or Straighten.

I balance the camera and lens and check that the tripod and mountings are secure. Slight flex, wind and settling still need to be taken into account. The [mechanics article](../mechanics/) shows the adjustable camera support.

## 02 · Set the camera and check test exposures

### Aperture: limit vignetting during capture

Even a modest brightness fall-off in every photograph can become a repeating pattern in a stitched sky. **The aperture must be appropriate at capture time.** A lens profile or calibration is not a reliable substitute for avoiding excessive vignetting in the first place.

For my 400 mm photographs, apertures around **f/10 to f/11 or smaller openings** have been useful. The exact setting depends on the lens. Earlier f/8 tests left objectionable patterns; even at f/13 my Sigma 100–400 mm retained a few percent corner fall-off. I check test photographs, corners and overlap before starting the full sequence.

### Shutter speed and ISO: sharp images take priority

My current preference at long focal lengths is **1/1000 s or faster** when wind and movement call for it. I would rather raise ISO: **DxO PhotoLab with DeepPRIME** can reduce the additional noise very effectively. It cannot restore an image blurred by camera movement.

I set **exposure correctly before starting and do not change it during the sequence**. Aperture, shutter speed and ISO remain fixed. Automatic exposure changes between images would make later brightness matching harder. Test exposures therefore include important bright and dark parts of the scene.

### Focus, then lock the setting

I first focus using **autofocus**, then switch to **manual focus**. This focus lock prevents the camera from refocusing during the sequence. I save the images as **RAW, typically with 10–14-bit depth**, retaining processing latitude and smooth gradients.

### Silent shutter for long image sequences

I consistently use **silent shutter: a fully electronic exposure**, to avoid cycling the mechanical shutter for every photograph. This differs from electronic first-curtain shutter, which is unavailable with the fully electronic shutter according to [Sony’s A7R V help guide](https://helpguide.sony.net/ilc/2230/v1/en/contents/TP0002924537.html).

Sequential sensor readout can still cause rolling-shutter distortion when the camera or subject moves. A short exposure does not eliminate that effect; the head must settle before each photograph. Flickering artificial light can also cause brightness bands. [Sony describes these silent-shooting limitations](https://www.sony.com/electronics/support/e-mount-body-ilce-1-series/ilce-1/articles/00122352).

**A capture example from 2023:** Sony A7R II with Minolta AF 100–400 mm F4.5–6.7 APO at 400 mm, f/11, 1/400 s and ISO 100–200; DeepPRIME also made ISO 500 useful. In those experiments I observed brightness gradients and avoided exposures shorter than roughly **1/600 s**. That describes those photographs, not a general silent-shutter limit. I now use the A7R V and prefer 1/1000 s or faster where appropriate.

### Check sensor dust before the sequence

Dust spots are especially visible in a smooth sky and recur across the sequence. I change lenses infrequently to limit dust ingress, and check a test image before a large panorama.

I have not been satisfied with the software corrections I tried, and a blower alone did not reliably remove stubborn dust. Suitable **sensor-cleaning swabs** worked very well for me once I finally tried them. Before wiping, I use a blower to dislodge loose, particularly hard particles so they are not dragged across the surface and cause scratches.

This describes my experience, rather than a general cleaning procedure. Swabs, fluid and method must suit the camera. Anyone unsure of the risks or the model-specific instructions should use a service centre. [Sony describes in-camera cleaning and a suitable blower first, and recommends service if dust remains.](https://support.d-imaging.sony.co.jp/www/support/ilc/sensor/en.html)

## 03 · Plan the grid and capture the sequence

Field of view, focal length, coverage and overlap must work together. I generally use **30–40% overlap**, aiding alignment and allowing problem image edges to be cropped during stitching. Overlap does not replace a suitable aperture.

Moving clouds and their shadows alter scene brightness. Starting a large panorama shortly before sunset can also produce substantial gradients. Choosing the capture window matters as much as configuring the grid.

The platform must settle after each move before exposure. The camera also needs time to save files. In my earlier RAW setup, this limited acquisition to about **2–3 seconds per image**; this is a historical observation, not a universal limit of the current system.

### Check the capture plan and start

In the preview, I check the camera profile, coverage, overlap and waits between photographs. I then transfer the plan and wait for the head to confirm it. Capture begins when I press Start. While the firmware moves the camera and releases the shutter, the app shows progress and any warnings.

Android and Windows save the capture history and write camera positions to a Papywizard XML file. Before exporting, I check that everything has been saved. After an interruption, I first check the connection and the head’s reference position. I can then continue from the interrupted column or repeat the previous one. Spherical captures keep their original bands. This continuation also needs to be loaded before I start it.

The [recovery example](../software/#example-continue-an-interrupted-sequence) explains the steps. The [software page lists the versions tested together](../software/#tested-reference-and-useful-guides), including the apps, firmware and motor profile. Before an important sequence, I test the settings with my setup. Another field test of recovery after a real fault, and testing on the Surface, are still to come.

The controller records measured angles with shutter-trigger events. These records help arrange the images in PTGui but do not verify that the camera saved each file or that it is sharp. Completeness and image quality must be checked against the actual camera files. Repeating a column or spherical band creates additional files that must be accounted for when assembling the stitching project.

I previously used the light Lumix FZ28 and FZ200 bridge cameras extensively, appreciating their zoom range. At comparable coverage and long focal length, a full-frame camera can reduce the number of images and acquisition time; my full-frame photographs also provide more latitude for noise. The camera choice therefore affects the whole plan.

## 04 · Develop the RAW files

A RAW file holds largely unprocessed sensor measurements. **Developing** turns them into a usable colour image: reconstructing colour values, setting white balance and tone, reducing noise and applying appropriate optical corrections. Unlike a finished in-camera JPEG, these choices can be recalculated later from the RAW data.

I use **[DxO PhotoLab 9](https://www.dxo.com/dxo-photolab/)**. DeepPRIME makes the higher ISO needed for short exposures useful while retaining fine detail. Alternatives include [Capture One](https://www.captureone.com/), Adobe Lightroom or Camera Raw, and the free RAW developers [darktable](https://www.darktable.org/) and [RawTherapee](https://rawtherapee.com/). Results depend on the camera, lens and profiles as well as the software.

### Corrections depend on the camera and lens

RAW development is **camera- and lens-specific**. Sensor noise, colour response, distortion and edge sharpness vary. DxO measures camera/lens combinations and supplies matching [optics modules](https://userguides.dxo.com/photolab/en/overview/). Adapted or unsupported combinations need checking; an arbitrary profile cannot replace the correct one.

I process the whole sequence with coordinated settings and a consistent white balance. **I leave vignetting correction disabled in RAW development and perform it later in PTGui Pro.** This sequence works well for my panoramas and avoids two programs independently correcting the same brightness fall-off. Other corrections, such as chromatic aberration, are applied during development when needed.

PTGui then receives consistently developed, denoised source images, helping alignment, blending and exposure matching. Development cannot repair camera shake or an unsuitable aperture.

### Test haze correction before batch processing

**ClearView Plus** can reveal distant details but also create gradients within each image. In my tests these appeared as repeating sky patterns that ordinary DxO or PTGui correction did not fully remove. Around 40% overlap and edge cropping helped partially. I therefore test strong haze correction on a representative area first.

### New options for dust spots

Automatic tools are now available for existing photographs: Adobe documents [AI-powered dust removal in Lightroom Classic](https://helpx.adobe.com/lightroom-classic/desktop/process-and-develop-photos/distraction-removal-dust.html), and DxO offers [automatic dust detection and repair in PureRAW 6](https://www.dxo.com/en/news/automatic-dust-correction). These are manufacturer descriptions, not results I have confirmed for my panorama sequences or a blanket feature claim for PhotoLab 9.

A test should include genuine fine details such as birds and distant structures. In such a test, I would check repairs in both the individual frames and the stitched result. They complement a clean sensor; my swab experience is described in the capture preparation section.

### Output and storage

I export **lossless 16-bit TIFF files** for PTGui, retaining smooth gradients for further processing and limiting banding. A roughly **41 MB** RAW file became around **214 MB** TIFF in my example, approximately five times larger. More than 500 photographs create substantial intermediate storage.

I retain the RAW files for future processing and remove unnecessary TIFF intermediates after finishing the panorama. Chromatic aberration had comparatively little effect with my equipment and usual settings.

## 05 · Align and stitch in PTGui

I load the TIFF sequence and import **Papywizard position records** for an initial arrangement. With a reasonably horizontal head, **Align to Grid** works very well for the regular capture grid, including sky and blurred foreground photographs that provide few useful control points.

A poorly aligned head or a camera tilted by mechanical flex can create a wave-like horizon. Correcting it with vertical control points and horizon alignment is sometimes difficult. I therefore check the camera’s actual orientation as well as the bubble level. Moving clouds are also unreliable control-point references despite their visible texture.

### Grid alignment and loose photographs

I developed [**LooseTileAlignment.py**](https://github.com/TomNaiser/Gigapixel-Tools/blob/main/LooseTileAlignment.py) to arrange unconnected images using the regular capture grid and already connected neighbours. It supplements the workflow: with well-levelled capture, PTGui’s Align to Grid already handles much of the task. A tilted capture still requires checking even after grid repair.

### Horizon, exposure matching and masks

In **PTGui Pro 12**, I typically used **four to eight vertical control points** or Straighten to level the horizon. Correct geometry also supports useful brightness matching. I inspect Exposure Fusion and Tone Mapping in the exposure/HDR settings; Keep current can preserve already useful exposure/vignetting values. Remaining individual exposure differences can be adjusted manually.

I mask moving cars and people to avoid ghosts and double edges. The result is checked for control-point problems, masks, horizon and transitions. These steps still rely on usable source photographs; they do not repair fundamentally blurred images.

### If residual vignetting remains

I perform the actual vignetting correction in **PTGui Pro**, checking exposure matching and edge cropping. My Sigma 100–400 mm had a fairly flat centre with a steeper fall-off towards the corners. In experiments with PhotoLab 7, a matching profile and increasing overlap from **25% to 35%** noticeably improved the result. Today I deliberately leave vignetting correction until PTGui; the earlier profile experiment is not a second correction stage in my current workflow.

Calibration can use a sequence of featureless sky images captured with **identical settings and focus**. Averaging them gives a two-dimensional brightness profile for the 16-bit TIFF sequence. My [**VignettingCorrection.py**](https://github.com/TomNaiser/Gigapixel-Tools/blob/main/VignettingCorrection.py) implements this approach. It worked in some cases and not others. It cannot reliably undo an unsuitable aperture choice after capture.

## 06 · Inspect the finished panorama

Before publishing I inspect the panorama at high magnification: transitions, ghosts, unexpected gaps, sharpness, horizon and brightness patterns. Moving objects and difficult blends need checking in context, beyond the individual control points.

<!-- EDITORIAL: Upload the pixelation tool to the GitHub repository and add its exact link here. Do not expose a broken visitor link in the meantime. -->

## 07 · Create krpano tiles and publish

**krpano** combines preparation tools with an interactive browser-based panorama viewer. A gigapixel image cannot sensibly be loaded all at once like an ordinary photograph: its size, memory requirements and download time would get in the way.

I therefore use krpano to generate **small image tiles at several resolution levels**. The overview uses a low-resolution level; zooming loads only the tiles needed for the visible area. Visitors can explore fine detail without downloading the entire panorama first. The [krpano tools](https://krpano.com/docu/tools/) create the required structure.

**MAKE PANO (MULTIRES)** generates multiple resolution levels. The viewer later loads only the tiles needed for its current view and zoom. In my earlier comparison, FLAT generated about **ten times as many files** as the chosen MULTIRES output.

**File count matters operationally:** it affects uploading, the overhead of transferring many small files, and whether the selected hosting plan’s file limits are met. I therefore check tile count together with storage requirements before uploading. No universal provider limit is assumed here.

My earlier output could contain **around 30,000 files**. Small **512-pixel tiles of about 64 kB** caused substantial overhead; I observed upload speeds as low as approximately **30 kB/s**. Switching to **2048-pixel tiles**, configured through `multires.config` / `tilesize`, reduced file count and improved uploads.

krpano output includes HTML, XML and JavaScript. Flash files produced by older versions are historical and unnecessary on this website. Tiled output was smaller than the large PSB. Full panoramas remain on AWS/CloudFront; this website initially shows a local preview and opens the interactive image on request. Further images are published on Gigapan.

### Large files: creating, opening and tiling are different

**PTGui can generate PSB panoramas wider or taller than 300,000 pixels.** The **300,000 × 300,000-pixel** limit concerns opening them in Photoshop, rather than PTGui output in general. [PTGui explicitly explains this distinction.](https://www.ptgui.com/faq/)

The next program’s input support also matters: current **krpano documentation lists a 300,000 × 300,000-pixel PSB limit** too. **BigTIFF or KRO** are options for larger intermediates there. Tiled display and PSB input limits are separate questions; a larger PTGui PSB is not automatically guaranteed to work directly in krpano. [Supported krpano formats](https://krpano.com/docu/tools/).

Format and application limits also differ for TIFF and JPEG. Classic TIFF is limited to roughly **4 GB**; PTGui can switch to **BigTIFF** for larger files. JPEG allows up to **65,535 pixels per side**, while some applications limit opening to about **30,000 pixels**. For Gigapan I have used a merged, flattened **16-bit PSB with PackBits compression**.

## Workstation and documented processing times

My current processing workstation uses an **Intel Core i9-13900**, **ASUS ProArt Z790-Creator**, **64 GB RAM** and an **NVIDIA GeForce RTX 3090**. The CPU handles general processing, while RAM holds large image data sets. The GPU supports suitable operations such as DeepPRIME and GPU-accelerated stitching.

Sufficient RAM, fast SSDs and a suitable GPU help when processing large image sequences. They shorten development, loading and stitching. Correct capture remains essential: a different computer cannot replace sharpness, a suitable aperture or constant exposure.

**Earlier workstation for the following observations:** eight-core 9th-generation Intel i7, Gigabyte Z390, **RTX 3090**, 64 GB DDR4-3000 and a **1 TB Samsung 970 Evo M.2 SSD**. Loading hundreds of TIFF files of about 200 MB each took less than a minute; subsequent editing was also noticeably smoother.

These earlier project measurements illustrate the scale. They are neither measurements from today’s i9 workstation nor a direct hardware benchmark:

- **GTX 980:** 650 images, 10 × 65, each 5304 × 7952 pixels; around two hours. Output: 237,875 × 54,107 pixels, PSB about 31 GB.
- **RTX 3090 and PTGui 12.13:** 395 images, each 5304 × 7952 pixels; output 227,230 × 23,426 pixels in under 20 minutes.

## Tools and sources

- [DxO PhotoLab 9](https://www.dxo.com/dxo-photolab/) – RAW development, lens correction and DeepPRIME denoising.
- [Capture One](https://www.captureone.com/) – alternative RAW processing from my earlier experiments.
- [PTGui](https://ptgui.com/) and its [user forum](https://groups.google.com/g/ptgui) – stitching, grid alignment and practical discussion.
- [LooseTileAlignment.py](https://github.com/TomNaiser/Gigapixel-Tools/blob/main/LooseTileAlignment.py) – my tool for unconnected grid images.
- [VignettingCorrection.py](https://github.com/TomNaiser/Gigapixel-Tools/blob/main/VignettingCorrection.py) – calibration of 16-bit TIFF sequences.
- [krpano](https://krpano.com/) – image preparation and interactive display.
- [Gigapan](https://gigapan.com/) – further published panoramas.
- [Hugin](https://hugin.sourceforge.io/) – free stitching software as a further reference.

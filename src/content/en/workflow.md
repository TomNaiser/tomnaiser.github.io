## The workflow at a glance

A good gigapixel panorama starts with sound individual photographs. An unsuitable aperture, camera shake or exposure changes during the sequence often cannot be repaired satisfactorily afterwards. I therefore check the setup and camera before capturing hundreds of images.

1. **Plan the location and capture window:** consider the view, access with heavy equipment, weather, light and room for other visitors.
2. **Choose the capture and setup:** plan a landscape section or spherical panorama, select a lens, balance the camera and level the head; check parallax when nearby objects matter.
3. **Set and test the camera:** check the focus target and depth of field, choose aperture, shutter speed and ISO, and keep the settings consistent throughout the sequence.
4. **Plan and capture:** check overlap, coverage and timing; let the mechanism settle after every move.
5. **Develop the RAW files:** denoise with DxO PhotoLab 9 and export consistently as 16-bit TIFF; correct vignetting later in PTGui Pro.
6. **Stitch in PTGui:** import positions, use Align to Grid, and check control points and masks.
7. **Correct in PTGui:** level the horizon, reposition misplaced source images and use the Mask tool for moving objects or objects cut by image seams.
8. **Prepare for the web:** create krpano tiles, check tile size and file count, then publish.

The detailed sections follow this same order. Capture examples and processing measurements accompany the relevant step, with camera and software versions identified where they matter.

The [view from Herzogstand towards Munich, with close-ups of the city centre and the Allianz Arena](../panorama-system/#herzogstand-zoom), shows how much detail a panorama can hold.

## Preparation

[Prepare the capture: location, lens and camera check](../capture-preparation/)

## 01 · Level the tripod and panorama head

I first align **the tripod and panorama head horizontally using the bubble level**, then check the camera itself. The heavy camera and telephoto lens load the head, and the mechanism flexes slightly. The camera can therefore hang at a small angle even when the base is level.

I check the horizon across the planned pan range and the position of the middle image row. A reasonably horizontal pan helps PTGui’s **Align to Grid**. Poor alignment can produce a curved panorama with a wave-like horizon that is sometimes difficult to correct with vertical control points or Straighten.

I balance the camera and lens and check that the tripod and mountings are secure. Slight flex, wind and settling still need to be taken into account. The [mechanics article](../mechanics/) shows the adjustable camera support.

### Why balance the camera?

A front-heavy camera and lens apply extra torque to the tilt axis. Positioning the assembly appropriately reduces the drive load and helps make movement repeatable. Check balance with the actual equipment across the required tilt range; a stable horizontal position alone is not enough.

### When does the “nodal point” matter?

For panorama capture this commonly used term refers to rotating approximately about the lens’s **entrance pupil**, so that nearby and distant objects do not shift relative to one another. This parallax is particularly relevant indoors and in spherical scenes containing nearby objects. **In my experience, the exact position is uncritical for distant landscapes as long as there are no nearby objects in the frame.**

To test, align a nearby feature with a distant one and check their relative movement while panning. Consider both rotation axes for spherical capture. **Balancing and minimising parallax are different requirements** and may require a compromise on a particular head. [Hugin’s documentation explains panorama parallax.](https://hugin.sourceforge.io/docs/manual/Parallax.html)

## 02 · Set the camera and check test exposures

### Aperture: limit vignetting during capture

Even a modest brightness fall-off in every photograph can become a repeating pattern in a stitched sky. **The aperture must be appropriate at capture time.** A lens profile or calibration is not a reliable substitute for avoiding excessive vignetting in the first place.

For my 400 mm photographs, apertures around **f/10 to f/11 or smaller openings** have been useful. The exact setting depends on the lens. Earlier f/8 tests left objectionable patterns; even at f/13 my Sigma 100–400 mm retained a few percent corner fall-off. I check test photographs, corners and overlap before starting the full sequence.

Stopping down also increases depth of field. Very small apertures can, however, reduce fine detail through diffraction. The setting therefore balances depth of field, optical performance and vignetting for the actual equipment. [Nikon explains this possible loss of resolution through diffraction.](https://onlinemanual.nikonimglib.com/faq/en/shooting_issues/images_not_sharp.html)

### Shutter speed and ISO: sharp images take priority

My current preference at long focal lengths is **1/1000 s or faster** when wind and movement call for it. I would rather raise ISO: **DxO PhotoLab with DeepPRIME** can reduce the additional noise very effectively. It cannot restore an image blurred by camera movement.

I set **exposure correctly before starting and do not change it during the sequence**. Aperture, shutter speed and ISO remain fixed. Automatic exposure changes between images would make later brightness matching harder. Test exposures therefore include important bright and dark parts of the scene.

### What should be in focus? Depth of field and foreground

Decide **which range of distances needs to be sharp** before starting. For a distant landscape, focus on a suitable distant feature and inspect a magnified test photograph. An infinity mark on the lens alone is not a reliable check.

A sharp background does not guarantee a sharp foreground. Usable **depth of field** depends on focal length, aperture, focus distance and the required level of detail. Nearby grass, branches or railings may look distinctly blurred when exploring a gigapixel image. Decide before capture whether to accept that blur, exclude the foreground or adjust distance, aperture and focus planning. This is particularly important in spherical panoramas with nearby subjects.

I first focus using **autofocus**, then switch to **manual focus**. This focus lock prevents the camera from refocusing during the sequence. I check the important distance range and, where relevant, the foreground before the full sequence. **Development offers only limited sharpening correction; there is little scope to rescue incorrectly set focus.** I save the images as **RAW**, retaining processing latitude and smooth gradients. The **Sony A7R V records 14-bit RAW data**; continuous shooting with the Compressed RAW file type uses 12 bits. [Sony documents the bit depth and this exception in the help guide.](https://helpguide.sony.net/ilc/2230/v1/en/print.pdf)

### Silent shutter for long image sequences

I consistently use **silent shutter: a fully electronic exposure**, to avoid cycling the mechanical shutter for every photograph.

Sequential sensor readout can still cause rolling-shutter distortion when the camera or subject moves. A short exposure does not eliminate that effect; the head must settle before each photograph. Flickering artificial light can also cause brightness bands. [Sony describes these silent-shooting limitations](https://www.sony.com/electronics/support/e-mount-body-ilce-1-series/ilce-1/articles/00122352).

**A capture example from 2023:** Sony A7R II with Minolta AF 100–400 mm F4.5–6.7 APO at 400 mm, f/11, 1/400 s and ISO 100–200; DeepPRIME also made ISO 500 useful. In those experiments I observed brightness gradients and avoided exposures shorter than roughly **1/600 s**. That describes those photographs, not a general silent-shutter limit. I now use the A7R V and prefer 1/1000 s or faster where appropriate.

## 03 · Plan the grid and capture the sequence

Field of view, focal length, coverage and overlap must work together. I generally use **30–40% overlap**, aiding alignment and allowing problem image edges to be cropped during stitching. Overlap does not replace a suitable aperture.

Moving clouds and their shadows alter scene brightness. [The PTGui grid view below](#ptgui-align-to-grid) shows the strong brightness differences caused by fast-moving clouds in the Fichtelgebirge panorama. Starting a large panorama shortly before sunset can also produce substantial gradients. Choosing the capture window matters as much as configuring the grid.

The platform must settle after each move before exposure. The camera also needs time to save files. In my earlier RAW setup, this limited acquisition to about **2–3 seconds per image**; this is a historical observation, not a universal limit of the current system.

### Test settling time and overlap together

**Settling time** is the wait after moving the head while mechanical oscillations die away. It depends on the load, movement, structure and wind. A short exposure and sufficient settling time have different jobs; neither automatically replaces the other. Test the wait with the actual camera and lens after representative movements.

Overlap must work **horizontally and vertically**. Shared scene content supports alignment and leaves room for image edges, masks and seam placement. A small sequence, such as a 2 × 2 grid, reveals more than one test exposure: are frames sharp after movement, are focus and depth of field adequate, and do neighbours cover the scene without gaps?

| Check before the full sequence | What matters |
| --- | --- |
| Capture type and lens | Coverage, detail resolution, image count and available movement range. |
| Balance and rotation axes | Actual load, camera tilt and nearby/distant feature shift where relevant. |
| Focus and depth of field | Important subject sharp; any blurred foreground deliberately accounted for. |
| Aperture | Balance depth of field, edge quality and vignetting against diffraction. |
| Shutter speed and ISO | Sharp frames in the actual conditions; consistent exposure throughout the sequence. |
| Settling time | Camera sufficiently still after typical movements; allow for capture and saving. |
| Image overlap | Enough shared area horizontally and vertically, without gaps. |

### Check the capture plan and start

In the preview, I check the camera profile, coverage, overlap and waits between photographs. I then transfer the plan and wait for the head to confirm it. Capture begins when I press Start. While the firmware moves the camera and releases the shutter, the app shows progress and any warnings.

Android and Windows save the capture history and write camera positions to a Papywizard XML file. Before exporting, I check that everything has been saved. After an interruption, I first check the connection and the head’s reference position. I can then continue from the interrupted column or repeat the previous one. Spherical captures keep their original bands. This continuation also needs to be loaded before I start it.

The [recovery example](../software/#example-continue-an-interrupted-sequence) explains the steps. The [software page lists the versions tested together](../software/#tested-reference-and-useful-guides), including the apps, firmware and motor profile. Before an important sequence, I test the settings with my setup. Another field test of recovery after a real fault, and testing on the Surface, are still to come.

The controller records measured angles with shutter-trigger events. These records help arrange the images in PTGui but do not verify that the camera saved each file or that it is sharp. Completeness and image quality must be checked against the actual camera files. Repeating a column or spherical band creates additional files that must be accounted for when assembling the stitching project.

I previously used the light Lumix FZ28 and FZ200 bridge cameras extensively, appreciating their zoom range. At comparable coverage and long focal length, a full-frame camera can reduce the number of images and acquisition time; my full-frame photographs also provide more latitude for noise. The camera choice therefore affects the whole plan.

## 04 · Develop the RAW files

A RAW file holds largely unprocessed sensor measurements. **Developing** turns them into a usable colour image: reconstructing colour values, setting white balance and tone, reducing noise and applying appropriate optical corrections. Unlike a finished in-camera JPEG, these choices can be recalculated later from the RAW data.

I use **[DxO PhotoLab 9](https://www.dxo.com/dxo-photolab/)**. DeepPRIME makes the higher ISO needed for short exposures useful while retaining fine detail. Alternatives include [Capture One](https://www.captureone.com/), Adobe Lightroom or Camera Raw, and the free RAW developers [darktable](https://www.darktable.org/) and [RawTherapee](https://rawtherapee.com/). Results depend on the camera, lens and profiles as well as the software.

### Worked example: Fichtelgebirge

My [Fichtelgebirge panorama](https://d1cq0fc6qm76ez.cloudfront.net/Fichtelgebirge011126/index.html) illustrates the process from RAW development to the finished panorama. Close-ups of the transmission tower on the Ochsenkopf show the development in DxO PhotoLab 9; the subsequent PTGui screenshots show how the individual photographs are aligned and stitched together.

<figure><img data-full-size="/images/articles/workflow/dxo-before-deepprime.webp" src="/images/articles/workflow/dxo-before-deepprime-preview.webp" alt="Transmission tower comparison: RAW image on the left, DxO PhotoLab preview with ClearView and contrast enhancement on the right" width="1200" height="724" loading="lazy"/><figcaption>RAW development in DxO PhotoLab 9. Left: the RAW image. Right: the PhotoLab preview with ClearView, contrast enhancement and other development settings. Click to enlarge.</figcaption></figure>

<figure><img data-full-size="/images/articles/workflow/dxo-with-deepprime.webp" src="/images/articles/workflow/dxo-with-deepprime-preview.webp" alt="Detail of the transmission tower on the Ochsenkopf from a fully developed TIFF image processed in DxO PhotoLab 9 with DeepPRIME XD3 noise reduction" width="621" height="1200" loading="lazy"/><figcaption>Detail view of a fully developed TIFF image processed in DxO PhotoLab 9 using DeepPRIME XD3 AI-powered noise reduction. The crop and magnification differ from the preceding illustration. Click to enlarge.</figcaption></figure>

### Corrections depend on the camera and lens

RAW development is **camera- and lens-specific**. Sensor noise, colour response, distortion and edge sharpness vary. DxO measures camera/lens combinations and supplies matching [optics modules](https://userguides.dxo.com/photolab/en/overview/). Adapted or unsupported combinations need checking; an arbitrary profile cannot replace the correct one.

I process the whole sequence with coordinated settings and a consistent white balance. Vignetting could already be corrected during development in DxO PhotoLab. **For my panoramas, however, I get better results by leaving vignetting correction entirely to PTGui Pro.** I therefore disable it in PhotoLab. This avoids two programs independently correcting the same brightness fall-off. Other corrections, such as chromatic aberration, are applied during development when needed.

PTGui then receives consistently developed, denoised source images, helping alignment, blending and exposure matching. Development cannot repair camera shake or an unsuitable aperture.

### Sharpening: only limited scope for correction

A small sharpening adjustment can improve the impression of sharpness. **There is little scope to rescue incorrectly set focus during development.** The intended focus plane and adequate depth of field must already be present in the photographs. That is why focus is checked before the sequence.

### Test haze correction before batch processing

**ClearView Plus** can reveal distant details but also create gradients within each image. In my tests these appeared as repeating sky patterns that ordinary DxO or PTGui correction did not fully remove. Around 40% overlap and edge cropping helped partially. I therefore test strong haze correction on a representative area first.

### Output and storage

I export **lossless 16-bit TIFF files** for PTGui, retaining smooth gradients for further processing and limiting banding. A roughly **41 MB** RAW file became around **214 MB** TIFF in my example, approximately five times larger. More than 500 photographs create substantial intermediate storage.

I retain the RAW files for future processing and remove unnecessary TIFF intermediates after finishing the panorama. Chromatic aberration had comparatively little effect with my equipment and usual settings.

## 05 · Align and stitch in PTGui

I load the TIFF sequence and import **Papywizard position records** for an initial arrangement. With a reasonably horizontal head, **Align to Grid** works very well for the regular capture grid, including sky and blurred foreground photographs that provide few useful control points.

A poorly aligned head or a camera tilted by mechanical flex can create a wave-like horizon. Correcting it with vertical control points and horizon alignment is sometimes difficult. I therefore check the camera’s actual orientation as well as the bubble level. Moving clouds are also unreliable control-point references despite their visible texture.

<figure><img data-full-size="/images/articles/workflow/ptgui-before-alignment.webp" src="/images/articles/workflow/ptgui-before-alignment-preview.webp" alt="PTGui detail view with displaced buildings and trees before alignment" width="1200" height="728" loading="lazy"/><figcaption>Before alignment: displaced source images are clearly visible along buildings and trees. Click to enlarge.</figcaption></figure>

<figure id="ptgui-align-to-grid"><img data-full-size="/images/articles/workflow/ptgui-align-to-grid.webp" src="/images/articles/workflow/ptgui-align-to-grid-preview.webp" alt="PTGui overview of the Fichtelgebirge after Align to Grid with red source-image outlines and strong brightness differences caused by cloud shadows" width="1200" height="197" loading="lazy"/><figcaption>After Align to Grid: the source images follow the capture grid. Red outlines show their arrangement. Fast-moving clouds and their shadows caused strong brightness differences during capture. Click to enlarge.</figcaption></figure>

PTGui then searches for **control points in the overlapping image areas**: matching scene details in neighbouring photographs. The following **optimisation step** uses these control points to align the images precisely with one another.

### Check the grid arrangement

After optimisation I check the arrangement of the source images across the entire panorama. Displaying their outlines helps identify offsets and deviations from the capture grid.

<figure><img data-full-size="/images/articles/workflow/ptgui-optimized.webp" src="/images/articles/workflow/ptgui-optimized-preview.webp" alt="Optimised Fichtelgebirge panorama in PTGui with red source-image outlines and transparent edges" width="1200" height="185" loading="lazy"/><figcaption>Optimised panorama with source-image outlines displayed. Image positions can be inspected across the entire capture before checking the horizon and brightness gradients. Click to enlarge.</figcaption></figure>

### Horizon, exposure matching and masks

In **PTGui Pro 12**, I typically used **four to eight vertical control points** or Straighten to level the horizon. Correct geometry also supports useful brightness matching. I inspect Exposure Fusion and Tone Mapping in the exposure/HDR settings; Keep current can preserve already useful exposure/vignetting values. Remaining individual exposure differences can be adjusted manually.

Moving cars and people can produce ghosts or double edges. An object cut at a source-image edge or stitching seam can also often be corrected using the **Mask tool in PTGui Pro**: red excludes areas, while green marks wanted image content. Another photograph must contain suitable object or replacement information. [PTGui’s masking tutorial includes a person cut by a seam.](https://www.ptgui.com/examples/masktutorial.html)

Masks cannot restore parts missing from every source photograph. A different final crop may be useful in that case. Masks select information that was actually captured.

### If residual vignetting remains

I perform the actual vignetting correction in **PTGui Pro**, checking exposure matching and edge cropping. My Sigma 100–400 mm had a fairly flat centre with a steeper fall-off towards the corners. In experiments with PhotoLab 7, a matching profile and increasing overlap from **25% to 35%** noticeably improved the result. Today I deliberately leave vignetting correction until PTGui; the earlier profile experiment is not a second correction stage in my current workflow.

Calibration can use a sequence of featureless sky images captured with **identical settings and focus**. Averaging them gives a two-dimensional brightness profile for the 16-bit TIFF sequence. My [**VignettingCorrection.py**](https://github.com/TomNaiser/Gigapixel-Tools/blob/main/VignettingCorrection.py) implements this approach. It worked in some cases and not others. It cannot reliably undo an unsuitable aperture choice after capture.

<figure><img data-full-size="/images/articles/workflow/ptgui-horizon-vignetting.webp" src="/images/articles/workflow/ptgui-horizon-vignetting-preview.webp" alt="PTGui overview after horizon and vignetting correction without red source-image outlines" width="1200" height="161" loading="lazy"/><figcaption>After horizon and vignetting correction: overview without red source-image outlines. Chequered areas at the edges contain no image data and must be considered when choosing the final crop. Click to enlarge.</figcaption></figure>

## 06 · Inspect the finished panorama

The result of the processing shown here can be explored interactively in the [panorama](https://d1cq0fc6qm76ez.cloudfront.net/Fichtelgebirge011126/index.html), with zooming down to the fine details.

Before publishing I inspect the panorama at high magnification: transitions, ghosts, unexpected gaps, sharpness, horizon and brightness patterns. Moving objects and difficult blends need checking in context, beyond the individual control points.

The practical corrections in the PTGui project are **levelling the horizon**, repositioning misplaced source images and masking problematic objects. A misplaced “tile” here means a source photograph in the stitching project; web tiles are created in the next step. Inspecting sharpness establishes whether capture succeeded; it does not refocus the photographs in PTGui.

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

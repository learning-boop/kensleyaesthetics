# Kensley Aesthetics Treatment Image Library

This folder contains one purpose-made website image for each sub-treatment in
the supplied Kensley content audit.

## Contents

- 16 numbered treatment folders
- 104 sub-treatment folders
- One high-resolution PNG master per sub-treatment
- One web-ready WebP copy per sub-treatment
- `manifest.csv`, the complete treatment and visual-focus index
- `PRODUCTION_GUIDE.md`, the collection-wide visual and safety direction
- `CHECKSUMS.sha256`, integrity hashes for every delivered image and document

## Folder and file naming

```text
<treatment-order>-<treatment-slug>/
  <sub-treatment-slug>/
    kensley-<treatment-slug>-<sub-treatment-slug>-01-master.png
    kensley-<treatment-slug>-<sub-treatment-slug>-01.webp
```

The numbered treatment folders preserve the Kensley treatment order. All names
are URL-safe and ready to map into a CMS or project asset library.

## Image specifications

- Canvas: 1536 × 1024 pixels
- Aspect ratio: 3:2 landscape
- Master format: PNG
- Delivery format: WebP
- No embedded text, logos or watermarks
- Crop-safe composition for website cards and responsive sections

## Usage

Use the WebP file for the website and retain the PNG as the editable master.
Each sub-treatment folder is self-contained so it can be copied or uploaded
independently.

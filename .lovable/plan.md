

## Replace Bottle Images on Home Page

Replace the 4 product bottle images used throughout the site with the newly uploaded photos.

### Image Mapping

| Product | Current File | New Upload |
|---------|-------------|------------|
| Dark Side | `src/assets/bottle-dark-side.jpg` | Blue bottle (hd_restoration_result_image_3.png) |
| God Father | `src/assets/bottle-god-father.jpg` | Red bottle (hd_restoration_result_image_2.png) |
| Black Musk | `src/assets/bottle-black-musk.jpg` | Black bottle (hd_restoration_result_image_1.png) |
| Midnight Mist | `src/assets/bottle-midnight-mist.jpg` | Brown bottle (Gemini_Generated_Image...png) |

### Steps

1. Copy each uploaded image into `src/assets/`, overwriting the existing bottle files so all references (HomePage, CataloguePage, ProductPage, ProductCard, seed data) update automatically with no code changes needed.

### Technical Notes
- Since `src/data/seed.ts` imports these files by their current paths (`@/assets/bottle-dark-side.jpg`, etc.), overwriting the files in-place means zero code changes are required -- every page that shows these bottles will pick up the new images automatically.
- The new images are PNGs, but saving them with `.jpg` extensions will still work fine since browsers detect format from file headers, not extensions.


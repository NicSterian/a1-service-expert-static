# Workshop Gallery Images

## Image Requirements

Replace the placeholder images in this folder with your actual workshop photos.

### Technical Specifications

- **Format**: `.webp` (preferred for best performance) or `.jpg`
- **Dimensions**: 800 x 600 pixels (4:3 aspect ratio)
- **File Size**: Keep under 200KB per image
- **Naming**: Use the exact filenames listed below

### Required Images

1. **workshop-exterior.webp**
   - Photo of the front/exterior of A1 Service Expert workshop
   - Should show signage and entrance clearly

2. **workshop-interior.webp**
   - Clean, organized workshop area
   - Show professional equipment and tidy workspace

3. **team-at-work.webp**
   - Cornel or Florin working on a vehicle
   - Action shot showing expertise and professionalism

4. **diagnostic-equipment.webp**
   - Your dealer-level diagnostic equipment
   - Close-up of technology/tools in use

5. **before-after-1.webp**
   - Before/after of a brake system or repair job
   - Side-by-side comparison or single professional shot

6. **before-after-2.webp**
   - Another before/after example (engine, clutch, etc.)
   - Show quality of work completed

### How to Convert Images to WebP

#### Option 1: Online Tool (Easiest)
1. Go to [https://squoosh.app/](https://squoosh.app/)
2. Drag and drop your image
3. Select "WebP" from the format dropdown
4. Adjust quality to 80-85% (good balance of quality and file size)
5. Click "Download"

#### Option 2: macOS/Linux Command Line
```bash
# Install cwebp (if not already installed)
# macOS: brew install webp
# Linux: sudo apt-get install webp

# Convert image
cwebp -q 85 input.jpg -o workshop-exterior.webp
```

#### Option 3: Keep as JPG
If you prefer to use JPG format:
1. Resize images to 800x600px
2. Compress to under 200KB
3. Rename to match the filenames above (change .webp to .jpg)
4. Update `/src/components/WorkshopGallery.astro` and change all `.webp` to `.jpg`

### Temporary Placeholder Images

For now, the gallery uses placeholder images. Once you add your photos, delete this README or keep it for reference.

### Need Stock Photos Temporarily?

Free stock photo sources:
- [Unsplash](https://unsplash.com/s/photos/car-workshop)
- [Pexels](https://www.pexels.com/search/car-garage/)

**Note**: Stock photos are fine for testing, but use your actual workshop photos for the live site!

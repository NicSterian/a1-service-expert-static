# Gallery Images Setup Guide

Your workshop gallery currently has placeholder images that need to be replaced with actual photos. This guide will help you find and add professional automotive workshop images.

## Current Status

### Working Images (Already Good)
- ✅ `workshop-exterior.webp` (85 KB)
- ✅ `team-at-work.webp` (110 KB)
- ✅ `diagnostic-equipment.webp` (106 KB) - **Now using your company logo image!**
- ✅ `before-after-1.webp` (76 KB)

### Images That Need Replacement
- ❌ `workshop-interior.webp` (29 bytes - empty placeholder)
- ❌ `before-after-2.webp` (29 bytes - empty placeholder)

---

## Option 1: Use Your Own Photos (RECOMMENDED)

**Best approach:** Take real photos of your workshop!

### What to Photograph:

**For `workshop-interior.webp`:**
- Clean, organized workshop area
- Show your professional equipment and tools
- Good lighting (natural light or bright workshop lights)
- Make sure the area is tidy and professional
- Include your company branding/signage if visible

**For `before-after-2.webp`:**
- Take before/after photos of repair work:
  - Brake system replacement
  - Engine service
  - Clutch replacement
  - Any visual improvement
- Use good lighting
- Clean the parts before photographing
- Side-by-side comparison works best

### How to Prepare Your Photos:

1. **Take the photos** with your phone or camera (iPhone/Android is fine)

2. **Resize and optimize** using one of these methods:

   **Method A: Online Tool (Easiest)**
   - Go to [https://squoosh.app/](https://squoosh.app/)
   - Drag and drop your image
   - Set dimensions to 800x600 (or similar 4:3 ratio)
   - Select "WebP" format
   - Set quality to 80-85%
   - Click "Download"
   - Rename to `workshop-interior.webp` or `before-after-2.webp`

   **Method B: macOS Preview App**
   - Open image in Preview
   - Tools → Adjust Size
   - Width: 800 pixels (height will auto-adjust)
   - Save

3. **Replace the placeholder files:**
   - Copy your optimized images to `/public/images/gallery/`
   - Overwrite `workshop-interior.webp` and `before-after-2.webp`
   - Commit and push to GitHub

---

## Option 2: Use Free Stock Photos (Temporary)

If you don't have photos yet, you can use free stock images temporarily.

### Free Image Sources (Royalty-Free, Commercial Use OK)

**Best Sources for Automotive Images:**

1. **Unsplash** - [https://unsplash.com/](https://unsplash.com/)
   - Search terms: "car garage", "auto repair", "mechanic workshop"
   - 100% free, high quality
   - No attribution required

2. **Pexels** - [https://www.pexels.com/](https://www.pexels.com/)
   - Search terms: "car service", "automotive workshop", "mechanic"
   - Free for commercial use
   - Great quality images

3. **Pixabay** - [https://pixabay.com/](https://pixabay.com/)
   - Search: "car repair", "auto mechanic"
   - Free for commercial use

### Recommended Images for Your Workshop:

**For `workshop-interior.webp`:**
- Search: "car garage interior" or "automotive workshop"
- Look for: Clean, professional workshop with tools and equipment
- Examples:
  - [Unsplash: Car workshop](https://unsplash.com/s/photos/car-workshop)
  - [Pexels: Auto repair shop](https://www.pexels.com/search/auto%20repair%20shop/)

**For `before-after-2.webp`:**
- Search: "car engine repair" or "brake system"
- Look for: Close-up of automotive parts or repair work
- Can also use: "car maintenance", "automotive parts"

### How to Download and Use Stock Photos:

1. **Go to Unsplash or Pexels**
2. **Search** for the term (e.g., "car garage interior")
3. **Find a high-quality image** that looks professional
4. **Click Download** (usually downloads as JPG)
5. **Optimize the image:**
   - Go to [https://squoosh.app/](https://squoosh.app/)
   - Upload the downloaded image
   - Resize to 800x600 (if needed)
   - Convert to WebP format
   - Quality: 80-85%
   - Download
6. **Rename** to `workshop-interior.webp` or `before-after-2.webp`
7. **Replace** the files in `/public/images/gallery/`

---

## Specific Image Recommendations

I've curated some good options from Unsplash (all free, no attribution required):

### For Workshop Interior:

**Option 1:** Modern car garage with lift
- URL: [https://unsplash.com/photos/car-repair-shop-with-red-car](https://unsplash.com/photos/a-car-with-its-hood-up-in-a-garage-bqGBbLq_jD8)
- Professional, clean, shows equipment

**Option 2:** Auto repair workshop interior
- URL: [https://unsplash.com/photos/auto-repair-garage](https://unsplash.com/photos/a-car-is-parked-in-a-garage-with-other-cars-C7TzXv-HQRU)
- Bright lighting, organized

### For Before/After Repair:

**Option 1:** Engine bay/components
- URL: [https://unsplash.com/photos/car-engine](https://unsplash.com/photos/black-and-silver-engine-bay-3_xh5geqQ5I)
- Clean engine components

**Option 2:** Brake system close-up
- URL: [https://unsplash.com/photos/car-brake](https://unsplash.com/photos/red-and-black-car-wheel-VPKr8DyySlI)
- Shows professional brake work

---

## Image Specifications (Technical)

All gallery images should meet these requirements:

- **Format:** WebP (preferred) or JPG
- **Dimensions:** 800x600 pixels (4:3 aspect ratio)
- **File Size:** Under 200 KB per image
- **Quality:** 80-85% (good balance)
- **Naming:** Exact filenames as listed in gallery

Current gallery structure:
```
/public/images/gallery/
├── workshop-exterior.webp (✅ 85 KB)
├── workshop-interior.webp (❌ NEEDS REPLACEMENT)
├── team-at-work.webp (✅ 110 KB)
├── diagnostic-equipment.webp (✅ 106 KB - using your logo image)
├── before-after-1.webp (✅ 76 KB)
└── before-after-2.webp (❌ NEEDS REPLACEMENT)
```

---

## Using the Company Logo Image

I've configured `diagnostic-equipment.webp` to use your `contact-us-bg-image.jpg` (which contains your company logos). This is perfect for showing professional branding!

If you want to use a different image for diagnostic equipment, you can replace it with an actual photo of your diagnostic tools.

---

## Step-by-Step: Replace Gallery Images

### Quick Method (5 minutes):

1. **Download stock images** from Unsplash/Pexels (links above)
2. **Go to Squoosh.app** and optimize each image:
   - Resize to 800x600
   - Convert to WebP
   - Quality: 85%
3. **Save as:**
   - `workshop-interior.webp`
   - `before-after-2.webp`
4. **Copy files** to `/public/images/gallery/` (replace existing)
5. **Test locally:**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:4321/gallery` to see results
6. **Commit and push:**
   ```bash
   git add public/images/gallery/
   git commit -m "Update gallery images with professional photos"
   git push origin main
   ```

### Proper Method (when you have real photos):

1. **Take photos** of your actual workshop
2. **Transfer to computer**
3. **Optimize** using Squoosh.app or Preview
4. **Replace** the stock photos with your real photos
5. **Commit and deploy**

---

## SEO Best Practices for Images

Your gallery images already have good SEO:
- ✅ Descriptive `alt` attributes
- ✅ Optimized file sizes (<200 KB)
- ✅ WebP format (modern, efficient)
- ✅ Lazy loading for images below the fold
- ✅ Descriptive filenames

**Additional SEO tips:**
- Use real photos when possible (better for local SEO)
- Include visible branding in photos
- Keep file sizes small for fast loading
- Use descriptive alt text (already implemented)

---

## Troubleshooting

**Q: Images not showing after replacement?**
- Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Verify file names match exactly (case-sensitive)
- Check file format (must be .webp or .jpg)

**Q: Images look blurry?**
- Increase quality in Squoosh (try 90-95%)
- Use larger source images (at least 800x600)

**Q: File size too large?**
- Reduce quality in Squoosh (try 70-80%)
- Ensure you're converting to WebP (not PNG)
- Resize to 800x600 maximum

**Q: Want to use JPG instead of WebP?**
- Rename files to `.jpg` extension
- Update `/src/components/WorkshopGallery.astro` (change all `.webp` to `.jpg`)

---

## Where Images Are Used

The gallery appears on these pages:
- `/gallery` - Dedicated gallery page
- `/about` - About us page (shows workshop gallery component)
- Home page (potentially, if you add it)

---

## Next Steps

### Immediate (Use Stock Photos):
1. Download 2 stock images from Unsplash (workshop interior + repair work)
2. Optimize using Squoosh.app
3. Replace placeholder files
4. Commit and deploy

### Long-term (Use Real Photos):
1. Schedule a photo session at your workshop
2. Take high-quality photos of your facility and work
3. Optimize and replace stock photos
4. Update gallery with authentic A1 Service Expert images

---

## Summary Checklist

Before going live:

- [ ] All 6 gallery images are present (not 29-byte placeholders)
- [ ] Each image is under 200 KB
- [ ] Images are in WebP format (or JPG)
- [ ] Images look professional and relevant
- [ ] Tested on desktop and mobile browsers
- [ ] No broken image icons

---

**Need help?** Check the main README.md or contact support.

**Remember:** Real photos of your workshop are ALWAYS better than stock photos for SEO and customer trust! Use stock photos only as temporary placeholders.

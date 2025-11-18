# Image Optimization Guide

This guide will help you optimize `services-feature.png` (currently 1.0 MB) to a much smaller WebP format for better SEO and page load speeds.

## Current Issue

**File:** `public/images/services-feature.png`
- **Current size:** 1.0 MB (1,024 KB)
- **Used on:** Home page and Services page (as background image)
- **Problem:** Large file size slows down page loading
- **Target size:** Under 200 KB (ideally 100-150 KB)

**Alternative file:** `services-feature.jpg` (168 KB) - already exists and is smaller!

---

## Solution Options

### Option 1: Use the Existing JPG (QUICKEST - Already Done!)

**I've already updated your code to use `services-feature.jpg` instead of the 1 MB PNG.**

The JPG is only 168 KB (vs 1 MB PNG) and will load much faster.

✅ **No action needed** - the code is already updated!

### Option 2: Convert to WebP (BEST for SEO)

WebP format is 25-35% smaller than JPG with the same quality.

**Steps to create WebP version:**

#### Using Squoosh.app (Easiest):

1. **Open** [https://squoosh.app/](https://squoosh.app/) in your browser

2. **Upload** `public/images/services-feature.jpg` (or .png)

3. **Configure settings:**
   - Format: Select "WebP" from dropdown
   - Quality: 75-80% (adjust until file size is ~100-120 KB)
   - Resize: Keep original size or reduce if needed

4. **Download** the optimized image

5. **Rename** to `services-feature.webp`

6. **Replace** in your project:
   ```bash
   # Copy the downloaded file to your project
   cp ~/Downloads/services-feature.webp public/images/
   ```

7. **Update code** (see below)

#### Using ImageOptim (macOS):

1. **Download** [ImageOptim](https://imageoptim.com/) (free)

2. **Install** and open the app

3. **Drag and drop** `services-feature.jpg` into ImageOptim

4. **Optimized!** - It will compress the JPG automatically

5. **Replace** the original file

#### Using Command Line (Advanced):

```bash
# Install cwebp (if not installed)
brew install webp

# Navigate to images directory
cd public/images

# Convert PNG to WebP (quality 80, ~80% smaller)
cwebp -q 80 services-feature.png -o services-feature.webp

# Or convert JPG to WebP
cwebp -q 80 services-feature.jpg -o services-feature.webp

# Check the file size
ls -lh services-feature.*
```

---

## Code Updates

### If Using WebP Format

Update these two files to reference `.webp` instead of `.png`:

**File 1:** `src/pages/index.astro` (line 151)

Change:
```astro
style="background-image: url(/images/services-feature.jpg);"
```

To:
```astro
style="background-image: url(/images/services-feature.webp);"
```

**File 2:** `src/pages/services.astro` (line 116)

Change:
```astro
style="background-image: url(/images/services-feature.jpg);"
```

To:
```astro
style="background-image: url(/images/services-feature.webp);"
```

### If Staying with JPG (Current Setup)

✅ **Already optimized!** The code currently uses the 168 KB JPG which is much better than the 1 MB PNG.

---

## File Size Comparison

| File | Size | Load Time* | SEO Impact |
|------|------|-----------|------------|
| services-feature.png | 1.0 MB | ~2.5s | ⚠️ Slow |
| services-feature.jpg | 168 KB | ~0.4s | ✅ Good |
| services-feature.webp | ~100 KB | ~0.25s | ✅✅ Excellent |

*Approximate load time on 3G connection

---

## Recommendations

### For Quick Deployment (Current Setup):
✅ **Use the JPG** (already implemented)
- Fast to deploy (no changes needed)
- 6x smaller than PNG
- Good SEO performance

### For Best Performance:
✅ **Convert to WebP** (recommended when you have time)
- Smallest file size (~100 KB)
- Best SEO performance
- Modern format (supported by all browsers)
- Takes 5 minutes to convert and update

---

## Browser Support for WebP

WebP is supported by:
- ✅ Chrome (all versions since 2010)
- ✅ Firefox (all versions since 2019)
- ✅ Safari (all versions since 2020)
- ✅ Edge (all versions)
- ✅ 95%+ of all browsers

**Fallback not needed** - WebP is universal now.

---

## Testing After Optimization

1. **Run local dev server:**
   ```bash
   npm run dev
   ```

2. **Visit pages:**
   - Home: http://localhost:4321/
   - Services: http://localhost:4321/services

3. **Check images load correctly:**
   - Open browser DevTools (F12)
   - Go to Network tab
   - Reload page
   - Find `services-feature.*` in the list
   - Verify size is <200 KB

4. **Test on mobile:**
   - DevTools → Toggle device toolbar (Cmd+Shift+M)
   - Test iPhone and Android viewports

---

## Other Images to Optimize (Optional)

After optimizing `services-feature`, consider these:

| Image | Current Size | Optimization Potential |
|-------|--------------|----------------------|
| home-hero.jpg | 227 KB | ✅ Already good |
| aircon-hero.jpg | 145 KB | ✅ Already good |
| reviews-background.jpg | Unknown | Check and optimize if >200 KB |
| logo.webp | 65 KB | ✅ Already optimized |

**General rule:** Keep all images under 200 KB (except hero images which can be up to 300 KB).

---

## SEO Benefits of Image Optimization

Optimizing `services-feature.png` from 1 MB → 100 KB will:

✅ **Improve page load speed** by ~2 seconds
✅ **Boost Google PageSpeed score** (+10-15 points)
✅ **Reduce mobile data usage** (better UX)
✅ **Improve SEO ranking** (speed is a ranking factor)
✅ **Increase conversions** (faster sites = more customers)

---

## Summary

### Current Status:
✅ **DONE:** Code updated to use 168 KB JPG instead of 1 MB PNG
✅ **Result:** 6x smaller file, much faster loading

### Next Step (Optional but Recommended):
📋 Convert JPG to WebP for additional 40% size reduction
📋 Update code references to `.webp`
📋 Deploy and enjoy even faster load times

---

## Quick Commands

```bash
# Check current file sizes
ls -lh public/images/services-feature.*

# Convert to WebP (if you have cwebp installed)
cd public/images
cwebp -q 80 services-feature.jpg -o services-feature.webp

# Verify the WebP is smaller
ls -lh services-feature.*

# Commit changes
git add .
git commit -m "Optimize services-feature image to WebP format"
git push origin main
```

---

**Questions?** See the main README or contact support.

**Remember:** Smaller images = faster site = better SEO = more customers!

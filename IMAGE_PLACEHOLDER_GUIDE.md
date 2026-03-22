# St Joseph's Vocational Secondary School - Image Placeholder Guide

## Overview
This guide provides instructions on how to find and download placeholder images for the website, and how to integrate them into your site.

## Recommended Free Image Resources

### 1. **Unsplash** (unsplash.com)
- High-quality free images
- No attribution required
- Perfect for education/school websites
- Search terms to use:
  - "vocational training"
  - "welding workshop"
  - "automobile repair"
  - "classroom"
  - "students learning"
  - "school building"
  - "computer lab"
  - "hospitality kitchen"

### 2. **Pexels** (pexels.com)
- Another great free stock photo site
- Search for:
  - "technical training"
  - "workshop tools"
  - "students"
  - "school activities"

### 3. **Pixabay** (pixabay.com)
- Great for school and education images
- Search terms:
  - "education"
  - "training"
  - "learning"
  - "tools"
  - "workplace"

### 4. **Flaticon** (flaticon.com)
- For icons and small graphics
- Search for occupation/skill icons

### 5. **Freepik** (freepik.com)
- Some free resources available
- Good for illustrations and educative graphics

## Where to Add Images in the Website

### 1. **Gallery Page** (gallery.html)
**Current Location:** 12 placeholder cards with text descriptions

**To Replace:**
```html
<!-- BEFORE (Current) -->
<div class="gallery-item">
    <div class="gallery-placeholder">
        <span>Automotive Workshop</span>
    </div>
    <p>State-of-the-art automotive workshop with modern equipment for training.</p>
</div>

<!-- AFTER (With Image) -->
<div class="gallery-item">
    <img src="gallery/automotive-workshop.jpg" alt="Automotive Workshop with modern equipment">
    <p>State-of-the-art automotive workshop with modern equipment for training.</p>
</div>
```

**Gallery Items to Replace with Images:**
1. Automotive Workshop - automotive-workshop.jpg
2. Welding & Metal Work - welding-bay.jpg
3. Computer Lab - computer-lab.jpg
4. Electrical Lab - electrical-lab.jpg
5. Classroom - classroom.jpg
6. Library - library.jpg
7. Sports Facilities - sports-facilities.jpg
8. Cafeteria - cafeteria.jpg
9. Hostel Block - hostel.jpg
10. Garden & Green Space - campus-grounds.jpg
11. Main Building - building.jpg
12. Student Activity - student-activity.jpg

### 2. **Staff Photos** (staff.html)
**Current Location:** Staff card headshots

**Current:** Uses colored placeholder backgrounds

**To Replace:**
```html
<!-- BEFORE (Current) -->
<div class="staff-placeholder">Principal</div>

<!-- AFTER (With Photo) -->
<img src="gallery/staff/john-chrysostom-agaba.jpg" alt="Mr. John Chrysostom Agaba" class="staff-photo">
```

**Staff Photos Needed:**
- principal.jpg (Mr. John Chrysostom Agaba)
- deputy-principal.jpg (Rebecca Tibiwa)
- director-studies.jpg (Denis Kwikiriza)
- And other department heads...

### 3. **Hero Section** (index.html - Optional)
**Current:** Gradient background

**Optional Enhancement:** Could add a background image
```html
<section class="hero" style="background-image: url('gallery/hero-bg.jpg');">
```

### 4. **About Page** (about.html)
**Current:** Text-based content

**Optional:** Add school building photos or facilities

## Recommended Image Specifications

| Page | Recommended Size | Format | Dimensions |
|------|-----------------|--------|-----------|
| Gallery Items | 400-600KB | JPG/WebP | 400x300px min |
| Staff Photos | 150-300KB | JPG/WebP | 300x350px |
| Hero Background | 500KB-1MB | JPG/WebP | 1920x1080px |
| Logo (if needed) | 50-100KB | PNG | 200x200px |

## Image Naming Conventions

Use clear, descriptive names without spaces:
- ✅ `automotive-workshop.jpg`
- ✅ `welding-bay.jpg`
- ✅ `computer-lab.jpg`
- ❌ `photo 1.jpg`
- ❌ `IMG_2024.jpg`

## Directory Structure

Organize images as follows:
```
stjv/
├── gallery/
│   ├── logo.png
│   ├── automotive-workshop.jpg
│   ├── welding-bay.jpg
│   ├── computer-lab.jpg
│   ├── electrical-lab.jpg
│   ├── classroom.jpg
│   ├── library.jpg
│   ├── sports-facilities.jpg
│   ├── cafeteria.jpg
│   ├── hostel.jpg
│   ├── campus-grounds.jpg
│   ├── building.jpg
│   ├── student-activity.jpg
│   └── staff/
│       ├── principal.jpg
│       ├── deputy.jpg
│       └── director.jpg
└── [html files]
```

## Step-by-Step Image Replacement Process

### Step 1: Download Image
1. Go to Unsplash.com (recommended)
2. Search for relevant term (e.g., "welding workshop")
3. Click on an appropriate image
4. Download the image (free download button)
5. Save with a clear name

### Step 2: Resize/Optimize Image (Optional)
- Use online tool like **tinypng.com** or **iOptimize.com**
- Or use free software like **IrfanView** or **GIMP**
- Target size: 400-600KB for web

### Step 3: Upload to Website
1. Connect to your hosting account via FTP or File Manager
2. Upload image to `gallery/` folder
3. Use the exact filename in HTML

### Step 4: Update HTML
Replace the placeholder code with image code:

```html
<img src="gallery/image-name.jpg" alt="Descriptive text" class="gallery-image">
```

## Recommended Downloads

### Quick Start - Essential Images

1. **Automotive Workshop** - Search "car repair workshop"
2. **Welding Workspace** - Search "welding tools metal work"
3. **Computer Lab** - Search "computer classroom"
4. **Building Entrance** - Search "school building entrance"
5. **Students Learning** - Search "student practical training"

## Legal Considerations

- ✅ All recommended sites allow free commercial use
- ✅ No attribution required (but appreciated)
- ✅ Can modify images as needed
- ❌ Don't use photographs of real people without permission
- ❌ Don't use copyrighted images

## CSS Adjustments for Images

If you want images in the gallery to maintain consistent heights:

```css
.gallery-item img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
}
```

## Performance Optimization

- Use WebP format for faster loading (convert at online-convert.com)
- Compress images before uploading
- Target max file size: 400KB per image
- Use responsive images for mobile

## Mobile Optimization

Images automatically scale on mobile devices with:
```css
img {
    max-width: 100%;
    height: auto;
}
```

## Troubleshooting

**Image not showing?**
- Check file path is correct
- Verify image file is in gallery/ folder
- Check file extension matches (jpg, png, etc.)
- Clear browser cache (Ctrl+Shift+Delete)

**Image looks distorted?**
- Check width/height specifications
- Ensure original image has similar aspect ratio
- Try different sizing options

## Additional Resources

- **Canva** (canva.com) - Design custom images and graphics
- **Poster Maker** - Create promotional posters
- **Figma** (figma.com) - Free design tool

## Timeline Recommendation

- **Week 1:** Download 5-6 priority gallery images
- **Week 2:** Download staff photos and building photos
- **Week 3:** Add final touches and optimize

## Contact Information

If you need help with image integration:
- All HTML files are in: `/home/arturo/Documents/projects/stjv/`
- Images should be placed in: `/home/arturo/Documents/projects/stjv/gallery/`

---

**Pro Tip:** Use consistent image styles across your site for a professional look. Choose images that have similar color tones and quality levels.

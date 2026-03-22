# St Joseph's Vocational Secondary School Website

A professional, responsive website for St Joseph's Vocational Secondary School in Nyamityobora, Uganda.

## Website Features

### Pages Included
1. **Home (index.html)** - Landing page with hero section, statistics, programs overview, and call-to-action
2. **About Us (about.html)** - School history, mission, vision, values, and facilities
3. **Programs (programs.html)** - Detailed information about 9+ vocational programs offered
4. **Admissions (admissions.html)** - Admission requirements, application process, fees, and scholarships
5. **Staff (staff.html)** - Faculty and staff directory organized by department
6. **Gallery (gallery.html)** - School facilities and photo gallery with captions
7. **Contact (contact.html)** - Contact information, contact form, FAQs, and location map

### Design Features
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI** - Clean, professional design with blue and red color scheme
- **Navigation** - Sticky navigation bar with mobile-friendly hamburger menu
- **Interactive Elements** - Smooth scrolling, animations, form validation
- **Accessibility** - Semantic HTML, keyboard navigation support
- **Performance** - Optimized CSS and JavaScript, lazy loading support

## File Structure

```
/home/arturo/Documents/projects/stjv/
├── index.html          # Home page
├── about.html          # About Us page
├── programs.html       # Programs/Academic offerings
├── admissions.html     # Admissions information
├── staff.html          # Staff directory
├── gallery.html        # Photo gallery
├── contact.html        # Contact and inquiries
├── styles.css          # Stylesheet (all pages)
├── script.js          # JavaScript for interactivity
├── gallery/
│   └── logo.png       # School logo
└── README.md          # This file
```

## Getting Started

1. **View the Website**: Open any HTML file in your web browser
   - For example: `file:///home/arturo/Documents/projects/stjv/index.html`

2. **Deploy to Web Server**: 
   - Copy all files to your web hosting account
   - Ensure the folder structure is maintained
   - Update contact information in footer and contact page with actual details

3. **Customize Content**:
   - Replace placeholder text with actual school information
   - Update logo path if needed
   - Add real images to gallery
   - Update email addresses and phone numbers
   - Add staff photos (create staff-placeholder divs with actual images)

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Responsive styling with Flexbox and Grid
- **JavaScript (Vanilla)** - No frameworks, lightweight interactivity
- **Responsive Design** - Mobile-first approach

## Key Features Explained

### Navigation
- Fixed header navigation that sticks to top while scrolling
- Mobile hamburger menu that toggles on small screens
- Active page indicator in navigation menu

### Home Page Highlights
- Hero section with call-to-action
- Quick statistics cards with animation
- Mission, vision, and values section
- Featured programs grid
- Newsletter signup area

### Interactive Elements
- Smooth page scrolling
- Hover animations on cards and buttons
- Form validation on contact form
- Mobile menu toggle
- Scroll-triggered animations

### Mobile Responsiveness
Breakpoints:
- **768px and below**: Tablet layout adjustments, hamburger menu appears
- **480px and below**: Mobile layout with single column design

## Customization Guide

### Update School Contact Info
Edit the footer section in all HTML files:
```html
<p>Email: YOUR_EMAIL@stjv.edu</p>
<p>Phone: YOUR_PHONE_NUMBER</p>
<p>Location: Nyamityobora, Uganda</p>
```

### Update Programs
Add more program cards in `programs.html` by copying the `.program-detail` section:
```html
<div class="program-detail">
    <h3>Your Program Name</h3>
    <!-- Add program details -->
</div>
```

### Add Staff Members
Add more staff in `staff.html` by adding `.staff-card` elements within grid sections

### Change Color Scheme
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #1e40af;      /* Blue */
    --secondary-color: #dc2626;    /* Red */
    --dark-bg: #0f172a;            /* Dark background */
    --light-bg: #f8fafc;           /* Light background */
}
```

### Add Real Gallery Images
Replace `.gallery-placeholder` divs with actual image elements:
```html
<div class="gallery-item">
    <img src="path/to/image.jpg" alt="Description">
    <p>Image Caption</p>
</div>
```

## SEO Optimization Tips

1. **Title Tags**: Already optimized for each page
2. **Meta Descriptions**: Add to `<head>` section of each page
3. **Keywords**: Update in meta tags
4. **Open Graph**: Add for social media sharing
5. **Structured Data**: Consider adding Schema.org markup

Example meta additions:
```html
<meta name="description" content="St Joseph's Vocational Secondary School offers quality vocational education in Nyamityobora">
<meta property="og:image" content="gallery/logo.png">
<meta property="og:type" content="website">
```

## Performance Tips

1. Minimize CSS and JavaScript in production
2. Optimize images before uploading
3. Use CDN for faster content delivery
4. Enable browser caching
5. Consider lazy loading for images

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE 11 (with polyfills)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Form Handling

The contact form currently validates locally. For production, you'll need:
1. Server-side form handling (PHP, Node.js, etc.)
2. Email service integration
3. Database to store submissions
4. SPAM protection (reCAPTCHA)

## Future Enhancements

- News/Blog section
- Student portal login
- Online application form with payment integration
- Alumni network
- Event calendar
- Multilingual support
- Live chat support
- Video testimonials

## Support & Maintenance

- Keep content updated regularly
- Monitor contact form submissions
- Update program information as needed
- Add blog posts with news and updates
- Refresh gallery with new photos

## License

This website template is provided for St Joseph's Vocational Secondary School.

## Contact

**St Joseph's Vocational Secondary School**
- Email: s.josephthejust@gmail.com
- Phone: +256 704 050 747
- Location: Nyamityobora, Uganda

---

*Last Updated: February 2024*

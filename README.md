# Parai Music - Yali Kalaikoodam Website

A fully responsive, modern website for Yali Kalaikoodam - a traditional drum (Parai) training academy. This website is built based on the Figma design and features a beautiful, interactive user experience.

## 🎯 Features

### ✨ Design Features
- **Responsive Design**: Optimized for mobile (320px+), tablet (768px+), and laptop (1200px+) resolutions
- **Figma-Faithful Design**: Matches the original Figma design with exact colors, layout, and visual hierarchy
- **Beautiful Color Scheme**: Uses the primary blue (#0011FF), light blue (#DCEBFF), and cream (#FEFFE8) colors
- **Custom Background Images**: Blue and white background images for visual appeal

### 🎨 Sections
1. **Hero Section**
   - Centered Yali logo with focus and detail
   - Navigation bar with "Yali." branding and Register button
   - Social media links (Instagram, Facebook, YouTube)
   - Call-to-action "Register Form" button

2. **Introduction Section**
   - Descriptive text about Parai and Yali Kalaikoodam
   - Video intro placeholder with hover effects

3. **Services Section**
   - Seven service offerings:
     - Paraiyattam
     - Foundational Courses
     - Advanced Rhythms
     - Instructor Training
     - Theory & History Session
     - Heritage Performances
     - Physical Fitness Movements
   - Hover effects with smooth animations

4. **Book Demo Section**
   - "Book your session with us" call-to-action
   - "Book Your Spot" button for registration

5. **Latest Updates Section** (Bento Grid on Desktop)
   - Displays latest news and events
   - "Show more" button for loading additional updates
   - Hover effects and animations

6. **Contact Section**
   - Contact form with fields:
     - Full Name
     - Phone Number
     - Subject
     - Message
   - Google Maps integration showing location
   - Social media buttons with hover effects
   - Email integration (mailto: yalikalaikoodam@gmail.com)

7. **Footer**
   - Copyright information
   - Social media links with hover effects

### 🎪 Interactive Features
- **Modal Registration Form**: 
  - Full Name, Email, Phone Number, and Course Selection
  - Validation and submission handling
  - Accessible with Escape key or by clicking outside
  
- **Form Validation**:
  - Email format validation
  - Phone number format validation
  - Required field validation
  
- **Hover Effects**:
  - Service items expand and highlight on hover
  - Social links scale and rotate on hover
  - Buttons have smooth transitions and shadows
  - Cards have lift animations
  
- **Animations**:
  - Smooth page transitions
  - Scroll-to-top button with animations
  - Fade-in effects for sections
  - Button hover states with backdrop blur

- **Email Integration**:
  - Contact form submits to mailto: yalikalaikoodam@gmail.com
  - Automatic email client launch with pre-filled data

- **Google Maps API**:
  - Embedded map in contact section
  - Shows location with zoom controls
  - Satellite view toggle

## 📱 Responsive Breakpoints

### Mobile (320px - 767px)
- Single column layout
- Stacked navigation
- Optimized font sizes
- Touch-friendly buttons

### Tablet (768px - 1199px)
- Two-column layouts where appropriate
- Adjusted spacing and typography
- Optimized grid layouts

### Desktop/Laptop (1200px+)
- Full multi-column layouts
- Bento grid for updates
- Maximum visual impact
- Side-by-side form and map

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Advanced styling, flexbox, grid, animations
- **JavaScript**: Interactive features and form handling
- **Font Awesome**: Icon library for social media and UI elements
- **Google Maps API**: Embedded location map

## 📂 File Structure

```
Yali/
├── index.html           # Main HTML file
├── styles.css           # Comprehensive CSS styling
├── script.js            # JavaScript functionality
├── README.md            # Documentation
└── assets/
    └── images/
        ├── BLUE_BG.png          # Blue background
        ├── WHITE_BG.png         # White background
        └── yali-logo.svg        # Yali logo
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools required - open directly in browser

### Installation

1. **Extract the files** to your desired location
2. **Open `index.html`** in your web browser
3. That's it! The website is ready to use

### Development

To modify the website:

1. **HTML Changes**: Edit `index.html` for content
2. **Styling**: Modify `styles.css` for visual changes
3. **Functionality**: Update `script.js` for interactive features

## 🔧 Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-blue: #0011FF;
    --light-blue: #DCEBFF;
    --white: #FFFFFF;
    --black: #000000;
    --light-bg: #FEFFE8;
    --gray: #D9D9D9;
}
```

### Fonts
Update font families in CSS (currently using Proxima Nova, Charis SIL, Copperplate Gothic Bold)

### Background Images
Replace images in `assets/images/`:
- `BLUE_BG.png`: Hero and demo section background
- `WHITE_BG.png`: Introduction and contact section background
- `yali-logo.svg`: Main logo

### Email Address
To change the contact email, update in `script.js`:
```javascript
const mailtoLink = `mailto:newemail@example.com?subject=...`;
```

### Google Maps Location
To change the map location, update the iframe `src` in `index.html`:
```html
<iframe src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAPS_EMBED_URL">
```

## 📞 Contact Form Integration

### Option 1: Formspree (Recommended)
1. Go to https://formspree.io
2. Sign up and create a new form
3. Replace the form action in the contact form

### Option 2: EmailJS
1. Sign up at https://www.emailjs.com
2. Follow their integration guide
3. Update `script.js` with your service ID

### Option 3: Backend Solution
Implement a backend service to handle form submissions

## 🎨 Hover Effects

### Service Items
- Expands with padding increase
- Background color change to light blue
- Smooth transition on hover

### Social Links
- Scale and rotate effect
- Backdrop blur on hover
- Color inversion

### Buttons
- Shadow enhancement
- Transform scale or translateY
- Color transitions

### Cards
- Lift animation (translateY)
- Shadow enhancement
- Border color change

## ♿ Accessibility Features

- Semantic HTML structure
- Alt text for images
- Keyboard navigation support
- Focus states for form inputs
- Color contrast compliance
- Smooth animations with reduced motion consideration

## 📊 Performance

- Optimized images (PNG and SVG)
- Minimal external dependencies (only Font Awesome)
- Efficient CSS with minimal overrides
- Lazy loading simulation for images
- Smooth 60fps animations

## 🔐 Security

- No external scripts except Font Awesome
- Form validation on client-side
- No sensitive data stored
- Safe mailto links for email

## 📋 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Features Not Implemented (For Future Enhancement)

- Backend form submission
- User authentication
- Admin dashboard
- Payment integration
- Email verification
- SMS notifications
- Video hosting
- Blog/News section with database
- User feedback system

## 📝 Notes

### Logo and Images
- The Yali logo is displayed at the center of the hero section
- Background images provide the blue and white gradient effects
- All images are optimized for web

### Responsive Typography
- Fonts scale automatically based on screen size
- Optimal line-height for readability
- Proper contrast ratios for accessibility

### Animation Performance
- All animations use CSS transforms for optimal performance
- JavaScript animations are debounced
- Smooth 60fps animations on all devices

## 🤝 Contributing

To contribute improvements:

1. Test on multiple devices and browsers
2. Follow the existing code style
3. Add comments for complex functionality
4. Test all interactive features
5. Ensure responsive design works

## 📄 License

This website is created for Yali Kalaikoodam. All rights reserved.

## 📧 Support

For issues or questions, contact: yalikalaikoodam@gmail.com

---

**Version**: 1.0  
**Last Updated**: January 2026  
**Created with**: HTML5, CSS3, JavaScript, and Figma Design

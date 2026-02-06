# 🚀 Premium AI Engineer Portfolio

A modern, premium-quality portfolio website for Md Kamrul Hasan - Aspiring AI/ML Engineer & Full Stack Developer.

## ✨ Features

### 🎨 Design
- **Modern Dark Theme** with gradient accents
- **Glassmorphism Effects** for cards and overlays
- **Custom Cursor** with interactive animations
- **Smooth Animations** throughout the site
- **Gradient Orbs** floating background effects
- **Responsive Design** for all devices

### 🔥 Sections
1. **Hero Section**
   - Animated typing effect for multiple titles
   - Floating profile card with tech icons
   - Dynamic statistics counter
   - Gradient text effects
   - Scroll indicator

2. **About Section**
   - Education and background cards
   - Learning progress bars
   - Interest tags
   - Highlight achievements

3. **Skills Section**
   - Categorized skill display
   - Progress bars for programming languages
   - Color-coded technology tags
   - Soft skills showcase

4. **Projects Section**
   - Interactive project cards
   - 3D hover effects
   - Project overlays with view buttons
   - Technology stack display

5. **Contact Section**
   - Working contact form
   - Contact methods display
   - Social media links
   - Form validation

6. **Footer**
   - Navigation links
   - Social connections
   - Copyright information

### 🎯 Interactive Features
- Smooth scroll navigation
- Active section highlighting
- Scroll-triggered animations
- Parallax effects
- Back to top button
- Mobile menu toggle
- Form submission with success notification

## 📁 File Structure

```
AI Engineer/
├── index.html              # Main portfolio page (NEW PREMIUM VERSION)
├── resume.html            # Resume/CV page
├── premium-style.css      # Premium styling with animations
├── premium-script.js      # Interactive functionality
├── styles.css             # Legacy styles (backup)
├── scripts.js             # Legacy scripts (backup)
├── images/
│   ├── profile.png       # Your profile photo
│   ├── hero.webp         # Hero background image
│   ├── project1.jpg      # Project 1 screenshot
│   ├── project2.jpg      # Project 2 screenshot
│   ├── project3.jpg      # Project 3 screenshot
│   └── project4.jpg      # Project 4 screenshot
└── projects/
    ├── project1.html     # Project 1 details
    ├── project2.html     # Project 2 details
    └── project3.html     # Project 3 details
```

## 🚀 How to Run

### Method 1: Direct Open
1. Simply open `index.html` in any modern web browser
2. That's it! No server needed for basic viewing

### Method 2: Live Server (Recommended for Development)
1. Install VS Code's "Live Server" extension
2. Right-click on `index.html`
3. Click "Open with Live Server"
4. Your browser will open with live reload enabled

### Method 3: Python HTTP Server
```bash
# Navigate to the project directory
cd "e:\Programing\html\AI Engineer"

# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

### Method 4: Node.js HTTP Server
```bash
# Install http-server globally
npm install -g http-server

# Navigate to the project directory
cd "e:\Programing\html\AI Engineer"

# Run server
http-server -p 8000

# Then open: http://localhost:8000
```

## 🎨 Customization Guide

### 1. Update Personal Information
Edit `index.html` and find these sections:
- Hero section: Update name, titles, description
- About section: Update education and background
- Skills section: Update your skill levels
- Projects section: Update project details
- Contact section: Update email, location, social links

### 2. Change Colors
Edit `premium-style.css` `:root` section:
```css
:root {
    --primary: #6366f1;        /* Main theme color */
    --secondary: #ec4899;       /* Accent color */
    --accent: #14b8a6;         /* Highlight color */
    /* Modify these to change the entire color scheme */
}
```

### 3. Update Profile Image
Replace `images/profile.png` with your own photo

### 4. Add Project Images
Add your project screenshots to the `images/` folder:
- `project1.jpg` - House Price Prediction
- `project2.jpg` - E-Commerce Platform
- `project3.jpg` - CNN Image Classification
- `project4.jpg` - COVID Dashboard

### 5. Modify Typing Effect
Edit `premium-script.js` line 91:
```javascript
const textArray = [
    'Aspiring AI/ML Engineer',
    'Full Stack Developer',
    'Machine Learning Enthusiast',
    'Problem Solver',
    'Continuous Learner'
    // Add more titles here
];
```

### 6. Update Statistics
Edit the hero stats in `index.html`:
```html
<div class="hero-stats">
    <div class="stat-item">
        <div class="stat-number">4+</div>
        <div class="stat-label">Projects Completed</div>
    </div>
    <!-- Update numbers as needed -->
</div>
```

## 📱 Responsive Breakpoints
- Desktop: 1024px and above
- Tablet: 768px - 1023px
- Mobile: Below 768px

## 🌐 Browser Support
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## ⚡ Performance
- Lightweight design
- Optimized animations
- Debounced scroll events
- Lazy loading ready
- Fast load times

## 🔧 Technologies Used
- **HTML5** - Structure
- **CSS3** - Styling with modern features
- **Vanilla JavaScript** - Interactivity
- **Font Awesome 6.4.0** - Icons
- **Google Fonts (Inter & JetBrains Mono)** - Typography

## 📝 Notes
- No backend required for the portfolio
- Form submission currently shows a success message (not connected to backend)
- Admin panel and backend have been removed
- All interactions work client-side

## 🎯 Future Enhancements
- [ ] Add particle.js background
- [ ] Connect contact form to EmailJS or backend
- [ ] Add project filtering
- [ ] Add blog section
- [ ] Add testimonials section
- [ ] Add more animations
- [ ] Add dark/light theme toggle
- [ ] Add multilingual support

## 📧 Contact
- **Email:** hridoy516578@gmail.com
- **GitHub:** [@kamrul135](https://github.com/kamrul135)
- **LinkedIn:** [@iamkamrul07](https://linkedin.com/in/iamkamrul07)
- **Location:** Cumilla, Bangladesh

## 📄 License
This project is open source and available for personal use.

---

**Made with ❤️ and ☕ by Md Kamrul Hasan**

*Last Updated: February 2026*

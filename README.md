# Cybersecurity Engineer Portfolio — Premium Edition

A modern, professional static portfolio for a cybersecurity engineer with premium design features including animations, glassmorphism effects, interactive elements, and responsive layouts.

## ✨ Premium Features

- **Modern Design System**: Custom color palette with gradients and glassmorphism effects
- **Smooth Animations**: Fade-in transitions, hover effects, and scroll-based interactions
- **Hero Section**: Eye-catching landing with gradient text and call-to-action buttons
- **Interactive Navigation**: Sticky header with smooth scrolling and active states
- **Enhanced Project Cards**: Hover animations with background effects and tech badges
- **Font Awesome Icons**: Professional icons throughout the interface
- **Responsive Design**: Mobile-first approach that works on all devices
- **Premium Typography**: Google Fonts (Inter + JetBrains Mono) for professional look
- **Detailed Project Pages**: Comprehensive project showcases with stats, timelines, and outcomes

## 📁 Files Included

- `index.html` — Main portfolio page with hero, about, skills, projects, certifications, and contact
- `styles.css` — Premium styling with animations, gradients, and modern effects
- `projects/project1.html` — Network Segmentation Assessment detail page
- `projects/project2.html` — Cloud Misconfiguration Hunt detail page
- `projects/project3.html` — Incident Response Automation detail page
- `resume.html` — Print-ready resume with professional formatting
- `README.md` — This file

## 🚀 How to Open Locally

### Method 1: Direct Open (Quick)
Double-click `E:/Programing/html/CyberSecurity/index.html` to open in your default browser.

### Method 2: Local Server (Recommended)
For best experience with relative links and Font Awesome CDN:

```cmd
cd /d E:\Programing\html\CyberSecurity
python -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## 🎨 Customization Guide

### 1. Personal Information
Edit `index.html` to replace:
- Name: Search for "Jane Doe" and replace with your name
- Tagline and descriptions in the About section
- Email: `youremail@example.com`
- Social links: LinkedIn, GitHub, Twitter URLs
- **Profile Photo**: Add your photo as `images/profile.jpg` (see `images/README.md` for instructions)

### 2. Skills & Certifications
- Modify the skills list in the `#skills` section
- Update certifications in the `#certs` section
- Add/remove items as needed

### 3. Projects
- Edit the three project cards on `index.html`
- Customize project detail pages in `projects/` folder
- Add screenshots by placing images in a new `images/` folder and updating `<img>` tags

### 4. Resume
- Edit `resume.html` with your actual work experience
- Customize job titles, dates, and achievements
- Print to PDF (Ctrl+P → Save as PDF) for downloadable version
- Or create `resume.pdf` and link it from `index.html`

### 5. Color Scheme
Edit CSS variables in `styles.css` (lines 3-12):
```css
:root {
  --primary: #00d4ff;    /* Main accent color */
  --secondary: #7c3aed;   /* Secondary accent */
  --accent: #f97316;      /* Highlight color */
  --success: #10b981;     /* Success/achievement color */
}
```

## 🌐 Deployment Options

### GitHub Pages
1. Create a GitHub repository
2. Push these files to the `main` branch
3. Go to Settings → Pages
4. Select `main` branch as source
5. Your portfolio will be live at `https://yourusername.github.io/repo-name`

### Netlify
1. Drag and drop the entire folder to https://app.netlify.com/drop
2. Get instant deployment with custom domain support

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project folder
3. Follow prompts for deployment

## 📝 Tips

- **Images**: Add project screenshots in an `images/` folder and reference them as `<img src="images/project1-screenshot.png">`
- **Contact Form**: Integrate Formspree or Netlify Forms for working contact functionality
- **Analytics**: Add Google Analytics or Plausible tracking code before `</body>` tag
- **SEO**: Update meta descriptions in each HTML file for better search visibility
- **Performance**: The site is already optimized, but consider hosting Font Awesome locally for faster load times

## 🔧 Browser Compatibility

Tested and works in:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS/Android)

## 📄 License

Free to use and modify for your personal portfolio. Attribution appreciated but not required.

---

**Need help?** Replace placeholder content with your actual information and deploy to showcase your cybersecurity expertise!

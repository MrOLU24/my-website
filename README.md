# 🚀 Oluwashola Portfolio - MrOLU

> **Creative Frontend Developer Portfolio** - A modern, responsive web application showcasing professional projects and skills.

[![Live Demo](https://img.shields.io/badge/Live-Demo-00ff99?style=for-the-badge&logo=vercel)](https://your-portfolio-url.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-13+-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer-Motion-ff69b4?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

## ✨ Features

### 🎨 **Modern Design & Animations**
- Smooth page transitions with Framer Motion
- Custom stair-step transition effects
- Responsive design for all devices
- Dark theme with accent green colors
- Interactive hover effects and micro-animations

### 🧭 **Navigation & UX**
- Smart navigation with active states
- Mobile-responsive navigation menu
- Custom 404 page with hidden header
- Keyboard navigation support (arrow keys)
- Project carousel with sync indicators

### 📱 **PWA Ready**
- Custom favicon using personal branding
- Apple touch icon for iOS devices
- Progressive Web App manifest
- Offline-ready capabilities

### 🖼️ **Project Showcase**
- Interactive swiper gallery
- Project descriptions and tech stacks
- Live demo and GitHub repository links
- Non-looping navigation with end indicators
- Clickable project number indicators

### 📄 **Professional Sections**
- **Home**: Introduction with downloadable resume
- **Services**: Skills and service offerings
- **Resume**: Professional experience and education
- **Work**: Project portfolio with details
- **Contact**: Contact form and social links

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 13+ (App Router) |
| **Styling** | Tailwind CSS, CSS Modules |
| **Animations** | Framer Motion |
| **UI Components** | Radix UI, Custom Components |
| **Icons** | React Icons |
| **Image Optimization** | Next.js Image Component |
| **Carousel** | Swiper.js |
| **Typography** | JetBrains Mono Font |

## 📂 Project Structure

```
portfolios/
├── app/                    # Next.js App Router
│   ├── contact/           # Contact page
│   ├── resume/            # Resume page
│   ├── services/          # Services page
│   ├── work/              # Work portfolio page
│   ├── not-found.jsx      # Custom 404 page
│   ├── layout.jsx         # Root layout with metadata
│   ├── page.jsx           # Home page
│   ├── globals.css        # Global styles
│   ├── icon.png           # Custom favicon
│   └── apple-icon.png     # Apple touch icon
├── components/            # Reusable components
│   ├── ui/               # UI component library
│   ├── Header.jsx        # Navigation header
│   ├── Nav.jsx           # Desktop navigation
│   ├── MobileNav.jsx     # Mobile navigation
│   ├── PageTransition.jsx # Page transition wrapper
│   ├── StairTransition.jsx # Stair animation
│   ├── Photo.jsx         # Profile photo component
│   ├── Stats.jsx         # Statistics display
│   └── WorkSlideBtn.jsx  # Work carousel controls
├── public/               # Static assets
│   ├── assets/          # Images and icons
│   ├── manifest.json    # PWA manifest
│   └── *.pdf           # Downloadable documents
└── lib/                 # Utility functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MrOLU24/my-website.git
   cd portfolios
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Key Components

### **PageTransition.jsx**
- Implements smooth page transitions using Framer Motion
- Uses AnimatePresence for proper exit animations
- Keyed by pathname for accurate transition handling

### **WorkSlideBtn.jsx**
- Custom carousel navigation with disabled states
- Edge detection for first/last slides
- Smooth navigation controls

### **Custom 404 Page**
- Animated error page with hidden header
- Multiple navigation options
- Professional error handling

### **Navigation System**
- Responsive header with mobile menu
- Active page indicators
- Smooth hover effects

## 📊 Performance Features

- ⚡ **Next.js 13+ App Router** for optimal performance
- 🖼️ **Image optimization** with Next.js Image component
- 🎨 **CSS optimization** with Tailwind CSS
- 📱 **Mobile-first responsive design**
- 🔄 **Static generation** for fast loading
- 💾 **PWA capabilities** for offline access

## 🎨 Customization

### Colors
The website uses a custom color scheme defined in `tailwind.config.js`:
- **Primary**: Dark background (#1c1c22)
- **Accent**: Green (#00ff99)
- **Text**: White with opacity variants

### Fonts
- **Primary**: JetBrains Mono (imported from Google Fonts)
- **Fallback**: System fonts for optimal loading

## 📱 Responsive Design

- **Mobile**: Optimized touch interactions
- **Tablet**: Balanced layout adjustments
- **Desktop**: Full feature experience
- **Large screens**: Enhanced spacing and typography

## 🔗 Links

- **Live Demo**: [Portfolio Website](https://your-portfolio-url.vercel.app)
- **Repository**: [GitHub](https://github.com/MrOLU24/my-website)
- **LinkedIn**: [Connect with me](https://linkedin.com/in/your-profile)

## 👨‍💻 Author

**Olatunji Oluwashola (MrOLU)**
- Frontend Developer
- Creative Digital Solutions
- Passionate about elegant user experiences

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <p>Built with ❤️ using Next.js and Tailwind CSS</p>
  <p>© 2025 Oluwashola Portfolio. All rights reserved.</p>
</div>

# Mustejab Khan - Personal Portfolio

A next-generation personal portfolio website built with modern web technologies, featuring a futuristic motion-first design with smooth animations and glassmorphism effects.

## 🚀 Live Demo

Visit the portfolio at: [https://KhanMustejab.github.io/mustejab_pf](https://KhanMustejab.github.io/mustejab_pf)

---

## 📋 Table of Contents

- [Tech Stack](#tech-stack)
- [Design Features](#design-features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Development](#development)
- [Building](#building)
- [Deployment](#deployment)
- [Customization](#customization)

---

## 🛠 Tech Stack

### Core Framework
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling & Design
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **Custom CSS** - Glassmorphism and advanced animations

### Animations
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready motion library

### Deployment
- **[GitHub Pages](https://pages.github.com/)** - Free static site hosting
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD pipeline

---

## 🎨 Design Features

### Visual Design
- ✨ **Dark Mode First** - Sleek dark theme with neon accents
- 🌈 **Neon Gradients** - Cyan & violet colors with glow effects
- 🎭 **Glassmorphism** - Frosted glass with backdrop blur
- 📱 **Mobile-First Responsive** - Works on all devices
- ✨ **Smooth Scrolling** - Enhanced scroll behavior

### Motion & Animations
- ⚡ **Cinematic Text Animations** - Letter-by-letter reveals
- 🎬 **Scroll-Based Animations** - Content reveals on scroll
- 🎪 **Hover Effects** - Interactive cards with glow
- 🔄 **Continuous Animations** - Floating elements
- ⏱️ **Smooth Transitions** - Eased animations

---

## 📁 Project Structure

```
mustejab_pf/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       └── Contact.tsx
├── .github/workflows/
│   └── deploy.yml           # GitHub Actions
├── next.config.js           # Next.js config
├── tailwind.config.ts       # Tailwind config
└── package.json             # Dependencies
```

---

## 📦 Installation & Setup

### Prerequisites
- Node.js v18+ 
- npm or yarn

### Quick Start

```bash
# Clone repository
git clone https://github.com/KhanMustejab/mustejab_pf.git
cd mustejab_pf

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## 🚀 Development & Building

### Development Server
```bash
npm run dev
```
Features: Hot reload, TypeScript checking, error messages

### Production Build
```bash
npm run build
```
Creates optimized static site in `out/` directory

---

## 🌐 Deployment

### GitHub Pages (Automatic)

The GitHub Actions workflow automatically deploys on every push to `main`:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

Live at: `https://<USERNAME>.github.io/mustejab_pf`

### Local Testing
```bash
npm run build
npx serve out
```

---

## 🎨 Customization

### Update Your Information

**Hero** (`components/sections/Hero.tsx`)
```typescript
const titleText = "Your Name"
```

**Skills** (`components/sections/Skills.tsx`)
```typescript
const skillCategories: SkillCategory[] = [
	{
		title: "Your Category",
		skills: ["Skill 1", "Skill 2"]
	}
]
```

**Experience** (`components/sections/Experience.tsx`)
```typescript
const experiences: Experience[] = [
	{
		title: "Your Title",
		company: "Your Company",
		period: "2024 – Present"
	}
]
```

**Projects** (`components/sections/Projects.tsx`)
```typescript
const projects: Project[] = [
	{
		title: "Your Project",
		description: "...",
		technologies: ["Tech1", "Tech2"]
	}
]
```

**Contact** (`components/sections/Contact.tsx`)
```typescript
href="mailto:your-email@example.com"
```

### Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
	neon: {
		cyan: '#06b6d4',
		violet: '#a855f7',
	}
}
```

---

## 📊 Performance & SEO

### Optimizations
- CSS gradients instead of images
- Automatic code splitting
- Asset minification
- Browser caching

### SEO Features
- Dynamic metadata
- Open Graph tags
- Semantic HTML
- Responsive design

---

## ♿ Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Color contrast
- Motion preferences support

---

## 🔗 Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [GitHub Pages](https://docs.github.com/en/pages)

---

## 📄 License

MIT License - Use as a template!

---

**Mustejab Khan** | [LinkedIn](https://linkedin.com/in/mustejab-khan) | [GitHub](https://github.com/KhanMustejab)

Last Updated: February 6, 2025

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Hebrew RTL (Right-to-Left) SPA for Nitay.AI - an AI marketing expert website. The project has been transformed from a basic Vite boilerplate into a complete marketing website with Hebrew content, dark theme, and modern animations.

## Key Commands

### Development
- `npm run dev` - Start development server on http://localhost:5173
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build on http://localhost:4173

### Project Requirements
- Node.js >= 16.0.0
- Uses ES modules (`"type": "module"` in package.json)

## Architecture & Structure

### Application Pattern
This is a vanilla JavaScript SPA that renders everything in `index.html` without a framework. The application uses:

- **Static HTML Structure**: All content is defined directly in `index.html` with semantic sections
- **CSS-based Styling**: All styling in `src/assets/style.css` with CSS custom properties for theming
- **Vanilla JS Enhancement**: `src/main.js` adds interactivity (smooth scrolling, form handling, animations)

### Content & Theming
- **Hebrew RTL**: `<html lang="he" dir="rtl">` with right-to-left text flow
- **Dark Purple Theme**: CSS variables define a professional dark theme with purple/blue gradients
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Font**: Uses Heebo font family for Hebrew typography from Google Fonts

### Key Sections
The application is structured as a single-page marketing site:
1. **Navigation** - Fixed header with smooth scroll navigation
2. **Hero Section** - Animated AI avatar with CTA buttons
3. **Services Section** - 6 AI marketing service cards with hover effects
4. **About Section** - Profile info with statistics
5. **Contact Section** - Contact form and methods
6. **Footer** - Brand links and copyright

### JavaScript Features
- Smooth scrolling navigation between sections
- Contact form submission handling (currently shows alert)
- Intersection Observer for scroll-based animations
- CTA button routing to relevant sections

### CSS Architecture
- Uses CSS custom properties (CSS variables) for consistent theming
- Mobile-responsive with breakpoints at 768px and 480px
- CSS animations including floating avatar and card hover effects
- RTL-specific styling considerations throughout

### Static Assets
- SVG icons in `public/` directory (vite.svg, javascript.svg)
- Font loading from Google Fonts CDN
- All styling is CSS-only (no CSS preprocessors)

## Development Notes

### File Organization
- `index.html` - Complete application markup with Hebrew content
- `src/main.js` - Application JavaScript entry point
- `src/assets/style.css` - All application styles
- `src/counter.js` - Legacy counter demo (not used in current app)
- `src/components/App.js` - Unused component class (legacy from boilerplate)

### When Modifying
- All text content should remain in Hebrew
- Maintain RTL layout considerations when adding new sections
- CSS color scheme uses purple/blue gradients - maintain consistency
- Form submissions are currently client-side only (alert-based)
- Animation performance is optimized with CSS transforms and opacity

### Vite Configuration
- Development server runs on port 5173
- Production builds use Terser minification
- Source maps enabled for debugging
- CORS enabled for development
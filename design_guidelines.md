# Design Guidelines: Sign + Wrap Systems

## Design Approach: Reference-Based (Creative Portfolio)

**Selected References:** Modern design agency aesthetics (Awwwards, Behance) combined with B2B service clarity. Think bold portfolio presentation meets professional credibility - similar to high-end architecture or fabrication studios.

**Core Principle:** Let the work be the hero. Minimal interference, maximum impact. Your wraps and dimensional work should command attention through clean, sophisticated presentation.

---

## Color Palette

**Primary Brand Colors:**
- Deep Charcoal: 220 15% 15% (main backgrounds, text)
- Pure White: 0 0% 100% (contrast, clean spaces)
- Industrial Blue: 215 70% 45% (primary CTAs, accents - professional, trustworthy)

**Accent (Use Sparingly):**
- Vibrant Cyan: 190 85% 55% (hover states, micro-interactions only)

**Supporting Neutrals:**
- Soft Gray: 220 10% 95% (section backgrounds, cards in light mode)
- Medium Gray: 220 8% 65% (secondary text, borders)

**Dark Mode:**
- Background: 220 15% 10%
- Cards/Surfaces: 220 12% 15%
- Text: 0 0% 95%

---

## Typography

**Headline Font:** Inter (700-800 weight) - Modern, technical precision
- Hero: text-6xl to text-7xl (72-96px)
- Section Headers: text-4xl to text-5xl (36-48px)
- Card Titles: text-2xl (24px)

**Body Font:** Inter (400-500 weight)
- Primary: text-base to text-lg (16-18px)
- Secondary/Captions: text-sm (14px)

**Special Treatment:** Use letter-spacing on all-caps labels (tracking-wider)

---

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Component padding: p-6 to p-8
- Section spacing: py-16 to py-24 (desktop), py-12 (mobile)
- Grid gaps: gap-6 to gap-8

**Container Strategy:**
- Full-width hero with max-w-7xl inner content
- Content sections: max-w-6xl
- Text-focused areas: max-w-4xl

---

## Component Library

### Hero Section
- Full-viewport (min-h-screen) with dramatic project imagery background
- Dark overlay (bg-black/40) for text legibility
- Centered headline + subheadline stack
- Dual CTA: Primary "Get a Quote" + Secondary "View Portfolio"
- Subtle scroll indicator at bottom

### Service Cards (3-Column Grid)
- Large icons or project thumbnails
- Service name + concise description
- "Learn More" link with arrow
- Hover: Gentle lift (transform scale-105) + shadow increase

### Portfolio Gallery
- Masonry grid layout (2-3 columns)
- Category filters: All / Vehicle Wraps / Glass Wraps / Dimensional
- Before/After slider integration for select projects
- Lightbox modal on click with project details

### About/Process Section
- Split layout: Image left, content right
- Step-by-step process cards with numbers
- Trust indicators: Years experience, projects completed

### Contact Form
- Two-column layout: Form left, Info/Map right
- Service type dropdown selector
- Upload option for reference images
- Immediate visual feedback on submission

### Footer
- Three columns: Services quick links, Contact info, Social
- Newsletter signup (optional based on marketing needs)
- Copyright and credentials

---

## Imagery Strategy

**MUST INCLUDE:**
1. **Hero Image:** Full-width dramatic shot of completed vehicle wrap or storefront installation (high-impact portfolio piece)
2. **Service Section:** Three distinct images representing each service category
3. **Portfolio Grid:** 9-12 project images showcasing range and quality
4. **About Section:** Workshop/process photo showing dimensional CNC work or installation
5. **Before/After Comparisons:** At least 2-3 transformation showcases

**Image Treatment:**
- Subtle vignette on portfolio thumbnails
- Maintain aspect ratios (16:9 for hero, 4:3 for portfolio grid)
- Lazy loading for performance

---

## Animations (Minimal)

- Fade-up on scroll for section entries (duration-500)
- Smooth image scaling on hover (transition-transform duration-300)
- Filter transitions for portfolio categories (duration-400)
- NO continuous animations or parallax effects

---

## Navigation

**Desktop:** Transparent header over hero, transitions to solid on scroll
- Logo left, Menu center, "Get Quote" CTA right
- Menu items: Services | Portfolio | About | Contact

**Mobile:** Hamburger menu with full-screen overlay
- Bold menu items, large touch targets (min 44px)

---

## Key Differentiators

- **Bold Project Showcase:** Portfolio takes center stage with generous image sizes
- **Industry Authority:** Professional typography and restrained color palette signal expertise
- **Clear Service Distinction:** Three pillars clearly communicated throughout
- **Practical CTAs:** Every section guides toward quote requests
- **Trust Building:** Process transparency and completed work evidence

This design elevates your technical capabilities through sophisticated, confident presentation while maintaining accessibility for potential clients seeking clarity on your services.
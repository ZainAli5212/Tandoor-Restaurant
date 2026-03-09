# Tandoori Restaurant

A modern, responsive restaurant website built with React showcasing the Tandoori brand — featuring menu browsing, online ordering, reservations, catering, franchising, locations, and a photo gallery.

## Tech Stack

- **React 19** with React Router 7 for client-side routing
- **Vite 7** for fast development and optimized builds
- **Framer Motion** for smooth animations and transitions
- **Cloudinary** for optimized image delivery
- **Lucide React** for consistent iconography

## Pages

| Route | Page |
|-------|------|
| `/` | Home — hero, menu preview, reservations, testimonials |
| `/about` | About — story, values, stats |
| `/menu` | Menu — full menu with category filters and search |
| `/order-now` | Order Now — online ordering |
| `/tandoori-catering` | Catering — catering services |
| `/locations` | Locations — branch finder by city |
| `/franchising` | Franchising — franchise application form |
| `/gallery` | Gallery — photo gallery grid |

## Project Structure

```
src/
├── components/
│   ├── Common/       # Navbar, Footer, ItemCard, CategoryBox, buttons
│   ├── Home/         # Hero, MenuSection, Reservations, Testimonials
│   ├── About/        # Hero, AboutCards, Stats
│   ├── Menu/         # MenuHero, MenuDisplay, MenuDishCard
│   ├── Gallery/      # Hero, GalleryGrid
│   ├── Location/     # Hero, BranchDisplay
│   ├── Franchising/  # FranchisingHero (with form)
│   └── TandooriCatering/
├── data/             # MenuData, locations, gallery data
├── pages/            # Page-level components (route targets)
└── assets/           # Static images
```

## CSS Design Tokens

All brand colors are defined as CSS custom properties in `src/index.css`:

```css
:root {
  --accent: #cb8e32;          /* Primary gold accent */
  --accent-hover: #a67f56;    /* Accent hover state */
  --foreground: #0f172a;      /* Dark text on light backgrounds */
  --dark: #1a1a1a;            /* Dark UI / backgrounds */
  --dark-bg: #1f2937;         /* Page background */
  --muted: #64748b;           /* Secondary / muted text */
  --text-light: #e5e7eb;      /* Light text on dark backgrounds */
  --bg-soft: #f8fafc;         /* Soft light backgrounds */
  --border: #e2e8f0;          /* Border / divider color */
  --border-light: #f0f0f0;    /* Lighter borders */
  --icon-bg: #d4c6ba;         /* Icon box backgrounds */
  --success: #16a34a;         /* Success states */
  --success-bg: #dcfce7;      /* Success backgrounds */
  --star: #f97316;            /* Star / rating color */
  --link-blue: #2563eb;       /* Blue links */
  --shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}
```

To update the brand palette, change values in `:root` — all components reference these tokens.

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Deployment

Configured for Vercel deployment via `vercel.json`.

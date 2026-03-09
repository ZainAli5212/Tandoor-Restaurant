# 🍽️ Tandoor Restaurant

A modern, responsive restaurant website for **Tandoor Restaurant** — showcasing authentic Indian and tandoori cuisine with online ordering, catering services, franchising opportunities, and multi-location support. Built with React and Vite.

## ✨ Features

- **Dynamic Menu** — Browse dishes across categories (BBQ, Chinese, Desi, Desserts, Beverages) with filtering
- **Online Ordering** — Place orders directly through the website
- **Catering Services** — Dedicated page for tandoori catering information
- **Franchising** — Explore franchise opportunities
- **Multiple Locations** — View and find restaurant branches
- **Photo Gallery** — Browse restaurant and food images
- **Reservations** — Table reservation section on the home page
- **Testimonials** — Customer reviews and feedback
- **Smooth Animations** — Polished UI transitions powered by Framer Motion
- **Cloud-Hosted Images** — Fast image delivery via Cloudinary CDN
- **Responsive Design** — Optimized for all screen sizes

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React](https://react.dev/) | UI framework |
| [Vite](https://vite.dev/) | Build tool with HMR |
| [React Router](https://reactrouter.com/) | Client-side routing |
| [Framer Motion](https://www.framer.com/motion/) | Animations and transitions |
| [Cloudinary](https://cloudinary.com/) | Image hosting and CDN |
| [Lucide React](https://lucide.dev/) | Icon library |
| [ESLint](https://eslint.org/) | Code linting |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/ZainAli5212/Tandoor-Restaurant.git

# Navigate to the project directory
cd Tandoor-Restaurant

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173` by default.

### Build

```bash
# Create a production build
npm run build

# Preview the production build locally
npm run preview
```

### Linting

```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── assets/              # Static assets (menu images)
├── components/          # Reusable React components
│   ├── About/           # About page components
│   ├── Common/          # Shared components (Navbar, Footer, ItemCard, etc.)
│   ├── Franchising/     # Franchising page components
│   ├── Gallery/         # Photo gallery components
│   ├── Home/            # Home page components (Hero, MenuSection, Testimonials)
│   ├── Location/        # Location page components
│   ├── Menu/            # Menu display components
│   └── TandooriCatering/# Catering page components
├── data/                # Static data (menu items, gallery, locations)
├── pages/               # Top-level route pages
├── App.jsx              # Root component with routing
├── App.css              # App-level styles
├── main.jsx             # React entry point
└── index.css            # Global styles
```

## 🗺️ Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Landing page with hero, menu highlights, testimonials, and reservations |
| `/about` | About | Restaurant story, stats, and information |
| `/menu` | Menu | Full menu with category filtering |
| `/order-now` | Order Now | Online ordering interface |
| `/tandoori-catering` | Catering | Tandoori catering services |
| `/locations` | Locations | Restaurant branch locations |
| `/franchising` | Franchising | Franchise opportunity details |
| `/gallery` | Gallery | Photo gallery of food and restaurant |

## 🌐 Deployment

This project is configured for deployment on [Vercel](https://vercel.com/). A `vercel.json` configuration file is included for seamless deployment with client-side routing support.

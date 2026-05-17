# Connections X Media Inc.

A static multi-page marketing website for **Connections X Media Inc.**, a women-led digital studio in Langley, BC.

## Commands

```bash
npm install   # install dependencies
npm run dev   # start dev server at http://localhost:5173
npm run build # production build to /dist
npm run preview # preview production build
```

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/services` | Services |
| `/realty` | Realty overview |
| `/realty/photo-retouching` | Photo Retouching |
| `/realty/staging` | Staging & Visualizations |
| `/realty/blueprints` | Blueprints |
| `/realty/tours` | 360° Tours |
| `/realty/drone` | Drone Capture |
| `/realty/content` | Content Writing |

## Design System

**Palette:** ink-950 (`#0A0F1C`) background, bone (`#F4EFE6`) text, cyan-electric (`#22E1FF`) accent, gold-warm (`#E6B85C`) secondary accent.

**Fonts:** Playfair Display (display/headings via `.font-display`), DM Sans (body/UI).

**Motion:** All scroll-reveal uses `FadeIn`, `StaggerGroup`, `StaggerItem`, `PageWrap` from `src/components/Reveal.jsx`. Page transitions use framer-motion `AnimatePresence` with `PageWrap` on every page.

**Sticky navbar:** `h-20`, transparent at scroll ≤ 12px, `bg-ink-950/85 backdrop-blur-lg` after. Animated shared-layout underline slides between active desktop links via `layoutId="active-underline"`.

**RealtySubnav:** Sticky at `top-20` (matching navbar height) on all `/realty*` pages.

**Component classes:** `.eyebrow`, `.display-h1/h2/h3`, `.btn-primary/ghost/gold`, `.card-base`, `.link-underline`, `.container-edge` — defined in `src/index.css`.

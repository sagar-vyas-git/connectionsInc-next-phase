# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install          # install dependencies
npm run dev          # dev server at http://localhost:5173 (opens browser)
npm run build        # production build → dist/
npm run preview      # preview the production build
```

**Node 16 note:** The build script uses `crypto-polyfill.cjs` to patch `node:crypto` for Vite 5 compatibility. On Node 18+, this polyfill is harmless and can be removed by reverting `package.json`'s `"build"` script back to `"vite build"`.

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/services` | Services |
| `/realty` | Realty overview + pricing catalog |
| `/realty/photo-retouching` | Photo Retouching |
| `/realty/staging` | Staging & Visualizations |
| `/realty/blueprints` | Blueprints |
| `/realty/tours` | 360° Tours |
| `/realty/drone` | Drone Capture |
| `/realty/content` | Content Writing |
| `/project-01` | Case Study — Dr. Virender Ahlawat |
| `/project-02` | Case Study — Fortune Real Estate Group |
| `/project-03` | Case Study — South Asian Connect |

## Architecture

**Tech stack:** Vite 5, React 18, react-router-dom v6, framer-motion 11, Tailwind CSS 3. Plain `.jsx`, ESM only.

**Entry:** `src/main.jsx` → `BrowserRouter` → `App.jsx` → `Layout` (Navbar + Outlet + Footer).

**Page transitions:** `AnimatePresence` in `App.jsx` wraps `Routes` keyed by `location.pathname`. Every page must wrap its return in `<PageWrap>` from `src/components/Reveal.jsx` or cross-fades break.

**Scroll-to-top:** `ScrollToTop` in `App.jsx` fires on `pathname` change but is suppressed when `hash` is present — this lets `/#contact` deep-links work from any page.

**Reveal primitives** (`src/components/Reveal.jsx`): `FadeIn`, `StaggerGroup`, `StaggerItem`, `PageWrap`. Use these everywhere for scroll-reveal instead of raw `motion.div`.

**CSS component classes** (`src/index.css`): `.eyebrow`, `.eyebrow-gold`, `.display-h1/h2/h3`, `.btn-primary/ghost/gold`, `.card-base`, `.link-underline`, `.container-edge`. Defined in `@layer components` so they participate in Tailwind's cascade correctly.

**Custom Tailwind tokens:** `ink-950/900/800/700/600`, `cyan-electric`, `cyan-glow`, `gold-warm/deep/soft`, `bone`, `font-display`, `tracking-widest2`, `shadow-glow`, `shadow-gold`, `bg-grid-soft`, `bg-grid-32`.

**Sticky navbar:** `h-20`, `z-50`; becomes `bg-ink-950/85 backdrop-blur-lg` after 12px scroll. `RealtySubnav` is sticky at `top-20` — keep in sync with navbar height if it ever changes.

**Realty sub-pages:** All 6 sub-pages (`/realty/*`) render `<SubPageHero>` then `<RealtySubnav>`. The Realty overview (`/realty`) uses `<PageHero>` then `<RealtySubnav>`.

**Content:** All copy is hard-coded in page components — no data fetching.

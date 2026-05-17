<!--
═══════════════════════════════════════════════════════════════════════════════
  ▶ HOW TO USE THIS FILE
  ───────────────────────────────────────────────────────────────────────────
  Drop this file into an empty directory, open Claude Code, and paste:


      Read `REPLICATION_PROMPT.md` in the current directory and build the
      entire project exactly as specified. Create every file at its listed
      path with the verbatim content, config, classes, copy, and component
      contracts described. Then run `npm install` and `npm run build` and
      confirm both succeed.


  If the agent tries to "improve" anything (different fonts, simplified
  animations, paraphrased copy), reply:


      Follow REPLICATION_PROMPT.md exactly. The document wins.
═══════════════════════════════════════════════════════════════════════════════
-->


# Replication Prompt — Connections X Media Inc. Website


Paste everything below the divider into Claude Code in an **empty directory**. The result will be an exact replica of the existing site.


---


## MISSION


Build a static multi-page marketing website for **Connections X Media Inc.**, a women-led digital studio in Langley, BC. The site has 10 routes, a bold editorial/magazine aesthetic, and runs locally with `npm install && npm run dev`. No backend, no data fetching — all content is hard-coded in page components. Do not deviate from the spec; this document is the source of truth.


---


## TECH STACK (exact versions)


- **Vite** `^5.4.2` with `@vitejs/plugin-react` `^4.3.1`
- **React** `^18.3.1` + `react-dom` `^18.3.1`
- **react-router-dom** `^6.26.0` (BrowserRouter, Routes, NavLink, useLocation)
- **framer-motion** `^11.3.19`
- **tailwindcss** `^3.4.10` + `autoprefixer` `^10.4.20` + `postcss` `^8.4.41`


Use plain **`.jsx`** — no TypeScript. ESM only (`"type": "module"`).


Dev port: **5173**, `open: true`.


---


## FILE STRUCTURE


```
.
├── .gitignore
├── CLAUDE.md                  # (do not create; out of scope)
├── README.md
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── index.css
    ├── main.jsx
    ├── App.jsx
    ├── components/
    │   ├── Footer.jsx
    │   ├── HowItWorks.jsx
    │   ├── Layout.jsx
    │   ├── MapleLogo.jsx
    │   ├── Navbar.jsx
    │   ├── PageHero.jsx
    │   ├── RealtySubnav.jsx
    │   ├── Reveal.jsx
    │   └── SubPageHero.jsx
    └── pages/
        ├── About.jsx
        ├── Blueprints.jsx
        ├── ContentWriting.jsx
        ├── Drone.jsx
        ├── Home.jsx
        ├── PhotoRetouching.jsx
        ├── Realty.jsx
        ├── Services.jsx
        ├── Staging.jsx
        └── Tours.jsx
```


---


## CONFIGURATION FILES (verbatim)


### `package.json`


```json
{
  "name": "connections-x-media",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "framer-motion": "^11.3.19",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.41",
    "tailwindcss": "^3.4.10",
    "vite": "^5.4.2"
  }
}
```


### `vite.config.js`


```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  server: { port: 5173, open: true }
})
```


### `postcss.config.js`


```js
export default {
  plugins: { tailwindcss: {}, autoprefixer: {} }
}
```


### `tailwind.config.js`


```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0A0F1C', 900: '#0E1424', 800: '#141B30',
          700: '#1C2540', 600: '#2A3556'
        },
        cyan: { electric: '#22E1FF', glow: '#7DF9FF' },
        gold: { warm: '#E6B85C', deep: '#B8893A', soft: '#F5D89B' },
        bone: '#F4EFE6'
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      letterSpacing: { widest2: '0.25em' },
      backgroundImage: {
        'grid-soft':
          'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)'
      },
      backgroundSize: { 'grid-32': '32px 32px' },
      boxShadow: {
        glow: '0 0 60px -10px rgba(34, 225, 255, 0.35)',
        gold: '0 0 50px -10px rgba(230, 184, 92, 0.4)'
      }
    }
  },
  plugins: []
}
```


### `index.html`


- Title: `Connections X Media Inc. — We Connect 360`
- Meta description: `Langley, BC digital solutions: websites, social media, content creation. Because Connections Matter.`
- Favicon: `/favicon.svg`
- Body classes: `bg-ink-950 text-bone antialiased`
- Mount target: `<div id="root"></div>`
- Load Google Fonts (preconnect both googleapis + gstatic with crossorigin):
  `https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&display=swap`
- Script: `<script type="module" src="/src/main.jsx"></script>`


### `public/favicon.svg`


A 64×64 SVG: ink-950 rounded square background, a 14-point star/maple shape (path below) filled `#22E1FF`. Use the same path as `MapleLogo`.


### `.gitignore`


```
node_modules
dist
dist-ssr
.vite
.DS_Store
*.local
.env
.env.*
!.env.example
```


---


## GLOBAL CSS — `src/index.css`


Three layers exactly:


```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```


**Base styles:**
- `html { scroll-behavior: smooth }`
- `body { font-family: 'DM Sans', system-ui, sans-serif; background-color: #0A0F1C; color: #F4EFE6; -webkit-font-smoothing: antialiased }`
- `::selection { background: #22E1FF; color: #0A0F1C }`
- Custom scrollbar: 10px wide, track `#0A0F1C`, thumb `#1C2540`, thumb-hover `#22E1FF`, fully rounded.


**`@layer components`** — these are the visual contract; reuse everywhere instead of repeating Tailwind chains:


| Class | Definition |
|---|---|
| `.container-edge` | `mx-auto w-full max-w-7xl px-6 lg:px-10` |
| `.eyebrow` | `inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-widest2 text-cyan-electric` **with a `::before` pseudo** rendering `''` as `inline-block h-px w-8 bg-cyan-electric` (the leading line) |
| `.display-h1` | font Playfair Display, `text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] font-semibold tracking-tight` |
| `.display-h2` | Playfair, `text-4xl md:text-5xl lg:text-6xl leading-[1.05] font-semibold tracking-tight` |
| `.display-h3` | Playfair, `text-2xl md:text-3xl font-semibold leading-tight` |
| `.btn-primary` | `inline-flex items-center gap-2 rounded-full bg-cyan-electric px-7 py-3 text-sm font-semibold uppercase tracking-widest2 text-ink-950 transition hover:bg-cyan-glow hover:shadow-glow` |
| `.btn-ghost` | `inline-flex items-center gap-2 rounded-full border border-bone/20 px-7 py-3 text-sm font-semibold uppercase tracking-widest2 text-bone transition hover:border-cyan-electric hover:text-cyan-electric` |
| `.btn-gold` | `inline-flex items-center gap-2 rounded-full bg-gold-warm px-7 py-3 text-sm font-semibold uppercase tracking-widest2 text-ink-950 transition hover:bg-gold-soft hover:shadow-gold` |
| `.card-base` | `relative overflow-hidden rounded-2xl border border-bone/10 bg-ink-900/60 p-8 backdrop-blur transition` |
| `.link-underline` | `relative inline-flex items-center gap-2 text-cyan-electric font-medium` **with a `::after` pseudo** rendering `''` as `absolute left-0 -bottom-0.5 h-px w-full origin-left scale-x-100 bg-cyan-electric transition-transform duration-300`; on hover the underline `scale-x-0 origin-right` (so it retracts from left to right) |


**Plain CSS utilities (outside `@layer`):**
- `.gradient-radial-cyan` → `background-image: radial-gradient(circle at top right, rgba(34, 225, 255, 0.18), transparent 55%)`
- `.gradient-radial-gold` → `background-image: radial-gradient(circle at bottom left, rgba(230, 184, 92, 0.16), transparent 55%)`
- `.noise-overlay` → inline SVG fractalNoise data URL, `background-size: 160px 160px`. Exact value:


```css
.noise-overlay {
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.25'/></svg>");
  background-size: 160px 160px;
}
```


---


## ROOT WIRING


### `src/main.jsx`


`ReactDOM.createRoot(...).render(<React.StrictMode><BrowserRouter><App /></BrowserRouter></React.StrictMode>)`. Import `./index.css`.


### `src/App.jsx`


- Defines `<ScrollToTop>` (a no-render component): on `pathname` change, if there is **no** hash, `window.scrollTo({ top: 0, behavior: 'instant' })`. This is critical — `/#contact` must NOT jump to top.
- Wraps `<Routes>` with `<AnimatePresence mode="wait">` keyed by `location.pathname`.
- All routes inside `<Layout>`:


| Path | Component |
|---|---|
| `/` | Home |
| `/about` | About |
| `/services` | Services |
| `/realty` | Realty |
| `/realty/photo-retouching` | PhotoRetouching |
| `/realty/staging` | Staging |
| `/realty/blueprints` | Blueprints |
| `/realty/tours` | Tours |
| `/realty/drone` | Drone |
| `/realty/content` | ContentWriting |


---


## GLOBAL COMPONENTS


### `Layout.jsx`


```
<div class="relative min-h-screen overflow-x-hidden bg-ink-950 text-bone">
  <div class="pointer-events-none fixed inset-0 -z-10 opacity-[0.07] bg-grid-soft bg-grid-32" />
  <div class="pointer-events-none fixed inset-0 -z-10 noise-overlay opacity-[0.06]" />
  <Navbar />
  <main class="pt-20">{children}</main>
  <Footer />
</div>
```


The grid + noise are fixed background layers — **do not duplicate per page**.


### `MapleLogo.jsx`


Props: `className = 'h-7 w-7'`, `tone = '#22E1FF'`. SVG `viewBox="0 0 64 64"` with one `<path>`:


```
M32 6 L36 18 L46 16 L42 26 L52 30 L42 34 L46 44 L36 42 L32 56 L28 42 L18 44 L22 34 L12 30 L22 26 L18 16 L28 18 Z
```


Fill = `tone`. The favicon uses a near-identical path (start `M32 8 ... L32 52` instead of `M32 6 ... L32 56`, same shape).


### `Navbar.jsx`


- Fixed `top-0 inset-x-0 z-50`, height `h-20`.
- Background: transparent at scrollY ≤ 12; otherwise `bg-ink-950/85 backdrop-blur-lg border-b border-bone/10`. Toggle via scroll listener on mount (passive).
- Container uses `.container-edge`.
- Left brand: `<Link to="/">` with `<MapleLogo h-8 w-8 group-hover:rotate-12>` + `<span class="font-display text-xl font-bold tracking-widest2">CONNECTIONS<span class="text-cyan-electric">×</span></span>`.
- Links array (in order): Home `/`, About `/about`, Services `/services`, Realty `/realty`, Contact `/#contact`.
- Desktop nav (`hidden md:flex`): each non-hash link uses `NavLink` with `end` for `/`. Active link is `text-cyan-electric`, inactive `text-bone/80 hover:text-bone`. The active item renders a `<motion.span layoutId="active-underline">` at `inset-x-3 -bottom-0.5 h-px bg-cyan-electric` with spring `stiffness: 400, damping: 30` — this is the shared-layout animated underline that slides between active links.
- Contact link is a plain `<a>` (no NavLink) since it's a hash anchor.
- Trailing `Link to="/services" class="btn-primary ml-3 hidden lg:inline-flex">Get Started</Link>`.
- Mobile (`md:hidden`): a hamburger button — three 0.5px-thick, 5-wide white bars in a round border `border-bone/15 p-3`. When open: top bar rotates 45° and translates down 2; middle fades; bottom rotates -45° and translates up 2.
- Mobile menu uses `AnimatePresence` with `initial={{opacity:0,y:-8}}` etc; same link list shown vertically in `container-edge`.
- `useEffect`: close mobile menu (`setOpen(false)`) on `pathname` change.


### `Footer.jsx`


`<footer class="relative mt-28 border-t border-bone/10 bg-ink-950">` with `.gradient-radial-cyan` overlay at 50% opacity.


Four columns inside a `grid lg:grid-cols-12`:


1. **Brand (col-span-4):** MapleLogo `h-9 w-9` + wordmark, tagline:
   > Because Connections Matter — growing your social presence digitally. A women-led Canadian digital studio rooted in British Columbia.
   Below: three round social buttons (LinkedIn, Facebook, Instagram) — `h-10 w-10 rounded-full border border-bone/15`, hover `border-cyan-electric text-cyan-electric`. SVG paths supplied below.
2. **Quick Links (col-span-3):** Home, About Us, Services, Boost Realty Listings, Contact.
3. **Reach Us (col-span-5):** Two sub-columns: addresses + hours/phone/email.
4. **Bottom bar** (after `border-t border-bone/10 pt-6`): left `© 2025 Connections X Media Inc. All rights reserved.`; right (uppercase, widest2) `Langley · British Columbia · Canada`.


**Social SVG paths** (24×24, `fill="currentColor"`):


- LinkedIn: `M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001zM3 9h4v12H3V9zm7 0h3.83v1.64h.06c.53-1 1.84-2.06 3.78-2.06C21 8.58 22 10.7 22 13.5V21h-4v-6.74c0-1.6-.03-3.66-2.23-3.66-2.23 0-2.57 1.74-2.57 3.54V21h-4V9z`
- Facebook: `M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07c0 5.02 3.66 9.19 8.44 9.93v-7.02H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.91h-2.33V22c4.78-.74 8.44-4.91 8.44-9.93z`
- Instagram: `M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.42 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.26 1.8-.42 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.42-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.26-2.23-.42a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.17-.42-.37-1.06-.42-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.42-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.42 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.34 4.14.63 3.35.94 2.68 1.35 2.01 2.01a5.55 5.55 0 0 0-1.38 2.13c-.29.76-.49 1.64-.55 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.55 2.91.31.79.72 1.46 1.38 2.13.66.66 1.33 1.07 2.13 1.38.76.29 1.64.49 2.91.55C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.55a5.55 5.55 0 0 0 2.13-1.38c.66-.66 1.07-1.33 1.38-2.13.29-.76.49-1.64.55-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.55-2.91a5.55 5.55 0 0 0-1.38-2.13A5.55 5.55 0 0 0 19.86.63c-.76-.29-1.64-.49-2.91-.55C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-10.41a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z`


### `RealtySubnav.jsx`


`sticky top-20 z-30 border-y border-bone/10 bg-ink-950/80 backdrop-blur-lg`. The `top-20` matches Navbar height — keep them in sync.


Inside `.container-edge`, a `flex gap-1 overflow-x-auto py-3` of `NavLink` chips. Items:


```js
[
  { to: '/realty', label: 'Overview', end: true },
  { to: '/realty/photo-retouching', label: 'Photo Retouching' },
  { to: '/realty/staging', label: 'Staging & Visualizations' },
  { to: '/realty/blueprints', label: 'Blueprints' },
  { to: '/realty/tours', label: '360° Tours' },
  { to: '/realty/drone', label: 'Drone Capture' },
  { to: '/realty/content', label: 'Content Writing' }
]
```


Chip classes: `whitespace-nowrap rounded-full px-4 py-2 uppercase tracking-widest2`. Active: `bg-cyan-electric text-ink-950`. Inactive: `text-bone/70 hover:bg-bone/5 hover:text-bone`.


### `Reveal.jsx`


Exports four motion primitives — **use these everywhere instead of ad-hoc `motion.div`** so timing stays consistent.


```jsx
export function FadeIn({ children, delay = 0, y = 24, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >{children}</motion.div>
  )
}


export function StaggerGroup({ children, className = '', stagger = 0.08, delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial="hidden" whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >{children}</motion.div>
  )
}


export function StaggerItem({ children, className = '', y = 24 }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
      }}
    >{children}</motion.div>
  )
}


export function PageWrap({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >{children}</motion.div>
  )
}
```


**Contract:** every page component's top-level return must be wrapped in `<PageWrap>`, or the `AnimatePresence` cross-fade breaks.


### `PageHero.jsx`


Used by About, Services, Realty (full-page hero with both radial gradients).


```jsx
<section className="relative overflow-hidden">
  <div className="gradient-radial-cyan absolute inset-0 -z-10" />
  <div className="gradient-radial-gold absolute inset-0 -z-10" />
  <div className="container-edge py-20 lg:py-28">
    <FadeIn><span className="eyebrow">{eyebrow}</span></FadeIn>
    <FadeIn delay={0.1}><h1 className="display-h1 mt-6 max-w-5xl text-bone">{title}</h1></FadeIn>
    {kicker && <FadeIn delay={0.2}><p className="mt-6 max-w-2xl text-lg text-bone/70 md:text-xl">{kicker}</p></FadeIn>}
    {children && <FadeIn delay={0.3}>{children}</FadeIn>}
  </div>
</section>
```


### `SubPageHero.jsx`


Used by all 6 realty sub-pages. Smaller than `PageHero`, includes a breadcrumb `Realty / {eyebrow}`.


```jsx
<section className="relative overflow-hidden">
  <div className="gradient-radial-cyan absolute inset-0 -z-10 opacity-70" />
  <div className="container-edge py-16 lg:py-24">
    <FadeIn>
      <nav className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest2 text-bone/50">
        <Link to="/realty" className="hover:text-cyan-electric">Realty</Link>
        <span>/</span>
        <span className="text-bone/80">{eyebrow}</span>
      </nav>
    </FadeIn>
    <FadeIn delay={0.1}><h1 className="display-h1 mt-6 max-w-5xl text-bone">{title}</h1></FadeIn>
    {kicker && <FadeIn delay={0.2}><p className="mt-6 max-w-2xl text-lg text-bone/70 md:text-xl">{kicker}</p></FadeIn>}
  </div>
</section>
```


### `HowItWorks.jsx`


Used by 4 realty sub-pages (Photo Retouching, Blueprints, Tours, Drone). 4-column stagger of numbered cards.


Props: `steps` (array of strings), `footnote` (optional string).


```jsx
<section className="py-16 lg:py-20">
  <div className="container-edge">
    <FadeIn><span className="eyebrow">How It Works</span></FadeIn>
    <StaggerGroup className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <StaggerItem key={i} className="relative rounded-2xl border border-bone/10 bg-ink-900/60 p-6 transition hover:border-cyan-electric/40">
          <span className="font-display text-5xl text-cyan-electric">{String(i + 1).padStart(2, '0')}</span>
          <p className="mt-4 text-bone/85 leading-relaxed">{s}</p>
        </StaggerItem>
      ))}
    </StaggerGroup>
    {footnote && <FadeIn delay={0.1}><p className="mt-6 text-sm italic text-bone/60">{footnote}</p></FadeIn>}
  </div>
</section>
```


---


## PAGES — FULL CONTENT


> **Reproduce all copy verbatim, including the curly apostrophes/quotes**. Every page's top-level return must be `<PageWrap>...</PageWrap>`.


### `pages/Home.jsx`


Sections (in order, on one scrollable page):


**1. Hero** (`id="top"`)
- A `HeroOrbit` sub-component: uses `useScroll` + `useTransform` to drive `y` (0→200px) and `rotate` (0→90deg) on two concentric circles positioned `absolute -right-32 top-10 h-[36rem] w-[36rem]` (cyan/20 border) and `-right-10 top-40 h-[28rem] w-[28rem]` (gold/20 border). Two dot accents: cyan at `right-32 top-20` (shadow-glow), gold at `right-80 top-72` (shadow-gold).
- Eyebrow: `Connections X Media Inc. · Langley · BC`
- Headline (Playfair):
  - Line 1: `WE CONNECT` in bone
  - Line 2: `360` as `bg-gradient-to-r from-cyan-electric via-cyan-glow to-gold-soft bg-clip-text text-transparent`, followed by a bone `.`
- Tagline (Playfair italic, `text-2xl md:text-3xl`, `text-bone/80`): `Because Connections Matter — Growing Social Presence Digitally.`
- Buttons: `<Link to="/services" className="btn-primary">Explore Services →</Link>` and `<a href="#who" className="btn-ghost">Who We Are</a>`
- Right card (lg:col-span-4): rounded-3xl, `border-bone/10 bg-ink-900/60`. Top-right corner: `<MapleLogo h-12 w-12 tone="#E6B85C">` absolutely positioned `-right-4 -top-4`. Eyebrow text "A Women-led", display headline "Canadian Studio". 3-stat grid: `30+ / Years of IT`, `3 / Focus Areas`, `360° / Approach` — stat values in cyan-electric Playfair.
- Below hero: a marquee strip `border-y border-bone/10 bg-ink-900/40 py-5` with five labels: `· Websites`, `· Social Media Engagement`, `· Content Creation`, `· Real Estate Boosting`, `· 360° Tours` — small uppercase widest2 in `text-bone/50`.


**2. Who Are We** (`id="who"`, `py-24 lg:py-32`)
- Left (col-span-5): eyebrow `Who Are We`, h2: `We don’t try to do everything.` then `We do three things, deeply.` (the second line `text-cyan-electric`).
- Right (col-span-7) paragraph:
  > If your goal is to reach more people and grow your business—we’re here to make that Connection. We don’t try to do everything—we focus on three proven areas that directly help local businesses connect with clients and grow.
- Three pillar cards (`mt-16 grid md:grid-cols-3`), each card-base with hover lift + cyan glow:


| n | title | body | accent dot |
|---|---|---|---|
| 01 | Digital Presence | Distinctive websites built to earn trust and stand apart from the cookie-cutter crowd. | cyan |
| 02 | Social Media Engagement | Posts, reels, and interactions that turn your channels into a true brand extension. | gold |
| 03 | Content Creation | Photography, video, and 360° captures that tell the heart of your business. | cyan |


Each card: top row shows big Playfair `n` in `text-bone/15` + a 2×2px dot; bottom has a `Learn more →` link-underline to `/services`.


**3. Latest Projects** (`id="projects"`)
- Eyebrow `Latest Projects`, h2 `A peek at the work, the wins, and the connections.`
- Right side: `btn-ghost` `All Capabilities` → `/services`.
- Three project cards (`md:grid-cols-3`). Each is a 4/5 aspect ratio gradient header showing the big number, then a body with `tag`, `client`, `desc`:


| n | tag | client | desc | palette |
|---|---|---|---|---|
| 01 | Digital Presence | Dr. Virender Ahlawat | A trust-first individual-focused website that becomes the doctor's digital persona. | `from-cyan-electric/30 via-cyan-electric/10 to-transparent` |
| 02 | CRM + Listing Boost | Fortune Real Estate Group | A boosted listing workflow with retouching, staging, and content writing in one pipeline. | `from-gold-warm/30 via-gold-warm/10 to-transparent` |
| 03 | Content + Social Media | South Asian Connect | A bilingual content engine: reels, thumbnails, captions, and ongoing social management. | `from-cyan-electric/25 via-gold-warm/15 to-transparent` |


**4. Services preview** (`id="services"`, `.gradient-radial-gold` at opacity-60)
- Eyebrow `Services`, h2 `Three disciplines. One unmistakable digital persona.`
- Three card-base cards (gold hover):
  - `Website` / `Distinctive, trust-first websites` / `Memorable identities — never cookie-cutter. Built to inspire trust and convert at first glance.`
  - `Social Media` / `Channels that feel like your brand` / `Cleanup, ongoing management, SEO-friendly reels, and posts that leave a lasting impression.`
  - `Content Creation` / `Stories that capture the heart of your business` / `Photography, video, drone, and 360° tours — branded, edited, and ready to publish.`
- Each shows `0{i+1}` in `text-bone/30` and "Learn More →" → `/services`.


**5. Team** (`id="team"`)
- Eyebrow `Meet The Team`, h2 `Thinkers, creators, and tech experts behind the connection.`
- Right paragraph:
  > Behind Connections is a passionate crew of thinkers, creators, and tech experts who love bringing ideas to life. With decades of experience across IT, software, branding, design, and media, we blend strategy with creativity to deliver digital solutions that actually make a difference.
- Grid `sm:grid-cols-2 lg:grid-cols-5`:


| name | role | initials | tone |
|---|---|---|---|
| Smita Vyas | Founder, Director & CEO | SV | gold |
| Sagar Vyas | Co-Founder · Head of Creative Space & Solution Design | SV | cyan |
| Aashutosh | Head of Media Operations | A | cyan |
| Varun | Head of Technical Operations | V | gold |
| Abhimanyu | Lead Designer & Editor | A | cyan |


Each card: aspect-square gradient (cyan or gold) tile with initials in Playfair 5xl + a small cyan dot bottom-right; name in Playfair `text-xl`; role in uppercase widest2 `text-bone/60`.


**6. Clients** (`id="clients"`)
- Eyebrow `Clients`, h2 `Trusted by businesses growing in BC and beyond.`
- A 4-col `sm:grid-cols-3 lg:grid-cols-4` grid with hairline gap (`gap-px overflow-hidden rounded-2xl border border-bone/10 bg-bone/10`). Each cell `h-32 bg-ink-900/80 hover:bg-ink-800`, Playfair name, uppercase widest2 `kind` below in `text-bone/50`. Eight placeholders:


```
Dr. Virender Ahlawat / Healthcare
Fortune Real Estate / Real Estate
South Asian Connect / Media
Langley Wellness / Health
Northstar Realty / Real Estate
Cascade Café / Hospitality
Maple Legal Group / Legal
Aurora Studio / Studio
```


**7. Contact** (`id="contact"`, `.gradient-radial-cyan` opacity-50)
- Left col-span-5: eyebrow `Contact Us`, h2 `Let’s make the Connection.`, paragraph:
  > Tell us about your goal — a new website, a refreshed social presence, or a listing boost — and we’ll get back within one business day.
- Then four blocks: Address (both addresses), Hours (Mon–Fri · 8am – 8pm; Sat–Sun · 11am – 6pm), Phone ((778) 682-5900), Email (`connectionsinc.ca@gmail.com` as `link-underline`).
- Right col-span-7: form `rounded-3xl border border-bone/10 bg-ink-900/60 p-8 backdrop-blur lg:p-10`. Fields: First Name, Last Name, Email (full-width), Message (textarea, full-width). Submit button text toggles to `Thank you ✓` on submit (state `submitted`). `preventDefault` — no real backend.


**Field component (shared inside Home.jsx):** label in uppercase widest2 `text-bone/60`; input/textarea `rounded-xl border border-bone/15 bg-ink-950/60 px-4 py-3 outline-none focus:border-cyan-electric focus:ring-2 focus:ring-cyan-electric/30`.


---


### `pages/About.jsx`


`PageHero`:
- eyebrow: `About Us`
- title: `People don’t connect with companies.` `<br />` `They connect with people.` (second line `text-cyan-electric`)
- kicker: `A women-led Canadian studio rooted in British Columbia — focused on three things, deeply: digital presence, social media engagement, and content creation.`


**Identity strip** — 3 cards (md:grid-cols-3), each `card-base` with gold hover, big Playfair gold value + body:
- `Women-Led` / `A Canadian initiative founded and led by a woman entrepreneur.`
- `30+ Years` / `Combined IT experience, rooted in British Columbia.`
- `3 Focus Areas` / `Digital presence, social media engagement, content creation.`


**Philosophy section** (`py-20 lg:py-32`) — left sticky title (`lg:sticky lg:top-32`), right column with 4 stacked quote-cards (StaggerGroup):
- Eyebrow: `Philosophy`
- Title: `Finding Purpose in the IT Chaos:` / `Why We Started Connections.` (second line `italic text-cyan-electric`)
- Quote 1: `For a small or medium business, what’s the Most Powerful Way to get more clients? References! And how do references happen? It all comes down to Trust, which isn’t just built on good service alone—it’s built when people feel like they know you, believe in you and understand that you add value to their money.`
- Quote 2: `When someone refers you, they’re not just recommending your services—they’re putting their own reputation on the line because they trust you that much.`
- Quote 3: `In today’s digital world, your online Persona is your Brand. Whether it’s through your Social Media presence or an individual-focused Website, your online persona is where relations start.`
- Quote 4: `While delivering great service is your expertise, creating a personal connection is where we come in. We help people get to know you—not just your business. Because people don’t connect with companies; they connect with people.`


Each quote: `relative rounded-2xl border border-bone/10 bg-ink-900/60 p-8` with a small `absolute -left-3 top-7 hidden md:block h-px w-6 bg-cyan-electric` accent line.


**Process timeline** (`py-20 lg:py-32`) — gold radial overlay (60vh tall, opacity-60):
- Eyebrow: `How We Work`
- Title: `A five-step path from idea to ongoing growth.`
- Center vertical line `absolute left-6 top-0 h-full w-px bg-bone/10 md:left-1/2` (hidden on mobile).
- 5 steps alternate left/right (`i % 2 === 1` swaps `md:order-1`/`md:order-2`). Each step is a `card-base` with big Playfair cyan number + Playfair title + body. A 3×3 cyan dot ring at `left-1/2` marks each step on desktop.


Steps:


| n | title | body |
|---|---|---|
| 01 | Discovery First | Listen, research, and align on objectives — every engagement begins with understanding your business, audience, and goals. |
| 02 | Strategy & Planning | Build a roadmap with clear milestones and success metrics so we’re measuring outcomes, not activity. |
| 03 | Execution with Experts | Core leadership guides designers, developers, content editors, and marketers — each discipline owned end-to-end. |
| 04 | Transparent Communication | Open and frequent communication with agile practices — you always know where things stand. |
| 05 | Deliver. Optimize. Grow. | Test, analyze, and continuously improve — launch is the start of the journey, not the finish line. |


Below timeline, a banner card `rounded-3xl border border-bone/10 bg-ink-900/60 p-8 md:p-12`: gold eyebrow `Ready when you are`, Playfair `Let’s map your next connection.`, `btn-primary` "See Our Services" → `/services`.


---


### `pages/Services.jsx`


`PageHero`:
- eyebrow `Services`
- title: `Three disciplines.` / `One unmistakable brand.` (second line `text-cyan-electric`)
- kicker: `Websites, social media engagement, and content creation — built to grow trust where your customers already are.`
- children: 3 anchor buttons — Digital Presence (`#websites`, btn-primary), Social Media (`#social`, btn-ghost), Content Creation (`#content`, btn-ghost)


**01 · Digital Presence** (`id="websites"`)
- Eyebrow `01 · Digital Presence`, h2 `Websites.`
- Paragraph 1: `Website creates your Digital Presence. It’s your most powerful tool for building trust and credibility with potential clients.`
- Paragraph 2: `Unlike generic, cookie-cutter websites that blend into the digital crowd, we take pride in creating a unique, memorable identity for your website—one that stands out and inspires trust.`
- Right side: 8 numbered tile-cards `grid sm:grid-cols-2`. Each tile `border-bone/10 bg-ink-900/60 p-5` with a circular number badge + label. List (order matters):
  1. Website Development
  2. Design User Interface for Web and Mobile
  3. Web Navigation Animations
  4. Branding Logos
  5. Infographics and Data Visualization
  6. Illustrations and Icons
  7. Embed Branding Themes
  8. Prepare Branding Imagery


**02 · Social Media Engagement** (`id="social"`, gold radial overlay)
- Title side on the right (`lg:order-2`), list on the left (`lg:order-1`).
- Eyebrow `02 · Social Media`, h2 `Engagement.`
- Paragraph: `Our goal is to transform your social media presence into a powerful extension of your brand, so that every post, comment, and interaction leaves a lasting impression.`
- 5 numbered list-rows (gold accents):
  1. Enabling visibility on all relevant social media platforms
  2. Social media cleanup and ongoing management
  3. SEO-friendly language and hashtags for Reels
  4. Designing eye-catching thumbnails
  5. Posting engaging text and image content


**03 · Content Creation** (`id="content"`)
- Eyebrow `03 · Content Creation`, h2 `Stories.`
- Paragraph: `We don’t just produce visuals; we craft stories that capture the heart of your business and build a connection with your audience.`
- 5 numbered list-rows (cyan accents):
  1. Professional photographs and videos
  2. Immersive 360° virtual tours, floorplans, and measurements
  3. Cinematic drone captures
  4. Editing long-form videos and Instagram Reels
  5. Embedding branding elements and music in Reels


**Realty CTA** (`pb-24 lg:pb-32`)
- `relative overflow-hidden rounded-3xl border border-gold-warm/30 bg-gradient-to-br from-gold-warm/15 via-gold-warm/5 to-ink-900 p-10 md:p-16` with gold radial overlay.
- Gold eyebrow `Real Estate`, h3 (Playfair text-4xl md:text-5xl): `Boost Your Real Estate Listings`. Sub-line italic: `Starting at just $3.` (the `$3` in `text-gold-warm`).
- Body: `Retouching, digital staging, blueprints, 360° tours, drone capture, and listing content — every service tuned for realtors.`
- CTA button: `btn-gold` "Explore Realty Services →" → `/realty`.


---


### `pages/Realty.jsx`


`PageHero`:
- eyebrow `Boost Realty Listings`
- title: `Every property has a story.` / `We help you tell it.` (second line `text-gold-warm`)
- kicker: `In real estate, trust and first impressions can make or break a deal. At Connections, we understand that every property has a story to tell.`
- children: 2 buttons — `btn-gold` "See the Catalog" (`#catalog`), `btn-ghost` "Start with Retouching" → `/realty/photo-retouching`


Then `<RealtySubnav />` (sticky).


**Catalog** (`id="catalog"`)
- Eyebrow `Catalog`, h2 `Twelve services. Honest prices.` Right side: `Each card links to the deep-dive page where you can see the process, samples, and ordering steps.`
- 12 pricing cards `sm:grid-cols-2 lg:grid-cols-3`. Each card has a 5/3 gradient "image" header with the index number bottom-left (`text-bone/15`) and a price chip bottom-right (`rounded-full bg-ink-950/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest2 text-gold-warm` saying `from $X`). Body has Playfair name, body text, and a `link-underline` "Learn More →".


Exact array (order matters):


| # | name | price | desc | link | swatch |
|---|---|---|---|---|---|
| 1 | Professional Photo Retouching | 3 | White balance, tone, sky replacement, sharpening, lights on — and 4 more upgrades per photo. | `/realty/photo-retouching` | `from-cyan-electric/30 via-cyan-electric/5 to-transparent` |
| 2 | Daylight to Twilight | 7 | Twilight sky replacement, brightness contrast, lit interiors, fire in the fireplace. | `/realty/photo-retouching` | `from-gold-warm/30 via-gold-warm/5 to-transparent` |
| 3 | Digital Furniture Staging | 40 | Smart, room-measured digital staging that blends technology with modern interior design. | `/realty/staging` | `from-cyan-electric/25 via-gold-warm/10 to-transparent` |
| 4 | Digital Decluttering & Cleaning | 5 | Virtually remove furniture, scuff marks, and refresh walls and floors. | `/realty/staging` | `from-cyan-electric/30 via-cyan-electric/5 to-transparent` |
| 5 | 2D & 3D Floor Plan Drafting | 50 | Polished 2D and 3D plans drafted from sketches, photos, or your builder drawings. | `/realty/blueprints` | `from-gold-warm/25 via-gold-warm/5 to-transparent` |
| 6 | Architectural Site Plan Visualizations | 50 | Scaled site plans showing landscaping, driveways, and outdoor features. | `/realty/blueprints` | `from-cyan-electric/25 via-cyan-electric/5 to-transparent` |
| 7 | Digital Renovation & Design Previews | 50 | Visualize updated interiors for under-construction or outdated properties. | `/realty/staging` | `from-gold-warm/30 via-gold-warm/5 to-transparent` |
| 8 | Immersive 360° Property Tours | 50 | Step-inside tours buyers can explore at any time, from anywhere. | `/realty/tours` | `from-cyan-electric/30 via-cyan-electric/5 to-transparent` |
| 9 | Drone Capture & Enhancement | 5 | Aerial spotlights, lot divisions, colour focus, and drop-pin highlights. | `/realty/drone` | `from-gold-warm/30 via-gold-warm/5 to-transparent` |
| 10 | Tailored Media Editing | 3 | Per-photo bespoke edits aligned to your brand and listing standards. | `/realty/photo-retouching` | `from-cyan-electric/25 via-cyan-electric/5 to-transparent` |
| 11 | Photorealistic 3D Renderings | 400 | Interior and exterior renderings that bring blueprints fully to life. | `/realty/staging` | `from-gold-warm/35 via-gold-warm/5 to-transparent` |
| 12 | Listing Content Writing | 50 | Professional, tailored, story-driven copy that turns listings into more buyers. | `/realty/content` | `from-cyan-electric/30 via-gold-warm/10 to-transparent` |


**Bottom CTA** (cyan-framed banner):
- Cyan eyebrow `Need a custom bundle?`
- Headline `Talk to a real human at Connections.`
- Button: `btn-primary` "Start a Conversation →" → `/#contact`


---


### `pages/PhotoRetouching.jsx`


`SubPageHero`:
- eyebrow `Photo Retouching`
- title: `A well-edited photograph doesn’t just sit there—` then `it grabs the onlooker’s eye like a magnet.` (second line `text-cyan-electric`)
- kicker: `Professional retouching that turns every listing photo into a click.`


Then `<RealtySubnav />`.


`<HowItWorks>` steps:
1. `Capture photos — use your smartphone, or hire our in-house photographers for Flambient HDR bracketed shots.`
2. `Submit photos to Connections — drop a folder, link, or shared drive; we handle the rest.`
3. `We retouch — 9 included upgrades per image, hand-tuned for real estate.`
4. `You receive web-ready files — ready to publish across MLS and socials.`


Footnote: `Tip: Flambient HDR bracketed shots give us the widest dynamic range to work from.`


**9 edit cards** (`grid md:grid-cols-2 lg:grid-cols-3`):
- Eyebrow `Included in Every Retouch`, h2 `Nine upgrades on every image — at $3 each.`


| n | title | body |
|---|---|---|
| 01 | White Balance | Making white objects look white — removing yellow and dull tones from every frame. |
| 02 | Tone Adjustment | Bringing the right mood for real estate photos — bright, warm, and confidence-inspiring. |
| 03 | Replace Black TV Screen | Replace with a captivating image that hides reflections and lifts the scene. |
| 04 | Photo Straightening | Fix crooked horizons and slanted vertical lines so rooms feel grounded. |
| 05 | Replace Sky | Replace overcast skies with stunning blue ones that make the listing pop. |
| 06 | Photo Sharpening | Enhance details and boost overall image quality — buyers notice the crispness. |
| 07 | Enhance Pool | Remove the pool cleaner and enhance water appearance for a resort-style finish. |
| 08 | Remove Photographer’s Reflection | Clean, distraction-free photos — no glass-door cameos. |
| 09 | Turn On the Lights | Brighten rooms digitally to give every space a welcoming glow. |


Card structure: card-base, header row with Playfair cyan number + cyan/60 dot, Playfair title, body.


**Twilight section** (gold radial overlay):
- Eyebrow `Daylight to Twilight · $7`, h2 `From bright day to golden hour.`
- Body: `Transform mid-day captures into stunning twilight scenes that lead the eye and stop the scroll.`
- 4 list rows `border-gold-warm/30`: `Twilight Sky Replacement`, `Brightness & Contrast Replacement`, `Turn on the Lights`, `Add Fire to Fireplaces`.


**Custom Edit Jobs section:**
- Eyebrow `Custom Edit Jobs`, h2 `Bespoke edits for the listings that need a little more.`
- 3-col grid: `Tree Removal`, `Add People to a Space`, `Add Water in Pool`. Each card: Playfair title + `Available on request — priced per shot.`


---


### `pages/Staging.jsx`


`SubPageHero`:
- eyebrow `Digital Staging & Visualizations`
- title: `See it before you build it.` / `Sell it before you stage it.` (second line `text-cyan-electric`)
- kicker: `Smart technology meets the art of modern staging — every room measured, every piece placed to scale.`


`<RealtySubnav />`.


**Six feature cards** (`md:grid-cols-2 lg:grid-cols-3`):
- Eyebrow `Six Ways to Visualize`, h2 `From light decluttering to fully realized 3D worlds.`


Each card: 5/3 gradient header (cyan or gold) with big number bottom-left + price chip bottom-right (cyan or gold text on `ink-950/80`). Body has Playfair title + body.


| n | title | price | body | tone |
|---|---|---|---|---|
| 01 | Digital Furniture Staging | $40 | Blending smart technology with the art of modern staging — we digitally measure your rooms to ensure every piece fits just right. | cyan |
| 02 | Digital Decluttering and Cleaning | $5 | Virtually remove furniture, scuff marks, and refresh walls and floors — without lifting a hammer. | gold |
| 03 | Digital Renovation | $50 | Visualize updated interiors for under-construction or outdated properties so buyers see the potential. | cyan |
| 04 | Virtual Pool Addition | $50 | Showcase backyard transformation with a pool — let buyers see the lifestyle, not just the lot. | gold |
| 05 | Room Redesign Visualization | $50 | Kitchens, living rooms, and bedrooms reimagined with new layouts and finishes. | cyan |
| 06 | Photorealistic 3D Renderings | $400 | Interior and exterior renderings that bring blueprints fully to life — perfect for pre-construction. | gold |


---


### `pages/Blueprints.jsx`


`SubPageHero`:
- eyebrow `Blueprints Reimagined`
- title: `Map it. See it.` then `Understand it.` (second part `text-gold-warm`)
- kicker: `We bring clarity and impact to every listing — from hand-drawn sketches to polished, presentation-ready plans.`


`<RealtySubnav />`.


`<HowItWorks>` steps:
1. `Send the drawing — a builder plan, photo, or hand-drawn sketch will do.`
2. `Include measurements — even rough dimensions help us scale accurately.`
3. `Add details — what each room is, finishes, any callouts you want shown.`
4. `Connections redraws — you get a polished plan ready for the listing.`


Footnote: `Don’t have any of the above? Hire our professionals to scan the property on-site.`


**Four plan-type cards** (`md:grid-cols-2`). 5/2 aspect ratio gradient header. Card body has Playfair title + body.


| n | title | body | tone |
|---|---|---|---|
| 01 | 2D Floorplans | An accurate view of the layout, room sizes, and flow — the staple every listing should have. | cyan |
| 02 | 2D Floorplans — Colored & Textured | Finishes, flooring, and colour distinctions to communicate material choices at a glance. | gold |
| 03 | 3D Floorplans | A realistic three-dimensional view that helps buyers understand volume, light, and proportion. | cyan |
| 04 | Architectural Site Plans | A scaled overview of the entire lot — landscaping, driveways, and outdoor features included. | gold |


Section eyebrow `Plans We Produce`, h2 `Four flavours of clarity — pick what fits your listing.`


---


### `pages/Tours.jsx`


`SubPageHero`:
- eyebrow `Immersive 360° Property Tours`
- title: `Step Inside.` then `Explore Every Angle.` (second part `text-cyan-electric`)
- kicker: `Buyers can walk through a property at any time, from anywhere — no scheduling, no friction.`


`<RealtySubnav />`.


`<HowItWorks>` steps:
1. `Take 360° photos with any 360° camera you have on hand.`
2. `Share the captures with Connections — drop a folder or cloud link.`
3. `We stitch and process — your fully functional immersive tour is built.`
4. `Receive a shareable, embeddable tour for MLS, your site, and socials.`


Footnote: `No 360° camera? Hire our professionals to capture the property for you.`


**Feature section** (cyan radial overlay):
- Left col-span-6: eyebrow `360 Virtual Tour`, h2 `The next-best thing to being there.`
- Paragraph: `An immersive 360° virtual tour transforms property listings by allowing buyers to explore every corner of a home as if they were walking through it in person.`
- Bullet list (cyan dots):
  - `Self-guided walkthroughs at any time of day`
  - `Embed on MLS, on your website, or in email`
  - `Captures buyer attention beyond static photos`
  - `Filters serious leads before in-person showings`
- Right col-span-6: a "preview" card. 4/3 gradient (cyan→gold). Centered: a `relative` group with a `h-32 w-32 grid place-items-center rounded-full border border-cyan-electric/40 bg-ink-900/60 backdrop-blur` containing Playfair `360°` in cyan; an outer `-inset-6 animate-pulse rounded-full border border-cyan-electric/20` ring. Bottom strip: `border-t border-bone/10 p-5` with `Drag to look around` and `Live Tour Preview` (cyan).


---


### `pages/Drone.jsx`


`SubPageHero`:
- eyebrow `Drone Capture & Spotlight`
- title: `Showcase from Above.` then `Highlight with Impact.` (second part `text-gold-warm`)
- kicker: `Our drone service takes your listings to new heights — literally.`


`<RealtySubnav />`.


`<HowItWorks>` steps:
1. `Capture aerial photos using your own drone setup.`
2. `Share the raw aerial captures with Connections.`
3. `Our team prepares the aerial highlights — colour-graded and on-brand.`
4. `Receive listing-ready aerial visuals tuned for the format you need.`


Footnote: `No drone? Hire our certified professionals to fly your property.`


**Four drone treatments** (`md:grid-cols-2`, 5/3 gradient headers):


| n | title | body | tone |
|---|---|---|---|
| 01 | Single Lot Spotlight | A clear perspective of property boundaries, location, and surroundings — the defining hero aerial. | cyan |
| 02 | Multi-Lot Division | A top-down view of subdivided land, showing boundaries and development potential to investors. | gold |
| 03 | Listing Color Focus | Full colour on the target property, black & white on surroundings — buyers know exactly where to look. | cyan |
| 04 | Listing Drop Pin | An aerial marker plus boundary outline that directs attention to the listing in one glance. | gold |


Section eyebrow `Four Aerial Treatments`, h2 `Pick the perspective that sells the story.`


---


### `pages/ContentWriting.jsx`


`SubPageHero`:
- eyebrow `Listing Content Writing`
- title: `Turn Listings into Stories.` / `Capture More Buyers.` (second line `text-cyan-electric`)
- kicker: `Professional, engaging, tailored copy that does the heavy lifting on every listing.`


`<RealtySubnav />`.


**How It Works (5 items, lg:grid-cols-5)** — uses `card-base` with cyan hover; eyebrow `How It Works`, h2 `Send us five things. We send back the story.`


| n | body |
|---|---|
| 01 | At least 3 to 7 property images |
| 02 | Complete property address |
| 03 | Number of rooms and bathrooms |
| 04 | Any special features or unique architectural details |
| 05 | Optional: floor plan, property history, or extra images |


**Why It Matters** (gold radial overlay, `lg:grid-cols-12`):
- Left col-span-7: eyebrow `Why It Matters`, h2 `Words that work as hard as your photos do.`
- Paragraph: `Well-written content is a crucial part of any property listing. Our property listing content writing service delivers professional, engaging, and tailored copy that enhances your listing.`
- 2x2 mini cards (gold Playfair title, body in `text-bone/70`):
  - `Tone tuned to your brand` / `Confident, warm, never generic.`
  - `Searchable & scannable` / `Buyers see the highlights instantly.`
  - `Story-driven structure` / `A clear narrative, not a feature dump.`
  - `Optimized for MLS` / `Fits character limits without losing voice.`
- Right col-span-5: a quote card `rounded-3xl border-bone/10 bg-ink-900/60 p-8`. Cyan eyebrow `Sample · Excerpt`. Then a Playfair italic 2xl quote:
  > “A south-facing living room frames the cedars, an open kitchen invites Sunday brunches, and the primary suite turns the back garden into a private retreat — this isn’t just a home, it’s a chapter waiting to be written.”
  Footer text: `Every listing arrives with a long-form description, a 280-character summary, and three social captions ready to publish.`


---


## CONTACT DATA (reused in Footer + Home contact section)


- **Address 1:** 20538 Fraser Hwy #203, Langley, BC V3A 4G2
- **Address 2:** 112-19939 55A Ave, Langley, BC V3A 3X4
- **Hours:** Mon–Fri 8am – 8pm; Sat–Sun 11am – 6pm
- **Phone:** (778) 682-5900
- **Email:** connectionsinc.ca@gmail.com
- **Socials:** LinkedIn, Facebook, Instagram (all `href="#"` — no real URLs)


Footer bottom bar text: `© 2025 Connections X Media Inc. All rights reserved.` and `Langley · British Columbia · Canada`.


---


## README.md


Should include: project description, `npm install / dev / build / preview` commands, route table, and a short design-system summary (palette, fonts, motion, sticky navbar/sub-nav behavior).


---


## ACCEPTANCE CRITERIA


1. `npm install` succeeds.
2. `npm run build` exits cleanly with no warnings.
3. `npm run dev` opens the site on port 5173.
4. All 10 routes load without errors and visibly transition between each other.
5. Navbar:
   - Becomes solid (`bg-ink-950/85 backdrop-blur-lg`) after 12px scroll.
   - Animated underline slides between active links on desktop using `layoutId="active-underline"`.
   - Mobile hamburger opens a dropdown menu that closes on route change.
6. RealtySubnav is sticky at the navbar's bottom edge (`top-20`) on all 7 `/realty*` pages.
7. `/#contact` from any page scrolls to the contact section instead of jumping to top.
8. Every page reveals sections on scroll (fade + 24px y-translate, `ease: [0.22, 1, 0.36, 1]`, `duration: 0.7`, `viewport once: true`).
9. The hero `WE CONNECT 360` headline uses the cyan→gold gradient on the `360`.
10. The hero's two concentric circles parallax and rotate as the user scrolls.
11. Cards lift on hover (`-translate-y-1`) and gain cyan or gold glow shadow per their tone.
12. All 12 realty pricing cards link to the correct sub-page per the table.
13. Contact form's submit button text changes to `Thank you ✓` on submit (no actual network call).
14. The `.eyebrow` style renders a horizontal cyan leading line before each label.
15. All page text matches the verbatim copy in this document, including curly quotes/em-dashes.


If anything in the build differs from this document, the document wins.
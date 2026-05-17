import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import RealtySubnav from '../components/RealtySubnav'
import { FadeIn, StaggerGroup, StaggerItem, PageWrap } from '../components/Reveal'

const catalog = [
  {
    n: '01', name: 'Professional Photo Retouching', price: 3,
    desc: 'White balance, tone, sky replacement, sharpening, lights on — and 4 more upgrades per photo.',
    link: '/realty/photo-retouching', swatch: 'from-cyan-electric/30 via-cyan-electric/5 to-transparent',
  },
  {
    n: '02', name: 'Daylight to Twilight', price: 7,
    desc: 'Twilight sky replacement, brightness contrast, lit interiors, fire in the fireplace.',
    link: '/realty/photo-retouching', swatch: 'from-gold-warm/30 via-gold-warm/5 to-transparent',
  },
  {
    n: '03', name: 'Digital Furniture Staging', price: 40,
    desc: 'Smart, room-measured digital staging that blends technology with modern interior design.',
    link: '/realty/staging', swatch: 'from-cyan-electric/25 via-gold-warm/10 to-transparent',
  },
  {
    n: '04', name: 'Digital Decluttering & Cleaning', price: 5,
    desc: 'Virtually remove furniture, scuff marks, and refresh walls and floors.',
    link: '/realty/staging', swatch: 'from-cyan-electric/30 via-cyan-electric/5 to-transparent',
  },
  {
    n: '05', name: '2D & 3D Floor Plan Drafting', price: 50,
    desc: 'Polished 2D and 3D plans drafted from sketches, photos, or your builder drawings.',
    link: '/realty/blueprints', swatch: 'from-gold-warm/25 via-gold-warm/5 to-transparent',
  },
  {
    n: '06', name: 'Architectural Site Plan Visualizations', price: 50,
    desc: 'Scaled site plans showing landscaping, driveways, and outdoor features.',
    link: '/realty/blueprints', swatch: 'from-cyan-electric/25 via-cyan-electric/5 to-transparent',
  },
  {
    n: '07', name: 'Digital Renovation & Design Previews', price: 50,
    desc: 'Visualize updated interiors for under-construction or outdated properties.',
    link: '/realty/staging', swatch: 'from-gold-warm/30 via-gold-warm/5 to-transparent',
  },
  {
    n: '08', name: 'Immersive 360° Property Tours', price: 50,
    desc: 'Step-inside tours buyers can explore at any time, from anywhere.',
    link: '/realty/tours', swatch: 'from-cyan-electric/30 via-cyan-electric/5 to-transparent',
  },
  {
    n: '09', name: 'Drone Capture & Enhancement', price: 5,
    desc: 'Aerial spotlights, lot divisions, colour focus, and drop-pin highlights.',
    link: '/realty/drone', swatch: 'from-gold-warm/30 via-gold-warm/5 to-transparent',
  },
  {
    n: '10', name: 'Tailored Media Editing', price: 3,
    desc: 'Per-photo bespoke edits aligned to your brand and listing standards.',
    link: '/realty/photo-retouching', swatch: 'from-cyan-electric/25 via-cyan-electric/5 to-transparent',
  },
  {
    n: '11', name: 'Photorealistic 3D Renderings', price: 400,
    desc: 'Interior and exterior renderings that bring blueprints fully to life.',
    link: '/realty/staging', swatch: 'from-gold-warm/35 via-gold-warm/5 to-transparent',
  },
  {
    n: '12', name: 'Listing Content Writing', price: 50,
    desc: 'Professional, tailored, story-driven copy that turns listings into more buyers.',
    link: '/realty/content', swatch: 'from-cyan-electric/30 via-gold-warm/10 to-transparent',
  },
]

export default function Realty() {
  return (
    <PageWrap>
      <PageHero
        eyebrow="Boost Realty Listings"
        title={
          <>
            Every property has a story.
            <br />
            <span className="text-gold-warm">We help you tell it.</span>
          </>
        }
        kicker="In real estate, trust and first impressions can make or break a deal. At Connections, we understand that every property has a story to tell."
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#catalog" className="btn-gold">See the Catalog</a>
          <Link to="/realty/photo-retouching" className="btn-ghost">Start with Retouching</Link>
        </div>
      </PageHero>

      <RealtySubnav />

      <section id="catalog" className="py-20 lg:py-28">
        <div className="container-edge">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <FadeIn>
                <span className="eyebrow">Catalog</span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="display-h2 mt-4 text-bone">Twelve services. Honest prices.</h2>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <p className="max-w-sm text-sm text-bone/60">
                Each card links to the deep-dive page where you can see the process, samples, and ordering steps.
              </p>
            </FadeIn>
          </div>

          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {catalog.map(({ n, name, price, desc, link, swatch }) => (
              <StaggerItem key={n} className="overflow-hidden rounded-2xl border border-bone/10 bg-ink-900/60 transition hover:-translate-y-1 hover:border-gold-warm/30 hover:shadow-gold">
                <div className={`relative aspect-[5/3] bg-gradient-to-br ${swatch} flex items-end justify-between p-4`}>
                  <span className="font-display text-6xl font-bold text-bone/15">{n}</span>
                  <span className="rounded-full bg-ink-950/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest2 text-gold-warm">
                    from ${price}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="display-h3 text-bone">{name}</h3>
                  <p className="mt-3 text-sm text-bone/60 leading-relaxed">{desc}</p>
                  <Link to={link} className="link-underline mt-4 text-sm">Learn More →</Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="container-edge">
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl border border-cyan-electric/20 bg-ink-900/60 p-10 md:p-14 text-center">
              <div className="gradient-radial-cyan absolute inset-0 pointer-events-none" />
              <div className="relative">
                <span className="eyebrow">Need a custom bundle?</span>
                <h2 className="display-h2 mt-4 text-bone">Talk to a real human at Connections.</h2>
                <Link to="/#contact" className="btn-primary mt-8 inline-flex">
                  Start a Conversation →
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageWrap>
  )
}

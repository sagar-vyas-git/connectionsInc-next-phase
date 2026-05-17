import SubPageHero from '../components/SubPageHero'
import RealtySubnav from '../components/RealtySubnav'
import { FadeIn, StaggerGroup, StaggerItem, PageWrap } from '../components/Reveal'

const features = [
  {
    n: '01',
    title: 'Digital Furniture Staging',
    price: '$40',
    body: 'Blending smart technology with the art of modern staging — we digitally measure your rooms to ensure every piece fits just right.',
    tone: 'cyan',
  },
  {
    n: '02',
    title: 'Digital Decluttering and Cleaning',
    price: '$5',
    body: 'Virtually remove furniture, scuff marks, and refresh walls and floors — without lifting a hammer.',
    tone: 'gold',
  },
  {
    n: '03',
    title: 'Digital Renovation',
    price: '$50',
    body: 'Visualize updated interiors for under-construction or outdated properties so buyers see the potential.',
    tone: 'cyan',
  },
  {
    n: '04',
    title: 'Virtual Pool Addition',
    price: '$50',
    body: 'Showcase backyard transformation with a pool — let buyers see the lifestyle, not just the lot.',
    tone: 'gold',
  },
  {
    n: '05',
    title: 'Room Redesign Visualization',
    price: '$50',
    body: 'Kitchens, living rooms, and bedrooms reimagined with new layouts and finishes.',
    tone: 'cyan',
  },
  {
    n: '06',
    title: 'Photorealistic 3D Renderings',
    price: '$400',
    body: 'Interior and exterior renderings that bring blueprints fully to life — perfect for pre-construction.',
    tone: 'gold',
  },
]

export default function Staging() {
  return (
    <PageWrap>
      <SubPageHero
        eyebrow="Digital Staging & Visualizations"
        title={
          <>
            See it before you build it.
            <br />
            <span className="text-cyan-electric">Sell it before you stage it.</span>
          </>
        }
        kicker="Smart technology meets the art of modern staging — every room measured, every piece placed to scale."
      />

      <RealtySubnav />

      <section className="py-16 lg:py-20">
        <div className="container-edge">
          <FadeIn>
            <span className="eyebrow">Six Ways to Visualize</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="display-h2 mt-4 max-w-3xl text-bone">
              From light decluttering to fully realized 3D worlds.
            </h2>
          </FadeIn>
          <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ n, title, price, body, tone }) => (
              <StaggerItem key={n} className="overflow-hidden rounded-2xl border border-bone/10 bg-ink-900/60 transition hover:-translate-y-1 hover:border-cyan-electric/30">
                <div
                  className={`relative aspect-[5/3] bg-gradient-to-br ${
                    tone === 'cyan'
                      ? 'from-cyan-electric/30 via-cyan-electric/5 to-transparent'
                      : 'from-gold-warm/30 via-gold-warm/5 to-transparent'
                  } flex items-end justify-between p-4`}
                >
                  <span className="font-display text-6xl font-bold text-bone/15">{n}</span>
                  <span
                    className={`rounded-full bg-ink-950/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest2 ${
                      tone === 'cyan' ? 'text-cyan-electric' : 'text-gold-warm'
                    }`}
                  >
                    {price}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="display-h3 text-bone">{title}</h3>
                  <p className="mt-3 text-sm text-bone/70 leading-relaxed">{body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </PageWrap>
  )
}

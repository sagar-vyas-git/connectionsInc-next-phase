import SubPageHero from '../components/SubPageHero'
import RealtySubnav from '../components/RealtySubnav'
import HowItWorks from '../components/HowItWorks'
import { FadeIn, StaggerGroup, StaggerItem, PageWrap } from '../components/Reveal'

const steps = [
  'Send the drawing — a builder plan, photo, or hand-drawn sketch will do.',
  'Include measurements — even rough dimensions help us scale accurately.',
  'Add details — what each room is, finishes, any callouts you want shown.',
  'Connections redraws — you get a polished plan ready for the listing.',
]

const plans = [
  {
    n: '01',
    title: '2D Floorplans',
    body: 'An accurate view of the layout, room sizes, and flow — the staple every listing should have.',
    tone: 'cyan',
  },
  {
    n: '02',
    title: '2D Floorplans — Colored & Textured',
    body: 'Finishes, flooring, and colour distinctions to communicate material choices at a glance.',
    tone: 'gold',
  },
  {
    n: '03',
    title: '3D Floorplans',
    body: 'A realistic three-dimensional view that helps buyers understand volume, light, and proportion.',
    tone: 'cyan',
  },
  {
    n: '04',
    title: 'Architectural Site Plans',
    body: 'A scaled overview of the entire lot — landscaping, driveways, and outdoor features included.',
    tone: 'gold',
  },
]

export default function Blueprints() {
  return (
    <PageWrap>
      <SubPageHero
        eyebrow="Blueprints Reimagined"
        title={
          <>
            Map it. See it.{' '}
            <span className="text-gold-warm">Understand it.</span>
          </>
        }
        kicker="We bring clarity and impact to every listing — from hand-drawn sketches to polished, presentation-ready plans."
      />

      <RealtySubnav />

      <HowItWorks
        steps={steps}
        footnote="Don't have any of the above? Hire our professionals to scan the property on-site."
      />

      <section className="py-16 lg:py-20">
        <div className="container-edge">
          <FadeIn>
            <span className="eyebrow">Plans We Produce</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="display-h2 mt-4 max-w-3xl text-bone">
              Four flavours of clarity — pick what fits your listing.
            </h2>
          </FadeIn>
          <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-2">
            {plans.map(({ n, title, body, tone }) => (
              <StaggerItem key={n} className="overflow-hidden rounded-2xl border border-bone/10 bg-ink-900/60 transition hover:-translate-y-1 hover:border-cyan-electric/30">
                <div
                  className={`relative aspect-[5/2] bg-gradient-to-br ${
                    tone === 'cyan'
                      ? 'from-cyan-electric/30 via-cyan-electric/5 to-transparent'
                      : 'from-gold-warm/30 via-gold-warm/5 to-transparent'
                  } flex items-end p-4`}
                >
                  <span className="font-display text-7xl font-bold text-bone/15">{n}</span>
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

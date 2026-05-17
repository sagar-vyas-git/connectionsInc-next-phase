import SubPageHero from '../components/SubPageHero'
import RealtySubnav from '../components/RealtySubnav'
import HowItWorks from '../components/HowItWorks'
import { FadeIn, StaggerGroup, StaggerItem, PageWrap } from '../components/Reveal'

const steps = [
  'Capture aerial photos using your own drone setup.',
  'Share the raw aerial captures with Connections.',
  'Our team prepares the aerial highlights — colour-graded and on-brand.',
  'Receive listing-ready aerial visuals tuned for the format you need.',
]

const treatments = [
  {
    n: '01',
    title: 'Single Lot Spotlight',
    body: 'A clear perspective of property boundaries, location, and surroundings — the defining hero aerial.',
    tone: 'cyan',
  },
  {
    n: '02',
    title: 'Multi-Lot Division',
    body: 'A top-down view of subdivided land, showing boundaries and development potential to investors.',
    tone: 'gold',
  },
  {
    n: '03',
    title: 'Listing Color Focus',
    body: 'Full colour on the target property, black & white on surroundings — buyers know exactly where to look.',
    tone: 'cyan',
  },
  {
    n: '04',
    title: 'Listing Drop Pin',
    body: 'An aerial marker plus boundary outline that directs attention to the listing in one glance.',
    tone: 'gold',
  },
]

export default function Drone() {
  return (
    <PageWrap>
      <SubPageHero
        eyebrow="Drone Capture & Spotlight"
        title={
          <>
            Showcase from Above.{' '}
            <span className="text-gold-warm">Highlight with Impact.</span>
          </>
        }
        kicker="Our drone service takes your listings to new heights — literally."
      />

      <RealtySubnav />

      <HowItWorks
        steps={steps}
        footnote="No drone? Hire our certified professionals to fly your property."
      />

      <section className="py-16 lg:py-20">
        <div className="container-edge">
          <FadeIn>
            <span className="eyebrow">Four Aerial Treatments</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="display-h2 mt-4 max-w-3xl text-bone">
              Pick the perspective that sells the story.
            </h2>
          </FadeIn>
          <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-2">
            {treatments.map(({ n, title, body, tone }) => (
              <StaggerItem key={n} className="overflow-hidden rounded-2xl border border-bone/10 bg-ink-900/60 transition hover:-translate-y-1 hover:border-cyan-electric/30">
                <div
                  className={`relative aspect-[5/3] bg-gradient-to-br ${
                    tone === 'cyan'
                      ? 'from-cyan-electric/30 via-cyan-electric/5 to-transparent'
                      : 'from-gold-warm/30 via-gold-warm/5 to-transparent'
                  } flex items-end p-4`}
                >
                  <span className="font-display text-6xl font-bold text-bone/15">{n}</span>
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

import SubPageHero from '../components/SubPageHero'
import RealtySubnav from '../components/RealtySubnav'
import HowItWorks from '../components/HowItWorks'
import { FadeIn, StaggerGroup, StaggerItem } from '../components/Reveal'
import { PageWrap } from '../components/Reveal'

const editCards = [
  { n: '01', title: 'White Balance', body: 'Making white objects look white — removing yellow and dull tones from every frame.' },
  { n: '02', title: 'Tone Adjustment', body: 'Bringing the right mood for real estate photos — bright, warm, and confidence-inspiring.' },
  { n: '03', title: 'Replace Black TV Screen', body: 'Replace with a captivating image that hides reflections and lifts the scene.' },
  { n: '04', title: 'Photo Straightening', body: 'Fix crooked horizons and slanted vertical lines so rooms feel grounded.' },
  { n: '05', title: 'Replace Sky', body: 'Replace overcast skies with stunning blue ones that make the listing pop.' },
  { n: '06', title: 'Photo Sharpening', body: 'Enhance details and boost overall image quality — buyers notice the crispness.' },
  { n: '07', title: 'Enhance Pool', body: 'Remove the pool cleaner and enhance water appearance for a resort-style finish.' },
  { n: '08', title: "Remove Photographer's Reflection", body: 'Clean, distraction-free photos — no glass-door cameos.' },
  { n: '09', title: 'Turn On the Lights', body: 'Brighten rooms digitally to give every space a welcoming glow.' },
]

const steps = [
  'Capture photos — use your smartphone, or hire our in-house photographers for Flambient HDR bracketed shots.',
  'Submit photos to Connections — drop a folder, link, or shared drive; we handle the rest.',
  'We retouch — 9 included upgrades per image, hand-tuned for real estate.',
  'You receive web-ready files — ready to publish across MLS and socials.',
]

export default function PhotoRetouching() {
  return (
    <PageWrap>
      <SubPageHero
        eyebrow="Photo Retouching"
        title={
          <>
            A well-edited photograph doesn't just sit there—
            <br />
            <span className="text-cyan-electric">it grabs the onlooker's eye like a magnet.</span>
          </>
        }
        kicker="Professional retouching that turns every listing photo into a click."
      />

      <RealtySubnav />

      <HowItWorks
        steps={steps}
        footnote="Tip: Flambient HDR bracketed shots give us the widest dynamic range to work from."
      />

      <section className="py-16 lg:py-20">
        <div className="container-edge">
          <FadeIn>
            <span className="eyebrow">Included in Every Retouch</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="display-h2 mt-4 max-w-3xl text-bone">
              Nine upgrades on every image — at $3 each.
            </h2>
          </FadeIn>
          <StaggerGroup className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {editCards.map(({ n, title, body }) => (
              <StaggerItem key={n} className="card-base hover:-translate-y-1 hover:border-cyan-electric/40 hover:shadow-glow">
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl text-cyan-electric">{n}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-electric/60" />
                </div>
                <h3 className="display-h3 mt-4 text-bone">{title}</h3>
                <p className="mt-3 text-sm text-bone/70 leading-relaxed">{body}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-edge">
          <div className="relative overflow-hidden rounded-3xl border border-gold-warm/30 bg-ink-900/60 p-10 md:p-14">
            <div className="gradient-radial-gold absolute inset-0 pointer-events-none" />
            <div className="relative">
              <FadeIn>
                <span className="eyebrow-gold">Daylight to Twilight · $7</span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="display-h2 mt-4 text-bone">From bright day to golden hour.</h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mt-4 max-w-xl text-bone/70">
                  Transform mid-day captures into stunning twilight scenes that lead the eye and stop the scroll.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    'Twilight Sky Replacement',
                    'Brightness & Contrast Replacement',
                    'Turn on the Lights',
                    'Add Fire to Fireplaces',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-gold-warm/30 bg-ink-950/40 px-4 py-3"
                    >
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-warm" />
                      <span className="text-sm text-bone/80">{item}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-edge">
          <FadeIn>
            <span className="eyebrow">Custom Edit Jobs</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="display-h2 mt-4 text-bone">Bespoke edits for the listings that need a little more.</h2>
          </FadeIn>
          <StaggerGroup className="mt-10 grid gap-5 md:grid-cols-3">
            {['Tree Removal', 'Add People to a Space', 'Add Water in Pool'].map((title) => (
              <StaggerItem key={title} className="card-base hover:-translate-y-1 hover:border-cyan-electric/40">
                <h3 className="display-h3 text-bone">{title}</h3>
                <p className="mt-3 text-sm text-bone/60">Available on request — priced per shot.</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </PageWrap>
  )
}

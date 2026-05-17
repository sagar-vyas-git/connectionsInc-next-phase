import SubPageHero from '../components/SubPageHero'
import RealtySubnav from '../components/RealtySubnav'
import HowItWorks from '../components/HowItWorks'
import { FadeIn, PageWrap } from '../components/Reveal'

const steps = [
  'Take 360° photos with any 360° camera you have on hand.',
  'Share the captures with Connections — drop a folder or cloud link.',
  'We stitch and process — your fully functional immersive tour is built.',
  'Receive a shareable, embeddable tour for MLS, your site, and socials.',
]

export default function Tours() {
  return (
    <PageWrap>
      <SubPageHero
        eyebrow="Immersive 360° Property Tours"
        title={
          <>
            Step Inside.{' '}
            <span className="text-cyan-electric">Explore Every Angle.</span>
          </>
        }
        kicker="Buyers can walk through a property at any time, from anywhere — no scheduling, no friction."
      />

      <RealtySubnav />

      <HowItWorks
        steps={steps}
        footnote="No 360° camera? Hire our professionals to capture the property for you."
      />

      <section className="py-16 lg:py-20">
        <div className="container-edge">
          <div className="relative overflow-hidden rounded-3xl border border-bone/10 bg-ink-900/60">
            <div className="gradient-radial-cyan absolute inset-0 pointer-events-none" />
            <div className="relative grid gap-12 p-10 md:p-14 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <FadeIn>
                  <span className="eyebrow">360 Virtual Tour</span>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <h2 className="display-h2 mt-4 text-bone">The next-best thing to being there.</h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="mt-4 text-bone/70 leading-relaxed">
                    An immersive 360° virtual tour transforms property listings by allowing buyers to explore every corner of a home as if they were walking through it in person.
                  </p>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <ul className="mt-6 space-y-3">
                    {[
                      'Self-guided walkthroughs at any time of day',
                      'Embed on MLS, on your website, or in email',
                      'Captures buyer attention beyond static photos',
                      'Filters serious leads before in-person showings',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-electric" />
                        <span className="text-bone/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>

              <div className="lg:col-span-6">
                <FadeIn delay={0.2}>
                  <div className="overflow-hidden rounded-2xl border border-bone/10 bg-ink-950/40">
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-cyan-electric/20 via-gold-warm/10 to-transparent flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute -inset-6 animate-pulse rounded-full border border-cyan-electric/20" />
                        <div className="relative h-32 w-32 grid place-items-center rounded-full border border-cyan-electric/40 bg-ink-900/60 backdrop-blur">
                          <span className="font-display text-3xl text-cyan-electric">360°</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border-t border-bone/10 p-5">
                      <span className="text-xs text-bone/50">Drag to look around</span>
                      <span className="text-xs font-semibold text-cyan-electric">Live Tour Preview</span>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrap>
  )
}

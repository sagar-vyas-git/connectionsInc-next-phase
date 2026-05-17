import SubPageHero from '../components/SubPageHero'
import RealtySubnav from '../components/RealtySubnav'
import { FadeIn, StaggerGroup, StaggerItem, PageWrap } from '../components/Reveal'

const howItWorksSteps = [
  { n: '01', body: 'At least 3 to 7 property images' },
  { n: '02', body: 'Complete property address' },
  { n: '03', body: 'Number of rooms and bathrooms' },
  { n: '04', body: 'Any special features or unique architectural details' },
  { n: '05', body: 'Optional: floor plan, property history, or extra images' },
]

const whyCards = [
  { title: 'Tone tuned to your brand', body: 'Confident, warm, never generic.' },
  { title: 'Searchable & scannable', body: 'Buyers see the highlights instantly.' },
  { title: 'Story-driven structure', body: 'A clear narrative, not a feature dump.' },
  { title: 'Optimized for MLS', body: 'Fits character limits without losing voice.' },
]

export default function ContentWriting() {
  return (
    <PageWrap>
      <SubPageHero
        eyebrow="Listing Content Writing"
        title={
          <>
            Turn Listings into Stories.
            <br />
            <span className="text-cyan-electric">Capture More Buyers.</span>
          </>
        }
        kicker="Professional, engaging, tailored copy that does the heavy lifting on every listing."
      />

      <RealtySubnav />

      <section className="py-16 lg:py-20">
        <div className="container-edge">
          <FadeIn>
            <span className="eyebrow">How It Works</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="display-h2 mt-4 max-w-3xl text-bone">
              Send us five things. We send back the story.
            </h2>
          </FadeIn>
          <StaggerGroup className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {howItWorksSteps.map(({ n, body }) => (
              <StaggerItem
                key={n}
                className="card-base hover:-translate-y-1 hover:border-cyan-electric/40"
              >
                <span className="font-display text-5xl text-cyan-electric">{n}</span>
                <p className="mt-4 text-bone/85 leading-relaxed">{body}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-edge">
          <div className="relative overflow-hidden rounded-3xl border border-bone/10 bg-ink-900/60">
            <div className="gradient-radial-gold absolute inset-0 pointer-events-none" />
            <div className="relative grid gap-12 p-10 md:p-14 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <FadeIn>
                  <span className="eyebrow">Why It Matters</span>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <h2 className="display-h2 mt-4 text-bone">Words that work as hard as your photos do.</h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="mt-4 text-bone/70 leading-relaxed">
                    Well-written content is a crucial part of any property listing. Our property listing content writing service delivers professional, engaging, and tailored copy that enhances your listing.
                  </p>
                </FadeIn>
                <StaggerGroup className="mt-8 grid gap-4 sm:grid-cols-2">
                  {whyCards.map(({ title, body }) => (
                    <StaggerItem
                      key={title}
                      className="rounded-xl border border-bone/10 bg-ink-950/40 p-5"
                    >
                      <div className="font-display text-base font-semibold text-gold-warm">{title}</div>
                      <p className="mt-1 text-sm text-bone/70">{body}</p>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>

              <div className="lg:col-span-5">
                <FadeIn delay={0.3}>
                  <div className="rounded-3xl border border-bone/10 bg-ink-900/60 p-8">
                    <span className="eyebrow">Sample · Excerpt</span>
                    <blockquote className="mt-6 font-display text-xl italic leading-relaxed text-bone/90">
                      "A south-facing living room frames the cedars, an open kitchen invites Sunday brunches, and the primary suite turns the back garden into a private retreat — this isn't just a home, it's a chapter waiting to be written."
                    </blockquote>
                    <p className="mt-6 text-xs text-bone/50 leading-relaxed">
                      Every listing arrives with a long-form description, a 280-character summary, and three social captions ready to publish.
                    </p>
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

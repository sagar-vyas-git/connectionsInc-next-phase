import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { FadeIn, StaggerGroup, StaggerItem, PageWrap } from '../components/Reveal'
import { imgUrl } from '../utils/imgUrl'

const identityCards = [
  { value: 'Women-Led', body: 'A Canadian initiative founded and led by a woman entrepreneur.' },
  { value: '30+ Years', body: 'Combined IT experience, rooted in British Columbia.' },
  { value: '3 Focus Areas', body: 'Digital presence, social media engagement, content creation.' },
]

const quotes = [
  `For a small or medium business, what's the Most Powerful Way to get more clients? References! And how do references happen? It all comes down to Trust, which isn't just built on good service alone—it's built when people feel like they know you, believe in you and understand that you add value to their money.`,
  `When someone refers you, they're not just recommending your services—they're putting their own reputation on the line because they trust you that much.`,
  `In today's digital world, your online Persona is your Brand. Whether it's through your Social Media presence or an individual-focused Website, your online persona is where relations start.`,
  `While delivering great service is your expertise, creating a personal connection is where we come in. We help people get to know you—not just your business. Because people don't connect with companies; they connect with people.`,
]

const timelineSteps = [
  {
    n: '01', title: 'Discovery First',
    body: 'Listen, research, and align on objectives — every engagement begins with understanding your business, audience, and goals.',
  },
  {
    n: '02', title: 'Strategy & Planning',
    body: "Build a roadmap with clear milestones and success metrics so we're measuring outcomes, not activity.",
  },
  {
    n: '03', title: 'Execution with Experts',
    body: 'Core leadership guides designers, developers, content editors, and marketers — each discipline owned end-to-end.',
  },
  {
    n: '04', title: 'Transparent Communication',
    body: 'Open and frequent communication with agile practices — you always know where things stand.',
  },
  {
    n: '05', title: 'Deliver. Optimize. Grow.',
    body: 'Test, analyze, and continuously improve — launch is the start of the journey, not the finish line.',
  },
]

export default function About() {
  return (
    <PageWrap>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            People don't connect with companies.
            <br />
            <span className="text-cyan-electric">They connect with people.</span>
          </>
        }
        kicker="A women-led Canadian studio rooted in British Columbia — focused on three things, deeply: digital presence, social media engagement, and content creation."
      />

      {/* Identity strip */}
      <section className="py-16 lg:py-20">
        <div className="container-edge">
          <StaggerGroup className="grid gap-6 md:grid-cols-3">
            {identityCards.map(({ value, body }) => (
              <StaggerItem key={value} className="card-base hover:-translate-y-1 hover:border-gold-warm/40 hover:shadow-gold">
                <div className="font-display text-4xl font-bold text-gold-warm">{value}</div>
                <p className="mt-4 text-bone/70 leading-relaxed">{body}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 lg:py-32">
        <div className="container-edge">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
              <FadeIn>
                <span className="eyebrow">Philosophy</span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="display-h2 mt-4 text-bone">
                  Finding Purpose in the IT Chaos:
                  <span className="block italic text-cyan-electric">Why We Started Connections.</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="mt-8 overflow-hidden rounded-2xl border border-bone/10">
                  <img
                    src={imgUrl('images/about/phone-desk.jpg')}
                    alt="Smartphone on a desk"
                    className="w-full object-cover grayscale hover:grayscale-0 transition-[filter] duration-500"
                  />
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-8">
              <StaggerGroup className="space-y-6">
                {quotes.map((quote, i) => (
                  <StaggerItem key={i} className="relative rounded-2xl border border-bone/10 bg-ink-900/60 p-8">
                    <div className="absolute -left-3 top-7 hidden h-px w-6 bg-cyan-electric md:block" />
                    <p className="text-bone/80 leading-relaxed">{quote}</p>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="py-20 lg:py-32 relative">
        <div className="gradient-radial-gold absolute inset-0 opacity-60 pointer-events-none" style={{ maxHeight: '60vh' }} />
        <div className="container-edge relative">
          <FadeIn>
            <span className="eyebrow">How We Work</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="display-h2 mt-4 max-w-2xl text-bone">
              A five-step path from idea to ongoing growth.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-10 overflow-hidden rounded-2xl border border-bone/10 aspect-[16/6]">
              <img
                src={imgUrl('images/about/team-working.jpg')}
                alt="Team collaborating on a project"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-[filter] duration-500"
              />
            </div>
          </FadeIn>

          <div className="relative mt-16">
            <div className="absolute left-6 top-0 hidden h-full w-px bg-bone/10 md:left-1/2 md:block" />

            <div className="space-y-8">
              {timelineSteps.map(({ n, title, body }, i) => (
                <div key={n} className="relative grid gap-6 md:grid-cols-2">
                  <div className="absolute left-1/2 top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-cyan-electric bg-ink-950 md:block z-10" />
                  <div
                    className={`pl-12 md:pl-0 ${
                      i % 2 === 0 ? 'md:pr-12' : 'md:order-2 md:pl-12'
                    }`}
                  >
                    <FadeIn delay={i * 0.05}>
                      <div className="card-base">
                        <span className="font-display text-6xl text-cyan-electric">{n}</span>
                        <h3 className="display-h3 mt-4 text-bone">{title}</h3>
                        <p className="mt-3 text-bone/70 leading-relaxed">{body}</p>
                      </div>
                    </FadeIn>
                  </div>
                  <div className={i % 2 === 1 ? 'hidden md:block md:order-1' : 'hidden md:block'} />
                </div>
              ))}
            </div>
          </div>

          <FadeIn className="mt-16">
            <div className="rounded-3xl border border-bone/10 bg-ink-900/60 p-8 md:p-12 text-center">
              <span className="eyebrow-gold">Ready when you are</span>
              <h2 className="display-h2 mt-4 text-bone">Let's map your next connection.</h2>
              <Link to="/services" className="btn-primary mt-8 inline-flex">See Our Services</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageWrap>
  )
}

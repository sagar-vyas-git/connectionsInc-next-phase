import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import MapleLogo from '../components/MapleLogo'
import { FadeIn, StaggerGroup, StaggerItem, PageWrap } from '../components/Reveal'
import { imgUrl } from '../utils/imgUrl'

function HeroOrbit() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 800], [0, 200])
  const rotate = useTransform(scrollY, [0, 800], [0, 90])
  return (
    <>
      <motion.div
        style={{ y, rotate }}
        className="pointer-events-none absolute -right-32 top-10 h-[36rem] w-[36rem] rounded-full border border-cyan-electric/20"
      />
      <motion.div
        style={{ y, rotate }}
        className="pointer-events-none absolute -right-10 top-40 h-[28rem] w-[28rem] rounded-full border border-gold-warm/20"
      />
      <div className="absolute right-32 top-20 h-2 w-2 rounded-full bg-cyan-electric shadow-glow" />
      <div className="absolute right-80 top-72 h-2 w-2 rounded-full bg-gold-warm shadow-gold" />
    </>
  )
}

function Field({ label, id, textarea = false }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-semibold uppercase text-bone/60"
        style={{ letterSpacing: '0.25em' }}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          rows={5}
          className="w-full rounded-xl border border-bone/15 bg-ink-950/60 px-4 py-3 text-bone outline-none focus:border-cyan-electric focus:ring-2 focus:ring-cyan-electric/30 resize-none transition"
        />
      ) : (
        <input
          id={id}
          type="text"
          className="w-full rounded-xl border border-bone/15 bg-ink-950/60 px-4 py-3 text-bone outline-none focus:border-cyan-electric focus:ring-2 focus:ring-cyan-electric/30 transition"
        />
      )}
    </div>
  )
}

const pillars = [
  {
    n: '01',
    title: 'Digital Presence',
    body: 'Distinctive websites built to earn trust and stand apart from the cookie-cutter crowd.',
    dot: 'bg-cyan-electric',
  },
  {
    n: '02',
    title: 'Social Media Engagement',
    body: 'Posts, reels, and interactions that turn your channels into a true brand extension.',
    dot: 'bg-gold-warm',
  },
  {
    n: '03',
    title: 'Content Creation',
    body: 'Photography, video, and 360° captures that tell the heart of your business.',
    dot: 'bg-cyan-electric',
  },
]

const projects = [
  {
    n: '01',
    slug: 'project-01',
    tag: 'Digital Presence',
    client: 'Dr. Virender Ahlawat',
    desc: "A trust-first individual-focused website that becomes the doctor's digital persona.",
    swatch: 'from-cyan-electric/30 via-cyan-electric/10 to-transparent',
  },
  {
    n: '02',
    slug: 'project-02',
    tag: 'CRM + Listing Boost',
    client: 'Fortune Real Estate Group',
    desc: 'A boosted listing workflow with retouching, staging, and content writing in one pipeline.',
    swatch: 'from-gold-warm/30 via-gold-warm/10 to-transparent',
  },
  {
    n: '03',
    slug: 'project-03',
    tag: 'Content + Social Media',
    client: 'South Asian Connect',
    desc: 'A bilingual content engine: reels, thumbnails, captions, and ongoing social management.',
    swatch: 'from-cyan-electric/25 via-gold-warm/15 to-transparent',
  },
]

const serviceCards = [
  {
    title: 'Website',
    icon: 'digital-engagement.png',
    sub: 'Distinctive, trust-first websites',
    body: 'Memorable identities — never cookie-cutter. Built to inspire trust and convert at first glance.',
  },
  {
    title: 'Social Media',
    icon: 'social-media.png',
    sub: 'Channels that feel like your brand',
    body: 'Cleanup, ongoing management, SEO-friendly reels, and posts that leave a lasting impression.',
  },
  {
    title: 'Content Creation',
    icon: 'content-creation.png',
    sub: 'Stories that capture the heart of your business',
    body: 'Photography, video, drone, and 360° tours — branded, edited, and ready to publish.',
  },
]

const team = [
  { name: 'Smita Vyas', role: 'Founder, Director & CEO', photo: 'smita-vyas.png' },
  { name: 'Sagar Vyas', role: 'Co-Founder · Head of Creative Space & Solution Design', photo: 'sagar-vyas.png' },
  { name: 'Aashutosh', role: 'Head of Media Operations', photo: 'aashutosh.png' },
  { name: 'Varun', role: 'Head of Technical Operations', photo: 'varun.png' },
  { name: 'Abhimanyu', role: 'Lead Designer & Editor', photo: 'abhimanyu.png' },
]

const clients = [
  { name: 'Dr. Virender Ahlawat', kind: 'Healthcare', logo: 'client-ahlawat.png' },
  { name: 'Fortune Real Estate Group', kind: 'Real Estate', logo: 'client-fortune.png' },
  { name: 'South Asian Connect', kind: 'Media', logo: 'client-southasian.png' },
]

const marqueeItems = [
  '· Websites',
  '· Social Media Engagement',
  '· Content Creation',
  '· Real Estate Boosting',
  '· 360° Tours',
]

export default function Home() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <PageWrap>
      {/* 1. Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="gradient-radial-cyan absolute inset-0 -z-10" />
        <HeroOrbit />
        <div className="container-edge py-24 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8">
              <FadeIn>
                <span className="eyebrow">Connections X Media Inc. · Langley · BC</span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="display-h1 mt-6 text-bone leading-tight" style={{ fontFamily: 'Monoton, cursive', fontWeight: 100 }}>
                  <span className="relative inline-block">
                    WE CONNECT
                    <span
                      className="absolute"
                      style={{
                        top: '-0.25em',
                        right: '-0.3em',
                        fontSize: '2rem',
                        lineHeight: 1,
                        fontFamily: 'Playfair Display, Georgia, serif',
                        fontWeight: 400,
                      }}
                    >
                      <span className="bg-gradient-to-r from-cyan-electric via-cyan-glow to-gold-soft bg-clip-text text-transparent">360°</span>
                    </span>
                  </span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link to="/services" className="btn-primary">Explore Services →</Link>
                  <a href="#who" className="btn-ghost">Who We Are</a>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-4">
              <FadeIn delay={0.3}>
                <div className="relative rounded-3xl border border-bone/10 bg-ink-900/60 p-8 backdrop-blur">
                  <MapleLogo className="absolute -right-4 -top-4 h-12 w-12" tone="#E6B85C" />
                  <span className="eyebrow">A Women-led</span>
                  <h2 className="display-h2 mt-4 text-bone">Canadian Studio</h2>
                  <div className="mt-6 grid grid-cols-3 gap-4 border-t border-bone/10 pt-6">
                    {[
                      { value: '30+', label: 'Years of IT' },
                      { value: '3', label: 'Focus Areas' },
                      { value: '360°', label: 'Approach' },
                    ].map(({ value, label }) => (
                      <div key={label} className="text-center">
                        <div className="font-display text-3xl font-bold text-cyan-electric">{value}</div>
                        <div className="mt-1 text-xs uppercase tracking-widest2 text-bone/60">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="border-y border-bone/10 bg-ink-900/40 py-5 overflow-hidden">
          <div
            className="flex gap-16 whitespace-nowrap"
            style={{ animation: 'marquee 30s linear infinite' }}
          >
            {[...Array(2)].map((_, ri) => (
              <div key={ri} className="flex gap-16 flex-shrink-0">
                {marqueeItems.map((item) => (
                  <span key={item} className="text-xs uppercase tracking-widest2 text-bone/50">
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Who Are We */}
      <section id="who" className="py-24 lg:py-32">
        <div className="container-edge">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <FadeIn>
                <span className="eyebrow">Who Are We</span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="display-h2 mt-4 text-bone">
                  We don't try to do everything.
                  <br />
                  <span className="text-cyan-electric">We do three things, deeply.</span>
                </h2>
              </FadeIn>
            </div>
            <div className="lg:col-span-7">
              <FadeIn delay={0.2}>
                <p className="text-lg text-bone/70 leading-relaxed">
                  If your goal is to reach more people and grow your business—we're here to make that Connection. We don't try to do everything—we focus on three proven areas that directly help local businesses connect with clients and grow.
                </p>
              </FadeIn>
            </div>
          </div>

          <StaggerGroup className="mt-16 grid gap-6 md:grid-cols-3">
            {pillars.map(({ n, title, body, dot }) => (
              <StaggerItem
                key={n}
                className="card-base hover:-translate-y-1 hover:border-cyan-electric/40 hover:shadow-glow"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-5xl font-bold text-bone/15">{n}</span>
                  <span className={`h-2 w-2 rounded-full ${dot}`} />
                </div>
                <h3 className="display-h3 mt-4 text-bone">{title}</h3>
                <p className="mt-3 text-bone/70 leading-relaxed">{body}</p>
                <Link to="/services" className="link-underline mt-6 text-sm">Learn more →</Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 3. Latest Projects */}
      <section id="projects" className="py-24 lg:py-32">
        <div className="container-edge">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <FadeIn>
                <span className="eyebrow">Latest Projects</span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="display-h2 mt-4 max-w-2xl text-bone">
                  A peek at the work, the wins, and the connections.
                </h2>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <Link to="/services" className="btn-ghost self-start">All Capabilities</Link>
            </FadeIn>
          </div>

          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.map(({ n, slug, tag, client, desc, swatch }) => (
              <StaggerItem key={n}>
                <Link
                  to={`/${slug}`}
                  className="block overflow-hidden rounded-2xl border border-bone/10 bg-ink-900/60 transition hover:-translate-y-1"
                >
                  <div className={`relative aspect-[4/5] bg-gradient-to-br ${swatch} flex items-end p-6`}>
                    <img
                      src={imgUrl(`images/projects/${slug}-a.jpg`)}
                      alt={client}
                      className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-[filter] duration-500"
                    />
                    <span className="relative font-display text-8xl font-bold text-bone/20">{n}</span>
                  </div>
                  <div className="p-6">
                    <span className="text-xs uppercase tracking-widest2 text-cyan-electric">{tag}</span>
                    <h3 className="display-h3 mt-2 text-bone">{client}</h3>
                    <p className="mt-3 text-sm text-bone/60 leading-relaxed">{desc}</p>
                    <span className="link-underline mt-4 text-sm inline-block">View Case Study →</span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 4. Services preview */}
      <section id="services" className="py-24 lg:py-32 relative">
        <div className="gradient-radial-gold absolute inset-0 opacity-60 pointer-events-none" />
        <div className="container-edge relative">
          <FadeIn>
            <span className="eyebrow">Services</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="display-h2 mt-4 max-w-2xl text-bone">
              Three disciplines. One unmistakable digital persona.
            </h2>
          </FadeIn>

          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-3">
            {serviceCards.map(({ title, icon, sub, body }, i) => (
              <StaggerItem
                key={title}
                className="card-base hover:-translate-y-1 hover:border-gold-warm/40 hover:shadow-gold relative"
              >
                <div className="flex items-start justify-between">
                  <div className="font-display text-5xl font-bold text-bone/30">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <img
                    src={imgUrl(`images/services/${icon}`)}
                    alt={title}
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <h3 className="display-h3 mt-4 text-bone">{title}</h3>
                <p className="mt-1 text-xs uppercase tracking-widest2 text-gold-warm">{sub}</p>
                <p className="mt-4 text-bone/70 leading-relaxed">{body}</p>
                <Link to="/services" className="link-underline mt-6 text-sm">Learn More →</Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 5. Team */}
      <section id="team" className="py-24 lg:py-32">
        <div className="container-edge">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <FadeIn>
                <span className="eyebrow">Meet The Team</span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="display-h2 mt-4 text-bone">
                  Thinkers, creators, and tech experts behind the connection.
                </h2>
              </FadeIn>
            </div>
            <div className="lg:col-span-7">
              <FadeIn delay={0.2}>
                <p className="text-lg text-bone/70 leading-relaxed">
                  Behind Connections is a passionate crew of thinkers, creators, and tech experts who love bringing ideas to life. With decades of experience across IT, software, branding, design, and media, we blend strategy with creativity to deliver digital solutions that actually make a difference.
                </p>
              </FadeIn>
            </div>
          </div>

          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {team.map(({ name, role, photo }) => (
              <StaggerItem key={name}>
                <div className="aspect-square rounded-2xl border border-bone/10 overflow-hidden">
                  <img
                    src={imgUrl(`images/team/${photo}`)}
                    alt={name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-[filter] duration-500"
                  />
                </div>
                <div className="mt-3">
                  <div className="font-display text-xl text-bone">{name}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest2 text-bone/60">{role}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 6. Clients */}
      <section id="clients" className="py-24 lg:py-32 relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none"
          style={{ backgroundImage: `url(${imgUrl('images/clients/client-bg.png')})` }}
        />
        <div className="container-edge relative">
          <FadeIn>
            <span className="eyebrow">Clients</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="display-h2 mt-4 max-w-2xl text-bone">
              Trusted by businesses growing in BC and beyond.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} className="mt-12 overflow-hidden rounded-2xl border border-bone/10 bg-bone/10">
            <div className="grid grid-cols-3 gap-px">
              {clients.map(({ name, kind, logo }) => (
                <div
                  key={name}
                  className="flex h-40 flex-col items-center justify-center bg-ink-900/80 p-6 text-center transition hover:bg-ink-800"
                >
                  <img
                    src={imgUrl(`images/clients/${logo}`)}
                    alt={name}
                    className="max-h-20 max-w-full object-contain grayscale hover:grayscale-0 transition-[filter] duration-500"
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. Contact */}
      <section id="contact" className="py-24 lg:py-32 relative">
        <div className="gradient-radial-cyan absolute inset-0 opacity-50 pointer-events-none" />
        <div className="container-edge relative">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <FadeIn>
                <span className="eyebrow">Contact Us</span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="display-h2 mt-4 text-bone">Let's make the Connection.</h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mt-6 text-bone/70 leading-relaxed">
                  Tell us about your goal — a new website, a refreshed social presence, or a listing boost — and we'll get back within one business day.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="mt-8 space-y-6">
                  <div>
                    <div className="text-xs uppercase tracking-widest2 text-bone/50 mb-2">Address</div>
                    <p className="text-sm text-bone/70">20538 Fraser Hwy #203, Langley, BC V3A 4G2</p>
                    <p className="text-sm text-bone/70">112-19939 55A Ave, Langley, BC V3A 3X4</p>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest2 text-bone/50 mb-2">Hours</div>
                    <p className="text-sm text-bone/70">Mon–Fri · 8am – 8pm</p>
                    <p className="text-sm text-bone/70">Sat–Sun · 11am – 6pm</p>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest2 text-bone/50 mb-2">Phone</div>
                    <p className="text-sm text-bone/70">(778) 682-5900</p>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest2 text-bone/50 mb-2">Email</div>
                    <a href="mailto:connectionsinc.ca@gmail.com" className="link-underline text-sm">
                      connectionsinc.ca@gmail.com
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-7">
              <FadeIn delay={0.2}>
                <form
                  onSubmit={handleSubmit}
                  className="rounded-3xl border border-bone/10 bg-ink-900/60 p-8 backdrop-blur lg:p-10"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="First Name" id="first-name" />
                    <Field label="Last Name" id="last-name" />
                  </div>
                  <div className="mt-5">
                    <Field label="Email" id="email" />
                  </div>
                  <div className="mt-5">
                    <Field label="Message" id="message" textarea />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary mt-6 w-full justify-center"
                  >
                    {submitted ? 'Thank you ✓' : 'Send Message'}
                  </button>
                </form>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </PageWrap>
  )
}

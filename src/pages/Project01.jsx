import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { FadeIn, StaggerGroup, StaggerItem, PageWrap } from '../components/Reveal'

const highlights = [
  { label: 'Client', value: 'Dr. Virender Ahlawat' },
  { label: 'Category', value: 'Digital Presence' },
  { label: 'Deliverables', value: 'Website · Personal Branding · Content Strategy' },
  { label: 'Location', value: 'British Columbia, Canada' },
]

const outcomes = [
  { n: '01', title: 'Trust-First Identity', body: 'Built a personal brand that communicates expertise and warmth — patients feel they know the doctor before the first appointment.' },
  { n: '02', title: 'Individual-Focused Website', body: 'A distinctive site that goes beyond a clinic listing — designed around the doctor as a person, not just a practice.' },
  { n: '03', title: 'Ongoing Digital Persona', body: 'Content strategy and social presence that sustains the connection built by the website over time.' },
]

export default function Project01() {
  return (
    <PageWrap>
      <PageHero
        eyebrow="Case Study · 01"
        title="Dr. Virender Ahlawat"
        kicker="A trust-first individual-focused website that becomes the doctor's digital persona — making patients feel connected before they ever walk through the door."
      />

      {/* Detail image */}
      <section className="container-edge py-12 lg:py-16">
        <FadeIn>
          <div className="overflow-hidden rounded-2xl aspect-[16/7] bg-ink-900 border border-bone/10">
            <img
              src="/images/projects/project-01-b.jpg"
              alt="Dr. Virender Ahlawat project"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-[filter] duration-500"
            />
          </div>
        </FadeIn>
      </section>

      {/* Meta highlights */}
      <section className="container-edge pb-16">
        <FadeIn>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 border border-bone/10 rounded-2xl divide-x divide-bone/10">
            {highlights.map(({ label, value }) => (
              <div key={label} className="p-6">
                <p className="text-xs uppercase tracking-widest2 text-cyan-electric mb-2">{label}</p>
                <p className="text-bone text-sm leading-relaxed">{value}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Outcomes */}
      <section className="py-16 lg:py-24 border-t border-bone/10">
        <div className="container-edge">
          <FadeIn>
            <span className="eyebrow">What We Delivered</span>
          </FadeIn>
          <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-3">
            {outcomes.map(({ n, title, body }) => (
              <StaggerItem key={n} className="card-base">
                <span className="font-display text-5xl font-bold text-bone/20">{n}</span>
                <h3 className="display-h3 mt-4 text-bone">{title}</h3>
                <p className="mt-3 text-bone/60 leading-relaxed text-sm">{body}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Nav between projects */}
      <section className="py-16 border-t border-bone/10">
        <div className="container-edge flex items-center justify-between">
          <span className="text-bone/30 text-sm">Project 01 of 03</span>
          <Link to="/project-02" className="btn-primary">Next Project →</Link>
        </div>
      </section>
    </PageWrap>
  )
}

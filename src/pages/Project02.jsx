import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { FadeIn, StaggerGroup, StaggerItem, PageWrap } from '../components/Reveal'

const highlights = [
  { label: 'Client', value: 'Fortune Real Estate Group' },
  { label: 'Category', value: 'CRM + Listing Boost' },
  { label: 'Deliverables', value: 'Photo Retouching · Staging · Content Writing' },
  { label: 'Location', value: 'British Columbia, Canada' },
]

const outcomes = [
  { n: '01', title: 'Boosted Listing Workflow', body: 'Integrated retouching, staging, and content writing into one seamless pipeline — reducing turnaround from days to hours.' },
  { n: '02', title: 'Visual Excellence', body: "Every property presented at its absolute best — professional retouching and virtual staging that makes listings stand out in a crowded market." },
  { n: '03', title: 'Compelling Listing Copy', body: 'Story-driven property descriptions that connect emotionally with buyers and drive inquiries for the right properties.' },
]

export default function Project02() {
  return (
    <PageWrap>
      <PageHero
        eyebrow="Case Study · 02"
        title="Fortune Real Estate Group"
        kicker="A boosted listing workflow with retouching, staging, and content writing in one unified pipeline — turning every property into a premium visual story."
      />

      {/* Detail image */}
      <section className="container-edge py-12 lg:py-16">
        <FadeIn>
          <div className="overflow-hidden rounded-2xl aspect-[16/7] bg-ink-900 border border-bone/10">
            <img
              src="/images/projects/project-02-b.jpg"
              alt="Fortune Real Estate Group project"
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
          <Link to="/project-01" className="btn-ghost">← Previous</Link>
          <span className="text-bone/30 text-sm">Project 02 of 03</span>
          <Link to="/project-03" className="btn-primary">Next Project →</Link>
        </div>
      </section>
    </PageWrap>
  )
}

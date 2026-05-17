import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { FadeIn, StaggerGroup, StaggerItem, PageWrap } from '../components/Reveal'
import { imgUrl } from '../utils/imgUrl'

const highlights = [
  { label: 'Client', value: 'South Asian Connect' },
  { label: 'Category', value: 'Content + Social Media' },
  { label: 'Deliverables', value: 'Reels · Thumbnails · Captions · Social Management' },
  { label: 'Location', value: 'British Columbia, Canada' },
]

const outcomes = [
  { n: '01', title: 'Bilingual Content Engine', body: 'A consistent content machine in English and Punjabi — reels, graphics, and captions produced on a reliable schedule.' },
  { n: '02', title: 'Community-First Social Presence', body: 'Channels rebuilt with a community voice — not a broadcast feed. Every post designed to spark conversation and connection.' },
  { n: '03', title: 'Ongoing Social Management', body: 'Full-service management: scheduling, engagement, analytics, and continuous refinement based on what the audience responds to.' },
]

export default function Project03() {
  return (
    <PageWrap>
      <PageHero
        eyebrow="Case Study · 03"
        title="South Asian Connect"
        kicker="A bilingual content engine — reels, thumbnails, captions, and ongoing social management that builds a community, not just a following."
      />

      {/* Detail image */}
      <section className="container-edge py-12 lg:py-16">
        <FadeIn>
          <div className="overflow-hidden rounded-2xl aspect-[16/7] bg-ink-900 border border-bone/10">
            <img
              src={imgUrl('images/projects/project-03-b.jpg')}
              alt="South Asian Connect project"
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
          <Link to="/project-02" className="btn-ghost">← Previous</Link>
          <span className="text-bone/30 text-sm">Project 03 of 03</span>
          <span />
        </div>
      </section>
    </PageWrap>
  )
}

import { FadeIn, StaggerGroup, StaggerItem } from './Reveal'

export default function HowItWorks({ steps, footnote }) {
  return (
    <section className="py-16 lg:py-20">
      <div className="container-edge">
        <FadeIn>
          <span className="eyebrow">How It Works</span>
        </FadeIn>
        <StaggerGroup className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <StaggerItem
              key={i}
              className="relative rounded-2xl border border-bone/10 bg-ink-900/60 p-6 transition hover:border-cyan-electric/40"
            >
              <span className="font-display text-5xl text-cyan-electric">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="mt-4 text-bone/85 leading-relaxed">{s}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
        {footnote && (
          <FadeIn delay={0.1}>
            <p className="mt-6 text-sm italic text-bone/60">{footnote}</p>
          </FadeIn>
        )}
      </div>
    </section>
  )
}

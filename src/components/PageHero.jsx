import { FadeIn } from './Reveal'

export default function PageHero({ eyebrow, title, kicker, children }) {
  return (
    <section className="relative overflow-hidden">
      <div className="gradient-radial-cyan absolute inset-0 pointer-events-none" />
      <div className="gradient-radial-gold absolute inset-0 pointer-events-none" />
      <div className="container-edge py-20 lg:py-28">
        <FadeIn>
          <span className="eyebrow">{eyebrow}</span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="display-h1 mt-6 max-w-5xl text-bone">{title}</h1>
        </FadeIn>
        {kicker && (
          <FadeIn delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-bone/70 md:text-xl">{kicker}</p>
          </FadeIn>
        )}
        {children && (
          <FadeIn delay={0.3}>
            {children}
          </FadeIn>
        )}
      </div>
    </section>
  )
}

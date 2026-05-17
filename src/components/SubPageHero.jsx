import { Link } from 'react-router-dom'
import { FadeIn } from './Reveal'

export default function SubPageHero({ eyebrow, title, kicker }) {
  return (
    <section className="relative overflow-hidden">
      <div className="gradient-radial-cyan absolute inset-0 -z-10 opacity-70" />
      <div className="container-edge py-16 lg:py-24">
        <FadeIn>
          <nav className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest2 text-bone/50">
            <Link to="/realty" className="hover:text-cyan-electric transition-colors">Realty</Link>
            <span>/</span>
            <span className="text-bone/80">{eyebrow}</span>
          </nav>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="display-h1 mt-6 max-w-5xl text-bone">{title}</h1>
        </FadeIn>
        {kicker && (
          <FadeIn delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-bone/70 md:text-xl">{kicker}</p>
          </FadeIn>
        )}
      </div>
    </section>
  )
}

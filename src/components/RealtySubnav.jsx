import { NavLink } from 'react-router-dom'

const links = [
  { to: '/realty', label: 'Overview', end: true },
  { to: '/realty/photo-retouching', label: 'Photo Retouching' },
  { to: '/realty/staging', label: 'Staging & Visualizations' },
  { to: '/realty/blueprints', label: 'Blueprints' },
  { to: '/realty/tours', label: '360° Tours' },
  { to: '/realty/drone', label: 'Drone Capture' },
  { to: '/realty/content', label: 'Content Writing' },
]

export default function RealtySubnav() {
  return (
    <div className="sticky top-20 z-30 border-y border-bone/10 bg-ink-950/80 backdrop-blur-lg">
      <div className="container-edge">
        <div className="flex gap-1 overflow-x-auto py-3">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest2 transition ${
                  isActive
                    ? 'bg-cyan-electric text-ink-950'
                    : 'text-bone/70 hover:bg-bone/5 hover:text-bone'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

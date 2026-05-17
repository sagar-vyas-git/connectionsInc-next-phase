import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { imgUrl } from '../utils/imgUrl'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/realty', label: 'Realty' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-20 transition-all duration-300 ${
        scrolled ? 'bg-ink-950/85 backdrop-blur-lg border-b border-bone/10' : 'bg-transparent'
      }`}
    >
      <div className="container-edge flex h-full items-center justify-between">
        <Link to="/" className="group flex items-center">
          <img
            src={imgUrl('images/logo/connection-maple-white-no-bg-crop.png')}
            alt="Connections X Media Inc."
            className="w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            style={{ height: '7rem', paddingTop: '1rem' }}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `relative px-3 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'text-cyan-electric' : 'text-bone/80 hover:text-bone'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="active-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-px bg-cyan-electric"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <a
            href="/#contact"
            className="px-3 py-2 text-sm font-medium text-bone/80 hover:text-bone transition-colors"
          >
            Contact
          </a>
          <Link to="/services" className="btn-primary ml-3 hidden lg:inline-flex">
            Get Started
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-bone/15"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block h-[0.5px] w-5 bg-white origin-center"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="block h-[0.5px] w-5 bg-white"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block h-[0.5px] w-5 bg-white origin-center"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-bone/10 bg-ink-950/95 backdrop-blur-lg"
          >
            <nav className="container-edge flex flex-col gap-1 py-4">
              {navLinks.map(({ to, label, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `py-2 text-sm font-medium transition-colors ${
                      isActive ? 'text-cyan-electric' : 'text-bone/80 hover:text-bone'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <a
                href="/#contact"
                className="py-2 text-sm font-medium text-bone/80 hover:text-bone transition-colors"
              >
                Contact
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

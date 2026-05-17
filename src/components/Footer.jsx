import { Link } from 'react-router-dom'
import { imgUrl } from '../utils/imgUrl'

function LinkedInIcon() {
  return (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001zM3 9h4v12H3V9zm7 0h3.83v1.64h.06c.53-1 1.84-2.06 3.78-2.06C21 8.58 22 10.7 22 13.5V21h-4v-6.74c0-1.6-.03-3.66-2.23-3.66-2.23 0-2.57 1.74-2.57 3.54V21h-4V9z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07c0 5.02 3.66 9.19 8.44 9.93v-7.02H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.91h-2.33V22c4.78-.74 8.44-4.91 8.44-9.93z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.42 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.26 1.8-.42 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.42-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.26-2.23-.42a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.17-.42-.37-1.06-.42-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.42-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.42 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.34 4.14.63 3.35.94 2.68 1.35 2.01 2.01a5.55 5.55 0 0 0-1.38 2.13c-.29.76-.49 1.64-.55 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.55 2.91.31.79.72 1.46 1.38 2.13.66.66 1.33 1.07 2.13 1.38.76.29 1.64.49 2.91.55C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.55a5.55 5.55 0 0 0 2.13-1.38c.66-.66 1.07-1.33 1.38-2.13.29-.76.49-1.64.55-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.55-2.91a5.55 5.55 0 0 0-1.38-2.13A5.55 5.55 0 0 0 19.86.63c-.76-.29-1.64-.49-2.91-.55C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-10.41a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="relative mt-28 border-t border-bone/10 bg-ink-950">
      <div className="gradient-radial-cyan absolute inset-0 opacity-50 pointer-events-none" />
      <div className="container-edge relative py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div>
              <img
                src={imgUrl('images/logo/connection-maple-white-no-bg-crop.png')}
                alt="Connections X Media Inc."
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-bone/60">
              Because Connections Matter — growing your social presence digitally. A women-led Canadian digital studio rooted in British Columbia.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: LinkedInIcon, label: 'LinkedIn' },
                { Icon: FacebookIcon, label: 'Facebook' },
                { Icon: InstagramIcon, label: 'Instagram' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-bone/15 text-bone/60 transition hover:border-cyan-electric hover:text-cyan-electric"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest2 text-bone/50 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Services' },
                { to: '/realty', label: 'Boost Realty Listings' },
                { to: '/#contact', label: 'Contact' },
              ].map(({ to, label }) => (
                  <li key={label}>
                    <Link to={to} className="text-sm text-bone/60 hover:text-bone transition-colors">
                      {label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <h4 className="text-xs font-semibold uppercase tracking-widest2 text-bone/50 mb-4">Reach Us</h4>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div>
                  <div className="text-xs uppercase tracking-widest2 text-bone/40 mb-1">Address</div>
                  <p className="text-sm text-bone/70">20538 Fraser Hwy #203,<br />Langley, BC V3A 4G2</p>
                  <p className="text-sm text-bone/70 mt-1">112-19939 55A Ave,<br />Langley, BC V3A 3X4</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-xs uppercase tracking-widest2 text-bone/40 mb-1">Hours</div>
                  <p className="text-sm text-bone/70">Mon–Fri · 8am – 8pm</p>
                  <p className="text-sm text-bone/70">Sat–Sun · 11am – 6pm</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest2 text-bone/40 mb-1">Phone</div>
                  <p className="text-sm text-bone/70">(778) 682-5900</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest2 text-bone/40 mb-1">Email</div>
                  <a href="mailto:connectionsinc.ca@gmail.com" className="text-sm text-cyan-electric hover:text-cyan-glow transition-colors">
                    connectionsinc.ca@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-bone/10 pt-6 sm:flex-row">
          <p className="text-xs text-bone/40">
            © 2025 Connections X Media Inc. All rights reserved.
          </p>
          <p className="text-xs uppercase tracking-widest2 text-bone/40">
            Langley · British Columbia · Canada
          </p>
        </div>
      </div>
    </footer>
  )
}

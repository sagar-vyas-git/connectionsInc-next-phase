import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink-950 text-bone">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.07] bg-grid-soft bg-grid-32" />
      <div className="pointer-events-none fixed inset-0 z-0 noise-overlay opacity-[0.06]" />
      <Navbar />
      <main className="pt-28">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Realty from './pages/Realty'
import PhotoRetouching from './pages/PhotoRetouching'
import Staging from './pages/Staging'
import Blueprints from './pages/Blueprints'
import Tours from './pages/Tours'
import Drone from './pages/Drone'
import ContentWriting from './pages/ContentWriting'
import Project01 from './pages/Project01'
import Project02 from './pages/Project02'
import Project03 from './pages/Project03'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()
  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/realty" element={<Realty />} />
            <Route path="/realty/photo-retouching" element={<PhotoRetouching />} />
            <Route path="/realty/staging" element={<Staging />} />
            <Route path="/realty/blueprints" element={<Blueprints />} />
            <Route path="/realty/tours" element={<Tours />} />
            <Route path="/realty/drone" element={<Drone />} />
            <Route path="/realty/content" element={<ContentWriting />} />
            <Route path="/project-01" element={<Project01 />} />
            <Route path="/project-02" element={<Project02 />} />
            <Route path="/project-03" element={<Project03 />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}

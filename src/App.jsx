import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Marquee, About, Skills } from './components/Sections'
import Projects from './components/Projects'
import Journey from './components/Journey'
import { Contact, Footer } from './components/Closing'
import Preloader from './components/Preloader'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import { CursorGlow, MagneticButtons } from './components/GlobalEffects'

export default function App() {
  const [booted, setBooted] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    if (booted) return
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => {
      setBooted(true)
      document.body.style.overflow = ''
    }, 1950)
    return () => {
      clearTimeout(t)
      document.body.style.overflow = ''
    }
  }, [booted])

  return (
    <>
      {!booted && <Preloader />}
      <ScrollProgress />
      <CursorGlow />
      <MagneticButtons />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

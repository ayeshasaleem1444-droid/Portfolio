import { useEffect, useRef, useState } from 'react'
import { profile, stats } from '../data/content'
import Reveal from './Reveal'
import Hero3D from './Hero3D'
import Typewriter from './Typewriter'

function useCountUp(target, start, duration = 1500) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!start) return
    let raf = 0
    const t0 = performance.now()
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, target, duration])
  return val
}

function Stat({ n, l, c, started }) {
  const val = useCountUp(parseInt(n, 10), started)
  return (
    <div className="stat">
      <b className={c}>{val}</b>
      <span>{l}</span>
    </div>
  )
}

export default function Hero() {
  const statsRef = useRef(null)
  const [statsStarted, setStatsStarted] = useState(false)

  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStatsStarted(true)
          obs.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <header className="hero" id="top">
      <div className="orb orb-a" aria-hidden="true" />
      <div className="orb orb-b" aria-hidden="true" />
      <Hero3D />
      <div className="container">
        <div className="hero-grid">
          <Reveal>
            <span className="eyebrow">👋 Hello, I'm</span>
            <h1>
              Ayesha <span className="grad-text">Saleem</span>
            </h1>
            <p className="role">
              {profile.role}
              <span className="sep">|</span>
              <Typewriter />
            </p>
            <p className="tag">{profile.tagline}</p>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">
                View Projects →
              </a>
              <a href={profile.cv} download className="btn btn-ghost">
                ⬇ Download CV
              </a>
            </div>
            <div className="hero-stats" ref={statsRef}>
              {stats.map((s) => (
                <Stat key={s.l} n={s.n} l={s.l} c={s.c} started={statsStarted} />
              ))}
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="photo-wrap">
              <div className="badge b1">
                <i /> Python
              </div>
              <div className="badge b2">
                <i /> Machine Learning
              </div>
              <div className="badge b3">
                <i /> FastAPI
              </div>
              <div className="photo-ring">
                <div className="photo-inner">
                  <img src={profile.photo} alt="Ayesha Saleem" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </header>
  )
}

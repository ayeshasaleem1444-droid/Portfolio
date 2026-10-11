import { useEffect } from 'react'
import { projects } from '../data/content'
import Reveal from './Reveal'

function ProjectCard({ p, delay }) {
  return (
    <Reveal delay={delay} className={p.featured ? 'featured-wrap' : ''}>
      <article
        className={`project-card tilt${p.featured ? ' featured' : ''}`}
        style={{ '--ac': p.accent, '--ac2': p.accent2 }}
      >
        <div>
          <div className="proj-icon">{p.icon}</div>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
        </div>
        <div>
          <div className="tags">
            {p.tech.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
          <div className="proj-links">
            {p.demo && (
              <a href={p.demo} target="_blank" rel="noreferrer" className="link-btn live">
                🚀 Live Demo
              </a>
            )}
            <a href={p.github} target="_blank" rel="noreferrer" className="link-btn">
              💻 GitHub
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default function Projects() {
  /* 3D tilt on project cards (fine pointers only, motion-safe) */
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const cards = Array.from(document.querySelectorAll('.project-card.tilt'))
    const cleanups = cards.map((card) => {
      let raf = 0
      const onMove = (e) => {
        const r = card.getBoundingClientRect()
        const px = (e.clientX - r.left) / r.width - 0.5
        const py = (e.clientY - r.top) / r.height - 0.5
        card.style.setProperty('--mx', (e.clientX - r.left).toFixed(0) + 'px')
        card.style.setProperty('--my', (e.clientY - r.top).toFixed(0) + 'px')
        cancelAnimationFrame(raf)
        raf = requestAnimationFrame(() => {
          card.style.transform =
            'perspective(950px) rotateX(' + (-py * 7).toFixed(2) + 'deg)' +
            ' rotateY(' + (px * 9).toFixed(2) + 'deg) translateY(-4px)'
        })
      }
      const onLeave = () => {
        cancelAnimationFrame(raf)
        card.style.transition = 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)'
        card.style.transform = ''
        setTimeout(() => { card.style.transition = '' }, 450)
      }
      card.addEventListener('mousemove', onMove)
      card.addEventListener('mouseleave', onLeave)
      return () => {
        card.removeEventListener('mousemove', onMove)
        card.removeEventListener('mouseleave', onLeave)
      }
    })
    return () => cleanups.forEach((fn) => fn())
  }, [])

  return (
    <section className="section" id="projects" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">🚀 Projects</span>
            <h2 className="section-title">
              Things I've <span className="grad-text">built</span>
            </h2>
            <p className="section-sub">
              From machine-learning models to full-stack apps — every project is public
              on GitHub. AI and backend work comes first; the frontend experiments are
              in there too.
            </p>
          </div>
        </Reveal>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} delay={(i % 2) * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}

import { profile } from '../data/content'
import Reveal from './Reveal'

export function Contact() {
  return (
    <section className="section" id="contact" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal>
          <div className="contact-card">
            <span className="eyebrow">📬 Contact</span>
            <h2>
              Let's build something <span className="grad-text">intelligent</span>
            </h2>
            <p>
              I'm open to AI internship opportunities — remote or in Lahore. The fastest
              way to reach me is email; I usually reply within a day.
            </p>
            <div className="contact-links">
              <a href={`mailto:${profile.email}`} className="btn btn-primary">
                ✉️ {profile.email}
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
                💻 GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
                🔗 LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <span>© 2026 Ayesha Saleem · Lahore, Pakistan</span>
        <span>
          Built with <span className="heart">♥</span> in React
        </span>
      </div>
    </footer>
  )
}

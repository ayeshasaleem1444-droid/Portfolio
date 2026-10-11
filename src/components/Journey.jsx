import { experience, education } from '../data/content'
import Reveal from './Reveal'

function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 100}>
          <div className="t-item" style={{ '--tc': item.color }}>
            <h3>{item.title}</h3>
            <div className="t-meta">
              {item.org} · {item.meta}
            </div>
            <ul>
              {item.points.map((pt, j) => (
                <li key={j}>{pt}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export default function Journey() {
  return (
    <section className="section" id="journey" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">🗺️ Journey</span>
            <h2 className="section-title">
              Experience &amp; <span className="grad-text">education</span>
            </h2>
          </div>
        </Reveal>
        <Reveal>
          <h3 style={{ fontSize: '1.3rem', margin: '0 0 24px' }}>💼 Experience</h3>
        </Reveal>
        <Timeline items={experience} />
        <Reveal>
          <h3 style={{ fontSize: '1.3rem', margin: '52px 0 24px' }}>🎓 Education</h3>
        </Reveal>
        <Timeline items={education} />
      </div>
    </section>
  )
}

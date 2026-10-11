import { marqueeItems, skillGroups, profile } from '../data/content'
import Reveal from './Reveal'

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span className="mq-item" key={i}>
            {item.label}
            <span className="star" style={{ color: item.color }}>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">🌟 About me</span>
            <h2 className="section-title">
              Turning data into <span className="grad-text">working software</span>
            </h2>
          </div>
        </Reveal>
        <div className="about-grid">
          <Reveal>
            <div className="about-card">
              <h3>
                <span className="hl-pink">Who</span> I am
              </h3>
              <p>
                I'm a <b>seventh-semester BSIT student</b> at the University of the Punjab,
                Lahore, working toward becoming an <b>AI engineer</b>.
              </p>
              <p>
                My sweet spot is <b>Python on the backend</b> — building REST APIs with
                FastAPI, working with PostgreSQL, and training machine-learning models
                with NumPy and pandas. I also have strong computer-science foundations in{' '}
                <b>data structures, algorithms, and OOP</b> with C++ and Python.
              </p>
              <p>
                I'm currently looking for <b>AI internship opportunities</b> where I can
                contribute to data preparation, AI-enabled application development, and
                reliable system integration.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="about-card">
              <h3>
                <span className="hl-cyan">Quick</span> facts
              </h3>
              <div className="fact">
                <span>📍 Location</span>
                <span>{profile.location}</span>
              </div>
              <div className="fact">
                <span>🎓 Education</span>
                <span>BSIT, University of the Punjab</span>
              </div>
              <div className="fact">
                <span>📊 Standing</span>
                <span>7th Semester · CGPA 3.15/4.00</span>
              </div>
              <div className="fact">
                <span>🎯 Focus</span>
                <span>AI · Backend · Data</span>
              </div>
              <div className="fact">
                <span>💼 Status</span>
                <span>Open to AI internships</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  return (
    <section className="section" id="skills" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">🧰 Skills</span>
            <h2 className="section-title">
              My <span className="grad-text">toolbox</span>
            </h2>
            <p className="section-sub">
              The languages, libraries, and tools I use to build and ship real projects.
            </p>
          </div>
        </Reveal>
        <div className="skills-grid">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 100}>
              <div className="skill-group" style={{ '--gc': g.color }}>
                <h3>
                  <span className="ico">{g.icon}</span> {g.title}
                </h3>
                <div className="pills">
                  {g.skills.map((s) => (
                    <span className="pill" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

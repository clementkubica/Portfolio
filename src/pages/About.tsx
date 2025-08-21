import headshot from "../assets/images/headshot.jpg"
import EduTimeline from "../components/EduTimeline"

export default function About() {
  return (
    <section className="about">
      <div className="about-hero">
        <img src={headshot} alt="Clément Kubica" className="about-headshot" />
        <div className="about-lead">
          <h1>About Clément</h1>
          <p className="muted">
            I’m a French computer scientist focused on clean interfaces and practical ML. I’m
            pursuing an M.S. in Computer Science at Northwestern (GPA 4.0). I like shipping
            minimal, fast things that solve real problems.
          </p>
          <div className="actions">
            <a className="button button--accent" href="/resume.pdf" target="_blank" rel="noreferrer">
              Resume (PDF)
            </a>
          </div>
        </div>
      </div>

      <div className="about-stats">
        <div className="stat"><strong>4.0</strong><span>MS GPA</span></div>
        <div className="stat"><strong>6</strong><span>Showcase projects</span></div>
        <div className="stat"><strong>D-I</strong><span>Former athlete</span></div>
        <div className="stat"><strong>FR · UK · US</strong><span>International</span></div>
      </div>

      <div className="section">
        <h2>Education</h2>
        <EduTimeline
          startYear={2008}
          endYear={2026}
          tickEvery={2}
          labelStyle="card"
          showYearsInLabels={false}
          items={[
            {
              school: "Émilie de Rodat",
              location: "Toulouse, France",
              start: 2008,
              end: 2016,
              detail: "Secondary education",
              color: "#111"
            },
            {
              school: "Millfield School",
              location: "Street, UK",
              start: 2016,
              end: 2022,
              detail: "GCSEs & A-levels · Swim Captain",
              color: "#0a66c2"
            },
            {
              school: "Northwestern University",
              location: "Evanston, IL",
              start: 2022,
              end: 2025,
              detail: "B.A. Computer Science & Data Science",
              color: "#4B2E83"
            },
            {
              school: "Northwestern University",
              location: "Evanston, IL",
              start: 2025,
              end: 2026,
              detail: "M.S. Computer Science (in progress)",
              color: "#4B2E83"
            }
          ]}
        />
      </div>

      <div className="section">
        <h2>Experience</h2>
        <div className="experience">
          <div className="exp-item">
            <h3>Undergraduate Researcher — Stupp Lab</h3>
            <p className="muted">Northwestern University · 2023–Present</p>
            <p>
              Developing automation workflows for NMR spectroscopy of peptide amphiphiles,
              combining signal assignment, visualization, and machine learning approaches.
              Experience integrating tools like NMRPipe and NMRViewJ with cloud services.
            </p>
          </div>

          <div className="exp-item">
            <h3>Software Engineering Intern — Party Rental Ltd.</h3>
            <p className="muted">Remote · Summer 2024</p>
            <p>
              Contributed to internal systems for logistics and rentals, improving data flows
              and reliability. Gained experience with production deployments and collaborating
              across teams on practical, user-facing software.
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>How I work</h2>
        <div className="values">
          <div className="value">
            <h3>Clarity over cleverness</h3>
            <p className="muted">Readable code, predictable systems, minimal UI.</p>
          </div>
          <div className="value">
            <h3>Ship, then sharpen</h3>
            <p className="muted">Deliver a thin slice early, then iterate with data.</p>
          </div>
          <div className="value">
            <h3>Evidence first</h3>
            <p className="muted">Let metrics and tests guide decisions.</p>
          </div>
          <div className="value">
            <h3>Low-ego collaboration</h3>
            <p className="muted">Communicate early, share context, unblock others.</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Skills & Tools</h2>
        <p className="muted">
          A toolkit shaped by research, engineering, and product work. I prefer lightweight,
          composable stacks and tools that scale without bloat.
        </p>

        <div className="skills">
          <div className="skill-group">
            <h3>Front-end</h3>
            <p className="muted">Clean, fast UIs with accessibility by default.</p>
            <div className="pill-group">
              {["React", "TypeScript", "Vite", "Tailwind", "HTML", "CSS"].map(s => (
                <span className="pill" key={s}>{s}</span>
              ))}
            </div>
          </div>

          <div className="skill-group">
            <h3>Back-end & Cloud</h3>
            <p className="muted">Practical services; observability and reliability first.</p>
            <div className="pill-group">
              {["Node.js", "Express", "PostgreSQL", "Docker", "AWS (Lambda, S3, RDS, API Gateway, EC2)"].map(s => (
                <span className="pill" key={s}>{s}</span>
              ))}
            </div>
          </div>

          <div className="skill-group">
            <h3>Data & ML</h3>
            <p className="muted">From dataset hygiene to deployment-ready models.</p>
            <div className="pill-group">
              {["Python", "Pandas", "NumPy", "scikit-learn", "TensorFlow", "NMRPipe", "NMRViewJ"].map(s => (
                <span className="pill" key={s}>{s}</span>
              ))}
            </div>
          </div>

          <div className="skill-group">
            <h3>Quality & Testing</h3>
            <p className="muted">Confidence through tests, CI, and coverage tools.</p>
            <div className="pill-group">
              {["JUnit", "EasyMock", "Vitest", "JaCoCo", "PIT", "Cucumber", "Git"].map(s => (
                <span className="pill" key={s}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Athletics</h2>
        <div className="highlights">
          <div className="highlight"><span className="icon">🏊</span><p>Former NCAA Division I swimmer — Northwestern</p></div>
          <div className="highlight"><span className="icon">🥇</span><p>French National Champion (×3, 2020); British National Champion (2019)</p></div>
          <div className="highlight"><span className="icon">🧭</span><p>Captain at Millfield; led training blocks & meet prep</p></div>
        </div>
      </div>

      <div className="section">
        <h2>International path</h2>
        <p className="muted">
          Grew up in Toulouse (France), moved to Street (UK) for school and sport, then to Evanston (US)
          for university. That mix shaped how I work: direct, collaborative, and adaptable.
        </p>
      </div>

      <div className="section">
        <h2>Little things</h2>
        <div className="highlights">
          <div className="highlight"><span className="icon">🗣️</span><p>Bilingual: French & English</p></div>
          <div className="highlight"><span className="icon">⌛</span><p>Bias for action: small PRs, fast feedback</p></div>
          <div className="highlight"><span className="icon">🧪</span><p>Love benchmarks & before/after diffs</p></div>
        </div>
      </div>

      <aside className="note">
        <p>Open to internships, research, and collaborations.</p>
        <a className="button" href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
      </aside>
    </section>
  )
}
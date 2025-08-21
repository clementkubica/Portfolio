import { Link } from "react-router-dom"
import ProjectCard from "../components/ProjectCard"
import { projects } from "../data/projects"
import headshot from "../assets/images/headshot.jpg"

export default function Home() {
  const featured = projects.filter(p => p.featured).slice(0, 3)

  return (
    <section className="home">
      <div className="hero hero-with-photo">
        <img
          src={headshot}
          alt="Clément Kubica"
          className="headshot"
        />
        <div>
          <p className="eyebrow">Clément A. Kubica</p>
          <h1>MS CS @ Northwestern · Front-end + ML</h1>
          <p className="sub">
            I build fast, minimal web apps and ML pipelines. Experience across React/TypeScript,
            Python, and AWS. Former D-I swimmer; internationally educated in FR/UK/USA.
          </p>
          <div className="actions">
            <a className="button" href="/Portfolio/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Skills at a Glance</h2>
        <div className="pill-group">
          {["React", "TypeScript", "Python", "AWS", "Machine Learning", "Data Visualization", "Java", "C++", "SQL"]
            .map((skill) => <span className="pill" key={skill}>{skill}</span>)}
        </div>
      </div>

      <div className="section">
        <div className="section-head">
          <h2>Featured Projects</h2>
          <Link to="/projects" className="more">See all →</Link>
        </div>
        <div className="grid">
          {featured.map(p => <ProjectCard key={p.title} {...p} />)}
        </div>
      </div>

      <div className="section">
        <h2>Highlights</h2>
        <div className="highlights">
          <div className="highlight">
            <span className="icon">🔬</span>
            <p>Automated NMR analysis for peptide amphiphiles</p>
          </div>
          <div className="highlight">
            <span className="icon">🎓</span>
            <p>Graduate GPA 4.0 · CS + Data Science track</p>
          </div>
          <div className="highlight">
            <span className="icon">🏊</span>
            <p>Former NCAA Division I swimmer · National champion (FR/UK)</p>
          </div>
        </div>
      </div>

      <div className="cta">
        <h2>Let’s build something</h2>
        <p>Open to internships, research, and collaborations.</p>
      </div>
    </section>
  )
}
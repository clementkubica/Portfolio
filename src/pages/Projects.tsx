import ProjectCard from "../components/ProjectCard"
import { projects } from "../data/projects"

export default function Projects() {
  const featured = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <section className="projects">
      <div className="projects-hero">
        <h1>Projects</h1>
        <p className="projects-sub muted">
          A small set of things I’m proud of—clean builds, clear UX, and practical ML.
        </p>
      </div>

      {featured.length > 0 && (
        <div className="section">
          <h2 className="projects-section-title">Featured</h2>
          <div className="grid">
            {featured.map(p => <ProjectCard key={p.title} {...p} />)}
          </div>
        </div>
      )}

      <div className="section">
        {featured.length > 0 && <h2 className="projects-section-title">More Work</h2>}
        <div className="grid">
          {(featured.length ? rest : projects).map(p => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
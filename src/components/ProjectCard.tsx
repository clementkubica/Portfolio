export type ProjectCardProps = {
  title: string
  description: string
  href?: string
  img?: string
  tags?: string[]
}

export default function ProjectCard({ title, description, href, img, tags }: ProjectCardProps) {
  const CardContent = (
    <article className="card">
      {img && (
        <div className="card-media">
          <img src={img} alt="" loading="lazy" />
        </div>
      )}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        {tags && tags.length > 0 && (
          <ul className="tags" aria-label="Tags">
            {tags.map((t) => (
              <li key={t} className="tag">{t}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )

  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className="card-link">
      {CardContent}
    </a>
  ) : (
    CardContent
  )
}
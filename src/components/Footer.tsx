export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Clément Kubica</p>
        <p>
          <a href="mailto:clementkubica2025@u.northwestern.edu">Email</a> ·
          <a href="https://github.com/clementkubica" target="_blank" rel="noreferrer"> GitHub</a> ·
          <a href="https://www.linkedin.com/in/clement-kubica" target="_blank" rel="noreferrer"> LinkedIn</a>
        </p>
      </div>
    </footer>
  )
}
import Nav from "./Nav"

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-row">
        <a className="brand" href="/">Clément Kubica</a>
        <Nav />
      </div>
    </header>
  )
}
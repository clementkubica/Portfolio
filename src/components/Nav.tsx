import { NavLink } from "react-router-dom"

export default function Nav() {
  return (
    <nav aria-label="Primary" className="nav">
      <NavLink to="/" end className={({ isActive }) => isActive ? "active" : undefined}>
        Home
      </NavLink>
      <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : undefined}>
        Projects
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? "active" : undefined}>
        About
      </NavLink>
    </nav>
  )
}
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"


export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

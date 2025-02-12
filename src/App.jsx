import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavbarComponent from '/src/components/Navbar'
import FooterComponent from '/src/components/Footer'
import Home from '/src/pages/Home'
import About from '/src/pages/About'
import Development from '/src/pages/Development'
import Location from '/src/pages/Location'
import Contact from '/src/pages/Contact'

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/development" element={<Development />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <FooterComponent />
    </Router>
  )
}

export default App

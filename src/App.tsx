import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import Home from './pages/Home.tsx'
import Impact from './pages/Impact.tsx'
import Alliances from './pages/Alliances.tsx'
import Resources from './pages/Resources.tsx'
import Contact from './pages/Contact.tsx'
import './App.css'

function App() {
  return (
    <Router>
      <div style={{
        background: `linear-gradient(to bottom right, #1e3a8a, #3b82f6, #60a5fa),
                    radial-gradient(circle at 20% 30%, rgba(96, 165, 250, 0.3) 0%, transparent 8%),
                    radial-gradient(circle at 80% 70%, rgba(14, 165, 233, 0.3) 0%, transparent 8%),
                    radial-gradient(circle at 40% 80%, rgba(96, 165, 250, 0.2) 0%, transparent 10%),
                    radial-gradient(circle at 60% 20%, rgba(14, 165, 233, 0.2) 0%, transparent 10%)`,
        backgroundSize: '100% 100%, 200px 200px, 300px 300px, 250px 250px, 350px 350px',
        backgroundPosition: 'center, 0% 0%, 100% 100%, 50% 50%, 30% 70%',
        overflow: 'hidden'
      }}>
        <div style={{
          zIndex: 1
        }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/alliances" element={<Alliances />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import MeteorBackground from './components/MeteorBackground'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Certificates from './pages/Certificates'
import Resume from './pages/Resume.jsx'
import About from './pages/About'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import SkillNetwork from './pages/Skills'
import ScrollToTopButton from './components/ScrollToTopButton';

import ThemePreview from './pages/ThemePreview'
import { Github, Linkedin } from 'lucide-react'
import { SiLeetcode } from 'react-icons/si'

// New ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="app">
      <MeteorBackground />
      <ScrollToTop />
      <Navbar />
      <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<SkillNetwork />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} /> {/* ✅ fixed lowercase */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/theme-preview" element={<ThemePreview />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="footer" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <div style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
          <a
            href="https://leetcode.com/u/armaansiddiqui/"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#FFA116', display: 'flex', alignItems: 'center', gap: '5px', textDecoration: 'none', fontSize: '13px' }}
          >
            <SiLeetcode size={15} /> LeetCode
          </a>
          <span style={{ opacity: 0.3 }}>•</span>
          <a
            href="https://github.com/ARMAANSIDDIQUI"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '5px', textDecoration: 'none', fontSize: '13px' }}
          >
            <Github size={15} /> GitHub
          </a>
          <span style={{ opacity: 0.3 }}>•</span>
          <a
            href="https://www.linkedin.com/in/armaan-siddiqui-6902ba294"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '5px', textDecoration: 'none', fontSize: '13px' }}
          >
            <Linkedin size={15} /> LinkedIn
          </a>
        </div>
        <div>
          © {new Date().getFullYear()} Armaan Siddiqui — Built with React
        </div>
      </footer>
      <ScrollToTopButton />
    </div>
  )
}

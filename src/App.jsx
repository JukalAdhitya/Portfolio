import React, { useEffect } from 'react';
import Background3D from './components/Background3D';
import ThemeToggle from './components/ThemeToggle';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className="cursor-glow"></div>
      <Background3D />
      
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navbar />
        <ThemeToggle />
        
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Certificates />
          <Contact />
        </main>
        
        <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--card-border)', marginTop: '4rem', background: 'var(--nav-bg)', backdropFilter: 'blur(10px)' }}>
          <p style={{ opacity: 0.7 }}>&copy; {new Date().getFullYear()} Jukal Adhitya. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;

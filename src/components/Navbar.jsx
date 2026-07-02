import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 50,
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: scrolled || isOpen ? 'var(--nav-bg)' : 'transparent',
          backdropFilter: scrolled || isOpen ? 'blur(10px)' : 'none',
          borderBottom: scrolled || isOpen ? '1px solid var(--card-border)' : '1px solid transparent',
          transition: 'all 0.3s ease',
        }}
      >
        <a href="#hero" onClick={closeMenu} style={{ textDecoration: 'none', color: 'var(--text-primary)', fontSize: '1.5rem', fontWeight: 800, letterSpacing: '1px', zIndex: 60 }}>
          JA<span style={{ color: 'var(--accent-color)' }}>.</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="nav-links">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#certificates">Certificates</NavLink>
          <NavLink href="/JukalAdhitya_B_Tech_CSE_Fresher.pdf" target="_blank" rel="noopener noreferrer">Resume</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button onClick={toggleMenu} className="nav-menu-btn" aria-label="Toggle Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <MobileNavLink href="#about" onClick={closeMenu}>About</MobileNavLink>
        <MobileNavLink href="#experience" onClick={closeMenu}>Experience</MobileNavLink>
        <MobileNavLink href="#projects" onClick={closeMenu}>Projects</MobileNavLink>
        <MobileNavLink href="#skills" onClick={closeMenu}>Skills</MobileNavLink>
        <MobileNavLink href="#certificates" onClick={closeMenu}>Certificates</MobileNavLink>
        <MobileNavLink href="/JukalAdhitya_B_Tech_CSE_Fresher.pdf" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Resume</MobileNavLink>
        <MobileNavLink href="#contact" onClick={closeMenu}>Contact</MobileNavLink>
      </div>
    </>
  );
};

const NavLink = ({ href, children, ...props }) => (
  <a
    href={href}
    {...props}
    style={{
      color: 'var(--text-color)',
      textDecoration: 'none',
      fontSize: '0.9rem',
      fontWeight: 500,
      transition: 'color 0.2s ease'
    }}
    onMouseEnter={(e) => e.target.style.color = 'var(--accent-color)'}
    onMouseLeave={(e) => e.target.style.color = 'var(--text-color)'}
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children, onClick, ...props }) => (
  <a
    href={href}
    onClick={onClick}
    {...props}
    style={{
      color: 'var(--text-primary)',
      textDecoration: 'none',
      fontSize: '1.5rem',
      fontWeight: 600,
      transition: 'color 0.2s ease',
      padding: '0.5rem 1rem'
    }}
    onMouseEnter={(e) => e.target.style.color = 'var(--accent-color)'}
    onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
  >
    {children}
  </a>
);

export default Navbar;

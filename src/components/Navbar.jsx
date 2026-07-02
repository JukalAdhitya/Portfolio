import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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
        background: scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--card-border)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <a href="#hero" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontSize: '1.5rem', fontWeight: 800, letterSpacing: '1px' }}>
        JA<span style={{ color: 'var(--accent-color)' }}>.</span>
      </a>

      <div style={{ display: 'flex', gap: '2rem' }}>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#certificates">Certificates</NavLink>
        <NavLink href="/JukalAdhitya_B_Tech_CSE_Fresher.pdf" target="_blank" rel="noopener noreferrer">Resume</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </div>
    </motion.nav>
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

export default Navbar;

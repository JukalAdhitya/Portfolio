import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '2rem' }}>
          
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              padding: '5px',
              background: 'linear-gradient(135deg, var(--accent-color), #8b5cf6)',
              overflow: 'hidden',
              boxShadow: '0 0 40px var(--accent-glow)'
            }}
          >
            {/* Using a placeholder for now, you can replace the src with your actual local image path */}
            <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', background: '#1e293b' }}>
              <img 
                src="/J_a_nobg.png" 
                alt="Jukal Adhitya" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', marginLeft: '2px' }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="hero-title">
              Hi, I'm <span className="text-gradient">Jukal Adhitya</span>
            </h1>
            <h2 className="hero-subtitle">
              Software Developer & AI/ML Enthusiast
            </h2>
            <p className="hero-description">
              B.Tech CSE graduate building scalable full-stack applications and AI-powered solutions. Passionate about automating workflows and solving real-world problems.
            </p>
          </motion.div>

          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1rem' }}
          >
            <SocialIcon href="mailto:jukaladhitya@gmail.com" icon={<Mail />} label="Email" />
            <SocialIcon href="https://linkedin.com/in/jukal-adhitya-g" icon={<Linkedin />} label="LinkedIn" />
            <SocialIcon href="https://github.com/JukalAdhitya" icon={<Github />} label="GitHub" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={{ display: 'flex', gap: '1.25rem', opacity: 0.7, marginTop: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={18} />
              <span>+91 99405 51122</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={18} />
              <span>Chennai, Tamil Nadu</span>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ href, icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      background: 'var(--card-bg)',
      color: 'var(--text-primary)',
      border: '1px solid var(--card-border)',
      transition: 'var(--transition)',
      textDecoration: 'none'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)';
      e.currentTarget.style.boxShadow = '0 10px 20px var(--accent-glow)';
      e.currentTarget.style.borderColor = 'var(--accent-glow)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0) scale(1)';
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.borderColor = 'var(--card-border)';
    }}
    aria-label={label}
  >
    {icon}
  </a>
)

export default Hero;

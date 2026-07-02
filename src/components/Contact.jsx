import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" style={{ position: 'relative' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
              Get in <span className="text-gradient">Touch</span>
            </h2>
            
            <p style={{ fontSize: '1.2rem', lineHeight: 1.6, opacity: 0.9, marginBottom: '3rem' }}>
              I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi — my inbox is always open.
            </p>

            <div className="glass-panel" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', width: '100%' }}>
                <ContactLink href="mailto:jukaladhitya@gmail.com" icon={<Mail />} text="jukaladhitya@gmail.com" />
                <ContactLink href="tel:+919940551122" icon={<Phone />} text="+91 99405 51122" />
              </div>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', width: '100%' }}>
                <ContactLink href="https://linkedin.com/in/jukal-adhitya-g" icon={<Linkedin />} text="jukal-adhitya-g" />
                <ContactLink href="https://github.com/JukalAdhitya" icon={<Github />} text="JukalAdhitya" />
              </div>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:jukaladhitya@gmail.com"
                style={{
                  marginTop: '1rem',
                  display: 'inline-block',
                  padding: '1rem 3rem',
                  background: 'linear-gradient(90deg, var(--accent-color), #8b5cf6)',
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '1.2rem',
                  borderRadius: '30px',
                  boxShadow: '0 10px 20px var(--accent-glow)',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Say Hello
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ContactLink = ({ href, icon, text }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      color: 'var(--text-color)',
      textDecoration: 'none',
      fontSize: '1.1rem',
      padding: '0.75rem 1.5rem',
      background: 'var(--bg-color)',
      border: '1px solid var(--card-border)',
      borderRadius: '20px',
      transition: 'var(--transition)'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.color = 'var(--accent-color)';
      e.currentTarget.style.borderColor = 'var(--accent-glow)';
      e.currentTarget.style.transform = 'translateY(-3px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.color = 'var(--text-color)';
      e.currentTarget.style.borderColor = 'var(--card-border)';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
  >
    {icon}
    <span>{text}</span>
  </a>
);

export default Contact;

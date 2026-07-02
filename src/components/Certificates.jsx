import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Award, ExternalLink, ShieldCheck, Trophy } from 'lucide-react';

const certificates = [
  {
    title: "OCI 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    date: "Oct 2025",
    id: "317161614OCI25GAIOCP",
    pdfUrl: "/GenAI.pdf",
    badge: "Professional"
  },
  {
    title: "MySQL 8.0 Database Developer Oracle Certified Professional",
    issuer: "Oracle",
    date: "Feb 2025",
    id: "101198236MYSQLPRG80OCP",
    pdfUrl: "/Jukal_342-MySQL 8.0.pdf",
    badge: "Professional"
  },
  {
    title: "OCI 2024 Certified Foundations Associate",
    issuer: "Oracle",
    date: "Jan 2025",
    id: "317161614OCI2024FNDCFA",
    pdfUrl: "/Foundation_Cert.pdf",
    badge: "Associate"
  },
  {
    title: "Programming in Java",
    issuer: "NPTEL",
    date: "Jul - Oct 2023",
    id: "NPTEL23CS74S103356881",
    pdfUrl: "/Programming In Java.pdf",
    badge: "Elite"
  }
];

const awards = [
  {
    title: "HackRush 1.0 - 1st Runner-up",
    issuer: "Qwiklabs Developer Club (SRM IST)",
    date: "2024",
    description: "Secured 1st Runner-up position in the Agriculture track at the HackRush 1.0 hackathon, creating innovative software solutions.",
    pdfUrl: "/HackRush.png"
  },
  {
    title: "GenAI Ideathon - 2nd Position",
    issuer: "Dept. of Computing Technologies (SRM IST)",
    date: "2024",
    description: "Won 2nd place in the two-round Generative AI Ideathon for designing and implementing an impactful AI application.",
    pdfUrl: "/GenAI.png"
  }
];

const Certificates = () => {
  return (
    <section id="certificates" style={{ position: 'relative' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '3rem', textAlign: 'center' }}>
            Certifications & <span className="text-gradient">Awards</span>
          </h2>

          <div className="flex-layout-responsive" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

            {/* Certifications Left Column */}
            <div style={{ flex: 1.6, width: '100%' }}>
              <h3 style={{ fontSize: 'clamp(1.25rem, 4vw, 1.5rem)', marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={24} style={{ color: 'var(--accent-color)' }} />
                Professional Certifications
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                {certificates.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Tilt
                      tiltMaxAngleX={8}
                      tiltMaxAngleY={8}
                      glareEnable={true}
                      glareMaxOpacity={0.08}
                      glareColor="var(--accent-glow)"
                      scale={1.01}
                    >
                      <div className="glass-panel" style={{ padding: '1.5rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderLeft: '4px solid var(--accent-color)' }}>
                        <div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem', gap: '0.5rem' }}>
                            <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', background: 'rgba(192, 132, 252, 0.1)', color: 'var(--accent-color)', borderRadius: '12px', fontWeight: 600, border: '1px solid rgba(192, 132, 252, 0.2)' }}>
                              {cert.badge}
                            </span>
                            <span style={{ fontSize: '0.85rem', opacity: 0.7 }}>{cert.date}</span>
                          </div>

                          <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)', lineHeight: 1.4 }}>
                            {cert.title}
                          </h4>
                          <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '1rem' }}>
                            {cert.issuer}
                          </p>
                          {cert.id && (
                            <p style={{ fontSize: '0.75rem', opacity: 0.5, fontFamily: 'monospace', marginBottom: '1.5rem' }}>
                              ID: {cert.id}
                            </p>
                          )}
                        </div>

                        <a
                          href={cert.pdfUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="view-cert-btn"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: 'var(--accent-color)',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            width: 'fit-content',
                            transition: 'var(--transition)'
                          }}
                        >
                          View Certificate
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </Tilt>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Awards Right Column */}
            <div style={{ flex: 1, width: '100%' }}>
              <h3 style={{ fontSize: 'clamp(1.25rem, 4vw, 1.5rem)', marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Trophy size={24} style={{ color: 'var(--accent-color)' }} />
                Awards & Honors
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {awards.map((award, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    <Tilt
                      tiltMaxAngleX={8}
                      tiltMaxAngleY={8}
                      glareEnable={true}
                      glareMaxOpacity={0.08}
                      glareColor="var(--accent-glow)"
                      scale={1.01}
                    >
                      <div 
                        className="glass-panel"
                        style={{ padding: '1.5rem', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}
                      >
                        <div>
                          <div style={{ position: 'absolute', top: '-10px', right: '-10px', opacity: 0.05, transform: 'rotate(15deg)' }}>
                            <Award size={100} color="var(--accent-color)" />
                          </div>
                          
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem' }}>
                            <span style={{ fontSize: '0.85rem', opacity: 0.7 }}>{award.date}</span>
                            <span style={{ fontSize: '0.9rem', color: 'var(--accent-color)', fontWeight: 600 }}>{award.issuer}</span>
                          </div>
                          
                          <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.8rem', color: 'var(--text-primary)' }}>
                            {award.title}
                          </h4>
                          <p style={{ fontSize: '0.95rem', opacity: 0.8, lineHeight: 1.5, marginBottom: '1rem' }}>
                            {award.description}
                          </p>
                        </div>

                        {award.pdfUrl && (
                          <a 
                            href={award.pdfUrl} 
                            target="_blank" 
                            rel="noreferrer"
                            className="view-cert-btn"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.5rem',
                              color: 'var(--accent-color)',
                              textDecoration: 'none',
                              fontSize: '0.9rem',
                              fontWeight: 600,
                              cursor: 'pointer',
                              width: 'fit-content',
                              transition: 'var(--transition)',
                              zIndex: 2
                            }}
                          >
                            View Certificate
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </Tilt>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;

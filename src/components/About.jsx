import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" style={{ position: 'relative' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div style={{ width: '100%' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '2rem' }}>
                About <span className="text-gradient">Me</span>
              </h2>

              <div className="glass-panel" style={{ padding: '2rem' }}>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', opacity: 0.9 }}>
                  I'm a motivated <strong style={{ color: 'var(--text-primary)' }}>Computer Science Engineering</strong> graduate from <strong style={{ color: 'var(--text-primary)' }}>SRM Institute of Science and Technology</strong> with a CGPA of <strong style={{ color: 'var(--text-primary)' }}>8.74</strong>  .<br></br>I specialize in building <strong style={{ color: 'var(--text-primary)' }}>AI-powered applications</strong> and automating complex workflows.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', opacity: 0.9 }}>
                  My experience spans from automating system health checks at <strong style={{ color: 'var(--text-primary)' }}>Ford Motor</strong> across 18 European markets, to building AI-driven resume processing platforms at <strong style={{ color: 'var(--text-primary)' }}>SRM Technologies</strong>. I thrive on turning complex problems into elegant, efficient solutions.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.8, opacity: 0.9 }}>
                  Currently expanding my expertise in data analysis, <strong style={{ color: 'var(--text-primary)' }}>Power BI</strong>, and advanced <strong style={{ color: 'var(--text-primary)' }}>generative AI</strong> techniques. When I'm not coding, I'm participating in hackathons — and winning them.
                </p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', width: '100%' }}>
              <StatCard title="Education" desc="B.Tech in CSE" subDesc="SRM IST • CGPA: 8.74" />
              <StatCard title="Location" desc="Chennai, Tamil Nadu" subDesc="India" />
              <StatCard title="Certifications" desc="4 Oracle & NPTEL" subDesc="Cloud, MySQL, GenAI, Java" />
              <StatCard title="Achievements" desc="2× Runner-up" subDesc="HackRush 1.0 & GenAI Ideathon" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StatCard = ({ title, desc, subDesc }) => (
  <motion.div
    whileHover={{ y: -5, boxShadow: '0 10px 30px var(--accent-glow)' }}
    className="glass-panel"
    style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', borderLeft: '4px solid var(--accent-color)' }}
  >
    <h3 style={{ fontSize: '1rem', color: 'var(--text-color)', opacity: 0.7, fontWeight: 500 }}>{title}</h3>
    <p style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)' }}>{desc}</p>
    {subDesc && <p style={{ fontSize: '0.9rem', color: 'var(--text-color)', opacity: 0.8, marginTop: '0.2rem' }}>{subDesc}</p>}
  </motion.div>
);

export default About;

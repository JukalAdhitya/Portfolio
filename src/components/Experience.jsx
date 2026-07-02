import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const experiences = [
  {
    role: "Summer Intern (Software Engineering)",
    company: "Ford Motor Private Limited",
    duration: "Jun 2025 \u2013 Jul 2025",
    bullets: [
      "Engineered an automated health check pipeline using Python and Playwright, integrating Ford-LLM to validate LEAP and LDS platforms.",
      "Architected 42+ scalable monitoring modules seamlessly integrated across SQL Server, CRM, Informatica, and Spring Boot ecosystems.",
      "Designed real-time incident dashboards that consolidated system health metrics and proactively surfaced critical failures.",
      "Slashed manual operational overhead from 3 hours to just 10 minutes, radically boosting system reliability across 18 European markets."
    ]
  },
  {
    role: "Software Developer Intern",
    company: "SRM Technologies",
    duration: "Mar 2024 \u2013 Nov 2024",
    bullets: [
      "Pioneered an AI-driven candidate screening platform, fundamentally transforming the HR workflow through automated evaluation.",
      "Developed an advanced resume parsing pipeline utilizing BERT, NLP algorithms, and the Gemini API for highly accurate data extraction.",
      "Constructed a high-performance React.js frontend interface backed by robust Node.js RESTful APIs and optimized MySQL databases.",
      "Automated candidate workflow routing, directly saving the recruitment team over 3 hours daily while scaling screening capacity."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" style={{ overflow: 'hidden' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '4rem', textAlign: 'center' }}>
            Work <span className="text-gradient">Experience</span>
          </h2>

          <div className="timeline-container">
            {/* Center Timeline Line */}
            <div className="timeline-line"></div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', position: 'relative', zIndex: 1 }}>
              {experiences.map((exp, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, type: 'spring', stiffness: 50 }}
                    className={`timeline-card-wrapper ${isEven ? '' : 'odd'}`}
                  >
                    
                    {/* Timeline Node Data */}
                    <Tilt
                      tiltMaxAngleX={5}
                      tiltMaxAngleY={5}
                      glareEnable={true}
                      glareMaxOpacity={0.1}
                      glareColor="var(--accent-glow)"
                      glarePosition="all"
                      scale={1.01}
                      transitionSpeed={2000}
                      className="timeline-tilt"
                    >
                      <div className="glass-panel timeline-card" style={{ 
                        textAlign: isEven ? 'right' : 'left',
                      }}>
                      
                      {/* Timeline Dot Point */}
                      <div 
                        className="timeline-dot"
                        style={{
                          [isEven ? 'right' : 'left']: '-2rem',
                          transform: isEven ? 'translate(50%, -50%)' : 'translate(-50%, -50%)',
                        }}
                      ></div>

                      <div className="timeline-header" style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: isEven ? 'flex-end' : 'flex-start' }}>
                        <div style={{ display: 'inline-block', padding: '0.4rem 1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '20px', fontSize: '0.85rem', color: 'var(--accent-color)', fontWeight: 700, letterSpacing: '1px' }}>
                          {exp.duration}
                        </div>
                        <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)' }}>{exp.role}</h3>
                        <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-color)', fontWeight: 600, opacity: 0.9 }}>{exp.company}</h4>
                      </div>

                      <ul style={{ 
                        listStyleType: 'none', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: '0.8rem',
                        textAlign: 'left' // Keep bullets left aligned for readability
                      }}>
                        {exp.bullets.map((bullet, i) => (
                          <li key={i} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start', lineHeight: 1.6, opacity: 0.85, fontSize: '1rem' }}>
                            <span style={{ color: 'var(--accent-color)', marginTop: '0.1rem', fontSize: '1.2rem' }}>➤</span>
                            <span style={{ flex: 1 }}>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Tilt>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

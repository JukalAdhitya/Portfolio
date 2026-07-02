import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const skillsData = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "SQL", "HTML", "CSS"]
  },
  {
    category: "Frameworks & APIs",
    skills: ["React.js", "React Native", "Node.js", "Spring Boot", "FastAPI", "REST APIs"]
  },
  {
    category: "AI & Machine Learning",
    skills: ["NLP", "BERT", "Random Forest", "Gemini API", "Reinforcement Learning"]
  },
  {
    category: "DevOps & Tools",
    skills: ["AWS", "Docker", "Kubernetes", "Git/GitHub", "Excel", "Agile", "Power BI", "Playwright", "UI/UX"]
  }
];

const Skills = () => {
  return (
    <section id="skills" style={{ position: 'relative' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '3rem', textAlign: 'center' }}>
            <span className="text-gradient">Skills</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {skillsData.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  glareEnable={true}
                  glareMaxOpacity={0.1}
                  glareColor="var(--accent-glow)"
                  glarePosition="all"
                  scale={1.02}
                  transitionSpeed={2000}
                >
                  <div
                    className="glass-panel"
                    style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', height: '100%' }}
                  >
                    <h3 style={{ fontSize: '1.25rem', whiteSpace: 'nowrap', marginBottom: '1.5rem', color: 'var(--text-primary)', borderBottom: '2px solid var(--accent-color)', paddingBottom: '0.8rem', width: '100%' }}>
                  {group.category}
                </h3>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'flex-start' }}>
                  {group.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05, y: -2, backgroundColor: 'rgba(192, 132, 252, 0.15)', borderColor: 'var(--accent-color)' }}
                      style={{
                        padding: '0.5rem 1rem',
                        background: 'var(--bg-color)',
                        borderRadius: '20px',
                        border: '1px solid var(--card-border)',
                        color: 'var(--text-color)',
                        fontSize: '0.95rem',
                        fontWeight: 500,
                        transition: 'var(--transition)',
                        cursor: 'default',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

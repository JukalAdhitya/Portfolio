import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Mitigating Tacit Collusion in Dynamic Pricing via Hierarchical RL",
    description: "Co-authored research paper introducing a hierarchical reinforcement learning framework to curb tacit algorithmic collusion in dynamic pricing. Designed a regulator agent that dynamically adjusts seller incentives to improve consumer welfare and market fairness.",
    tags: ["Reinforcement Learning", "Multi-Agent Systems", "PPO", "Game Theory"],
    github: "#",
    live: "#"
  },
  {
    title: "SowSure",
    description: "Developed a crop-yield prediction model using Random Forest trained on NDVI, soil, and weather data. Integrated Google Earth Engine and SoilGrids APIs for geospatial insights.",
    tags: ["Python", "Machine Learning", "Geospatial API"],
    github: "#",
    live: "#"
  },
  {
    title: "NLP to SQL",
    description: "Built an English-to-SQL generator using BART and the WikiSQL dataset for database automation. Fine-tuned with Gemini for improved schema handling and query accuracy.",
    tags: ["NLP", "BART", "Gemini API", "SQL"],
    github: "#",
    live: "#"
  },
  {
    title: "PR Review Agent",
    description: "AI-based tool for automated pull request reviews across GitHub, GitLab, and Bitbucket using Mistral-7B. Generated actionable feedback and quality scores via REST APIs.",
    tags: ["Mistral-7B", "React", "REST API", "GitHub API"],
    github: "#",
    live: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" style={{ position: 'relative' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
            Featured <span className="text-gradient">Projects</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
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
                  <div className="glass-panel" style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{project.title}</h3>
                      <p style={{ lineHeight: 1.6, opacity: 0.8, marginBottom: '1.5rem' }}>{project.description}</p>
                    </div>
                    
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                      {project.tags.map((tag, i) => (
                        <span key={i} style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem', background: 'var(--bg-color)', borderRadius: '20px', border: '1px solid var(--card-border)' }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                      {project.github && project.github !== '#' && (
                        <a href={project.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-color)', opacity: 0.8, transition: 'var(--transition)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-color)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-color)'}>
                          <Github size={20} />
                        </a>
                      )}
                      {project.live && project.live !== '#' && (
                        <a href={project.live} target="_blank" rel="noreferrer" style={{ color: 'var(--text-color)', opacity: 0.8, transition: 'var(--transition)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-color)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-color)'}>
                          <ExternalLink size={20} />
                        </a>
                      )}
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

export default Projects;

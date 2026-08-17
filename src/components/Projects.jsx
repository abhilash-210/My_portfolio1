import React from 'react';
import { motion } from 'framer-motion';
import { allProjects } from '../data/portfolio';

const Projects = () => {
  return (
    <section id="projects" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-number">03 / SELECTED WORK</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title" 
          style={{ marginBottom: '1rem' }}
        >
          Things I've Built
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ color: 'var(--text-secondary)', marginBottom: '4rem', maxWidth: '600px' }}
        >
          A selection of systems spanning software engineering, cybersecurity, AI, and connected applications.
        </motion.p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
          {allProjects.map((project, index) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '3rem',
                alignItems: 'center',
              }} 
              className="flagship-grid"
            >
              
              <div style={{ order: index % 2 === 0 ? 1 : 2 }} className="flagship-content">
                <div className="mono-text accent-text" style={{ marginBottom: '1rem' }}>PROJECT {project.id}</div>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', fontWeight: '400', marginBottom: '2rem' }}>
                  {project.subtitle}
                </h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
                  {project.description}
                </p>
                
                <div style={{ marginBottom: '2rem' }}>
                  <div className="mono-text" style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '0.8rem' }}>CAPABILITIES:</div>
                  <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                    {project.capabilities?.map(cap => (
                      <li key={cap} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span className="accent-text" style={{ fontSize: '0.6rem' }}>■</span> {cap}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.technology.map(tech => (
                    <span key={tech} className="mono-text" style={{ 
                      padding: '0.3rem 0.6rem', 
                      backgroundColor: 'var(--bg-primary)',
                      border: 'var(--border-subtle)',
                      fontSize: '0.75rem',
                      color: 'var(--text-primary)'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <motion.div 
                whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? 5 : -5, rotateX: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ order: index % 2 === 0 ? 2 : 1, perspective: 1000 }} 
                className="flagship-visual"
              >
                {/* Abstract UI Visualization Placeholder */}
                <div style={{
                  width: '100%',
                  aspectRatio: '4/3',
                  backgroundColor: 'var(--bg-primary)',
                  border: 'var(--border-subtle)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  transformStyle: 'preserve-3d'
                }}>
                  <motion.div 
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1, z: 50 }}
                    transition={{ duration: 0.3 }}
                    style={{ width: '100%', height: '100%', position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <div className="mono-text accent-text" style={{ opacity: 0.5, marginBottom: '1rem', textAlign: 'center', padding: '0 1rem' }}>
                      [ {project.title.toUpperCase()} ]
                    </div>
                    <div style={{ 
                      width: '60%', 
                      height: '2px', 
                      backgroundColor: 'var(--border-subtle)',
                      position: 'relative'
                    }}>
                      <div style={{ 
                        position: 'absolute', 
                        top: 0, left: 0, 
                        height: '100%', 
                        width: '30%', 
                        backgroundColor: 'var(--accent)' 
                      }}></div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
            </motion.div>
          ))}
        </div>
        
      </div>
      
      <style>{`
        @media (min-width: 992px) {
          .flagship-grid {
            grid-template-columns: 1fr 1.2fr !important;
          }
          .flagship-content {
            padding-right: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;

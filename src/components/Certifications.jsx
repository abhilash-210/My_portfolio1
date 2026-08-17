import React from 'react';
import { motion } from 'framer-motion';
import { certifications, softSkills } from '../data/portfolio';

const Certifications = () => {
  return (
    <section id="certifications" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }} className="certs-grid">
          
          <div>
            <div className="section-header">
              <span className="section-number">05 / CERTIFICATIONS</span>
            </div>
            
            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', listStyle: 'none', padding: 0 }}>
              {certifications.map((cert, idx) => (
                <motion.li 
                  key={cert} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  style={{
                    padding: '0.6rem 1.2rem',
                    backgroundColor: 'var(--accent-transparent)',
                    border: '1px solid rgba(32, 217, 210, 0.3)',
                    borderRadius: '20px',
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}
                >
                  {cert}
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <div className="section-header">
              <span className="section-number">06 / QUALITIES</span>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {softSkills.map((skill, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  style={{
                    padding: '0.6rem 1.2rem',
                    backgroundColor: 'var(--accent-transparent)',
                    border: '1px solid rgba(32, 217, 210, 0.3)',
                    borderRadius: '20px',
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
      
      <style>{`
        @media (min-width: 768px) {
          .certs-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Certifications;

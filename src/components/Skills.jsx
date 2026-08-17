import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-number">02 / CAPABILITIES</span>
        </motion.div>
        
        <div style={{ display: 'grid', gap: '3rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div 
              key={category} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              style={{ 
                border: 'var(--border-subtle)',
                padding: '2rem',
                backgroundColor: 'var(--bg-secondary)',
                transition: 'border-color 0.3s ease'
              }} 
              className="skill-card"
            >
              <h3 className="mono-text" style={{ 
                color: 'var(--text-primary)', 
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <span className="accent-text">//</span> {category.toUpperCase()}
              </h3>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {items.map(skill => (
                  <span key={skill} style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'var(--accent-transparent)',
                    border: '1px solid rgba(32, 217, 210, 0.3)',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    color: 'var(--text-primary)',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    backdropFilter: 'blur(4px)'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
          
        </div>
      </div>

      <style>{`
        .skill-card:hover {
          border-color: var(--accent);
        }
      `}</style>
    </section>
  );
};

export default Skills;

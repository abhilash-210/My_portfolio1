import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="section-header"
        >
          <span className="section-number">01 / ABOUT</span>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          style={{ display: 'grid', gap: '4rem', gridTemplateColumns: '1fr' }} 
          className="about-grid"
        >
          
          <motion.div variants={itemVariants}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.2', letterSpacing: '-0.02em', marginBottom: '2rem' }}>
              Engineer.<br />
              Problem Solver.<br />
              Security-Minded Builder<span className="accent-text">.</span>
            </h2>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '3rem' }}>
              {personalInfo.summary}
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-primary)', border: 'var(--border-subtle)' }}>
                <div className="mono-text accent-text" style={{ marginBottom: '0.5rem', fontSize: '0.75rem' }}>LOCATION</div>
                <div style={{ fontWeight: '500' }}>{personalInfo.location}</div>
              </div>
              
              <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-primary)', border: 'var(--border-subtle)' }}>
                <div className="mono-text accent-text" style={{ marginBottom: '0.5rem', fontSize: '0.75rem' }}>FOCUS</div>
                <div style={{ fontWeight: '500' }}>{personalInfo.focusAreas}</div>
              </div>
              
              <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-primary)', border: 'var(--border-subtle)' }}>
                <div className="mono-text accent-text" style={{ marginBottom: '0.5rem', fontSize: '0.75rem' }}>EDUCATION</div>
                <div style={{ fontWeight: '500' }}>{personalInfo.educationFocus}</div>
              </div>
              
              <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-primary)', border: 'var(--border-subtle)' }}>
                <div className="mono-text accent-text" style={{ marginBottom: '0.5rem', fontSize: '0.75rem' }}>CAREER GOAL</div>
                <div style={{ fontWeight: '500' }}>{personalInfo.careerGoal}</div>
              </div>
            </div>
          </motion.div>
          
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr 1.2fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;

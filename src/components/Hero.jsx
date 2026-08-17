import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';

const Hero = () => {
  return (
    <section id="hero" className="section" style={{ minHeight: 'calc(100vh - var(--nav-height))', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}>
          
          <div style={{ maxWidth: '800px' }}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mono-text accent-text" 
              style={{ marginBottom: '1.5rem', letterSpacing: '0.1em' }}
            >
              CSE / CYBER SECURITY / SOFTWARE ENGINEERING
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ 
                fontSize: 'clamp(3rem, 6vw, 5.5rem)', 
                lineHeight: '1.1',
                marginBottom: '2rem',
                letterSpacing: '-0.03em'
              }}
            >
              BUILDING SOFTWARE<br />
              WITH SECURITY<br />
              IN MIND<span className="accent-text">.</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ 
                paddingLeft: '1.5rem', 
                borderLeft: '2px solid var(--accent)',
                marginBottom: '3rem'
              }}
            >
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                {personalInfo.name}
              </h2>
              <p className="mono-text" style={{ color: 'var(--text-secondary)' }}>
                {personalInfo.title}
              </p>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{ 
                fontSize: '1.1rem', 
                color: 'var(--text-secondary)',
                marginBottom: '3rem',
                maxWidth: '600px',
                lineHeight: '1.8'
              }}
            >
              Final-year Computer Science (Cyber Security) undergraduate building software across cybersecurity, AI, web applications, and connected systems.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}
            >
              <a href="#projects" className="btn btn-primary interactive">
                View Projects
              </a>
              <a href="#contact" className="btn btn-secondary interactive">
                Let's Connect
              </a>
              <a href="/resume.pdf" download="Abhilash_Gollapally_Resume.pdf" className="btn btn-secondary interactive" style={{ borderStyle: 'dashed' }}>
                Download Resume
              </a>
            </motion.div>
          </div>
          
          <div style={{ display: 'none' }} className="hero-visual">
            {/* Image container styled with technical frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '1/1',
                border: 'var(--border-subtle)',
                borderRadius: '50%',
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                 style={{
                   width: '100%',
                   height: '100%',
                   borderRadius: '50%',
                   backgroundColor: 'var(--bg-secondary)',
                   overflow: 'hidden',
                   position: 'relative'
                 }}
               >
                  <img src="/profile.jpg" alt="Abhilash Gollapally" style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'var(--accent-transparent)',
                    mixBlendMode: 'overlay'
                  }}></div>
               </motion.div>
               
               {/* Technical decorative elements */}
               <div className="mono-text accent-text" style={{ position: 'absolute', top: '10%', right: '-5%', fontSize: '0.7rem' }}>[X: 104, Y: 299]</div>
               <div className="mono-text" style={{ position: 'absolute', bottom: '10%', left: '-5%', fontSize: '0.7rem', color: 'var(--text-secondary)' }}>SYS.ON()</div>
            </motion.div>
          </div>
          
        </div>
      </div>
      
      <style>{`
        @media (min-width: 992px) {
          #hero > div > div {
            grid-template-columns: 1fr 400px !important;
          }
          .hero-visual {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;

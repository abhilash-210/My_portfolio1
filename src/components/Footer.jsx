import React from 'react';
import { personalInfo } from '../data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  // As per instructions, "© 2026 ABHILASH GOLLAPALLY" is suggested, we use a dynamic year or fixed as requested. Let's use 2026.
  
  return (
    <footer style={{ 
      backgroundColor: 'var(--bg-secondary)', 
      borderTop: 'var(--border-subtle)',
      padding: '4rem 0 2rem 0' 
    }}>
      <div className="container">
        
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '2rem',
          marginBottom: '4rem'
        }} className="footer-layout">
          
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
              ABHILASH<span className="accent-text">.</span>
            </div>
            <div style={{ color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>{personalInfo.title}</div>
            <div style={{ color: 'var(--text-secondary)' }}>{personalInfo.location}</div>
          </div>
          
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
            <a href={`mailto:${personalInfo.email}`} className="footer-link">Email</a>
          </div>
          
        </div>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          paddingTop: '2rem',
          borderTop: 'var(--border-subtle)',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div className="mono-text" style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>
            © 2026 ABHILASH GOLLAPALLY
          </div>
          <div className="mono-text accent-text" style={{ fontSize: '0.75rem' }}>
            SYS.READY
          </div>
        </div>
        
      </div>
      
      <style>{`
        .footer-layout {
          flex-direction: row !important;
          justify-content: space-between !important;
          align-items: flex-end !important;
        }
        
        @media (max-width: 768px) {
          .footer-layout {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
        
        .footer-link {
          color: var(--text-primary);
          font-family: var(--font-mono);
          font-size: 0.9rem;
          transition: color 0.3s;
        }
        .footer-link:hover {
          color: var(--accent);
        }
      `}</style>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { education } from '../data/portfolio';

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">04 / EDUCATION</span>
        </div>
        
        <div style={{ maxWidth: '800px' }}>
          <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '1px solid var(--border-subtle)' }}>
            
            {education.map((item, index) => (
              <div key={index} style={{ marginBottom: index === education.length - 1 ? 0 : '4rem', position: 'relative' }}>
                {/* Timeline node */}
                <div style={{ 
                  position: 'absolute', 
                  left: '-2.4rem', 
                  top: '0.25rem',
                  width: '12px', 
                  height: '12px', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--bg-primary)',
                  border: '2px solid var(--accent)'
                }}></div>
                
                <div className="mono-text accent-text" style={{ marginBottom: '1rem', fontSize: '0.85rem' }}>
                  {item.period}
                </div>
                
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  marginBottom: '1rem',
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  backgroundColor: 'var(--accent-transparent)',
                  border: '1px solid rgba(32, 217, 210, 0.3)',
                  borderRadius: '20px',
                  color: 'var(--text-primary)'
                }}>
                  {item.degree}
                </h3>
                
                <div style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.95rem', marginBottom: '1rem' }}>
                  {item.institution}
                </div>
                
                <div style={{ 
                  display: 'inline-block',
                  padding: '0.4rem 0.8rem',
                  backgroundColor: 'var(--bg-secondary)',
                  border: 'var(--border-subtle)',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  {item.score}
                </div>
              </div>
            ))}
            
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Education;

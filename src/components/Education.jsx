import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/portfolio';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 'var(--sp-12)' }}
        >
          <div className="section-label">Education</div>
          <h2 className="section-heading" style={{ marginTop: 'var(--sp-3)' }}>
            Academic Background
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative', maxWidth: '760px' }}>

          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: '19px',
            top: '10px',
            bottom: '10px',
            width: '2px',
            background: 'linear-gradient(to bottom, var(--accent) 0%, rgba(255,255,255,0.06) 100%)',
            borderRadius: '2px',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-8)' }}>
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ display: 'flex', gap: 'var(--sp-6)', alignItems: 'flex-start' }}
              >
                {/* Timeline node */}
                <div style={{
                  flexShrink: 0,
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: index === 0 ? 'var(--accent)' : 'var(--bg-card)',
                  border: `2px solid ${index === 0 ? 'var(--accent)' : 'rgba(255,255,255,0.12)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: index === 0 ? '0 0 20px var(--accent-glow)' : 'none',
                  zIndex: 1,
                  position: 'relative',
                }}>
                  <GraduationCap size={18} color={index === 0 ? '#070a10' : 'var(--text-muted)'} />
                </div>

                {/* Content card */}
                <div className="card" style={{
                  flex: 1,
                  padding: 'var(--sp-5) var(--sp-6)',
                  borderColor: index === 0 ? 'rgba(0,217,192,0.25)' : undefined,
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--sp-2)', marginBottom: 'var(--sp-2)' }}>
                    <h3 style={{
                      fontSize: 'clamp(var(--text-base), 3vw, var(--text-xl))',
                      fontWeight: '700',
                      fontFamily: 'var(--font-display)',
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.01em',
                      minWidth: 0,
                    }}>
                      {item.degree}
                    </h3>
                    <span style={{
                      fontSize: 'var(--text-xs)',
                      fontWeight: '600',
                      color: index === 0 ? 'var(--accent)' : 'var(--text-muted)',
                      background: index === 0 ? 'var(--accent-dim)' : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${index === 0 ? 'rgba(0,217,192,0.25)' : 'rgba(255,255,255,0.08)'}`,
                      padding: '0.25rem 0.65rem',
                      borderRadius: '100px',
                      whiteSpace: 'nowrap',
                    }}>
                      {item.period}
                    </span>
                  </div>

                  <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', marginBottom: 'var(--sp-3)', fontWeight: '500' }}>
                    {item.institution}
                  </p>

                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.3rem 0.8rem',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: 'var(--text-sm)',
                  }}>
                    <span style={{ color: 'var(--text-muted)', fontWeight: '500' }}>Score:</span>
                    <span style={{ color: index === 0 ? 'var(--accent)' : 'var(--text-primary)', fontWeight: '700' }}>{item.score}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;

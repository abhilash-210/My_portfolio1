import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';

// Map category names to accent colors / icons for visual variety
const categoryConfig = {
  Languages:  { color: '#60a5fa', bg: 'rgba(96,165,250,0.1)',  border: 'rgba(96,165,250,0.25)' },
  Frontend:   { color: '#a78bfa', bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.25)' },
  Backend:    { color: '#34d399', bg: 'rgba(52,211,153,0.1)',  border: 'rgba(52,211,153,0.25)' },
  Databases:  { color: '#fb923c', bg: 'rgba(251,146,60,0.1)',  border: 'rgba(251,146,60,0.25)' },
  Libraries:  { color: '#f472b6', bg: 'rgba(244,114,182,0.1)', border: 'rgba(244,114,182,0.25)' },
  Tools:      { color: '#facc15', bg: 'rgba(250,204,21,0.1)',  border: 'rgba(250,204,21,0.25)' },
  Core:       { color: 'var(--accent)', bg: 'var(--accent-dim)', border: 'rgba(0,217,192,0.25)' },
};

const Skills = () => {
  const categories = Object.keys(skills);

  return (
    <section id="skills" className="section">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 'var(--sp-12)' }}
        >
          <div className="section-label">Technical Skills</div>
          <h2 className="section-heading" style={{ marginTop: 'var(--sp-3)' }}>
            My Capabilities
          </h2>
          <p className="body-text" style={{ marginTop: 'var(--sp-4)', maxWidth: '520px' }}>
            A full-stack skill set covering languages, frameworks, databases, and core computer science concepts.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
          gap: 'var(--sp-5)',
        }}>
          {categories.map((category, idx) => {
            const cfg = categoryConfig[category] || categoryConfig.Core;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="card"
                style={{ padding: 'var(--sp-6)' }}
              >
                {/* Category header */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 'var(--sp-2)',
                  marginBottom: 'var(--sp-4)',
                }}>
                  <div style={{
                    width: '8px', height: '8px', borderRadius: '50%',
                    background: cfg.color, flexShrink: 0,
                  }} />
                  <span style={{
                    fontSize: 'var(--text-sm)',
                    fontWeight: '700',
                    color: cfg.color,
                    letterSpacing: '0.03em',
                  }}>
                    {category}
                  </span>
                </div>

                {/* Skill pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-2)' }}>
                  {skills[category].map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      style={{
                        display: 'inline-flex',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '100px',
                        fontSize: 'var(--text-sm)',
                        fontWeight: '500',
                        background: cfg.bg,
                        border: `1px solid ${cfg.border}`,
                        color: 'var(--text-secondary)',
                        cursor: 'default',
                        transition: 'color 0.2s',
                        userSelect: 'none',
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = cfg.color}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;

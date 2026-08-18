import React from 'react';
import { motion } from 'framer-motion';
import { certifications, softSkills } from '../data/portfolio';
import { CheckCircle2, Sparkles } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="section section-alt">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 'var(--sp-12)' }}
        >
          <div className="section-label">Credentials</div>
          <h2 className="section-heading" style={{ marginTop: 'var(--sp-3)' }}>
            Certifications &amp; Qualities
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--sp-12)',
          alignItems: 'start',
        }} className="certs-grid">

          {/* Certifications list */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-2)', marginBottom: 'var(--sp-6)' }}>
              <CheckCircle2 size={18} color="var(--accent)" />
              <span style={{ fontSize: 'var(--text-base)', fontWeight: '600', color: 'var(--text-primary)' }}>
                Certifications &amp; Internships
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {certifications.map((cert, idx) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--sp-4)',
                    padding: 'var(--sp-4) 0',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    cursor: 'default',
                    transition: 'padding-left 0.2s',
                  }}
                  whileHover={{ paddingLeft: '8px' }}
                >
                  <span style={{
                    fontSize: 'var(--text-xs)',
                    fontWeight: '700',
                    color: 'var(--accent)',
                    fontFamily: 'var(--font-display)',
                    minWidth: '28px',
                    opacity: 0.7,
                  }}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span style={{
                    fontSize: 'var(--text-sm)',
                    fontWeight: '500',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.5',
                  }}>
                    {cert}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-2)', marginBottom: 'var(--sp-6)' }}>
              <Sparkles size={18} color="var(--accent)" />
              <span style={{ fontSize: 'var(--text-base)', fontWeight: '600', color: 'var(--text-primary)' }}>
                Soft Skills &amp; Strengths
              </span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-3)' }}>
              {softSkills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'var(--sp-2)',
                    padding: 'var(--sp-3) var(--sp-5)',
                    background: 'var(--bg-card)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '100px',
                    fontSize: 'var(--text-sm)',
                    fontWeight: '500',
                    color: 'var(--text-secondary)',
                    cursor: 'default',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(0,217,192,0.4)';
                    e.currentTarget.style.background = 'var(--accent-dim)';
                    e.currentTarget.style.color = 'var(--accent)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.background = 'var(--bg-card)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  <span style={{ color: 'var(--accent)', fontSize: '12px' }}>✦</span>
                  {skill}
                </motion.div>
              ))}
            </div>

            {/* Extra info box */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              style={{
                marginTop: 'var(--sp-8)',
                padding: 'var(--sp-5)',
                background: 'var(--accent-dim)',
                border: '1px solid rgba(0,217,192,0.2)',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <div style={{ fontSize: 'var(--text-sm)', color: 'var(--accent)', fontWeight: '600', marginBottom: 'var(--sp-2)' }}>
                Currently Active
              </div>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
                Sphoorthy Engineering College — School of Computing Internship (Ongoing)
              </p>
            </motion.div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .certs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Certifications;

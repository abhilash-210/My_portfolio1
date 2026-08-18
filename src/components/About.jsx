import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';

const stats = [
  { value: 'B.Tech CSE',    label: 'Degree' },
  { value: 'Cyber Security', label: 'Specialization' },
  { value: '2027',          label: 'Graduating' },
  { value: 'Hyderabad, IN', label: 'Location' },
];

const About = () => {
  return (
    <section id="about" className="section section-alt">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 'var(--sp-12)' }}
        >
          <div className="section-label">About Me</div>
          <h2 className="section-heading" style={{ marginTop: 'var(--sp-3)' }}>
            Building software with{' '}
            <span className="accent-text">purpose & precision</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--sp-16)',
          alignItems: 'start',
        }} className="about-grid">

          {/* Left: Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p style={{
              fontSize: 'var(--text-lg)',
              lineHeight: '1.8',
              color: 'var(--text-secondary)',
              marginBottom: 'var(--sp-6)',
            }}>
              {personalInfo.summary}
            </p>
            <p style={{
              fontSize: 'var(--text-base)',
              lineHeight: '1.75',
              color: 'var(--text-muted)',
            }}>
              I'm passionate about building software that is not only functional but also
              secure and reliable. My background in Cyber Security gives me a unique
              perspective on writing code that considers threats from the start.
            </p>

            <div style={{ display: 'flex', gap: 'var(--sp-3)', marginTop: 'var(--sp-8)' }}>
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#contact" className="btn btn-outline">Get in Touch</a>
            </div>
          </motion.div>

          {/* Right: Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--sp-4)',
            }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                className="card"
                style={{ padding: 'var(--sp-5)' }}
              >
                <div style={{
                  fontSize: 'var(--text-xl)',
                  fontWeight: '700',
                  fontFamily: 'var(--font-display)',
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.01em',
                  marginBottom: 'var(--sp-1)',
                }}>
                  {stat.value}
                </div>
                <div className="label-text">{stat.label}</div>
              </motion.div>
            ))}

            {/* Career Goal Card — full width */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              style={{
                gridColumn: '1 / -1',
                padding: 'var(--sp-5)',
                background: 'var(--accent-dim)',
                border: '1px solid rgba(0,217,192,0.2)',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <div style={{ fontSize: 'var(--text-xs)', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 'var(--sp-2)' }}>
                Career Goal
              </div>
              <div style={{ fontSize: 'var(--text-lg)', fontWeight: '600', color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
                Trainee Software Engineer
              </div>
              <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginTop: 'var(--sp-1)' }}>
                Software Engineering · Cybersecurity · AI
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default About;

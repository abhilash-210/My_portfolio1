import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'var(--nav-height)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle radial gradient background glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80vw', maxWidth: '900px', height: '60vh',
        background: 'radial-gradient(ellipse, rgba(0,217,192,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 420px',
          gap: 'var(--sp-16)',
          alignItems: 'center',
          paddingTop: 'var(--sp-12)',
          paddingBottom: 'var(--sp-12)',
        }} className="hero-grid">

          {/* ─── Left Column ─── */}
          <div>
            {/* Badge */}
            <motion.div {...fadeUp(0)} style={{ marginBottom: 'var(--sp-6)' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.4rem 0.9rem',
                background: 'var(--accent-dim)',
                border: '1px solid rgba(0,217,192,0.3)',
                borderRadius: '100px',
                fontSize: 'var(--text-xs)',
                fontWeight: '600',
                color: 'var(--accent)',
                letterSpacing: '0.06em',
              }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
                Open to Opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 {...fadeUp(0.1)} style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 8vw, 4.5rem)',
              fontWeight: '800',
              lineHeight: '1.1',
              letterSpacing: '-0.03em',
              marginBottom: 'var(--sp-4)',
              color: 'var(--text-primary)',
            }}>
              Hi, I'm{' '}
              <span style={{
                color: 'transparent',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                backgroundImage: 'linear-gradient(135deg, var(--accent) 0%, #60e8df 100%)',
              }}>
                Abhilash
              </span>
            </motion.h1>

            {/* Role */}
            <motion.p {...fadeUp(0.2)} style={{
              fontSize: 'clamp(1rem, 4vw, 1.4rem)',
              fontWeight: '500',
              color: 'var(--text-secondary)',
              marginBottom: 'var(--sp-6)',
              lineHeight: '1.5',
            }}>
              Aspiring Software Engineer &amp; CSE (Cyber Security) Undergraduate
            </motion.p>

            {/* Summary */}
            <motion.p {...fadeUp(0.3)} className="body-text" style={{
              fontSize: 'var(--text-base)',
              maxWidth: '560px',
              marginBottom: 'var(--sp-8)',
              color: 'var(--text-secondary)',
            }}>
              Final-year CSE (Cyber Security) student skilled in Java, Python, and React.js —
              building full-stack, AI-enabled, and security-focused applications.
              Seeking a Trainee Software Engineer role.
            </motion.p>

            {/* Location */}
            <motion.div {...fadeUp(0.35)} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: 'var(--text-sm)', marginBottom: 'var(--sp-8)' }}>
              <MapPin size={14} />
              <span>{personalInfo.location}</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.4)} className="hero-cta-row" style={{ display: 'flex', gap: 'var(--sp-3)', flexWrap: 'wrap', marginBottom: 'var(--sp-8)' }}>
              <motion.a
                href="#projects"
                className="btn btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                View My Work <ArrowRight size={15} />
              </motion.a>
              <motion.a
                href="#contact"
                className="btn btn-outline"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div {...fadeUp(0.5)} className="hero-social-links" style={{ display: 'flex', gap: 'var(--sp-4)', alignItems: 'center' }}>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--text-muted)', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: 'var(--text-sm)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                <FaGithub size={18} /> GitHub
              </a>
              <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.1)' }} />
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--text-muted)', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: 'var(--text-sm)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                <FaLinkedin size={18} /> LinkedIn
              </a>
              <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.1)' }} />
              <a href={`mailto:${personalInfo.email}`}
                style={{ color: 'var(--text-muted)', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: 'var(--text-sm)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                <Mail size={15} /> Email
              </a>
            </motion.div>
          </div>

          {/* ─── Right Column: Profile Card ─── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hero-card-col"
          >
            {/* Profile Photo Frame */}
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '380px',
              margin: '0 auto',
            }}>
              {/* Glow ring */}
              <div style={{
                position: 'absolute', inset: '-3px',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, var(--accent) 0%, transparent 60%)',
                opacity: 0.4,
                zIndex: 0,
              }} />

              {/* Photo container */}
              <div style={{
                position: 'relative', zIndex: 1,
                borderRadius: '22px',
                overflow: 'hidden',
                border: '1px solid rgba(0,217,192,0.2)',
                background: 'var(--bg-surface)',
                aspectRatio: '4/5',
              }}>
                <img
                  src="/profile.jpg"
                  alt="Abhilash Gollapally"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {/* Subtle gradient overlay on bottom */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  height: '40%',
                  background: 'linear-gradient(to top, rgba(9,12,18,0.7) 0%, transparent 100%)',
                }} />
                {/* Name tag at bottom of photo */}
                <div style={{
                  position: 'absolute', bottom: 'var(--sp-4)', left: 'var(--sp-4)', right: 'var(--sp-4)',
                }}>
                  <div style={{ fontSize: 'var(--text-lg)', fontWeight: '700', letterSpacing: '-0.01em', color: '#fff' }}>
                    Abhilash Gollapally
                  </div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.65)', marginTop: '2px' }}>
                    CSE (Cyber Security) • Final Year
                  </div>
                </div>
              </div>

              {/* Stats row below photo */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 'var(--sp-3)',
                marginTop: 'var(--sp-4)',
              }}>
                {[
                  { value: '6+', label: 'Projects' },
                  { value: '8.89', label: 'CGPA' },
                  { value: '9+', label: 'Certs' },
                ].map((stat) => (
                  <div key={stat.label} className="card" style={{
                    padding: 'var(--sp-3)',
                    textAlign: 'center',
                    borderRadius: 'var(--radius-sm)',
                  }}>
                    <div style={{ fontSize: 'var(--text-xl)', fontWeight: '800', fontFamily: 'var(--font-display)', color: 'var(--accent)', lineHeight: 1.1 }}>{stat.value}</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginTop: '2px', fontWeight: '500' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding-top: var(--sp-8) !important;
            padding-bottom: var(--sp-8) !important;
          }
          .hero-card-col {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          .hero-social-links {
            flex-wrap: wrap;
            gap: var(--sp-3) !important;
          }
          .hero-cta-row {
            flex-direction: column;
            align-items: stretch;
          }
          .hero-cta-row a {
            text-align: center;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;

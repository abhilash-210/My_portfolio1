import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail, MapPin, ArrowRight } from 'lucide-react';

const contactLinks = [
  {
    id: 'email-link',
    icon: Mail,
    label: 'Email',
    value: 'abilashg745@gmail.com',
    href: `mailto:abilashg745@gmail.com`,
    color: '#60a5fa',
    bg: 'rgba(96,165,250,0.1)',
    border: 'rgba(96,165,250,0.2)',
  },
  {
    id: 'linkedin-link',
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/abhilash210',
    href: 'https://linkedin.com/in/abhilash210',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.1)',
    border: 'rgba(167,139,250,0.2)',
  },
  {
    id: 'github-link',
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/abhilash-210',
    href: 'https://github.com/abhilash-210',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.1)',
    border: 'rgba(52,211,153,0.2)',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--sp-16)',
          alignItems: 'center',
        }} className="contact-grid">

          {/* Left: Heading & copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">Contact</div>
            <h2 className="section-heading" style={{ marginTop: 'var(--sp-3)', marginBottom: 'var(--sp-5)' }}>
              Let's Work{' '}
              <span className="accent-text">Together</span>
            </h2>
            <p className="body-text" style={{ marginBottom: 'var(--sp-8)', fontSize: 'var(--text-lg)' }}>
              I'm actively looking for Trainee Software Engineer opportunities.
              If you have an opening or just want to connect, feel free to reach out —
              I'd love to chat.
            </p>

            {/* Status badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--sp-2)',
              padding: 'var(--sp-3) var(--sp-5)',
              background: 'var(--accent-dim)',
              border: '1px solid rgba(0,217,192,0.25)',
              borderRadius: 'var(--radius-md)',
              marginBottom: 'var(--sp-8)',
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
              <span style={{ fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--accent)' }}>
                Available for Opportunities
              </span>
            </div>

            {/* Location */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: 'var(--text-sm)' }}>
              <MapPin size={14} />
              <span>Hyderabad, India</span>
            </div>
          </motion.div>

          {/* Right: Contact cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}
          >
            {contactLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.id}
                  id={link.id}
                  href={link.href}
                  target={link.label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--sp-4)',
                    padding: 'var(--sp-5)',
                    background: link.bg,
                    border: `1px solid ${link.border}`,
                    borderRadius: 'var(--radius-md)',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  {/* Icon */}
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: 'var(--radius-sm)',
                    background: `${link.bg}`,
                    border: `1px solid ${link.border}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={20} color={link.color} />
                  </div>

                  {/* Text */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 'var(--text-xs)', fontWeight: '600', color: link.color, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>
                      {link.label}
                    </div>
                    <div style={{ fontSize: 'var(--text-sm)', fontWeight: '500', color: 'var(--text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', wordBreak: 'break-all' }}>
                      {link.value}
                    </div>
                  </div>

                  <ArrowRight size={16} color={link.color} style={{ flexShrink: 0, opacity: 0.6 }} />
                </motion.a>
              );
            })}
          </motion.div>

        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;

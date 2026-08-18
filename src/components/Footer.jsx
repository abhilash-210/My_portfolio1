import React from 'react';
import { personalInfo } from '../data/portfolio';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.07)',
      background: 'var(--bg-secondary)',
      padding: 'var(--sp-12) 0 var(--sp-8)',
    }}>
      <div className="container">

        {/* Top row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: 'var(--sp-8)',
          marginBottom: 'var(--sp-10)',
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-2xl)',
              fontWeight: '800',
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              marginBottom: 'var(--sp-2)',
            }}>
              Abhilash<span style={{ color: 'var(--accent)' }}>.</span>
            </div>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', maxWidth: '300px', lineHeight: '1.6' }}>
              Aspiring Software Engineer & CSE (Cyber Security) Undergraduate
              based in Hyderabad, India.
            </p>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: 'var(--sp-10)', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: 'var(--text-xs)', fontWeight: '700', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 'var(--sp-4)' }}>
                Navigate
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)' }}>
                {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontSize: 'var(--text-xs)', fontWeight: '700', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 'var(--sp-4)' }}>
                Connect
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)' }}>
                <a href="https://github.com/abhilash-210" target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  <FaGithub size={14} /> GitHub
                </a>
                <a href="https://linkedin.com/in/abhilash210" target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  <FaLinkedin size={14} /> LinkedIn
                </a>
                <a href="mailto:abilashg745@gmail.com"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  <Mail size={14} /> Email
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--sp-3)',
          paddingTop: 'var(--sp-6)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}>
          <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
            © {year} Abhilash Gollapally. All rights reserved.
          </span>
          <span style={{
            fontSize: 'var(--text-xs)',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
            Open to opportunities
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About',        href: '#about',        id: 'about' },
  { name: 'Skills',       href: '#skills',       id: 'skills' },
  { name: 'Projects',     href: '#projects',     id: 'projects' },
  { name: 'Education',    href: '#education',    id: 'education' },
  { name: 'Certifications', href: '#certifications', id: 'certifications' },
  { name: 'Extra-Curricular', href: '#extracurricular', id: 'extracurricular' },
  { name: 'Contact',      href: '#contact',      id: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen]           = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (v) => setScrolled(v > 50));
    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(l => document.getElementById(l.id)).filter(Boolean);
      const pos = window.scrollY + window.innerHeight / 3;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= pos) { setActiveSection(sections[i].id); break; }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          height: 'var(--nav-height)',
          display: 'flex',
          alignItems: 'center',
          transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s',
          background: scrolled ? 'rgba(9, 12, 18, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>

          {/* Brand */}
          <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
            <div style={{
              width: '32px', height: '32px',
              background: 'var(--accent)',
              borderRadius: '8px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)',
              fontWeight: '800', fontSize: '0.85rem', color: '#070a10',
              letterSpacing: '-0.02em',
              flexShrink: 0,
            }}>
              AG
            </div>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
              fontSize: 'var(--text-base)',
              color: 'var(--text-primary)',
              letterSpacing: '-0.01em',
            }}>
              Abhilash<span style={{ color: 'var(--accent)' }}>.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="desktop-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                style={{
                  fontSize: 'var(--text-sm)',
                  fontWeight: activeSection === link.id ? '600' : '400',
                  color: activeSection === link.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                  transition: 'color 0.2s',
                  position: 'relative',
                  paddingBottom: '2px',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                onMouseLeave={e => e.currentTarget.style.color = activeSection === link.id ? 'var(--text-primary)' : 'var(--text-secondary)'}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="navUnderline"
                    style={{
                      position: 'absolute', bottom: '-2px', left: 0, right: 0,
                      height: '2px', background: 'var(--accent)', borderRadius: '2px',
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)' }}>
            <a href="#contact" className="btn btn-primary desktop-nav" style={{ padding: '0.55rem 1.25rem', fontSize: 'var(--text-sm)' }}>
              Hire Me
            </a>
            <button
              id="mobile-menu-toggle"
              className="mobile-toggle"
              onClick={() => setIsOpen(!isOpen)}
              style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </motion.header>

      {/* Mobile Backdrop & Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                top: 'var(--nav-height)',
                zIndex: 998,
                background: 'rgba(0, 0, 0, 0.65)',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
              }}
            />

            {/* Mobile Drawer */}
            <motion.div
              id="mobile-nav-drawer"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              style={{
                position: 'fixed',
                top: 'var(--nav-height)',
                left: 0, right: 0,
                zIndex: 999,
                background: 'rgba(9, 12, 18, 0.98)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                borderBottom: '1px solid rgba(0, 217, 192, 0.2)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
                padding: 'var(--sp-4) var(--sp-5) var(--sp-6)',
                maxHeight: 'calc(100vh - var(--nav-height))',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--sp-1)',
              }}
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      padding: 'var(--sp-3) var(--sp-3)',
                      fontSize: 'var(--text-base)',
                      fontWeight: isActive ? '600' : '400',
                      color: isActive ? 'var(--accent)' : 'var(--text-primary)',
                      borderBottom: '1px solid rgba(255,255,255,0.04)',
                      borderRadius: 'var(--radius-sm)',
                      background: isActive ? 'var(--accent-dim)' : 'transparent',
                      transition: 'all 0.15s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
                    )}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="btn btn-primary"
                style={{ marginTop: 'var(--sp-4)', justifyContent: 'center', minHeight: '44px' }}
              >
                Hire Me
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        .desktop-nav { display: none !important; }
        .mobile-toggle { display: flex; }
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;

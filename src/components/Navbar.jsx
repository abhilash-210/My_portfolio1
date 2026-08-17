import React from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import '../index.css';

const MagneticButton = ({ children, href, className, style, onClick }) => {
  return (
    <motion.a 
      href={href} 
      className={className} 
      style={style}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.a>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: 'rgba(8, 10, 15, 0.9)',
      backdropFilter: 'blur(10px)',
      borderBottom: 'var(--border-subtle)',
      height: 'var(--nav-height)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%'
      }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 'bold', fontSize: '1.2rem' }}>
          ABHILASH<span className="accent-text">.</span>
        </div>

        {/* Desktop Nav */}
        <div style={{ display: 'none' }} className="desktop-nav">
          <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="mono-text" style={{ fontSize: '0.8rem', transition: 'color 0.3s' }}>
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <MagneticButton href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                LET'S CONNECT
              </MagneticButton>
            </li>
          </ul>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" style={{ display: 'block', cursor: 'pointer' }} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X color="var(--text-primary)" /> : <Menu color="var(--text-primary)" />}
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: 'var(--nav-height)',
          left: 0,
          right: 0,
          backgroundColor: 'var(--bg-secondary)',
          padding: '2rem',
          borderBottom: 'var(--border-subtle)'
        }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="mono-text" onClick={() => setIsOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: block !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

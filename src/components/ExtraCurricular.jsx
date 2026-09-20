import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { extraCurricular } from '../data/portfolio';
import { Award, ExternalLink, Calendar, ChevronDown, ChevronUp, Lightbulb } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

const accentColors = ['#00d9c0', '#a78bfa', '#fb923c', '#34d399', '#f472b6', '#facc15'];

const EventCard = ({ event, index }) => {
  const accent = accentColors[index % accentColors.length];
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      className="card"
      style={{
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top accent strip */}
      <div style={{ height: '4px', background: accent, opacity: 0.8 }} />

      {/* Image / Thumbnail placeholder (if image exists) */}
      {event.image && (
        <div style={{
          width: '100%',
          backgroundColor: event.imageContain
            ? (event.imageContainDark ? 'rgba(15,15,20,0.95)' : 'rgba(255,255,255,0.97)')
            : 'rgba(255,255,255,0.02)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          overflow: 'hidden',
          height: '220px',
        }}>
          <img
            src={event.image}
            alt={event.title}
            loading="lazy"
            style={{
              width: '100%',
              height: '220px',
              objectFit: event.imageContain ? 'contain' : 'cover',
              objectPosition: event.imagePosition || 'center',
              display: 'block',
            }}
          />
        </div>
      )}

      {/* Body */}
      <div style={{ padding: 'var(--sp-6)', flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        {/* Header row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--sp-4)' }}>
          <div style={{
            width: '40px', height: '40px',
            borderRadius: 'var(--radius-sm)',
            background: 'rgba(255,255,255,0.03)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: accent,
          }}>
            <Award size={20} />
          </div>
          
          {event.link && (
            <motion.a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                color: 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: 'var(--text-xs)',
                fontWeight: '600',
                textDecoration: 'none'
              }}
            >
              <FaLinkedin size={16} /> <ExternalLink size={12} />
            </motion.a>
          )}
        </div>

        {/* Title + Subtitle */}
        <div style={{ marginBottom: 'var(--sp-3)' }}>
          <h3 style={{
            fontSize: 'var(--text-xl)',
            fontWeight: '700',
            fontFamily: 'var(--font-display)',
            color: 'var(--text-primary)',
            letterSpacing: '-0.015em',
            marginBottom: 'var(--sp-1)',
            lineHeight: '1.3',
          }}>
            {event.title}
          </h3>
          <p style={{
            fontSize: 'var(--text-sm)',
            color: accent,
            fontWeight: '500',
            opacity: 0.9,
          }}>
            {event.role}
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: 'var(--text-xs)', marginBottom: 'var(--sp-3)' }}>
           <Calendar size={12} />
           <span>{event.date}</span>
        </div>

        {/* Description */}
        <p className="body-text" style={{ fontSize: 'var(--text-sm)', lineHeight: '1.7', flex: 1, marginBottom: event.idea || event.sihYears ? 'var(--sp-4)' : 0 }}>
          {event.description}
        </p>

        {/* SIH Years Section */}
        {event.sihYears && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)', marginBottom: 'var(--sp-2)' }}>
            {event.sihYears.map((sih, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--sp-3)',
                padding: 'var(--sp-2) var(--sp-3)',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '8px',
              }}>
                <img
                  src="https://www.uxdt.nic.in/wp-content/uploads/2025/07/smart-india-hackathon-smart-india-hackathon.jpg"
                  alt="SIH Logo"
                  style={{ width: '32px', height: '32px', objectFit: 'contain', borderRadius: '4px', background: '#fff', padding: '2px' }}
                />
                <span style={{ fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--text-primary)' }}>{sih.year}</span>
                <span style={{ fontSize: 'var(--text-xs)', color: accent, marginLeft: 'auto', fontWeight: '500' }}>✓ Participated</span>
              </div>
            ))}
          </div>
        )}

        {/* Expandable Idea Section */}
        {event.idea && (
          <>
            <motion.button
              onClick={() => setExpanded(!expanded)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: `${accent}15`,
                border: `1px solid ${accent}40`,
                borderRadius: '6px',
                color: accent,
                cursor: 'pointer',
                padding: '6px 12px',
                fontSize: 'var(--text-xs)',
                fontWeight: '600',
                marginBottom: 'var(--sp-2)',
                width: 'fit-content',
              }}
            >
              <Lightbulb size={13} />
              {expanded ? 'Hide Idea' : 'View Our Idea'}
              {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
            </motion.button>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{
                    padding: 'var(--sp-4)',
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: 'var(--sp-2)', color: accent, fontWeight: '600', fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      <Lightbulb size={13} /> {event.idea.title}
                    </div>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                      {event.idea.abstract}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}

      </div>
    </motion.div>
  );
};

const ExtraCurricular = () => {
  return (
    <section id="extracurricular" className="section">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 'var(--sp-12)' }}
        >
          <div className="section-label">Beyond Academics</div>
          <h2 className="section-heading" style={{ marginTop: 'var(--sp-3)' }}>
            Events &amp; Extra-Curricular
          </h2>
          <p className="body-text" style={{ marginTop: 'var(--sp-4)', maxWidth: '560px' }}>
            Hackathons, tech events, and coordination roles that go beyond the traditional classroom environment.
          </p>
        </motion.div>

        <div className="ec-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(320px, 100%), 1fr))',
          gap: 'var(--sp-5)',
        }}>
          {extraCurricular.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExtraCurricular;

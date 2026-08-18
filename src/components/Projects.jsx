import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { allProjects } from '../data/portfolio';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

// Gradient pairs for project cards
const gradients = [
  'linear-gradient(135deg, rgba(0,217,192,0.15) 0%, rgba(96,165,250,0.08) 100%)',
  'linear-gradient(135deg, rgba(167,139,250,0.15) 0%, rgba(244,114,182,0.08) 100%)',
  'linear-gradient(135deg, rgba(251,146,60,0.15) 0%, rgba(250,204,21,0.08) 100%)',
  'linear-gradient(135deg, rgba(52,211,153,0.15) 0%, rgba(0,217,192,0.08) 100%)',
  'linear-gradient(135deg, rgba(244,114,182,0.15) 0%, rgba(167,139,250,0.08) 100%)',
  'linear-gradient(135deg, rgba(250,204,21,0.15) 0%, rgba(251,146,60,0.08) 100%)',
];

const accentColors = ['#00d9c0', '#a78bfa', '#fb923c', '#34d399', '#f472b6', '#facc15'];

const ProjectCard = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false);
  const accent = accentColors[index % accentColors.length];
  const gradient = gradients[index % gradients.length];

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
      {/* Colored top strip */}
      <div style={{
        height: '4px',
        background: accent,
        opacity: 0.8,
      }} />

      {/* Card body */}
      <div style={{ padding: 'var(--sp-6)', flex: 1, display: 'flex', flexDirection: 'column' }}>

        {/* Header row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--sp-4)' }}>
          <div style={{
            width: '44px', height: '44px',
            borderRadius: 'var(--radius-sm)',
            background: gradient,
            border: `1px solid ${accent}30`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-display)',
            fontWeight: '800',
            fontSize: 'var(--text-lg)',
            color: accent,
          }}>
            {project.id}
          </div>
          <motion.button
            onClick={() => setExpanded(!expanded)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '6px',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              padding: '4px 8px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: 'var(--text-xs)',
              fontWeight: '600',
            }}
          >
            {expanded ? <><ChevronUp size={12} /> Less</> : <><ChevronDown size={12} /> More</>}
          </motion.button>
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
            {project.title}
          </h3>
          <p style={{
            fontSize: 'var(--text-sm)',
            color: accent,
            fontWeight: '500',
            opacity: 0.9,
          }}>
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="body-text" style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--sp-4)', lineHeight: '1.7', flex: 1 }}>
          {project.description}
        </p>

        {/* Capabilities (expandable) */}
        <AnimatePresence>
          {expanded && project.capabilities && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              style={{ overflow: 'hidden', marginBottom: 'var(--sp-4)' }}
            >
              <div style={{ paddingTop: 'var(--sp-2)', borderTop: '1px solid rgba(255,255,255,0.06)', marginBottom: 'var(--sp-3)' }}>
                <div style={{ fontSize: 'var(--text-xs)', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 'var(--sp-3)' }}>
                  Key Features
                </div>
                <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(160px, 100%), 1fr))', gap: 'var(--sp-2)' }}>
                  {project.capabilities.map((cap) => (
                    <li key={cap} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                      <span style={{ color: accent, marginTop: '3px', fontSize: '10px', flexShrink: 0 }}>◆</span>
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tech badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-2)', marginTop: 'auto' }}>
          {project.technology.map((tech) => (
            <span key={tech} className="badge" style={{ fontSize: '0.7rem' }}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 'var(--sp-12)' }}
        >
          <div className="section-label">Portfolio</div>
          <h2 className="section-heading" style={{ marginTop: 'var(--sp-3)' }}>
            Selected Projects
          </h2>
          <p className="body-text" style={{ marginTop: 'var(--sp-4)', maxWidth: '560px' }}>
            Systems and applications I've designed and built across software engineering,
            cybersecurity, AI, and connected hardware.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(320px, 100%), 1fr))',
          gap: 'var(--sp-5)',
        }}>
          {allProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;

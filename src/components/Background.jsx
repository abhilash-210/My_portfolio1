import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Only run on client side
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      overflow: 'hidden',
      backgroundColor: 'var(--bg-primary)',
      pointerEvents: 'none'
    }}>
      {/* Subtle grid */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)'
      }}></div>

      {/* Reactive glow */}
      {windowSize.width > 768 && (
        <motion.div
          animate={{
            x: mousePosition.x - 400,
            y: mousePosition.y - 400,
          }}
          transition={{ type: 'tween', ease: 'backOut', duration: 1 }}
          style={{
            position: 'absolute',
            width: '800px',
            height: '800px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(32, 217, 210, 0.03) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />
      )}
    </div>
  );
};

export default Background;

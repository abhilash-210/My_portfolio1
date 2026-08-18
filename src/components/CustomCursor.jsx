import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth cursor movement using spring
  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }
    
    setIsVisible(true);

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX - 16); // Center offset
      cursorY.set(e.clientY - 16);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer crosshair frame */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          x: cursorX,
          y: cursorY,
          width: 32,
          height: 32,
          pointerEvents: 'none',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          rotate: isHovering ? 45 : 0
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <div style={{ position: 'absolute', width: '100%', height: '1px', backgroundColor: isHovering ? 'var(--accent)' : 'rgba(255,255,255,0.2)' }} />
        <div style={{ position: 'absolute', width: '1px', height: '100%', backgroundColor: isHovering ? 'var(--accent)' : 'rgba(255,255,255,0.2)' }} />
        
        {/* Corner accents */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '4px', borderTop: '1px solid var(--accent)', borderLeft: '1px solid var(--accent)' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: '4px', height: '4px', borderTop: '1px solid var(--accent)', borderRight: '1px solid var(--accent)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '4px', height: '4px', borderBottom: '1px solid var(--accent)', borderLeft: '1px solid var(--accent)' }} />
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '4px', height: '4px', borderBottom: '1px solid var(--accent)', borderRight: '1px solid var(--accent)' }} />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          x: cursorX,
          y: cursorY,
          width: 32,
          height: 32,
          pointerEvents: 'none',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <motion.div
          style={{
            width: 4,
            height: 4,
            backgroundColor: 'var(--accent)',
            borderRadius: '0', // Square dot
          }}
          animate={{
            scale: isHovering ? 0 : 1,
          }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;

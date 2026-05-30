'use client';

import { useEffect, useRef, useState } from 'react';

interface CursorState {
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [dotPos, setDotPos] = useState<CursorState>({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const ringRef = useRef<HTMLDivElement>(null);
  const ringPos = useRef<CursorState>({ x: -100, y: -100 });
  const targetPos = useRef<CursorState>({ x: -100, y: -100 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    // Add cursor-none class to body
    document.body.classList.add('custom-cursor-active');
    return () => {
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      // Dot follows instantly via state
      setDotPos({ x, y });
      targetPos.current = { x, y };

      if (!isVisible) setIsVisible(true);

      // Detect if over interactive element
      const target = e.target as Element;
      const interactive = target.closest(
        'button, a, [data-cursor="pointer"], input, textarea, select, label, [role="button"]'
      );
      setIsHovering(!!interactive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  // Smooth ring follow via requestAnimationFrame
  useEffect(() => {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      ringPos.current.x = lerp(ringPos.current.x, targetPos.current.x, 0.12);
      ringPos.current.y = lerp(ringPos.current.y, targetPos.current.y, 0.12);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(calc(-50% + ${ringPos.current.x}px), calc(-50% + ${ringPos.current.y}px))`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  return (
    <>
      {/* Inner dot — instant follow */}
      <div
        className="cursor-dot"
        style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: '#ffffff',
          top: 0,
          left: 0,
          transform: `translate(calc(-50% + ${dotPos.x}px), calc(-50% + ${dotPos.y}px))`,
          mixBlendMode: 'difference',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Outer ring — smooth RAF follow */}
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          border: '1px solid rgba(245, 158, 11, 0.5)',
          top: 0,
          left: 0,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease, width 0.2s ease, height 0.2s ease, box-shadow 0.2s ease',
          ...(isHovering
            ? {
                width: 64,
                height: 64,
                border: '1px solid rgba(245, 158, 11, 0.9)',
                boxShadow: '0 0 12px rgba(245, 158, 11, 0.4), 0 0 24px rgba(245, 158, 11, 0.2)',
              }
            : {}),
        }}
      />

      {/* Media query to hide on non-hover devices */}
      <style>{`
        @media (hover: none) {
          .cursor-dot,
          .cursor-ring {
            display: none !important;
          }
          .custom-cursor-active * {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  );
}

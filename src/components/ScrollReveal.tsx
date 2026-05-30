'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type Direction = 'up' | 'left' | 'right' | 'fade';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
}

function getInitial(direction: Direction): Record<string, number> {
  switch (direction) {
    case 'up':
      return { opacity: 0, y: 40 };
    case 'left':
      return { opacity: 0, x: -40 };
    case 'right':
      return { opacity: 0, x: 40 };
    case 'fade':
      return { opacity: 0, scale: 0.96 };
    default:
      return { opacity: 0, y: 40 };
  }
}

function getAnimate(direction: Direction): Record<string, number> {
  switch (direction) {
    case 'up':
      return { opacity: 1, y: 0 };
    case 'left':
      return { opacity: 1, x: 0 };
    case 'right':
      return { opacity: 1, x: 0 };
    case 'fade':
      return { opacity: 1, scale: 1 };
    default:
      return { opacity: 1, y: 0 };
  }
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={getInitial(direction)}
      animate={isInView ? getAnimate(direction) : getInitial(direction)}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;

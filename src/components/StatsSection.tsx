'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

// ─── useCountUp Hook ────────────────────────────────────────────────────────

interface UseCountUpOptions {
  end: number;
  duration?: number; // seconds
}

function useCountUp({ end, duration = 2 }: UseCountUpOptions): number {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const animate = (timestamp: number) => {
    if (startTimeRef.current === null) {
      startTimeRef.current = timestamp;
    }
    const elapsed = (timestamp - startTimeRef.current) / 1000; // seconds
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    setCount(Math.floor(eased * end));

    if (progress < 1) {
      frameRef.current = requestAnimationFrame(animate);
    } else {
      setCount(end);
    }
  };

  const start = () => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
    }
    startTimeRef.current = null;
    setCount(0);
    frameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return { count, start } as unknown as number;
}

// ─── Stat Item ───────────────────────────────────────────────────────────────

interface StatConfig {
  /** The raw numeric value used for count-up (e.g. 50, 3, 98, 5) */
  numericValue: number;
  /** How to render the number as a string, e.g. "50+", "98%", "5★" */
  display: (n: number, done: boolean) => string;
  label: string;
  /** Duration of count-up animation in seconds */
  duration?: number;
}

interface StatItemProps {
  stat: StatConfig;
  isLast: boolean;
  trigger: boolean;
}

function StatItem({ stat, isLast, trigger }: StatItemProps) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const frameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const duration = stat.duration ?? 2;

  useEffect(() => {
    if (!trigger) return;

    setCount(0);
    setDone(false);
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    startTimeRef.current = null;

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) startTimeRef.current = timestamp;
      const elapsed = (timestamp - startTimeRef.current) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * stat.numericValue);
      setCount(current);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(stat.numericValue);
        setDone(true);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [trigger, stat.numericValue, duration]);

  return (
    <div
      className="stat-item"
      style={{
        flex: '1 1 0%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1.5rem',
        position: 'relative',
      }}
    >
      {/* Vertical divider (right side, hidden on last item and on mobile) */}
      {!isLast && (
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            height: '60%',
            width: '1px',
            background: 'rgba(255,255,255,0.08)',
          }}
          className="stat-divider"
        />
      )}

      {/* Number */}
      <span
        style={{
          fontSize: '72px',
          fontWeight: 700,
          lineHeight: 1,
          color: '#F59E0B',
          letterSpacing: '-0.03em',
          fontVariantNumeric: 'tabular-nums',
          transition: 'color 0.2s',
        }}
      >
        {stat.display(count, done)}
      </span>

      {/* Label */}
      <span
        style={{
          marginTop: '0.75rem',
          fontSize: '0.9375rem',
          fontWeight: 400,
          color: 'rgba(255,255,255,0.40)',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          textAlign: 'center',
        }}
      >
        {stat.label}
      </span>
    </div>
  );
}

// ─── Stats Data ───────────────────────────────────────────────────────────────

const STATS: StatConfig[] = [
  {
    numericValue: 50,
    display: (n, done) => `${n}${done ? '+' : ''}`,
    label: 'Projects Delivered',
    duration: 1.8,
  },
  {
    numericValue: 3,
    display: (n) => `${n}`,
    label: 'Continents Served',
    duration: 1.2,
  },
  {
    numericValue: 98,
    display: (n, done) => `${n}${done ? '%' : ''}`,
    label: 'Client Retention',
    duration: 2,
  },
  {
    numericValue: 5,
    display: (n, done) => `${n}${done ? '★' : ''}`,
    label: 'Average Rating',
    duration: 1.4,
  },
];

// ─── StatsSection ─────────────────────────────────────────────────────────────

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <>
      <style>{`
        @media (max-width: 640px) {
          .stats-grid {
            flex-wrap: wrap !important;
          }
          .stats-grid .stat-item {
            flex: 1 1 45% !important;
            min-width: 140px;
          }
          .stats-grid .stat-divider {
            display: none !important;
          }
        }
      `}</style>

      <section
        ref={ref}
        aria-label="Company statistics"
        style={{
          background: '#080808',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '6rem',
          paddingBottom: '6rem',
          width: '100%',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
          }}
        >
          <div
            className="stats-grid"
            style={{
              display: 'flex',
              alignItems: 'stretch',
              justifyContent: 'center',
            }}
          >
            {STATS.map((stat, index) => (
              <StatItem
                key={stat.label}
                stat={stat}
                isLast={index === STATS.length - 1}
                trigger={isInView}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

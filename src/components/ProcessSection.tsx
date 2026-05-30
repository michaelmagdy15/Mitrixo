'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We dive deep into your business, goals, and users to map the perfect solution.',
  },
  {
    number: '02',
    title: 'Architecture',
    description:
      'System design, tech stack selection, and full project blueprint created.',
  },
  {
    number: '03',
    title: 'Engineering',
    description:
      'Rapid development sprints with weekly demos and full transparency.',
  },
  {
    number: '04',
    title: 'Launch & Scale',
    description:
      'Deployment, monitoring, and ongoing optimization for maximum performance.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.5, ease: [0.0, 0.0, 0.2, 1] as const, delay: 0.3 },
  },
};

const mobileLineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.5, ease: [0.0, 0.0, 0.2, 1] as const, delay: 0.3 },
  },
};

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10% 0px' });

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: '#030712' }}
      className="py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ color: '#f59e0b' }}
          >
            Our Process
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            From Idea to Launch
          </h2>
        </motion.div>

        {/* ── Desktop timeline ── */}
        <div className="hidden md:block">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative grid grid-cols-4 gap-0"
          >
            {/* Connecting line row */}
            <div className="absolute top-10 left-0 right-0 flex items-center col-span-4 px-[12.5%]">
              {steps.slice(0, -1).map((_, i) => (
                <motion.div
                  key={i}
                  variants={lineVariants}
                  className="flex-1 h-px origin-left"
                  style={{ backgroundColor: 'rgba(245,158,11,0.3)' }}
                />
              ))}
            </div>

            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className="relative flex flex-col items-center text-center px-6 pt-2"
              >
                {/* Circle node */}
                <div
                  className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center mb-8 shrink-0"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(245,158,11,0.15) 0%, rgba(245,158,11,0.04) 100%)',
                    border: '1px solid rgba(245,158,11,0.35)',
                    boxShadow: '0 0 24px rgba(245,158,11,0.1)',
                  }}
                >
                  {/* Big background number */}
                  <span
                    className="absolute inset-0 flex items-center justify-center text-6xl font-black select-none pointer-events-none"
                    style={{ color: 'rgba(245,158,11,0.12)', lineHeight: 1 }}
                  >
                    {step.number}
                  </span>
                  {/* Foreground number */}
                  <span
                    className="relative text-xl font-bold tracking-wider"
                    style={{ color: '#f59e0b' }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Mobile vertical timeline ── */}
        <div className="md:hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative flex flex-col gap-0 pl-8"
          >
            {/* Vertical line */}
            <motion.div
              variants={mobileLineVariants}
              className="absolute left-[18px] top-5 bottom-5 w-px origin-top"
              style={{ backgroundColor: 'rgba(245,158,11,0.3)' }}
            />

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className="relative flex gap-6 pb-12 last:pb-0"
              >
                {/* Node dot */}
                <div
                  className="relative z-10 shrink-0 w-10 h-10 rounded-full flex items-center justify-center -ml-8"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(245,158,11,0.2) 0%, rgba(245,158,11,0.06) 100%)',
                    border: '1px solid rgba(245,158,11,0.4)',
                    boxShadow: '0 0 16px rgba(245,158,11,0.12)',
                  }}
                >
                  <span
                    className="text-xs font-bold"
                    style={{ color: '#f59e0b' }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-1">
                  {/* Big background number */}
                  <span
                    className="block text-7xl font-black leading-none mb-1 select-none"
                    style={{ color: 'rgba(245,158,11,0.08)' }}
                  >
                    {step.number}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

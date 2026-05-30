'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useRef, useState } from 'react';

interface Project {
  id: number;
  name: string;
  category: string;
  description: string;
  tags: string[];
  gradient: string;
  accentColor: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Strike Boxing EG',
    category: 'Sports & Fitness',
    description:
      'A fully custom CRM and member management platform built to streamline operations, track athlete progress, and automate billing for one of Egypt\'s top boxing gyms.',
    tags: ['CRM', 'Web App', 'Dashboard'],
    gradient: 'from-amber-900/30 to-orange-900/20',
    accentColor: '#F59E0B',
    link: '#',
  },
  {
    id: 2,
    name: 'Gamen World',
    category: 'Gaming & Entertainment',
    description:
      'A vibrant gaming community platform with discovery engine capabilities — helping players find games, communities, and events that match their passion.',
    tags: ['Platform', 'Gaming', 'Community'],
    gradient: 'from-violet-900/30 to-purple-900/20',
    accentColor: '#8B5CF6',
    link: '#',
  },
  {
    id: 3,
    name: 'ATPL Vector',
    category: 'Aviation & Enterprise',
    description:
      'An enterprise-grade aviation training and licensing management system that simplifies compliance, tracks certifications, and accelerates pilot progression.',
    tags: ['Aviation', 'SaaS', 'Enterprise'],
    gradient: 'from-blue-900/30 to-cyan-900/20',
    accentColor: '#06B6D4',
    link: '#',
  },
];

/* ─── Tilt Card ──────────────────────────────────────────────────────────── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [6, -6]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative group cursor-pointer"
    >
      {/* Glow border */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{
          boxShadow: hovered
            ? `0 0 0 1px ${project.accentColor}55, 0 0 40px ${project.accentColor}22, 0 20px 60px rgba(0,0,0,0.6)`
            : '0 0 0 1px rgba(255,255,255,0.06), 0 4px 24px rgba(0,0,0,0.4)',
        }}
        transition={{ duration: 0.4 }}
        style={{ borderRadius: '1rem' }}
      />

      {/* Card body */}
      <div className="relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm">

        {/* Visual area */}
        <div className="relative aspect-[16/10] overflow-hidden">
          {/* Gradient background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />

          {/* Animated grid overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />

          {/* Floating orb */}
          <motion.div
            className="absolute rounded-full blur-3xl"
            style={{ background: project.accentColor, opacity: 0.15 }}
            animate={
              hovered
                ? { width: '70%', height: '70%', top: '15%', left: '15%' }
                : { width: '50%', height: '50%', top: '25%', left: '25%' }
            }
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />

          {/* Number watermark */}
          <div
            className="absolute bottom-4 right-6 text-8xl font-black select-none pointer-events-none"
            style={{ color: `${project.accentColor}18`, lineHeight: 1 }}
          >
            {String(project.id).padStart(2, '0')}
          </div>

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 flex flex-col justify-end p-6"
            style={{ background: 'linear-gradient(to top, rgba(3,7,18,0.97) 0%, rgba(3,7,18,0.6) 60%, transparent 100%)' }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.35 }}
          >
            <motion.div
              animate={{ y: hovered ? 0 : 16 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: project.accentColor }}>
                {project.category}
              </p>
              <h3 className="text-xl font-bold text-white mb-2 leading-tight">{project.name}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider border"
                    style={{
                      color: project.accentColor,
                      borderColor: `${project.accentColor}44`,
                      background: `${project.accentColor}12`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA link */}
              <a
                href={project.link}
                className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group/link"
                style={{ color: project.accentColor }}
              >
                <span className="border-b border-transparent group-hover/link:border-current transition-all">
                  View Project
                </span>
                <motion.span
                  animate={{ x: hovered ? 4 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  →
                </motion.span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Card footer (always visible) */}
        <div className="px-6 py-5 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 mb-0.5">
              {project.category}
            </p>
            <h3 className="text-base font-bold text-white">{project.name}</h3>
          </div>
          <div className="flex gap-1.5">
            {project.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full text-[9px] font-semibold uppercase tracking-wider"
                style={{
                  color: project.accentColor,
                  background: `${project.accentColor}15`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Section ────────────────────────────────────────────────────────────── */
export default function SelectedWork() {
  return (
    <section
      id="selected-work"
      className="relative py-32 overflow-hidden"
      style={{ background: '#030712' }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '128px',
          }}
        />
        {/* Ambient glow left */}
        <div
          className="absolute -left-64 top-1/3 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
          style={{ background: 'radial-gradient(circle, #F59E0B, transparent 70%)' }}
        />
        {/* Ambient glow right */}
        <div
          className="absolute -right-64 bottom-1/3 w-[500px] h-[500px] rounded-full blur-[100px] opacity-15"
          style={{ background: 'radial-gradient(circle, #8B5CF6, transparent 70%)' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-amber-500/60" />
            <span
              className="text-xs font-bold uppercase tracking-[0.25em]"
              style={{ color: '#F59E0B' }}
            >
              Selected Work
            </span>
            <div className="h-px w-8 bg-amber-500/60" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight mb-6">
            Projects That{' '}
            <span
              className="relative inline-block"
              style={{
                background: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 50%, #F59E0B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Define Us
            </span>
          </h2>

          {/* Subtext */}
          <p className="max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed">
            A curated look at the work we're most proud of — digital products built with precision,
            strategy, and a relentless focus on results.
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-4"
        >
          <p className="text-sm text-gray-500">Ready to build something extraordinary?</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider text-black transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
              boxShadow: '0 0 30px rgba(245,158,11,0.35), 0 4px 16px rgba(0,0,0,0.4)',
            }}
          >
            Start Your Project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';

interface Testimonial {
  quote: string;
  name: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Mitrixio transformed our entire member management workflow. The Strike CRM they built handles thousands of members seamlessly.',
    name: 'Ahmed Hassan',
    company: 'CEO, Strike Boxing EG',
  },
  {
    quote:
      'The gaming platform they delivered exceeded every expectation. Clean, fast, and exactly what our community needed.',
    name: 'Sarah Mitchell',
    company: 'Founder, Gamen World',
  },
  {
    quote:
      'Enterprise-grade quality with a boutique attention to detail. Our aviation training system is now class-leading.',
    name: 'Captain James Al-Farsi',
    company: 'CTO, ATPL Vector',
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

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Testimonials() {
  return (
    <section
      style={{ backgroundColor: '#030712' }}
      className="py-32 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={headerVariants}
        >
          <p
            className="text-xs font-bold tracking-[0.25em] uppercase mb-4"
            style={{ color: '#f59e0b' }}
          >
            CLIENT VOICES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          {testimonials.map((t, index) => (
            <TestimonialCard key={index} testimonial={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -8,
        boxShadow: '0 0 32px rgba(245,158,11,0.18)',
        borderColor: 'rgba(245,158,11,0.35)',
      }}
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderRadius: '16px',
        padding: '32px',
        transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
        cursor: 'default',
      }}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-6" aria-label="5 star rating">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            style={{ color: '#f59e0b', fontSize: '18px', lineHeight: 1 }}
            aria-hidden="true"
          >
            ★
          </span>
        ))}
      </div>

      {/* Quote */}
      <p
        className="italic leading-relaxed mb-8"
        style={{
          color: 'rgba(255,255,255,0.7)',
          fontSize: '1rem',
        }}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div>
        <p className="font-bold text-white text-sm">{testimonial.name}</p>
        <p
          className="text-xs mt-1"
          style={{ color: 'rgba(245,158,11,0.6)' }}
        >
          {testimonial.company}
        </p>
      </div>
    </motion.div>
  );
}

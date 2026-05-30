'use client';

const brands = [
  'Strike Boxing EG',
  'Gamen World',
  'ATPL Vector',
  'Nexus Labs',
  'Orbit Digital',
  'Vaulted',
  'Kinetic Studio',
  'Prism Creative',
  'Helix Systems',
  'Forge Media',
];

// Duplicate for seamless looping
const row1 = [...brands, ...brands];
const row2 = [...brands, ...brands];

export default function TrustedBy() {
  return (
    <section
      className="w-full py-14 border-t border-white/5 overflow-hidden"
      style={{ background: '#030712' }}
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
        }
        .marquee-track--forward {
          animation: marquee 30s linear infinite;
        }
        .marquee-track--reverse {
          animation: marquee-reverse 25s linear infinite;
        }
        .marquee-wrapper {
          position: relative;
        }
        .marquee-wrapper::before,
        .marquee-wrapper::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 120px;
          z-index: 10;
          pointer-events: none;
        }
        .marquee-wrapper::before {
          left: 0;
          background: linear-gradient(to right, #030712 0%, transparent 100%);
        }
        .marquee-wrapper::after {
          right: 0;
          background: linear-gradient(to left, #030712 0%, transparent 100%);
        }
      `}</style>

      {/* Heading */}
      <p className="text-center text-white/30 text-xs font-semibold tracking-widest uppercase mb-10">
        Trusted by Forward-Thinking Brands
      </p>

      {/* Row 1 — scrolls left */}
      <div className="marquee-wrapper mb-4">
        <div className="marquee-track marquee-track--forward">
          {row1.map((brand, i) => (
            <BrandPill key={`r1-${i}`} name={brand} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="marquee-wrapper">
        <div className="marquee-track marquee-track--reverse">
          {row2.map((brand, i) => (
            <BrandPill key={`r2-${i}`} name={brand} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandPill({ name }: { name: string }) {
  return (
    <span className="text-white/40 hover:text-white/80 transition-colors text-sm font-medium tracking-wide border border-white/10 hover:border-white/30 rounded-full px-6 py-2 cursor-default mx-3 whitespace-nowrap inline-block">
      {name}
    </span>
  );
}

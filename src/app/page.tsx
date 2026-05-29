import React from "react";
import Navigation from "@/components/Navigation";
import CanvasGridBackground from "@/components/CanvasGridBackground";
import Hero from "@/components/Hero";
import EcosystemHub from "@/components/EcosystemHub";
import XOBlueprint from "@/components/XOBlueprint";
import ProductPipeline from "@/components/ProductPipeline";
import PremiumFooter from "@/components/PremiumFooter";

export const metadata = {
  title: "MITRIXO — Enterprise Software House & SaaS Product Studio",
  description: "We engineer high-fidelity digital infrastructure, proprietary SaaS products, and custom CMS systems for the next generation. Incorporating Mitry Visuals creative studio.",
  openGraph: {
    title: "MITRIXO — Enterprise Software House & SaaS Product Studio",
    description: "We engineer high-fidelity digital infrastructure for the next generation.",
    url: "https://mitrixo.com",
    siteName: "MITRIXO",
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-brand-dark overflow-hidden font-sans select-none antialiased">
      {/* High-Performance Coordinate Blueprint Canvas Background */}
      <CanvasGridBackground />

      {/* Frosted Matte Header & Navigation Drawer */}
      <Navigation />

      {/* Core Structural Flow */}
      <main className="relative z-10 w-full flex flex-col items-center">
        
        {/* Cinematic Logo Entrance Sequence & Dynamic Tagline Hero */}
        <Hero />

        {/* Split Axis Showcase: Engineering Division & Cinematic Visuals Studio */}
        <section id="ecosystem" className="w-full relative z-20">
          <EcosystemHub />
        </section>

        {/* The Brand Manifesto: I/O, XO, and The Multiplier Grid */}
        <section id="blueprint" className="w-full relative z-20">
          <XOBlueprint />
        </section>

        {/* Asymmetrical Bento Grid Showcase of Proprietary Applications */}
        <section id="products" className="w-full relative z-20">
          <ProductPipeline />
        </section>
        
      </main>

      {/* Premium Minimal Footer & Amber Glow XO engine marker */}
      <PremiumFooter />
    </div>
  );
}

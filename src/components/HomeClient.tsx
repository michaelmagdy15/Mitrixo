"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import CanvasGridBackground from "@/components/CanvasGridBackground";
import Hero from "@/components/Hero";
import EcosystemHub from "@/components/EcosystemHub";
import XOBlueprint from "@/components/XOBlueprint";
import ProductPipeline from "@/components/ProductPipeline";
import ProjectDiscoveryForm from "@/components/ProjectDiscoveryForm";
import PremiumFooter from "@/components/PremiumFooter";
import CinematicPreloader from "@/components/CinematicPreloader";
import CustomCursor from "@/components/CustomCursor";
import TrustedBy from "@/components/TrustedBy";
import StatsSection from "@/components/StatsSection";
import SelectedWork from "@/components/SelectedWork";
import ProcessSection from "@/components/ProcessSection";
import Testimonials from "@/components/Testimonials";

export default function HomeClient() {
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <div className="relative min-h-screen bg-brand-dark overflow-hidden font-sans select-none antialiased">
      {/* Cinematic Logo Preloader */}
      <AnimatePresence mode="wait">
        {showPreloader && (
          <CinematicPreloader onComplete={() => setShowPreloader(false)} />
        )}
      </AnimatePresence>

      {/* High-Performance Coordinate Blueprint Canvas Background */}
      <CanvasGridBackground />

      {/* Coordinated entrance of the main page elements once preloader exits */}
      {!showPreloader && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex flex-col min-h-screen relative"
        >
          {/* Frosted Matte Header & Navigation Drawer */}
          <Navigation />

          {/* Custom Cursor — floating element, always present outside main flow */}
          <CustomCursor />

          {/* Core Structural Flow */}
          <main className="relative z-10 w-full flex flex-col items-center">

            {/* Cinematic Logo Entrance Sequence & Dynamic Tagline Hero */}
            <Hero />

            {/* Social Proof: Trusted By Logos */}
            <section className="w-full relative z-20">
              <TrustedBy />
            </section>

            {/* Key Metrics & Impact Numbers */}
            <section className="w-full relative z-20">
              <StatsSection />
            </section>

            {/* Split Axis Showcase: Engineering Division & Cinematic Visuals Studio */}
            <section id="ecosystem" className="w-full relative z-20">
              <EcosystemHub />
            </section>

            {/* Portfolio: Selected Work Showcase */}
            <section id="work" className="w-full relative z-20">
              <SelectedWork />
            </section>

            {/* The Brand Manifesto: I/O, XO, and The Multiplier Grid */}
            <section id="blueprint" className="w-full relative z-20">
              <XOBlueprint />
            </section>

            {/* How We Work: Process & Methodology */}
            <section id="process" className="w-full relative z-20">
              <ProcessSection />
            </section>

            {/* Asymmetrical Bento Grid Showcase of Proprietary Applications */}
            <section id="products" className="w-full relative z-20">
              <ProductPipeline />
            </section>

            {/* Client Testimonials */}
            <section id="testimonials" className="w-full relative z-20">
              <Testimonials />
            </section>

            {/* Partnership / Project Discovery Interactive Form */}
            <ProjectDiscoveryForm />

          </main>

          {/* Premium Minimal Footer & Amber Glow XO engine marker */}
          <PremiumFooter />
        </motion.div>
      )}
    </div>
  );
}

"use client";

import React, { useEffect, useRef } from "react";

export interface CanvasGridBackgroundProps {
  /** Optional custom grid spacing in pixels. Default is 40px for minor, 120px for major grids. */
  minorSpacing?: number;
  majorSpacing?: number;
  /** Custom speed multiplier for the organic intersection pulse. Default is 1. */
  pulseSpeed?: number;
}

export const CanvasGridBackground: React.FC<CanvasGridBackgroundProps> = ({
  minorSpacing = 40,
  majorSpacing = 120,
  pulseSpeed = 1,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  // Track mouse coordinates, target position, active status, and visual opacity
  const mouseRef = useRef({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    active: false,
    opacity: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isComponentMounted = true;

    // Resize handler with high-DPI (Retina) support
    const handleResize = () => {
      if (!canvas || !isComponentMounted) return;
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;

      // Adjust buffer size for crispness on high-DPI screens
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      
      // Ensure canvas element style matches viewport dimensions
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Scale context to draw in logical coordinates
      ctx.scale(dpr, dpr);
    };

    // Initialize dimensions
    handleResize();
    window.addEventListener("resize", handleResize);

    // Track mouse coordinates on window to ensure seamless hover across all elements
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Track if cursor is within viewport boundaries
      if (
        e.clientX >= 0 &&
        e.clientX <= window.innerWidth &&
        e.clientY >= 0 &&
        e.clientY <= window.innerHeight
      ) {
        mouseRef.current.targetX = x;
        mouseRef.current.targetY = y;
        mouseRef.current.active = true;
      } else {
        mouseRef.current.active = false;
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Render loop
    const render = () => {
      if (!canvas || !ctx || !isComponentMounted) return;

      const dpr = window.devicePixelRatio || 1;
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      // 1. Clear with deep charcoal backdrop overlay
      ctx.clearRect(0, 0, width, height);

      const time = Date.now() * 0.001 * pulseSpeed;

      // --- Draw technical Grid lines ---
      // A: Minor grid lines (0.5px blueprint-blue, very subtle)
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = "rgba(59, 130, 246, 0.02)";
      ctx.beginPath();
      
      for (let x = 0; x < width; x += minorSpacing) {
        // Offset by 0.5 to prevent anti-aliasing blur on integer lines
        const crispX = Math.floor(x) + 0.5;
        ctx.moveTo(crispX, 0);
        ctx.lineTo(crispX, height);
      }
      for (let y = 0; y < height; y += minorSpacing) {
        const crispY = Math.floor(y) + 0.5;
        ctx.moveTo(0, crispY);
        ctx.lineTo(width, crispY);
      }
      ctx.stroke();

      // B: Major grid lines (0.5px blueprint-blue, slightly more distinct)
      ctx.strokeStyle = "rgba(59, 130, 246, 0.06)";
      ctx.beginPath();
      
      for (let x = 0; x < width; x += majorSpacing) {
        const crispX = Math.floor(x) + 0.5;
        ctx.moveTo(crispX, 0);
        ctx.lineTo(crispX, height);
      }
      for (let y = 0; y < height; y += majorSpacing) {
        const crispY = Math.floor(y) + 0.5;
        ctx.moveTo(0, crispY);
        ctx.lineTo(width, crispY);
      }
      ctx.stroke();

      // --- Draw Slow, Organic Pulse at Intersection Points ---
      for (let x = 0; x < width; x += majorSpacing) {
        for (let y = 0; y < height; y += majorSpacing) {
          // Slow organic wave traveling diagonally across viewport
          const wavePhase = time * 1.2 + x * 0.002 + y * 0.003;
          const pulse = Math.sin(wavePhase);
          
          // Interpolate opacity between 5% and 25% for natural breathe feel
          const alpha = 0.06 + 0.14 * (pulse * 0.5 + 0.5);

          // Draw the intersection node dot
          ctx.fillStyle = `rgba(59, 130, 246, ${alpha})`;
          ctx.beginPath();
          ctx.arc(x, y, 1.2, 0, Math.PI * 2);
          ctx.fill();

          // Soft ambient glow surrounding intersection nodes
          if (alpha > 0.14) {
            const glowAlpha = (alpha - 0.14) * 0.4;
            ctx.fillStyle = `rgba(59, 130, 246, ${glowAlpha})`;
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // --- Draw Mouse-Tracking Coordinate Overlay ---
      const mouse = mouseRef.current;
      
      // Smoothly interpolate tracking positions using custom mechanical spring curves
      const ease = 0.12; // Mechanical spring coefficient
      mouse.x += (mouse.targetX - mouse.x) * ease;
      mouse.y += (mouse.targetY - mouse.y) * ease;

      // Smooth mechanical state transition for opacity
      const targetOpacity = mouse.active ? 1.0 : 0.0;
      mouse.opacity += (targetOpacity - mouse.opacity) * 0.1;

      if (mouse.opacity > 0.001) {
        const curX = mouse.x;
        const curY = mouse.y;
        const currentOpacity = mouse.opacity;

        // A: Draw full-screen tracking crosshairs
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = `rgba(59, 130, 246, ${0.12 * currentOpacity})`;
        
        ctx.beginPath();
        const crispMouseX = Math.floor(curX) + 0.5;
        const crispMouseY = Math.floor(curY) + 0.5;
        
        // Vertical cursor tracking line
        ctx.moveTo(crispMouseX, 0);
        ctx.lineTo(crispMouseX, height);
        
        // Horizontal cursor tracking line
        ctx.moveTo(0, crispMouseY);
        ctx.lineTo(width, crispMouseY);
        ctx.stroke();

        // B: Technical axis tick markers on the screen edges
        ctx.fillStyle = `rgba(59, 130, 246, ${0.3 * currentOpacity})`;
        ctx.font = "9px Geist Mono, ui-monospace, monospace";
        ctx.textAlign = "center";
        
        // Top edge horizontal X marker
        ctx.fillText(`${Math.round(curX)}px`, crispMouseX, 15);
        // Left edge vertical Y marker
        ctx.textAlign = "left";
        ctx.fillText(`${Math.round(curY)}px`, 10, crispMouseY - 4);

        // C: Subtle glowing Amber Circle at the coordinate intersection
        const microGlowPulse = 0.95 + 0.05 * Math.sin(time * 8); // technical micro-jitter pulse
        
        // Outer radiant amber glow
        const radialGlow = ctx.createRadialGradient(curX, curY, 2, curX, curY, 15);
        radialGlow.addColorStop(0, `rgba(245, 158, 11, ${0.28 * currentOpacity * microGlowPulse})`);
        radialGlow.addColorStop(0.5, `rgba(245, 158, 11, ${0.06 * currentOpacity})`);
        radialGlow.addColorStop(1, "rgba(245, 158, 11, 0)");
        
        ctx.fillStyle = radialGlow;
        ctx.beginPath();
        ctx.arc(curX, curY, 15, 0, Math.PI * 2);
        ctx.fill();

        // Inner precise amber cursor core
        ctx.fillStyle = `rgba(255, 140, 0, ${0.85 * currentOpacity})`;
        ctx.beginPath();
        ctx.arc(curX, curY, 2, 0, Math.PI * 2);
        ctx.fill();

        // Precise technical ticks around the cursor intersection
        ctx.strokeStyle = `rgba(245, 158, 11, ${0.35 * currentOpacity})`;
        ctx.beginPath();
        ctx.moveTo(curX - 8, curY);
        ctx.lineTo(curX - 4, curY);
        
        ctx.moveTo(curX + 4, curY);
        ctx.lineTo(curX + 8, curY);
        
        ctx.moveTo(curX, curY - 8);
        ctx.lineTo(curX, curY - 4);
        
        ctx.moveTo(curX, curY + 4);
        ctx.lineTo(curX, curY + 8);
        ctx.stroke();

        // D: Digital coordinate readout text in glowing amber (30% opacity target)
        const displayX = Math.round(curX).toString().padStart(4, "0");
        const displayY = Math.round(curY).toString().padStart(4, "0");
        const coordinateText = `X: ${displayX}  Y: ${displayY}`;

        ctx.font = "10px Geist Mono, ui-monospace, SFMono-Regular, Consolas, monospace";
        ctx.fillStyle = `rgba(245, 158, 11, ${0.3 * currentOpacity})`;
        ctx.textAlign = "left";
        ctx.textBaseline = "bottom";
        
        // Render offset to prevent overlapping cursor elements
        ctx.fillText(coordinateText, curX + 12, curY - 10);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Initiate loop
    render();

    // Clean up event listeners and frames on unmount
    return () => {
      isComponentMounted = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [minorSpacing, majorSpacing, pulseSpeed]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#0A0A0C]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block w-full h-full"
      />
    </div>
  );
};

export default CanvasGridBackground;

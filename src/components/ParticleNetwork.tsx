"use client";
import React, { useRef, useEffect, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  category: "growth" | "ai" | "synergy";
  size: number;
  id: string;
}

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const animationIdRef = useRef<number>();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles with reduced count for performance
    const initParticles = () => {
      const newParticles: Particle[] = [];
      // Reduced from 80 to 50 particles for better performance
      const particleCount = 50;

      for (let i = 0; i < particleCount; i++) {
        const category =
          Math.random() < 0.3
            ? "growth"
            : Math.random() < 0.6
              ? "ai"
              : "synergy";
        newParticles.push({
          id: `particle-${i}`,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1.5, // Reduced velocity for smoother animation
          vy: (Math.random() - 0.5) * 1.5,
          category,
          size: category === "synergy" ? 3 : 2,
        });
      }

      particlesRef.current = newParticles;
    };

    initParticles();

    // Mouse move handler with throttling
    let lastMouseUpdate = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastMouseUpdate < 16) return; // ~60fps throttling

      const rect = canvas.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      lastMouseUpdate = now;
    };

    canvas.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Optimized animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update particles with simplified physics
      for (const particle of particlesRef.current) {
        // Simplified mouse interaction
        const dx = mousePos.x - particle.x;
        const dy = mousePos.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 120) { // Reduced interaction radius
          const force = (120 - distance) / 120;
          particle.vx += (dx / distance) * force * 0.005; // Reduced force
          particle.vy += (dy / distance) * force * 0.005;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary check with damping
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -0.9;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -0.9;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }

        // Add slight damping for stability
        particle.vx *= 0.999;
        particle.vy *= 0.999;
      }

      // Optimized connection drawing with reduced distance
      for (let i = 0; i < particlesRef.current.length; i++) {
        const particle = particlesRef.current[i];
        // Only check every 3rd particle for connections to reduce calculations
        if (i % 3 !== 0) continue;

        for (let j = i + 3; j < particlesRef.current.length; j += 2) {
          const otherParticle = particlesRef.current[j];
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) { // Reduced connection distance
            const alpha = 0.15 * (1 - distance / 80);

            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 1;

            // Simplified color logic
            if (particle.category === "synergy" || otherParticle.category === "synergy") {
              ctx.strokeStyle = `rgba(255, 107, 74, ${alpha * 1.5})`;
            }

            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        }
      }

      // Draw particles with simplified effects
      for (const particle of particlesRef.current) {
        let color = "rgba(255, 255, 255, 0.8)";
        if (particle.category === "growth") {
          color = "rgba(52, 168, 138, 0.9)";
        } else if (particle.category === "ai") {
          color = "rgba(30, 58, 138, 0.9)";
        } else if (particle.category === "synergy") {
          color = "rgba(255, 107, 74, 1)";
        }

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Simplified glow effect only for synergy particles
        if (particle.category === "synergy") {
          ctx.shadowColor = color;
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    // Delay initial animation to not block render
    setTimeout(() => {
      animate();
    }, 100);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [isClient, mousePos]);

  if (!isClient) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-midnight-blue/20 via-forest-green/10 to-coral-red/20" />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-0 animate-in fade-in duration-1000"
      style={{ background: "transparent" }}
    />
  );
}

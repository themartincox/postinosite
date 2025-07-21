"use client";
import React, { useRef, useEffect, useMemo, useState, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  baseOpacity: number;
  color: {
    r: number;
    g: number;
    b: number;
  };
  pulsePhase: number;
  pulseSpeed: number;
}

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Enhanced particle configuration for more engagement
  const config = useMemo(() => ({
    particleCount: 45, // Increased for more visual impact
    maxDistance: 150,
    speed: 0.4,
    particleSize: 2,
    lineOpacity: 0.15, // More visible lines
    particleOpacity: 0.6, // Much more visible particles
    mouseInfluence: 80, // Mouse interaction radius
    mouseRepulsion: 0.3, // Gentle mouse repulsion effect
    colors: [
      { r: 255, g: 255, b: 255 }, // White
      { r: 244, g: 114, b: 182 }, // Coral-red
      { r: 52, g: 211, b: 153 }, // Forest-green
      { r: 96, g: 165, b: 250 }, // Blue
    ]
  }), []);

  // Mouse interaction handler
  const handleMouseMove = useCallback((event: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    setMousePos({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    });
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => setIsHovering(false), []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame: number;
    let particles: Particle[] = [];
    let time = 0;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
    };

    const createParticles = () => {
      particles = [];
      const rect = canvas.getBoundingClientRect();

      for (let i = 0; i < config.particleCount; i++) {
        const color = config.colors[Math.floor(Math.random() * config.colors.length)];
        const baseOpacity = Math.random() * config.particleOpacity + 0.2;

        particles.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: (Math.random() - 0.5) * config.speed,
          vy: (Math.random() - 0.5) * config.speed,
          size: Math.random() * config.particleSize + 1,
          opacity: baseOpacity,
          baseOpacity,
          color,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.02,
        });
      }
    };

    const updateParticles = () => {
      const rect = canvas.getBoundingClientRect();
      time += 0.016; // Approximate 60fps

      particles.forEach((particle) => {
        // Mouse interaction - gentle repulsion
        if (isHovering) {
          const dx = particle.x - mousePos.x;
          const dy = particle.y - mousePos.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < config.mouseInfluence) {
            const force = (config.mouseInfluence - distance) / config.mouseInfluence;
            const angle = Math.atan2(dy, dx);
            particle.vx += Math.cos(angle) * force * config.mouseRepulsion;
            particle.vy += Math.sin(angle) * force * config.mouseRepulsion;
          }
        }

        // Apply velocity with gentle damping
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Gentle velocity damping
        particle.vx *= 0.999;
        particle.vy *= 0.999;

        // Boundary checks with gentle bounce
        if (particle.x <= 0 || particle.x >= rect.width) {
          particle.vx *= -0.8;
          particle.x = Math.max(0, Math.min(rect.width, particle.x));
        }
        if (particle.y <= 0 || particle.y >= rect.height) {
          particle.vy *= -0.8;
          particle.y = Math.max(0, Math.min(rect.height, particle.y));
        }

        // Pulsing effect
        particle.pulsePhase += particle.pulseSpeed;
        const pulseFactor = 0.7 + 0.3 * Math.sin(particle.pulsePhase);
        particle.opacity = particle.baseOpacity * pulseFactor;
      });
    };

    const drawConnections = () => {
      // Enhanced connection drawing with dynamic opacity
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < config.maxDistance) {
            const opacity = (1 - distance / config.maxDistance) * config.lineOpacity;

            // Create gradient between particle colors
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            );

            const color1 = particles[i].color;
            const color2 = particles[j].color;

            gradient.addColorStop(0, `rgba(${color1.r}, ${color1.g}, ${color1.b}, ${opacity})`);
            gradient.addColorStop(1, `rgba(${color2.r}, ${color2.g}, ${color2.b}, ${opacity})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const drawParticles = () => {
      particles.forEach((particle, index) => {
        // Enhanced particle rendering with glow effect
        const { r, g, b } = particle.color;

        // Outer glow
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${particle.opacity * 0.5})`;

        // Main particle
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Reset shadow
        ctx.shadowBlur = 0;

        // Inner highlight
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity * 0.6})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 0.4, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const animate = () => {
      const rect = canvas.getBoundingClientRect();

      // Clear with slight trail effect for smoother animation
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, rect.width, rect.height);
      ctx.clearRect(0, 0, rect.width, rect.height);

      updateParticles();
      drawConnections();
      drawParticles();

      animationFrame = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    // Initialize
    resizeCanvas();
    createParticles();
    animate();

    // Event listeners
    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseenter", handleMouseEnter);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseenter", handleMouseEnter);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [config, mousePos, isHovering, handleMouseMove, handleMouseEnter, handleMouseLeave]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto cursor-none"
      style={{
        background: "transparent",
        willChange: "transform",
        mixBlendMode: "screen", // Creates nice blending with background
      }}
    />
  );
}

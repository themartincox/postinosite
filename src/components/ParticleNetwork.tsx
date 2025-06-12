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

  useEffect(() => {
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

    // Initialize particles
    const initParticles = () => {
      const newParticles: Particle[] = [];
      const particleCount = 80;

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
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          category,
          size: category === "synergy" ? 3 : 2,
        });
      }

      particlesRef.current = newParticles;
    };

    initParticles();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update particles directly in the ref
      for (const particle of particlesRef.current) {
        // Mouse interaction
        const dx = mousePos.x - particle.x;
        const dy = mousePos.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 150) {
          const force = (150 - distance) / 150;
          particle.vx += (dx / distance) * force * 0.01;
          particle.vy += (dy / distance) * force * 0.01;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Keep in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
      }

      // Draw connections
      for (let i = 0; i < particlesRef.current.length; i++) {
        const particle = particlesRef.current[i];
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const otherParticle = particlesRef.current[j];
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;

            // Color based on particle types
            ctx.beginPath();
            if (
              particle.category === "growth" &&
              otherParticle.category === "ai"
            ) {
              ctx.strokeStyle = `rgba(255, 107, 74, ${0.3 * (1 - distance / 100)})`;
            } else if (
              particle.category === "growth" &&
              otherParticle.category === "growth"
            ) {
              ctx.strokeStyle = `rgba(52, 168, 138, ${0.2 * (1 - distance / 100)})`;
            } else if (
              particle.category === "ai" &&
              otherParticle.category === "ai"
            ) {
              ctx.strokeStyle = `rgba(30, 58, 138, ${0.2 * (1 - distance / 100)})`;
            } else if (
              particle.category === "synergy" ||
              otherParticle.category === "synergy"
            ) {
              ctx.strokeStyle = `rgba(255, 107, 74, ${0.4 * (1 - distance / 100)})`;
              ctx.lineWidth = 2;
            }

            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const particle of particlesRef.current) {
        let color = "rgba(255, 255, 255, 0.8)";
        if (particle.category === "growth") {
          color = "rgba(52, 168, 138, 0.9)"; // forest-green
        } else if (particle.category === "ai") {
          color = "rgba(30, 58, 138, 0.9)"; // midnight-blue
        } else if (particle.category === "synergy") {
          color = "rgba(255, 107, 74, 1)"; // coral-red
        }

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow effect for synergy particles
        if (particle.category === "synergy") {
          ctx.shadowColor = color;
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mousePos]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
}

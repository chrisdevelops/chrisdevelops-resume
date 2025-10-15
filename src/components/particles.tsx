"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  baseX: number;
  baseY: number;
  offsetX: number;
  offsetY: number;
  angle: number;
  speed: number;
  opacity: number;
  opacityDirection: number;
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Pastel colors
    const pastelColors = [
      "rgba(229, 107, 186, 0.6)", // Pink
      "rgba(132, 214, 229, 0.6)", // Cyan
      "rgba(186, 148, 229, 0.6)", // Purple
      "rgba(229, 152, 124, 0.6)", // Coral
      "rgba(148, 229, 186, 0.6)", // Mint
      "rgba(229, 186, 148, 0.6)", // Peach
      "rgba(214, 148, 229, 0.6)", // Lavender
    ];

    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = 23; // 20-25 range

      for (let i = 0; i < particleCount; i++) {
        const baseX = Math.random() * canvas.offsetWidth;
        const baseY = Math.random() * canvas.offsetHeight;

        particles.push({
          x: baseX,
          y: baseY,
          baseX,
          baseY,
          size: Math.random() * 6 + 2, // 2-8px (more variety)
          color: pastelColors[Math.floor(Math.random() * pastelColors.length)],
          offsetX: Math.random() * 60 - 30, // ±30px horizontal drift
          offsetY: Math.random() * 40 - 20, // ±20px vertical drift
          angle: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.3 + 0.2, // Slower drift
          opacity: Math.random() * 0.4 + 0.4, // 0.4-0.8
          opacityDirection: Math.random() > 0.5 ? 1 : -1,
        });
      }

      particlesRef.current = particles;
    };

    const drawParticle = (particle: Particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

      // Add soft blur effect
      ctx.shadowBlur = 8;
      ctx.shadowColor = particle.color;
      ctx.fillStyle = particle.color.replace("0.6", String(particle.opacity));
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      particlesRef.current.forEach((particle) => {
        if (prefersReducedMotion) {
          // Static position with subtle scale pulse
          const scale = 0.98 + Math.sin(Date.now() / 2000) * 0.02;
          ctx.beginPath();
          ctx.arc(
            particle.baseX,
            particle.baseY,
            particle.size * scale,
            0,
            Math.PI * 2,
          );
          ctx.fillStyle = particle.color.replace("0.6", "0.6");
          ctx.fill();
        } else {
          // Animate position with sine/cosine wave
          particle.angle += particle.speed * 0.01;
          particle.x =
            particle.baseX + Math.sin(particle.angle) * particle.offsetX;
          particle.y =
            particle.baseY + Math.cos(particle.angle) * particle.offsetY;

          // Animate opacity
          particle.opacity += particle.opacityDirection * 0.002;
          if (particle.opacity >= 0.8 || particle.opacity <= 0.4) {
            particle.opacityDirection *= -1;
          }

          drawParticle(particle);
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    setCanvasSize();
    createParticles();
    animate();

    const handleResize = () => {
      setCanvasSize();
      createParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[-1]"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

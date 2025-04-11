"use client";

import React, { useEffect, useRef } from "react";

interface CanvasRevealEffectProps {
  colors?: number[][];
  dotSize?: number;
  animationSpeed?: number;
  containerClassName?: string;
}

export const CanvasRevealEffect: React.FC<CanvasRevealEffectProps> = ({
  colors = [[59, 130, 246], [139, 92, 246]], // Default blue to purple
  dotSize = 3,
  animationSpeed = 5,
  containerClassName = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      dx: number;
      dy: number;
      color: number[];
    }> = [];

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };

    const createParticles = () => {
      particles = [];
      const numberOfParticles = 50;
      
      for (let i = 0; i < numberOfParticles; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * animationSpeed,
          dy: (Math.random() - 0.5) * animationSpeed,
          color,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        particle.x += particle.dx;
        particle.y += particle.dy;

        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgb(${particle.color.join(",")})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener("resize", () => {
      resizeCanvas();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [colors, dotSize, animationSpeed]);

  return (
    <div className={containerClassName}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );
}; 
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { aboutUsContent } from "@/lib/content";
import { BrandSquare } from "@/components/landing/shared/brand-square";

function ParticleVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };
    canvas.addEventListener("mousemove", handleMouseMove);

    const COUNT = 70;
    const particles = Array.from({ length: COUNT }, (_, i) => {
      const seed = i * 1.618;
      return {
        bx: (seed * 127.1) % 1,
        by: (seed * 311.7) % 1,
        phase: seed * Math.PI * 2,
        speed: 0.4 + (seed % 0.4),
        radius: 1.2 + (seed % 2.2),
      };
    });

    let time = 0;
    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      particles.forEach((p) => {
        const flowX = Math.sin(time * p.speed * 0.4 + p.phase) * 38;
        const flowY = Math.cos(time * p.speed * 0.3 + p.phase * 0.7) * 24;

        const bx = p.bx * w;
        const by = p.by * h;
        const dx = p.bx - mx;
        const dy = p.by - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - dist * 2.8);

        const x = bx + flowX + influence * Math.cos(time + p.phase) * 36;
        const y = by + flowY + influence * Math.sin(time + p.phase) * 36;

        const pulse = Math.sin(time * p.speed + p.phase) * 0.5 + 0.5;
        const alpha = 0.08 + pulse * 0.18 + influence * 0.3;

        ctx.beginPath();
        ctx.arc(x, y, p.radius + pulse * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(26, 26, 26, ${alpha})`;
        ctx.fill();
      });

      time += 0.016;
      frameRef.current = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-auto absolute inset-0"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

const { sectionId, label, title, paragraphs, instaGallery } = aboutUsContent;

export function AboutUsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.08 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={sectionId}
      ref={sectionRef}
      className="relative overflow-hidden border-b border-foreground/10 bg-background py-16 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[min(100%,1760px)] px-4 sm:px-5 lg:px-8">
        <div className="relative mb-12 lg:mb-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-5">
              <div className="mb-6 flex items-center gap-2">
                <BrandSquare />
                <span className="text-xs font-mono uppercase tracking-[0.16em] text-muted-foreground sm:text-sm">
                  {label}
                </span>
              </div>
              <h2
                className={`font-sans text-6xl leading-[0.9] tracking-[-0.04em] transition-all duration-1000 md:text-7xl lg:text-[min(7.5rem,11vw)] ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                {title.line1}
                <br />
                <span className="text-muted-foreground">{title.line2}</span>
              </h2>
            </div>
            <div className="space-y-4 lg:col-span-7">
              {paragraphs.map((p) => (
                <p
                  key={p.slice(0, 32)}
                  className={`text-base leading-relaxed text-muted-foreground transition-all duration-1000 sm:text-lg ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>

        <p
          className="mb-4 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground sm:text-sm"
        >
          From our Instagram
        </p>
        <div
          className={`grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-5 lg:gap-3.5 ${
            isVisible ? "opacity-100" : "opacity-0"
          } transition-opacity duration-700`}
        >
          {instaGallery.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-foreground/10 bg-card shadow-sm"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 18vw, (min-width: 640px) 32vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

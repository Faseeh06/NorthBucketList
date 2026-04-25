"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    number: "01",
    title: "Guided Mountain Routes",
    description: "Itineraries shaped around road conditions, weather windows, and altitude—so you see the most without rushing the mountains.",
    stats: { value: "20+", label: "curated routes" },
  },
  {
    number: "02",
    title: "Local Guides & Support",
    description: "Team on the ground in Hunza, Skardu, and Gilgit. Drivers, fixers, and hosts who know every pass, viewpoint, and tea house.",
    stats: { value: "30+", label: "local partners" },
  },
  {
    number: "03",
    title: "Flexible Group Sizes",
    description: "Private departures, small groups, or custom corporate retreats—we match transport and lodging to how you like to travel.",
    stats: { value: "4–14", label: "typical group size" },
  },
  {
    number: "04",
    title: "Travel with Confidence",
    description: "Clear inclusions, vetted vehicles, and 24/7 trip assistance while you are on the road or trail.",
    stats: { value: "0", label: "hidden resort fees" },
  },
];

// Floating dot particles visualization
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
      ctx.scale(dpr, dpr);
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
        ctx.fillStyle = `rgba(15, 23, 42, ${alpha})`;
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

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative overflow-hidden py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[min(100%,1760px)] px-4 sm:px-5 lg:px-8">
        <div className="relative mb-14 lg:mb-20">
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="mb-6 inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
                <span className="h-px w-12 bg-foreground/30" />
                Trips & style
              </span>
              <h2
                className={`font-sans text-6xl leading-[0.9] tracking-tight transition-all duration-1000 md:text-7xl lg:text-[128px] ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                Journeys
                <br />
                <span className="text-muted-foreground">that fit you.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pb-4">
              <p
                className={`text-xl leading-relaxed text-muted-foreground transition-all delay-200 duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                From Hunza’s apricot orchards to Skardu’s cold desert—NorthBucket List plans transport, stays, and
                pacing for the Karakoram and beyond.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-12 lg:gap-6">
          <div
            className={`group relative flex min-h-[500px] overflow-hidden border border-border bg-card transition-all duration-700 lg:col-span-12 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <div className="relative flex-1 bg-card p-6 lg:p-8">
              <ParticleVisualization />
              <div className="relative z-10">
                <span className="font-mono text-sm text-muted-foreground">{features[0].number}</span>
                <h3 className="font-display mt-4 mb-6 text-3xl transition-transform duration-500 group-hover:translate-x-2 lg:text-4xl">
                  {features[0].title}
                </h3>
                <p className="mb-8 max-w-md text-lg leading-relaxed text-muted-foreground">
                  {features[0].description}
                </p>
                <div>
                  <span className="font-display text-5xl lg:text-6xl">{features[0].stats.value}</span>
                  <span className="mt-2 block font-mono text-sm text-muted-foreground">{features[0].stats.label}</span>
                </div>
              </div>
            </div>

            <div className="relative hidden w-[42%] shrink-0 overflow-hidden lg:block">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Upscaled%20Image%20%2812%29-ng3RrNnsPMJ5CrtOjcPTmhHg01W11q.png"
                alt=""
                aria-hidden
                className="absolute inset-0 h-full w-full object-cover object-center"
                style={{ transform: "scaleX(-1)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-card via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

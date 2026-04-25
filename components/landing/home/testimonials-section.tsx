"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type TestimonialsSectionProps = {
  /** e.g. "Traveler notes" on /feedbacks */
  eyebrow?: string;
  titleBefore?: string;
  /** Muted part of the title (e.g. " the trail." or " the road.") */
  titleEmphasis?: string;
};

const testimonials = [
  {
    quote: "Hunza in cherry blossom, Attabad blues, and a guide who could name every peak—we never felt like tourists on a clock.",
    author: "Ayesha M.",
    role: "Lahore",
    company: "Hunza spring",
    metric: { value: "9 days", label: "Gilgit–Hunza loop" },
  },
  {
    quote: "Skardu, Shigar, and a crisp morning at Shangrila—NorthBucket moved things when a landslide changed the day’s plan. Calm the whole time.",
    author: "Bilal K.",
    role: "Dubai",
    company: "Skardu winter",
    metric: { value: "6", label: "Extra hours flexed" },
  },
  {
    quote: "Our family trekked Fairy Meadows for the first time. Pacing, porters, and the meals at camp were better than we hoped.",
    author: "Nadia R.",
    role: "Toronto",
    company: "Fairy Meadows",
    metric: { value: "4.9★", label: "Family rating" },
  },
  {
    quote: "Naran, Saif-ul-Mulook, and a safe drive out before the monsoon—exactly the transparency we needed from abroad.",
    author: "Omar S.",
    role: "London",
    company: "Kaghan summer",
    metric: { value: "0", label: "Hidden charges" },
  },
];

export function TestimonialsSection({
  eyebrow = "Testimonials",
  titleBefore = "Stories from",
  titleEmphasis = " the trail.",
}: TestimonialsSectionProps = {}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const sectionRef = useRef<HTMLElement>(null);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("right");
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > activeIndex ? "right" : "left");
    setActiveIndex(index);
  };

  const goPrev = () => {
    setDirection("left");
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goNext = () => {
    setDirection("right");
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const activeTestimonial = testimonials[activeIndex];

  // Deterministic "noise" for background — Math.random() breaks SSR/hydration.
  const asciiCell = (row: number, col: number) => {
    const n = (row * 127 + col * 131) & 0xffff;
    const mixed = (n * 1103515245 + 12345) & 0x7fffffff;
    return (mixed % 10) > 6 ? '"' : " ";
  };

  return (
    <section
      id="traveler-stories"
      ref={sectionRef}
      className="relative py-16 lg:py-20 bg-foreground text-background overflow-hidden"
    >
      {/* ASCII background pattern */}
      <div className="absolute inset-0 font-mono text-[10px] text-background/[0.02] leading-tight overflow-hidden whitespace-pre select-none" aria-hidden>
        {Array.from({ length: 60 }, (_, i) =>
          Array.from({ length: 100 }, (_, j) => asciiCell(i, j)).join("")
        ).join("\n")}
      </div>

      <div className="relative z-10 w-full max-w-[min(100%,1760px)] mx-auto px-4 sm:px-5 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12 lg:mb-14">
          <div>
            <span className="mb-4 inline-flex items-center gap-3 text-sm font-mono text-background/40">
              <span className="h-px w-12 bg-background/20" />
              {eyebrow}
            </span>
            <h2
              className={`font-display text-4xl transition-all duration-1000 lg:text-5xl ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              {titleBefore}
              <span className="text-background/40">{titleEmphasis}</span>
            </h2>
          </div>
          
          {/* Navigation arrows */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={goPrev}
              className="p-4 border border-background/20 hover:bg-background/10 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goNext}
              className="p-4 border border-background/20 hover:bg-background/10 transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main content - Split layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Quote side */}
          <div className="lg:col-span-7 relative">
            {/* Large quote mark */}
            <span className="absolute -left-4 -top-8 text-[200px] font-display text-background/5 leading-none select-none">
              &ldquo;
            </span>
            
            <div className="relative">
              <blockquote 
                key={activeIndex}
                className="text-3xl lg:text-4xl xl:text-5xl font-display leading-[1.2] tracking-tight animate-fadeSlideIn"
              >
                {activeTestimonial.quote}
              </blockquote>

              {/* Author */}
              <div className="mt-12 flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-background/10 flex items-center justify-center">
                  <span className="font-display text-xl">
                    {activeTestimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-lg font-medium">{activeTestimonial.author}</p>
                  <p className="text-background/60">
                    {activeTestimonial.role}, {activeTestimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Metric cards side */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-6">
            {/* Active metric - Large */}
            <div 
              key={`metric-${activeIndex}`}
              className="p-10 border border-background/20 bg-background/5 animate-fadeSlideIn"
            >
              <span className="text-7xl lg:text-8xl font-display block mb-4">
                {activeTestimonial.metric.value}
              </span>
              <span className="text-lg text-background/60">
                {activeTestimonial.metric.label}
              </span>
            </div>

            {/* Progress indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className="flex-1 h-1 bg-background/20 overflow-hidden"
                >
                  <div 
                    className={`h-full bg-background transition-all duration-300 ${
                      idx === activeIndex ? "w-full" : idx < activeIndex ? "w-full opacity-50" : "w-0"
                    }`}
                    style={idx === activeIndex ? { animation: "progress 8s linear forwards" } : {}}
                  />
                </button>
              ))}
            </div>

            {/* Company list */}
            <div className="mt-4 pt-6 border-t border-background/10">
              <span className="text-xs font-mono text-background/30 uppercase tracking-widest block mb-4">
                Featured departures
              </span>
              <div className="flex flex-wrap gap-3">
                {testimonials.map((t, idx) => (
                  <button
                    key={t.company}
                    onClick={() => goTo(idx)}
                    className={`px-4 py-2 text-sm border transition-all ${
                      idx === activeIndex 
                        ? "border-background/40 text-background" 
                        : "border-background/10 text-background/40 hover:border-background/30"
                    }`}
                  >
                    {t.company}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeSlideIn {
          animation: fadeSlideIn 0.5s ease-out forwards;
        }
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}

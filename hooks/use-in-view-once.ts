"use client";

import { useEffect, useRef, useState } from "react";

type Options = { threshold?: number; rootMargin?: string };

/**
 * Fires `true` once the element intersects the viewport — useful for section enter animations
 * (same pattern as features, featured trips, testimonials).
 */
export function useInViewOnce(options: Options = {}) {
  const { threshold = 0.1, rootMargin = "0px" } = options;
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || done.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          done.current = true;
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, visible };
}

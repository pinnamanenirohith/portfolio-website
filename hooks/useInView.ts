"use client";

import { useEffect, useRef, useState } from "react";

interface Options {
  threshold?: number;
  margin?: string;
  once?: boolean;
}

export function useInView<T extends Element = HTMLDivElement>({
  threshold = 0.1,
  margin = "-80px",
  once = true,
}: Options = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin: margin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, margin, once]);

  return { ref, inView };
}

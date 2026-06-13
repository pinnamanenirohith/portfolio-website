"use client";
import { useEffect, useRef, RefObject } from "react";

/**
 * Tracks mouse position within an element and writes it as CSS custom
 * properties (--sx, --sy) directly onto the DOM node — zero React renders,
 * zero spring lag. Use in a background radial-gradient for a subtle spotlight.
 */
export function useSpotlight<T extends HTMLElement = HTMLElement>(): RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--sx", `${e.clientX - r.left}px`);
      el.style.setProperty("--sy", `${e.clientY - r.top}px`);
    };

    el.addEventListener("mousemove", onMove, { passive: true });
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return ref;
}

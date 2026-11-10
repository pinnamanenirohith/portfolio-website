"use client";

import { useRef } from "react";

/* Card wrapper with a cursor-following lime spotlight (CSS vars, no re-render). */
export default function Spot({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  const ref = useRef<HTMLElement>(null);
  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={`spot ${className}`}
      onPointerMove={(e: React.PointerEvent<HTMLElement>) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--cx", `${e.clientX - r.left}px`);
        el.style.setProperty("--cy", `${e.clientY - r.top}px`);
      }}
    >
      {children}
    </Tag>
  );
}

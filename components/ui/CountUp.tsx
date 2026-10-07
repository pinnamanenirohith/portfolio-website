"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Props {
  end: number;
  decimals?: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function CountUp({
  end,
  decimals = 0,
  duration = 1600,
  delay = 0,
  prefix = "",
  suffix = "",
  className,
  style,
}: Props) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-40px" });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const startTime = performance.now() + delay;
    const animate = (now: number) => {
      if (now < startTime) { requestAnimationFrame(animate); return; }
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      /* Ease out cubic */
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(parseFloat((eased * end).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(animate);
      else setValue(end);
    };
    requestAnimationFrame(animate);
  }, [inView, end, decimals, duration, delay]);

  return (
    <span
      ref={ref}
      className={className}
      style={{ fontVariantNumeric: "tabular-nums", ...style }}
    >
      {prefix}{value.toFixed(decimals)}{suffix}
    </span>
  );
}

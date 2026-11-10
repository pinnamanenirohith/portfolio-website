"use client";

import { useEffect, useRef, useState } from "react";

/* Scales a fixed-size A4 sheet down to fit narrow screens (print is unaffected). */
export default function FitToWidth({ children }: { children: React.ReactNode }) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const update = () => {
      const o = outer.current;
      const i = inner.current;
      if (!o || !i) return;
      const s = Math.min(1, o.clientWidth / i.offsetWidth);
      setScale(s);
      setHeight(i.offsetHeight * s);
    };
    update();
    const ro = new ResizeObserver(update);
    if (outer.current) ro.observe(outer.current);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={outer} className="fit-outer w-full" style={{ height }}>
      <div
        ref={inner}
        className="fit-inner mx-auto w-fit origin-top-left"
        style={{ transform: scale < 1 ? `scale(${scale})` : undefined }}
      >
        {children}
      </div>
    </div>
  );
}

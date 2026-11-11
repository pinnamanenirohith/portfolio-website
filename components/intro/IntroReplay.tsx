"use client";

import { useEffect, useState } from "react";

/* Re-mounts the page when the intro's curtain lifts, so the page's own
   entrance animations play in view instead of behind the intro. */
export default function IntroReplay({ children }: { children: React.ReactNode }) {
  const [k, setK] = useState(0);
  useEffect(() => {
    const replay = () => setK((n) => n + 1);
    window.addEventListener("intro:done", replay);
    return () => window.removeEventListener("intro:done", replay);
  }, []);
  return <div key={k}>{children}</div>;
}

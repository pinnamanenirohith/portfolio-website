"use client";
import { createContext, useContext, useEffect, useState, useCallback, useRef } from "react";

type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  toggle: (originX?: number, originY?: number) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const portalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const system = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    const initial = stored ?? system;
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggle = useCallback((originX = window.innerWidth / 2, originY = window.innerHeight / 2) => {
    const next: Theme = theme === "dark" ? "light" : "dark";

    /* Create portal overlay anchored at click origin */
    const overlay = document.createElement("div");
    overlay.className = "portal-overlay";
    overlay.style.setProperty("--origin-x", `${originX}px`);
    overlay.style.setProperty("--origin-y", `${originY}px`);

    /* Apply next theme's bg to the overlay before appending */
    const nextBg = next === "light" ? "#F4F0E8" : "#09090c";
    overlay.style.background = nextBg;

    document.body.appendChild(overlay);
    portalRef.current = overlay;

    /* Force reflow so animation triggers */
    void overlay.offsetWidth;

    /* Swap theme exactly as the ripple starts expanding */
    document.documentElement.setAttribute("data-theme", next);
    document.documentElement.classList.add("theme-transitioning");
    localStorage.setItem("theme", next);
    setTheme(next);

    /* Start ripple */
    overlay.classList.add("expanding");

    const onEnd = () => {
      overlay.remove();
      document.documentElement.classList.remove("theme-transitioning");
      portalRef.current = null;
    };

    overlay.addEventListener("animationend", onEnd, { once: true });

    /* Fallback cleanup */
    setTimeout(onEnd, 900);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

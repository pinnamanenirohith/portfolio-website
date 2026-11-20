"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

/* Light (default) or dark colour theme. Dark sets <html data-theme="dark">,
   which swaps the design tokens in globals.css. */
export type Theme = "light" | "dark";

type Ctx = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
  paletteOpen: boolean;
  setPaletteOpen: (o: boolean) => void;
};

const ModeContext = createContext<Ctx | null>(null);

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    if (document.documentElement.getAttribute("data-theme") === "dark") setThemeState("dark");
  }, []);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    const html = document.documentElement;
    if (t === "dark") html.setAttribute("data-theme", "dark");
    else html.removeAttribute("data-theme");
    try {
      localStorage.setItem("rohith-theme", t);
    } catch {}
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
  }, [setTheme]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const typing =
        target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      } else if (!typing && e.key === "/" && !paletteOpen) {
        e.preventDefault();
        setPaletteOpen(true);
      } else if (!typing && e.key === "~") {
        toggleTheme();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [paletteOpen, toggleTheme]);

  return (
    <ModeContext.Provider value={{ theme, setTheme, toggleTheme, paletteOpen, setPaletteOpen }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error("useMode must be used within ModeProvider");
  return ctx;
}

/* Runs before paint so a saved dark theme does not flash white. */
export const themeScript = `(function(){try{if(localStorage.getItem('rohith-theme')==='dark')document.documentElement.setAttribute('data-theme','dark');}catch(e){}})();`;

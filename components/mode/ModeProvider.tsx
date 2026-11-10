"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

export type Mode = "creative" | "dev";

type Ctx = {
  mode: Mode;
  setMode: (m: Mode) => void;
  toggleMode: () => void;
  paletteOpen: boolean;
  setPaletteOpen: (o: boolean) => void;
};

const ModeContext = createContext<Ctx | null>(null);

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<Mode>("creative");
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-mode");
    if (current === "dev") setModeState("dev");
  }, []);

  const setMode = useCallback((m: Mode) => {
    setModeState(m);
    document.documentElement.setAttribute("data-mode", m);
    try {
      localStorage.setItem("rohith-mode", m);
    } catch {}
  }, []);

  const toggleMode = useCallback(() => {
    setMode(document.documentElement.getAttribute("data-mode") === "dev" ? "creative" : "dev");
  }, [setMode]);

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
        toggleMode();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [paletteOpen, toggleMode]);

  return (
    <ModeContext.Provider value={{ mode, setMode, toggleMode, paletteOpen, setPaletteOpen }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error("useMode must be used within ModeProvider");
  return ctx;
}

/* Runs before paint so Developer Mode does not flash. */
export const modeScript = `(function(){try{var m=localStorage.getItem('rohith-mode');if(m==='dev')document.documentElement.setAttribute('data-mode','dev');else document.documentElement.setAttribute('data-mode','creative');}catch(e){document.documentElement.setAttribute('data-mode','creative');}})();`;

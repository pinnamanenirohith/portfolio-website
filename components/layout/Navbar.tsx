"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > lastY.current && y > 120);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: hidden ? -80 : 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled || mobileOpen ? "rgba(12,12,12,0.88)" : "transparent",
          backdropFilter: scrolled || mobileOpen ? "blur(20px)" : "none",
          borderBottom: scrolled || mobileOpen ? "1px solid var(--border)" : "none",
          transition: "background 0.3s ease, border-color 0.3s ease",
        }}
      >
        <nav className="container flex h-14 items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" aria-label="Back to top" className="flex items-center gap-2.5 shrink-0">
            <div
              className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold text-white"
              style={{ background: "var(--surface-2)", border: "1px solid var(--border-2)" }}
            >
              R
            </div>
            <span className="hidden sm:block text-sm font-semibold" style={{ color: "var(--fg)" }}>
              Rohith
            </span>
          </a>

          {/* Center pill nav — desktop */}
          <div
            className="hidden md:flex items-center gap-0.5 rounded-full px-1.5 py-1.5"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-3.5 py-1 text-xs font-medium rounded-full transition-colors duration-150"
                  style={{
                    color: isActive ? "#fff" : "var(--muted)",
                    background: isActive ? "var(--accent)" : "transparent",
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Right: links + hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium transition-colors duration-150"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              Resume ↗
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium transition-colors duration-150"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              GitHub ↗
            </a>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 rounded-md transition-colors duration-150"
              style={{ color: "var(--muted)" }}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-14 z-40 md:hidden"
            style={{
              background: "rgba(12,12,12,0.96)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <nav className="container py-5 flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
                    style={{
                      color: isActive ? "var(--accent)" : "var(--fg-2)",
                      background: isActive ? "var(--accent-dim)" : "transparent",
                    }}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="divider my-2" />
              <div className="flex gap-4 px-3">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-sm" style={{ color: "var(--muted)" }}>
                  Resume ↗
                </a>
                <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="text-sm" style={{ color: "var(--muted)" }}>
                  GitHub ↗
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

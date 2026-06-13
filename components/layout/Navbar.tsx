"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import type { Transition } from "framer-motion";
import { cn } from "@/lib/cn";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { useScrollProgress } from "@/hooks/useScrollProgress";

const menuTransition: Transition = { duration: 0.22, ease: [0.22, 1, 0.36, 1] };

export function Navbar() {
  const { scrollY } = useScrollProgress();
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = scrollY > 40;

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
          scrolled || mobileOpen
            ? "bg-white/90 backdrop-blur-xl border-b border-[var(--border)]"
            : "bg-transparent"
        )}
        style={scrolled || mobileOpen ? { background: "rgba(255,255,255,0.92)" } : undefined}
      >
        <nav className="container flex h-14 items-center justify-between">
          {/* Logo */}
          <a href="#" aria-label="Back to top" className="flex items-center gap-2 group">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold font-mono text-white"
              style={{ background: "linear-gradient(135deg, #2563EB, #4F46E5)" }}
            >
              {SITE.initials}
            </div>
            <span className="hidden sm:block text-sm font-semibold text-[var(--fg)]">
              Rohith
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      "relative px-3 py-1.5 text-sm rounded-md transition-colors duration-150",
                      isActive
                        ? "text-[var(--blue)] font-medium"
                        : "text-[var(--muted)] hover:text-[var(--fg)]"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-md bg-[var(--blue-bg)]"
                        style={{ zIndex: -1 }}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right: Resume + hamburger */}
          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium px-4 py-1.5 rounded-full bg-[var(--foreground)] text-white hover:bg-[var(--foreground)]/90 transition-all duration-150"
            >
              Resume
            </a>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 text-[var(--muted)] hover:text-[var(--fg)] transition-colors rounded-md"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
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
            transition={menuTransition}
            className="fixed inset-x-0 top-14 z-40 md:hidden bg-white border-b border-[var(--border)] shadow-md"
          >
            <nav className="container py-4 flex flex-col gap-0.5">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150",
                      isActive
                        ? "text-[var(--blue)] bg-[var(--blue-bg)]"
                        : "text-[var(--fg-2)] hover:bg-[var(--surface-2)]"
                    )}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

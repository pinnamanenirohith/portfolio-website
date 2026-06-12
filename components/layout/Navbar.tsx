"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export function Navbar() {
  const { scrollY } = useScrollProgress();
  const [activeSection, setActiveSection] = useState("");
  const scrolled = scrollY > 50;

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

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[var(--bg-950)]/80 backdrop-blur-xl border-b border-[var(--border)]"
          : "bg-transparent"
      )}
    >
      <nav className="container-tight flex h-16 items-center justify-between">
        {/* Logo / Initials */}
        <a
          href="#"
          className="flex items-center gap-2 group"
          aria-label="Back to top"
        >
          <div className="w-8 h-8 rounded-lg gradient-border flex items-center justify-center bg-[var(--surface)] text-sm font-bold font-mono text-[var(--foreground)] group-hover:scale-105 transition-transform">
            {SITE.initials}
          </div>
          <span className="hidden sm:block text-sm font-medium text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors">
            Rohith
          </span>
        </a>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "relative px-3 py-1.5 text-sm rounded-md transition-colors duration-200",
                    isActive
                      ? "text-[var(--foreground)]"
                      : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 bg-[var(--surface)] rounded-md"
                      style={{ zIndex: -1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium px-4 py-1.5 rounded-full border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--blue)] hover:text-[var(--blue)] transition-all duration-200"
        >
          Resume
        </a>
      </nav>
    </motion.header>
  );
}

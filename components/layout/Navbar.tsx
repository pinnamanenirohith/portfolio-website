"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MagneticButton from "@/components/ui/MagneticButton";
import { useTheme } from "@/context/ThemeContext";

const links = [
  { label: "Work",       href: "/work"        },
  { label: "Leadership", href: "/leadership"  },
  { label: "Contact",    href: "/contact"     },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme } = useTheme();
  const isLight = theme === "light";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const scrolledBg = isLight
    ? "rgba(255,255,255,0.88)"
    : "color-mix(in srgb, var(--bg) 82%, transparent)";

  const scrolledShadow = isLight && scrolled
    ? "0 1px 0 rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)"
    : "none";

  return (
    <motion.header
      initial={{ y: -14, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? scrolledBg : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        boxShadow: scrolledShadow,
      }}
    >
      <nav className="max-w-[1180px] mx-auto px-6 md:px-14 h-16 flex items-center justify-between">

        <Link
          href="/"
          className="text-sm font-semibold tracking-tight transition-opacity duration-200 hover:opacity-60"
          style={{ color: "var(--text)", fontFamily: "var(--display)" }}
        >
          Rohith<span style={{ color: "var(--text-dim)" }}>.</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              data-underline
              className="text-sm font-medium transition-colors duration-150 hover:text-[--text]"
              style={{
                color: pathname === l.href ? "var(--text)" : "var(--text-mid)",
                fontFamily: "var(--mono)",
              }}
            >
              {l.label}
            </Link>
          ))}
          <MagneticButton href="mailto:pinnamanenirohith@gmail.com" variant="primary">
            Get in touch
          </MagneticButton>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 -mr-2 cursor-pointer"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { y: 7, rotate: 45 } : { y: 0, rotate: 0 }}
            className="block w-5 h-px"
            style={{ background: "var(--text)", originX: 0.5, originY: 0.5 }}
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-px"
            style={{ background: "var(--text)" }}
          />
          <motion.span
            animate={menuOpen ? { y: -7, rotate: -45 } : { y: 0, rotate: 0 }}
            className="block w-5 h-px"
            style={{ background: "var(--text)", originX: 0.5, originY: 0.5 }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden border-b"
            style={{
              background: isLight ? "rgba(255,255,255,0.96)" : "color-mix(in srgb, var(--bg) 96%, transparent)",
              backdropFilter: "blur(20px)",
              borderColor: "var(--border)",
            }}
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-left text-base font-medium transition-colors hover:text-[--text]"
                  style={{ color: "var(--text-mid)" }}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="mailto:pinnamanenirohith@gmail.com"
                className="inline-block text-center text-sm font-semibold px-5 py-2.5 rounded-full transition-opacity hover:opacity-80"
                style={
                  isLight
                    ? { background: "var(--accent)", color: "#fff" }
                    : { background: "var(--text)", color: "var(--bg)" }
                }
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

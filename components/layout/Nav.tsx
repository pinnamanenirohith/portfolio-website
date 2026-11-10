"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { quickEmailHref } from "@/lib/email";
import { useMode } from "@/components/mode/ModeProvider";

export default function Nav() {
  const pathname = usePathname();
  const { mode, toggleMode, setPaletteOpen } = useMode();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname?.startsWith(href + "/");

  return (
    <>
      <header
        className={`no-print fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "border-b border-line bg-bg/75 backdrop-blur-xl" : "border-b border-transparent"
        }`}
      >
        <div className="wrap flex h-[68px] items-center justify-between gap-6">
          <Link href="/" className="group flex items-center gap-2.5" aria-label="rohith.dev — home">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-lime text-lime-ink">
              <span className="mono text-[13px] font-bold">R</span>
            </span>
            <span className="mono text-[14px] text-ink">
              rohith<span className="text-lime">.dev</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-3.5 py-2 text-[14px] transition-colors ${
                  isActive(item.href) ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {isActive(item.href) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-surface-2"
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  />
                )}
                <span className="relative">{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setPaletteOpen(true)}
              className="mono hidden h-9 items-center gap-2 rounded-full border border-line-2 px-3 text-[12px] text-muted transition-colors hover:border-ink hover:text-ink lg:flex"
              aria-label="Open command palette"
            >
              <span>⌘K</span>
            </button>
            <ModeToggle mode={mode} onToggle={toggleMode} />
            <Link
              href="/resume"
              aria-current={isActive("/resume") ? "page" : undefined}
              className={`btn btn-ghost hidden !h-9 !gap-1.5 !px-4 !text-[13px] sm:inline-flex ${
                isActive("/resume") ? "!border-lime text-lime" : ""
              }`}
            >
              Resume
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M8 3v8M4.5 7.5L8 11l3.5-3.5M3.5 13.5h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/contact" className="btn btn-primary hidden !h-9 !px-4 !text-[13px] sm:inline-flex">
              Hire me
            </Link>
            <button
              onClick={() => setOpen((o) => !o)}
              className="grid h-9 w-9 place-items-center rounded-full border border-line-2 md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 h-px w-4 bg-ink transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`}
                />
                <span
                  className={`absolute left-0 h-px w-4 bg-ink transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-bg pt-[68px] md:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="wrap flex h-full flex-col pb-10 pt-8" aria-label="Mobile">
              {[{ href: "/", label: "Home" }, ...nav, { href: "/certifications", label: "Certifications" }, { href: "/resume", label: "Resume" }].map(
                (item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.04, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-baseline gap-4 border-b border-line py-3.5 text-[2rem] font-medium tracking-tight"
                    >
                      <span className="mono text-[11px] text-dim">{String(i).padStart(2, "0")}</span>
                      <span className={isActive(item.href) && item.href !== "/" ? "text-lime" : ""}>{item.label}</span>
                    </Link>
                  </motion.div>
                )
              )}
              <div className="mt-auto flex flex-col gap-3">
                <button
                  onClick={() => {
                    setOpen(false);
                    setPaletteOpen(true);
                  }}
                  className="btn btn-ghost w-full justify-center"
                >
                  <span className="mono text-[13px]">$ open terminal</span>
                </button>
                <a href={quickEmailHref()} className="mono text-center text-[13px] text-muted">
                  {site.email}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ModeToggle({ mode, onToggle }: { mode: string; onToggle: () => void }) {
  const dev = mode === "dev";
  return (
    <button
      onClick={onToggle}
      className="mono flex h-9 items-center gap-2 rounded-full border border-line-2 pl-1 pr-3 text-[12px] text-muted transition-colors hover:border-ink hover:text-ink"
      aria-pressed={dev}
      aria-label={dev ? "Switch to Creative Mode" : "Switch to Developer Mode"}
      title="Toggle Developer Mode (~)"
    >
      <span className={`relative h-7 w-12 rounded-full transition-colors ${dev ? "bg-lime/20" : "bg-surface-2"}`}>
        <motion.span
          className={`absolute top-1 grid h-5 w-5 place-items-center rounded-full text-[10px] ${dev ? "bg-lime text-lime-ink" : "bg-ink text-bg"}`}
          animate={{ left: dev ? 24 : 4 }}
          transition={{ type: "spring", stiffness: 600, damping: 35 }}
        >
          {dev ? "</>" : "✦"}
        </motion.span>
      </span>
      <span className="hidden sm:inline">{dev ? "Dev" : "Creative"}</span>
    </button>
  );
}

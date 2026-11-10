"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { projects, site } from "@/lib/site";
import { useMode } from "./ModeProvider";

type Action = { id: string; label: string; hint: string; run: () => void; keywords?: string };
type Line = { kind: "in" | "out"; text: string };

export default function CommandPalette() {
  const { paletteOpen, setPaletteOpen, mode, setMode } = useMode();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [log, setLog] = useState<Line[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const close = () => {
    setPaletteOpen(false);
    setQuery("");
    setActive(0);
  };
  const go = (href: string) => {
    router.push(href);
    close();
  };

  const actions: Action[] = useMemo(
    () => [
      { id: "home", label: "cd ~", hint: "Home", run: () => go("/") },
      { id: "work", label: "ls ./projects", hint: "All work", run: () => go("/projects") },
      ...projects.map((p) => ({
        id: p.slug,
        label: `open ${p.slug}`,
        hint: p.title,
        keywords: p.title + " " + p.stack.join(" "),
        run: () => go(`/projects/${p.slug}`),
      })),
      { id: "services", label: "cat services.md", hint: "Freelance services", run: () => go("/services") },
      { id: "about", label: "cat about.md", hint: "About", run: () => go("/about") },
      { id: "exp", label: "git log --experience", hint: "Experience & leadership", run: () => go("/experience") },
      { id: "certs", label: "ls ./certifications", hint: "14 certifications", run: () => go("/certifications") },
      { id: "resume", label: "open resume.pdf", hint: "Resume", run: () => go("/resume") },
      { id: "contact", label: "./contact.sh", hint: "Start a project", run: () => go("/contact") },
      {
        id: "mode",
        label: `mode ${mode === "dev" ? "creative" : "dev"}`,
        hint: mode === "dev" ? "Switch to Creative Mode" : "Switch to Developer Mode",
        run: () => {
          setMode(mode === "dev" ? "creative" : "dev");
          close();
        },
      },
      {
        id: "email",
        label: "copy email",
        hint: site.email,
        run: () => {
          navigator.clipboard?.writeText(site.email).catch(() => {});
          setLog((l) => [...l, { kind: "in", text: "copy email" }, { kind: "out", text: `✓ ${site.email} copied to clipboard` }]);
          setQuery("");
        },
      },
      { id: "github", label: "open github", hint: "github.com/pinnamanenirohith", run: () => window.open(site.github, "_blank") },
      { id: "linkedin", label: "open linkedin", hint: "LinkedIn profile", run: () => window.open(site.linkedin, "_blank") },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mode]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter((a) => (a.label + " " + a.hint + " " + (a.keywords ?? "")).toLowerCase().includes(q));
  }, [actions, query]);

  useEffect(() => {
    if (paletteOpen) {
      setTimeout(() => inputRef.current?.focus(), 30);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [paletteOpen]);

  useEffect(() => setActive(0), [query]);

  const runText = (raw: string) => {
    const q = raw.trim().toLowerCase();
    const echo = (text: string) => setLog((l) => [...l, { kind: "in", text: raw }, { kind: "out", text }]);
    if (q === "help") {
      echo("commands: whoami · stack · status · ls · open <project> · mode dev|creative · copy email · clear");
      setQuery("");
      return;
    }
    if (q === "whoami") {
      echo(`${site.name} — ${site.role} | ${site.roleSecondary}. ${site.location}.`);
      setQuery("");
      return;
    }
    if (q === "stack") {
      echo("typescript · next.js · react · node.js · express · fastapi · mongodb · mysql · aws · github actions · nginx");
      setQuery("");
      return;
    }
    if (q === "status") {
      echo("● available — freelance projects, collaborations & opportunities");
      setQuery("");
      return;
    }
    if (q === "clear") {
      setLog([]);
      setQuery("");
      return;
    }
    if (q === "mode dev" || q === "mode creative") {
      setMode(q.endsWith("dev") ? "dev" : "creative");
      close();
      return;
    }
    if (filtered[active]) {
      filtered[active].run();
      return;
    }
    echo(`command not found: ${raw} — type "help"`);
    setQuery("");
  };

  return (
    <AnimatePresence>
      {paletteOpen && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-start justify-center px-4 pt-[12vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          <button aria-label="Close command palette" className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={close} />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            className="relative w-full max-w-[640px] overflow-hidden rounded-2xl border border-line-2 bg-surface shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)]"
            initial={{ y: 16, scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 8, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#3a3d36]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#3a3d36]" />
              <span className="h-2.5 w-2.5 rounded-full bg-lime/70" />
              <span className="mono ml-3 text-xs text-dim">rohith@dev: ~/portfolio</span>
              <kbd className="mono ml-auto rounded border border-line-2 px-1.5 py-0.5 text-[10px] text-dim">ESC</kbd>
            </div>

            {log.length > 0 && (
              <div className="mono max-h-40 space-y-1 overflow-y-auto border-b border-line px-4 py-3 text-[13px]">
                {log.map((l, i) => (
                  <p key={i} className={l.kind === "in" ? "text-ink" : "text-muted"}>
                    {l.kind === "in" ? <span className="text-lime">$ </span> : "  "}
                    {l.text}
                  </p>
                ))}
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                runText(query);
              }}
              className="flex items-center gap-2 px-4 py-3.5"
            >
              <span className="mono text-lime">$</span>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") close();
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setActive((a) => Math.min(a + 1, filtered.length - 1));
                  }
                  if (e.key === "ArrowUp") {
                    e.preventDefault();
                    setActive((a) => Math.max(a - 1, 0));
                  }
                }}
                placeholder='Type a command or search — try "help"'
                className="mono w-full bg-transparent text-[15px] text-ink placeholder:text-dim focus:outline-none"
                aria-label="Command"
                autoComplete="off"
                spellCheck={false}
              />
            </form>

            <ul className="max-h-[46vh] overflow-y-auto border-t border-line p-2" role="listbox">
              {filtered.map((a, i) => (
                <li key={a.id} role="option" aria-selected={i === active}>
                  <button
                    onMouseEnter={() => setActive(i)}
                    onClick={() => a.run()}
                    className={`flex w-full items-center justify-between gap-4 rounded-lg px-3 py-2.5 text-left transition-colors ${
                      i === active ? "bg-surface-2" : ""
                    }`}
                  >
                    <span className={`mono text-[13px] ${i === active ? "text-lime" : "text-ink"}`}>{a.label}</span>
                    <span className="truncate text-[13px] text-dim">{a.hint}</span>
                  </button>
                </li>
              ))}
              {filtered.length === 0 && (
                <li className="mono px-3 py-3 text-[13px] text-dim">No match. Press Enter to run as a command.</li>
              )}
            </ul>

            <div className="mono flex items-center gap-4 border-t border-line px-4 py-2.5 text-[11px] text-dim">
              <span>↑↓ navigate</span>
              <span>↵ run</span>
              <span className="ml-auto">~ toggles dev mode</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

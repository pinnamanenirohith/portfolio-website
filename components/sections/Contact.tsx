"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, GitBranch, Link as LinkIcon, ArrowUpRight, Send } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/cn";

type FormState = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [state, setState] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setState("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  const inputCls = cn(
    "w-full px-4 py-2.5 rounded-lg text-sm border border-[var(--border)]",
    "bg-[var(--surface-2)] text-[var(--fg)] placeholder:text-[var(--subtle)]",
    "focus:outline-none focus:border-[var(--blue)] transition-colors duration-150"
  );

  return (
    <section id="contact" ref={ref} className="section container">
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="max-w-2xl"
      >
        <motion.p className="label mb-4" variants={fadeUp}>Contact</motion.p>
        <motion.h2 className="text-title mb-3" variants={fadeUp}>
          Let&apos;s work together.
        </motion.h2>
        <motion.p className="text-[var(--muted)] mb-8" variants={fadeUp}>
          Open to engineering roles, internships, collaborations, and interesting conversations.
        </motion.p>

        {/* Quick links */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border border-[var(--border)] text-[var(--fg-2)] bg-[var(--surface)] hover:border-[var(--blue)] hover:text-[var(--blue)] transition-colors duration-150"
          >
            <Mail size={14} />
            {SITE.email}
          </a>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border border-[var(--border)] text-[var(--fg-2)] bg-[var(--surface)] hover:border-[var(--blue)] hover:text-[var(--blue)] transition-colors duration-150"
          >
            <GitBranch size={14} />
            GitHub
            <ArrowUpRight size={12} />
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border border-[var(--border)] text-[var(--fg-2)] bg-[var(--surface)] hover:border-[var(--blue)] hover:text-[var(--blue)] transition-colors duration-150"
          >
            <LinkIcon size={14} />
            LinkedIn
            <ArrowUpRight size={12} />
          </a>
        </motion.div>

        {/* Form */}
        <motion.div variants={fadeUp}>
          {state === "sent" ? (
            <div className="card p-10 flex flex-col items-center gap-3 text-center">
              <div className="w-11 h-11 rounded-full bg-[var(--green-bg)] border border-green-200 flex items-center justify-center">
                <Send size={18} className="text-[var(--green)]" />
              </div>
              <p className="font-semibold text-[var(--fg)]">Message sent!</p>
              <p className="text-sm text-[var(--muted)]">I&apos;ll get back to you soon.</p>
              <button onClick={() => setState("idle")} className="mt-1 text-xs text-[var(--blue)] hover:underline">
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card p-7 flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[var(--fg-2)]">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputCls}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[var(--fg-2)]">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputCls}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[var(--fg-2)]">Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="What&apos;s on your mind?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={cn(inputCls, "resize-none")}
                />
              </div>
              {state === "error" && (
                <p className="text-xs text-red-600">Something went wrong. Please email me directly.</p>
              )}
              <button
                type="submit"
                disabled={state === "sending"}
                className="self-start inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[var(--fg)] text-white text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                <Send size={13} />
                {state === "sending" ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}

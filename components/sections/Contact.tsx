"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, GitBranch, Link, Send } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { GlassCard } from "@/components/effects/GlassCard";
import { GradientText } from "@/components/effects/GradientText";
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

  const inputClass = cn(
    "w-full px-4 py-2.5 rounded-lg text-sm bg-[var(--surface)] border border-[var(--border)]",
    "text-[var(--foreground)] placeholder:text-[var(--muted)]",
    "focus:outline-none focus:border-[var(--blue)] transition-colors duration-200"
  );

  return (
    <section id="contact" ref={ref} className="section-padding container-tight">
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="max-w-2xl mx-auto"
      >
        <motion.p className="text-label mb-4 text-center" variants={fadeUp}>
          Contact
        </motion.p>
        <motion.h2 className="text-h1 mb-4 text-center" variants={fadeUp}>
          Let&apos;s <GradientText>work together.</GradientText>
        </motion.h2>
        <motion.p className="text-[var(--muted)] text-center mb-10" variants={fadeUp}>
          I&apos;m open to engineering roles, collaborations, and interesting conversations.
        </motion.p>

        <motion.div variants={fadeUp}>
          <GlassCard glow className="p-8">
            {state === "sent" ? (
              <div className="flex flex-col items-center gap-3 py-8 text-center">
                <div className="w-12 h-12 rounded-full bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.25)] flex items-center justify-center">
                  <Send size={20} className="text-[var(--green)]" />
                </div>
                <p className="font-semibold text-[var(--foreground)]">Message sent!</p>
                <p className="text-sm text-[var(--muted)]">I&apos;ll get back to you soon.</p>
                <button
                  onClick={() => setState("idle")}
                  className="mt-2 text-xs text-[var(--blue)] hover:underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-[var(--muted)] font-mono">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-[var(--muted)] font-mono">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-[var(--muted)] font-mono">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="What's on your mind?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={cn(inputClass, "resize-none")}
                  />
                </div>

                {state === "error" && (
                  <p className="text-xs text-red-400">Something went wrong. Please try again or email me directly.</p>
                )}

                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[var(--blue)] text-white text-sm font-medium hover:bg-[var(--blue)]/90 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send size={15} />
                  {state === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </GlassCard>
        </motion.div>

        {/* Social row */}
        <motion.div variants={fadeUp} className="flex items-center justify-center gap-6 mt-8">
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            <Mail size={16} />
            <span className="font-mono text-xs">{SITE.email}</span>
          </a>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            aria-label="GitHub"
          >
            <GitBranch size={18} />
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            aria-label="LinkedIn"
          >
            <Link size={18} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

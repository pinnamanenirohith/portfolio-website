"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, GitBranch, Link as LinkIcon, Send, ArrowUpRight } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { GlassCard } from "@/components/effects/GlassCard";
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
    "w-full px-4 py-2.5 rounded-lg text-sm bg-[var(--bg-primary)] border border-[var(--border)]",
    "text-[var(--foreground)] placeholder:text-[var(--subtle)]",
    "focus:outline-none focus:border-[var(--blue)] focus:ring-1 focus:ring-[var(--blue-mid)] transition-all duration-150"
  );

  return (
    <section id="contact" ref={ref} className="section-padding container-tight">
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="max-w-2xl mx-auto lg:max-w-3xl"
      >
        <motion.p className="text-label mb-3 text-center" variants={fadeUp}>Contact</motion.p>
        <motion.h2 className="text-h1 mb-3 text-center" variants={fadeUp}>
          Let&apos;s{" "}
          <span className="gradient-text">work together.</span>
        </motion.h2>
        <motion.p className="text-[var(--muted)] text-center mb-10" variants={fadeUp}>
          Open to engineering roles, internships, collaborations, and interesting conversations.
        </motion.p>

        {/* Quick links */}
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 mb-8">
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border border-[var(--border)] text-[var(--foreground-secondary)] hover:border-[var(--blue)] hover:text-[var(--blue)] bg-white transition-all duration-150"
          >
            <Mail size={14} />
            {SITE.email}
          </a>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border border-[var(--border)] text-[var(--foreground-secondary)] hover:border-[var(--blue)] hover:text-[var(--blue)] bg-white transition-all duration-150"
          >
            <GitBranch size={14} />
            GitHub
            <ArrowUpRight size={12} />
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border border-[var(--border)] text-[var(--foreground-secondary)] hover:border-[var(--blue)] hover:text-[var(--blue)] bg-white transition-all duration-150"
          >
            <LinkIcon size={14} />
            LinkedIn
            <ArrowUpRight size={12} />
          </a>
        </motion.div>

        <motion.div variants={fadeUp}>
          <GlassCard elevated className="p-8">
            {state === "sent" ? (
              <div className="flex flex-col items-center gap-3 py-8 text-center">
                <div className="w-12 h-12 rounded-full bg-[var(--green-light)] border border-green-200 flex items-center justify-center">
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
                    <label className="text-xs font-semibold text-[var(--foreground-secondary)]">Name</label>
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
                    <label className="text-xs font-semibold text-[var(--foreground-secondary)]">Email</label>
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
                  <label className="text-xs font-semibold text-[var(--foreground-secondary)]">Message</label>
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
                  <p className="text-xs text-red-600">Something went wrong. Please try again or email me directly.</p>
                )}

                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[var(--foreground)] text-white text-sm font-semibold hover:bg-[var(--foreground)]/90 transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5"
                >
                  <Send size={14} />
                  {state === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </GlassCard>
        </motion.div>
      </motion.div>
    </section>
  );
}

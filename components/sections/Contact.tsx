"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { SITE } from "@/lib/constants";

type FormState = "idle" | "sending" | "sent" | "error";

const socials = [
  { label: "Email",    href: `mailto:${SITE.email}`,  icon: Mail,       ext: false },
  { label: "GitHub",  href: SITE.github,               icon: ArrowUpRight, ext: true },
  { label: "LinkedIn",href: SITE.linkedin,             icon: ArrowUpRight, ext: true },
];

const inputStyle = {
  background: "var(--surface-2)",
  border: "1px solid var(--border)",
  borderRadius: "10px",
  color: "var(--fg)",
  fontSize: "0.9375rem",
  padding: "0.75rem 1rem",
  width: "100%",
  outline: "none",
  transition: "border-color 0.15s ease",
} as React.CSSProperties;

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
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
      setState(res.ok ? "sent" : "error");
      if (res.ok) setForm({ name: "", email: "", message: "" });
    } catch { setState("error"); }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "var(--bg)", paddingBlock: "clamp(5rem, 10vw, 8rem)" }}
    >
      {/* Spencer Gabor–style giant watermark word */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        style={{ zIndex: 0 }}
      >
        <span
          style={{
            fontSize: "clamp(8rem, 28vw, 22rem)",
            fontWeight: 900,
            letterSpacing: "-0.05em",
            color: "var(--fg)",
            opacity: 0.03,
            lineHeight: 1,
            whiteSpace: "nowrap",
            userSelect: "none",
          }}
        >
          CONTACT
        </span>
      </div>

      <div className="container relative" style={{ zIndex: 1 }}>
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={staggerContainer}>
          {/* ── Two-column: info left | form right ── */}
          <div className="grid lg:grid-cols-[2fr_3fr] gap-14 xl:gap-20 items-start">

            {/* Left */}
            <motion.div variants={staggerContainer} className="flex flex-col gap-6">
              <motion.p className="label" variants={fadeUp}>Contact</motion.p>

              <motion.h2 className="text-title" variants={fadeUp}>
                Let&apos;s work<br />together.
              </motion.h2>

              <motion.p variants={fadeUp} style={{ color: "var(--muted)", lineHeight: 1.75 }}>
                Open to engineering roles, internships, collaborations, and interesting conversations.
                I respond within 24 hours.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col gap-3 mt-2">
                {socials.map(({ label, href, icon: Icon, ext }) => (
                  <a
                    key={href}
                    href={href}
                    target={ext ? "_blank" : undefined}
                    rel={ext ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-3 text-sm transition-colors duration-150 group"
                    style={{ color: "var(--fg-2)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-2)")}
                  >
                    <span
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-150"
                      style={{
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        color: "var(--muted)",
                      }}
                    >
                      <Icon size={15} />
                    </span>
                    <span className="font-mono text-xs">{label === "Email" ? SITE.email : label}</span>
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: form */}
            <motion.div variants={fadeUp}>
              {state === "sent" ? (
                <div
                  className="card-dark p-12 flex flex-col items-center gap-4 text-center"
                  style={{ borderRadius: "20px" }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: "var(--green-dim)", border: "1px solid rgba(52,211,153,0.2)" }}
                  >
                    <span style={{ color: "var(--green)", fontSize: "1.25rem" }}>✓</span>
                  </div>
                  <p className="font-semibold" style={{ color: "var(--fg)" }}>Message sent!</p>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>I&apos;ll get back to you soon.</p>
                  <button
                    onClick={() => setState("idle")}
                    className="mt-1 text-xs hover:underline"
                    style={{ color: "var(--accent)" }}
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="card-dark flex flex-col gap-5"
                  style={{ padding: "2rem", borderRadius: "20px" }}
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold" style={{ color: "var(--fg-2)" }}>Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold" style={{ color: "var(--fg-2)" }}>Email</label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold" style={{ color: "var(--fg-2)" }}>Message</label>
                    <textarea
                      required
                      rows={6}
                      placeholder="What's on your mind?"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{ ...inputStyle, resize: "none" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                    />
                  </div>
                  {state === "error" && (
                    <p className="text-xs" style={{ color: "#f87171" }}>
                      Something went wrong. Please email me directly at{" "}
                      <a href={`mailto:${SITE.email}`} className="underline">{SITE.email}</a>
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={state === "sending"}
                    className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-opacity hover:opacity-80 disabled:opacity-50"
                    style={{ background: "var(--fg)", color: "#0c0c0c" }}
                  >
                    {state === "sending" ? "Sending…" : "Send message →"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

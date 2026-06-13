"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ERPDiagram from "@/components/graphics/ERPDiagram";

/* ── Chapter reveal wrapper ───────────────────────────────────────── */
function Chapter({
  number,
  label,
  children,
}: {
  number: string;
  label: string;
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      ref={ref}
      className="relative min-h-[70vh] flex flex-col justify-center py-28 md:py-36 px-6 md:px-14 border-t overflow-hidden"
      style={{ borderColor: "var(--border)" }}
    >
      {/* Ghost chapter number */}
      <span
        className="absolute right-6 md:right-14 top-1/2 -translate-y-1/2 select-none pointer-events-none font-black leading-none"
        style={{
          fontFamily: "var(--display)",
          fontSize: "clamp(12rem, 28vw, 22rem)",
          color: "rgba(255,255,255,0.018)",
          letterSpacing: "-0.05em",
        }}
      >
        {number}
      </span>

      <div className="max-w-[1180px] mx-auto w-full relative z-10">
        {/* Chapter label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-10"
        >
          <span
            className="text-[10px] tracking-[0.28em] uppercase"
            style={{ color: "var(--accent)", fontFamily: "var(--mono)" }}
          >
            {number}
          </span>
          <span className="h-px flex-1 max-w-[48px]" style={{ background: "rgba(91,124,247,0.3)" }} />
          <span
            className="text-[10px] tracking-[0.2em] uppercase"
            style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
          >
            {label}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

/* ── RBAC tier visualiser ─────────────────────────────────────────── */
const tiers = [
  { label: "Director", width: "100%", accent: true },
  { label: "Joint Director", width: "90%" },
  { label: "Secretary", width: "80%" },
  { label: "Joint Secretary", width: "70%" },
  { label: "Coordinator", width: "60%" },
  { label: "Club Lead", width: "50%" },
  { label: "Club Secretary", width: "40%" },
  { label: "Club Member", width: "30%" },
];

function RBACTiers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className="space-y-2 max-w-xl">
      {tiers.map((t, i) => (
        <motion.div
          key={t.label}
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4"
        >
          <div className="w-28 shrink-0 text-right">
            <span
              className="text-[10px] tracking-[0.1em]"
              style={{
                color: t.accent ? "var(--accent)" : "var(--text-dim)",
                fontFamily: "var(--mono)",
              }}
            >
              {t.label}
            </span>
          </div>
          <div className="flex-1">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              style={{
                width: t.width,
                height: "6px",
                borderRadius: "99px",
                background: t.accent
                  ? "linear-gradient(90deg, rgba(91,124,247,0.9), rgba(91,124,247,0.4))"
                  : "rgba(255,255,255,0.08)",
                transformOrigin: "left",
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ── Deployment pipeline ──────────────────────────────────────────── */
const pipeline = [
  { label: "Push", sub: "git push origin main" },
  { label: "CI", sub: "GitHub Actions triggers" },
  { label: "Build", sub: "npm run build" },
  { label: "SSH", sub: "Self-hosted Linux runner" },
  { label: "PM2", sub: "Process manager restarts" },
  { label: "Nginx", sub: "Reverse proxy serves" },
];

function Pipeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className="flex flex-wrap gap-3 items-center">
      {pipeline.map((p, i) => (
        <div key={p.label} className="flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center"
          >
            <div
              className="px-4 py-2.5 rounded-lg border mb-1.5"
              style={{
                borderColor: i === 0 ? "rgba(91,124,247,0.4)" : "var(--border)",
                background: i === 0 ? "rgba(91,124,247,0.08)" : "rgba(255,255,255,0.03)",
              }}
            >
              <span
                className="text-xs font-semibold"
                style={{
                  color: i === 0 ? "var(--accent)" : "var(--text)",
                  fontFamily: "var(--mono)",
                }}
              >
                {p.label}
              </span>
            </div>
            <p
              className="text-[9px] tracking-[0.08em] max-w-[80px] leading-tight"
              style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
            >
              {p.sub}
            </p>
          </motion.div>
          {i < pipeline.length - 1 && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="text-xs mb-5"
              style={{ color: "var(--text-dim)" }}
            >
              →
            </motion.span>
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Main page ────────────────────────────────────────────────────── */
export default function SACPlatformPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOp = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      <Navbar />
      <main style={{ background: "var(--bg)" }}>

        {/* ── HERO ──────────────────────────────────────────────── */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex flex-col justify-end px-6 md:px-14 pb-16 overflow-hidden"
        >
          {/* Ambient glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              inset: 0,
              background:
                "radial-gradient(ellipse 60% 50% at 65% 40%, rgba(91,124,247,0.07) 0%, transparent 70%)",
            }}
          />

          <motion.div style={{ y: heroY, opacity: heroOp }}>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-xs mb-12 transition-colors hover:text-[--text]"
                style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
              >
                ← Back to work
              </Link>

              <div className="flex flex-wrap items-center gap-3 mb-7">
                <span
                  className="text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full border"
                  style={{
                    color: "var(--accent)",
                    borderColor: "rgba(91,124,247,0.3)",
                    background: "rgba(91,124,247,0.08)",
                    fontFamily: "var(--mono)",
                  }}
                >
                  In Development
                </span>
                <span
                  className="text-[10px]"
                  style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
                >
                  Director review complete · Multi-user testing
                </span>
              </div>

              <h1
                style={{
                  fontFamily: "var(--display)",
                  fontSize: "clamp(3rem, 8vw, 7.5rem)",
                  fontWeight: 800,
                  color: "var(--text)",
                  letterSpacing: "-0.035em",
                  lineHeight: 0.92,
                }}
              >
                SAC Council
                <br />
                <span style={{ color: "rgba(240,240,235,0.28)", WebkitTextStroke: "1px rgba(240,240,235,0.2)" }}>
                  Management
                </span>
                <br />
                Platform
              </h1>

              <p
                className="max-w-lg text-base leading-relaxed mt-8"
                style={{ color: "var(--text-mid)" }}
              >
                A production-grade role-based platform built from scratch for the Student Activity
                Center — covering club management, approvals, task tracking, and multi-level
                organizational hierarchy.
              </p>

              <div className="flex flex-wrap gap-2 mt-8">
                {["Next.js", "Node.js", "Express", "MongoDB", "JWT", "GitHub Actions", "Linux", "Nginx", "PM2"].map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2.5 py-1 rounded-md border"
                    style={{ color: "var(--text-dim)", borderColor: "var(--border)", fontFamily: "var(--mono)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="absolute bottom-8 right-8 flex flex-col items-center gap-2"
            style={{ color: "var(--text-dim)" }}
          >
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="text-xs"
            >
              ↓
            </motion.span>
            <span className="text-[9px] tracking-[0.22em] uppercase" style={{ fontFamily: "var(--mono)" }}>
              read the story
            </span>
          </motion.div>
        </section>

        {/* ── CHAPTER 01: THE CHALLENGE ──────────────────────── */}
        <Chapter number="01" label="The Challenge">
          <h2
            className="mb-8"
            style={{
              fontFamily: "var(--display)",
              fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
              fontWeight: 800,
              color: "var(--text)",
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
            }}
          >
            No system existed.
            <br />
            <span style={{ color: "var(--text-dim)" }}>So I built one.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-3xl">
            <p className="text-base leading-relaxed" style={{ color: "var(--text-mid)" }}>
              The Student Activity Center at KL University coordinates hundreds of clubs,
              secretaries, coordinators, and events — all managed through informal channels.
              There was no unified system for approvals, task delegation, or internal communication
              across the organizational hierarchy.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-mid)" }}>
              As both the technical builder and a leader within SAC, I had direct domain knowledge
              of the pain points: role confusion, manual approval chains, and zero visibility
              into club-level operations from the top.
            </p>
          </div>
        </Chapter>

        {/* ── CHAPTER 02: SYSTEM DESIGN ──────────────────────── */}
        <Chapter number="02" label="System Design">
          <h2
            className="mb-12"
            style={{
              fontFamily: "var(--display)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 800,
              color: "var(--text)",
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
            }}
          >
            Full-stack, from scratch.
          </h2>
          <ERPDiagram />
          <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-3xl">
            {[
              { label: "22", detail: "MongoDB models" },
              { label: "8", detail: "Feature domains" },
              { label: "REST", detail: "API architecture" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  style={{
                    fontFamily: "var(--display)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 800,
                    color: "var(--text)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {s.label}
                </p>
                <p className="text-[11px] mt-1 tracking-[0.14em] uppercase" style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}>
                  {s.detail}
                </p>
              </div>
            ))}
          </div>
        </Chapter>

        {/* ── CHAPTER 03: RBAC ARCHITECTURE ──────────────────── */}
        <Chapter number="03" label="RBAC Architecture">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "var(--display)",
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 800,
                  color: "var(--text)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.0,
                }}
              >
                Eight tiers.
                <br />
                <span style={{ color: "var(--text-dim)" }}>Zero overlap.</span>
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-mid)" }}>
                Every role gets a scoped dashboard and scoped API access. A club member
                cannot touch approval queues. A coordinator cannot access director-level
                controls. Permissions are enforced at the middleware level on every route.
              </p>
              <div className="flex flex-wrap gap-2">
                {["JWT", "bcrypt", "Role middleware", "Scoped dashboards"].map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2.5 py-1 rounded-md border"
                    style={{ color: "var(--text-dim)", borderColor: "var(--border)", fontFamily: "var(--mono)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <RBACTiers />
          </div>
        </Chapter>

        {/* ── CHAPTER 04: SECURITY ───────────────────────────── */}
        <Chapter number="04" label="Security">
          <h2
            className="mb-10"
            style={{
              fontFamily: "var(--display)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 800,
              color: "var(--text)",
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
            }}
          >
            Hardened at every layer.
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-3xl">
            {[
              { label: "JWT Auth", detail: "Access + refresh token pair with expiry" },
              { label: "bcrypt", detail: "Password hashing with salt rounds" },
              { label: "OTP Email", detail: "Nodemailer verification on registration" },
              { label: "Helmet", detail: "HTTP headers secured on all responses" },
              { label: "Rate Limiting", detail: "Abuse protection on auth routes" },
              { label: "Joi + express-validator", detail: "Input sanitization and schema validation" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <p
                  className="text-xs font-semibold mb-1.5"
                  style={{ color: "var(--text)", fontFamily: "var(--mono)" }}
                >
                  {s.label}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>
                  {s.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </Chapter>

        {/* ── CHAPTER 05: DEPLOYMENT PIPELINE ───────────────── */}
        <Chapter number="05" label="Deployment Pipeline">
          <h2
            className="mb-10"
            style={{
              fontFamily: "var(--display)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 800,
              color: "var(--text)",
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
            }}
          >
            Push to deploy.
            <br />
            <span style={{ color: "var(--text-dim)" }}>Self-hosted.</span>
          </h2>
          <Pipeline />
          <p className="mt-10 text-base leading-relaxed max-w-xl" style={{ color: "var(--text-mid)" }}>
            GitHub Actions CI/CD pipeline runs on a self-hosted Linux runner. Every push
            to main triggers a build, SSH deploy, and PM2 restart — all behind an Nginx
            reverse proxy with SSL termination.
          </p>
        </Chapter>

        {/* ── CHAPTER 06: SCALE ──────────────────────────────── */}
        <Chapter number="06" label="Scale">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "var(--display)",
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 800,
                  color: "var(--text)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.0,
                }}
              >
                Built to grow with
                <br />
                <span style={{ color: "var(--text-dim)" }}>the institution.</span>
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-mid)" }}>
                The data model covers all operational dimensions of the SAC ecosystem — not
                just MVP features. Club management, approval workflows, task tracking, event
                coordination, communication threads, and more are all modeled and ready.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { val: "8", label: "Permission tiers" },
                { val: "22", label: "MongoDB models" },
                { val: "8", label: "Feature domains" },
                { val: "CI/CD", label: "Automated deploys" },
              ].map((s) => (
                <div key={s.label}>
                  <p
                    style={{
                      fontFamily: "var(--display)",
                      fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                      fontWeight: 800,
                      color: "var(--text)",
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {s.val}
                  </p>
                  <p
                    className="text-[10px] mt-1 tracking-[0.14em] uppercase"
                    style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Chapter>

        {/* ── CHAPTER 07: CURRENT STATUS ─────────────────────── */}
        <Chapter number="07" label="Current Status">
          <h2
            className="mb-8"
            style={{
              fontFamily: "var(--display)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 800,
              color: "var(--text)",
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
            }}
          >
            Director review done.
            <br />
            <span style={{ color: "var(--text-dim)" }}>Testing in progress.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl">
            {[
              { step: "✓", label: "Architecture", detail: "System design and data models finalized" },
              { step: "✓", label: "Director Review", detail: "Reviewed and approved by SAC Director" },
              { step: "→", label: "Multi-user Testing", detail: "Live testing with council members underway", active: true },
            ].map((s) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
              >
                <p
                  className="text-lg font-bold mb-2"
                  style={{
                    fontFamily: "var(--mono)",
                    color: s.active ? "var(--accent)" : "var(--text-dim)",
                  }}
                >
                  {s.step}
                </p>
                <p className="text-sm font-semibold mb-1" style={{ color: s.active ? "var(--text)" : "var(--text-mid)" }}>
                  {s.label}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-dim)" }}>
                  {s.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </Chapter>

      </main>
      <Footer />
    </>
  );
}

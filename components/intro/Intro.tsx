"use client";

import { useEffect, useRef, useState } from "react";
import { SIGNATURE_GLYPHS } from "./signature-data";
import { LOGO_SWASH_W, SIG_SWASH as SWASH, SIG_VB_H as VB_H, SIG_VB_W as VB_W } from "./SignatureMark";
import { site } from "@/lib/site";

/* ──────────────────────────────────────────────────────────────
   Signature intro — "Rohith Pinnamaneni" written by hand, then a
   lime flourish sweeps underneath. Then the signature shrinks and
   flies into the logo spot in the nav (SignatureMark), landing exactly
   on top of it, while the page fades in around it.

   • Plays on every full page load (first visit and every reload),
     only when <html data-intro="play">
     was set by the pre-paint script (see introScript below).
   • Click, tap, scroll or any key skips it.
   • Not shown with prefers-reduced-motion, or when printing.

   Technique: each letter is a filled shape revealed through a mask of
   thick strokes that travel along its outline from the left-most
   point — so the ink appears along the pen's path.
   ────────────────────────────────────────────────────────────── */


const MASK_W = 110; // mask stroke width (font units) — wider than the thickest letter stroke
const DRAW_FRACTION = 1; // trace the whole outline so every part of a letter is written before it settles
const START = 350; // ms before the pen starts
const WRITE = 2500; // ms to write the name
const SWASH_MS = 750;
const HOLD = 550; // ms to admire the result
const FLY = 1050; // ms for the signature to fly into the nav logo
const FLY_EASE = "cubic-bezier(0.76, 0, 0.24, 1)";
const WORD_GAP = 700; // pause between words, in outline units

const contours = SIGNATURE_GLYPHS.flatMap((g, gi) => g.contours.map((d) => ({ d, gi })));
const secondWordStart = SIGNATURE_GLYPHS.findIndex((g, i) => i > 0 && g.char === g.char.toUpperCase() && /[A-Z]/.test(g.char));

const easeInOutSine = (x: number) => -(Math.cos(Math.PI * x) - 1) / 2;
const easeOutCubic = (x: number) => 1 - Math.pow(1 - x, 3);
const clamp01 = (x: number) => Math.min(1, Math.max(0, x));

export default function Intro() {
  const [phase, setPhase] = useState<"idle" | "play" | "exit" | "done">("idle");
  const maskRefs = useRef<(SVGPathElement | null)[]>([]);
  const fullRef = useRef<SVGGElement>(null);
  const sigRef = useRef<SVGSVGElement>(null);
  const swashRef = useRef<SVGPathElement>(null);
  const nibRef = useRef<SVGGElement>(null);
  const captionRef = useRef<HTMLParagraphElement>(null);
  const skipRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const html = document.documentElement;
    if (html.dataset.intro !== "play") {
      setPhase("done");
      return;
    }
    document.body.style.overflow = "hidden";
    setPhase("play");

    /* measure */
    const paths = maskRefs.current.filter(Boolean) as SVGPathElement[];
    const lengths = paths.map((p) => p.getTotalLength());
    const draw = lengths.map((L) => L * DRAW_FRACTION);
    const starts: number[] = [];
    let acc = 0;
    contours.forEach((c, i) => {
      if (i > 0 && c.gi === secondWordStart && contours[i - 1].gi !== c.gi) acc += WORD_GAP;
      starts.push(acc);
      acc += draw[i];
    });
    const total = acc;
    paths.forEach((p, i) => {
      p.style.strokeDasharray = `${lengths[i]} ${lengths[i]}`;
      p.style.strokeDashoffset = `${lengths[i]}`;
      p.style.visibility = "visible";
    });
    const swash = swashRef.current!;
    const sL = swash.getTotalLength();
    swash.style.strokeDasharray = `${sL} ${sL}`;
    swash.style.strokeDashoffset = `${sL}`;
    swash.style.visibility = "visible";

    const nib = nibRef.current!;
    const placeNib = (p: SVGPathElement | null, at = 0) => {
      if (!p) {
        nib.style.opacity = "0";
        return;
      }
      const pt = p.getPointAtLength(at);
      nib.setAttribute("transform", `translate(${pt.x} ${pt.y})`);
      nib.style.opacity = "1";
    };

    let raf = 0;
    let exiting = false;
    let exitTimer: ReturnType<typeof setTimeout> | undefined;
    const t0 = performance.now();

    const finish = () => {
      // reveal the nav logo underneath, then remove the (identical) flown
      // signature once the logo has faded fully in, so there is no dip
      delete html.dataset.intro;
      document.body.style.overflow = "";
      exitTimer = setTimeout(() => setPhase("done"), 350);
    };

    const startExit = () => {
      if (exiting) return;
      exiting = true;
      cancelAnimationFrame(raf);
      // complete the signature instantly if skipped mid-way
      paths.forEach((p) => (p.style.strokeDashoffset = "0"));
      swash.style.strokeDashoffset = "0";
      if (fullRef.current) fullRef.current.style.opacity = "1";
      if (captionRef.current) captionRef.current.style.opacity = "1";
      nib.style.opacity = "0";

      // FLIP: move + scale the big signature onto the nav logo. Both SVGs
      // share a viewBox, so matching their boxes matches every stroke.
      const sig = sigRef.current;
      const logo = document.querySelector<SVGSVGElement>("[data-signature-mark]");
      let fly = 0;
      if (sig && logo) {
        const a = sig.getBoundingClientRect();
        const b = logo.getBoundingClientRect();
        if (a.width > 0 && b.width > 0) {
          fly = FLY;
          sig.style.transformOrigin = "0 0";
          sig.style.transition = `transform ${FLY}ms ${FLY_EASE}`;
          sig.style.transform = `translate(${b.left - a.left}px, ${b.top - a.top}px) scale(${b.width / a.width})`;
          // thicken the underline as it shrinks so it lands at the logo's weight
          swash.style.transition = `stroke-width ${FLY}ms ${FLY_EASE}`;
          swash.style.strokeWidth = String(LOGO_SWASH_W);
        }
      }
      setPhase("exit");
      // the page re-mounts now, under the still-opaque backdrop, and plays
      // its entrance while the backdrop fades and the signature flies
      window.dispatchEvent(new Event("intro:done"));
      exitTimer = setTimeout(finish, fly || 700);
    };

    const tick = (now: number) => {
      const t = now - t0;

      // 1 — write the name
      const w = clamp01((t - START) / WRITE);
      const d = easeInOutSine(w) * total;
      let pen: [SVGPathElement, number] | null = null;
      for (let i = 0; i < paths.length; i++) {
        const local = Math.min(Math.max(d - starts[i], 0), draw[i]);
        paths[i].style.strokeDashoffset = `${lengths[i] - local}`;
        if (local > 0 && local < draw[i]) pen = [paths[i], local];
      }

      // 2 — flourish
      const s = clamp01((t - START - WRITE + 120) / SWASH_MS);
      const es = easeOutCubic(s);
      swash.style.strokeDashoffset = `${sL * (1 - es)}`;
      if (s > 0 && s < 1) pen = [swash, sL * es];

      placeNib(pen ? pen[0] : null, pen ? pen[1] : 0);

      // settle letters to their crisp final shape, then the caption
      if (fullRef.current) fullRef.current.style.opacity = `${clamp01((t - START - WRITE) / 280)}`;
      if (captionRef.current) captionRef.current.style.opacity = `${clamp01((t - START - WRITE - 200) / 500)}`;

      if (t >= START + WRITE + SWASH_MS + HOLD) startExit();
      else raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const showSkip = setTimeout(() => skipRef.current?.classList.add("is-visible"), 700);
    const skip = () => startExit();
    window.addEventListener("keydown", skip);
    window.addEventListener("wheel", skip, { passive: true });
    window.addEventListener("touchmove", skip, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(showSkip);
      if (exitTimer) clearTimeout(exitTimer);
      window.removeEventListener("keydown", skip);
      window.removeEventListener("wheel", skip);
      window.removeEventListener("touchmove", skip);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`intro ${phase === "exit" ? "intro-exit" : ""}`}
      aria-hidden="true"
      onPointerDown={() => window.dispatchEvent(new KeyboardEvent("keydown"))}
    >
      <div className="intro-glow" />
      <div className="intro-stage">
        <svg ref={sigRef} viewBox={`0 0 ${VB_W} ${VB_H}`} className="intro-sig" role="img">
          <defs>
            <mask id="intro-sig-mask" maskUnits="userSpaceOnUse" x="0" y="0" width={VB_W} height={VB_H}>
              <rect width={VB_W} height={VB_H} fill="black" />
              {contours.map((c, i) => (
                <path
                  key={i}
                  ref={(el) => {
                    maskRefs.current[i] = el;
                  }}
                  d={c.d}
                  fill="none"
                  stroke="white"
                  strokeWidth={MASK_W}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ visibility: "hidden" }}
                />
              ))}
            </mask>
            <filter id="intro-nib-glow" x="-200%" y="-200%" width="500%" height="500%">
              <feGaussianBlur stdDeviation="22" />
            </filter>
          </defs>

          {/* ink revealed along the pen path */}
          <g mask="url(#intro-sig-mask)" style={{ fill: "var(--color-ink)" }}>
            {SIGNATURE_GLYPHS.map((g, i) => (
              <path key={i} d={g.contours.join("")} />
            ))}
          </g>
          {/* crisp final letters, faded in once writing completes */}
          <g ref={fullRef} style={{ fill: "var(--color-ink)", opacity: 0 }}>
            {SIGNATURE_GLYPHS.map((g, i) => (
              <path key={i} d={g.contours.join("")} />
            ))}
          </g>

          <path
            ref={swashRef}
            d={SWASH}
            fill="none"
            strokeWidth={15}
            strokeLinecap="round"
            style={{ stroke: "var(--color-lime)", visibility: "hidden" }}
          />

          <g ref={nibRef} style={{ opacity: 0 }}>
            <circle r="46" opacity="0.35" filter="url(#intro-nib-glow)" style={{ fill: "var(--color-lime)" }} />
            <circle r="15" style={{ fill: "var(--color-lime)" }} />
          </g>
        </svg>

        <p ref={captionRef} className="intro-caption" style={{ opacity: 0 }}>
          {site.role} <span>|</span> {site.roleSecondary}
        </p>
      </div>

      <button ref={skipRef} className="intro-skip" onClick={() => window.dispatchEvent(new KeyboardEvent("keydown"))} tabIndex={-1}>
        Skip intro ↵
      </button>
    </div>
  );
}

/* Pre-paint: decide whether the intro plays, before anything is drawn. */
export const introScript = `(function(){try{if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;document.documentElement.setAttribute('data-intro','play');}catch(e){}})();`;

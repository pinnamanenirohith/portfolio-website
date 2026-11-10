"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const script: { cmd: string; out: string[] }[] = [
  { cmd: "whoami", out: ["rohith — full-stack engineer · cloud-native developer"] },
  { cmd: "cat stack.txt", out: ["next.js  typescript  node.js  express", "fastapi  mongodb  mysql  aws  nginx"] },
  { cmd: "ls ./shipped", out: ["sac-council-platform/  kl-sac-website/", "safestay-ap/  smart-farming-advisor/"] },
  { cmd: "status --freelance", out: ["● open — websites · landing pages · web apps"] },
];

export default function Terminal() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0); // which command
  const [chars, setChars] = useState(0); // typed chars of current command
  const [showOut, setShowOut] = useState(false);

  useEffect(() => {
    if (reduce) {
      setStep(script.length);
      return;
    }
    if (step >= script.length) return;
    const cmd = script[step].cmd;
    let t: ReturnType<typeof setTimeout>;
    if (chars < cmd.length) {
      t = setTimeout(() => setChars((c) => c + 1), 45 + Math.random() * 55);
    } else if (!showOut) {
      t = setTimeout(() => setShowOut(true), 220);
    } else {
      t = setTimeout(() => {
        setStep((s) => s + 1);
        setChars(0);
        setShowOut(false);
      }, 650);
    }
    return () => clearTimeout(t);
  }, [step, chars, showOut, reduce]);

  return (
    <div className="card overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]" data-component="Terminal">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#3a3d36]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#3a3d36]" />
        <span className="h-2.5 w-2.5 rounded-full bg-lime/70" />
        <span className="mono ml-3 text-[11px] text-dim">rohith@dev — zsh</span>
      </div>
      <div className="mono min-h-[248px] space-y-3 p-5 text-[12.5px] leading-relaxed sm:text-[13px]" aria-label="Terminal introduction">
        {script.map((s, i) => {
          if (i > step) return null;
          const typing = i === step;
          const text = typing ? s.cmd.slice(0, chars) : s.cmd;
          return (
            <div key={s.cmd}>
              <p className="text-ink">
                <span className="text-lime">~</span> <span className="text-dim">$</span>{" "}
                <span className={typing && !showOut ? "caret" : ""}>{text}</span>
              </p>
              {(!typing || showOut) &&
                s.out.map((o) => (
                  <p key={o} className="whitespace-pre-wrap pl-4 text-muted">
                    {o}
                  </p>
                ))}
            </div>
          );
        })}
        {step >= script.length && (
          <p className="text-ink">
            <span className="text-lime">~</span> <span className="text-dim">$</span> <span className="caret" />
          </p>
        )}
      </div>
    </div>
  );
}

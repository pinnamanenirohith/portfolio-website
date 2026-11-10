"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { Check, Copy } from "@/components/ui/Icons";

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);
  return (
    <div className="group flex flex-wrap items-center gap-3">
      <a href={`mailto:${site.email}`} className="link-u text-[clamp(1.15rem,2.2vw,1.75rem)] font-medium tracking-tight text-ink">
        {site.email}
      </a>
      <button
        onClick={() => {
          navigator.clipboard?.writeText(site.email).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
          });
        }}
        className="mono flex h-8 items-center gap-1.5 rounded-full border border-line-2 px-3 text-[11px] text-muted transition-colors hover:border-lime hover:text-lime"
        aria-label="Copy email address"
      >
        {copied ? <Check /> : <Copy />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

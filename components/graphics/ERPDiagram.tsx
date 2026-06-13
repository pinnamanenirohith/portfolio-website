const tiers = [
  { label: "Director", w: "100%" },
  { label: "Deputy Director", w: "90%" },
  { label: "Secretary", w: "80%" },
  { label: "Joint Secretary", w: "70%" },
  { label: "Treasurer", w: "60%" },
  { label: "Club Lead", w: "50%" },
  { label: "Team Lead", w: "40%" },
  { label: "Club Member", w: "30%" },
];

const layers = [
  { name: "Browser / Client", sub: "Next.js · React", accent: "#60a5fa", bg: "rgba(59,130,246,0.07)" },
  { name: "Nginx", sub: "Reverse Proxy · SSL", accent: "#818cf8", bg: "rgba(99,102,241,0.07)" },
  { name: "Express API", sub: "Helmet · Rate Limit · Joi", accent: "#a78bfa", bg: "rgba(139,92,246,0.07)" },
  { name: "JWT Auth", sub: "Access + Refresh · bcrypt · OTP", accent: "#34d399", bg: "rgba(52,211,153,0.07)" },
  { name: "MongoDB", sub: "22 models · 8 feature areas", accent: "#4ade80", bg: "rgba(74,222,128,0.07)" },
];

const features = ["Tasks", "Projects", "Events", "Approvals", "Academics", "Clubs", "Hierarchy", "Comms"];

export default function ERPDiagram() {
  return (
    <div
      className="rounded-2xl overflow-hidden select-none border border-white/[0.08]"
      style={{ background: "#0d1117" }}
    >
      {/* Header bar */}
      <div
        className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06]"
        style={{ background: "rgba(255,255,255,0.02)" }}
      >
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span
            className="text-xs text-zinc-400"
            style={{ fontFamily: "var(--mono)" }}
          >
            Student Council ERP
          </span>
        </div>
        <span
          className="text-[10px] text-zinc-600 bg-zinc-800/60 px-2 py-0.5 rounded-full"
          style={{ fontFamily: "var(--mono)" }}
        >
          Active Pilot
        </span>
      </div>

      {/* Main content: two columns */}
      <div className="grid grid-cols-[1fr_1fr] divide-x divide-white/[0.05]">
        {/* Left: RBAC tiers */}
        <div className="p-5">
          <p
            className="text-[10px] text-zinc-500 mb-4 tracking-widest uppercase"
            style={{ fontFamily: "var(--mono)" }}
          >
            Permission Tiers
          </p>
          <div className="space-y-2">
            {tiers.map((t, i) => (
              <div key={t.label} className="flex items-center gap-2">
                <div
                  className="h-4 rounded-sm flex-shrink-0"
                  style={{
                    width: t.w,
                    background: `rgba(59,130,246,${0.9 - i * 0.09})`,
                    maxWidth: "100%",
                  }}
                />
                <span
                  className="text-[9px] text-zinc-500 whitespace-nowrap"
                  style={{ fontFamily: "var(--mono)" }}
                >
                  {t.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Architecture stack */}
        <div className="p-5">
          <p
            className="text-[10px] text-zinc-500 mb-4 tracking-widest uppercase"
            style={{ fontFamily: "var(--mono)" }}
          >
            Architecture
          </p>
          <div className="space-y-1.5">
            {layers.map((l, i) => (
              <div key={l.name}>
                <div
                  className="px-3 py-2 rounded-md"
                  style={{
                    background: l.bg,
                    borderLeft: `2px solid ${l.accent}`,
                  }}
                >
                  <p
                    className="text-[11px] text-zinc-200"
                    style={{ fontFamily: "var(--mono)" }}
                  >
                    {l.name}
                  </p>
                  <p
                    className="text-[9px] text-zinc-500 mt-0.5"
                    style={{ fontFamily: "var(--mono)" }}
                  >
                    {l.sub}
                  </p>
                </div>
                {i < layers.length - 1 && (
                  <div className="flex justify-center my-1">
                    <div className="w-px h-2.5 bg-zinc-700" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature areas */}
      <div className="border-t border-white/[0.05] p-5">
        <p
          className="text-[10px] text-zinc-500 mb-3 tracking-widest uppercase"
          style={{ fontFamily: "var(--mono)" }}
        >
          8 Feature Areas
        </p>
        <div className="grid grid-cols-4 gap-1.5">
          {features.map((f) => (
            <div
              key={f}
              className="px-1.5 py-1.5 rounded text-center text-[9px] text-zinc-400"
              style={{
                fontFamily: "var(--mono)",
                background: "rgba(59,130,246,0.07)",
                border: "1px solid rgba(59,130,246,0.13)",
              }}
            >
              {f}
            </div>
          ))}
        </div>
      </div>

      {/* Stats footer */}
      <div className="grid grid-cols-3 divide-x divide-white/[0.05] border-t border-white/[0.05]">
        {[
          { val: "22", label: "DB Models" },
          { val: "6", label: "Core Team" },
          { val: "20–40", label: "Clubs" },
        ].map((s) => (
          <div key={s.label} className="py-4 text-center">
            <p
              className="text-lg font-bold text-white"
              style={{ fontFamily: "var(--mono)" }}
            >
              {s.val}
            </p>
            <p
              className="text-[9px] text-zinc-500 mt-0.5 tracking-widest uppercase"
              style={{ fontFamily: "var(--mono)" }}
            >
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ERPDiagram() {
  const tiers = [
    { label: "Director", color: "#1e40af" },
    { label: "Deputy Director", color: "#1d4ed8" },
    { label: "Secretary", color: "#2563eb" },
    { label: "Joint Secretary", color: "#3b82f6" },
    { label: "Treasurer", color: "#60a5fa" },
    { label: "Club Lead", color: "#93c5fd" },
    { label: "Team Lead", color: "#bfdbfe" },
    { label: "Club Member", color: "#dbeafe" },
  ];

  const features = [
    "Tasks", "Projects", "Events",
    "Approvals", "Academics", "Clubs",
    "Hierarchy", "Comms",
  ];

  return (
    <div className="relative rounded-2xl bg-gradient-to-br from-blue-950 to-blue-900 p-6 overflow-hidden select-none">
      {/* Background grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#60a5fa 1px, transparent 1px), linear-gradient(90deg, #60a5fa 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Title */}
      <div className="relative mb-5">
        <p className="text-xs font-mono text-blue-400 mb-1">Architecture</p>
        <p className="text-white font-semibold text-lg">Student Council ERP</p>
      </div>

      {/* Permission tiers */}
      <div className="relative mb-5">
        <p className="text-xs text-blue-400 font-mono mb-2">8 Permission Tiers</p>
        <div className="space-y-1">
          {tiers.map((t, i) => (
            <div key={t.label} className="flex items-center gap-2">
              <div
                className="h-5 rounded"
                style={{
                  width: `${100 - i * 9}%`,
                  backgroundColor: t.color,
                  opacity: 0.9,
                }}
              />
              <span className="text-xs text-blue-200 whitespace-nowrap shrink-0">
                {t.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Feature grid */}
      <div className="relative">
        <p className="text-xs text-blue-400 font-mono mb-2">8 Feature Areas</p>
        <div className="grid grid-cols-4 gap-1.5">
          {features.map((f) => (
            <div
              key={f}
              className="rounded-md px-2 py-1.5 text-center text-xs font-medium text-blue-100"
              style={{ background: "rgba(96,165,250,0.15)", border: "1px solid rgba(96,165,250,0.2)" }}
            >
              {f}
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="relative mt-4 flex gap-4">
        {[
          { val: "22", label: "Models" },
          { val: "6", label: "Team" },
          { val: "20–40", label: "Clubs" },
        ].map((s) => (
          <div key={s.label} className="flex-1 rounded-lg p-2.5 text-center" style={{ background: "rgba(96,165,250,0.1)" }}>
            <p className="text-white font-bold text-lg leading-none">{s.val}</p>
            <p className="text-blue-300 text-xs mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FarmingCard() {
  const steps = [
    { icon: "💬", label: "User Query", desc: "Natural language input" },
    { icon: "🧠", label: "NLP Engine", desc: "Watson intent detection" },
    { icon: "🌿", label: "Dialog Tree", desc: "Entities & conditions" },
    { icon: "📊", label: "Response", desc: "Crop / weather guidance" },
  ];

  return (
    <div className="relative rounded-2xl bg-gradient-to-br from-emerald-900 to-teal-900 p-6 overflow-hidden select-none">
      {/* Background dots */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#34d399 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative">
        <p className="text-xs font-mono text-emerald-400 mb-1">IBM Watson Assistant</p>
        <p className="text-white font-semibold text-lg mb-6">Smart Farming Advisor</p>

        {/* Flow */}
        <div className="space-y-3">
          {steps.map((s, i) => (
            <div key={s.label} className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                style={{ background: "rgba(52,211,153,0.15)", border: "1px solid rgba(52,211,153,0.25)" }}
              >
                {s.icon}
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-medium">{s.label}</p>
                <p className="text-emerald-300 text-xs">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="absolute left-[52px] mt-10 w-px h-3 bg-emerald-700" style={{ position: "relative", left: "auto", marginLeft: "-2.5rem", marginTop: "0.25rem" }} />
              )}
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {["Intents", "Entities", "Dialog Nodes", "NLP", "IBM Cloud"].map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-md text-emerald-200 font-medium"
              style={{ background: "rgba(52,211,153,0.12)", border: "1px solid rgba(52,211,153,0.2)" }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 p-3 rounded-xl" style={{ background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.15)" }}>
          <p className="text-xs text-emerald-300 font-mono">
            &ldquo;What crops suit clay soil in July?&rdquo;
          </p>
          <p className="text-xs text-white mt-1.5">
            Based on season & soil type, consider rice or maize...
          </p>
        </div>
      </div>
    </div>
  );
}

const flow = [
  { label: "User Query", sub: "Natural language input", accent: "#34d399" },
  { label: "NLP Engine", sub: "Watson intent detection", accent: "#6ee7b7" },
  { label: "Dialog Tree", sub: "Entities · conditions · nodes", accent: "#a7f3d0" },
  { label: "Response", sub: "Crop / weather guidance", accent: "#d1fae5" },
];

const tags = ["Intents", "Entities", "Dialog Nodes", "NLP", "IBM Cloud"];

export default function FarmingCard() {
  return (
    <div
      className="rounded-2xl overflow-hidden select-none border border-white/[0.08]"
      style={{ background: "#0d1a14" }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06]"
        style={{ background: "rgba(255,255,255,0.02)" }}
      >
        <span
          className="text-xs text-zinc-400"
          style={{ fontFamily: "var(--mono)" }}
        >
          IBM Watson Assistant
        </span>
        <span
          className="text-[10px] text-emerald-600 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-900"
          style={{ fontFamily: "var(--mono)" }}
        >
          IBM SkillsBuild
        </span>
      </div>

      <div className="p-5">
        <p className="text-white font-semibold mb-5">Smart Farming Advisor</p>

        {/* NLP flow */}
        <div className="space-y-2">
          {flow.map((f, i) => (
            <div key={f.label} className="flex items-start gap-3">
              <div className="flex flex-col items-center mt-1">
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: f.accent }}
                />
                {i < flow.length - 1 && (
                  <div
                    className="w-px flex-1 mt-1"
                    style={{
                      height: "28px",
                      background: "rgba(52,211,153,0.2)",
                    }}
                  />
                )}
              </div>
              <div className="pb-2">
                <p
                  className="text-xs text-zinc-200"
                  style={{ fontFamily: "var(--mono)" }}
                >
                  {f.label}
                </p>
                <p
                  className="text-[10px] text-zinc-500 mt-0.5"
                  style={{ fontFamily: "var(--mono)" }}
                >
                  {f.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Sample exchange */}
        <div
          className="mt-5 p-3.5 rounded-xl"
          style={{
            background: "rgba(52,211,153,0.05)",
            border: "1px solid rgba(52,211,153,0.12)",
          }}
        >
          <p
            className="text-[10px] text-emerald-400"
            style={{ fontFamily: "var(--mono)" }}
          >
            &ldquo;What crops suit clay soil in July?&rdquo;
          </p>
          <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
            Based on season &amp; soil type, consider rice or maize — both
            thrive in high-moisture clay during the kharif season.
          </p>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span
              key={t}
              className="text-[10px] px-2 py-1 rounded-md text-emerald-400"
              style={{
                fontFamily: "var(--mono)",
                background: "rgba(52,211,153,0.07)",
                border: "1px solid rgba(52,211,153,0.12)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

import type { Project } from "@/lib/site";

/* Stylised, code-built illustrations for each project.
   They depict each product's structure, not real screenshots. */

export default function ProjectVisual({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <div
      className={`relative h-full w-full overflow-hidden bg-[radial-gradient(120%_90%_at_80%_0%,#22281a_0%,#141613_45%,#0f100e_100%)] ${
        large ? "min-h-[320px]" : ""
      }`}
      aria-hidden
    >
      <div className="grid-bg absolute inset-0 opacity-40" />
      {project.visual === "website" && <Website />}
      {project.visual === "safestay" && <SafeStay />}
      {project.visual === "chat" && <Chat />}
    </div>
  );
}

function Website() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-[7%]">
      <div className="w-full max-w-[560px] overflow-hidden rounded-xl border border-line-2 bg-bg shadow-2xl">
        <div className="flex items-center gap-2 border-b border-line bg-surface px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-[#3a3d36]" />
          <span className="h-2 w-2 rounded-full bg-[#3a3d36]" />
          <span className="h-2 w-2 rounded-full bg-[#3a3d36]" />
          <span className="mono ml-2 flex-1 truncate rounded bg-bg px-2 py-0.5 text-[10px] text-muted">
            🔒 sac.kluniversity.in
          </span>
        </div>
        <div className="p-4 sm:p-5">
          <div className="mb-5 flex items-center justify-between">
            <span className="h-2.5 w-14 rounded bg-ink/80" />
            <div className="flex gap-2">
              {["Clubs", "Domains", "News"].map((l) => (
                <span key={l} className="mono text-[9px] text-dim">
                  {l}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-1.5 h-4 w-3/4 rounded bg-ink/90" />
          <div className="mb-4 h-4 w-1/2 rounded bg-lime" />
          <div className="mb-5 h-2 w-2/3 rounded bg-surface-2" />
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="rounded-md border border-line bg-surface p-2">
                <div
                  className="mb-2 aspect-[4/3] rounded"
                  style={{
                    background: i % 3 === 0 ? "linear-gradient(135deg,#bfd96b33,#bfd96b0a)" : "#1c1f1b",
                  }}
                />
                <div className="h-1.5 w-3/4 rounded bg-ink/40" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SafeStay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-[6%]">
      <div className="relative h-full w-full max-w-[560px]">
        {/* admin panel */}
        <div className="absolute left-0 top-[8%] w-[78%] overflow-hidden rounded-xl border border-line-2 bg-bg shadow-2xl">
          <div className="flex items-center justify-between border-b border-line bg-surface px-3 py-2">
            <span className="mono text-[10px] text-muted">admin · guest records</span>
            <span className="mono text-[9px] text-dim">React / Vite</span>
          </div>
          <div className="p-3">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-2 border-b border-line py-1.5 last:border-0">
                <span className="h-4 w-4 rounded-full bg-surface-2" />
                <span className="h-1.5 w-[30%] rounded bg-ink/40" />
                <span className="h-1.5 w-[18%] rounded bg-surface-2" />
                <span
                  className={`mono ml-auto rounded px-1.5 text-[8px] ${
                    i < 3 ? "bg-lime/15 text-lime" : "bg-surface-2 text-dim"
                  }`}
                >
                  {i < 3 ? "checked-in" : "pending"}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* phone */}
        <div className="absolute bottom-[4%] right-0 w-[38%] min-w-[140px] rounded-[22px] border border-line-2 bg-[#0b0c0a] p-2 shadow-2xl">
          <div className="rounded-[16px] bg-surface p-3">
            <div className="mx-auto mb-3 h-1 w-8 rounded-full bg-line-2" />
            <p className="mono mb-2 text-[9px] text-lime">SafeStay AP</p>
            <p className="mb-3 text-[11px] font-medium leading-tight text-ink">Guest check-in</p>
            {["Name", "ID", "Stay"].map((f) => (
              <div key={f} className="mb-1.5 rounded border border-line bg-bg px-2 py-1.5">
                <span className="mono text-[8px] text-dim">{f}</span>
              </div>
            ))}
            <div className="mt-2.5 rounded bg-lime py-1.5 text-center text-[9px] font-semibold text-lime-ink">Submit</div>
            <p className="mono mt-2 text-center text-[8px] text-dim">Flutter</p>
          </div>
        </div>
        <div className="mono absolute right-[40%] top-[2%] rounded-full border border-lime/30 bg-bg px-2 py-0.5 text-[9px] text-lime">
          FastAPI ⇄
        </div>
      </div>
    </div>
  );
}

function Chat() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-[7%]">
      <div className="w-full max-w-[420px] rounded-xl border border-line-2 bg-bg/90 p-4 shadow-2xl">
        <div className="mb-4 flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-lime text-[10px] text-lime-ink">✦</span>
          <span className="text-[12px] font-medium">Smart Farming Advisor</span>
          <span className="mono ml-auto text-[9px] text-dim">watson</span>
        </div>
        <div className="space-y-2.5">
          <div className="ml-auto w-[62%] rounded-2xl rounded-br-sm bg-surface-2 p-2.5">
            <div className="h-1.5 w-full rounded bg-ink/40" />
            <div className="mt-1.5 h-1.5 w-2/3 rounded bg-ink/40" />
          </div>
          <div className="flex gap-1.5">
            <span className="mono rounded bg-lime/15 px-1.5 py-0.5 text-[9px] text-lime">#crop_guidance</span>
            <span className="mono rounded bg-surface-2 px-1.5 py-0.5 text-[9px] text-muted">@crop</span>
          </div>
          <div className="w-[78%] rounded-2xl rounded-bl-sm border border-line bg-surface p-2.5">
            <div className="h-1.5 w-full rounded bg-lime/50" />
            <div className="mt-1.5 h-1.5 w-5/6 rounded bg-lime/30" />
            <div className="mt-1.5 h-1.5 w-1/2 rounded bg-lime/30" />
          </div>
          <div className="ml-auto w-[48%] rounded-2xl rounded-br-sm bg-surface-2 p-2.5">
            <div className="h-1.5 w-full rounded bg-ink/40" />
          </div>
          <div className="flex gap-1.5">
            <span className="mono rounded bg-lime/15 px-1.5 py-0.5 text-[9px] text-lime">#weather</span>
            <span className="mono rounded bg-surface-2 px-1.5 py-0.5 text-[9px] text-muted">@condition</span>
          </div>
          <div className="flex w-16 gap-1 rounded-2xl border border-line bg-surface p-2.5">
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" style={{ animationDelay: `${i * 150}ms` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* Lightweight syntax-coloured JSON/TS view, shown in Developer Mode. */

function colour(line: string) {
  const parts: React.ReactNode[] = [];
  const re = /("(?:[^"\\]|\\.)*")(\s*:)?|(\b\d+(?:\.\d+)?\b)|(\b(?:true|false|null|const|export|type)\b)|(\/\/.*$)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(line))) {
    if (m.index > last) parts.push(line.slice(last, m.index));
    if (m[1]) {
      parts.push(
        <span key={k++} className={m[2] ? "text-ink" : "text-lime"}>
          {m[1]}
        </span>
      );
      if (m[2]) parts.push(m[2]);
    } else if (m[3]) parts.push(<span key={k++} className="text-[#e3b26b]">{m[3]}</span>);
    else if (m[4]) parts.push(<span key={k++} className="text-[#9db4ff]">{m[4]}</span>);
    else if (m[5]) parts.push(<span key={k++} className="text-dim">{m[5]}</span>);
    last = re.lastIndex;
  }
  if (last < line.length) parts.push(line.slice(last));
  return parts;
}

export default function CodeBlock({
  code,
  file,
  className = "",
}: {
  code: string;
  file: string;
  className?: string;
}) {
  const lines = code.split("\n");
  return (
    <div className={`overflow-hidden rounded-2xl border border-line-2 bg-[#0e0f0d] ${className}`}>
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-[#3a3d36]" />
        <span className="h-2 w-2 rounded-full bg-[#3a3d36]" />
        <span className="h-2 w-2 rounded-full bg-lime/70" />
        <span className="mono ml-2 text-[11px] text-dim">{file}</span>
      </div>
      <pre className="mono overflow-x-auto p-4 text-[12.5px] leading-[1.7] text-muted">
        {lines.map((l, i) => (
          <div key={i} className="flex">
            <span className="mr-4 inline-block w-6 shrink-0 select-none text-right text-dim/60">{i + 1}</span>
            <span className="whitespace-pre">{colour(l)}</span>
          </div>
        ))}
      </pre>
    </div>
  );
}

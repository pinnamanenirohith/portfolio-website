import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden pt-28" data-component="NotFound">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="wrap relative">
        <p className="mono mb-6 text-[13px] text-muted">
          <span className="text-lime">~</span> $ cd {"<this page>"}
          <br />
          <span className="text-red-300/80">bash: no such file or directory</span>
        </p>
        <h1 className="display display-xl">
          4<span className="serif text-lime">0</span>4
        </h1>
        <p className="lede mt-6 max-w-[40ch]">This page doesn&apos;t exist — but plenty of others do.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-primary">
            Back home
          </Link>
          <Link href="/projects" className="btn btn-ghost">
            View work
          </Link>
        </div>
      </div>
    </section>
  );
}

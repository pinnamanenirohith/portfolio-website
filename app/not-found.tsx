import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ background: "var(--bg)" }}
    >
      <p
        className="text-8xl font-black select-none"
        style={{ color: "var(--text-dim)" }}
      >
        404
      </p>
      <h1 className="mt-4 text-2xl font-bold" style={{ color: "var(--text)" }}>
        Page not found
      </h1>
      <p className="mt-2" style={{ color: "var(--text-mid)" }}>
        This page doesn&apos;t exist or was moved.
      </p>
      <Link
        href="/"
        className="mt-8 px-6 py-3 text-sm font-semibold rounded-full transition-opacity duration-150 hover:opacity-80"
        style={{ background: "var(--text)", color: "var(--bg)" }}
      >
        Back to home
      </Link>
    </div>
  );
}

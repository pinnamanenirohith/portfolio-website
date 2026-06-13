import { personal } from "@/data/content";

export default function Footer() {
  return (
    <footer className="py-10 px-6 md:px-8 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-zinc-600">
          © 2025 Rohith Pinnamaneni
        </p>
        <div className="flex items-center gap-6">
          <a
            href={`https://${personal.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-600 hover:text-zinc-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href={`https://${personal.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-600 hover:text-zinc-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="text-sm text-zinc-600 hover:text-zinc-300 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

# rohith.dev — Portfolio of Pinnamaneni Rohith Venkata Sai

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)

> Full-Stack Engineer | Cloud-Native Developer. I build scalable web platforms, intelligent applications and cloud-native digital products that solve real-world problems.

**Live:** [rohithpinnamaneni.vercel.app](https://rohithpinnamaneni.vercel.app)

---

## Design

A premium dark, editorial portfolio with a developer-native personality.

- **Deep charcoal + muted lime** palette, film grain, subtle grid and cursor-following glow
- **Editorial type** — Inter Tight display, Instrument Serif italic accents, JetBrains Mono details
- **Creative Mode / Developer Mode** — toggle in the nav (or press `~`). Developer Mode swaps the type to monospace, outlines every component with its name, overlays a 12-column grid and replaces visuals with code views (profile, skills, architecture as TypeScript)
- **Command terminal** — press `/` or `⌘K` / `Ctrl+K` for a terminal-style palette: navigate, open case studies, copy email, switch modes, or try `help`, `whoami`, `stack`, `status`
- Masked line reveals, spotlight cards, cursor-following project previews, animated architecture flows — all respecting `prefers-reduced-motion`

## Signature intro

On a visitor's first page load each session, "Rohith Pinnamaneni" is written in a signature script with a pen-nib glow, a lime flourish sweeps underneath, and the curtain lifts to reveal the site (~5 s; click, tap, scroll or any key skips it; disabled for `prefers-reduced-motion` and for printing).

- Component: `components/intro/Intro.tsx` (timing constants at the top)
- Letter shapes: `components/intro/signature-data.ts`, generated from the Mrs Saint Delafield font (SIL OFL) by `python scripts/signature.py` — pass a different name or `.ttf` to regenerate

## Pages

| Route | Contents |
|---|---|
| `/` | Hero with live terminal · tech marquee · featured work · freelance services · expertise · leadership · awards |
| `/projects` | Editorial project index with hover previews + gallery |
| `/projects/[slug]` | Case studies: problem · solution · architecture · technologies · contribution · outcomes |
| `/services` | Business websites · landing pages · full-stack web apps · process · FAQ |
| `/about` | Story · principles · education · skills |
| `/experience` | SAC leadership timeline · internships · education · awards |
| `/certifications` | 14 credentials, filterable |
| `/contact` | Project enquiry form + direct contact |
| `/resume` | One-page A4 resume preview + **Download PDF** (`public/Rohith_Pinnamaneni_Resume.pdf`) |

Legacy URLs (`/work`, `/work/*`, `/leadership`, `/projects/sac-platform`, `/projects/smart-farming`) redirect to their new pages.

## Editing content

All content lives in **[`lib/site.ts`](lib/site.ts)** — profile, links, projects and case studies, services, experience, awards, certifications and skills. No component edits needed.

## Resume PDF (always one page)

The resume is a fixed A4 sheet (`components/resume/ResumeSheet.tsx`) fed by the `resume` object in `lib/site.ts`. After changing resume content, regenerate the downloadable PDF:

```bash
npm run dev           # in one terminal
npm run resume:pdf    # in another — writes public/Rohith_Pinnamaneni_Resume.pdf
```

The script uses your installed Chrome or Edge and **fails if the PDF is not exactly one page**, so a two-page resume can't ship by accident. Printing the /resume page from a browser (Ctrl+P) also gives one A4 page.

## Contact form

By default the form opens the visitor's email client with the enquiry pre-filled (works with no backend). To receive submissions directly, set an environment variable on Vercel:

```
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/<your-form-id>
```

The form will then POST JSON to that endpoint.

## Stack

Next.js 15 (App Router, static export) · TypeScript · Tailwind CSS v4 · Framer Motion · `next/font` · Vercel

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static output in out/
```

## License

MIT

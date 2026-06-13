# Rohith Pinnamaneni — Portfolio

Personal developer portfolio built with Next.js, Tailwind CSS, and Framer Motion.

## Stack

- **Next.js 15** (App Router, static export)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — scroll reveal + hover animations

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

Output goes to `out/` (static export — ready for any static host).

## Deploy to Vercel

### Option A — Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Next.js and sets the correct build settings.

### Option B — GitHub integration

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Leave all build settings as auto-detected defaults.
4. Click **Deploy**.

## Before going live

- Replace `github.com/YOUR_GITHUB_USERNAME` in [`data/content.ts`](data/content.ts) with your actual GitHub URL once the repo is public.
- Add a real `public/og-image.png` (1200×630) for social previews.
- Update `metadataBase` in [`app/layout.tsx`](app/layout.tsx) with your final domain.

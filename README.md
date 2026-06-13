# Rohith Pinnamaneni — Personal Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)

> Personal portfolio website showcasing my projects, experience, and skills as a Full-Stack Developer & Cloud Native Engineering student.

---

## Live Demo

🔗 **[rohith.vercel.app](https://rohith.vercel.app)** *(replace with your Vercel URL once deployed)*

---

## About

This is my personal developer portfolio — a single-page, long-scroll website built with modern web technologies. It covers my projects, work experience, certifications, and contact details, and is designed to be fast, accessible, and easy to update.

**Design philosophy:** Type-led editorial layout inspired by the Spencer Gabor aesthetic — big confident headings, generous whitespace, smooth scroll-reveal animations, and clean project cards with hover interactions.

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Name, role, tagline, and CTA buttons |
| **Work** | Student Council ERP + Smart Farming Advisor with architecture graphics |
| **About** | Bio, education, leadership, and skills grid |
| **Experience** | Career & internship timeline + certifications |
| **Contact** | Email, LinkedIn, Phone, GitHub links |

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Deployment | [Vercel](https://vercel.com/) (static export) |
| Font | Inter (Google Fonts) |

---

## Features

- **Static export** — pre-rendered HTML, no server needed, Lighthouse-optimised
- **Scroll animations** — fade-in / slide-in on scroll via Framer Motion
- **Sticky nav** — transparent on hero, solid on scroll, mobile hamburger menu
- **Project graphics** — architecture diagram cards built with pure HTML/CSS (no screenshots)
- **Fully responsive** — mobile, tablet, and desktop layouts
- **Accessible** — semantic HTML, ARIA labels, focus-visible rings, reduced-motion-safe
- **SEO ready** — OpenGraph + Twitter meta tags, structured metadata
- **Custom 404** page
- **SVG favicon**

---

## Project Structure

```
portfolio-website/
├── app/
│   ├── layout.tsx          # Root layout, metadata, OG tags
│   ├── page.tsx            # Single-page composition
│   ├── globals.css         # Tailwind imports, CSS variables
│   └── not-found.tsx       # Custom 404 page
├── components/
│   ├── graphics/
│   │   ├── ERPDiagram.tsx  # Architecture visual for ERP project
│   │   └── FarmingCard.tsx # Flow card for AI Farming project
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky minimal nav
│   │   └── Footer.tsx      # Footer
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Work.tsx        # Projects section
│   │   ├── About.tsx       # About + skills
│   │   ├── Experience.tsx  # Timeline + certifications
│   │   └── Contact.tsx     # Contact cards
│   └── ui/
│       └── FadeIn.tsx      # Scroll-reveal animation wrapper
├── data/
│   └── content.ts          # All site content in one place
├── lib/
│   └── utils.ts            # Utility functions
├── public/
│   └── favicon.svg         # SVG favicon
├── next.config.ts          # Static export config
└── README.md
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Run locally

```bash
# 1. Clone the repository
git clone https://github.com/pinnamanenirohith/portfolio-website.git
cd portfolio-website

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
```

Output is generated in the `out/` folder as static HTML — ready for any static host.

---

## Deployment

This project is deployed on **Vercel** with automatic deployments on every push to `main`.

### Deploy your own

**Option A — Vercel Dashboard (recommended)**

1. Fork this repository
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your forked repo
4. Click **Deploy** — Vercel auto-detects Next.js, no config needed

**Option B — Vercel CLI**

```bash
npm i -g vercel
vercel login
vercel --yes
```

---

## Customisation

All site content lives in a single file: [`data/content.ts`](data/content.ts)

Update your name, bio, projects, experience, skills, and contact details there — no need to touch the component files.

---

## Contact

**Pinnamaneni Rohith Venkata Sai**

- Email: [pinnamanenirohith@gmail.com](mailto:pinnamanenirohith@gmail.com)
- LinkedIn: [linkedin.com/in/rohith-venkata-sai-pinnamaneni-38807a2b2](https://www.linkedin.com/in/rohith-venkata-sai-pinnamaneni-38807a2b2/)
- GitHub: [github.com/pinnamanenirohith](https://github.com/pinnamanenirohith)

---

## License

This project is open source and available under the [MIT License](LICENSE).

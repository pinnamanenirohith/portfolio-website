import type { Metadata, Viewport } from "next";
import { Inter_Tight, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ModeProvider, modeScript } from "@/components/mode/ModeProvider";
import CommandPalette from "@/components/mode/CommandPalette";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { site } from "@/lib/site";
import Intro, { introScript } from "@/components/intro/Intro";
import IntroReplay from "@/components/intro/IntroReplay";

const interTight = Inter_Tight({ subsets: ["latin"], variable: "--font-inter-tight", display: "swap" });
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

const title = "Rohith Pinnamaneni — Full-Stack Engineer & Cloud-Native Developer";
const description =
  "Full-stack engineer building scalable web platforms, intelligent applications and cloud-native products. Available for freelance websites, landing pages and full-stack web applications.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s — Rohith Pinnamaneni" },
  description,
  keywords: [
    "Full-Stack Engineer",
    "Cloud-Native Developer",
    "Freelance Web Developer",
    "Next.js Developer",
    "Vijayawada",
    "Business Website Development",
    "Landing Page Development",
    "Web Application Development",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    title,
    description,
    url: site.url,
    siteName: "rohith.dev",
    type: "website",
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#0c0d0b",
  colorScheme: "dark",
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: `${site.role} | ${site.roleSecondary}`,
  email: `mailto:${site.email}`,
  url: site.url,
  address: { "@type": "PostalAddress", addressLocality: "Vijayawada", addressCountry: "IN" },
  alumniOf: { "@type": "CollegeOrUniversity", name: site.education.university },
  sameAs: [site.github, site.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-mode="creative"
      suppressHydrationWarning
      className={`${interTight.variable} ${instrument.variable} ${jetbrains.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: modeScript }} />
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      </head>
      <body>
        <ModeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-lime focus:px-4 focus:py-2 focus:text-lime-ink"
          >
            Skip to content
          </a>
          <Nav />
          <main id="main">
            <IntroReplay>{children}</IntroReplay>
          </main>
          <Footer />
          <CommandPalette />
          <div className="grain" aria-hidden />
          <Intro />
        </ModeProvider>
      </body>
    </html>
  );
}

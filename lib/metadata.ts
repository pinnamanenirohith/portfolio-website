import type { Metadata } from "next";
import { SITE } from "./constants";

export const siteMetadata: Metadata = {
  title: {
    default: `${SITE.name} — Portfolio`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.tagline,
  keywords: [
    "Cloud Native",
    "Full Stack Developer",
    "Next.js",
    "TypeScript",
    "Student Leader",
    "Portfolio",
    "Rohith Pinnamaneni",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: SITE.name,
    description: SITE.tagline,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

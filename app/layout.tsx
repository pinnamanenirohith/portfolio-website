import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rohith Pinnamaneni — Full-Stack Developer",
  description:
    "Full-Stack Developer & Cloud Native Engineering Student. I build scalable, production-grade web apps across the MERN stack.",
  keywords: [
    "Full-Stack Developer",
    "Cloud Native",
    "MERN Stack",
    "Next.js",
    "TypeScript",
    "Node.js",
  ],
  authors: [{ name: "Pinnamaneni Rohith Venkata Sai" }],
  openGraph: {
    title: "Rohith Pinnamaneni — Full-Stack Developer",
    description:
      "I build scalable, production-grade web apps across the MERN stack — from role-based ERPs to automated CI/CD on self-hosted infrastructure.",
    url: "https://rohith.dev",
    siteName: "Rohith Pinnamaneni",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rohith Pinnamaneni — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohith Pinnamaneni — Full-Stack Developer",
    description:
      "I build scalable, production-grade web apps across the MERN stack.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://rohith.dev"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Rohith Pinnamaneni — Full-Stack Developer & Systems Builder",
  description:
    "Full-Stack Developer & Cloud Native Engineering Student building production-grade web systems, role-based ERPs, and leading KL University's Student Council.",
  keywords: [
    "Full-Stack Developer",
    "Cloud Native",
    "MERN Stack",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Student Council",
    "ERP",
  ],
  authors: [{ name: "Pinnamaneni Rohith Venkata Sai" }],
  openGraph: {
    title: "Rohith Pinnamaneni — Full-Stack Developer & Systems Builder",
    description:
      "Building production-grade web systems, role-based ERPs, and leading institutional-scale execution.",
    url: "https://rohith.dev",
    siteName: "Rohith Pinnamaneni",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rohith Pinnamaneni" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohith Pinnamaneni — Full-Stack Developer",
    description: "Building production-grade web systems across the MERN stack.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://rohith.dev"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

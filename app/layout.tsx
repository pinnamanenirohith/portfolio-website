import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";

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

/* Inline script prevents flash of incorrect theme before React hydrates */
const noFlashScript = `
(function(){
  try{
    var s=localStorage.getItem('theme');
    var sys=window.matchMedia('(prefers-color-scheme:light)').matches?'light':'dark';
    var t=s||sys;
    document.documentElement.setAttribute('data-theme',t);
  }catch(e){}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml" />
        {/* Must run synchronously before first paint to prevent FOCT */}
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      </head>
      <body>
        <ThemeProvider>
          {children}
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}

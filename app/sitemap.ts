import type { MetadataRoute } from "next";
import { projects, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/projects", "/services", "/about", "/experience", "/certifications", "/contact", "/resume"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}/`.replace(/\/\/$/, "/"), priority: p === "" ? 1 : 0.8 })),
    ...projects.map((p) => ({ url: `${site.url}/projects/${p.slug}/`, priority: 0.7 })),
  ];
}

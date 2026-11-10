// Generates public/Rohith_Pinnamaneni_Resume.pdf from the /resume page
// using a locally installed Chrome or Edge (headless). No extra deps.
//
//   npm run dev            (in another terminal)
//   npm run resume:pdf     (or: npm run resume:pdf -- http://localhost:3000/resume/)

import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const url = process.argv[2] || "http://localhost:3000/resume/";
const out = resolve("public/Rohith_Pinnamaneni_Resume.pdf");

const candidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].filter(Boolean);

const browser = candidates.find((p) => existsSync(p));
if (!browser) {
  console.error("No Chrome/Edge found. Set CHROME_PATH to a Chromium-based browser.");
  process.exit(1);
}

const profile = mkdtempSync(join(tmpdir(), "resume-pdf-"));
try {
  execFileSync(
    browser,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-first-run",
      `--user-data-dir=${profile}`,
      "--no-pdf-header-footer",
      "--virtual-time-budget=8000",
      `--print-to-pdf=${out}`,
      url,
    ],
    { stdio: "inherit" }
  );
} finally {
  rmSync(profile, { recursive: true, force: true });
}

// Count pages so a 2-page resume never ships unnoticed.
const pdf = readFileSync(out, "latin1");
const pages = (pdf.match(/\/Type\s*\/Page[^s]/g) || []).length;
console.log(`Wrote ${out} — ${pages} page(s).`);
if (pages !== 1) {
  console.error("Resume is not exactly one page. Shorten the copy in lib/site.ts (resume) and try again.");
  process.exit(1);
}

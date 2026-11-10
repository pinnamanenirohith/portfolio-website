"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { services, site } from "@/lib/site";
import { enquiryEmailHref } from "@/lib/email";
import { Arrow, Check } from "@/components/ui/Icons";

/* If NEXT_PUBLIC_FORM_ENDPOINT is set (e.g. a Formspree endpoint), the form
   posts there. Otherwise it opens the visitor's email client with the
   enquiry pre-filled. */
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

/* `email` is the wording used in the email draft's subject and summary. */
const emailWording: Record<string, string> = {
  "business-websites": "Business website",
  "landing-pages": "Landing page",
  "web-applications": "Full-stack web application",
};
const types = [
  ...services.map((s) => ({ id: s.id, label: s.title, email: emailWording[s.id] ?? s.title })),
  { id: "collaboration", label: "Collaboration / role", email: "Collaboration / role" },
  { id: "other", label: "Something else", email: "" },
];
const timelines = ["As soon as possible", "Within 1–2 months", "Flexible"];

export default function ContactForm() {
  const [type, setType] = useState<string>("");
  const [timeline, setTimeline] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "mailto" | "error">("idle");

  useEffect(() => {
    const s = new URLSearchParams(window.location.search).get("service");
    if (s && types.some((t) => t.id === s)) setType(s);
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const company = String(fd.get("company") || "").trim();
    const message = String(fd.get("message") || "").trim();
    const chosen = types.find((t) => t.id === type);
    const typeLabel = chosen?.label || "Not specified";

    if (ENDPOINT) {
      setStatus("sending");
      try {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ name, email, company, type: typeLabel, timeline, message }),
        });
        if (!res.ok) throw new Error();
        setStatus("sent");
        (e.target as HTMLFormElement).reset();
        return;
      } catch {
        setStatus("error");
        return;
      }
    }

    window.location.href = enquiryEmailHref({ name, email, company, type: chosen?.email, timeline, message });
    setStatus("mailto");
  };

  const field =
    "peer w-full border-0 border-b border-line-2 bg-transparent pb-3 pt-7 text-[17px] text-ink outline-none transition-colors placeholder:text-transparent focus:border-lime";
  const label =
    "pointer-events-none absolute left-0 top-7 text-[17px] text-dim transition-all duration-300 peer-focus:top-0 peer-focus:text-[11px] peer-focus:text-lime peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[11px] mono-label";

  return (
    <form onSubmit={onSubmit} className="space-y-10" data-component="ContactForm">
      <fieldset>
        <legend className="eyebrow mb-4">What do you need?</legend>
        <div className="flex flex-wrap gap-2">
          {types.map((t) => (
            <button
              type="button"
              key={t.id}
              onClick={() => setType(t.id)}
              aria-pressed={type === t.id}
              className={`h-10 rounded-full border px-4 text-[14px] transition-all ${
                type === t.id ? "border-lime bg-lime text-lime-ink" : "border-line-2 text-muted hover:border-ink hover:text-ink"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-8 sm:grid-cols-2">
        <div className="relative">
          <input id="name" name="name" required placeholder="Name" className={field} autoComplete="name" />
          <label htmlFor="name" className={label}>
            Your name *
          </label>
        </div>
        <div className="relative">
          <input id="email" name="email" type="email" required placeholder="Email" className={field} autoComplete="email" />
          <label htmlFor="email" className={label}>
            Email address *
          </label>
        </div>
      </div>
      <div className="relative">
        <input id="company" name="company" placeholder="Company" className={field} autoComplete="organization" />
        <label htmlFor="company" className={label}>
          Company or project name
        </label>
      </div>

      <fieldset>
        <legend className="eyebrow mb-4">Timeline</legend>
        <div className="flex flex-wrap gap-2">
          {timelines.map((t) => (
            <button
              type="button"
              key={t}
              onClick={() => setTimeline(t)}
              aria-pressed={timeline === t}
              className={`h-10 rounded-full border px-4 text-[14px] transition-all ${
                timeline === t ? "border-lime bg-lime/10 text-lime" : "border-line-2 text-muted hover:border-ink hover:text-ink"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="relative">
        <textarea id="message" name="message" required rows={4} placeholder="Message" className={`${field} resize-none`} />
        <label htmlFor="message" className={label}>
          Tell me about the project *
        </label>
      </div>

      <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={status === "sending"} className="btn btn-primary !h-14 !px-8 !text-[16px] disabled:opacity-60">
          {status === "sending" ? "Sending…" : "Send enquiry"} <Arrow className="arrow" />
        </button>
        <p className="mono text-[11px] text-dim">
          {ENDPOINT ? "Sent securely. I reply within 1–2 days." : "Opens your email app with the details filled in."}
        </p>
      </div>

      <AnimatePresence>
        {status !== "idle" && status !== "sending" && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            role="status"
            className={`flex items-start gap-3 rounded-xl border p-4 text-[14px] ${
              status === "error" ? "border-red-400/30 text-red-300" : "border-lime/30 text-lime"
            }`}
          >
            <Check className="mt-0.5 shrink-0" />
            {status === "sent" && "Thanks — your enquiry was sent. I'll be in touch soon."}
            {status === "mailto" && `Your email app should open now. If it doesn't, write to ${site.email}.`}
            {status === "error" && `Something went wrong. Please email ${site.email} directly.`}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}

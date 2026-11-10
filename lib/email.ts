import { site } from "./site";

/* Email drafts that open in the visitor's mail app.
   Lines are joined with CRLF, which every mail client (incl. Outlook
   and Gmail) turns into proper line breaks. */

const NL = "\r\n";

function mailto(subject: string, lines: string[]) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join(NL))}`;
}

/* For plain "email me" links: a short, guided template instead of a blank email. */
export function quickEmailHref() {
  return mailto("Project enquiry via rohith.dev", [
    "Hi Rohith,",
    "",
    "I came across your portfolio and I'd love to talk about working together.",
    "",
    "What I'm looking for (keep what applies):",
    "• A business website",
    "• A landing page",
    "• A full-stack web application",
    "• A collaboration or job opportunity",
    "",
    "About the project:",
    "[A few lines about your business and what you'd like to build]",
    "",
    "Timeline: [e.g. within a month]",
    "Budget: [optional]",
    "",
    "Thanks,",
    "[Your name]",
  ]);
}

export type Enquiry = {
  name: string;
  email: string;
  company?: string;
  type?: string;
  timeline?: string;
  message: string;
};

/* For the contact form: the visitor's own message, followed by a tidy summary. */
export function enquiryEmailHref(e: Enquiry) {
  const first = e.name.split(/\s+/)[0] || e.name;
  const subject = `Project enquiry${e.type ? `: ${e.type}` : ""} — ${first}${e.company ? ` (${e.company})` : ""}`;

  const details = [
    `• Name: ${e.name}`,
    `• Email: ${e.email}`,
    ...(e.company ? [`• Company / project: ${e.company}`] : []),
    ...(e.type ? [`• Looking for: ${e.type}`] : []),
    ...(e.timeline ? [`• Timeline: ${e.timeline}`] : []),
  ];

  // Don't double up if the visitor already opened with a greeting.
  const greeted = /^(hi|hello|hey|dear|good (morning|afternoon|evening)|namaste)\b/i.test(e.message);

  return mailto(subject, [
    ...(greeted ? [] : ["Hi Rohith,", ""]),
    e.message,
    "",
    "Here's a quick summary:",
    ...details,
    "",
    "Looking forward to hearing from you.",
    "",
    "Best regards,",
    e.name,
    "",
    "—",
    "Sent from the contact form on rohith.dev",
  ]);
}

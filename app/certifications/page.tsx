import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CertGrid from "@/components/CertGrid";
import { certifications } from "@/lib/site";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "AWS Developer Associate, AWS Cloud Practitioner, Automation Anywhere, Salesforce AI Associate, Cisco, IBM SkillsBuild and Cambridge certifications.",
};

export default function CertificationsPage() {
  const issuers = new Set(certifications.map((c) => c.issuer.split(" (")[0])).size;
  return (
    <>
      <PageHero
        eyebrow={`Certifications · ${certifications.length} credentials · ${issuers} issuers`}
        title={["Always", "*learning.*"]}
        lede="Cloud, AI, automation and programming credentials from AWS, Automation Anywhere, Salesforce, Cisco, IBM and Cambridge."
      />
      <section className="pb-32">
        <div className="wrap">
          <CertGrid />
        </div>
      </section>
    </>
  );
}

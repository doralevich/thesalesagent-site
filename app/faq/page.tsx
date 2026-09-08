import type { Metadata } from "next";
import Nav from "../components/Nav";
import { Footer } from "../components/Footer";
import { PageHero } from "../components/PageHero";
import { ClosingCta } from "../components/Cta";
import { FAQ } from "../components/FAQ";
import { FAQS } from "@/lib/content";
import { SITE_URL, breadcrumb, pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Frequently Asked Questions",
  description:
    "CRM compatibility, setup time, whether it sends without you, spam and deliverability, pricing approvals, cost, and where The Sales Agent stops.",
  path: "/faq",
  keywords: [
    "sales AI FAQ",
    "sales AI cost",
    "CRM AI compatibility",
    "AI agent setup time",
  ],
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/faq#faq`,
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb("FAQ", "/faq")) }}
      />
      <Nav />
      <main>
        <PageHero eyebrow="FAQ" title="Frequently Asked Questions">
          <p className="max-w-2xl mx-auto">
            If your question is not here, ask it on a call. We will answer it straight.
          </p>
        </PageHero>

        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <FAQ items={FAQS} />
          </div>
        </section>

        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Nav from "../components/Nav";
import { Footer } from "../components/Footer";
import { PageHero } from "../components/PageHero";
import { CtaPair } from "../components/Cta";
import { CONTACT_EMAIL, CONTACT_PHONE, DEMO_LINK, breadcrumb, pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Contact",
  description:
    "Talk to Apollo Claw about The Sales Agent. Book a 30-minute consultation, or reach us by email or phone from Roslyn Heights, New York.",
  path: "/contact",
  keywords: ["contact Apollo Claw", "sales AI consultation", "book AI demo sales"],
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb("Contact", "/contact")) }}
      />
      <Nav />
      <main>
        <PageHero eyebrow="Get in Touch" title="Talk to a Person">
          <p className="max-w-2xl mx-auto">
            The fastest path is a 30-minute consultation. If you would rather write first,
            that works too.
          </p>
        </PageHero>

        <section className="bg-white py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-cream rounded p-6">
                <h2 className="font-bold text-ink mb-2">Book a consultation</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Thirty minutes. We will walk your document workflow and show you exactly
                  how the agent would be configured.
                </p>
                <a
                  href={DEMO_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-brand hover:underline"
                >
                  Pick a time &rarr;
                </a>
              </div>

              <div className="bg-cream rounded p-6">
                <h2 className="font-bold text-ink mb-2">Email</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Questions about tool compatibility, scope, or pricing. We answer these
                  ourselves.
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm font-semibold text-brand hover:underline break-all"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>

              <div className="bg-cream rounded p-6">
                <h2 className="font-bold text-ink mb-2">Phone</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Roslyn Heights, New York. Every engagement is handled in-house.
                </p>
                <a href="tel:+19173635487" className="text-sm font-semibold text-brand hover:underline">
                  {CONTACT_PHONE}
                </a>
              </div>
            </div>

            <div className="text-center mt-16">
              <h2 className="text-2xl font-bold text-ink mb-6">Or start building right now</h2>
              <CtaPair on="light" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

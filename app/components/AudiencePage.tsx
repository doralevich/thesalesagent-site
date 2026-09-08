import Link from "next/link";
import Nav from "./Nav";
import { Footer } from "./Footer";
import { PageHero, Label } from "./PageHero";
import { ClosingCta } from "./Cta";
import type { Audience } from "@/lib/audiences";
import { AUDIENCE_PAGES } from "@/lib/audiences";
import { breadcrumb } from "@/lib/site";

export function AudiencePage({ audience }: { audience: Audience }) {
  const others = AUDIENCE_PAGES.filter((a) => a.slug !== audience.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumb(audience.label, `/${audience.slug}`)),
        }}
      />
      <Nav />
      <main>
        <PageHero eyebrow={audience.eyebrow} title={audience.title}>
          <p className="max-w-2xl mx-auto">{audience.intro}</p>
        </PageHero>

        <section className="bg-cream py-16">
          <div className="max-w-3xl mx-auto px-6">
            <Label>The Problem</Label>
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 leading-tight">
              {audience.problem.heading}
            </h2>
            <div className="text-lg text-ink leading-relaxed space-y-4">
              {audience.problem.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <Label>What Changes</Label>
              <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight">
                What Your Agent Handles
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {audience.benefits.map((b) => (
                <div key={b.title} className="bg-white border-l-4 border-brand rounded p-6 shadow-sm">
                  <h3 className="font-bold text-lg text-ink mb-3">{b.title}</h3>
                  <p className="text-ink leading-relaxed">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-cream py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <Label>Not Quite You?</Label>
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-8 leading-tight">
              The Same Engine, Configured Differently
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/${o.slug}`}
                  className="group block bg-white rounded p-6 border border-transparent hover:border-brand transition"
                >
                  <h3 className="font-bold text-ink mb-2 group-hover:text-brand transition">
                    {o.label}
                  </h3>
                  <span className="text-sm text-brand font-semibold">Read more &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ClosingCta heading={audience.closing.heading} body={audience.closing.body} />
      </main>
      <Footer />
    </>
  );
}

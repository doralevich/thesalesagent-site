import type { Metadata } from "next";
import Nav from "../components/Nav";
import { Footer } from "../components/Footer";
import { PageHero, Label } from "../components/PageHero";
import { ClosingCta } from "../components/Cta";
import { breadcrumb, pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "About: One Founder, Eighteen Years, One Conclusion",
  description:
    "The Sales Agent is built by Apollo Claw, in-house on Long Island. Who builds it, why it exists, and how engagements are handled.",
  path: "/about",
  keywords: [
    "Apollo Claw",
    "David Oralevich",
    "AI agency Long Island",
    "sales AI company",
  ],
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb("About", "/about")) }}
      />
      <Nav />
      <main>
        <PageHero eyebrow="The Story" title="One Founder. Eighteen Years. One Unavoidable Conclusion." />

        <section className="grid-light-section py-20">
          <div className="max-w-3xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/david-headshot.jpg"
                alt="David Oralevich, Founder"
                className="w-16 h-16 rounded-full object-cover object-top shadow-sm shrink-0"
              />
              <div>
                <p className="font-bold text-ink text-sm">David Oralevich</p>
                <p className="text-xs text-gray-500">Founder, Apollo Claw, Long Island, NY</p>
              </div>
            </div>

            <div className="text-ink leading-relaxed space-y-4">
              <p>
                David Oralevich has spent his career at the edge of what is next. He rode
                the first wave of the internet in the late 90s, built Designs By Dave O. in
                2007, and spent nearly two decades helping businesses compete and grow in a
                digital world.
              </p>
              <p>
                Then came AI. While the world was still debating ChatGPT, David was already
                working alongside senior engineers at leading AI startups, watching the
                technology develop before it hit the headlines.
              </p>
              <p>
                What he saw was a gap. Salespeople were spending their week on everything except selling
                while AI sat untapped. The technology existed to take the first pass at
                the research, the writing and the record-keeping. Nobody had built it
                for them, and the tools that claimed to were generic.
              </p>
              <p>
                So he built it. Apollo Claw and a portfolio of industry-specific AI agents,
                each one purpose-built for a role. The Sales Agent is built on the same
                foundation.
              </p>
              <p>
                Every engagement is handled in-house, on Long Island, New York. No offshore
                teams. No outsourced builds. When you work with us, you work with us.
              </p>
            </div>

            <blockquote className="border-l-4 border-brand pl-5 mt-10">
              <p className="text-ink italic font-medium leading-relaxed">
                &ldquo;Every revolution has an early chapter. The professionals who read it
                first write the rest of the story.&rdquo;
              </p>
              <cite className="block text-brand text-sm font-semibold mt-3 not-italic">
                David Oralevich, Founder and Chief Visionary Officer, Apollo Claw
              </cite>
            </blockquote>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-3xl mx-auto px-6">
            <Label>The Wider Line</Label>
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 leading-tight">
              One Engine, Built for a Role at a Time
            </h2>
            <div className="text-lg text-ink leading-relaxed space-y-4">
              <p>
                The Sales Agent is one of a family of role-specific agents from Apollo
                Claw. Each one is the same underlying platform, configured deeply for a
                single job rather than shallowly for all of them.
              </p>
              <p>
                That is deliberate. A generic assistant that knows a little about every industry is
                useful to nobody in particular. An agent that understands a buying
                committee, why a deal stalls after the demo, and which prospects are
                worth turning down is useful to you.
              </p>
            </div>
          </div>
        </section>

        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}

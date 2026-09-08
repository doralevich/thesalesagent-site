import Link from "next/link";
import Nav from "./components/Nav";
import { Footer } from "./components/Footer";
import { Label } from "./components/PageHero";
import { CtaPair, ClosingCta } from "./components/Cta";
import { Hero } from "./components/Hero";
import { FAQ } from "./components/FAQ";
import { CAPABILITIES, PROCESS, TESTIMONIALS, FAQS } from "@/lib/content";
import { AUDIENCES, SITE_URL } from "@/lib/site";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Nav />
      <main>
        <Hero
          badge="Apollo[Claw] Sales Edition"
          title="Real selling support. Not another sequencing tool."
          punch="The Sales Agent. More Than AI. Your Personal Operating System."
          sub="The Sales Agent researches accounts before your calls, drafts outreach that sounds like you, keeps follow-up running and writes the CRM notes. It learns who buys, who is a bad fit, where your deals stall, and what must never go out without you reading it."
          mascot="/images/the-sales-agent-mascot-transparent.png"
          mascotAlt="The Sales Agent mascot"
        />

        {/* THE ARGUMENT */}
        <section className="bg-cream py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <Label>Pipeline Work</Label>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-8 leading-tight">
              Selling Is the Small Part. The Rest Is Why the Pipeline Leaks.
            </h2>
            <div className="text-lg text-ink leading-relaxed space-y-4 max-w-3xl mx-auto">
              <p>
                The conversation is the job. Everything around it, the research nobody had an hour for,
                the recap that went out on Friday, the fourth touch that never happened,
                is what decides whether the conversation ever takes place.
              </p>
              <p>
                The Sales Agent takes the first pass on all of it (research, outreach, follow-up,
                proposals and the CRM work everybody postpones) so the hours go to the
                part that closes deals.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT IT DOES */}
        <section id="how-it-works" className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <Label>What It Does</Label>
              <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight">
                A Dedicated AI Agent for Your Pipeline
              </h2>
              <p className="text-lg text-ink mt-4 max-w-3xl mx-auto">
                Configured on how you win and how you lose. Writing in your voice. Stopping exactly
                where you tell it to.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {CAPABILITIES.map((c) => (
                <div key={c.title} className="bg-white border-l-4 border-brand rounded p-6 shadow-sm">
                  <h3 className="font-bold text-lg text-ink mb-3">{c.title}</h3>
                  <p className="text-ink leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-10">
              <Link href="/how-it-works" className="text-sm font-semibold text-brand hover:underline">
                See how it works, step by step &rarr;
              </Link>
            </p>
          </div>
        </section>

        {/* PROCESS */}
        <section className="grid-dark-section py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <Label on="dark">The Process</Label>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                From Consultation to Running in 2 Weeks
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {PROCESS.map((p, i) => (
                <div key={p.num} className="flex flex-col items-center text-center px-6">
                  <div className="w-20 h-20 rounded-full border-2 border-brand-tint flex flex-col items-center justify-center mb-5 bg-ground/85 shrink-0">
                    <span className="text-xs uppercase tracking-widest font-semibold text-brand-tint">
                      {p.phase}
                    </span>
                    <span className="text-xl font-bold text-white">{p.num}</span>
                  </div>
                  {i < PROCESS.length - 1 && (
                    <span className="md:hidden text-brand-tint text-xl mb-4" aria-hidden="true">
                      &darr;
                    </span>
                  )}
                  <h3 className="font-bold text-lg text-white mb-3">{p.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <Label>Who It&apos;s For</Label>
              <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight">
                Configured Around the Chair You Sit In
              </h2>
              <p className="text-lg text-ink mt-4 max-w-3xl mx-auto">
                A founder is selling between everything else, an AE is losing the day to admin, and a leader cannot see a pipeline that lives in five people's heads. Pick the one that sounds like you.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {AUDIENCES.map((a) => (
                <Link
                  key={a.slug}
                  href={`/${a.slug}`}
                  className="group block bg-cream rounded p-6 border border-transparent hover:border-brand transition"
                >
                  <h3 className="font-bold text-ink mb-2 group-hover:text-brand transition">
                    {a.label}
                  </h3>
                  <span className="text-sm text-brand font-semibold">Read more &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section id="results" className="bg-cream py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <Label>Client Results</Label>
              <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight">
                What Clients Say After 30 Days
              </h2>
              <p className="text-lg text-ink mt-4 max-w-3xl mx-auto">
                Founders, AEs and full sales teams, all getting the same thing back: the hours that went
                into everything except the conversation.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t) => (
                <figure
                  key={t.quote}
                  className="bg-white rounded p-6 shadow-sm border-t-4 border-brand flex flex-col"
                >
                  <p className="text-xs uppercase tracking-widest font-semibold text-brand mb-3">
                    {t.industry}
                  </p>
                  <blockquote className="text-ink italic flex-1 mb-4 text-sm leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="border-t border-gray-100 pt-3">
                    <p className="font-bold text-ink text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400 mt-1">{t.detail}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="text-center text-xs text-gray-400 mt-8">
              Representative client experiences. Identifying details withheld at client
              request.
            </p>
          </div>
        </section>

        {/* INVESTMENT */}
        <section id="pricing" className="grid-dark-section py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <Label on="dark">Investment</Label>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Built for People Who Need More Than Another Sequencer
            </h2>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Two ways to start. Build your agent yourself in about fifteen minutes, or have us scope
              and configure it around your motion on a call.
            </p>
            <CtaPair size="lg" on="dark" />
            <p className="text-sm text-gray-400 mt-6">
              Custom deployments are scoped to your CRM, your sales stack, your volume and how much
              you want the agent to own, and priced during your consultation.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <Label>FAQ</Label>
              <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight">
                Frequently Asked Questions
              </h2>
            </div>
            <FAQ items={FAQS.slice(0, 6)} />
            <p className="text-center mt-10">
              <Link href="/faq" className="text-sm font-semibold text-brand hover:underline">
                Read every question &rarr;
              </Link>
            </p>
          </div>
        </section>

        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}

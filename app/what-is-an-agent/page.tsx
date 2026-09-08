import type { Metadata } from "next";
import Nav from "../components/Nav";
import { Footer } from "../components/Footer";
import { PageHero, Label } from "../components/PageHero";
import { ClosingCta } from "../components/Cta";
import { breadcrumb, pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "What Is an AI Agent? And How Is It Different From ChatGPT?",
  description:
    "A chatbot waits to be asked. An agent has a job, its own memory of your pipeline, and permission to act. Here is the difference, in plain terms.",
  path: "/what-is-an-agent",
  keywords: [
    "what is an AI agent",
    "AI agent vs chatbot",
    "AI agent for business",
    "private AI agent",
    "AI agent sales explained",
  ],
});

const COMPARISON = [
  {
    chatbot: "You open it and ask a question.",
    agent: "It works while the app is closed, on a schedule you set.",
  },
  {
    chatbot: "It forgets you between conversations.",
    agent: "It keeps a working memory of your accounts, your buyers, and how you sell.",
  },
  {
    chatbot: "It can only tell you what to do.",
    agent: "It connects to your CRM and your inbox and produces the research or the follow-up itself.",
  },
  {
    chatbot: "It is the same product for everyone.",
    agent: "It is configured around your offer, your ideal customer, and what never goes out unapproved.",
  },
  {
    chatbot: "Your data is one of millions of conversations.",
    agent: "It runs on its own private instance, not a shared pool.",
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumb("What Is an Agent", "/what-is-an-agent")),
        }}
      />
      <Nav />
      <main>
        <PageHero eyebrow="The Explainer" title="An Agent Is Not a Chatbot With a New Name">
          <p className="max-w-2xl mx-auto">
            The difference is not how well it writes. It is whether anything happens when
            you are not looking at it.
          </p>
        </PageHero>

        <section className="bg-white py-20">
          <div className="max-w-3xl mx-auto px-6">
            <Label>The Short Version</Label>
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 leading-tight">
              A Chatbot Waits. An Agent Has a Job.
            </h2>
            <div className="text-lg text-ink leading-relaxed space-y-4">
              <p>
                When you use a general chatbot, you are the engine. You decide what to ask,
                you paste in the context, you take the answer somewhere else and act on it.
                Close the tab and nothing continues.
              </p>
              <p>
                An agent is the other way around. It has standing instructions, access to
                the systems where your work actually lives, and a schedule. The lead that
                came in at 9pm gets a response at 9:02pm whether or not you ever opened
                anything.
              </p>
              <p>
                That is the whole distinction, and it is why an agent can be measured in meetings booked
                and follow-ups sent instead of in prompts.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-cream py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-10">
              <Label>Side by Side</Label>
              <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight">
                Where They Diverge
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[36rem]">
                <thead>
                  <tr>
                    <th className="text-xs uppercase tracking-widest font-semibold text-gray-500 pb-4 pr-6 w-1/2">
                      A general chatbot
                    </th>
                    <th className="text-xs uppercase tracking-widest font-semibold text-brand pb-4 w-1/2">
                      Your agent
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row) => (
                    <tr key={row.agent} className="border-t border-gray-200 align-top">
                      <td className="py-4 pr-6 text-gray-600">{row.chatbot}</td>
                      <td className="py-4 text-ink font-medium">{row.agent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-3xl mx-auto px-6">
            <Label>Why Private Matters</Label>
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 leading-tight">
              Your Agent Is Yours
            </h2>
            <div className="text-lg text-ink leading-relaxed space-y-4">
              <p>
                Your pipeline is the most commercially sensitive thing you own: who you are talking to,
                what you quoted them, why you lost the last one. That is not material to
                hand to a shared consumer product.
              </p>
              <p>
                Your agent runs on its own instance. It is configured for you, it remembers
                only your business, and it uses read-only, least-privilege access to your
                systems wherever the platform supports it.
              </p>
            </div>
          </div>
        </section>

        <ClosingCta
          heading="See What One Configured Around Your Business Looks Like"
          body="Build your agent online in about fifteen minutes, or book a consultation and we will walk through exactly what it would do for your pipeline."
        />
      </main>
      <Footer />
    </>
  );
}

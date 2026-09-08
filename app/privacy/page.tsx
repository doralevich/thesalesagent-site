import type { Metadata } from "next";
import LegalDoc, { type LegalSection } from "../components/LegalDoc";
import { CONTACT_EMAIL, PARENT_SITE, SITE_NAME, pageMeta } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Privacy Policy",
    description: `How ${SITE_NAME} handles information, including the Google Analytics it now runs behind consent.`,
    path: "/privacy",
  }),
  robots: { index: true, follow: true },
};

// WRITTEN AGAINST WHAT THIS SITE ACTUALLY DOES, not a template.
//
// Audited before writing: no <form>, no <input>, no onSubmit anywhere in app/. No cookie is set
// by our own code beyond the consent choice itself. The only other thing in <head> beyond
// metadata is JSON-LD structured data, which is static markup and collects nothing. Every call
// to action is an outbound link.
//
// THIS SITE NOW RUNS GOOGLE ANALYTICS 4 (app/layout.tsx), matching the rest of the agent family.
// It is GATED: Google Consent Mode v2 defaults analytics_storage to 'denied' and nothing is
// written until the visitor accepts in the banner (app/components/CookieConsent.tsx). This page
// said "this site collects nothing" for exactly as long as that was true, and changed in the
// same commit that made it untrue - which is the only way a policy stays worth anything.
//
// IF GA4 IS EVER REMOVED, OR ANYTHING ELSE STARTS COLLECTING, THIS FILE HAS TO CHANGE IN THE SAME
// COMMIT.
//
// Not reviewed by a lawyer. It is accurate as a description of the site; have counsel read it
// before relying on it as a legal instrument.
const EFFECTIVE = "September 8, 2026";

const SECTIONS: LegalSection[] = [
  {
    heading: "Who we are",
    blocks: [
      {
        kind: "prose",
        text: `${SITE_NAME} is operated by Apollo Claw AI Consulting, 69 Roslyn Road, Roslyn Heights, NY 11577. For any privacy question, email ${CONTACT_EMAIL}.`,
      },
    ],
  },
  {
    heading: "What you give us",
    blocks: [
      {
        kind: "prose",
        text: "Nothing, unless you choose to. This site is a set of informational pages. It has no forms, no sign-up, no account, and no chat widget, so there is nothing here for you to submit and nothing for us to store about you personally.",
      },
    ],
  },
  {
    heading: "Analytics",
    blocks: [
      {
        kind: "prose",
        text: "This site uses Google Analytics to measure how the pages are used: which pages are viewed, how visitors arrive, roughly where in the world they are based on IP address, and what browser and device they use. It is aggregate measurement, used to work out which pages are worth keeping and improving.",
      },
      {
        kind: "prose",
        text: "It stays off until you say otherwise. Analytics are switched off when you arrive, and nothing is stored in your browser and no identifier is created for you unless you accept in the banner. Declining means analytics never start, not that the banner goes away. You can change your mind by clearing this site's data in your browser, which brings the banner back.",
      },
      {
        kind: "prose",
        text: "We do not use analytics to build advertising audiences, and we run no advertising or retargeting pixels on this site. The site works exactly the same whichever you choose, and nothing here is gated behind accepting.",
      },
    ],
  },
  {
    heading: "What our host records",
    blocks: [
      {
        kind: "prose",
        text: "This site is hosted on Vercel, which keeps standard server logs of requests: IP address, timestamp, the page requested, and browser type. That is how any web server works, and it exists so the site stays up and so abuse can be investigated. Those logs are held by Vercel under its own terms, and we do not use them to identify or profile individual visitors.",
      },
    ],
  },
  {
    heading: "Where the links take you",
    blocks: [
      {
        kind: "prose",
        text: "The buttons on this site lead somewhere else, and once you follow one you are on a different service with its own privacy policy. The two that matter:",
      },
      {
        kind: "bullets",
        items: [
          `Apollo Claw (${PARENT_SITE}) is where you build and buy an agent. The questionnaire, the checkout, and the account all live there, and everything you enter is covered by the Apollo Claw privacy policy rather than this one.`,
          "Cal.com is where a consultation is booked. What you enter to book a call is handled by Cal.com, and by Apollo Claw as the recipient of the booking.",
        ],
      },
    ],
  },
  {
    heading: "What we never do",
    blocks: [
      {
        kind: "bullets",
        items: [
          "We do not sell personal information, and we do not share it for cross-context behavioral advertising.",
          "We do not knowingly collect information from children under 16.",
          "We do not use anything from this site to train general-purpose AI models.",
        ],
      },
    ],
  },
  {
    heading: "Your rights",
    blocks: [
      {
        kind: "prose",
        text: `Depending on where you live, you may have the right to see, correct, or delete personal information a company holds about you, and to object to how it is used. Because this site holds none, there is usually nothing here to act on. If you have used Apollo Claw itself, those rights apply to the information held there: email ${CONTACT_EMAIL} and we will handle it.`,
      },
    ],
  },
  {
    heading: "Changes to this policy",
    blocks: [
      {
        kind: "prose",
        text: "If this site ever starts collecting something, this page will say so before it does, and the effective date above will change. We will not quietly add tracking and update the policy afterwards.",
      },
    ],
  },
];

export default function Page() {
  return (
    <LegalDoc
      title="Privacy Policy"
      effective={EFFECTIVE}
      intro="The short version: there is nothing here to fill in, so we hold no account or contact details from this site. We measure page usage with Google Analytics, and only if you accept it. The detail is below."
      sections={SECTIONS}
    />
  );
}

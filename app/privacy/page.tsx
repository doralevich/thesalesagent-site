import type { Metadata } from "next";
import LegalDoc, { type LegalSection } from "../components/LegalDoc";
import { CONTACT_EMAIL, PARENT_SITE, SITE_NAME, pageMeta } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Privacy Policy",
    description: `How ${SITE_NAME} handles information. This site collects nothing.`,
    path: "/privacy",
  }),
  robots: { index: true, follow: true },
};

// WRITTEN AGAINST WHAT THIS SITE ACTUALLY DOES, not a template.
//
// Audited before writing: no <form>, no <input>, no onSubmit anywhere in app/. No analytics
// script, no gtag, no cookie written by our own code. The only thing in <head> beyond metadata
// is JSON-LD structured data, which is static markup and collects nothing. Every call to action
// is an outbound link.
//
// That makes the honest policy a short one, and saying so plainly is worth more than padding it
// with clauses about data we do not hold. IF A FORM, AN ANALYTICS TAG, OR A CHAT WIDGET IS EVER
// ADDED TO THIS SITE, THIS FILE HAS TO CHANGE IN THE SAME COMMIT.
//
// Not reviewed by a lawyer. It is accurate as a description of the site; have counsel read it
// before relying on it as a legal instrument.
const EFFECTIVE = "September 6, 2026";

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
    heading: "What this site collects",
    blocks: [
      {
        kind: "prose",
        text: "Nothing. This site is a set of informational pages. It has no forms, no sign-up, no account, and no chat widget, so there is nothing here for you to submit and nothing for us to store.",
      },
      {
        kind: "prose",
        text: "We do not run analytics on this site and we do not set cookies. We do not track you between sessions, we do not build a profile of you, and we do not use advertising or cross-site tracking pixels. You can read every page here without telling us anything.",
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
      intro="The short version: this site collects nothing about you. No forms, no cookies, no analytics. The longer version is below, including what happens when you click through to Apollo Claw."
      sections={SECTIONS}
    />
  );
}

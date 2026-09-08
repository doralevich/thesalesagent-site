// One place for the things that appear on every page and change rarely.

export const SITE_URL = "https://thesalesagent.ai";
export const SITE_NAME = "The Sales Agent";

/** Self-serve. The questionnaire and the checkout both run on ApolloClaw, so every
 *  "Build Your Agent" CTA points there. The slug is `sales` - BUILD_SLUGS in apolloclaw2
 *  maps it to the `sales` agent type. */
export const BUILD_LINK = "https://www.apolloclaw.ai/build/sales";

/** Consultation. cal.com is canonical - the old calendly link is stale. */
export const DEMO_LINK = "https://cal.com/therealdaveo/apollo-claw";

export const PARENT_SITE = "https://apolloclaw.ai";
export const CONTACT_EMAIL = "david@apolloclaw.ai";
export const CONTACT_PHONE = "(917) 363-5487";

export const NAV_LINKS = [
  { label: "What It Does", href: "/how-it-works" },
  { label: "Who It's For", href: "/for-founders" },
  { label: "Results", href: "/#results" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
];

/**
 * The audience pages, used by the nav, the footer, and the sitemap.
 *
 * Split by SEAT, not by industry. What you sell changes the vocabulary and is configured at * setup; which chair you sit in changes the job. A founder is selling between everything else, * an AE is losing the day to admin, an outbound team is fighting volume, and a leader is trying * to see a pipeline that only exists in other people's heads. */ export const AUDIENCES = [ { slug: "for-founders", label: "For Founders Who Sell" }, { slug: "for-account-executives", label: "For Account Executives" }, { slug: "for-outbound-teams", label: "For Outbound Teams" }, { slug: "for-sales-leaders", label: "For Sales Leaders" }, ];

/** Breadcrumb JSON-LD for an interior page. */
export function breadcrumb(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };
}

/** The metadata every interior page repeats, minus the words. */
export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}) {
  const url = `${SITE_URL}${opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    ...(opts.keywords ? { keywords: opts.keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      type: "website" as const,
      title: opts.title,
      description: opts.description,
      url,
      images: [
        { url: `${SITE_URL}/images/og-image.jpg`, width: 1200, height: 630, alt: SITE_NAME },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: opts.title,
      description: opts.description,
      images: [`${SITE_URL}/images/og-image.jpg`],
    },
  };
}

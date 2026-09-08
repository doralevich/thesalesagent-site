// The four audience pages. Same shape, different argument.
//
// Split by SEAT, not by industry. What you sell changes the vocabulary and is configured at
// setup; a freight broker and a SaaS AE have the same week. Which chair you sit in is what
// changes the job: a founder is selling between everything else, an AE is losing the day to
// admin around the deals, an outbound team is fighting volume without becoming spam, and a
// leader is trying to see a pipeline that mostly exists in other people's heads.
//
// Every page holds the same line, because this is the one agent that writes to strangers in the
// customer's name: it drafts, a person approves, and it does not invent a reference or a logo to
// make an email land. That is not a caveat, it is the reason a sales team can use it at all.

export type Audience = {
  slug: string;
  label: string;
  eyebrow: string;
  title: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  problem: { heading: string; body: string[] };
  benefits: { title: string; body: string }[];
  closing: { heading: string; body: string };
};

export const AUDIENCE_PAGES: Audience[] = [
  {
    slug: "for-founders",
    label: "For Founders Who Sell",
    eyebrow: "For Founders Who Sell",
    title: "You Are the Product, the Ops and the Whole Sales Team.",
    intro:
      "Selling is the thing that only you can do, and it is the thing that keeps getting done last. The Sales Agent takes the research, the follow-up and the admin so the selling gets a real week.",
    metaTitle: "AI Sales Agent for Founders | Sell Without a Sales Team",
    metaDescription:
      "A private AI agent for founders doing their own selling. Researches prospects before calls, drafts outreach in your voice, keeps follow-up running and writes the CRM notes, so the pipeline does not stall when the week does.",
    keywords: [
      "AI sales agent for founders",
      "founder led sales tools",
      "AI sales assistant startup",
      "sales automation for small business",
      "outbound for founders",
    ],
    problem: {
      heading: "The Pipeline Is Only as Long as Last Week Allowed",
      body: [
        "Sales is the one job that has no deadline attached to it. Nobody escalates when a follow-up does not go out, so it does not go out, and the pipeline reflects how busy the last three weeks were rather than how good the business is.",
        "Then it swings. A quiet month means a scramble, the scramble produces a full pipeline, closing that pipeline eats the next month, and the pipeline behind it is empty again. That cycle is what a first sales hire is supposed to fix, and it usually arrives two years late.",
      ],
    },
    benefits: [
      {
        title: "You Walk In Knowing Something",
        body: "Who they are, what changed recently, and what is worth opening with. Prepared before every call rather than skipped because it was a busy morning.",
      },
      {
        title: "Follow-Up Stops Depending on You",
        body: "The fourth touch goes out whether or not this was a good week. Most of what founders lose, they lose to silence.",
      },
      {
        title: "Outreach in Your Voice",
        body: "Drafted to your actual ideal customer, sounding like you rather than like a template. You approve every one before it goes anywhere.",
      },
      {
        title: "It Knows Who to Turn Down",
        body: "You write down what a bad fit looks like, and it stops filling your calendar with the deals you would regret taking.",
      },
      {
        title: "The Record Keeps Itself",
        body: "Notes and next steps written after each call, so the pipeline is something you can look at rather than something you have to remember.",
      },
      {
        title: "Nothing Goes Out Unapproved",
        body: "Prices, promises and anything binding wait for you. It is your name on the email and your reputation in the market.",
      },
    ],
    closing: {
      heading: "Sell Like There Is a Team Behind You",
      body: "There is not, and there does not need to be yet. What was missing was the hours around the selling, and that is the part this takes.",
    },
  },
  {
    slug: "for-account-executives",
    label: "For Account Executives",
    eyebrow: "For Account Executives",
    title: "You Carry a Number. You Spend the Day on Everything Else.",
    intro:
      "Research, notes, CRM, follow-up, the internal one-pager your champion needs. All of it necessary, none of it selling. The Sales Agent takes it so the calls get the day.",
    metaTitle: "AI for Account Executives | Call Prep, Follow-Up and CRM",
    metaDescription:
      "A private AI agent for account executives. Researches accounts before calls, preps objections, drafts follow-up and proposals, and keeps the CRM current so selling time goes to selling.",
    keywords: [
      "AI for account executives",
      "sales call preparation AI",
      "AE productivity tools",
      "CRM data entry automation",
      "sales follow-up automation",
    ],
    problem: {
      heading: "The Deal Dies in the Gap Between Meetings",
      body: [
        "The call goes well. Then there are four days of other calls, and the recap that would have kept momentum goes out on Friday, generic, if it goes out at all.",
        "The worse version is your champion. They liked it, they now have to sell it internally to people you have never met, and you have handed them nothing to do that with. That is where most of the pipeline actually leaks, and it leaks quietly.",
      ],
    },
    benefits: [
      {
        title: "Prep Without the Hour",
        body: "The account, the people, the recent news and the likely objections, ready before the call rather than skimmed in the parking lot.",
      },
      {
        title: "Recaps Go Out Same Day",
        body: "Drafted from what was actually said, with the next step in it, while it still matters.",
      },
      {
        title: "Your Champion Gets Ammunition",
        body: "The internal summary they need to sell it to the people you cannot reach. This is the stage where deals die, so it is the stage it works hardest on.",
      },
      {
        title: "Objections Answered Honestly",
        body: "The ones this buyer profile always raises, with responses that hold up on the second question rather than deflect the first.",
      },
      {
        title: "CRM Stops Being Friday",
        body: "Notes written, stages moved, next steps set. Your manager sees a real pipeline and you did not spend an afternoon producing it.",
      },
      {
        title: "Nothing Priced Without You",
        body: "Proposals and quotes get drafted; anything with a number in it waits for your eyes. A wrong figure is hard to take back.",
      },
    ],
    closing: {
      heading: "More Selling, Same Quota",
      body: "None of the admin around a deal is what you were hired for, and all of it has to happen. That is exactly the shape of work worth handing over.",
    },
  },
  {
    slug: "for-outbound-teams",
    label: "For Outbound Teams",
    eyebrow: "For Outbound Teams",
    title: "Volume Without Becoming the Thing People Delete.",
    intro:
      "Personalization at scale is usually neither. The Sales Agent researches each account properly and writes to that situation, at a volume a person could not hit and a quality a template never reaches.",
    metaTitle: "AI for Outbound Sales Teams | Research-Led Prospecting",
    metaDescription:
      "A private AI agent for SDR and outbound teams. Researches each account, writes outreach to that specific situation, runs cadences and keeps the CRM current, without fake personalization or spam tactics.",
    keywords: [
      "AI outbound sales",
      "SDR automation",
      "AI prospecting tool",
      "cold email personalization AI",
      "sales development AI agent",
    ],
    problem: {
      heading: "The Trade-Off Everybody Pretends Is Solved",
      body: [
        "You can send a thousand relevant emails or you can send a thousand emails. Everybody claims to do both, and what usually ships is a merge field wrapped around a template, which prospects recognize instantly and which trains a whole market to ignore your domain.",
        "Meanwhile the real research, the thing that makes an opening line land, takes twenty minutes an account and does not survive contact with a daily target.",
      ],
    },
    benefits: [
      {
        title: "Real Research, Every Account",
        body: "What the company actually does, what changed, and who the message is going to. The twenty minutes happens on every account rather than the ten that had time.",
      },
      {
        title: "Openings That Are True",
        body: "Something specific about their business, not a first name in a template. It will not invent a detail to make a line work.",
      },
      {
        title: "Nothing Fabricated",
        body: "No claimed logos you do not have, no invented urgency, no made-up mutual connection. Those tricks work once and cost the domain.",
      },
      {
        title: "Cadences That Keep Running",
        body: "The sequence continues without anybody nursing it, and stops where you told it to stop rather than running to twelve touches.",
      },
      {
        title: "Bad Fits Filtered Early",
        body: "You define who is a bad fit even when they want to buy. It stops routing those to a calendar.",
      },
      {
        title: "You Set the Send Rules",
        body: "Approve every sequence, approve every message, or approve the first and let the pattern run. Written down at setup rather than decided per email.",
      },
    ],
    closing: {
      heading: "Scale the Research, Not the Noise",
      body: "The constraint on outbound was never sending capacity. It was how many accounts a person could actually understand before writing to them.",
    },
  },
  {
    slug: "for-sales-leaders",
    label: "For Sales Leaders",
    eyebrow: "For Sales Leaders",
    title: "The Forecast Is a Story People Tell You on Wednesdays.",
    intro:
      "You cannot manage a pipeline that only exists in five people's heads. The Sales Agent keeps the record current as a by-product of the work, so the numbers you review are the ones that happened.",
    metaTitle: "AI for Sales Leaders | Pipeline Hygiene and Forecast Accuracy",
    metaDescription:
      "A private AI agent for sales managers and VPs. Keeps CRM records current, standardizes call prep and follow-up across the team, and makes the pipeline visible without another process nobody follows.",
    keywords: [
      "AI for sales managers",
      "sales forecast accuracy",
      "CRM hygiene automation",
      "sales team enablement AI",
      "pipeline management AI",
    ],
    problem: {
      heading: "Every Fix for This Is Another Thing Reps Do Not Do",
      body: [
        "The data is bad because entering it costs a rep selling time and buys them nothing. So you add a process, the process gets followed for a quarter, and the forecast goes back to being a conversation rather than a number.",
        "The other half is variance. Your best rep preps properly, follows up four times and writes real notes. Your newest one does none of it, and you find out in month five.",
      ],
    },
    benefits: [
      {
        title: "The Record Updates Itself",
        body: "Notes and next steps written as part of the work rather than as a tax on it, so hygiene stops depending on discipline.",
      },
      {
        title: "One Standard Across the Team",
        body: "The same prep, the same follow-up cadence and the same recap regardless of who owns the account.",
      },
      {
        title: "A Forecast Built on Activity",
        body: "Stages that moved because something happened, not because somebody tidied the board before the review.",
      },
      {
        title: "New Reps Ramp on the Playbook",
        body: "They work from what your best rep does rather than from tribal knowledge, so the ramp is weeks instead of quarters.",
      },
      {
        title: "You See Where It Leaks",
        body: "The stage where deals actually stall, visible across the team rather than inferred from the ones that closed.",
      },
      {
        title: "Guardrails You Set Once",
        body: "What may go out unapproved, what never can, and what the team must never claim. Enforced by the agent rather than by you reading everybody's sent folder.",
      },
    ],
    closing: {
      heading: "Manage the Pipeline You Actually Have",
      body: "Nothing here asks a rep to do more admin. It removes the admin, and the record improves because the record is now a by-product rather than a chore.",
    },
  },
];

/** One page by slug. Returns undefined for a slug that is not an audience, which is what lets
 *  each page file assert with `!` and fail loudly at build time rather than rendering blank. */
export function getAudience(slug: string): Audience | undefined {
  return AUDIENCE_PAGES.find((a) => a.slug === slug);
}

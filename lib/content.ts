// Content shared across pages. The home page shows a subset; /how-it-works and /faq
// show the whole thing. Keeping it here means the two never drift apart.
//
// THIS IS THE ONE AGENT THAT WRITES TO STRANGERS IN THE CUSTOMER'S NAME, and that shapes every
// line below. The other role agents fail quietly: a bad draft gets edited before anybody sees it.
// This one fails in public and at volume, so the sales persona in apolloclaw2 names the failure
// mode explicitly ("no deceptive claims, no spam tactics, no fake urgency") and the intake makes
// the customer write down the outbound rules and the approval line before the agent sends
// anything. The copy holds the same line: it drafts, a person approves, and it never invents a
// reference or a logo to make a cold email land.
//
// The second thing running through here comes from the intake's own design note: the questions
// that make this agent good are the ones about LOSING. Bad-fit prospects, where deals stall, why
// you lose. So the copy talks about the leak rather than the win, because that is what the
// product is actually configured on.

export const CAPABILITIES = [
  {
    title: "Prospect and Account Research",
    body: "Who they are, what changed recently, who else has to say yes, and what is worth opening with. Ready before the call rather than skipped because there was no time.",
  },
  {
    title: "Outreach That Reads Like a Person",
    body: "Written to your ideal customer in your voice, with something true in the first line. No fake urgency, no invented personalization, nothing sent without your approval.",
  },
  {
    title: "Call Briefs and Objection Prep",
    body: "Who is in the room, what they care about, and the objections this profile always raises, with honest answers that hold up rather than deflections.",
  },
  {
    title: "Follow-Up That Actually Happens",
    body: "Cadences built and kept running, so the deal that went quiet gets the fourth touch instead of dying because the week got busy.",
  },
  {
    title: "Proposals and Quotes",
    body: "Drafted from what was actually said on the call, in your format. Anything with a price in it waits for you, by rule.",
  },
  {
    title: "CRM Notes and Pipeline Hygiene",
    body: "Call notes written, next steps set, stages moved. The record stays current without anybody spending Friday afternoon on it.",
  },
];

export const PROCESS = [
  {
    phase: "Day 1",
    num: "01",
    title: "We Learn How You Win and Lose",
    body: "What you sell, who buys it, who is a bad fit even when they want to buy, where deals stall, and who you lose to and why. Then the rules: how it may sound, and what never goes out without you.",
  },
  {
    phase: "Week 1",
    num: "02",
    title: "The Pipeline Stops Leaking",
    body: "Research arrives before calls. Follow-up goes out on cadence. Notes and next steps land in the CRM. The stage where your deals were quietly dying is the first thing it works on.",
  },
  {
    phase: "Month 1+",
    num: "03",
    title: "It Learns What Lands",
    body: "Which openings get replies, which objections keep coming back, and which phrasing you always edit out. The drafts need less rewriting every week.",
  },
];

export const TESTIMONIALS = [
  {
    industry: "B2B SaaS",
    quote:
      "Our deals died after the demo, when my champion had to sell it internally with nothing to sell it with. Now the agent drafts the internal one-pager the same day. That stage stopped being where the pipeline goes to die.",
    name: "Account Executive",
    detail: "Mid-market SaaS",
  },
  {
    industry: "Professional Services",
    quote:
      "I am the founder and I am also sales. Research before calls was the first thing to get cut every week. Now it is done before I sit down, and I stopped walking into meetings knowing nothing about the person.",
    name: "Founder",
    detail: "Consultancy, 11 people",
  },
  {
    industry: "Manufacturing",
    quote:
      "The follow-up is the whole thing. Four touches instead of one, every time, without me remembering. We are closing deals we would have lost to silence.",
    name: "Sales Director",
    detail: "Industrial equipment",
  },
  {
    industry: "Financial Services",
    quote:
      "What sold me was where it stops. Nothing with a price in it goes out without me reading it, and it will not claim we work with somebody we do not. I have seen tools that would happily do both.",
    name: "VP Sales",
    detail: "Fintech",
  },
  {
    industry: "Agency",
    quote:
      "CRM hygiene was a lie we all told. Notes went in on Friday if they went in at all. Now the notes and next steps are written after the call and I approve them. The forecast is real for the first time.",
    name: "Managing Partner",
    detail: "Marketing agency",
  },
  {
    industry: "Logistics",
    quote:
      "It told me a prospect was a bad fit before I spent three weeks on them, because we had written down what a bad fit looks like. That question in the setup was worth the whole thing.",
    name: "Regional Sales Manager",
    detail: "Freight brokerage",
  },
];

export const FAQS = [
  {
    q: "Will it send emails as me without me seeing them?",
    a: "Not unless you turn that on, and most people never do. The default is that it drafts and you send. During setup you write down the outbound rules in plain words: what it may send, what it must never claim, and whether anything at all goes out before you have read it.",
  },
  {
    q: "Is this a spam machine?",
    a: "No, and it is built not to be. It writes to a defined ideal customer with something true in the opening line, it will not invent personalization or claim a logo you do not have, and it respects sending rules like CAN-SPAM. Volume without relevance is how a domain gets burned, which is your reputation and not ours.",
  },
  {
    q: "Does it work with our CRM?",
    a: "We build to what you already run: Salesforce, HubSpot, Pipedrive, Attio, Close and the rest, plus the sales stack around it. Where there is an integration we use it; where there is not, the agent works in the inbox and documents your team already uses.",
  },
  {
    q: "Will it write to existing customers?",
    a: "Only if you say so. Existing customers are usually on the list of things that never go out without a person reading them first, along with anything containing a price or a delivery date.",
  },
  {
    q: "Can it quote pricing or commit to terms?",
    a: "It drafts proposals and quotes from what was actually discussed. It does not commit you to anything. Pricing, terms and anything binding are on the approval line by default, because a wrong number in a quote is hard to walk back.",
  },
  {
    q: "How is this different from a sequencing tool?",
    a: "A sequencing tool sends what you wrote to a list you built. This researches the account first, writes to that specific situation, prepares you for the call, drafts the follow-up based on what was said, and keeps the record current. The sending is the smallest part of it.",
  },
  {
    q: "How long does setup take?",
    a: "Most teams are live within two weeks. We configure it on your offer, your ideal customer, your sales motion, the stage where your deals stall, and the phrases you never want sent in your name.",
  },
  {
    q: "Does it replace an SDR?",
    a: "It replaces the part of the job that is research and typing. Most teams find the same people run a bigger territory rather than the team getting smaller, because the constraint was never how many emails could be sent.",
  },
  {
    q: "What does it cost?",
    a: "You can build your agent online and see the price before you pay anything. For a deployment scoped to your CRM, your sales stack and your volume, book a consultation and we will give you a number.",
  },
];

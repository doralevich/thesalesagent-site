import { BUILD_LINK, DEMO_LINK } from "@/lib/site";

// Both paths, everywhere. Every CTA location on every agent site offers the self-serve
// build and the consultation side by side - see DECISIONS.md in apolloclaw2. The price
// is never printed here; the customer sees it in the checkout before paying anything.
//
// The primary button inverts on the dark sections. The brand navy is too close to the
// near-black navy ground to read as a button there, so on dark it becomes the light tint
// carrying deep-navy text. On light grounds it is the brand navy carrying white.

type Size = "md" | "lg";

const pad: Record<Size, string> = {
  md: "px-8 py-3 text-base",
  lg: "px-10 py-4 text-lg",
};

const base = "inline-block rounded font-semibold transition";

const primaryOnDark = `${base} bg-brand-tint text-ground hover:bg-[#9BAFE1]`;
const primaryOnLight = `${base} bg-brand text-white hover:bg-brand-dark`;

const secondaryOnDark = `${base} bg-transparent text-white border border-white/50 hover:bg-white/10 hover:border-white`;
const secondaryOnLight = `${base} bg-transparent text-ink border border-ink/25 hover:bg-ink/5 hover:border-ink/50`;

export function CtaPair({
  size = "md",
  on = "dark",
  className = "",
}: {
  size?: Size;
  on?: "dark" | "light";
  className?: string;
}) {
  const dark = on === "dark";
  return (
    <div className={`flex justify-center gap-4 flex-wrap ${className}`}>
      <a href={BUILD_LINK} className={`${dark ? primaryOnDark : primaryOnLight} ${pad[size]}`}>
        Build Your Agent
      </a>
      <a
        href={DEMO_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={`${dark ? secondaryOnDark : secondaryOnLight} ${pad[size]}`}
      >
        Schedule Your Consultation
      </a>
    </div>
  );
}

/** The closing section every interior page ends on. */
export function ClosingCta({
  heading = "Ready to Meet Your AI Sales Agent?",
  body = "Build your agent online in about fifteen minutes, or schedule a 30-minute consultation and we will show you exactly how it would be configured for your sales motion.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section id="book-demo" className="grid-dark-section py-24 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-brand-tint font-semibold mb-4">
          Get Started
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{heading}</h2>
        <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto">
          {body}
        </p>
        <CtaPair size="lg" on="dark" />
      </div>
    </section>
  );
}

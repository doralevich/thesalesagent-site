import { BUILD_LINK, DEMO_LINK } from "@/lib/site";

// The hero: copy left, agent right. A blueprint grid that brightens toward the middle,
// a soft brand-coloured glow behind the text, and the mascot floating on the right.
//
// Shared across all three agent sites - only the words, the mascot and the brand token
// change. See DECISIONS.md in apolloclaw2.

export function Hero({
  badge,
  title,
  punch,
  sub,
  mascot,
  mascotAlt,
}: {
  badge: string;
  title: React.ReactNode;
  punch: string;
  sub: string;
  /** Omit until a transparent cutout exists. The copy then centres and the hero still
   *  reads correctly - better than a white JPEG box on the dark ground. */
  mascot?: string;
  mascotAlt?: string;
}) {
  return (
    <section className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className={`hero-row${mascot ? "" : " hero-row-solo"}`}>
        <div className="hero-copy">
          <div className="hero-badge">
            <span aria-hidden="true" className="hero-badge-dot">
              &#9670;
            </span>
            {badge}
          </div>
          <h1 className="hero-h1">{title}</h1>
          <p className="hero-punch">{punch}</p>
          <p className="hero-sub">{sub}</p>
          <div className="hero-ctas">
            <a href={BUILD_LINK} className="btn-brand">
              Build My Agent
            </a>
            <a
              href={DEMO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>

        {mascot && (
          <div className="hero-mascot-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={mascot} alt={mascotAlt ?? ""} className="hero-mascot" />
          </div>
        )}
      </div>
    </section>
  );
}

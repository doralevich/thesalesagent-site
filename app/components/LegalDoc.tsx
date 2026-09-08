import Nav from "./Nav";
import { Footer } from "./Footer";

// Shared shell for /privacy and /terms. Deliberately plain: these are documents somebody
// skims for one specific answer, not marketing pages, so the job is legibility and nothing
// else. Same nav and footer as the rest of the site so it does not feel like a different
// property.

export type LegalBlock =
  | { kind: "prose"; text: string }
  | { kind: "bullets"; items: string[] };

export type LegalSection = { heading: string; blocks: LegalBlock[] };

export default function LegalDoc({
  title,
  effective,
  intro,
  sections,
}: {
  title: string;
  effective: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <Nav />
      <main className="bg-cream py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-ink mb-3">{title}</h1>
          <p className="text-xs uppercase tracking-widest text-ink/45 font-semibold mb-8">
            Effective {effective}
          </p>
          <p className="text-[15px] leading-[1.75] text-ink/75 mb-12">{intro}</p>

          {sections.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2 className="text-xl font-bold text-ink mb-3">{section.heading}</h2>
              {section.blocks.map((block, i) =>
                block.kind === "prose" ? (
                  <p key={i} className="text-[15px] leading-[1.75] text-ink/75 mb-4">
                    {block.text}
                  </p>
                ) : (
                  <ul key={i} className="mb-4 space-y-2">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="text-[15px] leading-[1.75] text-ink/75 pl-5 relative before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )
              )}
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

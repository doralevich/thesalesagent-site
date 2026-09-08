// The masthead every interior page opens on. Same dark ruled ground as the home hero,
// shorter, so an interior page reads as part of the same site without competing with it.

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="grid-dark-section py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-brand-tint font-semibold mb-6">
          {eyebrow}
        </p>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
          {title}
        </h1>
        {children ? (
          <div className="text-lg text-gray-300 leading-relaxed">{children}</div>
        ) : null}
      </div>
    </section>
  );
}

/** Section label. Green on light grounds, the light tint on the dark ones. */
export function Label({ children, on = "light" }: { children: React.ReactNode; on?: "light" | "dark" }) {
  return (
    <p
      className={`text-xs uppercase tracking-widest font-semibold mb-4 ${
        on === "dark" ? "text-brand-tint" : "text-brand"
      }`}
    >
      {children}
    </p>
  );
}

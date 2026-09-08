import Link from "next/link";
import { AUDIENCES, CONTACT_EMAIL, CONTACT_PHONE, PARENT_SITE, SITE_NAME } from "@/lib/site";

const learn = [
  { label: "What It Does", href: "/how-it-works" },
  { label: "What Is an Agent?", href: "/what-is-an-agent" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link href="/" aria-label={`${SITE_NAME} home`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/the-sales-agent-wordmark.svg"
                alt={SITE_NAME}
                className="w-44 h-auto"
              />
            </Link>
            <p className="text-sm text-gray-500 mt-4 leading-relaxed">
              A private AI agent built around how you win, how you lose, and the line nothing crosses
              without you reading it first.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-ink font-semibold mb-4">
              Who It&apos;s For
            </p>
            <ul className="space-y-2">
              {AUDIENCES.map((a) => (
                <li key={a.slug}>
                  <Link href={`/${a.slug}`} className="text-sm text-gray-600 hover:text-brand transition">
                    {a.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-ink font-semibold mb-4">Learn</p>
            <ul className="space-y-2">
              {learn.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-gray-600 hover:text-brand transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-ink font-semibold mb-4">Contact</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-brand transition">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a href="tel:+19173635487" className="hover:text-brand transition">
                  {CONTACT_PHONE}
                </a>
              </li>
              <li className="pt-2">Roslyn Heights, NY</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href={PARENT_SITE} target="_blank" rel="noopener noreferrer" aria-label="Apollo Claw">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/apolloclaw-logo.jpg" alt="Apollo Claw" className="h-8 w-auto" />
          </a>
          <div className="flex items-center gap-6 text-xs text-gray-400">
            <Link href="/privacy" className="hover:text-brand transition">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-brand transition">
              Terms
            </Link>
            <span>&copy; {new Date().getFullYear()} {SITE_NAME}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

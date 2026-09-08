"use client";

import { useState } from "react";
import Link from "next/link";
import { BUILD_LINK, DEMO_LINK, NAV_LINKS, AUDIENCES, PARENT_SITE, SITE_NAME } from "@/lib/site";

// Wide header: a thin utility bar over a roomy main row. Wordmark left, mono uppercase
// links centred, the build CTA right. The links are deliberately far apart and small -
// the bar reads as chrome, and the one green button is the only thing competing for a
// click.

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-nav">
      <div className="nav-topbar">
        <div className="nav-topbar-inner">
          <a href={`${PARENT_SITE}/dashboard`} className="nav-topbar-link">
            My Dashboard
          </a>
        </div>
      </div>

      <div className="nav-main">
        <Link href="/" aria-label={`${SITE_NAME} home`} className="nav-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/the-sales-agent-wordmark.svg" alt={SITE_NAME} />
        </Link>

        <nav className="nav-links" aria-label="Main">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="nav-cta">
          <a href={BUILD_LINK} className="btn-brand btn-sm">
            Build My Agent
          </a>
        </div>

        <button
          className="nav-hamburger"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={open ? "ham ham-1-open" : "ham"} />
          <span className={open ? "ham ham-2-open" : "ham"} />
          <span className={open ? "ham ham-3-open" : "ham"} />
        </button>
      </div>

      {open && (
        <div className="nav-drawer">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="nav-drawer-link" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <div className="nav-drawer-group">Who It&apos;s For</div>
          {AUDIENCES.map((a) => (
            <Link
              key={a.slug}
              href={`/${a.slug}`}
              className="nav-drawer-link nav-drawer-sub"
              onClick={() => setOpen(false)}
            >
              {a.label}
            </Link>
          ))}
          <a href={BUILD_LINK} className="btn-brand nav-drawer-cta" onClick={() => setOpen(false)}>
            Build My Agent
          </a>
          <a
            href={DEMO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost nav-drawer-cta"
            onClick={() => setOpen(false)}
          >
            Schedule a Consultation
          </a>
        </div>
      )}
    </header>
  );
}

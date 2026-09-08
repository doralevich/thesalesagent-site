"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";

const STORAGE_KEY = "sales-cookie-consent";

// Cookie banner gating Google Analytics on this site.
//
// Ported from theceoagent.ai's CookieConsent (itself ported from apolloclaw.ai's own) so every
// site in the agent family behaves identically, with this site's own storage key - a choice made
// here should not silently apply to a different domain, and cannot anyway since localStorage is
// per-origin.
//
// THE BANNER IS NOT THE GATE. Google Consent Mode v2 in app/layout.tsx defaults
// analytics_storage to 'denied', so GA writes nothing until the Accept button below calls
// gtag('consent','update',...). Declining is therefore a real decline, not a hidden dialog with
// tracking running underneath - which is the difference between honouring the privacy policy and
// merely appearing to.
//
// This site sets no other cookies: no forms, no accounts, no session. So there is no "cookies
// needed to keep you signed in" caveat here, because there are none. If that ever changes, this
// copy changes with it.

function subscribe(onChange: () => void) {
  // Only fires for writes from OTHER tabs; a same-tab click is handled by local state below.
  window.addEventListener("storage", onChange);
  return () => window.removeEventListener("storage", onChange);
}

function readStored(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    // Private mode, or storage disabled: treat as undecided rather than crashing. Analytics stay
    // denied in that case, which is the right way for this to fail.
    return null;
  }
}

// "We are on the server, or have not hydrated yet" - distinct from a real null, which means
// "hydrated, and this visitor has not chosen yet". Read through useSyncExternalStore rather than
// an effect so the server and the first client paint agree, instead of flashing the banner
// during hydration.
const UNKNOWN = "unknown";

export default function CookieConsent() {
  const stored = useSyncExternalStore(subscribe, readStored, () => UNKNOWN);
  // Same-tab choice, so the banner dismisses on click without waiting for a storage event.
  const [justDecided, setJustDecided] = useState<string | null>(null);
  const choice = justDecided ?? stored;

  function decide(value: "accepted" | "declined") {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // Nothing to persist to. The consent update below still applies for this page view.
    }
    if (value === "accepted" && typeof window !== "undefined") {
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      w.gtag?.("consent", "update", { analytics_storage: "granted" });
    }
    setJustDecided(value);
  }

  // Nothing before hydration, and nothing once a choice exists.
  if (choice === UNKNOWN || choice) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed inset-x-0 bottom-0 z-[60] p-4 md:p-5"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-xl bg-ground p-5 shadow-2xl ring-1 ring-white/10 md:flex-row md:items-center md:gap-6 md:p-6">
        <p className="flex-1 text-[13px] leading-[1.6] text-white/70">
          We use Google Analytics to understand how this site is used. It stays off until you
          accept, and the site works the same either way.{" "}
          <Link href="/privacy" className="text-white underline underline-offset-2">
            Privacy Policy
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => decide("declined")}
            className="rounded-md border border-white/20 px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-white/10"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="rounded-md bg-brand px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.08em] text-white transition-all hover:brightness-110"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

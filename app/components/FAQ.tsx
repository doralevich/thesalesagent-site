"use client";

import { useState } from "react";

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="grid md:grid-cols-2 gap-x-16">
      {[0, 1].map((col) => (
        <div key={col}>
          {items
            .filter((_, i) => i % 2 === col)
            .map((item) => {
              const i = items.indexOf(item);
              const isOpen = open === i;
              return (
                <div key={item.q} className="border-b border-gray-100">
                  <button
                    className="w-full flex items-center justify-between py-4 text-left gap-4"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-ink text-sm leading-snug">{item.q}</span>
                    <span
                      className={`text-brand text-xl shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-4 text-sm text-gray-600 leading-relaxed">{item.a}</div>
                  )}
                </div>
              );
            })}
        </div>
      ))}
    </div>
  );
}

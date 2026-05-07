"use client";

import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{ borderColor: "var(--border)", background: "oklch(97% 0.010 95 / 0.95)", backdropFilter: "blur(12px)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span
            className="text-xl font-black"
            style={{ fontFamily: "var(--font-nunito)", color: "var(--surface)" }}
          >
            Don&apos;t Panic
          </span>
          <span
            className="text-xs uppercase tracking-[0.16em] font-semibold"
            style={{ fontFamily: "var(--font-dmsans)", color: "var(--text-muted)" }}
          >
            Handyman
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {[["#services", "Services"], ["#about", "About"], ["#process", "Process"], ["#faq", "FAQ"], ["#contact", "Contact"]].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-semibold transition-colors duration-200"
              style={{ color: "var(--text-secondary)", fontFamily: "var(--font-dmsans)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--surface)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="tel:6476786858"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 font-bold text-sm transition-all duration-200 active:scale-[0.97]"
          style={{ background: "var(--surface)", color: "var(--text-on-surface)", fontFamily: "var(--font-nunito)", borderRadius: "6px" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--surface-light)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "var(--surface)")}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.73 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.68 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.49 6.49l1.02-1.02a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          647-678-6858
        </a>

        <button
          className="md:hidden p-2"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
          style={{ color: "var(--text-primary)" }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? (
              <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
            ) : (
              <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          className="md:hidden border-t py-4 px-6 flex flex-col gap-4"
          style={{ borderColor: "var(--border)", background: "oklch(97% 0.010 95 / 0.98)" }}
        >
          {[["#services", "Services"], ["#about", "About"], ["#process", "Process"], ["#faq", "FAQ"], ["#contact", "Contact"]].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-base font-semibold py-1"
              style={{ color: "var(--text-secondary)", fontFamily: "var(--font-dmsans)" }}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="tel:6476786858"
            className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 font-bold text-sm"
            style={{ background: "var(--surface)", color: "var(--text-on-surface)", fontFamily: "var(--font-nunito)", borderRadius: "6px" }}
          >
            Call 647-678-6858
          </a>
        </div>
      )}
    </header>
  );
}

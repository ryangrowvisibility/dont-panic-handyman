"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What areas do you serve?",
    a: "Don't Panic Handyman serves Mississauga, Toronto, and the broader GTA. Dimitry covers residential clients throughout the region. Call 647-678-6858 to confirm your address before booking.",
  },
  {
    q: "Do you offer same-day service?",
    a: "Yes. Same-day appointments are available depending on schedule. Several clients specifically highlight getting a same-day visit. Call in the morning for the best chance of a same-day slot.",
  },
  {
    q: "What kinds of jobs do you handle?",
    a: "The job list is wide: curtain and blind installation, TV mounting, furniture assembly, wall painting, drywall patching, laminate flooring, baseboards, caulking, tiling, minor plumbing (faucets, sinks), appliance repair (dryers, washers, dishwashers, fridges, ovens), and general home repairs. If you're unsure whether your job qualifies, call — the answer is usually yes.",
  },
  {
    q: "How do you handle pricing?",
    a: "Pricing is provided upfront. Multiple clients mention fair, reasonable rates as a highlight. There are no surprise charges after the job is done. Call to get a clear estimate before booking.",
  },
  {
    q: "Are you available on weekends?",
    a: "Yes. Don't Panic Handyman is open 7 days a week until 9 pm. Weekend bookings are available and common. Call or message to check availability for your preferred day.",
  },
  {
    q: "What should I expect on the day of service?",
    a: "Dimitry arrives on time, communicates clearly throughout the job, and leaves the space clean when finished. Clients consistently highlight punctuality, professional communication, and no mess left behind. You will know what is happening at every step.",
  },
];

export default function AccordionFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="divide-y" style={{ borderColor: "var(--border)" }}>
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            className="w-full flex items-start justify-between gap-4 py-5 text-left transition-colors duration-200"
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            aria-expanded={openIdx === i}
          >
            <span
              className="text-base font-bold leading-snug"
              style={{
                color: openIdx === i ? "var(--surface)" : "var(--text-primary)",
                fontFamily: "var(--font-nunito)",
                transition: "color 200ms",
              }}
            >
              {faq.q}
            </span>
            <span
              className="mt-0.5 shrink-0 transition-transform duration-200"
              style={{ transform: openIdx === i ? "rotate(45deg)" : "rotate(0deg)", color: "var(--accent)" }}
              aria-hidden="true"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </span>
          </button>
          {openIdx === i && (
            <div
              className="pb-5 text-base leading-relaxed"
              style={{ color: "var(--text-secondary)", fontFamily: "var(--font-dmsans)" }}
            >
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

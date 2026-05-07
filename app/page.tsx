import NavBar from "./components/NavBar";
import HeroCTA from "./components/HeroCTA";
import StatBlock from "./components/StatBlock";
import AccordionFAQ from "./components/AccordionFAQ";

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18"/>
        <path d="M9 21V9"/>
      </svg>
    ),
    title: "Curtains & Blinds",
    description: "Perfect leveling, solid mounting. Blackout curtains, heavy drapes, ceiling-mount rods, custom brackets — every window done right.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="15" rx="2"/>
        <polyline points="17 2 12 7 7 2"/>
      </svg>
    ),
    title: "TV Mounting",
    description: "Clean cable management, solid wall anchoring, perfect height. Flat screens, curved displays, any wall type including drywall and concrete.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 20h20"/>
        <path d="M5 20V8l7-6 7 6v12"/>
        <path d="M9 20v-6h6v6"/>
      </svg>
    ),
    title: "Furniture Assembly",
    description: "IKEA, Wayfair, Amazon — any flat-pack assembled correctly, efficiently, and sturdy from the first use.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 8h18"/>
        <circle cx="12" cy="14" r="3"/>
      </svg>
    ),
    title: "Appliance Repair",
    description: "Dryers, washers, dishwashers, fridges, ovens, stove repair, range hood and microwave installation. Most appliances diagnosed and repaired on the first visit.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22V12"/>
        <path d="M5 12H2a10 10 0 0 0 20 0h-3"/>
        <path d="M8 6l4-4 4 4"/>
        <path d="M12 2v10"/>
      </svg>
    ),
    title: "Painting & Drywall",
    description: "Interior wall painting including nursery, accent walls, and whole rooms. Drywall patching and repair done cleanly — no visible seams after completion.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M8 12h8"/>
        <path d="M12 8v8"/>
      </svg>
    ),
    title: "Flooring, Tiling & Plumbing",
    description: "Laminate installation, baseboards, caulking, tiling, and minor plumbing — faucet installs, water filter setup, sink replacement. Clean, precise work on every surface.",
  },
];

const testimonials = [
  {
    name: "Denzil D.",
    location: "Mississauga",
    service: "General handyman",
    rating: 5,
    review:
      "Quick to set up appointments, easy to talk to, fabulous work done quickly at a reasonable price. A complete 5 stars — I recommend Dimitry to everyone I know who needs work done at home.",
  },
  {
    name: "Artur K.",
    location: "Mississauga",
    service: "Water filter installation",
    rating: 5,
    review:
      "Same-day visit. Smooth job from start to finish. No mess left behind. Dimitry communicated clearly and got it done exactly as expected. Will absolutely use again.",
  },
  {
    name: "Brittany M.",
    location: "Mississauga",
    service: "Nursery painting & finishing",
    rating: 5,
    review:
      "Professional, punctual, and incredibly detail-oriented from start to finish. The result was a warm, welcoming nursery we were proud to bring our baby home to. Dimitry treated the project like it was his own.",
  },
];

const process = [
  {
    step: "01",
    title: "Call or Message",
    description:
      "Reach Dimitry at 647-678-6858. Describe what you need — most jobs are scoped in a 5-minute call. Same-day and next-day appointments are available depending on schedule.",
  },
  {
    step: "02",
    title: "Get a Clear Estimate",
    description:
      "Pricing is provided upfront, before any work begins. No surprises after completion. You know exactly what you are paying before Dimitry arrives.",
  },
  {
    step: "03",
    title: "Dimitry Arrives On Time",
    description:
      "Punctuality is a consistent theme in every review. He arrives when he says he will, communicates if anything changes, and starts work without delay.",
  },
  {
    step: "04",
    title: "Clean, Professional Work",
    description:
      "The job is done right. Detail-oriented finish on everything — whether it is a single curtain rod or a full room repaint. Clean execution, clean workspace.",
  },
  {
    step: "05",
    title: "Space Left Clean",
    description:
      "When the job is done, the space is clean. No debris, no dust, no packaging left behind. Multiple clients specifically highlight that Dimitry leaves no mess.",
  },
];

export default function Home() {
  return (
    <>
      <NavBar />

      {/* HERO */}
      <section
        className="pt-32 pb-20 lg:pt-40 lg:pb-28"
        style={{ background: "var(--bg)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            {/* Perfect rating badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold mb-8"
              style={{ background: "var(--accent-light)", color: "var(--accent)", fontFamily: "var(--font-nunito)", borderRadius: "6px" }}
            >
              <div className="flex gap-0.5" aria-hidden="true">
                {[1,2,3,4,5].map((s) => (
                  <svg key={s} width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              5.0 Perfect Rating — 26 Google Reviews
            </div>

            <h1
              className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] mb-6"
              style={{ fontFamily: "var(--font-nunito)", color: "var(--text-primary)", letterSpacing: "-0.02em" }}
            >
              Mississauga&apos;s calm,{" "}
              <span style={{ color: "var(--surface)" }}>professional</span>{" "}
              handyman.
            </h1>

            <p
              className="text-lg leading-relaxed max-w-2xl"
              style={{ color: "var(--text-secondary)", fontFamily: "var(--font-dmsans)" }}
            >
              Dimitry handles curtain installation, TV mounting, furniture assembly, painting, drywall, appliance repair, flooring, and more across Mississauga, Toronto, and the GTA. Same-day service available. Open until 9 pm daily.
            </p>

            <HeroCTA />

            <div className="flex items-center gap-6 mt-10 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--surface)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.73 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.68 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.49 6.49l1.02-1.02a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span style={{ color: "var(--text-secondary)", fontFamily: "var(--font-dmsans)", fontSize: "0.9rem" }}>647-678-6858</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--surface)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span style={{ color: "var(--text-secondary)", fontFamily: "var(--font-dmsans)", fontSize: "0.9rem" }}>Open until 9 pm daily</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--surface)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span style={{ color: "var(--text-secondary)", fontFamily: "var(--font-dmsans)", fontSize: "0.9rem" }}>Mississauga, Toronto, GTA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STAT BLOCK */}
      <section style={{ background: "var(--surface)" }}>
        <div className="max-w-7xl mx-auto">
          <StatBlock />
        </div>
      </section>

      {/* SERVICES — Asymmetric grid */}
      <section id="services" className="py-20 lg:py-28" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <p
              className="text-xs uppercase tracking-[0.18em] font-semibold mb-3"
              style={{ color: "var(--accent)", fontFamily: "var(--font-dmsans)" }}
            >
              What Dimitry Handles
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black"
              style={{ fontFamily: "var(--font-nunito)", color: "var(--text-primary)", letterSpacing: "-0.02em" }}
            >
              One call,{" "}
              <span style={{ color: "var(--surface)" }}>any job.</span>
            </h2>
          </div>

          {/* 2-col on md, 3-col on lg — with top featured item spanning wider */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 divide-y md:divide-y-0 border" style={{ borderColor: "var(--border)" }}>
            {services.map((service, i) => (
              <div
                key={i}
                className="p-8 flex flex-col gap-4 border-b md:border-r"
                style={{
                  borderColor: "var(--border)",
                  background: i === 0 ? "var(--bg-warm)" : "var(--bg)",
                }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center"
                  style={{ color: "var(--surface)", background: "var(--accent-light)", borderRadius: "8px" }}
                >
                  {service.icon}
                </div>
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: "var(--font-nunito)", color: "var(--text-primary)" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)", fontFamily: "var(--font-dmsans)" }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <p
            className="mt-6 text-sm"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-dmsans)" }}
          >
            Not sure if your job qualifies? Call 647-678-6858 — the answer is usually yes.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        className="py-20 lg:py-28"
        style={{ background: "var(--surface)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <p
              className="text-xs uppercase tracking-[0.18em] font-semibold mb-3"
              style={{ color: "oklch(68% 0.140 55)", fontFamily: "var(--font-dmsans)" }}
            >
              What Clients Say
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black"
              style={{ fontFamily: "var(--font-nunito)", color: "var(--text-on-surface)", letterSpacing: "-0.02em" }}
            >
              26 clients.{" "}
              <span style={{ color: "oklch(68% 0.140 55)" }}>26 five-stars.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="p-8 flex flex-col gap-5"
                style={{
                  background: "var(--surface-light)",
                  border: "1px solid var(--border-dark)",
                  borderRadius: "8px",
                }}
              >
                <div className="flex gap-0.5" aria-label={`${t.rating} stars`}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="oklch(68% 0.140 55)" aria-hidden="true">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>
                <p
                  className="text-base leading-relaxed flex-1"
                  style={{ fontFamily: "var(--font-dmsans)", color: "var(--text-on-surface)" }}
                >
                  &ldquo;{t.review}&rdquo;
                </p>
                <div className="pt-4" style={{ borderTop: "1px solid var(--border-dark)" }}>
                  <p
                    className="text-sm font-bold"
                    style={{ color: "var(--text-on-surface)", fontFamily: "var(--font-nunito)" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "oklch(60% 0.030 155)", fontFamily: "var(--font-dmsans)" }}
                  >
                    {t.location} &middot; {t.service}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-20 lg:py-28" style={{ background: "var(--bg-warm)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <p
              className="text-xs uppercase tracking-[0.18em] font-semibold mb-3"
              style={{ color: "var(--accent)", fontFamily: "var(--font-dmsans)" }}
            >
              How It Works
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black"
              style={{ fontFamily: "var(--font-nunito)", color: "var(--text-primary)", letterSpacing: "-0.02em" }}
            >
              From call to{" "}
              <span style={{ color: "var(--surface)" }}>clean finish.</span>
            </h2>
          </div>

          <div className="divide-y" style={{ borderColor: "var(--border)" }}>
            {process.map((p) => (
              <div key={p.step} className="py-8 grid md:grid-cols-[80px_1fr] gap-4 lg:gap-10 items-start">
                <span
                  className="text-3xl font-black"
                  style={{ fontFamily: "var(--font-nunito)", color: "var(--accent)", opacity: 0.7 }}
                >
                  {p.step}
                </span>
                <div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: "var(--font-nunito)", color: "var(--text-primary)" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed max-w-2xl"
                    style={{ color: "var(--text-secondary)", fontFamily: "var(--font-dmsans)" }}
                  >
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / STANDARDS */}
      <section
        id="about"
        className="py-20 lg:py-28"
        style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p
                className="text-xs uppercase tracking-[0.18em] font-semibold mb-4"
                style={{ color: "var(--accent)", fontFamily: "var(--font-dmsans)" }}
              >
                About Dimitry
              </p>
              <h2
                className="text-3xl lg:text-4xl font-black mb-6"
                style={{ fontFamily: "var(--font-nunito)", color: "var(--text-primary)", letterSpacing: "-0.02em" }}
              >
                Don&apos;t Panic.{" "}
                <span style={{ color: "var(--surface)" }}>Dimitry handles it.</span>
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)", fontFamily: "var(--font-dmsans)" }}>
                Don&apos;t Panic Handyman was built on a simple promise: when something in your home needs fixing, the last thing you should have to worry about is who to call. Dimitry operates throughout Mississauga, Toronto, and the GTA — available 7 days a week until 9 pm, with same-day service on most requests.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)", fontFamily: "var(--font-dmsans)" }}>
                The business is built on referrals. A client calls about curtain installation and comes back three months later for appliance repair. They send their neighbour, who sends their colleague. That chain only works when every job is done right, and Dimitry has maintained a perfect 5-star rating across 26 verified reviews to show it.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)", fontFamily: "var(--font-dmsans)" }}>
                Fair pricing, professional communication, and clean work on every job — that is the standard every client gets, regardless of project size.
              </p>
            </div>
            <div>
              <p
                className="text-xs uppercase tracking-[0.18em] font-semibold mb-4"
                style={{ color: "var(--accent)", fontFamily: "var(--font-dmsans)" }}
              >
                What Sets It Apart
              </p>
              <h2
                className="text-3xl lg:text-4xl font-black mb-6"
                style={{ fontFamily: "var(--font-nunito)", color: "var(--text-primary)", letterSpacing: "-0.02em" }}
              >
                Same-day service.{" "}
                <span style={{ color: "var(--surface)" }}>No mess. No surprises.</span>
              </h2>
              <div className="space-y-5">
                {[
                  ["Same-Day Availability", "Most requests can be accommodated same-day or next-day. Call in the morning and Dimitry is often on-site by afternoon."],
                  ["Upfront Pricing", "You know what you are paying before the job begins. No additional charges appear after completion."],
                  ["Clean Work Area", "Every job finishes with the space left clean. Tools, packaging, debris — all cleared before leaving."],
                  ["Open Until 9 PM Daily", "Available every day of the week, including weekends, until 9 pm. Evening and weekend slots are available for clients who work during the day."],
                ].map(([title, desc]) => (
                  <div key={title as string} className="flex gap-4">
                    <div
                      className="w-6 h-6 shrink-0 flex items-center justify-center mt-0.5"
                      style={{ color: "var(--surface)" }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <div>
                      <p
                        className="font-bold mb-1"
                        style={{ fontFamily: "var(--font-nunito)", color: "var(--text-primary)", fontSize: "0.95rem" }}
                      >
                        {title}
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--text-secondary)", fontFamily: "var(--font-dmsans)" }}
                      >
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 lg:py-28" style={{ background: "var(--bg-warm)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <p
              className="text-xs uppercase tracking-[0.18em] font-semibold mb-3"
              style={{ color: "var(--accent)", fontFamily: "var(--font-dmsans)" }}
            >
              Common Questions
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black"
              style={{ fontFamily: "var(--font-nunito)", color: "var(--text-primary)", letterSpacing: "-0.02em" }}
            >
              Before you{" "}
              <span style={{ color: "var(--surface)" }}>call.</span>
            </h2>
          </div>
          <AccordionFAQ />
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-20 lg:py-28"
        style={{ background: "var(--surface)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p
                className="text-xs uppercase tracking-[0.18em] font-semibold mb-4"
                style={{ color: "oklch(68% 0.140 55)", fontFamily: "var(--font-dmsans)" }}
              >
                Get In Touch
              </p>
              <h2
                className="text-4xl lg:text-5xl font-black mb-6"
                style={{ fontFamily: "var(--font-nunito)", color: "var(--text-on-surface)", letterSpacing: "-0.02em" }}
              >
                Don&apos;t panic.{" "}
                <span style={{ color: "oklch(68% 0.140 55)" }}>Just call.</span>
              </h2>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "oklch(70% 0.020 155)", fontFamily: "var(--font-dmsans)" }}
              >
                Describe what you need. Dimitry will tell you honestly whether he can handle it, give you a clear price, and be on-site same-day or at a time that works for you.
              </p>

              <div className="space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] font-semibold mb-1" style={{ color: "oklch(50% 0.020 155)", fontFamily: "var(--font-dmsans)" }}>Phone</p>
                  <a
                    href="tel:6476786858"
                    className="text-3xl font-black transition-opacity hover:opacity-80"
                    style={{ fontFamily: "var(--font-nunito)", color: "var(--text-on-surface)" }}
                  >
                    647-678-6858
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] font-semibold mb-1" style={{ color: "oklch(50% 0.020 155)", fontFamily: "var(--font-dmsans)" }}>Hours</p>
                  <p style={{ color: "oklch(70% 0.020 155)", fontFamily: "var(--font-dmsans)" }}>Open daily until 9 pm — including weekends</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] font-semibold mb-1" style={{ color: "oklch(50% 0.020 155)", fontFamily: "var(--font-dmsans)" }}>Service Area</p>
                  <p style={{ color: "oklch(70% 0.020 155)", fontFamily: "var(--font-dmsans)" }}>Mississauga, Toronto, and the GTA</p>
                </div>
              </div>
            </div>

            <div
              className="p-10 lg:p-14"
              style={{ background: "var(--surface-light)", border: "1px solid var(--border-dark)", borderRadius: "8px" }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.12em] mb-4" style={{ color: "oklch(50% 0.020 155)", fontFamily: "var(--font-dmsans)" }}>
                Ready to book?
              </p>
              <p
                className="text-3xl lg:text-4xl font-black mb-8"
                style={{ fontFamily: "var(--font-nunito)", color: "var(--text-on-surface)", lineHeight: 1.15 }}
              >
                Call now and get a same-day estimate.
              </p>
              <a
                href="tel:6476786858"
                className="inline-flex items-center gap-3 px-8 py-4 font-bold text-base transition-all duration-200 active:scale-[0.97] w-full justify-center"
                style={{ background: "var(--accent)", color: "#fff", fontFamily: "var(--font-nunito)", borderRadius: "6px" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.73 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.68 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.49 6.49l1.02-1.02a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                647-678-6858
              </a>
              <p
                className="text-xs mt-4 text-center"
                style={{ color: "oklch(55% 0.020 155)", fontFamily: "var(--font-dmsans)" }}
              >
                Same-day appointments available. Open until 9 pm daily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-8 border-t"
        style={{ background: "var(--surface)", borderColor: "var(--border-dark)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span
              className="text-base font-black"
              style={{ fontFamily: "var(--font-nunito)", color: "var(--text-on-surface)" }}
            >
              Don&apos;t Panic Handyman
            </span>
            <span className="text-xs" style={{ color: "oklch(50% 0.020 155)", fontFamily: "var(--font-dmsans)" }}>
              Mississauga · Toronto · GTA
            </span>
          </div>
          <p className="text-xs" style={{ color: "oklch(45% 0.020 155)", fontFamily: "var(--font-dmsans)" }}>
            &copy; {new Date().getFullYear()} Don&apos;t Panic Handyman. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

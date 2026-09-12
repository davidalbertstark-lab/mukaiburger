"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";

const REASONS = [
  {
    n: "01",
    t: "Structured Project Management",
    short: "Clear plans. Clear ownership.",
    d: "Defined programs, clear ownership and weekly progress reporting — you always know what's happening and what's next.",
    stat: "Weekly reporting",
    statSub: "every active site",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-full w-full">
        <rect x="8" y="8" width="32" height="32" rx="4" />
        <line x1="8" y1="18" x2="40" y2="18" />
        <line x1="16" y1="8" x2="16" y2="18" />
        <line x1="32" y1="8" x2="32" y2="18" />
        <path d="M14 28l5 5 11-11" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    n: "02",
    t: "Transparent Communication",
    short: "Direct access. No switchboards.",
    d: "Clients reach decision-makers directly. Issues surface early — not after they've become expensive problems.",
    stat: "Direct leadership",
    statSub: "access on every project",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-full w-full">
        <path d="M8 12a4 4 0 014-4h24a4 4 0 014 4v16a4 4 0 01-4 4H28l-8 8v-8H12a4 4 0 01-4-4V12z" />
        <line x1="16" y1="20" x2="32" y2="20" />
        <line x1="16" y1="26" x2="26" y2="26" />
      </svg>
    ),
  },
  {
    n: "03",
    t: "Quality-Focused Execution",
    short: "Specs are non-negotiable.",
    d: "Materials verified, work inspected, quality documented — not assumed. Specifications set at contract are what get built.",
    stat: "Zero-compromise",
    statSub: "on specifications",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-full w-full">
        <circle cx="24" cy="20" r="12" />
        <path d="M24 10v10l6 4" />
        <circle cx="24" cy="38" r="4" />
        <path d="M21 38l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    n: "04",
    t: "Cost Optimisation",
    short: "Your budget works harder.",
    d: "Rigorous quantity surveying from day one — your budget goes to construction, not to waste or surprises.",
    stat: "QS-validated",
    statSub: "bills of quantities",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-full w-full">
        <circle cx="24" cy="24" r="16" />
        <path d="M24 14v2m0 16v2M18 20c0-1.5 2.7-3 6-3s6 1.5 6 3-2.7 3-6 3-6 1.5-6 3 2.7 3 6 3 6-1.5 6-3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: "05",
    t: "Safety & Compliance",
    short: "Site discipline. Zero shortcuts.",
    d: "Commitment to industry standards and responsible site practices. Unsafe sites cost money, time and reputation.",
    stat: "Full compliance",
    statSub: "CAC, COREN, NSE standards",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-full w-full">
        <path d="M24 6l14 6v12c0 9-7 14-14 18C17 38 10 33 10 24V12l14-6z" />
        <path d="M18 24l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    n: "06",
    t: "Attention to Detail",
    short: "Nothing is unimportant.",
    d: "Careful execution at every stage — from specification review to final finishes. The difference between good and great lives in the details.",
    stat: "Stage-by-stage",
    statSub: "quality inspection",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-full w-full">
        <circle cx="22" cy="22" r="12" />
        <path d="M31 31l9 9" strokeLinecap="round" />
        <circle cx="22" cy="22" r="4" />
      </svg>
    ),
  },
];

export function WhyChooseUs() {
  const [active, setActive] = useState(0);
  const r = REASONS[active];

  return (
    <section className="bg-background py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <p className="font-corporate text-[10px] tracking-[0.3em] text-ember">
            WHY CLIENTS CHOOSE US
          </p>
          <h2
            className="mt-4 max-w-2xl font-display font-medium leading-[1.06] text-ink"
            style={{ fontSize: "clamp(1.9rem, 4.5vw, 3.5rem)" }}
          >
            Reliability is a system —<br className="hidden sm:block" /> not a slogan.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Most construction problems aren't about materials — they're about management, communication and accountability.
          </p>
        </Reveal>

        {/* Desktop View */}
        <div className="mt-12 hidden lg:grid lg:grid-cols-[300px_1fr] lg:gap-6">
          <div className="flex flex-col gap-2">
            {REASONS.map((reason, i) => (
              <button
                key={reason.n}
                type="button"
                onClick={() => setActive(i)}
                className={`group relative flex items-center gap-4 rounded-xl px-5 py-4 text-left transition-all duration-300 ${
                  active === i ? "bg-ink text-white" : "bg-secondary text-ink hover:bg-border/50"
                }`}
              >
                <span
                  className={`font-corporate text-[9px] tracking-[0.28em] ${
                    active === i ? "text-ember" : "text-ink/30"
                  }`}
                >
                  {reason.n}
                </span>
                <div className="flex-1 min-w-0">
                  <p
                    className={`font-display text-sm font-medium leading-tight ${
                      active === i ? "text-white" : "text-ink"
                    }`}
                  >
                    {reason.t}
                  </p>
                  <p
                    className={`mt-0.5 font-corporate text-[8px] tracking-[0.12em] ${
                      active === i ? "text-white/45" : "text-ink/30"
                    }`}
                  >
                    {reason.short}
                  </p>
                </div>
                {active === i && (
                  <motion.div
                    layoutId="activeBar"
                    className="h-4 w-0.5 flex-shrink-0 rounded-full bg-ember"
                  />
                )}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-2xl border border-border bg-background p-10"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 text-ink/[0.04]">
                {r.icon}
              </div>
              <span className="font-corporate text-[10px] tracking-[0.35em] text-ember">
                {r.n}
              </span>
              <div className="mt-4 h-14 w-14 text-ember">{r.icon}</div>
              <h3 className="mt-5 font-display text-3xl font-medium text-ink">{r.t}</h3>
              <p className="mt-4 max-w-lg text-base leading-loose text-muted-foreground">
                {r.d}
              </p>
              <div className="mt-8 inline-flex items-center gap-4 rounded-xl bg-secondary px-5 py-3.5">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ember" />
                <div>
                  <p className="font-display text-lg font-medium text-ink">{r.stat}</p>
                  <p className="font-corporate text-[9px] tracking-[0.18em] text-ink/45">
                    {r.statSub.toUpperCase()}
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-0.5 w-full bg-border">
                <motion.div
                  className="h-full bg-ember"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  style={{ originX: 0 }}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Accordion */}
        <div className="mt-10 flex flex-col gap-2 lg:hidden">
          {REASONS.map((reason, i) => {
            const isOpen = active === i;
            return (
              <div
                key={reason.n}
                className={`overflow-hidden rounded-2xl border transition-colors ${
                  isOpen ? "border-ember/30 bg-ink" : "border-border bg-background"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActive(isOpen ? (i + 1) % REASONS.length : i)}
                  className="flex w-full items-center gap-4 p-5 text-left"
                >
                  <span
                    className={`font-corporate text-[9px] tracking-[0.28em] ${
                      isOpen ? "text-ember" : "text-ink/30"
                    }`}
                  >
                    {reason.n}
                  </span>
                  <p className={`flex-1 font-display text-base font-medium ${isOpen ? "text-white" : "text-ink"}`}>
                    {reason.t}
                  </p>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className={`text-xl leading-none ${isOpen ? "text-ember" : "text-ink/20"}`}
                  >
                    +
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-sm leading-relaxed text-white/55">{reason.d}</p>
                    <div className="mt-4 inline-flex items-center gap-3 rounded-lg bg-white/8 px-4 py-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                      <p className="font-corporate text-[8px] tracking-[0.15em] text-white/45">
                        {reason.stat.toUpperCase()} — {reason.statSub.toUpperCase()}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

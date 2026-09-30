"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";

const REASONS = [
  {
    n: "01",
    t: "Structured Project Management",
    short: "Clear Programs · Direct Ownership",
    d: "Structured critical-path scheduling, weekly progress audits, and direct accountability — you always possess exact site visibility.",
    stat: "WEEKLY AUDIT",
    statSub: "EVERY ACTIVE SITE",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    n: "02",
    t: "Direct Executive Communication",
    short: "Direct Access · Zero Switchboards",
    d: "Principals and institutional clients communicate directly with Engr. Matthew Adewale. Critical decisions resolve immediately without bureaucratic delays.",
    stat: "DIRECT LINE",
    statSub: "EXECUTIVE DIRECTIVE",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    n: "03",
    t: "Uncompromising Quality Control",
    short: "Specifications Non-Negotiable",
    d: "Rebar tensile tests, batching plant calibration, optical theodolite leveling, and cube crushing records strictly documented for structural integrity.",
    stat: "100% SPEC COMPLIANCE",
    statSub: "BS & COREN STANDARDS",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    n: "04",
    t: "Transparent Quantity Surveying",
    short: "Value Engineering · Zero Waste",
    d: "Comprehensive Bill of Quantities (BOQ) with realistic rate analysis. Capital goes straight into foundational concrete and steel, avoiding wasteful surprises.",
    stat: "QS-VALIDATED",
    statSub: "ACCURATE BILL OF QUANTITIES",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v12M15 9.5a3.5 3.5 0 00-7 0c0 4 7 2 7 6a3.5 3.5 0 01-7 0" />
      </svg>
    ),
  },
  {
    n: "05",
    t: "Regulatory Trust & Certifications",
    short: "COREN · CAC · NSE Registered",
    d: "Fully registered civil engineering contractor (CAC RC 1300720, Inc. 2015) in full standing with the Council for the Regulation of Engineering in Nigeria.",
    stat: "CAC RC 1300720",
    statSub: "OFFICIAL REGISTRATION",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    n: "06",
    t: "Heavy Civil & High-Rise Mastery",
    short: "From Bridges to Penthouses",
    d: "Demonstrated technical versatility across federal highways, deep swamp culverts, massive retaining walls, and multi-storey towers in Banana Island.",
    stat: "DUAL EXPERTISE",
    statSub: "CIVIL & ULTRA-LUXURY",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="9" y1="22" x2="9" y2="2" />
        <path d="M4 12h16" />
      </svg>
    ),
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative bg-black py-24 md:py-36 text-white overflow-hidden border-b border-white/[0.08]">
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-1/3 top-1/2 h-[500px] w-[700px] rounded-full bg-ember/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1 text-[10px] font-semibold tracking-[0.25em] text-ember">
                <span>●</span> WHY PRINCIPALS CHOOSE US
              </div>
              <h2 className="mt-4 font-display text-[clamp(2.1rem,4.5vw,3.6rem)] font-bold leading-[1.06] tracking-tight text-white">
                Reliability is a system.{" "}
                <br />
                <span className="apple-text-gradient">Not a slogan.</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-zinc-400">
              The operational discipline, engineering clarity, and transparency that differentiate Mukaiburger across Nigeria.
            </p>
          </div>
        </Reveal>

        {/* Apple Bento Grid of 6 Pillars */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((r, idx) => (
            <motion.div
              key={r.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.06 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-zinc-950/70 p-7 sm:p-8 backdrop-blur-2xl transition-all duration-500 hover:border-white/25 hover:bg-zinc-900/60 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06] border border-white/10 text-amber-400 group-hover:scale-110 transition-transform">
                    {r.icon}
                  </div>
                  <span className="font-corporate text-[9px] font-semibold tracking-widest text-zinc-500">
                    PILLAR · {r.n}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-xl font-bold text-white transition-colors group-hover:text-amber-300">
                  {r.t}
                </h3>
                <p className="mt-1 font-corporate text-[8.5px] font-semibold tracking-[0.18em] text-ember uppercase">
                  {r.short}
                </p>
                <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-zinc-400">
                  {r.d}
                </p>
              </div>

              {/* Stat footer */}
              <div className="mt-6 border-t border-white/[0.06] pt-4 flex items-center justify-between">
                <div>
                  <p className="font-display text-xs font-bold text-white">
                    {r.stat}
                  </p>
                  <p className="font-corporate text-[8px] tracking-wider text-zinc-500">
                    {r.statSub}
                  </p>
                </div>
                <span className="h-1.5 w-1.5 rounded-full bg-ember animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

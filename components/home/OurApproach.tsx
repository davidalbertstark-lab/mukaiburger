"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";

const STEPS = [
  {
    n: "01",
    t: "Geotechnical & Structural Appraisal",
    d: "Subsurface soil investigation, bearing capacity analysis, load modeling, and statutory compliance mapping before site deployment.",
    spec: "SOIL DENSITY & CORE BORING",
  },
  {
    n: "02",
    t: "Rigorous Precision Engineering",
    d: "Optical theodolite coordinates, detailed structural rebar schedules, hydraulic flow calculations, and resource logistic sequencing.",
    spec: "THEODOLITE & CRUSH TESTS",
  },
  {
    n: "03",
    t: "Disciplined Field Execution",
    d: "Continuous on-site supervision by Engr. Matthew Adewale, batching plant calibration, laser level checks, and weekly milestone verification.",
    spec: "DAILY SITE TELEMETRY",
  },
  {
    n: "04",
    t: "Quality Clearance & Handover",
    d: "Non-destructive testing, compliance sign-offs, COREN certification documentation, as-built drawings, and lifelong durability warranties.",
    spec: "COREN & AS-BUILT CLOSURE",
  },
];

export function OurApproach() {
  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-36 text-white border-b border-white/[0.08]">
      {/* Ambient Spotlight */}
      <div className="pointer-events-none absolute right-1/3 top-1/2 h-[500px] w-[600px] rounded-full bg-ember/10 blur-[160px]" />
      <div className="blueprint-grid absolute inset-0 opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1 text-[10px] font-semibold tracking-[0.25em] text-ember">
                <span>●</span> QUALITY ASSURANCE PROTOCOL
              </div>
              <h2 className="mt-4 font-display text-[clamp(2.1rem,4.5vw,3.6rem)] font-bold leading-[1.06] tracking-tight text-white">
                Engineered with rigor.{" "}
                <br />
                <span className="apple-text-gradient">From subsurface to sky.</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-zinc-400">
              The four disciplined milestones that protect capital investment and ensure structural longevity.
            </p>
          </div>
        </Reveal>

        {/* 4 Apple Step Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, idx) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-zinc-950/70 p-7 backdrop-blur-2xl transition-all duration-500 hover:border-white/25 hover:bg-zinc-900/60 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/[0.06] border border-white/10 font-corporate text-xs font-bold text-amber-400">
                    {s.n}
                  </span>
                  <span className="font-corporate text-[8.5px] font-semibold tracking-widest text-zinc-500">
                    PHASE {idx + 1}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-lg font-bold leading-snug text-white transition-colors group-hover:text-amber-300">
                  {s.t}
                </h3>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-400">
                  {s.d}
                </p>
              </div>

              <div className="mt-6 border-t border-white/[0.06] pt-4">
                <span className="font-corporate text-[8px] font-semibold tracking-[0.2em] text-ember uppercase">
                  {s.spec}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

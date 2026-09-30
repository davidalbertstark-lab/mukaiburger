"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";
import { IMGS } from "./constants";

const SERVICES = [
  {
    n: "01",
    t: "Civil & Structural Engineering",
    sub: "Monolithic Durability",
    d: "High-tolerance reinforced concrete framing, raft foundations, and structural calculations engineered to British and Nigerian standards.",
    specs: ["BS 8110 / EC2", "Structural Rigor", "Load-Bearing Audits"],
    img: IMGS.project1,
  },
  {
    n: "02",
    t: "Highway & Major River Bridges",
    sub: "Heavy Civil Works",
    d: "Federal dual-carriageway excavation, swamp subgrade stabilization, precast culvert hydraulic channels, and deep bridge abutments.",
    specs: ["28.6km Dual Corridors", "CAT Heavy Plant", "Subgrade Stabilization"],
    img: "/projects/calabar-itu-excavator-culvert.jpg",
  },
  {
    n: "03",
    t: "Subterranean Marine Foundations",
    sub: "Waterfront Enclaves",
    d: "Specialized bored piling, marine-grade concrete casting, and subterranean semi-raft foundations on challenging coastal terrains like Banana Island.",
    specs: ["Marine Concrete", "Bored Piling", "Semi-Raft Engineering"],
    img: "/projects/banana-island-waterfront-aerial.jpg",
  },
  {
    n: "04",
    t: "Turnkey Project Management",
    sub: "Rigorous Supervision",
    d: "End-to-end site directive, optical theodolite alignment, material crushing tests, and uncompromising Quality Assurance from foundation to handover.",
    specs: ["Theodolite Precision", "QA / QC Audits", "Timely Handover"],
    img: IMGS.process,
  },
];

export function ServicesSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="relative bg-black py-24 md:py-36 text-white overflow-hidden border-b border-white/[0.08]">
      {/* Ambient Radial Spotlight */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[600px] rounded-full bg-ember/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1 text-[10px] font-semibold tracking-[0.25em] text-ember">
                <span>●</span> CORE TECHNICAL CAPABILITIES
              </div>
              <h2 className="mt-4 font-display text-[clamp(2.1rem,4.5vw,3.6rem)] font-bold leading-[1.06] tracking-tight text-white">
                Engineered for extreme performance.{" "}
                <br />
                <span className="apple-text-gradient">Executed with discipline.</span>
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/[0.05] px-5 py-2.5 text-xs font-semibold text-zinc-300 backdrop-blur-xl transition hover:bg-white hover:text-black hover:border-white"
            >
              Explore Full Engineering Scope →
            </Link>
          </div>
        </Reveal>

        {/* Apple 2x2 Bento Services Matrix */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((s, idx) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[32px] border border-white/10 bg-zinc-950/65 p-7 sm:p-9 backdrop-blur-2xl transition-all duration-500 hover:border-white/25 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),inset_0_1px_0_0_rgba(255,255,255,0.2)]"
            >
              {/* Card Header & Spec Number */}
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 font-corporate text-[9px] font-semibold tracking-[0.25em] text-ember">
                    DISCIPLINE · {s.n}
                  </span>
                  <span className="font-corporate text-[10px] tracking-wider text-zinc-500">
                    {s.sub.toUpperCase()}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-2xl sm:text-3xl font-bold text-white transition-colors group-hover:text-amber-300">
                  {s.t}
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-400">
                  {s.d}
                </p>
              </div>

              {/* Visual Preview Frame */}
              <div className="mt-8 relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
                <Image
                  src={s.img}
                  alt={s.t}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Floating Specs Chips */}
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
                  {s.specs.map((sp) => (
                    <span
                      key={sp}
                      className="rounded-full border border-white/15 bg-black/60 px-2.5 py-0.5 font-corporate text-[8px] font-semibold tracking-wider text-zinc-200 backdrop-blur-md"
                    >
                      {sp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Link */}
              <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-4">
                <Link
                  href="/services"
                  className="font-corporate text-[9px] font-semibold tracking-[0.22em] text-ember transition-colors hover:text-white inline-flex items-center gap-1.5"
                >
                  FULL TECHNICAL METHODOLOGY →
                </Link>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-white/50 group-hover:bg-white group-hover:text-black transition-all">
                  <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3">
                    <path fillRule="evenodd" d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

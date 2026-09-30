"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";
import { IMGS } from "./constants";

const SECTORS = [
  { t: "Residential", d: "Bespoke private villas, luxury enclaves and gated estate communities.", img: IMGS.sec_residential },
  { t: "Commercial", d: "Corporate headquarters, retail complexes and mixed-use commercial centres.", img: IMGS.sec_commercial },
  { t: "Government", d: "Federal ministries, public assembly facilities and state secretariats.", img: IMGS.sec_government },
  { t: "Healthcare", d: "Specialist paediatric hospitals, clinical complexes and emergency centres.", img: IMGS.sec_healthcare },
  { t: "Educational", d: "University postgraduate centres, faculty complexes and academic hubs.", img: IMGS.sec_educational },
  { t: "Industrial", d: "Refinery substructures, heavy manufacturing facilities and logistics hubs.", img: IMGS.sec_industrial },
  { t: "Infrastructure", d: "Federal highway dualizations, major river bridges and hydraulic channels.", img: "/projects/calabar-itu-excavator-culvert.jpg" },
  { t: "Institutional", d: "Civic auditoriums, national institutions and high-security installations.", img: IMGS.sec_institutional },
];

export function SectorsSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative bg-black py-24 md:py-36 text-white overflow-hidden border-b border-white/[0.08]">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1 text-[10px] font-semibold tracking-[0.25em] text-ember">
                <span>●</span> SECTORS OF OPERATION
              </div>
              <h2 className="mt-4 font-display text-[clamp(2.1rem,4.5vw,3.6rem)] font-bold leading-[1.06] tracking-tight text-white">
                Engineering excellence across{" "}
                <br />
                <span className="apple-text-gradient">vital national industries.</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-zinc-400">
              Adapting high-tolerance structural methodologies across eight critical sectors nationwide.
            </p>
          </div>
        </Reveal>

        {/* Apple style card grid */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {SECTORS.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.04}>
              <div
                className="group relative cursor-pointer overflow-hidden rounded-[26px] border border-white/10 bg-zinc-950/70 backdrop-blur-xl transition-all duration-500 hover:border-white/30 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.9)]"
                style={{ aspectRatio: "3/4" }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Image with zoom on hover */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ scale: hovered === i ? 1.08 : 1 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image src={s.img} alt={s.t} fill className="object-cover" />
                </motion.div>

                {/* Dark gradient overlay */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ opacity: hovered === i ? 0.95 : 0.75 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.15) 100%)",
                  }}
                />

                {/* Content at bottom */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <motion.div
                    className="mb-2.5 h-[2px] rounded-full bg-ember"
                    animate={{ width: hovered === i ? "2.5rem" : "1.25rem" }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <h3 className="font-display text-base font-bold text-white sm:text-lg">
                    {s.t}
                  </h3>
                  <motion.p
                    className="mt-1 text-xs leading-relaxed text-zinc-300"
                    animate={{ opacity: hovered === i ? 1 : 0.6, y: hovered === i ? 0 : 4 }}
                    transition={{ duration: 0.3 }}
                  >
                    {s.d}
                  </motion.p>
                </div>

                {/* Top-right index badge */}
                <div className="absolute right-3 top-3">
                  <span className="font-corporate text-[9px] font-semibold tracking-wider text-zinc-400 bg-black/60 px-2.5 py-0.5 rounded-full border border-white/10 backdrop-blur-md">
                    0{i + 1}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Apple style nationwide callout bar */}
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-col gap-4 rounded-[26px] border border-white/10 bg-zinc-950/70 p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-7 backdrop-blur-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/[0.06] border border-white/10 text-ember">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-display text-base font-bold text-white sm:text-lg">
                Nationwide Civil Execution Capability
              </p>
              <p className="mt-1 text-xs leading-relaxed text-zinc-400 sm:text-sm">
                Headquartered in Abuja, FCT — active flagships across Lagos, Cross River, Akwa Ibom, Enugu, Kaduna and beyond.
              </p>
            </div>
            <Link
              href="/contact"
              className="apple-pill-btn flex-shrink-0 self-start sm:self-auto rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-black transition-all hover:bg-zinc-200"
            >
              Discuss Technical Scope →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

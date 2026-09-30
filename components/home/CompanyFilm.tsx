"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";

export function CompanyFilm() {
  return (
    <section className="relative bg-black py-24 md:py-36 text-white overflow-hidden border-b border-white/[0.08]">
      {/* Ambient Cinema Backdrop Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember/15 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1 text-[10px] font-semibold tracking-[0.25em] text-ember">
                <span>●</span> CINEMATIC ON-SITE REEL
              </div>
              <h2 className="mt-4 font-display text-[clamp(2.1rem,4.5vw,3.6rem)] font-bold leading-[1.06] tracking-tight text-white">
                Engineered in the field.{" "}
                <br />
                <span className="apple-text-gradient">Verified on the ground.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
              Direct witness to the men, heavy CAT machinery, optical theodolites, and monolithic concrete pours driving Nigeria&apos;s critical infrastructure.
            </p>
          </div>
        </Reveal>

        {/* Apple Studio Display Frame */}
        <Reveal delay={0.1}>
          <div className="group relative mt-12 overflow-hidden rounded-[32px] border border-white/15 bg-zinc-950 p-2 sm:p-3 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.95),inset_0_1px_0_0_rgba(255,255,255,0.2)] backdrop-blur-2xl">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[26px]">
              <Image
                src="/projects/calabar-itu-excavator-culvert.jpg"
                alt="Mukaiburger heavy plant site operations"
                fill
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Apple Play Pill Button */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-20 w-20 items-center justify-center rounded-full border border-white/25 bg-black/60 backdrop-blur-2xl transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:scale-110 shadow-[0_0_40px_rgba(255,255,255,0.25)] pointer-events-auto cursor-pointer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-1 h-8 w-8 transition-colors"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.div>
              </div>

              {/* Top Telemetry */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-3.5 py-1 text-[9px] font-semibold tracking-widest text-white backdrop-blur-xl">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                  FIELD DIRECTIVE · 4K REEL
                </span>
                <span className="font-corporate text-[10px] tracking-wider text-zinc-400 bg-black/50 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
                  CALABAR–ITU CORRIDOR
                </span>
              </div>

              {/* Bottom Captions */}
              <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 text-white">
                <div>
                  <p className="font-corporate text-[9px] font-semibold tracking-[0.25em] text-ember">
                    DOCUMENTED ARCHIVE · 2020 – 2026
                  </p>
                  <p className="mt-1 font-display text-lg sm:text-2xl font-bold">
                    Subgrade Stabilization &amp; River Crossings
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-corporate text-[9px] tracking-wider text-zinc-400">
                    DURATION
                  </p>
                  <p className="font-display text-sm font-semibold text-white">
                    01:24 ARCHIVE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

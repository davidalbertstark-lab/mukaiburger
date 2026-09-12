"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";
import { IMGS } from "./constants";

const ICONIC_PROJECTS = [
  { slug: "commercial-office-complex", t: "Commercial Office Complex", loc: "Abuja, FCT", cat: "Building Construction", year: "2024", img: IMGS.cta },
  { slug: "inter-city-road-drainage", t: "Inter-City Road & Drainage", loc: "Kaduna State", cat: "Civil Engineering", year: "2023", img: IMGS.project2 },
  { slug: "vertical-tower-development", t: "Vertical Tower Development", loc: "Abuja, FCT", cat: "Building Construction", year: "2023", img: IMGS.project1 },
  { slug: "site-preparation-earthworks", t: "Site Preparation & Earthworks", loc: "Niger State", cat: "Civil Engineering", year: "2023", img: IMGS.project4 },
  { slug: "institutional-facility-complex", t: "Institutional Facility Complex", loc: "Lagos State", cat: "Building Construction", year: "2022", img: IMGS.process },
  { slug: "road-rehabilitation-project", t: "Road Rehabilitation Project", loc: "Abuja, FCT", cat: "Civil Engineering", year: "2022", img: IMGS.project3 },
];

export function IconicProjects() {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const allCards = [...ICONIC_PROJECTS, ...ICONIC_PROJECTS];

  return (
    <section className="bg-secondary py-20 md:py-28 overflow-hidden">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <div className="flex items-end justify-between">
            <div>
              <p className="font-corporate text-[10px] tracking-[0.3em] text-ember">
                SELECTED PROJECTS
              </p>
              <h2
                className="mt-4 font-display font-medium leading-[1.06] text-ink"
                style={{ fontSize: "clamp(1.9rem, 4.5vw, 3.5rem)" }}
              >
                Real projects.
                <span className="text-ink/30"> Real progress.</span>
                <br />Real results.
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden flex-shrink-0 font-corporate text-[10px] tracking-[0.28em] text-ink/40 transition-colors hover:text-ember sm:block"
            >
              ALL PROJECTS →
            </Link>
          </div>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
            A selection of projects reflecting our commitment to quality, reliability and disciplined execution.
          </p>
        </Reveal>
      </div>

      {/* Scrolling strip */}
      <div className="mt-10 relative">
        {/* Edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-secondary to-transparent sm:w-20" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-secondary to-transparent sm:w-20" />

        <style>{`
          @keyframes scrollLeft {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          .projects-strip {
            animation: scrollLeft 42s linear infinite;
          }
          .projects-strip.paused {
            animation-play-state: paused;
          }
        `}</style>

        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            setHoveredIdx(null);
          }}
        >
          <div
            className={`projects-strip flex gap-4 sm:gap-5 ${isPaused ? "paused" : ""}`}
            style={{ width: "max-content", paddingLeft: "1.25rem" }}
          >
            {allCards.map((p, i) => (
              <Link
                key={`${p.slug}-${i}`}
                href={`/projects/${p.slug}`}
                className="group relative flex-shrink-0 block"
                style={{ width: "clamp(240px, 28vw, 380px)" }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "4/5" }}>
                  <div
                    className="absolute inset-0 transition-transform duration-700 ease-out"
                    style={{ transform: hoveredIdx === i ? "scale(1.07)" : "scale(1)" }}
                  >
                    <Image src={p.img} alt={p.t} fill className="object-cover opacity-85" />
                  </div>
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.1) 55%, transparent 100%)",
                    }}
                  />

                  {/* Category badge */}
                  <div className="absolute left-3 top-3">
                    <span className="rounded-full border border-white/15 bg-ink/50 px-2.5 py-1 font-corporate text-[8px] tracking-[0.2em] text-ember/80 backdrop-blur-sm">
                      {p.cat.toUpperCase()}
                    </span>
                  </div>

                  {/* Year */}
                  <div className="absolute right-3 top-3">
                    <span className="font-corporate text-[9px] tracking-[0.18em] text-white/30">
                      {p.year}
                    </span>
                  </div>

                  {/* Arrow indicator */}
                  <div
                    className="absolute right-3 bottom-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-ember/80 backdrop-blur-sm transition-all duration-300"
                    style={{
                      opacity: hoveredIdx === i ? 1 : 0,
                      transform: hoveredIdx === i ? "scale(1)" : "scale(0.75)",
                    }}
                  >
                    <span className="text-white text-sm font-medium">↗</span>
                  </div>
                </div>

                <div className="pt-3.5 pb-2">
                  <h3 className="font-display text-base font-medium leading-snug text-ink transition-colors group-hover:text-ember sm:text-lg">
                    {p.t}
                  </h3>
                  <p className="mt-1.5 flex items-center gap-1.5 font-corporate text-[9px] tracking-[0.15em] text-ink/40">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3 w-3 flex-shrink-0 text-ember/60">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {p.loc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Pause indicator */}
        <AnimatePresence>
          {isPaused && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pointer-events-none absolute right-5 top-3 flex items-center gap-2 rounded-full border border-border bg-background/90 px-3 py-1.5 backdrop-blur-sm sm:right-8"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-ember" />
              <span className="font-corporate text-[8px] tracking-[0.2em] text-ink/50">
                PAUSED
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile link */}
      <div className="mx-auto mt-6 max-w-7xl px-5 sm:hidden lg:px-10">
        <Link
          href="/projects"
          className="font-corporate text-[10px] tracking-[0.28em] text-ink/40 hover:text-ember"
        >
          ALL PROJECTS →
        </Link>
      </div>
    </section>
  );
}

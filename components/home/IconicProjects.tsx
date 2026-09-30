"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";
import { VERIFIED_PROJECTS } from "./constants";

const PILLAR_TABS = [
  { id: "all", label: "All Flagships" },
  { id: "infrastructure", label: "Infrastructure & Civil" },
  { id: "luxury", label: "Banana Island Luxury" },
  { id: "turnkey", label: "Turnkey & Commercial" },
] as const;

export function IconicProjects() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredProjects =
    activeTab === "all"
      ? VERIFIED_PROJECTS.slice(0, 6)
      : VERIFIED_PROJECTS.filter((p) => p.pillar === activeTab);

  return (
    <section className="relative bg-black py-24 md:py-36 overflow-hidden text-white border-b border-white/[0.08]">
      {/* Ambient Radial Spotlight */}
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-[500px] w-[600px] rounded-full bg-ember/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
        {/* Apple Style Editorial Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1 text-[10px] font-semibold tracking-[0.25em] text-ember">
                <span>●</span> VERIFIED ENGINEERING ROSTER
              </div>
              <h2 className="mt-5 font-display text-[clamp(2.1rem,4.5vw,3.6rem)] font-bold leading-[1.06] tracking-tight text-white">
                Architectural elegance.{" "}
                <br />
                <span className="apple-text-gradient">Structural supremacy.</span>
              </h2>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/[0.05] px-5 py-2.5 text-xs font-semibold text-zinc-300 backdrop-blur-xl transition hover:bg-white hover:text-black hover:border-white"
            >
              Explore Full 15 Flagships Archive →
            </Link>
          </div>
        </Reveal>

        {/* Apple Interactive Segmented Control */}
        <div className="mt-10 flex overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-zinc-950/80 p-1.5 backdrop-blur-2xl">
            {PILLAR_TABS.map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={[
                    "relative whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-colors duration-300",
                    active ? "text-black" : "text-zinc-400 hover:text-white",
                  ].join(" ")}
                >
                  {active && (
                    <motion.div
                      layoutId="active-project-tab"
                      className="absolute inset-0 rounded-full bg-white shadow-[0_2px_12px_rgba(255,255,255,0.3)]"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Apple Bento Grid Layout */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, idx) => {
              const isHeroCard = idx === 0;
              return (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className={[
                    "group relative overflow-hidden rounded-[28px] border border-white/10 bg-zinc-950/60 backdrop-blur-xl transition-all duration-500",
                    "hover:border-white/25 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.9),inset_0_1px_0_0_rgba(255,255,255,0.2)]",
                    isHeroCard
                      ? "md:col-span-2 lg:col-span-2 md:row-span-2 flex flex-col justify-between"
                      : "flex flex-col justify-between",
                  ].join(" ")}
                >
                  {/* Card Visual / Image */}
                  <div
                    className={[
                      "relative w-full overflow-hidden",
                      isHeroCard ? "aspect-[16/10] sm:aspect-[16/9]" : "aspect-[4/3]",
                    ].join(" ")}
                  >
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                    {/* Top Floating Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="rounded-full border border-white/15 bg-black/60 px-3 py-1 font-corporate text-[8.5px] font-semibold tracking-[0.2em] text-amber-400 backdrop-blur-md">
                        {p.category.toUpperCase()}
                      </span>
                      <span className="font-corporate text-[9px] font-semibold tracking-wider text-white/70 bg-black/40 rounded-full px-2.5 py-0.5 backdrop-blur-md border border-white/10">
                        {p.year}
                      </span>
                    </div>

                    {/* Corner Apple Arrow Button */}
                    <div className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:scale-110">
                      <svg viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
                        <path fillRule="evenodd" d="M4.22 11.78a.75.75 0 010-1.06L9.44 5.5H5.75a.75.75 0 010-1.5h5.5a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0V6.56l-5.22 5.22a.75.75 0 01-1.06 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* Card Content & Telemetry */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                    <div>
                      <p className="font-corporate text-[9px] font-semibold tracking-[0.2em] text-ember">
                        {p.location.toUpperCase()}
                      </p>
                      <h3
                        className={[
                          "mt-2 font-display font-bold leading-tight text-white transition-colors group-hover:text-amber-300",
                          isHeroCard ? "text-xl sm:text-2xl" : "text-lg",
                        ].join(" ")}
                      >
                        {p.title}
                      </h3>
                      <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-zinc-400 line-clamp-2">
                        {p.description}
                      </p>
                    </div>

                    {/* Scope Telemetry Chip */}
                    <div className="mt-5 border-t border-white/[0.08] pt-4 flex items-center justify-between text-xs text-zinc-400">
                      <span className="font-corporate text-[8.5px] tracking-wider text-zinc-400">
                        CLIENT: <strong className="text-zinc-200">{p.client}</strong>
                      </span>
                      <Link
                        href={`/projects#${p.slug}`}
                        className="font-corporate text-[9px] font-semibold tracking-[0.2em] text-amber-400 hover:underline"
                      >
                        VIEW SPEC →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

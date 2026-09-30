"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";
import { IMGS } from "./constants";

const SERVICES = [
  {
    n: "01",
    t: "Building Construction",
    d: "Residential, commercial and institutional developments executed with precision from foundation to completion.",
    tags: ["Residential", "Commercial", "Institutional"],
    img: IMGS.project1,
  },
  {
    n: "02",
    t: "Civil Engineering",
    d: "Roads, drainage systems and infrastructure works designed for durability and performance across Nigerian terrain.",
    tags: ["Roads", "Drainage", "Earthworks"],
    img: IMGS.project2,
  },
  {
    n: "03",
    t: "Engineering Supervision",
    d: "Independent supervision ensuring specs are met, materials verified and progress documented at every stage.",
    tags: ["QA / QC", "Site Audit", "Compliance"],
    img: IMGS.project3,
  },
  {
    n: "04",
    t: "Renovation & Rehabilitation",
    d: "Upgrades, repairs and restoration work carried out with minimal disruption and maximum efficiency.",
    tags: ["Retrofitting", "Structural Repair", "Upgrades"],
    img: IMGS.project4,
  },
];

export function ServicesSection() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="bg-ink py-20 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <p className="font-corporate text-[10px] tracking-[0.3em] text-ember">
            WHAT WE DO
          </p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2
              className="font-display font-medium leading-[1.05] tracking-tight text-white"
              style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
            >
              Four disciplines.<br className="hidden sm:block" /> One standard.
            </h2>
            <p className="max-w-xs text-sm leading-relaxed text-white/40 sm:text-right">
              Same people, same method — every project.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-0 lg:grid-cols-[1fr_400px] lg:gap-10 xl:gap-16">
          <div className="divide-y divide-white/[0.07]">
            {SERVICES.map((s, i) => {
              const isOpen = active === i;
              return (
                <Reveal key={s.n} delay={i * 0.06}>
                  <button
                    type="button"
                    onClick={() => setActive(isOpen ? null : i)}
                    className="group w-full py-7 text-left"
                  >
                    <div className="flex items-center gap-6">
                      <span
                        className={`font-corporate text-[9px] tracking-[0.32em] transition-colors duration-300 ${
                          isOpen ? "text-ember" : "text-white/20"
                        }`}
                      >
                        {s.n}
                      </span>
                      <h3
                        className={`font-display text-xl font-medium transition-colors duration-300 sm:text-2xl md:text-3xl ${
                          isOpen ? "text-white" : "text-white/50 group-hover:text-white/75"
                        }`}
                      >
                        {s.t}
                      </h3>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`ml-auto flex-shrink-0 text-xl leading-none transition-colors duration-300 ${
                          isOpen ? "text-ember" : "text-white/18 group-hover:text-white/35"
                        }`}
                      >
                        +
                      </motion.span>
                    </div>

                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-12 pr-6 pb-2 pt-4">
                        <p className="text-sm leading-relaxed text-white/50 sm:text-base">
                          {s.d}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {s.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-white/10 px-3 py-1 font-corporate text-[9px] tracking-[0.2em] text-white/30"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Link
                          href="/services"
                          className="mt-5 inline-flex items-center gap-2 font-corporate text-[9px] tracking-[0.3em] text-ember transition-all hover:gap-3"
                        >
                          LEARN MORE →
                        </Link>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mt-5 lg:hidden"
                          >
                            <div className="relative aspect-[16/8] overflow-hidden rounded-xl">
                              <Image
                                src={s.img}
                                alt={s.t}
                                fill
                                className="object-cover opacity-75"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  </button>
                </Reveal>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active ?? "none"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-charcoal"
                >
                  {active !== null && (
                    <Image
                      src={SERVICES[active].img}
                      alt={SERVICES[active].t}
                      fill
                      className="object-cover opacity-75"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                  {active !== null && (
                    <div className="absolute bottom-0 left-0 p-7">
                      <span className="font-corporate text-[9px] tracking-[0.3em] text-ember">
                        {SERVICES[active].n}
                      </span>
                      <p className="mt-2 font-display text-2xl font-medium text-white">
                        {SERVICES[active].t}
                      </p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 border-t border-white/[0.07] pt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 font-corporate text-[10px] tracking-[0.28em] text-white/40 transition-all hover:border-ember hover:text-ember"
            >
              EXPLORE ALL SERVICES →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

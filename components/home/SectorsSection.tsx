"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";
import { IMGS } from "./constants";

const SECTORS = [
  { t: "Residential", d: "Private homes, housing estates and residential complexes.", img: IMGS.sec_residential },
  { t: "Commercial", d: "Office buildings, retail centres and mixed-use developments.", img: IMGS.sec_commercial },
  { t: "Government", d: "Ministries, civic buildings and public infrastructure.", img: IMGS.sec_government },
  { t: "Healthcare", d: "Hospitals, clinics and medical facility construction.", img: IMGS.sec_healthcare },
  { t: "Educational", d: "Schools, universities and learning institution facilities.", img: IMGS.sec_educational },
  { t: "Industrial", d: "Factories, warehouses and industrial facility construction.", img: IMGS.sec_industrial },
  { t: "Infrastructure", d: "Roads, drainage, earthworks and utility networks.", img: IMGS.sec_infra },
  { t: "Institutional", d: "Civic halls, courts, embassies and institutional buildings.", img: IMGS.sec_institutional },
];

export function SectorsSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="bg-ink py-20 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <p className="font-corporate text-[10px] tracking-[0.3em] text-ember">
            SECTORS WE SERVE
          </p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2
              className="font-display font-medium leading-[1.06] text-white"
              style={{ fontSize: "clamp(1.9rem, 4.5vw, 3.5rem)" }}
            >
              Supporting projects across<br className="hidden sm:block" /> diverse industries.
            </h2>
            <p className="max-w-xs text-sm leading-relaxed text-white/40">
              From private developments to public infrastructure — we adapt our expertise to every sector.
            </p>
          </div>
        </Reveal>

        {/* Cinematic image grid */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {SECTORS.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.05}>
              <div
                className="group relative cursor-pointer overflow-hidden rounded-2xl"
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

                {/* Gradient overlay */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ opacity: hovered === i ? 1 : 0.75 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    background:
                      "linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.3) 50%, rgba(10,10,10,0.1) 100%)",
                  }}
                />

                {/* Content at bottom */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <motion.div
                    className="mb-3 h-0.5 rounded-full bg-ember"
                    animate={{ width: hovered === i ? "2.5rem" : "1rem" }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <h3 className="font-display text-base font-medium text-white sm:text-lg">
                    {s.t}
                  </h3>
                  <motion.p
                    className="mt-1.5 text-xs leading-relaxed text-white/55 sm:text-sm"
                    animate={{ opacity: hovered === i ? 1 : 0, y: hovered === i ? 0 : 6 }}
                    transition={{ duration: 0.35 }}
                  >
                    {s.d}
                  </motion.p>
                </div>

                {/* Top-right index badge */}
                <div className="absolute right-3 top-3">
                  <span className="font-corporate text-[9px] tracking-[0.2em] text-white/25">
                    0{i + 1}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Nationwide callout */}
        <Reveal delay={0.2}>
          <div className="mt-5 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-7">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-ember/15 text-ember">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-display text-base font-medium text-white sm:text-lg">
                Nationwide coverage across Nigeria
              </p>
              <p className="mt-1 text-xs leading-relaxed text-white/45 sm:text-sm">
                Headquartered in Abuja, FCT — active projects across Lagos, Kaduna, Niger and more.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 font-corporate text-[10px] tracking-[0.25em] text-ember hover:underline"
            >
              DISCUSS YOUR PROJECT →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

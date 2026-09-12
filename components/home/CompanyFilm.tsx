"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";
import { IMGS } from "./constants";

export function CompanyFilm() {
  return (
    <section className="bg-ink py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-corporate text-[10px] tracking-[0.3em] text-ember">SEE THE WORK</p>
              <h2
                className="mt-4 font-display font-medium leading-[1.06] text-white"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3.25rem)" }}
              >
                We do construction.
                <span className="text-white/30"> Not just talk about it.</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/40">
              The people, equipment and execution behind a Mukaiburger project.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="group relative mt-10 overflow-hidden rounded-2xl sm:rounded-3xl">
            <Image
              src={IMGS.project3}
              alt="Mukaiburger on-site operations"
              width={1920}
              height={1080}
              className="aspect-[16/9] w-full object-cover opacity-70 transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
            <button
              type="button"
              className="absolute inset-0 flex items-center justify-center"
              aria-label="Play company reel"
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-colors group-hover:bg-ember sm:h-20 sm:w-20 md:h-24 md:w-24"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ml-1 h-6 w-6 text-white sm:h-8 sm:w-8"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
            </button>
            <div className="absolute bottom-0 left-0 p-5 text-white sm:p-8">
              <p className="font-corporate text-[9px] tracking-[0.3em] text-ember">
                COMPANY REEL · 01:24
              </p>
              <p className="mt-2 font-display text-lg font-medium sm:text-2xl">
                Foundation to handover —<br className="hidden sm:block" /> a year on site,
                condensed.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

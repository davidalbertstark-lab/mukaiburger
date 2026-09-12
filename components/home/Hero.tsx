"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { IMGS } from "./constants";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.88]);

  // Trust strip: hidden at scroll=0, fades in after 15% scroll
  const trustOpacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);
  const trustY = useTransform(scrollYProgress, [0.15, 0.35], [16, 0]);

  const trustItems = [
    { label: "Founded", val: "2018" },
    { label: "RC Number", val: "1300720" },
    { label: "Coverage", val: "6+ States" },
    { label: "Registered", val: "CAC" },
  ];

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-ink text-white"
      style={{ minHeight: "100svh" }}
    >
      {/* Parallax background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={IMGS.hero}
          alt="Mukaiburger construction site"
          fill
          priority
          className="scale-110 object-cover"
        />
      </motion.div>

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/55 to-ink"
      />
      <div className="blueprint-grid absolute inset-0 opacity-25" />

      {/* RC tag — desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute right-5 top-1/2 hidden -translate-y-1/2 -rotate-90 font-corporate text-[9px] tracking-[0.5em] text-white/20 lg:right-10 lg:block"
      >
        RC · 1300720 · NIGERIA
      </motion.div>

      {/* Main content layout */}
      <div
        className="relative mx-auto flex max-w-7xl flex-col px-5 lg:px-10"
        style={{ minHeight: "100svh" }}
      >
        {/* Spacer below navbar */}
        <div className="h-28 flex-shrink-0 sm:h-32" />

        {/* Hero text */}
        <div className="flex-shrink-0 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-corporate text-[10px] tracking-[0.3em] text-white/55 sm:text-[11px] sm:tracking-[0.32em]"
          >
            <span className="text-ember">●</span>&nbsp; EST. 2018 · ENGINEERING ·
            CONSTRUCTION · INFRASTRUCTURE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-display font-medium leading-[1.06] tracking-tight"
            style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
          >
            Engineering, construction
            <br className="hidden sm:block" /> and infrastructure
            <span className="text-white/40"> —</span>
            <br />
            built on precision,
            <br />
            reliability and trust.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-5 max-w-lg text-sm leading-relaxed text-white/65 sm:text-base"
          >
            Structured, accountable construction across Nigeria — from foundation to
            finish — with disciplined project management and uncompromising quality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <Link
              href="/projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-ink transition hover:bg-ember hover:text-white sm:w-auto"
            >
              View Projects <span aria-hidden>→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/35 px-6 py-3.5 text-sm font-medium text-white transition hover:border-ember hover:bg-ember sm:w-auto"
            >
              Request Consultation
            </Link>
          </motion.div>
        </div>

        {/* Spacer pushing trust strip to bottom */}
        <div className="flex-1" style={{ minHeight: "clamp(20px, 4vh, 48px)" }} />

        {/* Trust strip */}
        <motion.div
          style={{ opacity: trustOpacity, y: trustY }}
          className="mb-6 flex-shrink-0 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.05] backdrop-blur-sm sm:grid-cols-4"
        >
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex flex-col gap-0.5 px-3 py-2.5 sm:px-5 sm:py-4"
            >
              <span className="font-corporate text-[6px] tracking-[0.18em] text-white/30 sm:text-[8px]">
                {item.label.toUpperCase()}
              </span>
              <span className="font-display text-xs font-medium text-white sm:text-sm">
                {item.val}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="pointer-events-none absolute bottom-[140px] right-5 hidden items-center gap-2 font-corporate text-[10px] tracking-[0.3em] text-white/35 sm:flex lg:right-10"
      >
        SCROLL <span className="block h-7 w-px bg-white/20" />
      </motion.div>
    </section>
  );
}

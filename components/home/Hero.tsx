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

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.65, 0.95]);

  const specs = [
    { label: "FOUNDED & INCORPORATED", val: "2015 · CAC RC 1300720" },
    { label: "VERIFIED FLAGSHIPS", val: "15 High-Impact Projects" },
    { label: "GEOGRAPHIC REACH", val: "Nationwide Infrastructure" },
    { label: "REGULATORY COMPLIANCE", val: "COREN & NSE Registered" },
  ];

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden bg-black text-white"
    >
      {/* Cinematic Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={IMGS.hero}
          alt="Mukaiburger engineering site"
          fill
          priority
          className="scale-105 object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black pointer-events-none" />
      </motion.div>

      {/* Apple Dark Gradient Veil & Blueprint Grid */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black pointer-events-none"
      />
      <div className="blueprint-grid absolute inset-0 opacity-20 pointer-events-none" />

      {/* Ambient Top Glow Spotlight */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-ember/15 blur-[120px]" />

      {/* Main Content Area */}
      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 pt-28 pb-12 sm:px-8 sm:pt-36 sm:pb-16">
        {/* Apple Keynote Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1 text-[11px] font-medium tracking-[0.2em] text-zinc-300 backdrop-blur-xl"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-ember animate-pulse" />
          EST. 2015 · CIVIL INFRASTRUCTURE &amp; LUXURY ENGINEERING
        </motion.div>

        {/* Apple Titanium Metallic Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-4xl font-display text-[clamp(2.4rem,6vw,5.2rem)] font-bold leading-[1.04] tracking-tight text-white"
        >
          Engineered for enduring strength.
          <br />
          <span className="apple-text-gradient">
            Built with uncompromising precision.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg sm:leading-relaxed"
        >
          From federal highway dualizations and deep river bridge crossings to subterranean semi-raft foundations on Banana Island, Mukaiburger delivers disciplined civil construction across Nigeria.
        </motion.p>

        {/* Apple Pill Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-zinc-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.35)] active:scale-95"
          >
            Explore 15 Verified Flagships
            <svg viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
              <path fillRule="evenodd" d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/10 hover:border-white/30 active:scale-95"
          >
            Consult Chief Engineer
          </Link>
        </motion.div>
      </div>

      {/* Apple Telemetry Specs Strip (Docked at Bottom) */}
      <div className="relative mx-auto w-full max-w-6xl px-5 pb-6 sm:px-8 sm:pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl sm:grid-cols-4"
        >
          {specs.map((item) => (
            <div
              key={item.label}
              className="flex flex-col justify-center px-4 py-3.5 sm:px-6 sm:py-4 hover:bg-white/[0.03] transition-colors"
            >
              <span className="font-corporate text-[8px] font-semibold tracking-[0.2em] text-zinc-400 sm:text-[9px]">
                {item.label}
              </span>
              <span className="mt-1 font-display text-xs font-semibold text-white sm:text-sm">
                {item.val}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/site/Reveal";
import { IMGS } from "./constants";

const SOCIALS = [
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white py-28 md:py-40 border-b border-white/[0.08]">
      <Image
        src={IMGS.cta}
        alt="Completed Mukaiburger project"
        fill
        className="object-cover opacity-25 scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/70" />
      <div className="blueprint-grid absolute inset-0 opacity-15" />

      {/* Ambient Spotlight */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember/15 blur-[180px]" />

      <div className="relative mx-auto max-w-5xl px-5 text-center lg:px-10">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 text-[10px] font-semibold tracking-[0.25em] text-ember backdrop-blur-xl">
            <span>●</span> INITIATE TECHNICAL CONSULTATION
          </div>

          <h2
            className="mt-6 font-display font-extrabold leading-[1.03] tracking-tight text-white"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.8rem)" }}
          >
            Have a project in mind?
            <br />
            <span className="apple-text-gradient">We are ready when you are.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Whether preparing statutory submissions, undertaking structural soil appraisal, or mobilizing heavy civil plant — our principal engineers are ready to consult.
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="/contact"
              className="apple-pill-btn w-full sm:w-auto gap-2 bg-white px-8 py-4 text-sm font-semibold text-black transition-all hover:bg-zinc-200 hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] active:scale-95"
            >
              Request Formal Proposal
              <svg viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
                <path fillRule="evenodd" d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            </Link>

            <a
              href="https://wa.me/2348032447065"
              className="apple-pill-btn w-full sm:w-auto gap-2 border border-white/20 bg-white/[0.06] px-7 py-4 text-sm font-semibold text-white backdrop-blur-2xl transition-all hover:bg-white/10 hover:border-white/30 active:scale-95"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Direct WhatsApp (+234 803 244 7065)
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-14 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-black/60 px-5 py-2 backdrop-blur-xl text-xs text-zinc-400">
            <span className="font-corporate tracking-wider text-[9.5px]">CAC RC 1300720</span>
            <span className="text-zinc-600">·</span>
            <span className="font-corporate tracking-wider text-[9.5px]">ABUJA &amp; LAGOS HEADQUARTERS</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

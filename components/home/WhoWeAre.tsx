"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/site/Reveal";
import { IMGS } from "./constants";

export function WhoWeAre() {
  return (
    <section className="relative bg-black py-24 md:py-36 overflow-hidden text-white border-b border-white/[0.08]">
      {/* Ambient Radial Spotlight */}
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[450px] w-[550px] -translate-y-1/2 rounded-full bg-ember/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 items-center">
          {/* Left Column: Apple Editorial & Bento Stats (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1 text-[10px] font-semibold tracking-[0.25em] text-ember">
                <span>●</span> CORPORATE IDENTITY &amp; INTEGRITY
              </div>
              <h2 className="mt-5 font-display text-[clamp(2.1rem,4.5vw,3.6rem)] font-bold leading-[1.06] tracking-tight text-white">
                Building with discipline and{" "}
                <span className="apple-text-gradient">generational responsibility.</span>
              </h2>
            </Reveal>

            {/* Apple Frosted Glass Quote Card */}
            <Reveal delay={0.08}>
              <div className="mt-8 rounded-[28px] border border-white/10 bg-zinc-950/60 p-6 md:p-8 backdrop-blur-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
                <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
                  Incorporated in 2015 (<span className="text-white font-medium">CAC RC 1300720</span>), Mukaiburger Engineering Nigeria Limited delivers civil infrastructure, deep foundation engineering, and ultra-luxury building projects across Nigeria under the leadership of seasoned civil engineer{" "}
                  <strong className="text-white font-semibold">Engr. Azeez Mukailah Matthew Adewale</strong>.
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-5">
                  <div>
                    <p className="font-display text-sm font-semibold text-white">
                      Engr. Azeez Mukailah Matthew Adewale
                    </p>
                    <p className="font-corporate text-[9px] tracking-wider text-zinc-400">
                      B.Eng, PGD Civil (ATBU) · MNSE · COREN Reg.
                    </p>
                  </div>
                  <div className="rounded-full bg-ember/15 px-3 py-1 text-[11px] font-semibold text-ember border border-ember/20">
                    &quot;...Sound Quality, Sound Engineering&quot;
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Apple Bento Metric Cards */}
            <Reveal delay={0.14}>
              <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
                {[
                  { val: "2015", label: "INCORPORATED", sub: "CAC RC 1300720" },
                  { val: "13+", label: "YEARS LEADERSHIP", sub: "Executive Directive" },
                  { val: "15", label: "FLAGSHIP WORKS", sub: "Verified Delivery" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 sm:p-5 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.06]"
                  >
                    <span className="font-display text-2xl font-bold text-white sm:text-3xl">
                      {item.val}
                    </span>
                    <p className="mt-1 font-corporate text-[8.5px] font-semibold tracking-[0.2em] text-ember">
                      {item.label}
                    </p>
                    <p className="hidden text-[10px] text-zinc-400 sm:block mt-0.5">
                      {item.sub}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="/about"
                  className="apple-pill-btn group gap-2 rounded-full bg-white/10 px-5 py-2.5 text-xs font-semibold text-white border border-white/15 hover:bg-white hover:text-black transition-all"
                >
                  Read Executive Profile
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <a
                  href="/docs/Mukaiburger_Corporate_Company_Profile_2026.pdf"
                  download
                  className="text-xs text-zinc-400 hover:text-white transition-colors"
                >
                  Download Profile (PDF)
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Apple Studio Display Frame (5 cols) */}
          <Reveal delay={0.12} className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[32px] border border-white/10 bg-zinc-900/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),inset_0_1px_0_0_rgba(255,255,255,0.15)] backdrop-blur-2xl">
              <Image
                src={IMGS.who_we_are}
                alt="Mukaiburger engineering team on site"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                style={{ objectPosition: "center 20%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Top Corner Telemetry Badge */}
              <div className="absolute top-5 left-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/70 px-3 py-1.5 backdrop-blur-xl">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-corporate text-[8.5px] font-semibold tracking-[0.22em] text-zinc-300">
                    FIELD AUDIT · ACTIVE
                  </span>
                </div>
              </div>

              {/* Bottom Specs Bar */}
              <div className="absolute bottom-5 inset-x-5">
                <div className="flex items-center justify-between rounded-2xl border border-white/15 bg-black/75 p-4 backdrop-blur-xl">
                  <div>
                    <p className="font-corporate text-[8px] font-bold tracking-[0.25em] text-ember">
                      TECHNICAL PRINCIPAL
                    </p>
                    <p className="font-display text-sm font-semibold text-white">
                      Engr. Matthew Adewale
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-corporate text-[8px] font-bold tracking-[0.25em] text-zinc-400">
                      NIGERIA
                    </p>
                    <p className="font-display text-xs font-semibold text-white">
                      RC 1300720
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

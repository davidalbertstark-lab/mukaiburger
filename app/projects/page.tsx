import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { VERIFIED_PROJECTS } from "@/components/home/constants";

export const metadata: Metadata = {
  title: "Projects Portfolio — Mukaiburger Engineering Nigeria Limited",
  description:
    "Explore 15 verified civil, structural, ultra-luxury high-rise, and institutional flagships delivered across Nigeria by Mukaiburger Engineering.",
};

export default function ProjectsPage() {
  const infraProjects = VERIFIED_PROJECTS.filter((p) => p.pillar === "infrastructure");
  const luxuryProjects = VERIFIED_PROJECTS.filter((p) => p.pillar === "luxury");
  const turnkeyProjects = VERIFIED_PROJECTS.filter((p) => p.pillar === "turnkey");

  return (
    <div className="bg-black text-white min-h-screen selection:bg-ember selection:text-white">
      {/* ── HEADER (Apple Keynote Style) ── */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden border-b border-white/10">
        <div className="blueprint-grid absolute inset-0 opacity-25" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-[700px] rounded-full bg-ember/10 blur-[140px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel index="00" tone="light">
            VERIFIED PORTFOLIO
          </SectionLabel>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 font-corporate text-[9px] tracking-widest text-zinc-300 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              15 OF 15 VERIFIED FLAGSHIPS
            </span>
            <span className="font-corporate text-[9px] tracking-widest text-zinc-400 uppercase">
              CAC RC 1300720 · COREN CERTIFIED
            </span>
          </div>

          <h1 className="mt-6 max-w-4xl text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            <span className="apple-titanium-gradient">15 Verified Flagships.</span>
            <br />
            <span className="text-zinc-400">Three Strategic Pillars.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            Every project in this archive represents verified on-site engineering leadership and execution by{" "}
            <strong className="text-white font-medium">Engr. Azeez Mukailah Matthew Adewale</strong> and Mukaiburger Engineering Nigeria Limited across high-stakes Nigerian terrain.
          </p>

          {/* Quick Segmented Nav Pills */}
          <div className="mt-10 flex flex-wrap gap-2.5 sm:gap-3">
            <a
              href="#pillar-infrastructure"
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-zinc-300 backdrop-blur-md transition-all hover:border-ember/40 hover:bg-ember/10 hover:text-white"
            >
              Institutional &amp; Infrastructure ({infraProjects.length})
            </a>
            <a
              href="#pillar-luxury"
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-zinc-300 backdrop-blur-md transition-all hover:border-ember/40 hover:bg-ember/10 hover:text-white"
            >
              Banana Island &amp; Luxury ({luxuryProjects.length})
            </a>
            <a
              href="#pillar-turnkey"
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-zinc-300 backdrop-blur-md transition-all hover:border-ember/40 hover:bg-ember/10 hover:text-white"
            >
              Turnkey &amp; Regional ({turnkeyProjects.length})
            </a>
          </div>
        </div>
      </section>

      {/* ── PILLAR 1: INSTITUTIONAL & INFRASTRUCTURE ── */}
      <section id="pillar-infrastructure" className="py-20 md:py-28 border-b border-white/10 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel index="01" tone="light">PILLAR 1</SectionLabel>
          <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl text-white">
                Institutional &amp; National Infrastructure
              </h2>
              <p className="mt-2 text-sm text-zinc-400 max-w-2xl leading-relaxed">
                Heavy civil highway dualizations, major river bridge engineering, oil &amp; gas refinery structures, and tertiary specialist healthcare complexes.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-3.5 py-1.5 font-corporate text-[9px] tracking-widest text-ember font-semibold">
                {infraProjects.length} FLAGSHIPS ALLOCATED
              </span>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {infraProjects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05} id={p.slug}>
                <article className="group h-full flex flex-col rounded-[26px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-ember/5">
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-black/70 border border-white/10 px-2.5 py-1 font-corporate text-[8px] tracking-wider text-zinc-200 backdrop-blur-md">
                        {p.category.toUpperCase()}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="rounded-full bg-ember/90 px-2.5 py-0.5 font-corporate text-[9px] font-bold text-white shadow-sm">
                        {p.year}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-xl font-medium text-white group-hover:text-ember transition-colors leading-snug">
                        {p.title}
                      </h3>
                      <p className="mt-2.5 font-corporate text-[10px] tracking-wider text-zinc-400 uppercase flex items-center gap-1.5">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3 text-ember flex-shrink-0">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>{p.location}</span>
                      </p>
                      {p.client && (
                        <p className="mt-3 text-xs text-zinc-300">
                          <span className="text-zinc-500 font-corporate text-[9px] uppercase tracking-wider">Client:</span> {p.client}
                        </p>
                      )}
                      <p className="mt-3 text-xs leading-relaxed text-zinc-400 line-clamp-3">
                        {p.scope}
                      </p>
                    </div>
                    <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-medium text-zinc-400 group-hover:text-white transition-colors">
                      <span>View Project Specs</span>
                      <span className="text-ember transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PILLAR 2: BANANA ISLAND & LUXURY ESTATES ── */}
      <section id="pillar-luxury" className="py-20 md:py-28 border-b border-white/10 scroll-mt-24 bg-white/[0.01]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel index="02" tone="light">PILLAR 2</SectionLabel>
          <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl text-white">
                Ultra-Luxury High-Rise &amp; Island Enclaves
              </h2>
              <p className="mt-2 text-sm text-zinc-400 max-w-2xl leading-relaxed">
                Bespoke waterfront residences, deep foundation rotary bored piling, subterranean semi-raft basements, and master-planned gated luxury communities in Nigeria&apos;s most exclusive enclaves.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-3.5 py-1.5 font-corporate text-[9px] tracking-widest text-ember font-semibold">
                {luxuryProjects.length} FLAGSHIPS ALLOCATED
              </span>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {luxuryProjects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05} id={p.slug}>
                <article className="group h-full flex flex-col rounded-[26px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-ember/5">
                  <div className="relative aspect-[16/9] overflow-hidden bg-zinc-900">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-black/70 border border-white/10 px-2.5 py-1 font-corporate text-[8px] tracking-wider text-zinc-200 backdrop-blur-md">
                        {p.category.toUpperCase()}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="rounded-full bg-ember/90 px-2.5 py-0.5 font-corporate text-[9px] font-bold text-white shadow-sm">
                        {p.year}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-medium text-white group-hover:text-ember transition-colors leading-snug">
                        {p.title}
                      </h3>
                      <p className="mt-2.5 font-corporate text-[10px] tracking-wider text-zinc-400 uppercase flex items-center gap-1.5">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3 text-ember flex-shrink-0">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>{p.location}</span>
                      </p>
                      {p.client && (
                        <p className="mt-3 text-xs text-zinc-300">
                          <span className="text-zinc-500 font-corporate text-[9px] uppercase tracking-wider">Client / Lead Partner:</span> {p.client}
                        </p>
                      )}
                      <p className="mt-3 text-xs leading-relaxed text-zinc-400">
                        {p.scope}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-medium text-zinc-400 group-hover:text-white transition-colors">
                      <span>View Engineering Telemetry</span>
                      <span className="text-ember transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PILLAR 3: TURNKEY RESIDENTIAL & REGIONAL ── */}
      <section id="pillar-turnkey" className="py-20 md:py-28 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel index="03" tone="light">PILLAR 3</SectionLabel>
          <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl text-white">
                Turnkey Residential &amp; Regional Commercial Builds
              </h2>
              <p className="mt-2 text-sm text-zinc-400 max-w-2xl leading-relaxed">
                Direct turnkey multi-unit duplexes, private luxury villas, security facilities, and regional educational civic access roads delivered from foundation trenching to completed handover.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-3.5 py-1.5 font-corporate text-[9px] tracking-widest text-ember font-semibold">
                {turnkeyProjects.length} FLAGSHIPS ALLOCATED
              </span>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {turnkeyProjects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05} id={p.slug}>
                <article className="group h-full flex flex-col rounded-[26px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-ember/5">
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-black/70 border border-white/10 px-2.5 py-1 font-corporate text-[8px] tracking-wider text-zinc-200 backdrop-blur-md">
                        {p.category.toUpperCase()}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="rounded-full bg-ember/90 px-2.5 py-0.5 font-corporate text-[9px] font-bold text-white shadow-sm">
                        {p.year}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-xl font-medium text-white group-hover:text-ember transition-colors leading-snug">
                        {p.title}
                      </h3>
                      <p className="mt-2.5 font-corporate text-[10px] tracking-wider text-zinc-400 uppercase flex items-center gap-1.5">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3 text-ember flex-shrink-0">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>{p.location}</span>
                      </p>
                      {p.client && (
                        <p className="mt-3 text-xs text-zinc-300">
                          <span className="text-zinc-500 font-corporate text-[9px] uppercase tracking-wider">Client:</span> {p.client}
                        </p>
                      )}
                      <p className="mt-3 text-xs leading-relaxed text-zinc-400 line-clamp-3">
                        {p.scope}
                      </p>
                    </div>
                    <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-medium text-zinc-400 group-hover:text-white transition-colors">
                      <span>View Engineering Telemetry</span>
                      <span className="text-ember transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Apple Keynote Consultation Card */}
          <div className="mt-20 relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-zinc-900/80 via-zinc-950 to-black p-8 sm:p-14 backdrop-blur-2xl">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-ember/15 blur-[90px] pointer-events-none" />
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <span className="font-corporate text-[10px] tracking-[0.25em] text-ember uppercase font-semibold">
                  NEXT PROJECT ENGAGEMENT
                </span>
                <h3 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-white tracking-tight leading-tight">
                  Planning a high-value engineering or residential development?
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-400">
                  Discuss site conditions, structural loads, geotechnical reports, and delivery programs directly with our senior engineering directive.
                </p>
              </div>
              <Link
                href="/contact"
                className="flex-shrink-0 inline-flex items-center gap-3 rounded-full bg-ember px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-ember-deep shadow-lg shadow-ember/25"
              >
                Request Technical Consultation <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

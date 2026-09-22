import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { VERIFIED_PROJECTS } from "@/components/home/constants";

export const metadata: Metadata = {
  title: "Projects Portfolio — Mukaiburger Engineering Nigeria Limited",
  description:
    "Explore 15 verified civil, structural, ultra-luxury high-rise, and institutional projects delivered across Nigeria by Mukaiburger Engineering.",
};

const PILLARS = [
  {
    id: "all",
    title: "All Flagships (15)",
    subtitle: "Complete verified roster across Nigeria",
  },
  {
    id: "infrastructure",
    title: "Pillar 1: Institutional & National Infrastructure",
    subtitle: "Federal highways, bridges, refineries, and major healthcare centres",
  },
  {
    id: "luxury",
    title: "Pillar 2: Ultra-Luxury High-Rise & Island Enclaves",
    subtitle: "Deep foundation piling, marine semi-rafts, and Banana Island bespoke towers",
  },
  {
    id: "turnkey",
    title: "Pillar 3: Turnkey Residential & Regional Commercial",
    subtitle: "Multi-site duplexes, private luxury villas, and security installations",
  },
];

export default function ProjectsPage() {
  const infraProjects = VERIFIED_PROJECTS.filter((p) => p.pillar === "infrastructure");
  const luxuryProjects = VERIFIED_PROJECTS.filter((p) => p.pillar === "luxury");
  const turnkeyProjects = VERIFIED_PROJECTS.filter((p) => p.pillar === "turnkey");

  return (
    <>
      {/* ── HEADER ── */}
      <section className="bg-ink pt-40 pb-20 text-white md:pt-48">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel index="00" tone="light">
            PROJECT PORTFOLIO
          </SectionLabel>
          <h1 className="mt-6 max-w-4xl text-balance font-display text-4xl font-medium leading-[1.05] md:text-6xl lg:text-7xl">
            15 Verified Flagships. Three Strategic Pillars.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Every project in this archive represents verified on-site engineering leadership and execution by <strong>Engr. Azeez Mukailah Matthew Adewale</strong> and Mukaiburger Engineering Nigeria Limited across Nigeria.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#pillar-infrastructure"
              className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 transition hover:border-ember hover:text-white"
            >
              Institutional &amp; Infrastructure ({infraProjects.length})
            </a>
            <a
              href="#pillar-luxury"
              className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 transition hover:border-ember hover:text-white"
            >
              Banana Island &amp; Luxury ({luxuryProjects.length})
            </a>
            <a
              href="#pillar-turnkey"
              className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 transition hover:border-ember hover:text-white"
            >
              Turnkey &amp; Regional ({turnkeyProjects.length})
            </a>
          </div>
        </div>
      </section>

      {/* ── PILLAR 1: INSTITUTIONAL & INFRASTRUCTURE ── */}
      <section id="pillar-infrastructure" className="bg-background py-20 border-b border-border scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel index="01">PILLAR 1</SectionLabel>
          <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-medium md:text-4xl text-ink">
                Institutional &amp; National Infrastructure
              </h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
                Heavy civil highway dualizations, major river bridge engineering, oil &amp; gas refinery structures, and tertiary specialist healthcare facilities.
              </p>
            </div>
            <span className="font-corporate text-xs tracking-widest text-ember font-semibold">
              {infraProjects.length} FLAGSHIP PROJECTS
            </span>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {infraProjects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05} id={p.slug}>
                <article className="group h-full flex flex-col rounded-2xl border border-border bg-secondary/40 overflow-hidden transition-all hover:shadow-lg hover:border-ember/40">
                  <div className="relative aspect-[16/10] overflow-hidden bg-ink/10">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-ink/75 px-3 py-1 font-corporate text-[8px] tracking-wider text-white backdrop-blur-sm">
                        {p.category.toUpperCase()}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="rounded-full bg-ember/90 px-2.5 py-1 font-corporate text-[9px] font-bold text-white">
                        {p.year}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-display text-xl font-medium text-ink group-hover:text-ember transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-2 font-corporate text-[10px] tracking-wider text-muted-foreground uppercase flex items-center gap-1.5">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3 text-ember">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {p.location}
                    </p>
                    {p.client && (
                      <p className="mt-3 text-xs text-ink/80 font-medium">
                        <span className="text-muted-foreground font-normal">Client:</span> {p.client}
                      </p>
                    )}
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                      {p.scope}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PILLAR 2: BANANA ISLAND & LUXURY ESTATES ── */}
      <section id="pillar-luxury" className="bg-secondary/20 py-20 border-b border-border scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel index="02">PILLAR 2</SectionLabel>
          <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-medium md:text-4xl text-ink">
                Ultra-Luxury High-Rise &amp; Island Enclaves
              </h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
                Bespoke waterfront residences, deep foundation piling, subterranean semi-raft basements, and master-planned gated luxury communities in Nigeria&apos;s most exclusive enclaves.
              </p>
            </div>
            <span className="font-corporate text-xs tracking-widest text-ember font-semibold">
              {luxuryProjects.length} FLAGSHIP PROJECTS
            </span>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-2">
            {luxuryProjects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05} id={p.slug}>
                <article className="group h-full flex flex-col rounded-2xl border border-border bg-background overflow-hidden transition-all hover:shadow-lg hover:border-ember/40">
                  <div className="relative aspect-[16/9] overflow-hidden bg-ink/10">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-ink/75 px-3 py-1 font-corporate text-[8px] tracking-wider text-white backdrop-blur-sm">
                        {p.category.toUpperCase()}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="rounded-full bg-ember/90 px-2.5 py-1 font-corporate text-[9px] font-bold text-white">
                        {p.year}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-display text-2xl font-medium text-ink group-hover:text-ember transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-2 font-corporate text-[10px] tracking-wider text-muted-foreground uppercase flex items-center gap-1.5">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3 text-ember">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {p.location}
                    </p>
                    {p.client && (
                      <p className="mt-3 text-xs text-ink/80 font-medium">
                        <span className="text-muted-foreground font-normal">Client / Partner:</span> {p.client}
                      </p>
                    )}
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      {p.scope}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PILLAR 3: TURNKEY RESIDENTIAL & REGIONAL ── */}
      <section id="pillar-turnkey" className="bg-background py-20 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel index="03">PILLAR 3</SectionLabel>
          <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-medium md:text-4xl text-ink">
                Turnkey Residential &amp; Regional Commercial Builds
              </h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
                Direct turnkey multi-unit duplexes, private luxury villas, security facilities, and regional educational civic access roads delivered from foundation to handover.
              </p>
            </div>
            <span className="font-corporate text-xs tracking-widest text-ember font-semibold">
              {turnkeyProjects.length} FLAGSHIP PROJECTS
            </span>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {turnkeyProjects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05} id={p.slug}>
                <article className="group h-full flex flex-col rounded-2xl border border-border bg-secondary/40 overflow-hidden transition-all hover:shadow-lg hover:border-ember/40">
                  <div className="relative aspect-[16/10] overflow-hidden bg-ink/10">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-ink/75 px-3 py-1 font-corporate text-[8px] tracking-wider text-white backdrop-blur-sm">
                        {p.category.toUpperCase()}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="rounded-full bg-ember/90 px-2.5 py-1 font-corporate text-[9px] font-bold text-white">
                        {p.year}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-display text-xl font-medium text-ink group-hover:text-ember transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-2 font-corporate text-[10px] tracking-wider text-muted-foreground uppercase flex items-center gap-1.5">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3 text-ember">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {p.location}
                    </p>
                    {p.client && (
                      <p className="mt-3 text-xs text-ink/80 font-medium">
                        <span className="text-muted-foreground font-normal">Client:</span> {p.client}
                      </p>
                    )}
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                      {p.scope}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* CTA Band */}
          <div className="mt-20 rounded-3xl border border-border bg-secondary p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-display text-2xl font-medium text-ink">
                Planning a high-value engineering or residential project?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Discuss site conditions, structural requirements, and program schedules directly with our senior engineering team.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-3 rounded-full bg-ember px-8 py-4 text-sm font-medium text-white transition hover:bg-ember-deep"
            >
              Request Technical Consultation <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

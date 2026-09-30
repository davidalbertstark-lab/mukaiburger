import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

export const metadata: Metadata = {
  title: "Services — Mukaiburger Engineering Nigeria Limited",
  description:
    "Building construction, civil engineering, project management and structural rehabilitation — delivered to an uncompromising engineering standard.",
};

const SECTORS = [
  {
    n: "DISCIPLINE 01",
    t: "Building Construction & Turnkey Delivery",
    img: "/images/project-1.jpg",
    d: "High-value residential duplexes, ultra-luxury waterfront villas, and commercial complexes delivered from virgin ground excavation to handover. We unify substructure engineering, superstructure framing, façade cladding, and MEP integration under a single accountable lead.",
    bullets: [
      "Reinforced concrete frames & shear walls",
      "Subterranean semi-raft basements",
      "Precision façade & architectural glazing",
      "Comprehensive MEP services coordination",
      "Turnkey interior fit-out & bespoke finishes",
      "Rigorous pre-handover commissioning",
    ],
  },
  {
    n: "DISCIPLINE 02",
    t: "Heavy Civil Engineering & Infrastructure",
    img: "/projects/calabar-itu-excavator-culvert.jpg",
    d: "Federal highway dualization, multi-cell reinforced concrete box culverts, bridge abutments, and deep swamp subgrade stabilization engineered to withstand extreme tropical hydraulic loads and heavy axle traffic.",
    bullets: [
      "Dual carriageway roadworks & asphalt surfacing",
      "Multi-span RC bridges & riverbed abutments",
      "Mass concrete gravity retaining walls",
      "Hydraulic storm drainage channels & culverts",
      "Bulk earthworks, cut-and-fill & grading",
      "Geotechnical subgrade stabilization",
    ],
  },
  {
    n: "DISCIPLINE 03",
    t: "Independent Project & Construction Management",
    img: "/images/project-3.jpg",
    d: "Independent engineering oversight, cost auditing, program critical-path scheduling, and QA/QC quality governance across multi-contractor sites. We surface structural risks early, enforce compliance, and deliver weekly empirical telemetry straight to the principal.",
    bullets: [
      "Critical-path master construction programs",
      "Cost engineering & cash-flow milestone audit",
      "On-site QA/QC slump & compressive test verification",
      "Multi-disciplinary consultant coordination",
      "Statutory agency compliance & approvals",
      "Transparent weekly empirical reporting",
    ],
  },
  {
    n: "DISCIPLINE 04",
    t: "Structural Renovation & Rehabilitation",
    img: "/images/project-4.jpg",
    d: "Diagnosing, strengthening, and restoring existing institutional buildings and aged civil infrastructure to original design specifications — executed safely, economically, and without disrupting ongoing institutional or commercial operations.",
    bullets: [
      "Non-destructive concrete strength diagnostics",
      "Structural beam & column strengthening",
      "Carbon-fiber & steel jacketing retrofits",
      "Façade restoration & weatherproofing",
      "Phased operational execution in live facilities",
      "Foundation underpinning & crack stabilization",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-ember selection:text-white">
      {/* ── HEADER (Apple Keynote Style) ── */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden border-b border-white/10">
        <div className="blueprint-grid absolute inset-0 opacity-25" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-[700px] rounded-full bg-ember/10 blur-[140px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel index="00" tone="light">
            ENGINEERING DISCIPLINES
          </SectionLabel>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 font-corporate text-[9px] tracking-widest text-zinc-300 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              FULL LIFECYCLE CAPABILITY
            </span>
            <span className="font-corporate text-[9px] tracking-widest text-zinc-400 uppercase">
              FOUNDATION TO HANDOVER
            </span>
          </div>

          <h1 className="mt-6 max-w-4xl text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            <span className="apple-titanium-gradient">Four disciplines.</span>
            <br />
            <span className="text-zinc-400">One uncompromising standard.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            Whatever the scope or terrain, our delivery philosophy never varies: a rigorously calculated structural design, an active on-site engineering lead, and empirical verification at every milestone.
          </p>
        </div>
      </section>

      {/* ── DISCIPLINES PRESENTATION ── */}
      <section className="py-12 md:py-20">
        {SECTORS.map((s, i) => {
          const reverse = i % 2 === 1;
          return (
            <div key={s.n} className="border-b border-white/10 last:border-b-0">
              <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-12 lg:gap-16 lg:px-10 items-center">
                <Reveal
                  className={
                    reverse ? "lg:order-2 lg:col-span-6" : "lg:col-span-6"
                  }
                >
                  <div className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-zinc-950 shadow-2xl">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={s.img}
                        alt={s.t}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute top-4 left-4">
                        <span className="rounded-full bg-black/75 border border-white/10 px-3 py-1 font-corporate text-[9px] tracking-wider text-zinc-300 backdrop-blur-md">
                          {s.n}
                        </span>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal
                  delay={0.1}
                  className={
                    reverse ? "lg:order-1 lg:col-span-6" : "lg:col-span-6"
                  }
                >
                  <div className="flex h-full flex-col justify-center">
                    <p className="font-corporate text-[10px] tracking-[0.25em] text-ember uppercase font-semibold">
                      {s.n}
                    </p>
                    <h2 className="mt-3 font-display text-3xl font-medium leading-tight md:text-4xl lg:text-5xl text-white tracking-tight">
                      {s.t}
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-zinc-400">
                      {s.d}
                    </p>
                    <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ember" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          );
        })}
      </section>

      {/* ── CONSULTATION CTA (Apple Keynote Finale) ── */}
      <section className="relative overflow-hidden py-24 md:py-32 border-t border-white/10">
        <div className="blueprint-grid absolute inset-0 opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-[800px] rounded-full bg-ember/15 blur-[160px] pointer-events-none" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10">
          <div className="max-w-2xl">
            <span className="font-corporate text-[10px] tracking-[0.25em] text-ember uppercase font-semibold">
              READY TO COMMENCE
            </span>
            <h2 className="mt-3 font-display text-3xl font-medium leading-tight md:text-5xl text-white tracking-tight">
              Tell us about your site and engineering objectives.
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-400">
              Direct access to our senior engineering directors. Fast turnaround on bill of quantities, structural assessments, and project mobilization.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-3 rounded-full bg-ember px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-ember-deep shadow-lg shadow-ember/25"
          >
            Request Technical Consultation <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

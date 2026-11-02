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

import { ProjectsDirectory } from "@/components/projects/ProjectsDirectory";

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

      {/* ── INTERACTIVE PROJECT DIRECTORY & DOSSIER MODALS ── */}
      <ProjectsDirectory projects={VERIFIED_PROJECTS} />
    </>
  );
}

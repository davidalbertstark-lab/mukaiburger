import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { VERIFIED_PROJECTS } from "@/components/home/constants";
import { ProjectGalleryLightbox } from "@/components/projects/ProjectGalleryLightbox";
import { SectionLabel } from "@/components/site/SectionLabel";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return VERIFIED_PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = VERIFIED_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found — Mukaiburger Engineering",
    };
  }

  const title = `${project.title} — Engineering Dossier | Mukaiburger`;
  const description =
    project.description ||
    project.scope ||
    `Verified engineering case study for ${project.title} located in ${project.location}, delivered by Mukaiburger Engineering Nigeria Limited.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = VERIFIED_PROJECTS.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = VERIFIED_PROJECTS[projectIndex];
  const prevProject =
    projectIndex > 0 ? VERIFIED_PROJECTS[projectIndex - 1] : VERIFIED_PROJECTS[VERIFIED_PROJECTS.length - 1];
  const nextProject =
    projectIndex < VERIFIED_PROJECTS.length - 1 ? VERIFIED_PROJECTS[projectIndex + 1] : VERIFIED_PROJECTS[0];

  // Self-balancing facts and figures
  const metrics =
    project.metrics && project.metrics.length > 0
      ? project.metrics
      : [
          {
            label: "Strategic Pillar",
            value:
              project.pillar === "infrastructure"
                ? "Civil Infrastructure"
                : project.pillar === "luxury"
                ? "Ultra-Luxury High-Rise"
                : "Turnkey Commercial & Residential",
          },
          { label: "Location Territory", value: project.location.split(",")[0] },
          { label: "Execution Timeline", value: project.year },
          { label: "Engineering Oversight", value: "COREN Reg. / CAC RC 1300720" },
        ];

  const galleryItems =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [
          {
            src: project.image,
            caption: `${project.title} — ${project.location}`,
            badge: "PRIMARY RECORD",
            orientation: "landscape" as const,
          },
        ];

  const whatsappMessage = encodeURIComponent(
    `Hello Mukaiburger Engineering, I am reviewing your project dossier "${project.title}" (${project.location}) and would like to request technical consultation regarding structural engineering services.`
  );

  return (
    <article className="min-h-screen bg-background text-ink selection:bg-ember selection:text-white">
      {/* ── BREADCRUMB & UTILITY HEADER ── */}
      <nav aria-label="Breadcrumb" className="pt-24 pb-4 border-b border-border bg-secondary/60">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 flex flex-wrap items-center justify-between gap-4 text-xs">
          <ol className="flex items-center gap-2 text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-ember transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/projects" className="hover:text-ember transition-colors">
                Projects
              </Link>
            </li>
            <li>/</li>
            <li>
              <span className="capitalize text-ink/70">
                {project.pillar}
              </span>
            </li>
            <li>/</li>
            <li className="text-ember font-medium truncate max-w-[200px] sm:max-w-md">
              {project.title}
            </li>
          </ol>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 font-corporate text-[10px] tracking-widest text-muted-foreground hover:text-ember transition-colors"
          >
            <span>←</span> ALL 15 PROJECTS
          </Link>
        </div>
      </nav>

      {/* ── 01: FULL-BLEED ARCHITECTURAL HERO ── */}
      <header className="relative min-h-[70vh] lg:min-h-[80vh] flex items-end overflow-hidden border-b border-border bg-[#0e1117]">
        {/* Background Visual */}
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-95 contrast-105"
          />
          {/* Architectural Luminous Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>

        {/* Hero Content Block */}
        <div className="relative z-10 mx-auto max-w-7xl w-full px-5 py-14 sm:py-20 lg:px-10">
          <div className="max-w-4xl">
            {/* Badges strip */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <span className="rounded-full bg-ember px-3.5 py-1 font-corporate text-[9px] font-bold tracking-widest text-white shadow-lg shadow-ember/25">
                {project.category.toUpperCase()}
              </span>
              <span className="rounded-full border border-white/20 bg-black/60 px-3.5 py-1 font-corporate text-[9px] tracking-wider text-white backdrop-blur-md">
                {project.pillar.toUpperCase()} PILLAR
              </span>
              <span className="rounded-full border border-emerald-400/40 bg-emerald-950/60 px-3.5 py-1 font-corporate text-[9px] font-semibold text-emerald-300 backdrop-blur-md">
                {project.year}
              </span>
              {project.status && (
                <span className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1 font-corporate text-[9px] text-white/90 backdrop-blur-md hidden sm:inline-block">
                  {project.status}
                </span>
              )}
            </div>

            {/* Headline Title */}
            <h1 className="mt-6 font-display text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.08]">
              {project.title}
            </h1>

            {/* Sub-meta */}
            <div className="mt-6 flex flex-wrap items-center gap-y-3 gap-x-8 text-sm text-white/90">
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-ember flex-shrink-0">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-white">{project.location}</span>
              </div>

              {(project.clientPartner || project.client) && (
                <div className="flex items-center gap-2">
                  <span className="text-white/60">Developer / Partner:</span>
                  <span className="font-semibold text-white">{project.clientPartner || project.client}</span>
                </div>
              )}

              {project.directorInCharge && (
                <div className="flex items-center gap-2 hidden md:flex">
                  <span className="text-white/60">Supervision:</span>
                  <span className="font-medium text-amber-300">{project.directorInCharge}</span>
                </div>
              )}
            </div>

            {/* Action CTA buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/2348037145719?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-emerald-600 px-6 py-3.5 text-xs font-semibold text-white shadow-xl shadow-emerald-950/50 transition hover:bg-emerald-500 hover:scale-102"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
                <span>Direct WhatsApp Consultation</span>
              </a>

              <Link
                href={`/contact?project=${project.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-xs font-medium text-white backdrop-blur-sm transition hover:border-ember hover:bg-white/20"
              >
                <span>Request Proposal Document</span>
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ── 02: KEY FACTS & SPECIFICATIONS RIBBON ── */}
      <section aria-label="Key Facts and Figures" className="border-b border-border bg-secondary/50 py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex items-center justify-between pb-4 border-b border-border">
            <span className="font-corporate text-[10px] font-bold tracking-[0.28em] text-ember uppercase">
              KEY SPECIFICATIONS &amp; ENGINEERING METRICS
            </span>
            <span className="font-corporate text-[10px] tracking-widest text-muted-foreground">
              CAC RC 1300720 • VERIFIED DOSSIER
            </span>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {metrics.map((m, idx) => (
              <div
                key={`${m.label}-${idx}`}
                className="rounded-xl border border-border bg-background p-4 sm:p-5 shadow-xs transition hover:border-ember/40 hover:shadow-md"
              >
                <div className="font-corporate text-[9px] tracking-wider text-muted-foreground uppercase">
                  {m.label}
                </div>
                <div className="mt-2 font-display text-sm sm:text-base font-semibold text-ink tracking-tight">
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03: THREE-PART STORY-DRIVEN NARRATIVE (HIGH LEGIBILITY) ── */}
      <section className="py-20 lg:py-24 border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 space-y-20">
          {/* Chapter 1: The Mandate */}
          <div className="grid gap-8 lg:grid-cols-12 items-start">
            <div className="lg:col-span-4">
              <span className="font-corporate text-xs font-bold tracking-widest text-ember uppercase">
                01 / THE MANDATE
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium text-ink">
                Project Scope &amp; Architectural Mandate
              </h2>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Strategic enclave selection, developer partnership, and program requirements.
              </p>
            </div>
            <div className="lg:col-span-8 space-y-4">
              <p className="text-base sm:text-lg leading-relaxed text-ink/90 font-normal">
                {project.description || project.scope}
              </p>
              {project.scope && (
                <div className="rounded-2xl border border-border bg-secondary/60 p-6 text-sm leading-relaxed text-ink/80">
                  <strong className="text-ink font-semibold block mb-1">Contractual Scope of Civil Works:</strong>
                  {project.scope}
                </div>
              )}
            </div>
          </div>

          <div className="h-px bg-border" />

          {/* Chapter 2: Geotechnical Defense & Asset Protection */}
          <div className="grid gap-8 lg:grid-cols-12 items-start">
            <div className="lg:col-span-4">
              <span className="font-corporate text-xs font-bold tracking-widest text-ember uppercase">
                02 / GEOTECHNICAL DEFENSE
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium text-ink">
                The Engineering Challenge Overcome
              </h2>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Managing coastal water tables, hydrostatic pressures, and differential settlement risks.
              </p>
            </div>
            <div className="lg:col-span-8 space-y-5">
              <p className="text-base leading-relaxed text-ink/90">
                {project.challenge ||
                  `Engineering deep foundations and structural superstructures requires accounting for Nigerian geological and hydrological variance. From soft alluvial coastal clays along the Lagos Lagoon to difficult subgrade soils across regional transit corridors, Mukaiburger deploys bespoke geotechnical solutions.`}
              </p>

              {/* Developer Value Callout (Crisp high-contrast alert) */}
              <div className="rounded-2xl border border-amber-500/30 bg-amber-50/80 p-6 sm:p-7 text-amber-950 shadow-xs">
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20 text-amber-900 text-xs font-bold">
                    !
                  </span>
                  <strong className="text-amber-950 font-semibold text-base">
                    Why Deep Foundation Engineering Matters to Property Developers:
                  </strong>
                </div>
                <p className="text-sm leading-relaxed text-amber-950/90">
                  Waterfront developments that cut corners on foundation piling face irreversible structural damage: uneven building settlement, cracked perimeter walls, and hydrostatic groundwater seepage. By anchoring bored piles to deep load-bearing strata and pouring monolithic marine-grade semi-rafts, Mukaiburger guarantees structural integrity for decades to come.
                </p>
              </div>
            </div>
          </div>

          <div className="h-px bg-border" />

          {/* Chapter 3: Execution & Superstructure */}
          <div className="grid gap-8 lg:grid-cols-12 items-start">
            <div className="lg:col-span-4">
              <span className="font-corporate text-xs font-bold tracking-widest text-ember uppercase">
                03 / SUPERSTRUCTURE &amp; QA
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium text-ink">
                High-Rise Framing, Heavy Fleet &amp; Oversight
              </h2>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Daily field supervision, climbing cranes, slump tests, and structural safety.
              </p>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="text-base leading-relaxed text-ink/90">
                {project.execution ||
                  `Execution proceeded under the direct, continuous oversight of senior registered civil engineers. Batching plant operations, high-yield rebar spacing, concrete cube compression crushing tests, and laser theodolite alignments guaranteed total adherence to British Standards (BS 8110 / BS EN 1992) and Nigerian building codes.`}
              </p>

              {/* Highlights checklist */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="rounded-2xl border border-border bg-secondary/60 p-6">
                  <span className="font-corporate text-[10px] font-bold tracking-widest text-ember uppercase block mb-4">
                    VERIFIED TECHNICAL HIGHLIGHTS
                  </span>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-ink/90">
                        <span className="text-ember font-bold mt-0.5">✓</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 04: PHOTOGRAPHIC EVIDENCE GALLERY ── */}
      <section className="py-20 lg:py-28 border-b border-border bg-secondary/35">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <SectionLabel index="04">
                FIELD ARCHIVE
              </SectionLabel>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-medium text-ink">
                Photographic Site Records &amp; Structural Evidence
              </h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
                High-resolution documentation captured on-site during heavy civil earthmoving, bored piling, falsework erection, and concrete placements. Click any photo for darkroom inspection.
              </p>
            </div>

            <span className="font-corporate text-xs tracking-widest text-ember font-semibold">
              {galleryItems.length} RECORDED PHOTOGRAPHS
            </span>
          </div>

          <ProjectGalleryLightbox items={galleryItems} projectTitle={project.title} />
        </div>
      </section>

      {/* ── 05: SENIOR ENGINEERING LEADERSHIP & CORPORATE CREDENTIALS ── */}
      <section className="py-16 sm:py-20 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="rounded-3xl border border-border bg-secondary/60 p-8 sm:p-12 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="font-corporate text-[9px] font-bold tracking-[0.25em] text-ember uppercase">
                ENGINEERING LEADERSHIP &amp; REGULATORY COMPLIANCE
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-medium text-ink">
                Under the Directorship of Engr. Azeez Mukailah
              </h3>
              <p className="text-sm text-ink/80 leading-relaxed">
                Registered Engineer with the Council for the Regulation of Engineering in Nigeria (COREN), Fellow of the Nigerian Society of Engineers (FNSE). All operations executed under corporate seal of <strong>Mukaiburger Engineering Nigeria Limited (CAC RC 1300720)</strong>.
              </p>
            </div>

            <div className="flex-shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
              <a
                href={`https://wa.me/2348037145719?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-xs font-semibold text-white shadow-md shadow-emerald-900/20 transition hover:bg-emerald-500 hover:scale-102"
              >
                <span>WhatsApp Engr. Mukailah</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-xs font-medium text-ink transition hover:border-ember hover:text-ember shadow-xs"
              >
                <span>Contact Engineering Desk</span>
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 06: PREVIOUS / NEXT NAVIGATION FOOTER ── */}
      <footer className="grid grid-cols-1 sm:grid-cols-2 border-t border-border bg-secondary/50">
        <Link
          href={`/projects/${prevProject.slug}`}
          className="flex flex-col items-start p-8 sm:p-12 text-left border-b sm:border-b-0 sm:border-r border-border transition-colors hover:bg-background group"
        >
          <span className="font-corporate text-[10px] tracking-widest text-muted-foreground uppercase group-hover:text-ember flex items-center gap-2">
            <span>←</span> PREVIOUS ENGINEERING DOSSIER
          </span>
          <span className="mt-3 font-display text-lg sm:text-2xl font-medium text-ink group-hover:text-ember transition-colors">
            {prevProject.title}
          </span>
          <span className="mt-1 text-xs text-muted-foreground">
            {prevProject.location} • {prevProject.category}
          </span>
        </Link>

        <Link
          href={`/projects/${nextProject.slug}`}
          className="flex flex-col items-end p-8 sm:p-12 text-right transition-colors hover:bg-background group"
        >
          <span className="font-corporate text-[10px] tracking-widest text-muted-foreground uppercase group-hover:text-ember flex items-center gap-2">
            NEXT ENGINEERING DOSSIER <span>→</span>
          </span>
          <span className="mt-3 font-display text-lg sm:text-2xl font-medium text-ink group-hover:text-ember transition-colors">
            {nextProject.title}
          </span>
          <span className="mt-1 text-xs text-muted-foreground">
            {nextProject.location} • {nextProject.category}
          </span>
        </Link>
      </footer>
    </article>
  );
}

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
    <article className="min-h-screen bg-[#0a0c0e] text-white selection:bg-ember selection:text-white">
      {/* ── BREADCRUMB & UTILITY HEADER ── */}
      <nav aria-label="Breadcrumb" className="pt-28 pb-4 border-b border-white/10 bg-[#0d0f12]">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 flex flex-wrap items-center justify-between gap-4 text-xs">
          <ol className="flex items-center gap-2 text-white/50">
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
              <span className="capitalize text-white/70">
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
            className="inline-flex items-center gap-1.5 font-corporate text-[10px] tracking-widest text-white/60 hover:text-ember transition-colors"
          >
            <span>←</span> ALL 15 PROJECTS
          </Link>
        </div>
      </nav>

      {/* ── 01: FULL-BLEED ANGLED HERO (Julius Berger kw-module-0200 inspired) ── */}
      <header className="relative min-h-[70vh] lg:min-h-[82vh] flex items-end overflow-hidden border-b border-white/10">
        {/* Background Visual */}
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-90 contrast-105"
          />
          {/* Architectural Dark Multi-layer Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0e] via-[#0a0c0e]/70 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c0e]/90 via-[#0a0c0e]/50 to-transparent" />
        </div>

        {/* Hero Content Block */}
        <div className="relative z-10 mx-auto max-w-7xl w-full px-5 py-16 sm:py-20 lg:px-10">
          <div className="max-w-4xl">
            {/* Badges strip */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <span className="rounded-full bg-ember px-3 py-1 font-corporate text-[9px] font-bold tracking-widest text-white shadow-lg shadow-ember/20">
                {project.category.toUpperCase()}
              </span>
              <span className="rounded-full border border-white/20 bg-black/60 px-3 py-1 font-corporate text-[9px] tracking-wider text-white/90 backdrop-blur-md">
                {project.pillar.toUpperCase()} PILLAR
              </span>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 font-corporate text-[9px] font-semibold text-emerald-400 backdrop-blur-md">
                {project.year}
              </span>
              {project.status && (
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 font-corporate text-[9px] text-white/80 backdrop-blur-md hidden sm:inline-block">
                  {project.status}
                </span>
              )}
            </div>

            {/* Headline Title */}
            <h1 className="mt-6 font-display text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.08]">
              {project.title}
            </h1>

            {/* Sub-meta */}
            <div className="mt-6 flex flex-wrap items-center gap-y-3 gap-x-8 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-ember flex-shrink-0">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-white">{project.location}</span>
              </div>

              {(project.clientPartner || project.client) && (
                <div className="flex items-center gap-2">
                  <span className="text-white/40">Client / Partner:</span>
                  <span className="font-medium text-white">{project.clientPartner || project.client}</span>
                </div>
              )}

              {project.directorInCharge && (
                <div className="flex items-center gap-2 hidden md:flex">
                  <span className="text-white/40">Supervision:</span>
                  <span className="font-medium text-ember">{project.directorInCharge}</span>
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
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-medium text-white transition hover:border-ember hover:bg-white/10"
              >
                <span>Request Proposal Document</span>
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ── 02: FACTS & FIGURES RIBBON (Julius Berger kw-module-2200 inspired) ── */}
      <section aria-label="Key Facts and Figures" className="border-b border-white/10 bg-[#12151b] py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <span className="font-corporate text-[10px] font-bold tracking-[0.28em] text-ember uppercase">
              KEY FACTS &amp; ENGINEERING SPECIFICATIONS
            </span>
            <span className="font-corporate text-[10px] tracking-widest text-white/40">
              CAC RC 1300720 • VERIFIED DOSSIER
            </span>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {metrics.map((m, idx) => (
              <div
                key={`${m.label}-${idx}`}
                className="rounded-xl border border-white/5 bg-white/[0.02] p-4 transition hover:border-ember/40 hover:bg-white/[0.04]"
              >
                <div className="font-corporate text-[9px] tracking-wider text-white/50 uppercase">
                  {m.label}
                </div>
                <div className="mt-2 font-display text-sm sm:text-base font-semibold text-white tracking-tight">
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03: THREE-PART ENGINEERING NARRATIVE (Julius Berger kw-module-3100 inspired) ── */}
      <section className="py-20 lg:py-28 border-b border-white/10 bg-[#0a0c0e]">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 space-y-20">
          {/* Section 1: Overview */}
          <div className="grid gap-8 lg:grid-cols-12 items-start">
            <div className="lg:col-span-4">
              <span className="font-corporate text-xs font-bold tracking-widest text-ember uppercase">
                01 / COMMISSIONING &amp; CONTEXT
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium text-white">
                Project Scope &amp; Architectural Mandate
              </h2>
              <p className="mt-2 text-xs text-white/40 leading-relaxed">
                Institutional brief, site acquisition, and program requirements.
              </p>
            </div>
            <div className="lg:col-span-8 space-y-4">
              <p className="text-base sm:text-lg leading-relaxed text-white/80 font-normal">
                {project.description || project.scope}
              </p>
              {project.scope && (
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-sm leading-relaxed text-white/70">
                  <strong className="text-white font-medium block mb-1">Contractual Scope of Civil Works:</strong>
                  {project.scope}
                </div>
              )}
            </div>
          </div>

          <div className="h-px bg-white/10" />

          {/* Section 2: The Challenge */}
          <div className="grid gap-8 lg:grid-cols-12 items-start">
            <div className="lg:col-span-4">
              <span className="font-corporate text-xs font-bold tracking-widest text-ember uppercase">
                02 / GEOTECHNICAL &amp; STRUCTURAL
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium text-white">
                The Engineering Challenge Overcome
              </h2>
              <p className="mt-2 text-xs text-white/40 leading-relaxed">
                Subsoil mechanics, hydrostatic pressures, and load distribution.
              </p>
            </div>
            <div className="lg:col-span-8 space-y-4">
              <p className="text-base leading-relaxed text-white/80">
                {project.challenge ||
                  `Engineering deep foundations and structural superstructures requires accounting for Nigerian geological and hydrological variance. From soft alluvial coastal clays along the Lagos Lagoon to difficult subgrade soils across regional transit corridors, Mukaiburger deploys bespoke geotechnical solutions.`}
              </p>
            </div>
          </div>

          <div className="h-px bg-white/10" />

          {/* Section 3: Execution & QA */}
          <div className="grid gap-8 lg:grid-cols-12 items-start">
            <div className="lg:col-span-4">
              <span className="font-corporate text-xs font-bold tracking-widest text-ember uppercase">
                03 / ON-SITE EXECUTION &amp; QA
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium text-white">
                Plant Machinery &amp; Technical Oversight
              </h2>
              <p className="mt-2 text-xs text-white/40 leading-relaxed">
                Continuous field supervision, slump tests, and structural safety.
              </p>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="text-base leading-relaxed text-white/80">
                {project.execution ||
                  `Execution proceeded under the direct, continuous oversight of senior registered civil engineers. Batching plant operations, high-yield rebar spacing, concrete cube compression crushing tests, and laser theodolite alignments guaranteed total adherence to British Standards (BS 8110 / BS EN 1992) and Nigerian building codes.`}
              </p>

              {/* Highlights checklist */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <span className="font-corporate text-[10px] font-bold tracking-widest text-ember uppercase block mb-4">
                    VERIFIED TECHNICAL HIGHLIGHTS
                  </span>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-white/80">
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
      <section className="py-20 lg:py-28 border-b border-white/10 bg-[#0d0f12]">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <SectionLabel index="04" tone="light">
                FIELD ARCHIVE
              </SectionLabel>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-medium text-white">
                Photographic Site Records &amp; Structural Evidence
              </h2>
              <p className="mt-2 text-sm text-white/60 max-w-2xl">
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
      <section className="py-16 bg-[#12151b] border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="rounded-3xl border border-white/10 bg-black/40 p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="font-corporate text-[9px] font-bold tracking-[0.25em] text-ember uppercase">
                ENGINEERING LEADERSHIP &amp; REGULATORY COMPLIANCE
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-medium text-white">
                Under the On-Site Directorship of Engr. Azeez Mukailah
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Registered Engineer with the Council for the Regulation of Engineering in Nigeria (COREN), Fellow of the Nigerian Society of Engineers (FNSE). All operations executed under corporate seal of <strong>Mukaiburger Engineering Nigeria Limited (CAC RC 1300720)</strong>.
              </p>
            </div>

            <div className="flex-shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
              <a
                href={`https://wa.me/2348037145719?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-xs font-semibold text-white shadow-lg shadow-emerald-950/40 transition hover:bg-emerald-500"
              >
                <span>WhatsApp Engr. Mukailah</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-medium text-white transition hover:border-ember hover:bg-white/10"
              >
                <span>Contact Engineering Desk</span>
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 06: PREVIOUS / NEXT NAVIGATION FOOTER (Julius Berger kw-module-2300 inspired) ── */}
      <footer className="grid grid-cols-1 sm:grid-cols-2 border-t border-white/10 bg-[#090b0d]">
        <Link
          href={`/projects/${prevProject.slug}`}
          className="flex flex-col items-start p-8 sm:p-12 text-left border-b sm:border-b-0 sm:border-r border-white/10 transition-colors hover:bg-white/[0.02] group"
        >
          <span className="font-corporate text-[10px] tracking-widest text-white/40 uppercase group-hover:text-ember flex items-center gap-2">
            <span>←</span> PREVIOUS ENGINEERING DOSSIER
          </span>
          <span className="mt-3 font-display text-lg sm:text-2xl font-medium text-white group-hover:text-ember transition-colors">
            {prevProject.title}
          </span>
          <span className="mt-1 text-xs text-white/50">
            {prevProject.location} • {prevProject.category}
          </span>
        </Link>

        <Link
          href={`/projects/${nextProject.slug}`}
          className="flex flex-col items-end p-8 sm:p-12 text-right transition-colors hover:bg-white/[0.02] group"
        >
          <span className="font-corporate text-[10px] tracking-widest text-white/40 uppercase group-hover:text-ember flex items-center gap-2">
            NEXT ENGINEERING DOSSIER <span>→</span>
          </span>
          <span className="mt-3 font-display text-lg sm:text-2xl font-medium text-white group-hover:text-ember transition-colors">
            {nextProject.title}
          </span>
          <span className="mt-1 text-xs text-white/50">
            {nextProject.location} • {nextProject.category}
          </span>
        </Link>
      </footer>
    </article>
  );
}

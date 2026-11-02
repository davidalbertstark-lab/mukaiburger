"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { ProjectDossierModal } from "./ProjectDossierModal";

interface ProjectsDirectoryProps {
  projects: Project[];
}

export function ProjectsDirectory({ projects }: ProjectsDirectoryProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Check URL hash or search params on mount to support direct deep linking (e.g. /projects#the-woodlands-banana-island)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const found = projects.find((p) => p.slug === hash);
        if (found) {
          setSelectedProject(found);
          setIsModalOpen(true);
        }
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, [projects]);

  const openDossier = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleSelectProjectBySlug = (slug: string) => {
    const found = projects.find((p) => p.slug === slug);
    if (found) {
      setSelectedProject(found);
    }
  };

  const infraProjects = projects.filter((p) => p.pillar === "infrastructure");
  const luxuryProjects = projects.filter((p) => p.pillar === "luxury");
  const turnkeyProjects = projects.filter((p) => p.pillar === "turnkey");

  return (
    <>
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
                <article
                  onClick={() => openDossier(p)}
                  className="group h-full flex flex-col rounded-2xl border border-border bg-secondary/40 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-ember/60 cursor-pointer"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-ink/10">
                    <Image
                      src={p.image.endsWith(".webp") ? p.image.replace(".webp", "-thumb.webp") : p.image}
                      alt={p.title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-ink/80 px-3 py-1 font-corporate text-[8px] tracking-wider text-white backdrop-blur-sm border border-white/10">
                        {p.category.toUpperCase()}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="rounded-full bg-ember/90 px-2.5 py-1 font-corporate text-[9px] font-bold text-white shadow-sm">
                        {p.year}
                      </span>
                    </div>

                    {/* Hover Hint Overlay */}
                    <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="rounded-full bg-ember px-4 py-2 text-xs font-semibold text-white shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <span>View Project Dossier</span>
                        <span>↗</span>
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
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

                    <div className="mt-5 pt-4 border-t border-border flex items-center justify-between text-xs font-medium">
                      <span className="text-ember flex items-center gap-1">
                        <span>Inspect Engineering Data</span>
                        <span>→</span>
                      </span>
                      <Link
                        href={`/projects/${p.slug}`}
                        onClick={(e) => e.stopPropagation()}
                        className="text-muted-foreground hover:text-ink text-[11px]"
                      >
                        Standalone Page ↗
                      </Link>
                    </div>
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
            {luxuryProjects.map((p, i) => {
              const hasGallery = p.gallery && p.gallery.length > 1;
              return (
                <Reveal key={p.slug} delay={i * 0.05} id={p.slug}>
                  <article
                    onClick={() => openDossier(p)}
                    className="group h-full flex flex-col rounded-2xl border border-border bg-background overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-ember/60 cursor-pointer relative"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden bg-ink/10">
                      <Image
                        src={p.image.endsWith(".webp") ? p.image.replace(".webp", "-thumb.webp") : p.image}
                        alt={p.title}
                        fill
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                        <span className="rounded-full bg-ink/80 px-3 py-1 font-corporate text-[8px] tracking-wider text-white backdrop-blur-sm border border-white/10">
                          {p.category.toUpperCase()}
                        </span>
                        {hasGallery && (
                          <span className="rounded-full bg-ember px-3 py-1 font-corporate text-[8px] font-bold tracking-wider text-white backdrop-blur-sm shadow-md flex items-center gap-1.5">
                            <span>★</span> 10-PART HIGH-RISE &amp; SITE ARCHIVE
                          </span>
                        )}
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="rounded-full bg-ember/90 px-2.5 py-1 font-corporate text-[9px] font-bold text-white shadow-sm">
                          {p.year}
                        </span>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="rounded-full bg-ember px-5 py-2.5 text-xs font-semibold text-white shadow-xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          <span>Open Interactive Dossier</span>
                          <span>↗</span>
                        </span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-4">
                          <h3 className="font-display text-2xl font-medium text-ink group-hover:text-ember transition-colors">
                            {p.title}
                          </h3>
                        </div>

                        <p className="mt-2 font-corporate text-[10px] tracking-wider text-muted-foreground uppercase flex items-center gap-1.5">
                          <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 text-ember">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          {p.location}
                        </p>

                        {(p.clientPartner || p.client) && (
                          <p className="mt-3 text-xs text-ink/80 font-medium">
                            <span className="text-muted-foreground font-normal">Partner / Developer:</span>{" "}
                            <strong>{p.clientPartner || p.client}</strong>
                          </p>
                        )}

                        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                          {p.scope}
                        </p>

                        {/* If metrics present, show brief preview */}
                        {p.metrics && p.metrics.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-border/60 grid grid-cols-2 gap-2 text-xs">
                            {p.metrics.slice(0, 2).map((m, idx) => (
                              <div key={idx} className="bg-secondary/60 rounded-lg p-2">
                                <span className="block text-[9px] font-corporate text-muted-foreground uppercase">{m.label}</span>
                                <span className="font-medium text-ink truncate block">{m.value}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs font-medium">
                        <span className="text-ember flex items-center gap-1.5 font-semibold">
                          <span>Inspect Engineering Dossier</span>
                          <span>→</span>
                        </span>
                        <Link
                          href={`/projects/${p.slug}`}
                          onClick={(e) => e.stopPropagation()}
                          className="rounded-full border border-border px-3 py-1 text-muted-foreground hover:text-ember hover:border-ember transition-colors text-[11px]"
                        >
                          Full Case Study ↗
                        </Link>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
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
                <article
                  onClick={() => openDossier(p)}
                  className="group h-full flex flex-col rounded-2xl border border-border bg-secondary/40 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-ember/60 cursor-pointer"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-ink/10">
                    <Image
                      src={p.image.endsWith(".webp") ? p.image.replace(".webp", "-thumb.webp") : p.image}
                      alt={p.title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-ink/80 px-3 py-1 font-corporate text-[8px] tracking-wider text-white backdrop-blur-sm border border-white/10">
                        {p.category.toUpperCase()}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="rounded-full bg-ember/90 px-2.5 py-1 font-corporate text-[9px] font-bold text-white shadow-sm">
                        {p.year}
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="rounded-full bg-ember px-4 py-2 text-xs font-semibold text-white shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <span>View Project Dossier</span>
                        <span>↗</span>
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
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

                    <div className="mt-5 pt-4 border-t border-border flex items-center justify-between text-xs font-medium">
                      <span className="text-ember flex items-center gap-1">
                        <span>Inspect Engineering Data</span>
                        <span>→</span>
                      </span>
                      <Link
                        href={`/projects/${p.slug}`}
                        onClick={(e) => e.stopPropagation()}
                        className="text-muted-foreground hover:text-ink text-[11px]"
                      >
                        Standalone Page ↗
                      </Link>
                    </div>
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

      {/* ── INTERACTIVE DOSSIER MODAL ── */}
      <ProjectDossierModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectProject={handleSelectProjectBySlug}
        allProjects={projects}
      />
    </>
  );
}

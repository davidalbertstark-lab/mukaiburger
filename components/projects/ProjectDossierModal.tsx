"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Project, ProjectGalleryItem } from "@/types";

interface ProjectDossierModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectProject?: (slug: string) => void;
  allProjects?: Project[];
}

export function ProjectDossierModal({
  project,
  isOpen,
  onClose,
  onSelectProject,
  allProjects = [],
}: ProjectDossierModalProps) {
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  // Reset active image when project changes
  useEffect(() => {
    setActiveImageIdx(0);
    setIsLightboxOpen(false);
  }, [project?.slug]);

  // Handle ESC and Arrow keys
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen || !project) return;

      if (e.key === "Escape") {
        if (isLightboxOpen) {
          setIsLightboxOpen(false);
        } else {
          onClose();
        }
      }

      const gallery =
        project.gallery && project.gallery.length > 0
          ? project.gallery
          : [{ src: project.image, caption: project.title, badge: "PRIMARY VIEW" }];

      if (isLightboxOpen) {
        if (e.key === "ArrowLeft") {
          setLightboxIndex((prev) => (prev > 0 ? prev - 1 : gallery.length - 1));
        } else if (e.key === "ArrowRight") {
          setLightboxIndex((prev) => (prev < gallery.length - 1 ? prev + 1 : 0));
        }
      }
    },
    [isOpen, project, isLightboxOpen, onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !project) return null;

  // Build gallery items
  const galleryItems: ProjectGalleryItem[] =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [
          {
            src: project.image,
            caption: `${project.title} — ${project.location}`,
            badge: "PRIMARY RECORD",
            orientation: "landscape",
          },
        ];

  const currentHeroItem = galleryItems[activeImageIdx] || galleryItems[0];

  // Self-balancing facts and figures
  const metrics =
    project.metrics && project.metrics.length > 0
      ? project.metrics
      : [
          {
            label: "Pillar Discipline",
            value:
              project.pillar === "infrastructure"
                ? "Infrastructure"
                : project.pillar === "luxury"
                ? "Ultra-Luxury"
                : "Turnkey Build",
          },
          { label: "Site Location", value: project.location.split(",")[0] },
          { label: "Project Status", value: project.year },
          { label: "Quality Assurance", value: "COREN Supervised" },
          { label: "Corporate Seal", value: "CAC RC 1300720" },
        ];

  // Find prev/next project
  const currentIndex = allProjects.findIndex((p) => p.slug === project.slug);
  const prevProject =
    currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject =
    currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  const whatsappMessage = encodeURIComponent(
    `Hello Mukaiburger Engineering, I am reviewing your project "${project.title}" (${project.location}) and would like to request technical consultation regarding structural engineering services.`
  );

  return (
    <>
      <AnimatePresence>
        <motion.div
          key="dossier-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-2 sm:p-4 md:p-6 backdrop-blur-md overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            key="dossier-card"
            initial={{ opacity: 0, scale: 0.97, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 14 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl my-auto rounded-3xl border border-border bg-background text-ink shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
          >
            {/* ── TOP UTILITY BAR (Architectural Warm Stone) ── */}
            <div className="flex-shrink-0 flex items-center justify-between border-b border-border bg-secondary/80 px-5 py-3.5 backdrop-blur-md z-10">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <span className="inline-flex items-center rounded-full bg-ember/15 border border-ember/30 px-3 py-0.5 font-corporate text-[9px] font-bold tracking-wider text-ember">
                  {project.category.toUpperCase()}
                </span>
                <span className="hidden sm:inline-block text-border">•</span>
                <span className="hidden sm:inline-block font-corporate text-[10px] tracking-wider text-muted-foreground truncate">
                  {project.location}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href={`/projects/${project.slug}`}
                  className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1 text-[11px] font-medium text-ink transition hover:border-ember hover:text-ember shadow-2xs"
                  title="Open permanent standalone dossier URL"
                >
                  <span>Full Case Study</span>
                  <span className="text-ember font-bold">↗</span>
                </Link>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close project dossier"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition hover:border-ink/40 hover:text-ink shadow-2xs"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* ── SCROLLABLE DOSSIER BODY ── */}
            <div className="flex-1 overflow-y-auto overscroll-contain">
              {/* 1. VISUAL HERO & GALLERY VIEWER */}
              <div className="relative bg-[#0b0d11]">
                {/* Main Viewport */}
                <div
                  className="relative aspect-[16/9] sm:aspect-[21/10] w-full overflow-hidden cursor-zoom-in group"
                  onClick={() => {
                    setLightboxIndex(activeImageIdx);
                    setIsLightboxOpen(true);
                  }}
                >
                  <Image
                    src={currentHeroItem.src}
                    alt={currentHeroItem.caption || project.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                  />
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/25 pointer-events-none" />

                  {/* Image Badge & Zoom Hint */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    {currentHeroItem.badge && (
                      <span className="rounded-full bg-black/80 px-3.5 py-1 font-corporate text-[9px] font-bold tracking-wider text-amber-300 backdrop-blur-md border border-white/20">
                        {currentHeroItem.badge}
                      </span>
                    )}
                  </div>

                  <div className="absolute top-4 right-4 rounded-full bg-black/70 px-3 py-1 font-corporate text-[9px] tracking-widest text-white backdrop-blur-md border border-white/20 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3 text-ember">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                    <span>EXPAND</span>
                  </div>

                  {/* Bottom Caption Pill */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                    <p className="max-w-2xl rounded-xl bg-black/80 px-4 py-2.5 text-xs text-white backdrop-blur-md border border-white/20 line-clamp-2 leading-relaxed">
                      {currentHeroItem.caption}
                    </p>
                    {galleryItems.length > 1 && (
                      <span className="hidden sm:inline-block rounded-full bg-black/80 px-3 py-1 font-corporate text-[10px] tracking-wider text-ember backdrop-blur-md border border-white/20">
                        {activeImageIdx + 1} / {galleryItems.length}
                      </span>
                    )}
                  </div>
                </div>

                {/* Thumbnail Strip with Fast 50KB Thumbnails */}
                {galleryItems.length > 1 && (
                  <div className="flex gap-2.5 overflow-x-auto p-3 bg-[#131720] border-t border-white/10 scrollbar-thin">
                    {galleryItems.map((item, idx) => {
                      const thumb = item.src.endsWith(".webp")
                        ? item.src.replace(".webp", "-thumb.webp")
                        : item.src;

                      return (
                        <button
                          key={`${item.src}-${idx}`}
                          type="button"
                          onClick={() => setActiveImageIdx(idx)}
                          className={`relative flex-shrink-0 w-20 sm:w-24 aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all ${
                            activeImageIdx === idx
                              ? "border-ember shadow-lg scale-102"
                              : "border-white/15 opacity-65 hover:opacity-100 hover:border-white/40"
                          }`}
                        >
                          <Image
                            src={thumb}
                            alt={item.caption || `Photo ${idx + 1}`}
                            fill
                            sizes="96px"
                            className="object-cover"
                          />
                          {item.badge && (
                            <div className="absolute bottom-0 inset-x-0 bg-black/85 px-1 py-0.5 text-[7px] font-corporate text-white/90 truncate text-center">
                              {item.badge}
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* 2. HEADER DETAILS & TITLE */}
              <div className="px-6 py-7 sm:px-8 border-b border-border bg-background">
                <div className="flex flex-wrap items-center gap-2 font-corporate text-[10px] tracking-widest text-ember uppercase">
                  <span>{project.pillar.toUpperCase()} PILLAR</span>
                  <span>•</span>
                  <span>DELIVERY TIMELINE: {project.year}</span>
                  {project.status && (
                    <>
                      <span>•</span>
                      <span className="text-emerald-600 font-semibold">{project.status.toUpperCase()}</span>
                    </>
                  )}
                </div>

                <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-ink leading-tight">
                  {project.title}
                </h2>

                <div className="mt-3 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5 text-ink">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 text-ember">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {project.location}
                  </span>
                  {(project.clientPartner || project.client) && (
                    <span className="flex items-center gap-1.5 text-ink">
                      <span className="text-muted-foreground">Partner / Developer:</span>
                      <strong>{project.clientPartner || project.client}</strong>
                    </span>
                  )}
                  {project.directorInCharge && (
                    <span className="flex items-center gap-1.5 text-ink">
                      <span className="text-muted-foreground">Supervision:</span>
                      <strong className="text-amber-800">{project.directorInCharge}</strong>
                    </span>
                  )}
                </div>
              </div>

              {/* 3. FACTS & FIGURES RIBBON (Soft Stone Background) */}
              <div className="border-b border-border bg-secondary/45 px-6 py-5 sm:px-8">
                <div className="flex items-center justify-between pb-3 border-b border-border">
                  <span className="font-corporate text-[9px] font-bold tracking-[0.25em] text-ember uppercase">
                    ENGINEERING SPECIFICATIONS &amp; METRICS
                  </span>
                  <span className="font-corporate text-[9px] tracking-widest text-muted-foreground">
                    CAC RC 1300720 VERIFIED
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-6">
                  {metrics.map((m, idx) => (
                    <div
                      key={`${m.label}-${idx}`}
                      className="rounded-xl border border-border bg-background p-3.5 shadow-2xs hover:border-ember/40 transition-colors"
                    >
                      <div className="font-corporate text-[9px] tracking-wider text-muted-foreground uppercase">
                        {m.label}
                      </div>
                      <div className="mt-1.5 font-display text-sm sm:text-base font-semibold text-ink tracking-tight">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. THREE-PART STORY-DRIVEN NARRATIVE */}
              <div className="px-6 py-8 sm:px-8 space-y-8 bg-background">
                {/* Section A: Project Overview & Scope */}
                <div className="grid gap-4 md:grid-cols-12">
                  <div className="md:col-span-4">
                    <h3 className="font-corporate text-xs font-bold tracking-widest text-ember uppercase">
                      01 / THE MANDATE
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Vision, location prestige, and building scope.
                    </p>
                  </div>
                  <div className="md:col-span-8 space-y-3">
                    <p className="text-sm leading-relaxed text-ink/90 font-normal">
                      {project.description || project.scope}
                    </p>
                    {project.scope && project.description && (
                      <div className="rounded-xl border border-border bg-secondary/60 p-4 text-xs leading-relaxed text-ink/80">
                        <strong className="text-ink font-medium">Contractual Scope of Civil Works: </strong>
                        {project.scope}
                      </div>
                    )}
                  </div>
                </div>

                <div className="h-px bg-border" />

                {/* Section B: Geotechnical & Structural Challenge */}
                <div className="grid gap-4 md:grid-cols-12">
                  <div className="md:col-span-4">
                    <h3 className="font-corporate text-xs font-bold tracking-widest text-ember uppercase">
                      02 / THE CHALLENGE
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Geological risks, coastal water table, and settlement defense.
                    </p>
                  </div>
                  <div className="md:col-span-8 space-y-3">
                    <p className="text-sm leading-relaxed text-ink/90">
                      {project.challenge ||
                        `Complex coastal soil mechanics and hydrostatic lagoon pressure require rigorous deep foundation design to protect multi-storey structural loads from differential settlement.`}
                    </p>

                    {/* Developer Value Callout */}
                    <div className="rounded-xl border border-amber-500/30 bg-amber-50/80 p-4 text-xs leading-relaxed text-amber-950 shadow-2xs">
                      <strong className="text-amber-950 font-semibold block mb-1">Why This Matters to Developers:</strong>
                      In waterfront enclaves, shallow foundations risk severe settlement, wall cracks, and basement water intrusion. Our bored piling anchors the superstructure directly into load-bearing bedrock for permanent zero-settlement stability.
                    </div>
                  </div>
                </div>

                <div className="h-px bg-border" />

                {/* Section C: Execution & High-Rise Superstructure */}
                <div className="grid gap-4 md:grid-cols-12">
                  <div className="md:col-span-4">
                    <h3 className="font-corporate text-xs font-bold tracking-widest text-ember uppercase">
                      03 / EXECUTION &amp; QA
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Plant machinery, climbing cranes, and COREN directorship.
                    </p>
                  </div>
                  <div className="md:col-span-8 space-y-4">
                    <p className="text-sm leading-relaxed text-ink/90">
                      {project.execution ||
                        `Executed under direct oversight by registered civil engineers with continuous structural slump tests, high-tensile steel inspections, and strict Health, Safety, and Environment (HSE) protocols.`}
                    </p>

                    {/* Highlights Checklist */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="rounded-2xl border border-border bg-secondary/60 p-4">
                        <p className="font-corporate text-[9px] font-bold tracking-widest text-ember uppercase mb-3">
                          KEY EXECUTION HIGHLIGHTS
                        </p>
                        <ul className="grid gap-2 sm:grid-cols-2">
                          {project.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-ink/90">
                              <span className="text-ember font-bold mt-0.5">✓</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* 5. DIRECT ACTION CONSULTATION CARD */}
              <div className="px-6 py-6 sm:px-8 bg-secondary/80 border-t border-border">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <span className="font-corporate text-[9px] font-bold tracking-widest text-ember uppercase">
                      DIRECT ENGINEERING DESK
                    </span>
                    <h4 className="mt-1 font-display text-xl font-medium text-ink">
                      Discuss your high-value project directly with our leadership
                    </h4>
                    <p className="mt-1 text-xs text-muted-foreground max-w-xl">
                      Consult with Engr. Mukailah on geotechnical feasibility, foundation piling, multi-storey framing, or request full technical specifications.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={`https://wa.me/2348032447065?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-emerald-900/20 transition hover:bg-emerald-500 hover:scale-102"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                      </svg>
                      <span>WhatsApp Engr. Mukailah</span>
                    </a>

                    <Link
                      href={`/contact?project=${project.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-xs font-medium text-ink transition hover:border-ember hover:text-ember shadow-2xs"
                    >
                      <span>Request Proposal</span>
                      <span aria-hidden>→</span>
                    </Link>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-ember/40 bg-ember/10 px-5 py-2.5 text-xs font-semibold text-ember transition hover:bg-ember hover:text-white"
                    >
                      <span>View Full Standalone Dossier</span>
                      <span aria-hidden>↗</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* 6. PREVIOUS / NEXT PROJECT NAVIGATOR FOOTER */}
              {allProjects.length > 1 && (
                <div className="grid grid-cols-2 border-t border-border bg-secondary/50">
                  <button
                    type="button"
                    onClick={() => onSelectProject && onSelectProject(prevProject.slug)}
                    className="flex flex-col items-start p-4 sm:p-6 text-left border-r border-border transition hover:bg-background group"
                  >
                    <span className="font-corporate text-[9px] tracking-widest text-muted-foreground uppercase group-hover:text-ember flex items-center gap-1">
                      <span>←</span> PREVIOUS DOSSIER
                    </span>
                    <span className="mt-1 font-display text-xs sm:text-sm font-medium text-ink line-clamp-1 group-hover:text-ember transition-colors">
                      {prevProject.title}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectProject && onSelectProject(nextProject.slug)}
                    className="flex flex-col items-end p-4 sm:p-6 text-right transition hover:bg-background group"
                  >
                    <span className="font-corporate text-[9px] tracking-widest text-muted-foreground uppercase group-hover:text-ember flex items-center gap-1">
                      NEXT DOSSIER <span>→</span>
                    </span>
                    <span className="mt-1 font-display text-xs sm:text-sm font-medium text-ink line-clamp-1 group-hover:text-ember transition-colors">
                      {nextProject.title}
                    </span>
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* ── FULLSCREEN DARKROOM LIGHTBOX MODAL ── */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            key="lightbox-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-60 flex flex-col justify-between bg-black/95 backdrop-blur-xl"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Lightbox Topbar */}
            <div
              className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/60"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-ember/20 border border-ember/40 px-3 py-0.5 font-corporate text-[9px] font-bold text-ember">
                  PHOTO {lightboxIndex + 1} OF {galleryItems.length}
                </span>
                <span className="font-corporate text-xs text-white/80 hidden sm:inline">
                  {galleryItems[lightboxIndex]?.badge || project.title}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(false)}
                  className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs text-white transition hover:bg-white/20"
                >
                  Close (ESC) ✕
                </button>
              </div>
            </div>

            {/* Lightbox Center Image Stage */}
            <div
              className="relative flex-1 flex items-center justify-center p-4 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {galleryItems.length > 1 && (
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : galleryItems.length - 1))
                  }
                  aria-label="Previous photograph"
                  className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white border border-white/20 backdrop-blur-md transition hover:bg-ember hover:border-ember hover:scale-105"
                >
                  ‹
                </button>
              )}

              <div className="relative w-full h-full max-w-6xl max-h-[82vh] flex items-center justify-center">
                <Image
                  src={galleryItems[lightboxIndex].src}
                  alt={galleryItems[lightboxIndex].caption || project.title}
                  fill
                  priority
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              {galleryItems.length > 1 && (
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIndex((prev) => (prev < galleryItems.length - 1 ? prev + 1 : 0))
                  }
                  aria-label="Next photograph"
                  className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white border border-white/20 backdrop-blur-md transition hover:bg-ember hover:border-ember hover:scale-105"
                >
                  ›
                </button>
              )}
            </div>

            {/* Lightbox Bottom Caption */}
            <div
              className="px-6 py-4 border-t border-white/10 bg-black/80 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="max-w-3xl mx-auto text-xs sm:text-sm text-white/95">
                {galleryItems[lightboxIndex]?.caption}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectGalleryItem } from "@/types";

interface ProjectGalleryLightboxProps {
  items: ProjectGalleryItem[];
  projectTitle: string;
}

export function ProjectGalleryLightbox({ items, projectTitle }: ProjectGalleryLightboxProps) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");

  // Determine filters from item badges
  const categories = ["ALL", "HIGH-RISE & BUILDINGS", "FOUNDATIONS & PILING", "SITE LEADERSHIP"];

  const filteredItems = items.filter((item) => {
    if (selectedFilter === "ALL") return true;
    const badge = (item.badge || "").toUpperCase();
    if (selectedFilter === "HIGH-RISE & BUILDINGS") {
      return badge.includes("HIGH-RISE") || badge.includes("TOWER") || badge.includes("SUPERSTRUCTURE") || badge.includes("PANORAMA") || badge.includes("ELEVATION");
    }
    if (selectedFilter === "FOUNDATIONS & PILING") {
      return badge.includes("PILING") || badge.includes("FOUNDATION") || badge.includes("REBAR") || badge.includes("GEOTECHNICAL") || badge.includes("PLANT");
    }
    if (selectedFilter === "SITE LEADERSHIP") {
      return badge.includes("LEADERSHIP") || badge.includes("OVERSIGHT") || badge.includes("INSPECTION") || badge.includes("COREN");
    }
    return true;
  });

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (activeIdx === null) return;
      if (e.key === "Escape") {
        setActiveIdx(null);
      } else if (e.key === "ArrowLeft") {
        setActiveIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : items.length - 1));
      } else if (e.key === "ArrowRight") {
        setActiveIdx((prev) => (prev !== null && prev < items.length - 1 ? prev + 1 : 0));
      }
    },
    [activeIdx, items.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    if (activeIdx !== null) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeIdx, handleKeyDown]);

  if (!items || items.length === 0) return null;

  return (
    <div>
      {/* ── FILTER CHIPS ── */}
      {items.length > 3 && (
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-[10px] font-corporate tracking-widest text-white/40 uppercase mr-1">
            VIEW EVIDENCE:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedFilter(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                selectedFilter === cat
                  ? "bg-ember text-white shadow-lg shadow-ember/20 font-semibold"
                  : "bg-white/[0.04] text-white/70 hover:bg-white/[0.08] hover:text-white border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* ── PHOTO EVIDENCE GRID ── */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item, idx) => {
          const originalIdx = items.indexOf(item);
          const isLandscape = item.orientation !== "portrait";
          // If a -thumb variant exists, use it for the grid to keep page super fast
          const thumbSrc = item.src.endsWith(".webp")
            ? item.src.replace(".webp", "-thumb.webp")
            : item.src;

          return (
            <div
              key={`${item.src}-${idx}`}
              onClick={() => setActiveIdx(originalIdx)}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#161b24] cursor-zoom-in transition-all duration-300 hover:border-ember/60 hover:shadow-2xl hover:-translate-y-1 ${
                isLandscape ? "sm:col-span-1 aspect-[16/11]" : "sm:col-span-1 aspect-[4/5]"
              }`}
            >
              <Image
                src={thumbSrc}
                alt={item.caption || `${projectTitle} photograph ${idx + 1}`}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient Scrim for readable captions and luxury feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1117]/95 via-[#0e1117]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Badge */}
              {item.badge && (
                <div className="absolute top-3 left-3">
                  <span className="rounded-full bg-black/80 px-3 py-1 font-corporate text-[8px] font-bold tracking-wider text-amber-300 backdrop-blur-md border border-white/15">
                    {item.badge}
                  </span>
                </div>
              )}

              {/* Expand Icon */}
              <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-black/70 text-white border border-white/15 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 text-ember">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-3 inset-x-3.5">
                <p className="text-xs text-white/95 line-clamp-2 leading-relaxed font-normal">
                  {item.caption}
                </p>
                <span className="mt-1.5 inline-flex items-center gap-1 font-corporate text-[9px] text-ember tracking-wider font-semibold">
                  <span>EXPAND HIGH-RES VIEW</span>
                  <span>↗</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── FULLSCREEN DARKROOM LIGHTBOX ── */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            key="gallery-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-2xl"
            onClick={() => setActiveIdx(null)}
          >
            {/* Topbar */}
            <div
              className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0e1117]/80 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-ember/20 border border-ember/40 px-3 py-0.5 font-corporate text-[9px] font-bold text-ember">
                  PHOTO {activeIdx + 1} OF {items.length}
                </span>
                <span className="font-corporate text-xs text-white/80 hidden sm:inline">
                  {items[activeIdx]?.badge || projectTitle}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setActiveIdx(null)}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs text-white transition hover:bg-white/20"
              >
                Close (ESC) ✕
              </button>
            </div>

            {/* Stage */}
            <div
              className="relative flex-1 flex items-center justify-center p-4 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {items.length > 1 && (
                <button
                  type="button"
                  onClick={() =>
                    setActiveIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : items.length - 1))
                  }
                  aria-label="Previous photograph"
                  className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white border border-white/20 backdrop-blur-md transition hover:bg-ember hover:border-ember hover:scale-105"
                >
                  ‹
                </button>
              )}

              <div className="relative w-full h-full max-w-6xl max-h-[82vh] flex items-center justify-center">
                <Image
                  src={items[activeIdx].src}
                  alt={items[activeIdx].caption || projectTitle}
                  fill
                  priority
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              {items.length > 1 && (
                <button
                  type="button"
                  onClick={() =>
                    setActiveIdx((prev) => (prev !== null && prev < items.length - 1 ? prev + 1 : 0))
                  }
                  aria-label="Next photograph"
                  className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white border border-white/20 backdrop-blur-md transition hover:bg-ember hover:border-ember hover:scale-105"
                >
                  ›
                </button>
              )}
            </div>

            {/* Bottom Caption Bar */}
            <div
              className="px-6 py-4 border-t border-white/10 bg-[#0e1117]/90 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="max-w-3xl mx-auto text-xs sm:text-sm text-white/95 font-normal">
                {items[activeIdx]?.caption}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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
    <>
      {/* ── PHOTO EVIDENCE GRID ── */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, idx) => {
          const isLandscape = item.orientation !== "portrait";
          return (
            <div
              key={`${item.src}-${idx}`}
              onClick={() => setActiveIdx(idx)}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 cursor-zoom-in transition-all duration-300 hover:border-ember/60 hover:shadow-2xl ${
                isLandscape ? "sm:col-span-1 aspect-[16/11]" : "sm:col-span-1 aspect-[4/5]"
              }`}
            >
              <Image
                src={item.src}
                alt={item.caption || `${projectTitle} photo ${idx + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Badge */}
              {item.badge && (
                <div className="absolute top-3 left-3">
                  <span className="rounded-full bg-black/75 px-3 py-1 font-corporate text-[8px] font-bold tracking-wider text-white backdrop-blur-md border border-white/15">
                    {item.badge}
                  </span>
                </div>
              )}

              {/* Expand Icon */}
              <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-white/80 border border-white/15 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 text-ember">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-3 inset-x-3">
                <p className="text-xs text-white/90 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
                <span className="mt-1 inline-block font-corporate text-[9px] text-ember tracking-wider">
                  VIEW FULL RESOLUTION →
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
            className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-xl"
            onClick={() => setActiveIdx(null)}
          >
            {/* Topbar */}
            <div
              className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/50 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-ember/20 border border-ember/40 px-3 py-0.5 font-corporate text-[9px] font-bold text-ember">
                  PHOTOGRAPH {activeIdx + 1} OF {items.length}
                </span>
                <span className="font-corporate text-xs text-white/70 hidden sm:inline">
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
              className="px-6 py-4 border-t border-white/10 bg-black/80 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="max-w-3xl mx-auto text-xs sm:text-sm text-white/90">
                {items[activeIdx]?.caption}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

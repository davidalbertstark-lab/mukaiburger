"use client";

import { motion } from "framer-motion";

export function CredentialsBand() {
  const items = [
    "RC · 1300720",
    "CAC REGISTERED",
    "EST. 2018",
    "ABUJA · NIGERIA",
    "BUILDING CONSTRUCTION",
    "CIVIL ENGINEERING",
    "ENGINEERING SUPERVISION",
    "RENOVATION & REHABILITATION",
    "NATIONWIDE COVERAGE",
    "PROJECT MANAGEMENT",
    "QUANTITY SURVEYING",
    "QUALITY ASSURANCE",
  ];

  return (
    <div className="overflow-hidden border-y border-border bg-secondary py-3">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 px-6 font-corporate text-[9px] tracking-[0.3em] text-ink/40"
          >
            {item}
            <span className="text-ember/60">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

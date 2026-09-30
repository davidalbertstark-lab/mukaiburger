"use client";

import { motion } from "framer-motion";

export function CredentialsBand() {
  const items = [
    "CAC RC · 1300720",
    "EST. 2015",
    "COREN REGISTERED",
    "NIGERIAN SOCIETY OF ENGINEERS",
    "FEDERAL HIGHWAY & BRIDGE DUALIZATION",
    "DEEP SUBTERRANEAN RAFT FOUNDATIONS",
    "BANANA ISLAND BESPOKE ENCLAVES",
    "HEAVY CIVIL EARTHWORKS",
    "ABUJA & LAGOS HEADQUARTERS",
    "NATIONWIDE EXECUTION CAPABILITY",
    "SOUND QUALITY · SOUND ENGINEERING",
  ];

  return (
    <div className="relative overflow-hidden border-y border-white/[0.08] bg-zinc-950/80 py-3.5 backdrop-blur-md">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 px-6 font-corporate text-[10px] font-medium tracking-[0.28em] text-zinc-400 hover:text-white transition-colors"
          >
            {item}
            <span className="text-ember animate-pulse">●</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

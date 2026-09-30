"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";

function useCounter(target: number, duration = 1600) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let startTs = 0;
    const tick = (ts: number) => {
      if (!startTs) startTs = ts;
      const p = Math.min((ts - startTs) / duration, 1);
      setCount(Math.floor((1 - Math.pow(2, -10 * p)) * target));
      if (p < 1) requestAnimationFrame(tick);
      else setCount(target);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return { ref, count, inView };
}

const LEGACY_STATS = [
  {
    value: 13,
    suffix: "+",
    label: "Years Directive Leadership",
    sub: "Executive Rigor",
    note: "Supervised by Engr. Azeez Mukailah Matthew Adewale",
  },
  {
    value: 15,
    suffix: "",
    label: "Verified Flagship Works",
    sub: "Proven Delivery",
    note: "Federal highways, bridges & Banana Island towers",
  },
  {
    value: 100,
    suffix: "%",
    label: "Regulatory Clearance",
    sub: "Certified Compliance",
    note: "COREN, Nigerian Society of Engineers & CAC RC 1300720",
  },
  {
    value: 2015,
    suffix: "",
    label: "Year Incorporated",
    sub: "Generational Stability",
    note: "Over a decade of unbroken corporate standing",
  },
];

function LegacyStat({
  value,
  suffix,
  label,
  sub,
  note,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  sub: string;
  note: string;
  index: number;
}) {
  const { ref, count, inView } = useCounter(value, 1500 + index * 200);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-zinc-950/60 p-6 sm:p-8 backdrop-blur-2xl transition-all duration-300 hover:border-white/25 hover:bg-zinc-900/60 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
    >
      <div>
        <div className="mb-6 flex items-center justify-between">
          <span className="font-corporate text-[9px] font-semibold tracking-[0.25em] text-zinc-500">
            SPEC · 0{index + 1}
          </span>
          <div className="h-[2px] w-12 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-ember"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.4, delay: index * 0.12 + 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ originX: 0 }}
            />
          </div>
        </div>

        <div className="mb-3 flex items-baseline leading-none">
          <span
            ref={ref}
            className="font-display font-extrabold text-white tabular-nums apple-text-gradient tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1 }}
          >
            {count}
          </span>
          <span
            className="ml-1 font-display font-bold text-amber-400"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", lineHeight: 1 }}
          >
            {suffix}
          </span>
        </div>

        <p className="font-corporate text-[8.5px] font-semibold tracking-[0.2em] text-ember uppercase">
          {sub}
        </p>
        <h3 className="mt-2 font-display text-base sm:text-lg font-bold text-white">
          {label}
        </h3>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-zinc-400 border-t border-white/[0.06] pt-3">
        {note}
      </p>
    </motion.div>
  );
}

export function LegacyStrength() {
  return (
    <section className="relative bg-black py-24 md:py-36 text-white overflow-hidden border-b border-white/[0.08]">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1 text-[10px] font-semibold tracking-[0.25em] text-ember">
                <span>●</span> BY THE NUMBERS
              </div>
              <h2 className="mt-4 font-display text-[clamp(2.1rem,4.5vw,3.6rem)] font-bold leading-[1.06] tracking-tight text-white">
                Technical metrics of{" "}
                <br />
                <span className="apple-text-gradient">proven execution.</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-zinc-400">
              Measurable benchmarks behind every cubic meter of concrete, theodolite traverse, and turnkey handover.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {LEGACY_STATS.map((s, i) => (
            <LegacyStat key={s.label} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

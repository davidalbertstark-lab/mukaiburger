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
    value: 10,
    suffix: "+",
    label: "Years of Experience",
    sub: "Since 2018",
    note: "Building across Nigeria consistently",
  },
  {
    value: 6,
    suffix: "+",
    label: "States Served",
    sub: "Growing coverage",
    note: "FCT · Lagos · Kaduna · Niger & beyond",
  },
  {
    value: 4,
    suffix: "",
    label: "Core Disciplines",
    sub: "One standard",
    note: "Construction · Civil · Supervision · Renovation",
  },
  {
    value: 100,
    suffix: "%",
    label: "Commitment to Quality",
    sub: "Every scope",
    note: "Specs non-negotiable on every site",
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
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-lg sm:p-8"
    >
      <div className="mb-5 flex items-center justify-between">
        <span className="font-corporate text-[9px] tracking-[0.32em] text-ink/20">
          0{index + 1}
        </span>
        <div className="h-px w-16 overflow-hidden rounded-full bg-border">
          <motion.div
            className="h-full rounded-full bg-ember"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.4, delay: index * 0.12 + 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ originX: 0 }}
          />
        </div>
      </div>
      <div className="mb-3 leading-none">
        <span
          ref={ref}
          className="font-display font-bold text-ink tabular-nums"
          style={{ fontSize: "clamp(3rem,7vw,5.5rem)", lineHeight: 1 }}
        >
          {count}
        </span>
        <span
          className="font-display font-bold text-ember"
          style={{ fontSize: "clamp(1.5rem,3.5vw,2.75rem)", lineHeight: 1 }}
        >
          {suffix}
        </span>
      </div>
      <p className="font-corporate text-[9px] tracking-[0.22em] text-ember">
        {sub.toUpperCase()}
      </p>
      <h3 className="mt-2 font-display text-lg font-medium text-ink sm:text-xl">
        {label}
      </h3>
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
        {note}
      </p>
    </motion.div>
  );
}

export function LegacyStrength() {
  return (
    <section className="bg-background py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <p className="font-corporate text-[10px] tracking-[0.3em] text-ember">
            BY THE NUMBERS
          </p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2
              className="font-display font-medium leading-[1.06] text-ink"
              style={{ fontSize: "clamp(1.9rem, 4.5vw, 3.5rem)" }}
            >
              Experience measured in<br className="hidden sm:block" /> capability and delivery.
            </h2>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Built on experience, strengthened through accountability.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {LEGACY_STATS.map((s, i) => (
            <LegacyStat key={s.label} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { Reveal } from "@/components/site/Reveal";
import { IMGS } from "./constants";

const STEPS = [
  { n: "01", t: "Consultation", d: "Understanding objectives, scope, constraints and budget — before any drawings or commitments." },
  { n: "02", t: "Planning", d: "Engineering, quantity surveying and risk assessment mapped against your site and regulatory context." },
  { n: "03", t: "Execution", d: "Structured site operations, weekly reporting and direct accountability from leadership." },
  { n: "04", t: "Delivery", d: "Documentation, compliance certificates, full handover and continued post-completion support." },
];

export function OurApproach() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-20 text-white md:py-32">
      <div className="blueprint-grid absolute inset-0 opacity-35" />
      <div className="absolute inset-y-0 right-0 hidden w-5/12 lg:block">
        <Image
          src={IMGS.process}
          alt="Engineering blueprints"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/70 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <p className="font-corporate text-[10px] tracking-[0.3em] text-ember">
            HOW WE WORK
          </p>
          <h2
            className="mt-5 max-w-2xl font-display font-medium leading-[1.06] text-white"
            style={{ fontSize: "clamp(1.9rem, 4.5vw, 3.5rem)" }}
          >
            Every successful project begins long before construction starts.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/50 sm:text-base">
            Method, planning and accountability built into every stage.
          </p>
        </Reveal>
        <ol className="relative mt-14 space-y-0">
          <div className="absolute left-[19px] top-6 bottom-6 w-px bg-white/10" aria-hidden />
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <li className="relative flex gap-7 pb-10 last:pb-0">
                <div className="relative z-10 mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-ember/50 bg-charcoal font-corporate text-[9px] tracking-[0.15em] text-ember">
                  {s.n}
                </div>
                <div className="pt-1.5 max-w-lg">
                  <h3 className="font-display text-xl font-medium text-white sm:text-2xl">
                    {s.t}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/50 sm:text-base">
                    {s.d}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

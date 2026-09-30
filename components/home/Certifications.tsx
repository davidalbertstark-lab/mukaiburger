"use client";

import { Reveal } from "@/components/site/Reveal";

function LogoCAC() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <span className="font-display text-xs font-extrabold tracking-widest text-white">CAC</span>
      <span className="font-corporate text-[7px] tracking-wider text-zinc-400">RC 1300720 · INC. 2015</span>
    </div>
  );
}

function LogoCOREN() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <span className="font-display text-xs font-extrabold tracking-widest text-white">COREN</span>
      <span className="font-corporate text-[7px] tracking-wider text-amber-400">ENGINEERING REGULATION</span>
    </div>
  );
}

function LogoNSE() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <span className="font-display text-xs font-extrabold tracking-widest text-white">NSE</span>
      <span className="font-corporate text-[7px] tracking-wider text-zinc-400">NIGERIAN SOCIETY OF ENGINEERS</span>
    </div>
  );
}

function LogoNIQS() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <span className="font-display text-xs font-extrabold tracking-widest text-white">NIQS</span>
      <span className="font-corporate text-[7px] tracking-wider text-zinc-400">QUANTITY SURVEYORS</span>
    </div>
  );
}

function LogoFMWH() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <span className="font-display text-xs font-extrabold tracking-widest text-white">FMWH</span>
      <span className="font-corporate text-[7px] tracking-wider text-amber-400">FEDERAL HIGHWAYS &amp; WORKS</span>
    </div>
  );
}

function LogoNIA() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <span className="font-display text-xs font-extrabold tracking-widest text-white">NIA / ARCON</span>
      <span className="font-corporate text-[7px] tracking-wider text-zinc-400">ARCHITECTURAL STANDARDS</span>
    </div>
  );
}

const CERT_LOGOS = [
  { id: "cac", el: <LogoCAC /> },
  { id: "coren", el: <LogoCOREN /> },
  { id: "nse", el: <LogoNSE /> },
  { id: "fmwh", el: <LogoFMWH /> },
  { id: "niqs", el: <LogoNIQS /> },
  { id: "nia", el: <LogoNIA /> },
];

function CertRow() {
  const tripled = [...CERT_LOGOS, ...CERT_LOGOS, ...CERT_LOGOS];
  return (
    <div className="relative overflow-hidden py-4">
      {/* Edge Gradients */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

      <style>{`
        @keyframes certLeft { from{transform:translateX(0)} to{transform:translateX(-33.33%)} }
        .cert-ticker { animation: certLeft 32s linear infinite; }
        .cert-ticker:hover { animation-play-state: paused; }
      `}</style>
      <div className="cert-ticker flex gap-4" style={{ width: "max-content" }}>
        {tripled.map((c, i) => (
          <div
            key={`${c.id}-${i}`}
            className="flex-shrink-0 flex items-center justify-center rounded-2xl border border-white/10 bg-zinc-950/80 px-6 py-4.5 backdrop-blur-2xl transition-all duration-300 hover:border-white/25 hover:bg-zinc-900/60 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]"
            style={{ minWidth: "190px" }}
          >
            {c.el}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Certifications() {
  return (
    <section className="relative bg-black py-24 md:py-32 text-white overflow-hidden border-b border-white/[0.08]">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1 text-[10px] font-semibold tracking-[0.25em] text-ember">
                <span>●</span> STATUTORY CLEARANCES &amp; AFFILIATIONS
              </div>
              <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.06] tracking-tight text-white">
                Built on recognised standards.{" "}
                <br />
                <span className="apple-text-gradient">Verified regulatory trust.</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-zinc-400">
              Rigorous compliance and certified professional standing underpinning every contract across Nigeria.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="mt-12">
        <CertRow />
      </div>

      <div className="mx-auto mt-8 max-w-7xl px-5 lg:px-10">
        <Reveal>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 rounded-full border border-white/[0.06] bg-white/[0.02] px-5 py-2.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400 animate-pulse" />
            <p className="font-corporate text-[9px] font-medium tracking-[0.22em] text-zinc-400">
              MUKAIBURGER ENGINEERING NIGERIA LIMITED · CAC RC 1300720 · COREN CERTIFIED · ALL STATUTORY CLEARANCES CURRENT
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

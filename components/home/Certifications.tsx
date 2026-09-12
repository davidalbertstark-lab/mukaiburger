"use client";

import { Reveal } from "@/components/site/Reveal";

function LogoCAC() {
  return (
    <svg viewBox="0 0 120 44" className="h-8 w-auto" aria-label="CAC">
      <rect x="2" y="2" width="116" height="40" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ink/30" />
      <text x="60" y="17" textAnchor="middle" fontSize="10" fontWeight="700" fontFamily="serif" fill="currentColor" className="text-ink">CAC</text>
      <text x="60" y="30" textAnchor="middle" fontSize="6" fontFamily="sans-serif" fill="currentColor" className="text-ink/50">CORPORATE AFFAIRS</text>
      <text x="60" y="38" textAnchor="middle" fontSize="6" fontFamily="sans-serif" fill="currentColor" className="text-ink/50">COMMISSION · NIGERIA</text>
    </svg>
  );
}

function LogoCOREN() {
  return (
    <svg viewBox="0 0 130 44" className="h-8 w-auto" aria-label="COREN">
      <rect x="2" y="2" width="126" height="40" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ink/30" />
      <g transform="translate(14,22)">
        <circle cx="0" cy="0" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ember/70" />
        <circle cx="0" cy="0" r="3" fill="currentColor" className="text-ember/70" />
      </g>
      <text x="74" y="17" textAnchor="middle" fontSize="10" fontWeight="700" fontFamily="serif" fill="currentColor" className="text-ink">COREN</text>
      <text x="74" y="29" textAnchor="middle" fontSize="5.5" fontFamily="sans-serif" fill="currentColor" className="text-ink/50">COUNCIL FOR REGULATION</text>
      <text x="74" y="37" textAnchor="middle" fontSize="5.5" fontFamily="sans-serif" fill="currentColor" className="text-ink/50">OF ENGINEERING IN NIGERIA</text>
    </svg>
  );
}

function LogoNSE() {
  return (
    <svg viewBox="0 0 110 44" className="h-8 w-auto" aria-label="NSE">
      <rect x="2" y="2" width="106" height="40" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ink/30" />
      <polygon points="55,6 66,22 55,38 44,22" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ember/70"/>
      <text x="55" y="26" textAnchor="middle" fontSize="9" fontWeight="700" fill="currentColor" className="text-ink">NSE</text>
    </svg>
  );
}

function LogoNIQS() {
  return (
    <svg viewBox="0 0 120 44" className="h-8 w-auto" aria-label="NIQS">
      <rect x="2" y="2" width="116" height="40" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ink/30" />
      <g transform="translate(16,22)" stroke="currentColor" strokeWidth="1.3" className="text-ember/70" fill="none">
        <line x1="0" y1="-8" x2="0" y2="8" />
        <line x1="-6" y1="-8" x2="6" y2="-8" />
        <circle cx="-6" cy="-4" r="3" />
        <circle cx="6" cy="-6" r="3" />
      </g>
      <text x="66" y="17" textAnchor="middle" fontSize="10" fontWeight="700" fontFamily="serif" fill="currentColor" className="text-ink">NIQS</text>
      <text x="66" y="29" textAnchor="middle" fontSize="5.5" fontFamily="sans-serif" fill="currentColor" className="text-ink/50">NIGERIAN INSTITUTE OF</text>
      <text x="66" y="37" textAnchor="middle" fontSize="5.5" fontFamily="sans-serif" fill="currentColor" className="text-ink/50">QUANTITY SURVEYORS</text>
    </svg>
  );
}

function LogoARCON() {
  return (
    <svg viewBox="0 0 130 44" className="h-8 w-auto" aria-label="ARCON">
      <rect x="2" y="2" width="126" height="40" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ink/30" />
      <g transform="translate(16,22)" stroke="currentColor" strokeWidth="1.5" className="text-ember/70" fill="none">
        <path d="M-7 9 L-7 0 Q-7 -9 0 -9 Q7 -9 7 0 L7 9" />
        <line x1="-10" y1="9" x2="10" y2="9" />
      </g>
      <text x="74" y="17" textAnchor="middle" fontSize="10" fontWeight="700" fontFamily="serif" fill="currentColor" className="text-ink">ARCON</text>
      <text x="74" y="29" textAnchor="middle" fontSize="5.5" fontFamily="sans-serif" fill="currentColor" className="text-ink/50">ARCHITECTS REGISTRATION</text>
      <text x="74" y="37" textAnchor="middle" fontSize="5.5" fontFamily="sans-serif" fill="currentColor" className="text-ink/50">COUNCIL OF NIGERIA</text>
    </svg>
  );
}

function LogoNIA() {
  return (
    <svg viewBox="0 0 100 44" className="h-8 w-auto" aria-label="NIA">
      <rect x="2" y="2" width="96" height="40" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ink/30" />
      <text x="50" y="19" textAnchor="middle" fontSize="12" fontWeight="700" fontFamily="serif" fill="currentColor" className="text-ink">NIA</text>
      <text x="50" y="31" textAnchor="middle" fontSize="5.5" fontFamily="sans-serif" fill="currentColor" className="text-ink/50">NIGERIAN INSTITUTE</text>
      <text x="50" y="39" textAnchor="middle" fontSize="5.5" fontFamily="sans-serif" fill="currentColor" className="text-ink/50">OF ARCHITECTS</text>
    </svg>
  );
}

const CERT_LOGOS = [
  { id: "cac", el: <LogoCAC />, full: "Corporate Affairs Commission" },
  { id: "coren", el: <LogoCOREN />, full: "Council for Regulation of Engineering" },
  { id: "nse", el: <LogoNSE />, full: "Nigerian Society of Engineers" },
  { id: "niqs", el: <LogoNIQS />, full: "Nigerian Inst. of Quantity Surveyors" },
  { id: "arcon", el: <LogoARCON />, full: "Architects Registration Council" },
  { id: "nia", el: <LogoNIA />, full: "Nigerian Institute of Architects" },
];

function CertRow({ direction }: { direction: "left" | "right" }) {
  const items = direction === "right" ? [...CERT_LOGOS].reverse() : CERT_LOGOS;
  const tripled = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden py-2">
      <style>{`
        @keyframes certLeft  { from{transform:translateX(0)} to{transform:translateX(-33.33%)} }
        @keyframes certRight { from{transform:translateX(-33.33%)} to{transform:translateX(0)} }
        .cert-left  { animation: certLeft  30s linear infinite; }
        .cert-right { animation: certRight 30s linear infinite; }
      `}</style>
      <div
        className={`flex gap-4 ${direction === "left" ? "cert-left" : "cert-right"}`}
        style={{ width: "max-content" }}
      >
        {tripled.map((c, i) => (
          <div
            key={`${c.id}-${i}`}
            className="flex-shrink-0 flex items-center justify-center rounded-xl border border-border bg-background px-5 py-3 transition-all hover:border-ember/30 hover:shadow-sm"
            style={{ minWidth: "160px" }}
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
    <section className="bg-secondary py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <p className="font-corporate text-[10px] tracking-[0.3em] text-ember">
            CERTIFICATIONS & AFFILIATIONS
          </p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2
              className="font-display font-medium leading-[1.06] text-ink"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.75rem)" }}
            >
              Built on recognised standards<br className="hidden sm:block" /> and professional relationships.
            </h2>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Regulatory compliance and professional standards guide every project we deliver.
            </p>
          </div>
        </Reveal>
      </div>
      <div className="mt-10 space-y-3">
        <CertRow direction="left" />
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-5 lg:px-10">
        <Reveal>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ember" />
            <p className="font-corporate text-[9px] tracking-[0.22em] text-ink/35">
              MUKAIBURGER ENGINEERING NIGERIA LIMITED · RC 1300720 · CAC REGISTERED · ALL MEMBERSHIPS CURRENT
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

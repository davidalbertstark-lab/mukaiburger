import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

export const metadata: Metadata = {
  title: "About — Mukaiburger Engineering Nigeria Limited",
  description:
    "Executive profile of Engr. Azeez Mukailah Matthew Adewale, our origin story, and our uncompromising engineering standards across Nigeria.",
};

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-ember selection:text-white">
      {/* ── HEADER (Apple Keynote Style) ── */}
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-32 overflow-hidden border-b border-white/10">
        <div className="blueprint-grid absolute inset-0 opacity-25" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-[700px] rounded-full bg-ember/10 blur-[140px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel index="00" tone="light">
            ABOUT MUKAIBURGER
          </SectionLabel>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 font-corporate text-[9px] tracking-widest text-zinc-300 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              CAC RC 1300720 · INC. NOV 23, 2015
            </span>
            <span className="font-corporate text-[9px] tracking-widest text-zinc-400 uppercase">
              COREN REG. · MNSE CERTIFIED
            </span>
          </div>

          <h1 className="mt-6 max-w-4xl text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            <span className="apple-titanium-gradient">An engineering powerhouse</span>
            <br />
            <span className="text-zinc-400">built on structure — not noise.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            Mukaiburger Engineering Nigeria Limited (CAC RC 1300720, Inc. 2015) is an indigenous civil and structural engineering contractor headquartered in Nigeria. We exist to do one thing without compromise: deliver structures that are designed rigorously, managed transparently, and built to endure for generations.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="/docs/Mukaiburger_Corporate_Company_Profile_2026.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-ember px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-ember-deep shadow-lg shadow-ember/25"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download Corporate Profile (PDF)
            </a>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-zinc-300 transition hover:border-white/40 hover:bg-white/10 hover:text-white"
            >
              Explore 15 Verified Flagships →
            </Link>
          </div>
        </div>
      </section>

      {/* ── EXECUTIVE LEADERSHIP: ENGR. ADEWALE ── */}
      <section className="py-24 md:py-32 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            {/* Founder Portrait & Action Badge */}
            <Reveal className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 shadow-2xl bg-zinc-950 aspect-[4/5] group">
                <Image
                  src="/leadership/engr_azeez_mukailah_portrait.jpg"
                  alt="Engr. Azeez Mukailah Matthew Adewale"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-black/60 p-4 rounded-2xl border border-white/10">
                  <p className="font-corporate text-[9px] tracking-[0.25em] text-ember uppercase font-semibold">
                    FOUNDER &amp; MANAGING DIRECTOR
                  </p>
                  <h3 className="mt-1 font-display text-xl sm:text-2xl font-medium text-white">
                    Engr. Azeez Mukailah Matthew Adewale
                  </h3>
                  <p className="mt-1 font-corporate text-[10px] tracking-wider text-zinc-400">
                    B.Eng, PGD Civil Engineering (ATBU Bauchi) · MNSE · COREN Reg.
                  </p>
                </div>
              </div>

              {/* On-Site PPE Inspection badge */}
              <div className="mt-6 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md">
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src="/leadership/engr_azeez_mukailah_site_ppe.jpg"
                    alt="Engr. Adewale On-Site Inspection"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-corporate text-[9px] tracking-[0.2em] text-ember font-semibold">
                    13+ YEARS ON-SITE DIRECTIVE
                  </p>
                  <p className="text-xs text-zinc-400 mt-1 leading-snug">
                    Hands-on engineering supervision across deep rotary foundation piling, marine semi-rafts, and federal highway dualizations.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Leadership Pedigree Narrative & Tier-1 Bento Matrix */}
            <Reveal delay={0.1} className="lg:col-span-7">
              <SectionLabel index="01" tone="light">EXECUTIVE LEADERSHIP &amp; PROVEN PEDIGREE</SectionLabel>
              <h2 className="mt-6 font-display text-3xl font-medium leading-tight md:text-4xl text-white tracking-tight">
                Technical precision forged through Nigeria&apos;s most complex civil undertakings.
              </h2>
              <div className="mt-6 space-y-6 text-base leading-relaxed text-zinc-400">
                <p>
                  Under the stewardship of <strong className="text-white font-medium">Engr. Azeez Mukailah Matthew Adewale</strong>, Mukaiburger Engineering embodies the highest level of structural accountability. Over more than 13 years of documented field leadership, Engr. Mukailah has steered multi-billion Naira infrastructure projects for Tier-1 multinationals and public institutions:
                </p>

                {/* Tier-1 Multinationals Bento 2x2 Matrix */}
                <div className="grid gap-4 sm:grid-cols-2 pt-2">
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-5 backdrop-blur-sm transition-all hover:border-ember/40">
                    <p className="font-corporate text-[9px] tracking-[0.25em] text-ember font-bold">JOE FARADAY LIMITED</p>
                    <p className="mt-1.5 text-sm text-white font-medium">Construction Manager &amp; Lead Site Engineer</p>
                    <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed">The Palisades (Plot L1) &amp; The Woodlands Luxury Residences, Banana Island, Ikoyi.</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-5 backdrop-blur-sm transition-all hover:border-ember/40">
                    <p className="font-corporate text-[9px] tracking-[0.25em] text-ember font-bold">SHAPOORJI PALLONJI NIGERIA</p>
                    <p className="mt-1.5 text-sm text-white font-medium">Construction Manager</p>
                    <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed">7-storey, 150-bed New Massey Street Children&apos;s Hospital for Lagos State Government.</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-5 backdrop-blur-sm transition-all hover:border-ember/40">
                    <p className="font-corporate text-[9px] tracking-[0.25em] text-ember font-bold">SERMATECH NIGERIA LIMITED</p>
                    <p className="mt-1.5 text-sm text-white font-medium">Senior Project Manager</p>
                    <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed">Calabar-Itu Federal Highway (28.6km &amp; 4 Bridges), Plot K14 Banana Island Tower, and CBN Centre of Excellence Enugu.</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-5 backdrop-blur-sm transition-all hover:border-ember/40">
                    <p className="font-corporate text-[9px] tracking-[0.25em] text-ember font-bold">ARBICO PLC / DORC</p>
                    <p className="mt-1.5 text-sm text-white font-medium">Senior Site Engineer</p>
                    <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed">Dangote Petroleum Refinery &amp; Petrochemicals Complex, Lekki Free Trade Zone.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── THE ORIGIN STORY ── */}
      <section className="py-24 md:py-32 border-b border-white/10 bg-white/[0.01]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
            <Reveal className="lg:col-span-6">
              <SectionLabel index="02" tone="light">THE ORIGIN STORY</SectionLabel>
              <h2 className="mt-6 font-display text-3xl font-medium leading-tight md:text-4xl text-white tracking-tight">
                How a Junior Secondary School vision became an engineering reality.
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-zinc-400">
                <p>
                  The name <strong className="text-white font-medium">Mukaiburger</strong> traces back to Engr. Mukailah&apos;s <strong>Junior Secondary School (JSS 1)</strong> years. During a classroom discussion about future careers, a teacher playfully fused his native name <em>Mukaila</em> with the world-renowned German engineering suffix <em>Burg / Burger</em> — the historic European hallmark of architectural fortresses and impenetrable structural stability.
                </p>
                <p>
                  What began as a childhood spark crystallized into a lifelong commitment to civil engineering and structural science. After graduating in Civil Engineering from the Abubakar Tafawa Balewa University (ATBU) and registering with COREN and the Nigerian Society of Engineers (NSE), that vision culminated in the incorporation of <strong>Mukaiburger Engineering Nigeria Limited</strong> (RC: 1300720) in 2015.
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-4 py-1.5 font-corporate text-xs font-semibold uppercase tracking-wider text-ember">
                    Credo: &quot;...Sound Quality, Sound Engineering&quot;
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-6">
              <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.05] via-zinc-950 to-black p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
                <h3 className="font-display text-2xl font-medium text-white tracking-tight">Corporate Credentials &amp; Governance</h3>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start justify-between border-b border-white/10 pb-3.5">
                    <span className="font-corporate text-[10px] tracking-[0.2em] text-zinc-400 uppercase">Registered Name</span>
                    <span className="font-medium text-sm text-white text-right">Mukaiburger Engineering Nigeria Limited</span>
                  </div>
                  <div className="flex items-start justify-between border-b border-white/10 pb-3.5">
                    <span className="font-corporate text-[10px] tracking-[0.2em] text-zinc-400 uppercase">CAC Registration</span>
                    <span className="font-medium text-sm text-white text-right">RC: 1300720 (Inc. Nov 23, 2015)</span>
                  </div>
                  <div className="flex items-start justify-between border-b border-white/10 pb-3.5">
                    <span className="font-corporate text-[10px] tracking-[0.2em] text-zinc-400 uppercase">Professional Bodies</span>
                    <span className="font-medium text-sm text-white text-right">COREN Registered · NSE Certified</span>
                  </div>
                  <div className="flex items-start justify-between border-b border-white/10 pb-3.5">
                    <span className="font-corporate text-[10px] tracking-[0.2em] text-zinc-400 uppercase">Official Bankers</span>
                    <span className="font-medium text-sm text-white text-right">Polaris Bank Plc (Acct: 4091245615)</span>
                  </div>
                  <div className="flex items-start justify-between">
                    <span className="font-corporate text-[10px] tracking-[0.2em] text-zinc-400 uppercase">Managing Director</span>
                    <span className="font-medium text-sm text-white text-right">Engr. Azeez Mukailah Matthew Adewale</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PRINCIPLES ── */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="blueprint-grid absolute inset-0 opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-[800px] rounded-full bg-ember/10 blur-[150px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel index="03" tone="light">
            OUR CORE PRINCIPLES
          </SectionLabel>

          <div className="mt-6">
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-5xl text-white">
              The Engineering Creed
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Precision", "Specifications are executed to millimeter tolerances — zero shortcuts, verified cube strength."],
              ["Accountability", "Executive leadership present on site every week, reporting empirical telemetry."],
              ["Structural Science", "Cube compressive tests, slump verification, and deep piling load integrity."],
              ["Permanence", "We engineer infrastructure and residences built to endure for generations."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 backdrop-blur-md transition-all hover:border-ember/40 hover:shadow-xl">
                <p className="font-corporate text-[9px] tracking-[0.25em] text-ember uppercase font-semibold">PILLAR SPEC</p>
                <h3 className="mt-3 font-display text-2xl font-medium text-white">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-ember px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-ember-deep shadow-lg shadow-ember/25"
            >
              Consult On Your Project <span aria-hidden>→</span>
            </Link>
            <a
              href="/docs/Mukaiburger_Corporate_Company_Profile_2026.pdf"
              download
              className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-300 transition hover:border-white/40 hover:bg-white/10 hover:text-white"
            >
              Download Full Profile (PDF)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

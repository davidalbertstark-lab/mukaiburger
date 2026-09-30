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
    <>
      {/* ── HEADER ── */}
      <section className="relative bg-ink pt-40 pb-24 text-white md:pt-48 md:pb-32">
        <div className="blueprint-grid absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel index="00" tone="light">
            ABOUT
          </SectionLabel>
          <h1 className="mt-6 max-w-4xl text-balance font-display text-4xl font-medium leading-[1.05] md:text-6xl lg:text-7xl">
            An engineering powerhouse built on structure — not noise.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Mukaiburger Engineering Nigeria Limited (CAC RC 1300720, Inc. 2015) is an indigenous civil and structural engineering contractor headquartered in Nigeria. We exist to do one thing without compromise: deliver structures that are designed rigorously, managed transparently, and built to endure.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="/docs/Mukaiburger_Corporate_Company_Profile_2026.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 text-xs font-medium uppercase tracking-wider text-white transition hover:bg-ember-deep"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download Corporate Profile (PDF)
            </a>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-xs font-medium uppercase tracking-wider text-white/85 transition hover:border-white hover:text-white"
            >
              Explore 15 Verified Flagships →
            </Link>
          </div>
        </div>
      </section>

      {/* ── EXECUTIVE LEADERSHIP: ENGR. ADEWALE ── */}
      <section className="bg-background py-24 md:py-32 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            <Reveal className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-border shadow-xl bg-ink aspect-[4/5]">
                <Image
                  src="/leadership/engr_azeez_mukailah_portrait.jpg"
                  alt="Engr. Azeez Mukailah Matthew Adewale"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-corporate text-[9px] tracking-[0.25em] text-ember uppercase">
                    FOUNDER &amp; MANAGING DIRECTOR
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-medium text-white">
                    Engr. Azeez Mukailah Matthew Adewale
                  </h3>
                  <p className="mt-1 font-corporate text-[10px] tracking-wider text-white/70">
                    B.Eng, PGD Civil Engineering (ATBU Bauchi) · MNSE · COREN Reg.
                  </p>
                </div>
              </div>

              {/* On-Site PPE Inspection badge */}
              <div className="mt-6 flex items-center gap-4 rounded-2xl border border-border bg-secondary p-4">
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl">
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
                  <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                    Hands-on engineering supervision across deep foundation piling, marine semi-rafts, and federal highway dualizations.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-7">
              <SectionLabel index="01">EXECUTIVE LEADERSHIP &amp; PROVEN PEDIGREE</SectionLabel>
              <h2 className="mt-6 font-display text-3xl font-medium leading-tight md:text-4xl text-ink">
                Technical precision formed through Nigeria&apos;s most complex civil undertakings.
              </h2>
              <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
                <p>
                  Under the stewardship of <strong>Engr. Azeez Mukailah Matthew Adewale</strong>, Mukaiburger Engineering embodies the highest level of structural accountability. Over more than 13 years of documented field leadership, Engr. Mukailah has steered major multi-billion Naira infrastructure projects for Tier-1 multinationals and public institutions:
                </p>
                <div className="grid gap-3 sm:grid-cols-2 pt-2">
                  <div className="rounded-xl border border-border/80 bg-secondary/50 p-4">
                    <p className="font-corporate text-[10px] tracking-[0.2em] text-ember font-bold">JOE FARADAY LIMITED</p>
                    <p className="mt-1 text-xs text-ink font-medium">Construction Manager &amp; Lead Site Engineer</p>
                    <p className="mt-1 text-[11px] text-muted-foreground">The Palisades (Plot L1) &amp; The Woodlands Luxury Residences, Banana Island, Ikoyi.</p>
                  </div>
                  <div className="rounded-xl border border-border/80 bg-secondary/50 p-4">
                    <p className="font-corporate text-[10px] tracking-[0.2em] text-ember font-bold">SHAPOORJI PALLONJI NIGERIA</p>
                    <p className="mt-1 text-xs text-ink font-medium">Construction Manager</p>
                    <p className="mt-1 text-[11px] text-muted-foreground">7-storey, 150-bed New Massey Street Children&apos;s Hospital for Lagos State Government.</p>
                  </div>
                  <div className="rounded-xl border border-border/80 bg-secondary/50 p-4">
                    <p className="font-corporate text-[10px] tracking-[0.2em] text-ember font-bold">SERMATECH NIGERIA LIMITED</p>
                    <p className="mt-1 text-xs text-ink font-medium">Senior Project Manager</p>
                    <p className="mt-1 text-[11px] text-muted-foreground">Calabar-Itu Federal Highway (28.6km &amp; 4 Bridges), Plot K14 Banana Island Tower, and CBN Centre of Excellence Enugu.</p>
                  </div>
                  <div className="rounded-xl border border-border/80 bg-secondary/50 p-4">
                    <p className="font-corporate text-[10px] tracking-[0.2em] text-ember font-bold">ARBICO PLC / DORC</p>
                    <p className="mt-1 text-xs text-ink font-medium">Senior Site Engineer</p>
                    <p className="mt-1 text-[11px] text-muted-foreground">Dangote Petroleum Refinery &amp; Petrochemicals Complex, Lekki Free Trade Zone.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── THE ORIGIN STORY ── */}
      <section className="bg-secondary py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
            <Reveal className="lg:col-span-6">
              <SectionLabel index="02">THE ORIGIN STORY</SectionLabel>
              <h2 className="mt-6 font-display text-3xl font-medium leading-tight md:text-4xl text-ink">
                How a Junior Secondary School vision became an engineering reality.
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  The name <strong className="text-ink">Mukaiburger</strong> traces back to Engr. Mukailah&apos;s <strong>Junior Secondary School (JSS 1)</strong> years. During a classroom discussion about future careers, a teacher playfully fused his native name <em>Mukaila</em> with the world-renowned German engineering suffix <em>Burg / Burger</em> — the historic European hallmark of architectural fortresses and impenetrable structural stability.
                </p>
                <p>
                  What began as a childhood spark crystallized into a lifelong passion for civil engineering and structural science. After graduating in Civil Engineering from the Abubakar Tafawa Balewa University (ATBU) and registering with COREN and NSE, that vision culminated in the incorporation of <strong>Mukaiburger Engineering Nigeria Limited</strong> (RC: 1300720) in 2015.
                </p>
                <p className="font-corporate text-xs font-semibold uppercase tracking-wider text-ember">
                  Credo: &quot;...Sound Quality, Sound Engineering&quot;
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-6">
              <div className="rounded-3xl border border-border bg-background p-8 sm:p-10 shadow-sm">
                <h3 className="font-display text-2xl font-medium text-ink">Corporate Credentials &amp; Governance</h3>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start justify-between border-b border-border/70 pb-3">
                    <span className="font-corporate text-[10px] tracking-[0.2em] text-muted-foreground uppercase">Registered Name</span>
                    <span className="font-medium text-sm text-ink text-right">Mukaiburger Engineering Nigeria Limited</span>
                  </div>
                  <div className="flex items-start justify-between border-b border-border/70 pb-3">
                    <span className="font-corporate text-[10px] tracking-[0.2em] text-muted-foreground uppercase">CAC Registration</span>
                    <span className="font-medium text-sm text-ink text-right">RC: 1300720 (Inc. Nov 23, 2015)</span>
                  </div>
                  <div className="flex items-start justify-between border-b border-border/70 pb-3">
                    <span className="font-corporate text-[10px] tracking-[0.2em] text-muted-foreground uppercase">Professional Bodies</span>
                    <span className="font-medium text-sm text-ink text-right">COREN Registered · NSE Certified</span>
                  </div>
                  <div className="flex items-start justify-between border-b border-border/70 pb-3">
                    <span className="font-corporate text-[10px] tracking-[0.2em] text-muted-foreground uppercase">Official Bankers</span>
                    <span className="font-medium text-sm text-ink text-right">Polaris Bank Plc (Acct: 4091245615)</span>
                  </div>
                  <div className="flex items-start justify-between">
                    <span className="font-corporate text-[10px] tracking-[0.2em] text-muted-foreground uppercase">Managing Director</span>
                    <span className="font-medium text-sm text-ink text-right">Engr. Azeez Mukailah Matthew Adewale</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PRINCIPLES ── */}
      <section className="relative overflow-hidden bg-ink py-24 text-white md:py-32">
        <Image
          src="/images/process.jpg"
          alt=""
          fill
          aria-hidden
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/85 to-ink/95" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel index="03" tone="light">
            PRINCIPLES
          </SectionLabel>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Precision", "Specifications are executed to exact tolerances — no shortcuts."],
              ["Accountability", "Leadership on site every week, reporting verified data."],
              ["Structural Science", "Cube compressive tests, slump verification, and deep piling integrity."],
              ["Permanence", "We engineer infrastructure and homes built to endure for generations."],
            ].map(([t, d]) => (
              <div key={t} className="bg-ink p-8">
                <h3 className="font-display text-xl font-medium">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-ember px-8 py-4 text-sm font-medium text-white transition hover:bg-ember-deep"
            >
              Consult On Your Project <span aria-hidden>→</span>
            </Link>
            <a
              href="/docs/Mukaiburger_Corporate_Company_Profile_2026.pdf"
              download
              className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-medium text-white transition hover:border-white hover:bg-white/10"
            >
              Download Full Profile (PDF)
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

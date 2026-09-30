import type { Metadata } from "next";
import { SectionLabel } from "@/components/site/SectionLabel";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — Mukaiburger Engineering Nigeria Limited",
  description:
    "Direct engineering consultation with Mukaiburger Engineering. Corporate headquarters in Lagos, regional project operations across Nigeria.",
};

export default function ContactPage() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-ember selection:text-white">
      {/* ── HEADER (Apple Keynote Style) ── */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden border-b border-white/10">
        <div className="blueprint-grid absolute inset-0 opacity-25" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-[700px] rounded-full bg-ember/10 blur-[140px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel index="00" tone="light">
            DIRECT ENGAGEMENT
          </SectionLabel>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 font-corporate text-[9px] tracking-widest text-zinc-300 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              DIRECT EXECUTIVE INTAKE
            </span>
            <span className="font-corporate text-[9px] tracking-widest text-zinc-400 uppercase">
              RC 1300720 · LAGOS HEADQUARTERS
            </span>
          </div>

          <h1 className="mt-6 max-w-4xl text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            <span className="apple-titanium-gradient">Let&apos;s build</span>
            <br />
            <span className="text-zinc-400">with structural certainty.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            Consult directly with our principal civil and structural engineering directors. Review site topography, foundation loads, and delivery programs with absolute clarity.
          </p>
        </div>
      </section>

      {/* ── CONTACT & TELEMETRY SECTION ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-10 items-start">
          <Reveal className="lg:col-span-5">
            <div className="space-y-6">
              {[
                {
                  label: "CORPORATE HEADQUARTERS",
                  lines: ["Lagos State, Nigeria", "Active site operations across Ikoyi, Banana Island, Lekki & Lagos Island"],
                },
                {
                  label: "REGIONAL INFRASTRUCTURE CORRIDORS",
                  lines: ["Abuja, FCT · Ondo State (Akure / Ile-Oluji)", "Cross River (Calabar-Itu / Ugep) · Enugu · Plateau (Jos)"],
                },
                {
                  label: "DIRECT ENQUIRIES & DISPATCH",
                  lines: ["mukaiburger@gmail.com", "+234 (0) 803 244 7065"],
                },
                {
                  label: "CORPORATE BANKING REPOSITORY",
                  lines: ["Polaris Bank Plc", "Acct: 4091245615 · CAC RC 1300720"],
                },
                {
                  label: "OPERATING HOURS",
                  lines: ["Monday – Friday  ·  08:00 – 18:00 WAT", "24/7 Priority Emergency Site Dispatch"],
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-5 backdrop-blur-sm"
                >
                  <p className="font-corporate text-[9px] tracking-[0.25em] text-ember uppercase font-semibold">
                    {item.label}
                  </p>
                  <div className="mt-2 space-y-1 text-sm text-zinc-300">
                    {item.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}

              <div className="pt-2">
                <a
                  href="/docs/Mukaiburger_Corporate_Company_Profile_2026.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-300 transition hover:border-white/40 hover:bg-white/10 hover:text-white"
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-ember">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Download Corporate Profile (PDF)
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}

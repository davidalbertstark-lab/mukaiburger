import type { Metadata } from "next";
import { SectionLabel } from "@/components/site/SectionLabel";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — Mukaiburger Engineering Nigeria Limited",
  description:
    "Talk to Mukaiburger Engineering about your project. Office in Abuja, project enquiries across Nigeria.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink pt-40 pb-20 text-white md:pt-48">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel index="00" tone="light">
            CONTACT
          </SectionLabel>
          <h1 className="mt-6 max-w-4xl text-balance font-display text-4xl font-medium leading-[1.05] md:text-6xl lg:text-7xl">
            Let&apos;s build.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Tell us about your project — site, scope, timing. We&apos;ll come
            back to you with the next steps.
          </p>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-10">
          <Reveal className="lg:col-span-5">
            <div className="space-y-10">
              {[
                ["CORPORATE HEADQUARTERS", ["Lagos State, Nigeria", "Active site operations across Ikoyi, Lekki & Lagos Island"]],
                ["REGIONAL OPERATIONS", ["Abuja, FCT · Ondo State · Cross River · Plateau"]],
                ["DIRECT ENQUIRIES", ["mukaiburger@gmail.com", "+234 (0) 803 244 7065"]],
                ["CORPORATE BANKING", ["Polaris Bank Plc", "Acct: 4091245615 · RC 1300720"]],
                ["OPERATING HOURS", ["Mon–Fri  ·  08:00 – 18:00 WAT"]],
              ].map(([k, v]) => (
                <div key={k as string}>
                  <p className="font-corporate text-[10px] tracking-[0.3em] text-ember">
                    {k}
                  </p>
                  <div className="mt-2 space-y-1 text-sm text-ink">
                    {(v as string[]).map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}

              <div className="pt-4 border-t border-border">
                <a
                  href="/docs/Mukaiburger_Corporate_Company_Profile_2026.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-5 py-2.5 text-xs font-medium text-ink transition hover:border-ember hover:text-ember"
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
    </>
  );
}

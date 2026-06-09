import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

export const metadata: Metadata = {
  title: "About — Mukaiburger Engineering Nigeria Limited",
  description:
    "Who we are, how we think and why disciplined construction is the only kind we deliver.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-ink pt-40 pb-24 text-white md:pt-48 md:pb-32">
        <div className="blueprint-grid absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel index="00" tone="light">
            ABOUT
          </SectionLabel>
          <h1 className="mt-6 max-w-4xl text-balance font-display text-4xl font-medium leading-[1.05] md:text-6xl lg:text-7xl">
            An engineering company built on structure — not noise.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Mukaiburger Engineering Nigeria Limited is a construction and
            infrastructure firm headquartered in Nigeria. We exist to do one
            thing very well: deliver projects that are designed properly,
            programmed honestly and built to last.
          </p>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-10">
          <Reveal>
            <SectionLabel index="01">OUR APPROACH</SectionLabel>
            <h2 className="mt-6 font-display text-3xl font-medium leading-tight md:text-4xl">
              We treat every project as a contract — with the client, with the
              law, with the people who will use the building.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                Every site we run is supervised by senior engineering staff who
                are accountable end-to-end. There is no diffusion of
                responsibility. There is no handing off to a sub-contractor and
                hoping for the best.
              </p>
              <p>
                We work to programs, not promises. Every week we report
                progress, risk and cost against the baseline. If something is
                off, the client hears it from us first — not last.
              </p>
              <p>
                We measure ourselves against three numbers only: on-spec,
                on-budget, on-time. Everything else is detail.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

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
          <SectionLabel index="02" tone="light">
            PRINCIPLES
          </SectionLabel>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Precision", "Specifications are written to be met — every line."],
              ["Accountability", "Issues surface early and travel up, not sideways."],
              ["Discipline", "Programs, costs and quality are tracked weekly."],
              ["Permanence", "We build what is meant to stand for decades."],
            ].map(([t, d]) => (
              <div key={t} className="bg-ink p-8">
                <h3 className="font-display text-xl font-medium">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-ember px-8 py-4 text-sm font-medium text-white transition hover:bg-ember-deep"
            >
              Start a conversation <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

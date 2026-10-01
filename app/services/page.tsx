import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { IMGS } from "@/components/home/constants";
import { SectorsSection } from "@/components/home/SectorsSection";

export const metadata: Metadata = {
  title: "Sectors & Disciplines — Mukaiburger Engineering Nigeria Limited",
  description:
    "Building construction, civil engineering, engineering supervision and renovation — delivered by an accountable team across Nigeria's key sectors.",
};

const SECTORS = [
  {
    n: "01",
    t: "Building Construction",
    img: IMGS.project1,
    d: "Residential, commercial and institutional structures delivered turnkey. Substructure, superstructure, MEP coordination, fit-out and handover under one accountable program.",
    bullets: [
      "Reinforced concrete frames",
      "Façade & cladding systems",
      "Finishing & fit-out",
      "MEP coordination",
    ],
  },
  {
    n: "02",
    t: "Civil Engineering",
    img: IMGS.project2,
    d: "Road infrastructure, drainage, earthworks and supporting civil works engineered for the realities of Nigerian terrain and load conditions.",
    bullets: ["Roadworks & pavements", "Storm drainage", "Bulk earthworks", "Site servicing"],
  },
  {
    n: "03",
    t: "Engineering Supervision",
    img: IMGS.project3,
    d: "Independent technical supervision, QA/QC material testing, piling integrity, and rigorous site auditing across multi-contractor and high-complexity civil sites.",
    bullets: [
      "QA / QC material compliance",
      "Piling & foundation verification",
      "Cost, program & risk management",
      "Transparent on-site client reporting",
    ],
  },
  {
    n: "04",
    t: "Renovation & Rehabilitation",
    img: IMGS.project4,
    d: "Bringing existing buildings and infrastructure back to specification — safely, economically and without disrupting ongoing operations.",
    bullets: [
      "Structural strengthening",
      "Façade refurbishment",
      "Interior renovation",
      "Phased works in live buildings",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-ink pt-40 pb-20 text-white md:pt-48">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel index="00" tone="light">
            SECTORS
          </SectionLabel>
          <h1 className="mt-6 max-w-4xl text-balance font-display text-4xl font-medium leading-[1.05] md:text-6xl lg:text-7xl">
            Four disciplines. One standard.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Whatever the scope, our delivery method is the same: a defined
            program, a single accountable lead and verifiable quality at every
            milestone.
          </p>
        </div>
      </section>

      <section className="bg-background">
        {SECTORS.map((s, i) => {
          const reverse = i % 2 === 1;
          return (
            <div key={s.n} className="border-b border-border last:border-b-0">
              <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:py-32 lg:grid-cols-12 lg:gap-16 lg:px-10">
                <Reveal
                  className={
                    reverse ? "lg:order-2 lg:col-span-6" : "lg:col-span-6"
                  }
                >
                  <div className="overflow-hidden rounded-3xl">
                    <Image
                      src={s.img}
                      alt={s.t}
                      width={800}
                      height={600}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                </Reveal>
                <Reveal
                  delay={0.1}
                  className={
                    reverse ? "lg:order-1 lg:col-span-6" : "lg:col-span-6"
                  }
                >
                  <div className="flex h-full flex-col justify-center">
                    <p className="font-corporate text-[11px] tracking-[0.3em] text-ember">
                      {s.n}
                    </p>
                    <h2 className="mt-4 font-display text-3xl font-medium leading-tight md:text-5xl">
                      {s.t}
                    </h2>
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                      {s.d}
                    </p>
                    <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-center gap-3 text-sm text-ink"
                        >
                          <span className="h-px w-6 bg-ember" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          );
        })}
      </section>

      {/* ── 8 Key Industry Sectors ── */}
      <SectorsSection />

      <section className="border-t border-white/10 bg-ink py-24 text-white md:py-28">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10">
          <div>
            <p className="font-corporate text-[10px] tracking-[0.3em] text-ember">DIRECT ENGAGEMENT</p>
            <h2 className="mt-2 max-w-2xl font-display text-3xl font-medium leading-tight md:text-5xl">
              Tell us about your site.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-ember px-8 py-4 text-sm font-medium text-white transition hover:bg-ember-deep"
          >
            Request consultation <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}

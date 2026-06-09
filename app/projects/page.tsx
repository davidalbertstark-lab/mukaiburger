import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

export const metadata: Metadata = {
  title: "Projects — Mukaiburger Engineering Nigeria Limited",
  description:
    "Selected building, civil and infrastructure projects delivered by Mukaiburger Engineering across Nigeria.",
};

const PROJECTS = [
  {
    t: "Vertical Tower Development",
    loc: "Abuja, FCT",
    cat: "Building Construction",
    year: "2024",
    img: "/images/project-1.jpg",
  },
  {
    t: "Inter-City Bridge & Expressway",
    loc: "Kaduna State",
    cat: "Civil Engineering",
    year: "2023",
    img: "/images/project-2.jpg",
  },
  {
    t: "Commercial Office Complex",
    loc: "Lagos",
    cat: "Building Construction",
    year: "2024",
    img: "/images/cta.jpg",
  },
  {
    t: "Site Preparation & Earthworks",
    loc: "Niger State",
    cat: "Infrastructure",
    year: "2023",
    img: "/images/project-4.jpg",
  },
  {
    t: "Concrete Pour — Foundation Stage",
    loc: "Abuja, FCT",
    cat: "Civil Works",
    year: "2024",
    img: "/images/project-3.jpg",
  },
  {
    t: "Aerial Site Programme Review",
    loc: "Multiple Sites",
    cat: "Project Management",
    year: "2024",
    img: "/images/hero.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-ink pt-40 pb-20 text-white md:pt-48">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel index="00" tone="light">
            PROJECTS
          </SectionLabel>
          <h1 className="mt-6 max-w-4xl text-balance font-display text-4xl font-medium leading-[1.05] md:text-6xl lg:text-7xl">
            A growing archive of work we stand behind.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Every project here was scoped, programmed and delivered by our
            team. As the company grows, so does this archive.
          </p>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 md:grid-cols-2 md:gap-12">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.06}>
                <article className="group">
                  <div className="overflow-hidden rounded-2xl bg-secondary">
                    <Image
                      src={p.img}
                      alt={p.t}
                      width={800}
                      height={600}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-6 flex items-start justify-between gap-6">
                    <div>
                      <p className="font-corporate text-[10px] tracking-[0.3em] text-ember">
                        {p.cat.toUpperCase()}
                      </p>
                      <h2 className="mt-3 font-display text-2xl font-medium md:text-3xl">
                        {p.t}
                      </h2>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {p.loc}
                      </p>
                    </div>
                    <span className="font-corporate text-[11px] tracking-[0.22em] text-ink/60">
                      {p.year}
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

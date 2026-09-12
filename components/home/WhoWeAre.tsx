"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/site/Reveal";
import { IMGS } from "./constants";

export function WhoWeAre() {
  return (
    <section className="bg-background py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_460px] lg:gap-16 xl:gap-24">
          <div>
            <Reveal>
              <p className="font-corporate text-[10px] tracking-[0.3em] text-ember">WHO WE ARE</p>
              <h2
                className="mt-5 font-display font-medium leading-[1.06] tracking-tight text-ink"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)" }}
              >
                Building with discipline and long-term responsibility.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-8 space-y-5 border-l-2 border-ember/20 pl-6">
                <p className="text-sm leading-loose text-muted-foreground sm:text-base">
                  Since 2018, Mukaiburger Engineering Nigeria Limited has provided engineering,
                  construction and infrastructure services with a commitment to quality,
                  accountability and disciplined execution.
                </p>
                <p className="text-sm leading-loose text-muted-foreground sm:text-base">
                  We combine technical expertise, practical experience and structured project
                  management to deliver solutions that create lasting value for clients and communities.
                </p>
                <p className="text-sm leading-loose text-muted-foreground sm:text-base">
                  Every project is approached with the same objective — delivering work that meets
                  expectations, protects investment and stands the test of time.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-10 flex flex-wrap gap-8">
                {[
                  { val: "2018", label: "Year Founded" },
                  { val: "4", label: "Core Disciplines" },
                  { val: "6+", label: "States Served" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-1">
                    <span className="font-display text-3xl font-medium text-ink md:text-4xl">
                      {item.val}
                    </span>
                    <span className="font-corporate text-[9px] tracking-[0.25em] text-ember">
                      {item.label.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 font-corporate text-[10px] tracking-[0.28em] text-ink/50 transition-colors hover:text-ember"
              >
                COMPANY PROFILE →
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="hidden lg:block">
            <div className="relative h-full min-h-[500px] overflow-hidden rounded-2xl">
              <Image
                src={IMGS.hero}
                alt="Mukaiburger construction operations"
                fill
                className="object-cover"
                style={{ objectPosition: "60% center" }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-ink/20 via-transparent to-ink/60" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-baseline gap-3 rounded-xl border border-white/15 bg-ink/60 px-5 py-3.5 backdrop-blur-md">
                  <span className="font-display text-4xl font-medium text-white">2018</span>
                  <span className="font-corporate text-[9px] tracking-[0.22em] text-white/55">
                    FOUNDED IN ABUJA
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/site/Reveal";
import { IMGS, SOCIAL_LINKS } from "./constants";
import { SocialIcon } from "@/components/site/SocialLinks";

export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <Image
        src={IMGS.cta}
        alt="Completed Mukaiburger project"
        fill
        className="object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-ink/95 via-ink/72 to-ink/96" />
      <div className="blueprint-grid absolute inset-0 opacity-18" />

      <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-36">
        <Reveal>
          <p className="font-corporate text-[10px] tracking-[0.3em] text-ember">
            LET&apos;S BUILD
          </p>
          <h2
            className="mt-5 max-w-3xl font-display font-medium leading-[1.04] text-white"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Have a project in mind?
            <span className="block text-white/30">We&apos;re ready when you are.</span>
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-loose text-white/50 sm:text-base">
            Whether you&apos;re at the planning stage or preparing to break ground — we&apos;re ready to discuss your requirements and provide practical, honest guidance.
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="https://wa.me/2348032447065"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-ember px-7 py-4 text-sm font-medium text-white transition-all hover:bg-ember-deep sm:w-auto"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
            <a
              href="tel:+2348032447065"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10 sm:w-auto"
            >
              +234 803 244 7065
            </a>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-medium text-ink transition-all hover:bg-concrete sm:w-auto"
            >
              Request a Quote
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-corporate text-[8px] tracking-[0.22em] text-white/20 sm:text-[9px]">
              MUKAIBURGER ENGINEERING NIGERIA LIMITED · RC 1300720 · CAC REGISTERED · LAGOS, NIGERIA
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/40 transition-all hover:border-white/40 hover:bg-white/10 hover:text-white"
                >
                  <SocialIcon name={s.name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

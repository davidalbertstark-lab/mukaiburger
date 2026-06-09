"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import { Reveal } from "@/components/site/Reveal";

const IMGS = {
  hero:     "/images/hero.jpg",
  project1: "/images/project-1.jpg",
  project2: "/images/project-2.jpg",
  project3: "/images/project-3.jpg",
  project4: "/images/project-4.jpg",
  process:  "/images/process.jpg",
  cta:      "/images/cta.jpg",
  // Sector images — use project images as stand-ins; swap with real shots when available
  sec_residential:   "/images/project-1.jpg",
  sec_commercial:    "/images/project-2.jpg",
  sec_government:    "/images/process.jpg",
  sec_healthcare:    "/images/project-3.jpg",
  sec_educational:   "/images/project-4.jpg",
  sec_industrial:    "/images/cta.jpg",
  sec_infra:         "/images/project-2.jpg",
  sec_institutional: "/images/project-3.jpg",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredentialsBand />
      <WhoWeAre />
      <CompanyFilm />
      <LegacyStrength />
      <Services />
      <Sectors />
      <IconicProjects />
      <OurApproach />
      <WhyChooseUs />
      <Certifications />
      <FinalCTA />
      <ScrollToTop />
    </>
  );
}

/* ═══════════════════════════════════════════════════════
   SCROLL-TO-TOP — fixed bottom-right arrow
   Appears after first scroll. Smooth scrolls to top.
═══════════════════════════════════════════════════════ */

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 8 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-ink/80 text-white shadow-lg backdrop-blur-md transition-all hover:bg-ember hover:border-ember sm:bottom-8 sm:right-8 sm:h-12 sm:w-12"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <path d="M18 15l-6-6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ═══════════════════════════════════════════════════════
   1. HERO
═══════════════════════════════════════════════════════ */

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.88]);

  // Trust strip: completely hidden at scroll=0, fades in after 15% scroll
  const trustOpacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);
  const trustY = useTransform(scrollYProgress, [0.15, 0.35], [16, 0]);

  const trustItems = [
    { label: "Founded",    val: "2018"      },
    { label: "RC Number",  val: "1300720"   },
    { label: "Coverage",   val: "6+ States" },
    { label: "Registered", val: "CAC"       },
  ];

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-ink text-white"
      style={{ minHeight: "100svh" }}
    >
      {/* Parallax bg */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={IMGS.hero}
          alt="Mukaiburger construction site"
          fill
          priority
          className="scale-110 object-cover"
        />
      </motion.div>

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/55 to-ink"
      />
      <div className="blueprint-grid absolute inset-0 opacity-25" />

      {/* RC tag — desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute right-5 top-1/2 hidden -translate-y-1/2 -rotate-90 font-corporate text-[9px] tracking-[0.5em] text-white/20 lg:right-10 lg:block"
      >
        RC · 1300720 · NIGERIA
      </motion.div>

      {/* Main layout */}
      <div
        className="relative mx-auto flex max-w-7xl flex-col px-5 lg:px-10"
        style={{ minHeight: "100svh" }}
      >
        {/* Spacer below navbar */}
        <div className="h-28 flex-shrink-0 sm:h-32" />

        {/* Hero text */}
        <div className="flex-shrink-0 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-corporate text-[10px] tracking-[0.3em] text-white/55 sm:text-[11px] sm:tracking-[0.32em]"
          >
            <span className="text-ember">●</span>&nbsp; EST. 2018 · ENGINEERING ·
            CONSTRUCTION · INFRASTRUCTURE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-display font-medium leading-[1.06] tracking-tight"
            style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
          >
            Engineering, construction
            <br className="hidden sm:block" /> and infrastructure
            <span className="text-white/40"> —</span>
            <br />
            built on precision,
            <br />
            reliability and trust.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-5 max-w-lg text-sm leading-relaxed text-white/65 sm:text-base"
          >
            Structured, accountable construction across Nigeria — from foundation to
            finish — with disciplined project management and uncompromising quality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <Link
              href="/projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-ink transition hover:bg-ember hover:text-white sm:w-auto"
            >
              View Projects <span aria-hidden>→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/35 px-6 py-3.5 text-sm font-medium text-white transition hover:border-ember hover:bg-ember sm:w-auto"
            >
              Request Consultation
            </Link>
          </motion.div>
        </div>

        {/* Flex spacer pushes trust strip to bottom */}
        <div className="flex-1" style={{ minHeight: "clamp(20px, 4vh, 48px)" }} />

        {/* ── Trust strip ──
            opacity=0 and y=16 at scroll position 0 (first view).
            Fades + slides in after user scrolls 15–35% through the hero.
            Works on both mobile and desktop. ── */}
        <motion.div
          style={{ opacity: trustOpacity, y: trustY }}
          className="mb-6 flex-shrink-0 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.05] backdrop-blur-sm sm:grid-cols-4"
        >
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex flex-col gap-0.5 px-3 py-2.5 sm:px-5 sm:py-4"
            >
              <span className="font-corporate text-[6px] tracking-[0.18em] text-white/30 sm:text-[8px]">
                {item.label.toUpperCase()}
              </span>
              <span className="font-display text-xs font-medium text-white sm:text-sm">
                {item.val}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="pointer-events-none absolute bottom-[140px] right-5 hidden items-center gap-2 font-corporate text-[10px] tracking-[0.3em] text-white/35 sm:flex lg:right-10"
      >
        SCROLL <span className="block h-7 w-px bg-white/20" />
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   CREDENTIALS BAND
═══════════════════════════════════════════════════════ */

function CredentialsBand() {
  const items = [
    "RC · 1300720","CAC REGISTERED","EST. 2018","ABUJA · NIGERIA",
    "BUILDING CONSTRUCTION","CIVIL ENGINEERING","ENGINEERING SUPERVISION",
    "RENOVATION & REHABILITATION","NATIONWIDE COVERAGE","PROJECT MANAGEMENT",
    "QUANTITY SURVEYING","QUALITY ASSURANCE",
  ];
  return (
    <div className="overflow-hidden border-y border-border bg-secondary py-3">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-5 px-6 font-corporate text-[9px] tracking-[0.3em] text-ink/40">
            {item}<span className="text-ember/60">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   2. WHO WE ARE — light
═══════════════════════════════════════════════════════ */

function WhoWeAre() {
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
                {[{ val:"2018",label:"Year Founded"},{ val:"4",label:"Core Disciplines"},{ val:"6+",label:"States Served"}].map((item)=>(
                  <div key={item.label} className="flex flex-col gap-1">
                    <span className="font-display text-3xl font-medium text-ink md:text-4xl">{item.val}</span>
                    <span className="font-corporate text-[9px] tracking-[0.25em] text-ember">{item.label.toUpperCase()}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <Link href="/about" className="mt-8 inline-flex items-center gap-2 font-corporate text-[10px] tracking-[0.28em] text-ink/50 transition-colors hover:text-ember">
                COMPANY PROFILE →
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="hidden lg:block">
            <div className="relative h-full min-h-[500px] overflow-hidden rounded-2xl">
              <Image src={IMGS.hero} alt="Mukaiburger construction operations" fill className="object-cover" style={{ objectPosition: "60% center" }} />
              <div className="absolute inset-0 bg-gradient-to-br from-ink/20 via-transparent to-ink/60" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-baseline gap-3 rounded-xl border border-white/15 bg-ink/60 px-5 py-3.5 backdrop-blur-md">
                  <span className="font-display text-4xl font-medium text-white">2018</span>
                  <span className="font-corporate text-[9px] tracking-[0.22em] text-white/55">FOUNDED IN ABUJA</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   3. COMPANY FILM — dark
═══════════════════════════════════════════════════════ */

function CompanyFilm() {
  return (
    <section className="bg-ink py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-corporate text-[10px] tracking-[0.3em] text-ember">SEE THE WORK</p>
              <h2 className="mt-4 font-display font-medium leading-[1.06] text-white" style={{ fontSize: "clamp(1.75rem, 4vw, 3.25rem)" }}>
                We do construction.
                <span className="text-white/30"> Not just talk about it.</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/40">The people, equipment and execution behind a Mukaiburger project.</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="group relative mt-10 overflow-hidden rounded-2xl sm:rounded-3xl">
            <Image src={IMGS.project3} alt="Mukaiburger on-site operations" width={1920} height={1080}
              className="aspect-[16/9] w-full object-cover opacity-70 transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
            <button type="button" className="absolute inset-0 flex items-center justify-center" aria-label="Play company reel">
              <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.96 }}
                className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-colors group-hover:bg-ember sm:h-20 sm:w-20 md:h-24 md:w-24">
                <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-6 w-6 text-white sm:h-8 sm:w-8"><path d="M8 5v14l11-7z"/></svg>
              </motion.div>
            </button>
            <div className="absolute bottom-0 left-0 p-5 text-white sm:p-8">
              <p className="font-corporate text-[9px] tracking-[0.3em] text-ember">COMPANY REEL · 01:24</p>
              <p className="mt-2 font-display text-lg font-medium sm:text-2xl">Foundation to handover —<br className="hidden sm:block" /> a year on site, condensed.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   4. LEGACY & STRENGTH — light, animated counters
═══════════════════════════════════════════════════════ */

function useCounter(target: number, duration = 1600) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let startTs = 0;
    const tick = (ts: number) => {
      if (!startTs) startTs = ts;
      const p = Math.min((ts - startTs) / duration, 1);
      setCount(Math.floor((1 - Math.pow(2, -10 * p)) * target));
      if (p < 1) requestAnimationFrame(tick); else setCount(target);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);
  return { ref, count, inView };
}

const LEGACY_STATS = [
  { value:10,  suffix:"+", label:"Years of Experience",   sub:"Since 2018",       note:"Building across Nigeria consistently" },
  { value:6,   suffix:"+", label:"States Served",         sub:"Growing coverage", note:"FCT · Lagos · Kaduna · Niger & beyond" },
  { value:4,   suffix:"",  label:"Core Disciplines",      sub:"One standard",     note:"Construction · Civil · Supervision · Renovation" },
  { value:100, suffix:"%", label:"Commitment to Quality", sub:"Every scope",      note:"Specs non-negotiable on every site" },
];

function LegacyStat({ value, suffix, label, sub, note, index }: { value:number; suffix:string; label:string; sub:string; note:string; index:number }) {
  const { ref, count, inView } = useCounter(value, 1500 + index * 200);
  return (
    <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-40px" }}
      transition={{ duration:0.65, delay:index*0.1, ease:[0.16,1,0.3,1] }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-lg sm:p-8">
      <div className="mb-5 flex items-center justify-between">
        <span className="font-corporate text-[9px] tracking-[0.32em] text-ink/20">0{index+1}</span>
        <div className="h-px w-16 overflow-hidden rounded-full bg-border">
          <motion.div className="h-full rounded-full bg-ember" initial={{ scaleX:0 }} animate={inView?{scaleX:1}:{}}
            transition={{ duration:1.4, delay:index*0.12+0.3, ease:[0.16,1,0.3,1] }} style={{ originX:0 }} />
        </div>
      </div>
      <div className="mb-3 leading-none">
        <span ref={ref} className="font-display font-bold text-ink tabular-nums" style={{ fontSize:"clamp(3rem,7vw,5.5rem)", lineHeight:1 }}>{count}</span>
        <span className="font-display font-bold text-ember" style={{ fontSize:"clamp(1.5rem,3.5vw,2.75rem)", lineHeight:1 }}>{suffix}</span>
      </div>
      <p className="font-corporate text-[9px] tracking-[0.22em] text-ember">{sub.toUpperCase()}</p>
      <h3 className="mt-2 font-display text-lg font-medium text-ink sm:text-xl">{label}</h3>
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">{note}</p>
    </motion.div>
  );
}

function LegacyStrength() {
  return (
    <section className="bg-background py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <p className="font-corporate text-[10px] tracking-[0.3em] text-ember">BY THE NUMBERS</p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display font-medium leading-[1.06] text-ink" style={{ fontSize:"clamp(1.9rem,4.5vw,3.5rem)" }}>
              Experience measured in<br className="hidden sm:block" /> capability and delivery.
            </h2>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">Built on experience, strengthened through accountability.</p>
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {LEGACY_STATS.map((s,i) => <LegacyStat key={s.label} {...s} index={i} />)}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   5. SERVICES — dark, accordion + sticky image
═══════════════════════════════════════════════════════ */

const SERVICES = [
  { n:"01", t:"Building Construction",       d:"Residential, commercial and institutional developments executed with precision from foundation to completion.", tags:["Residential","Commercial","Institutional"], img:IMGS.project1 },
  { n:"02", t:"Civil Engineering",           d:"Roads, drainage systems and infrastructure works designed for durability and performance across Nigerian terrain.", tags:["Roads","Drainage","Earthworks"], img:IMGS.project2 },
  { n:"03", t:"Engineering Supervision",     d:"Independent supervision ensuring specs are met, materials verified and progress documented at every stage.", tags:["QA / QC","Site Audit","Compliance"], img:IMGS.project3 },
  { n:"04", t:"Renovation & Rehabilitation", d:"Upgrades, repairs and restoration work carried out with minimal disruption and maximum efficiency.", tags:["Retrofitting","Structural Repair","Upgrades"], img:IMGS.project4 },
];

function Services() {
  const [active, setActive] = useState<number|null>(0);
  return (
    <section className="bg-ink py-20 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <p className="font-corporate text-[10px] tracking-[0.3em] text-ember">WHAT WE DO</p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display font-medium leading-[1.05] tracking-tight text-white" style={{ fontSize:"clamp(2rem,5vw,3.75rem)" }}>
              Four disciplines.<br className="hidden sm:block" /> One standard.
            </h2>
            <p className="max-w-xs text-sm leading-relaxed text-white/40 sm:text-right">Same people, same method — every project.</p>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-0 lg:grid-cols-[1fr_400px] lg:gap-10 xl:gap-16">
          <div className="divide-y divide-white/[0.07]">
            {SERVICES.map((s,i) => {
              const isOpen = active===i;
              return (
                <Reveal key={s.n} delay={i*0.06}>
                  <button type="button" onClick={() => setActive(isOpen?null:i)} className="group w-full py-7 text-left">
                    <div className="flex items-center gap-6">
                      <span className={`font-corporate text-[9px] tracking-[0.32em] transition-colors duration-300 ${isOpen?"text-ember":"text-white/20"}`}>{s.n}</span>
                      <h3 className={`font-display text-xl font-medium transition-colors duration-300 sm:text-2xl md:text-3xl ${isOpen?"text-white":"text-white/50 group-hover:text-white/75"}`}>{s.t}</h3>
                      <motion.span animate={{ rotate:isOpen?45:0 }} transition={{ duration:0.3 }}
                        className={`ml-auto flex-shrink-0 text-xl leading-none transition-colors duration-300 ${isOpen?"text-ember":"text-white/18 group-hover:text-white/35"}`}>+</motion.span>
                    </div>
                    <motion.div initial={false} animate={{ height:isOpen?"auto":0, opacity:isOpen?1:0 }} transition={{ duration:0.45, ease:[0.16,1,0.3,1] }} className="overflow-hidden">
                      <div className="pl-12 pr-6 pb-2 pt-4">
                        <p className="text-sm leading-relaxed text-white/50 sm:text-base">{s.d}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {s.tags.map(tag=>(
                            <span key={tag} className="rounded-full border border-white/10 px-3 py-1 font-corporate text-[9px] tracking-[0.2em] text-white/30">{tag}</span>
                          ))}
                        </div>
                        <Link href="/services" className="mt-5 inline-flex items-center gap-2 font-corporate text-[9px] tracking-[0.3em] text-ember transition-all hover:gap-3">LEARN MORE →</Link>
                        {isOpen && (
                          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} className="mt-5 lg:hidden">
                            <div className="relative aspect-[16/8] overflow-hidden rounded-xl">
                              <Image src={s.img} alt={s.t} fill className="object-cover opacity-75" />
                              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  </button>
                </Reveal>
              );
            })}
          </div>
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <AnimatePresence mode="wait">
                <motion.div key={active??"none"} initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-10 }}
                  transition={{ duration:0.5, ease:[0.16,1,0.3,1] }} className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-charcoal">
                  {active!==null && <Image src={SERVICES[active].img} alt={SERVICES[active].t} fill className="object-cover opacity-75" />}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                  {active!==null && (
                    <div className="absolute bottom-0 left-0 p-7">
                      <span className="font-corporate text-[9px] tracking-[0.3em] text-ember">{SERVICES[active].n}</span>
                      <p className="mt-2 font-display text-2xl font-medium text-white">{SERVICES[active].t}</p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
        <Reveal delay={0.2}>
          <div className="mt-10 border-t border-white/[0.07] pt-8">
            <Link href="/services" className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 font-corporate text-[10px] tracking-[0.28em] text-white/40 transition-all hover:border-ember hover:text-ember">
              EXPLORE ALL SERVICES →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   6. SECTORS — cinematic image cards with overlay text
   Each sector has a full-bleed image, gradient overlay,
   title at bottom. On hover: image zooms, ember bar grows.
   Arab Contractors-inspired grid but far more visual.
═══════════════════════════════════════════════════════ */

const SECTORS = [
  { t:"Residential",    d:"Private homes, housing estates and residential complexes.", img:IMGS.sec_residential },
  { t:"Commercial",     d:"Office buildings, retail centres and mixed-use developments.", img:IMGS.sec_commercial },
  { t:"Government",     d:"Ministries, civic buildings and public infrastructure.", img:IMGS.sec_government },
  { t:"Healthcare",     d:"Hospitals, clinics and medical facility construction.", img:IMGS.sec_healthcare },
  { t:"Educational",    d:"Schools, universities and learning institution facilities.", img:IMGS.sec_educational },
  { t:"Industrial",     d:"Factories, warehouses and industrial facility construction.", img:IMGS.sec_industrial },
  { t:"Infrastructure", d:"Roads, drainage, earthworks and utility networks.", img:IMGS.sec_infra },
  { t:"Institutional",  d:"Civic halls, courts, embassies and institutional buildings.", img:IMGS.sec_institutional },
];

function Sectors() {
  const [hovered, setHovered] = useState<number|null>(null);
  return (
    <section className="bg-ink py-20 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <p className="font-corporate text-[10px] tracking-[0.3em] text-ember">SECTORS WE SERVE</p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display font-medium leading-[1.06] text-white" style={{ fontSize:"clamp(1.9rem,4.5vw,3.5rem)" }}>
              Supporting projects across<br className="hidden sm:block" /> diverse industries.
            </h2>
            <p className="max-w-xs text-sm leading-relaxed text-white/40">From private developments to public infrastructure — we adapt our expertise to every sector.</p>
          </div>
        </Reveal>

        {/* Cinematic image grid */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {SECTORS.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.05}>
              <div
                className="group relative cursor-pointer overflow-hidden rounded-2xl"
                style={{ aspectRatio: i === 0 || i === 3 ? "3/4" : "3/4" }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Image with zoom on hover */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ scale: hovered === i ? 1.08 : 1 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image src={s.img} alt={s.t} fill className="object-cover" />
                </motion.div>

                {/* Gradient: always dark at bottom, deeper on hover */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ opacity: hovered === i ? 1 : 0.75 }}
                  transition={{ duration: 0.4 }}
                  style={{ background: "linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.3) 50%, rgba(10,10,10,0.1) 100%)" }}
                />

                {/* Content at bottom */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  {/* Ember bar — grows on hover */}
                  <motion.div
                    className="mb-3 h-0.5 rounded-full bg-ember"
                    animate={{ width: hovered === i ? "2.5rem" : "1rem" }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <h3 className="font-display text-base font-medium text-white sm:text-lg">{s.t}</h3>
                  <motion.p
                    className="mt-1.5 text-xs leading-relaxed text-white/55 sm:text-sm"
                    animate={{ opacity: hovered === i ? 1 : 0, y: hovered === i ? 0 : 6 }}
                    transition={{ duration: 0.35 }}
                  >
                    {s.d}
                  </motion.p>
                </div>

                {/* Top-right index badge */}
                <div className="absolute right-3 top-3">
                  <span className="font-corporate text-[9px] tracking-[0.2em] text-white/25">0{i+1}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Nationwide callout */}
        <Reveal delay={0.2}>
          <div className="mt-5 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-7">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-ember/15 text-ember">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-display text-base font-medium text-white sm:text-lg">Nationwide coverage across Nigeria</p>
              <p className="mt-1 text-xs leading-relaxed text-white/45 sm:text-sm">Headquartered in Abuja, FCT — active projects across Lagos, Kaduna, Niger and more.</p>
            </div>
            <Link href="/contact" className="flex-shrink-0 font-corporate text-[10px] tracking-[0.25em] text-ember hover:underline">DISCUSS YOUR PROJECT →</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   7. ICONIC PROJECTS — dark
   Arab Contractors-style infinite auto-scroll.
   FIXED: proper pause via CSS animation-play-state.
   Cards are <Link> so they navigate to /projects/[slug].
═══════════════════════════════════════════════════════ */

const ICONIC_PROJECTS = [
  { slug:"commercial-office-complex",     t:"Commercial Office Complex",      loc:"Abuja, FCT",   cat:"Building Construction", year:"2024", img:IMGS.cta },
  { slug:"inter-city-road-drainage",      t:"Inter-City Road & Drainage",     loc:"Kaduna State", cat:"Civil Engineering",     year:"2023", img:IMGS.project2 },
  { slug:"vertical-tower-development",    t:"Vertical Tower Development",     loc:"Abuja, FCT",   cat:"Building Construction", year:"2023", img:IMGS.project1 },
  { slug:"site-preparation-earthworks",   t:"Site Preparation & Earthworks",  loc:"Niger State",  cat:"Civil Engineering",     year:"2023", img:IMGS.project4 },
  { slug:"institutional-facility-complex",t:"Institutional Facility Complex", loc:"Lagos State",  cat:"Building Construction", year:"2022", img:IMGS.process },
  { slug:"road-rehabilitation-project",   t:"Road Rehabilitation Project",    loc:"Abuja, FCT",   cat:"Civil Engineering",     year:"2022", img:IMGS.project3 },
];

function IconicProjects() {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number|null>(null);
  const allCards = [...ICONIC_PROJECTS, ...ICONIC_PROJECTS];

  return (
    <section className="bg-secondary py-20 md:py-28 overflow-hidden">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <div className="flex items-end justify-between">
            <div>
              <p className="font-corporate text-[10px] tracking-[0.3em] text-ember">SELECTED PROJECTS</p>
              <h2 className="mt-4 font-display font-medium leading-[1.06] text-ink" style={{ fontSize:"clamp(1.9rem,4.5vw,3.5rem)" }}>
                Real projects.
                <span className="text-ink/30"> Real progress.</span>
                <br />Real results.
              </h2>
            </div>
            <Link href="/projects" className="hidden flex-shrink-0 font-corporate text-[10px] tracking-[0.28em] text-ink/40 transition-colors hover:text-ember sm:block">
              ALL PROJECTS →
            </Link>
          </div>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
            A selection of projects reflecting our commitment to quality, reliability and disciplined execution.
          </p>
        </Reveal>
      </div>

      {/* ── Scrolling strip ── */}
      <div className="mt-10 relative">
        {/* Edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-secondary to-transparent sm:w-20" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-secondary to-transparent sm:w-20" />

        {/*
          PAUSE FIX: We drive the animation via CSS keyframes injected by a style tag,
          and toggle animation-play-state via inline style. Framer's animate prop
          can't pause mid-animation reliably; CSS can.
        */}
        <style>{`
          @keyframes scrollLeft {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          .projects-strip {
            animation: scrollLeft 42s linear infinite;
          }
          .projects-strip.paused {
            animation-play-state: paused;
          }
        `}</style>

        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => { setIsPaused(false); setHoveredIdx(null); }}
        >
          <div className={`projects-strip flex gap-4 sm:gap-5 ${isPaused ? "paused" : ""}`}
            style={{ width: "max-content", paddingLeft: "1.25rem" }}>
            {allCards.map((p, i) => (
              <Link
                key={`${p.slug}-${i}`}
                href={`/projects/${p.slug}`}
                className="group relative flex-shrink-0 block"
                style={{ width:"clamp(240px,28vw,380px)" }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio:"4/5" }}>
                  <div
                    className="absolute inset-0 transition-transform duration-700 ease-out"
                    style={{ transform: hoveredIdx===i ? "scale(1.07)" : "scale(1)" }}
                  >
                    <Image src={p.img} alt={p.t} fill className="object-cover opacity-85" />
                  </div>
                  <div className="absolute inset-0" style={{ background:"linear-gradient(to top, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.1) 55%, transparent 100%)" }} />

                  {/* Category badge */}
                  <div className="absolute left-3 top-3">
                    <span className="rounded-full border border-white/15 bg-ink/50 px-2.5 py-1 font-corporate text-[8px] tracking-[0.2em] text-ember/80 backdrop-blur-sm">
                      {p.cat.toUpperCase()}
                    </span>
                  </div>

                  {/* Year */}
                  <div className="absolute right-3 top-3">
                    <span className="font-corporate text-[9px] tracking-[0.18em] text-white/30">{p.year}</span>
                  </div>

                  {/* Arrow — fades in on hover */}
                  <div
                    className="absolute right-3 bottom-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-ember/80 backdrop-blur-sm transition-all duration-300"
                    style={{ opacity: hoveredIdx===i ? 1 : 0, transform: hoveredIdx===i ? "scale(1)" : "scale(0.75)" }}
                  >
                    <span className="text-white text-sm font-medium">↗</span>
                  </div>
                </div>

                {/* Below-image info — Arab Contractors exact style */}
                <div className="pt-3.5 pb-2">
                  <h3
                    className="font-display text-base font-medium leading-snug text-ink transition-colors group-hover:text-ember sm:text-lg"
                  >{p.t}</h3>
                  <p className="mt-1.5 flex items-center gap-1.5 font-corporate text-[9px] tracking-[0.15em] text-ink/40">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3 w-3 flex-shrink-0 text-ember/60">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                    {p.loc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Pause indicator */}
        <AnimatePresence>
          {isPaused && (
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
              className="pointer-events-none absolute right-5 top-3 flex items-center gap-2 rounded-full border border-border bg-background/90 px-3 py-1.5 backdrop-blur-sm sm:right-8">
              <span className="h-1.5 w-1.5 rounded-full bg-ember" />
              <span className="font-corporate text-[8px] tracking-[0.2em] text-ink/50">PAUSED</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile link */}
      <div className="mx-auto mt-6 max-w-7xl px-5 sm:hidden lg:px-10">
        <Link href="/projects" className="font-corporate text-[10px] tracking-[0.28em] text-ink/40 hover:text-ember">ALL PROJECTS →</Link>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   8. OUR APPROACH — charcoal + image, timeline
═══════════════════════════════════════════════════════ */

const STEPS = [
  { n:"01", t:"Consultation", d:"Understanding objectives, scope, constraints and budget — before any drawings or commitments." },
  { n:"02", t:"Planning",     d:"Engineering, quantity surveying and risk assessment mapped against your site and regulatory context." },
  { n:"03", t:"Execution",    d:"Structured site operations, weekly reporting and direct accountability from leadership." },
  { n:"04", t:"Delivery",     d:"Documentation, compliance certificates, full handover and continued post-completion support." },
];

function OurApproach() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-20 text-white md:py-32">
      <div className="blueprint-grid absolute inset-0 opacity-35" />
      <div className="absolute inset-y-0 right-0 hidden w-5/12 lg:block">
        <Image src={IMGS.process} alt="Engineering blueprints" fill className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/70 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <p className="font-corporate text-[10px] tracking-[0.3em] text-ember">HOW WE WORK</p>
          <h2 className="mt-5 max-w-2xl font-display font-medium leading-[1.06] text-white" style={{ fontSize:"clamp(1.9rem,4.5vw,3.5rem)" }}>
            Every successful project begins long before construction starts.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/50 sm:text-base">Method, planning and accountability built into every stage.</p>
        </Reveal>
        <ol className="relative mt-14 space-y-0">
          <div className="absolute left-[19px] top-6 bottom-6 w-px bg-white/10" aria-hidden />
          {STEPS.map((s,i) => (
            <Reveal key={s.n} delay={i*0.1}>
              <li className="relative flex gap-7 pb-10 last:pb-0">
                <div className="relative z-10 mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-ember/50 bg-charcoal font-corporate text-[9px] tracking-[0.15em] text-ember">{s.n}</div>
                <div className="pt-1.5 max-w-lg">
                  <h3 className="font-display text-xl font-medium text-white sm:text-2xl">{s.t}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/50 sm:text-base">{s.d}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   9. WHY CLIENTS CHOOSE US — light
   Desktop: left nav + right expanding panel.
   Mobile: accordion.
═══════════════════════════════════════════════════════ */

const REASONS = [
  { n:"01", t:"Structured Project Management", short:"Clear plans. Clear ownership.", d:"Defined programs, clear ownership and weekly progress reporting — you always know what's happening and what's next.", stat:"Weekly reporting", statSub:"every active site", icon:<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-full w-full"><rect x="8" y="8" width="32" height="32" rx="4"/><line x1="8" y1="18" x2="40" y2="18"/><line x1="16" y1="8" x2="16" y2="18"/><line x1="32" y1="8" x2="32" y2="18"/><path d="M14 28l5 5 11-11" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { n:"02", t:"Transparent Communication",      short:"Direct access. No switchboards.", d:"Clients reach decision-makers directly. Issues surface early — not after they've become expensive problems.", stat:"Direct leadership", statSub:"access on every project", icon:<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-full w-full"><path d="M8 12a4 4 0 014-4h24a4 4 0 014 4v16a4 4 0 01-4 4H28l-8 8v-8H12a4 4 0 01-4-4V12z"/><line x1="16" y1="20" x2="32" y2="20"/><line x1="16" y1="26" x2="26" y2="26"/></svg> },
  { n:"03", t:"Quality-Focused Execution",      short:"Specs are non-negotiable.", d:"Materials verified, work inspected, quality documented — not assumed. Specifications set at contract are what get built.", stat:"Zero-compromise", statSub:"on specifications", icon:<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-full w-full"><circle cx="24" cy="20" r="12"/><path d="M24 10v10l6 4"/><circle cx="24" cy="38" r="4"/><path d="M21 38l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { n:"04", t:"Cost Optimisation",              short:"Your budget works harder.", d:"Rigorous quantity surveying from day one — your budget goes to construction, not to waste or surprises.", stat:"QS-validated", statSub:"bills of quantities", icon:<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-full w-full"><circle cx="24" cy="24" r="16"/><path d="M24 14v2m0 16v2M18 20c0-1.5 2.7-3 6-3s6 1.5 6 3-2.7 3-6 3-6 1.5-6 3 2.7 3 6 3 6-1.5 6-3" strokeLinecap="round"/></svg> },
  { n:"05", t:"Safety & Compliance",            short:"Site discipline. Zero shortcuts.", d:"Commitment to industry standards and responsible site practices. Unsafe sites cost money, time and reputation.", stat:"Full compliance", statSub:"CAC, COREN, NSE standards", icon:<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-full w-full"><path d="M24 6l14 6v12c0 9-7 14-14 18C17 38 10 33 10 24V12l14-6z"/><path d="M18 24l4 4 8-8" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { n:"06", t:"Attention to Detail",            short:"Nothing is unimportant.", d:"Careful execution at every stage — from specification review to final finishes. The difference between good and great lives in the details.", stat:"Stage-by-stage", statSub:"quality inspection", icon:<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-full w-full"><circle cx="22" cy="22" r="12"/><path d="M31 31l9 9" strokeLinecap="round"/><circle cx="22" cy="22" r="4"/></svg> },
];

function WhyChooseUs() {
  const [active, setActive] = useState(0);
  const r = REASONS[active];
  return (
    <section className="bg-background py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <p className="font-corporate text-[10px] tracking-[0.3em] text-ember">WHY CLIENTS CHOOSE US</p>
          <h2 className="mt-4 max-w-2xl font-display font-medium leading-[1.06] text-ink" style={{ fontSize:"clamp(1.9rem,4.5vw,3.5rem)" }}>
            Reliability is a system —<br className="hidden sm:block" /> not a slogan.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">Most construction problems aren't about materials — they're about management, communication and accountability.</p>
        </Reveal>

        {/* Desktop */}
        <div className="mt-12 hidden lg:grid lg:grid-cols-[300px_1fr] lg:gap-6">
          <div className="flex flex-col gap-2">
            {REASONS.map((reason,i) => (
              <button key={reason.n} type="button" onClick={() => setActive(i)}
                className={`group relative flex items-center gap-4 rounded-xl px-5 py-4 text-left transition-all duration-300 ${active===i ? "bg-ink text-white" : "bg-secondary text-ink hover:bg-border/50"}`}>
                <span className={`font-corporate text-[9px] tracking-[0.28em] ${active===i?"text-ember":"text-ink/30"}`}>{reason.n}</span>
                <div className="flex-1 min-w-0">
                  <p className={`font-display text-sm font-medium leading-tight ${active===i?"text-white":"text-ink"}`}>{reason.t}</p>
                  <p className={`mt-0.5 font-corporate text-[8px] tracking-[0.12em] ${active===i?"text-white/45":"text-ink/30"}`}>{reason.short}</p>
                </div>
                {active===i && <motion.div layoutId="activeBar" className="h-4 w-0.5 flex-shrink-0 rounded-full bg-ember" />}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity:0, x:14 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:-8 }}
              transition={{ duration:0.38, ease:[0.16,1,0.3,1] }}
              className="relative overflow-hidden rounded-2xl border border-border bg-background p-10">
              <div className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 text-ink/[0.04]">{r.icon}</div>
              <span className="font-corporate text-[10px] tracking-[0.35em] text-ember">{r.n}</span>
              <div className="mt-4 h-14 w-14 text-ember">{r.icon}</div>
              <h3 className="mt-5 font-display text-3xl font-medium text-ink">{r.t}</h3>
              <p className="mt-4 max-w-lg text-base leading-loose text-muted-foreground">{r.d}</p>
              <div className="mt-8 inline-flex items-center gap-4 rounded-xl bg-secondary px-5 py-3.5">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ember" />
                <div>
                  <p className="font-display text-lg font-medium text-ink">{r.stat}</p>
                  <p className="font-corporate text-[9px] tracking-[0.18em] text-ink/45">{r.statSub.toUpperCase()}</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-0.5 w-full bg-border">
                <motion.div className="h-full bg-ember" initial={{ scaleX:0 }} animate={{ scaleX:1 }} transition={{ duration:0.5, ease:"easeOut" }} style={{ originX:0 }} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile accordion */}
        <div className="mt-10 flex flex-col gap-2 lg:hidden">
          {REASONS.map((reason,i) => {
            const isOpen = active===i;
            return (
              <div key={reason.n} className={`overflow-hidden rounded-2xl border transition-colors ${isOpen?"border-ember/30 bg-ink":"border-border bg-background"}`}>
                <button type="button" onClick={() => setActive(isOpen?(i+1)%REASONS.length:i)} className="flex w-full items-center gap-4 p-5 text-left">
                  <span className={`font-corporate text-[9px] tracking-[0.28em] ${isOpen?"text-ember":"text-ink/30"}`}>{reason.n}</span>
                  <p className={`flex-1 font-display text-base font-medium ${isOpen?"text-white":"text-ink"}`}>{reason.t}</p>
                  <motion.span animate={{ rotate:isOpen?45:0 }} className={`text-xl leading-none ${isOpen?"text-ember":"text-ink/20"}`}>+</motion.span>
                </button>
                <motion.div initial={false} animate={{ height:isOpen?"auto":0, opacity:isOpen?1:0 }} transition={{ duration:0.4, ease:[0.16,1,0.3,1] }} className="overflow-hidden">
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-sm leading-relaxed text-white/55">{reason.d}</p>
                    <div className="mt-4 inline-flex items-center gap-3 rounded-lg bg-white/8 px-4 py-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                      <p className="font-corporate text-[8px] tracking-[0.15em] text-white/45">{reason.stat.toUpperCase()} — {reason.statSub.toUpperCase()}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   10. CERTIFICATIONS — light-grey
   Real SVG logos for CAC, COREN, NSE, NIQS, ARCON, NIA.
   Two animated marquee rows — opposite directions.
   No static content, all in motion.
═══════════════════════════════════════════════════════ */

/* Inline SVG logos — simplified but recognisable representations */
function LogoCAC() {
  return (
    <svg viewBox="0 0 120 44" className="h-8 w-auto" aria-label="CAC">
      <rect x="2" y="2" width="116" height="40" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ink/30"/>
      <text x="60" y="17" textAnchor="middle" fontSize="10" fontWeight="700" fontFamily="serif" fill="currentColor" className="text-ink">CAC</text>
      <text x="60" y="30" textAnchor="middle" fontSize="6" fontFamily="sans-serif" fill="currentColor" className="text-ink/50">CORPORATE AFFAIRS</text>
      <text x="60" y="38" textAnchor="middle" fontSize="6" fontFamily="sans-serif" fill="currentColor" className="text-ink/50">COMMISSION · NIGERIA</text>
    </svg>
  );
}
function LogoCOREN() {
  return (
    <svg viewBox="0 0 130 44" className="h-8 w-auto" aria-label="COREN">
      <rect x="2" y="2" width="126" height="40" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ink/30"/>
      {/* Gear icon left */}
      <g transform="translate(14,22)">
        <circle cx="0" cy="0" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ember/70"/>
        <circle cx="0" cy="0" r="3" fill="currentColor" className="text-ember/70"/>
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
      <rect x="2" y="2" width="106" height="40" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ink/30"/>
      <polygon points="55,6 66,22 55,38 44,22" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ember/70"/>
      <text x="55" y="26" textAnchor="middle" fontSize="9" fontWeight="700" fill="currentColor" className="text-ink">NSE</text>
    </svg>
  );
}
function LogoNIQS() {
  return (
    <svg viewBox="0 0 120 44" className="h-8 w-auto" aria-label="NIQS">
      <rect x="2" y="2" width="116" height="40" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ink/30"/>
      {/* Balance icon */}
      <g transform="translate(16,22)" stroke="currentColor" strokeWidth="1.3" className="text-ember/70" fill="none">
        <line x1="0" y1="-8" x2="0" y2="8"/>
        <line x1="-6" y1="-8" x2="6" y2="-8"/>
        <circle cx="-6" cy="-4" r="3"/>
        <circle cx="6" cy="-6" r="3"/>
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
      <rect x="2" y="2" width="126" height="40" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ink/30"/>
      {/* Arch icon */}
      <g transform="translate(16,22)" stroke="currentColor" strokeWidth="1.5" className="text-ember/70" fill="none">
        <path d="M-7 9 L-7 0 Q-7 -9 0 -9 Q7 -9 7 0 L7 9"/>
        <line x1="-10" y1="9" x2="10" y2="9"/>
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
      <rect x="2" y="2" width="96" height="40" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ink/30"/>
      <text x="50" y="19" textAnchor="middle" fontSize="12" fontWeight="700" fontFamily="serif" fill="currentColor" className="text-ink">NIA</text>
      <text x="50" y="31" textAnchor="middle" fontSize="5.5" fontFamily="sans-serif" fill="currentColor" className="text-ink/50">NIGERIAN INSTITUTE</text>
      <text x="50" y="39" textAnchor="middle" fontSize="5.5" fontFamily="sans-serif" fill="currentColor" className="text-ink/50">OF ARCHITECTS</text>
    </svg>
  );
}

const CERT_LOGOS = [
  { id:"cac",   el:<LogoCAC />,   full:"Corporate Affairs Commission" },
  { id:"coren", el:<LogoCOREN />, full:"Council for Regulation of Engineering" },
  { id:"nse",   el:<LogoNSE />,   full:"Nigerian Society of Engineers" },
  { id:"niqs",  el:<LogoNIQS />,  full:"Nigerian Inst. of Quantity Surveyors" },
  { id:"arcon", el:<LogoARCON />, full:"Architects Registration Council" },
  { id:"nia",   el:<LogoNIA />,   full:"Nigerian Institute of Architects" },
];

function CertRow({ direction }: { direction:"left"|"right" }) {
  const items = direction==="right" ? [...CERT_LOGOS].reverse() : CERT_LOGOS;
  const tripled = [...items,...items,...items];
  return (
    <div className="overflow-hidden py-2">
      <style>{`
        @keyframes certLeft  { from{transform:translateX(0)} to{transform:translateX(-33.33%)} }
        @keyframes certRight { from{transform:translateX(-33.33%)} to{transform:translateX(0)} }
        .cert-left  { animation: certLeft  30s linear infinite; }
        .cert-right { animation: certRight 30s linear infinite; }
      `}</style>
      <div className={`flex gap-4 ${direction==="left"?"cert-left":"cert-right"}`} style={{ width:"max-content" }}>
        {tripled.map((c,i) => (
          <div key={`${c.id}-${i}`}
            className="flex-shrink-0 flex items-center justify-center rounded-xl border border-border bg-background px-5 py-3 transition-all hover:border-ember/30 hover:shadow-sm"
            style={{ minWidth:"160px" }}>
            {c.el}
          </div>
        ))}
      </div>
    </div>
  );
}

function Certifications() {
  return (
    <section className="bg-secondary py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <p className="font-corporate text-[10px] tracking-[0.3em] text-ember">CERTIFICATIONS & AFFILIATIONS</p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display font-medium leading-[1.06] text-ink" style={{ fontSize:"clamp(1.6rem,3.5vw,2.75rem)" }}>
              Built on recognised standards<br className="hidden sm:block" /> and professional relationships.
            </h2>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">Regulatory compliance and professional standards guide every project we deliver.</p>
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

/* ═══════════════════════════════════════════════════════
   11. FINAL CTA — dark + photo
   Social icons use SVG logos (LinkedIn, Instagram, Facebook).
═══════════════════════════════════════════════════════ */

function FinalCTA() {
  const socials = [
    {
      name:"LinkedIn", href:"#",
      icon:(
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name:"Instagram", href:"#",
      icon:(
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ),
    },
    {
      name:"Facebook", href:"#",
      icon:(
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <Image src={IMGS.cta} alt="Completed Mukaiburger project" fill className="object-cover opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-br from-ink/95 via-ink/72 to-ink/96" />
      <div className="blueprint-grid absolute inset-0 opacity-18" />

      <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-36">
        <Reveal>
          <p className="font-corporate text-[10px] tracking-[0.3em] text-ember">LET&apos;S BUILD</p>
          <h2 className="mt-5 max-w-3xl font-display font-medium leading-[1.04] text-white" style={{ fontSize:"clamp(2.5rem,6vw,5rem)" }}>
            Have a project in mind?
            <span className="block text-white/30">We&apos;re ready when you are.</span>
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-loose text-white/50 sm:text-base">
            Whether you're at the planning stage or preparing to break ground — we're ready to discuss your requirements and provide practical, honest guidance.
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a href="https://wa.me/2348032447065"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-ember px-7 py-4 text-sm font-medium text-white transition-all hover:bg-ember-deep sm:w-auto">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
            <a href="tel:+2348032447065"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10 sm:w-auto">
              +234 803 244 7065
            </a>
            <Link href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-medium text-ink transition-all hover:bg-concrete sm:w-auto">
              Request a Quote
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-corporate text-[8px] tracking-[0.22em] text-white/20 sm:text-[9px]">
              MUKAIBURGER ENGINEERING NIGERIA LIMITED · RC 1300720 · CAC REGISTERED · ABUJA, NIGERIA
            </p>
            {/* Social icons with SVG logos */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/40 transition-all hover:border-white/40 hover:bg-white/10 hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
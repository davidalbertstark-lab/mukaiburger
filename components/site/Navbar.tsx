"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* ── FLOATING APPLE DOCK ── */}
      <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-4 sm:top-5 sm:px-6 pointer-events-none">
        <div
          className={[
            "pointer-events-auto flex w-full max-w-5xl items-center justify-between transition-all duration-500",
            "rounded-full px-4 py-2 sm:px-5 sm:py-2.5",
            scrolled
              ? "bg-zinc-950/75 backdrop-blur-2xl border border-white/10 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.12)]"
              : "bg-black/60 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.5)]",
          ].join(" ")}
        >
          {/* Brand Logo & Title */}
          <Link href="/" className="group flex items-center gap-2.5 sm:gap-3">
            <div className="relative h-8 w-8 sm:h-9 sm:w-9 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/brand/logo-emblem.png"
                alt="Mukaiburger Logo"
                width={36}
                height={36}
                className="h-full w-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-[15px] font-bold tracking-tight text-white transition-colors group-hover:text-ember sm:text-[17px]">
                MUKAIBURGER
              </span>
              <span className="hidden font-corporate text-[8.5px] tracking-[0.24em] text-zinc-400 sm:block">
                ENGINEERING NIGERIA LIMITED
              </span>
            </div>
          </Link>

          {/* Center: Desktop Nav Pills */}
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    "relative px-3.5 py-1.5 text-[12px] font-medium tracking-wide transition-all duration-200 rounded-full",
                    active
                      ? "text-white bg-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)]"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.06]",
                  ].join(" ")}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute bottom-0 left-1/2 h-[2px] w-3 -translate-x-1/2 rounded-full bg-ember"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Partner / Contact CTA Pill */}
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-black transition-all duration-300 hover:bg-zinc-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95"
            >
              Partner With Us
              <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3">
                <path fillRule="evenodd" d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            </Link>

            {/* Apple Hamburger button (Mobile) */}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/15 md:hidden"
            >
              <span className="sr-only">{open ? "Close" : "Menu"}</span>
              <span aria-hidden className="flex flex-col gap-1">
                <motion.span
                  animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="block h-[1.5px] w-4 bg-white origin-center"
                />
                <motion.span
                  animate={open ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.15 }}
                  className="block h-[1.5px] w-4 bg-white"
                />
                <motion.span
                  animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="block h-[1.5px] w-4 bg-white origin-center"
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ── APPLE FULL-SCREEN MOBILE OVERLAY ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="apple-mobile-menu"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(28px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col bg-black/85 px-6 pt-28 pb-10 text-white md:hidden"
          >
            <div className="flex flex-1 flex-col justify-between max-w-sm mx-auto w-full">
              {/* Navigation Items */}
              <nav className="flex flex-col space-y-2">
                {NAV_LINKS.map((link, idx) => {
                  const active = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + idx * 0.05, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={[
                          "flex items-center justify-between rounded-2xl px-5 py-3.5 text-lg font-medium transition-all",
                          active
                            ? "bg-white/10 text-white font-semibold shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)]"
                            : "text-zinc-400 hover:text-white hover:bg-white/[0.05]",
                        ].join(" ")}
                      >
                        <span>{link.label}</span>
                        {active ? (
                          <span className="h-2 w-2 rounded-full bg-ember" />
                        ) : (
                          <svg viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-40">
                            <path fillRule="evenodd" d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z" clipRule="evenodd" />
                          </svg>
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Mobile Card Bottom Telemetry */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5 backdrop-blur-md space-y-3"
              >
                <div className="flex items-center justify-between text-xs text-zinc-400 border-b border-white/[0.06] pb-2.5">
                  <span className="font-corporate tracking-[0.2em] text-[10px]">CORPORATE STATUS</span>
                  <span className="text-white font-medium">CAC RC 1300720</span>
                </div>
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span className="font-corporate tracking-[0.2em] text-[10px]">DIRECT HOTLINE</span>
                  <a href="tel:+2348032447065" className="text-ember font-medium hover:underline">
                    +234 803 244 7065
                  </a>
                </div>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 block w-full rounded-xl bg-white py-3 text-center text-sm font-semibold text-black transition hover:bg-zinc-200"
                >
                  Request Technical Consultation →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
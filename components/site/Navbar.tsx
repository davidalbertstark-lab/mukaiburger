"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function IconHome() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-4 w-4">
      <path d="M3 9.5L10 3l7 6.5V17a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
      <path d="M7.5 18V13h5v5" />
    </svg>
  );
}
function IconAbout() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-4 w-4">
      <circle cx="10" cy="7" r="3" />
      <path d="M3 17c0-3.314 3.134-6 7-6s7 2.686 7 6" />
    </svg>
  );
}
function IconServices() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-4 w-4">
      <rect x="2" y="2" width="7" height="7" rx="1" />
      <rect x="11" y="2" width="7" height="7" rx="1" />
      <rect x="2" y="11" width="7" height="7" rx="1" />
      <rect x="11" y="11" width="7" height="7" rx="1" />
    </svg>
  );
}
function IconProjects() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-4 w-4">
      <path d="M2 15L7 5l4 6 3-3 4 7H2z" />
    </svg>
  );
}
function IconContact() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-4 w-4">
      <rect x="2" y="4" width="16" height="13" rx="1.5" />
      <path d="M2 7l8 5 8-5" />
    </svg>
  );
}

const NAV_ICONS = [IconHome, IconAbout, IconServices, IconProjects, IconContact];

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
    const onScroll = () => setScrolled(window.scrollY > 24);
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

  const isHome = pathname === "/";
  // Transparent only on home, not scrolled, and sidebar closed
  const transparent = isHome && !scrolled && !open;

  return (
    <>
      {/* ── TOP BAR ── */}
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          transparent
            ? "bg-transparent"
            : "bg-white/85 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.06)]",
        ].join(" ")}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

          {/* Left: Hamburger — ember square, morphs to X */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-ember transition-colors hover:bg-ember-deep"
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <span aria-hidden className="flex flex-col gap-[5px]">
              <motion.span
                animate={open ? { rotate: 45, y: 7, width: "20px" } : { rotate: 0, y: 0, width: "20px" }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block h-[1.5px] bg-white origin-center"
                style={{ width: 20 }}
              />
              <motion.span
                animate={open ? { opacity: 0, x: -6 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="block h-[1.5px] bg-white"
                style={{ width: 14 }}
              />
              <motion.span
                animate={open ? { rotate: -45, y: -7, width: "20px" } : { rotate: 0, y: 0, width: "20px" }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block h-[1.5px] bg-white origin-center"
                style={{ width: 20 }}
              />
            </span>
          </button>

          {/* Center: Logo + animated brand name */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative h-10 w-10 flex-shrink-0">
              <Image
                src="/brand/logo-emblem.png"
                alt="Mukaiburger Logo"
                width={40}
                height={40}
                className="h-full w-full object-contain"
                priority
              />
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ x: -44, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="pl-3 flex flex-col leading-none"
              >
                <span
                  className={[
                    "transition-colors duration-500 font-display text-[22px] font-bold tracking-[-0.01em]",
                    transparent
                      ? "text-white [text-shadow:2px_2px_0px_rgba(0,0,0,0.3),0_4px_20px_rgba(0,0,0,0.5)]"
                      : "text-ink [text-shadow:1px_1px_0px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08)]",
                  ].join(" ")}
                >
                  MUKAIBURGER
                </span>
                <span
                  className={[
                    "font-corporate text-[9px] tracking-[0.22em] transition-colors duration-500",
                    transparent ? "text-white/65" : "text-muted-foreground",
                  ].join(" ")}
                >
                  ENGINEERING NIGERIA LIMITED
                </span>
              </motion.div>
            </div>
          </Link>

          {/* Right: quiet links (desktop only) */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/projects"
              className={[
                "font-corporate text-[11px] font-medium tracking-[0.22em] transition-colors",
                transparent ? "text-white/85 hover:text-white" : "text-ink/70 hover:text-ember",
              ].join(" ")}
            >
              PROJECTS
            </Link>
            <Link
              href="/services"
              className={[
                "font-corporate text-[11px] font-medium tracking-[0.22em] transition-colors",
                transparent ? "text-white/85 hover:text-white" : "text-ink/70 hover:text-ember",
              ].join(" ")}
            >
              SECTORS
            </Link>
          </nav>

          {/* Mobile right placeholder for symmetry */}
          <div className="h-11 w-11 md:hidden" aria-hidden />
        </div>
      </header>

      {/* ── SIDEBAR (slides in from left when hamburger pressed) ── */}

      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/50"
            style={{ top: "80px" }}
          />
        )}
      </AnimatePresence>

      {/* Sidebar panel */}
      <motion.aside
        initial={false}
        className={[
          "fixed bottom-0 left-0 z-40 w-[280px] overflow-y-auto bg-ink",
          "border-r border-white/10",
          "transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
        style={{ top: "80px" }}
      >
        <nav className="flex flex-col">
          {NAV_LINKS.map((link, i) => {
            const active = pathname === link.href;
            const Icon = NAV_ICONS[i];
            return (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "group relative flex items-center gap-4 px-5 py-4 transition-colors",
                  "border-b border-white/[0.07]",
                  active
                    ? "bg-white/[0.08] text-white"
                    : "text-white/70 hover:bg-white/[0.05] hover:text-white",
                ].join(" ")}
              >
                {/* Left ember accent */}
                <span
                  className={[
                    "absolute left-0 top-1/2 h-6 w-[3px] -translate-y-1/2 rounded-r-full transition-all",
                    active ? "bg-ember opacity-100" : "bg-ember opacity-0 group-hover:opacity-40",
                  ].join(" ")}
                />
                {/* Icon */}
                <span className={active ? "text-ember" : "text-white/40 group-hover:text-white/70"}>
                  <Icon />
                </span>
                {/* Label */}
                <span className="flex-1 font-display text-[15px] font-medium tracking-wide">
                  {link.label}
                </span>
                {/* Chevron */}
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className={[
                    "h-3.5 w-3.5 transition-transform",
                    active ? "translate-x-0.5 text-ember/70" : "text-white/20 group-hover:text-white/40",
                  ].join(" ")}
                >
                  <path d="M6 4l4 4-4 4" />
                </svg>
              </Link>
            );
          })}
        </nav>

        {/* Bottom contact info */}
        <div className="mt-auto border-t border-white/10 px-6 py-8 text-xs text-white/45 space-y-4">
          <div>
            <p className="font-corporate text-[9px] tracking-[0.3em] text-white/30 mb-1">OFFICE</p>
            <p>Abuja, Nigeria</p>
          </div>
          <div>
            <p className="font-corporate text-[9px] tracking-[0.3em] text-white/30 mb-1">ENQUIRIES</p>
            <p>mukaiburger@gmail.com</p>
          </div>
          <div>
            <p className="font-corporate text-[9px] tracking-[0.3em] text-white/30 mb-1">PHONE</p>
            <p>+234 (0) 803 244 7065</p>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
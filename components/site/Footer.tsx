import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.08] bg-black text-white overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand Col */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-9 w-9 flex-shrink-0 transition-transform group-hover:scale-105">
                <Image
                  src="/brand/logo-emblem.png"
                  alt="Mukaiburger Logo"
                  width={36}
                  height={36}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="leading-none">
                <p className="font-display text-base font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  MUKAIBURGER
                </p>
                <p className="mt-1 font-corporate text-[9px] tracking-[0.24em] text-zinc-400">
                  ENGINEERING NIGERIA LIMITED
                </p>
              </div>
            </Link>

            <p className="mt-4 font-corporate text-[10.5px] italic tracking-wide text-ember">
              &quot;...Sound Quality, Sound Engineering&quot;
            </p>
            <p className="mt-4 max-w-md text-xs sm:text-sm leading-relaxed text-zinc-400">
              Indigenous civil engineering, heavy infrastructure, deep foundation piling, and ultra-luxury high-rise construction firm. CAC RC 1300720 (Incorporated 2015 · COREN Registered).
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2">
            <p className="font-corporate text-[9px] font-semibold tracking-[0.25em] text-zinc-500 uppercase">
              EXPLORE
            </p>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Projects Archive", href: "/projects" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Disciplines */}
          <div className="md:col-span-2">
            <p className="font-corporate text-[9px] font-semibold tracking-[0.25em] text-zinc-500 uppercase">
              DISCIPLINES
            </p>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-zinc-400">
              <li>Civil &amp; Structural</li>
              <li>Highways &amp; Bridges</li>
              <li>Subterranean Piling</li>
              <li>Turnkey Direction</li>
            </ul>
          </div>

          {/* Contact & Hotlines */}
          <div className="md:col-span-3">
            <p className="font-corporate text-[9px] font-semibold tracking-[0.25em] text-zinc-500 uppercase">
              HEADQUARTERS
            </p>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-zinc-400">
              <li className="text-white font-medium">Abuja &amp; Lagos, Nigeria</li>
              <li>
                <a href="mailto:mukaiburger@gmail.com" className="hover:text-ember transition-colors">
                  mukaiburger@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+2348032447065" className="hover:text-ember transition-colors">
                  +234 803 244 7065
                </a>
              </li>
              <li className="pt-1">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-corporate text-[9px] text-zinc-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  RC 1300720 ACTIVE
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/[0.08] pt-8 text-xs text-zinc-500 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} Mukaiburger Engineering Nigeria Limited. All rights reserved.
          </p>
          <p className="font-corporate text-[9px] tracking-[0.22em] text-zinc-400">
            ENGINEERED WITH UNCOMPROMISING RIGOR
          </p>
        </div>
      </div>
    </footer>
  );
}

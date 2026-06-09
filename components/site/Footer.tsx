import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-ember font-corporate text-sm font-bold">
                M
              </div>
              <div className="leading-none">
                <p className="font-corporate text-sm font-semibold">
                  MUKAIBURGER
                </p>
                <p className="mt-1 font-corporate text-[10px] tracking-[0.22em] text-white/60">
                  ENGINEERING NIGERIA LIMITED
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
              An engineering and construction company delivering buildings,
              civil works and infrastructure with precision and accountability.
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="font-corporate text-[10px] tracking-[0.3em] text-white/40">
              EXPLORE
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {["about", "services", "projects", "contact"].map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/${slug}`}
                    className="capitalize text-white/80 hover:text-ember"
                  >
                    {slug.charAt(0).toUpperCase() + slug.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="font-corporate text-[10px] tracking-[0.3em] text-white/40">
              SECTORS
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              {["Building", "Civil Engineering", "Renovation", "Project Management"].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-corporate text-[10px] tracking-[0.3em] text-white/40">
              CONTACT
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>Abuja, Nigeria</li>
              <li>mukaiburger@gmail.com</li>
              <li>+234 (0) 803 244 7065</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} Mukaiburger Engineering Nigeria
            Limited. All rights reserved.
          </p>
          <p className="font-corporate tracking-[0.22em]">BUILT ON PRECISION</p>
        </div>
      </div>
    </footer>
  );
}

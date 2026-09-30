"use client";

import { useState } from "react";

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block font-corporate text-[9px] tracking-[0.25em] text-zinc-400 uppercase font-semibold">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2.5 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder-zinc-500 outline-none transition-all duration-300 focus:border-ember focus:bg-white/[0.07] focus:ring-1 focus:ring-ember/30"
      />
    </div>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="relative space-y-6 rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.05] via-zinc-950 to-black p-8 sm:p-10 shadow-2xl backdrop-blur-xl"
    >
      <div className="flex items-center justify-between pb-2 border-b border-white/10">
        <div>
          <span className="font-corporate text-[9px] tracking-[0.25em] text-ember uppercase font-semibold">
            TECHNICAL INTAKE
          </span>
          <h3 className="font-display text-xl sm:text-2xl font-medium text-white tracking-tight">
            Direct Project Enquiry
          </h3>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-corporate text-[8px] tracking-wider text-zinc-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          ACTIVE DISPATCH
        </span>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full Name" name="name" required placeholder="Engr. / Architect / Client" />
        <Field label="Company / Entity" name="company" placeholder="e.g. Property Group, Agency" />
        <Field label="Email Address" name="email" type="email" required placeholder="name@company.com" />
        <Field label="Phone / WhatsApp" name="phone" placeholder="+234 ..." />
      </div>

      <Field label="Project Location & State" name="location" placeholder="e.g. Banana Island, Ikoyi / Lekki / Abuja / Calabar" />

      <div>
        <label className="block font-corporate text-[9px] tracking-[0.25em] text-zinc-400 uppercase font-semibold">
          PROJECT SCOPE &amp; SITE SPECIFICATIONS
        </label>
        <textarea
          name="brief"
          rows={4}
          required
          placeholder="Describe structural requirements, site conditions, geotechnical data, or target mobilization schedule..."
          className="mt-2.5 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder-zinc-500 outline-none transition-all duration-300 focus:border-ember focus:bg-white/[0.07] focus:ring-1 focus:ring-ember/30 resize-none"
        />
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="submit"
          disabled={sent}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-ember px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-ember-deep shadow-lg shadow-ember/25 disabled:opacity-80"
        >
          {sent ? (
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-emerald-300">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Enquiry Dispatched Directly
            </span>
          ) : (
            <>
              Submit Technical Brief <span aria-hidden>→</span>
            </>
          )}
        </button>
        <span className="text-[11px] text-zinc-400">
          Response within 24 working hours
        </span>
      </div>
    </form>
  );
}

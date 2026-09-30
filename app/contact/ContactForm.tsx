"use client";

import { useState } from "react";

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block font-corporate text-[10px] tracking-[0.3em] text-ink/60">
        {label.toUpperCase()}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-3 w-full rounded-xl border border-border bg-background px-4 py-3 text-base text-ink outline-none transition focus:border-ember"
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
      className="space-y-6 rounded-3xl border border-border bg-secondary p-8 md:p-10"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Company" name="company" />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" />
      </div>
      <Field label="Project location" name="location" />
      <div>
        <label className="block font-corporate text-[10px] tracking-[0.3em] text-ink/60">
          PROJECT BRIEF
        </label>
        <textarea
          name="brief"
          rows={5}
          required
          className="mt-3 w-full rounded-xl border border-border bg-background px-4 py-3 text-base text-ink outline-none transition focus:border-ember"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-sm font-medium text-white transition hover:bg-ember"
      >
        {sent ? "Message received — we'll be in touch" : "Send enquiry"}
        {!sent && <span aria-hidden>→</span>}
      </button>
    </form>
  );
}

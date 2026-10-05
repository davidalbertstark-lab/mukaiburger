"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FormDataState {
  name: string;
  company: string;
  email: string;
  phone: string;
  location: string;
  brief: string;
}

const INITIAL_FORM: FormDataState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  location: "",
  brief: "",
};

function formatWhatsAppMessage(data: FormDataState): string {
  const phone = "2348032447065";
  const lines = [
    "🏗️ *NEW PROJECT ENQUIRY — MUKAIBURGER ENGINEERING*",
    "",
    `*Client / Principal:* ${data.name || "Prospective Client"}`,
    data.company ? `*Organisation:* ${data.company}` : null,
    data.email ? `*Email:* ${data.email}` : null,
    data.phone ? `*Phone:* ${data.phone}` : null,
    data.location ? `*Site Location:* ${data.location}` : null,
    "",
    "*Project Scope & Brief:*",
    data.brief || "Requesting technical consultation and site evaluation.",
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/${phone}?text=${encodeURIComponent(lines)}`;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormDataState>(INITIAL_FORM);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setStatus("success");
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(
        err.message || "Unable to send message right now. Please message directly on WhatsApp."
      );
    }
  };

  if (status === "success") {
    const waUrl = formatWhatsAppMessage(formData);

    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border border-border bg-secondary p-8 sm:p-10 shadow-sm"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 mb-6">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-7 w-7"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <p className="font-corporate text-[10px] tracking-[0.3em] text-ember uppercase font-semibold">
          ENQUIRY DISPATCHED
        </p>
        <h3 className="mt-2 font-display text-2xl font-medium text-ink sm:text-3xl">
          Thank you, {formData.name || "Sir / Madam"}.
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Your project brief has been received and routed directly to our principal engineering desk at{" "}
          <strong className="text-ink">mukaiburger.official@gmail.com</strong>. We review project parameters and respond promptly with next steps.
        </p>

        {/* WhatsApp Fast-Track Banner */}
        <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <p className="font-corporate text-[10px] tracking-[0.25em] text-emerald-700 font-semibold uppercase">
              NEED IMMEDIATE SITE DISCUSSION?
            </p>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-ink/75 sm:text-sm">
            You can fast-track this enquiry directly to <strong>Engr. Azeez Mukailah Matthew Adewale</strong> on WhatsApp with your project brief already pre-filled.
          </p>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#1EBE5D] shadow-sm"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.062-1.11-.072-.25-.08-.57-.187-.984-.367-1.748-.758-2.879-2.533-2.966-2.65-.088-.116-.713-.949-.713-1.809 0-.86.449-1.284.609-1.458.16-.174.348-.217.464-.217.116 0 .232.001.333.006.107.005.25-.041.391.298.145.348.493 1.202.536 1.29.044.087.073.189.015.305-.058.116-.087.188-.174.29-.087.102-.183.228-.261.306-.087.087-.179.182-.077.357.102.174.453.748.972 1.21.669.596 1.233.78 1.408.867.174.087.276.073.378-.044.102-.116.435-.508.551-.682.116-.174.232-.145.391-.087.16.058 1.015.479 1.189.566.174.087.29.13.333.203.044.073.044.421-.1.826z" />
            </svg>
            Continue to WhatsApp (+234 803 244 7065) →
          </a>
        </div>

        <button
          type="button"
          onClick={() => {
            setFormData(INITIAL_FORM);
            setStatus("idle");
          }}
          className="mt-6 text-xs font-corporate tracking-wider text-ink/50 hover:text-ember underline"
        >
          ← Submit another project enquiry
        </button>
      </motion.div>
    );
  }

  const liveWhatsAppUrl = formatWhatsAppMessage(formData);

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-3xl border border-border bg-secondary p-8 md:p-10 shadow-sm"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block font-corporate text-[10px] tracking-[0.3em] text-ink/60">
            FULL NAME *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Chief Dr. Olawale Adeyemi"
            className="mt-2.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-[16px] sm:text-sm text-ink outline-none transition focus:border-ember"
          />
        </div>

        <div>
          <label className="block font-corporate text-[10px] tracking-[0.3em] text-ink/60">
            ORGANISATION / COMPANY
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. Oakwood Capital Holdings"
            className="mt-2.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-[16px] sm:text-sm text-ink outline-none transition focus:border-ember"
          />
        </div>

        <div>
          <label className="block font-corporate text-[10px] tracking-[0.3em] text-ink/60">
            EMAIL ADDRESS *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. o.adeyemi@oakwood.ng"
            className="mt-2.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-[16px] sm:text-sm text-ink outline-none transition focus:border-ember"
          />
        </div>

        <div>
          <label className="block font-corporate text-[10px] tracking-[0.3em] text-ink/60">
            PHONE NUMBER
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +234 803 000 0000"
            className="mt-2.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-[16px] sm:text-sm text-ink outline-none transition focus:border-ember"
          />
        </div>
      </div>

      <div>
        <label className="block font-corporate text-[10px] tracking-[0.3em] text-ink/60">
          PROJECT SITE LOCATION
        </label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="e.g. Banana Island, Ikoyi / Lekki Phase 1 / Ibadan / Akure"
          className="mt-2.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-[16px] sm:text-sm text-ink outline-none transition focus:border-ember"
        />
      </div>

      <div>
        <label className="block font-corporate text-[10px] tracking-[0.3em] text-ink/60">
          PROJECT BRIEF & SPECIFICATIONS *
        </label>
        <textarea
          name="brief"
          rows={5}
          required
          value={formData.brief}
          onChange={handleChange}
          placeholder="Outline your project scope: proposed structure, number of floors, geotechnical conditions, timeline, or engineering supervision requirements..."
          className="mt-2.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-[16px] sm:text-sm text-ink outline-none transition focus:border-ember"
        />
      </div>

      {status === "error" && (
        <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-xs text-rose-700">
          {errorMessage}
        </div>
      )}

      {/* Dual Submission Bar */}
      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-3 rounded-full bg-ink px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-ember disabled:opacity-60"
        >
          {status === "submitting" ? (
            <>
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Dispatching Enquiry...
            </>
          ) : (
            <>
              Send Enquiry via Email
              <span aria-hidden>→</span>
            </>
          )}
        </button>

        <a
          href={liveWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#128C7E] transition hover:bg-[#25D366] hover:text-white"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.062-1.11-.072-.25-.08-.57-.187-.984-.367-1.748-.758-2.879-2.533-2.966-2.65-.088-.116-.713-.949-.713-1.809 0-.86.449-1.284.609-1.458.16-.174.348-.217.464-.217.116 0 .232.001.333.006.107.005.25-.041.391.298.145.348.493 1.202.536 1.29.044.087.073.189.015.305-.058.116-.087.188-.174.29-.087.102-.183.228-.261.306-.087.087-.179.182-.077.357.102.174.453.748.972 1.21.669.596 1.233.78 1.408.867.174.087.276.073.378-.044.102-.116.435-.508.551-.682.116-.174.232-.145.391-.087.16.058 1.015.479 1.189.566.174.087.29.13.333.203.044.073.044.421-.1.826z" />
          </svg>
          Fast-Track on WhatsApp
        </a>
      </div>

      <p className="text-[11px] text-muted-foreground pt-1">
        Direct inbox:{" "}
        <a href="mailto:mukaiburger.official@gmail.com" className="text-ember hover:underline">
          mukaiburger.official@gmail.com
        </a>{" "}
        · Mobile / WhatsApp:{" "}
        <a href="https://wa.me/2348032447065" className="text-ember hover:underline">
          +234 (0) 803 244 7065
        </a>
      </p>
    </form>
  );
}

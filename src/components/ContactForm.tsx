"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setStatus("idle");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      setPending(false);
    }
  }

  return (
    <section className="rounded-3xl border border-[var(--accent)]/15 bg-white p-8 shadow-lg shadow-[var(--accent-soft)]">
      <h2 className="font-display text-2xl font-bold">Enquiry form</h2>
      <p className="mt-2 text-sm text-[var(--ink)]/70">We usually reply within 1-2 working days.</p>
      <form className="mt-6 space-y-4" onSubmit={onSubmit}>
        <label className="block text-sm font-semibold text-[var(--ink)]">
          Your name
          <input
            name="name"
            required
            className="mt-1 w-full rounded-xl border border-[var(--accent)]/20 bg-white px-4 py-2.5 text-sm outline-none ring-[var(--accent)]/30 transition focus:ring-4"
          />
        </label>
        <label className="block text-sm font-semibold text-[var(--ink)]">
          Email address
          <input
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-xl border border-[var(--accent)]/20 bg-white px-4 py-2.5 text-sm outline-none ring-[var(--accent)]/30 transition focus:ring-4"
          />
        </label>
        <label className="block text-sm font-semibold text-[var(--ink)]">
          Phone number (optional)
          <input
            name="phone"
            type="tel"
            className="mt-1 w-full rounded-xl border border-[var(--accent)]/20 bg-white px-4 py-2.5 text-sm outline-none ring-[var(--accent)]/30 transition focus:ring-4"
          />
        </label>
        <label className="block text-sm font-semibold text-[var(--ink)]">
          Tell us about your cat
          <textarea
            name="message"
            required
            rows={5}
            className="mt-1 w-full resize-y rounded-xl border border-[var(--accent)]/20 bg-white px-4 py-2.5 text-sm outline-none ring-[var(--accent)]/30 transition focus:ring-4"
          />
        </label>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold text-white transition hover:bg-[var(--accent-hover)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {pending ? "Sending..." : "Send enquiry"}
        </button>
      </form>
      {status === "success" ? (
        <p className="mt-4 text-sm font-semibold text-emerald-700">Thanks. Your enquiry has been sent.</p>
      ) : null}
      {status === "error" ? (
        <p className="mt-4 text-sm font-semibold text-rose-700">Something went wrong. Please try again.</p>
      ) : null}
    </section>
  );
}

import type { Metadata } from "next";
import Image from "next/image";

import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = { title: "Enquire" };

export default function ContactPage() {
  return (
    <main className="px-5 py-10 lg:px-8">
      <section className="mx-auto w-full max-w-7xl overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-[var(--accent-soft)]">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[280px] md:min-h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?auto=format&fit=crop&w=2200&q=90"
              alt="Cat wrapped in a towel after grooming"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
          </div>
          <div className="p-8 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">Enquiry page</p>
            <h1 className="font-display mt-3 text-4xl font-bold leading-tight">Tell us about your cat and coat needs</h1>
            <p className="mt-4 text-sm leading-relaxed text-[var(--ink)]/75">
              Share your cat&apos;s age, temperament, coat condition, and any health notes. We will suggest the safest first
              appointment format and the right timing for future maintenance.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-[var(--ink)]/80">
              <li>• New kittens and first-time salon introductions welcome</li>
              <li>• Senior and nervous cats can be booked with extra settling time</li>
              <li>• Photos of matting help us advise before your visit</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 grid w-full max-w-7xl gap-8 lg:grid-cols-[1.1fr_1fr]">
        <article className="rounded-3xl border border-[var(--accent)]/15 bg-white/75 p-8">
          <h2 className="font-display text-2xl font-bold">Before you enquire</h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--ink)]/75">
            To make your first appointment smoother, include anything that might affect handling: previous grooming
            history, mobility limitations, vet instructions, and skin sensitivity.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-[var(--accent-soft)] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">Phone</p>
              <p className="mt-2 text-sm font-semibold text-[var(--ink)]">07534 441810</p>
            </div>
            <div className="rounded-2xl bg-[var(--accent-soft)] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">Email</p>
              <a
                className="mt-2 block text-sm font-semibold text-[var(--ink)] underline"
                href="mailto:info@awesomepawscatgrooming.co.uk"
              >
                info@awesomepawscatgrooming.co.uk
              </a>
            </div>
          </div>
        </article>
        <ContactForm />
      </section>
    </main>
  );
}

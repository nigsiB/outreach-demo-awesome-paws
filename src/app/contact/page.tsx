import type { Metadata } from "next";

export const metadata: Metadata = { title: "Enquire" };

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-lg px-4 py-12">
      <h1 className="font-display text-3xl font-bold">Enquire</h1>
      <p className="mt-2 text-sm text-[var(--ink)]/70">
        Email from public listing:{" "}
        <a className="font-semibold text-[var(--paw)] underline" href="mailto:info@awesomepawscatgrooming.co.uk">
          info@awesomepawscatgrooming.co.uk
        </a>
      </p>
      <p className="mt-4 text-sm text-[var(--ink)]/70">
        This demo page is intentionally lightweight — the real business uses enquiry flows on their existing site.
      </p>
    </main>
  );
}

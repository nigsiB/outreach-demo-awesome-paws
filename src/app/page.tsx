import Image from "next/image";
import Link from "next/link";

import { GroomingServices } from "@/components/GroomingServices";

export default function Page() {
  return (
    <main className="px-4 pb-20">
      <section className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-[var(--accent-soft)]">
        <div className="grid gap-0 md:grid-cols-2">
          <div className="relative aspect-square md:aspect-auto md:min-h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=80"
              alt="Cat portrait"
              fill
              className="object-cover"
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">Smithbrook Kilns · Cranleigh</p>
            <h1 className="font-display mt-3 text-4xl font-bold leading-tight md:text-5xl">
              A salon built only for cats.
            </h1>
            <p className="mt-4 text-[var(--ink)]/75">
              Demo site informed by the live business positioning: calm, cat-exclusive grooming with CFMG-certified standards.
              Your cat deserves coat care without the stress of a mixed-species salon.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-[var(--ink)]/80">
              <li>✓ Matting &amp; coat recovery</li>
              <li>✓ Senior cats &amp; health-related grooming</li>
              <li>✓ Maintenance schedules &amp; home tool advice</li>
            </ul>
            <Link
              href="/prices"
              className="mt-8 inline-flex w-fit rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              View services &amp; guide prices
            </Link>
          </div>
        </div>
      </section>

      <GroomingServices />

      <section className="mx-auto mt-16 max-w-4xl rounded-3xl border border-[var(--accent)]/15 bg-white/70 p-8">
        <h2 className="font-display text-2xl font-bold">Why cat-only matters</h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--ink)]/75">
          Techniques, equipment, handling, and even salon scent cues differ from dog grooming. This layout uses a soft card stack
          — different visual language from a trades site or restaurant menu.
        </p>
      </section>
    </main>
  );
}

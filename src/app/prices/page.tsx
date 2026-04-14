import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Services & prices" };

const rows = [
  { service: "Wellness groom", note: "Bath, dry, brush-out, nails, ears", from: "From £—" },
  { service: "Full coat work", note: "Dematting / coat reset where safe", from: "From £—" },
  { service: "Maintenance plan", note: "Personalised revisit rhythm", from: "Ask" },
];

export default function PricesPage() {
  return (
    <main className="px-5 py-10 lg:px-8">
      <section className="mx-auto w-full max-w-7xl overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-[var(--accent-soft)]">
        <div className="relative h-[260px] w-full md:h-[340px]">
          <Image
            src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=2200&q=90"
            alt="Cat being groomed with a brush"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h1 className="font-display text-3xl font-bold text-white md:text-4xl">Services &amp; prices</h1>
            <p className="mt-2 max-w-xl text-sm text-white/85">Guide pricing and coat care options for every stage of cat life.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 w-full max-w-7xl">
        <p className="text-sm text-[var(--ink)]/70">
          Illustrative pricing table — replace with live figures from{" "}
          <a href="https://awesomepawscatgrooming.co.uk/services-prices/" className="underline">
            official price list
          </a>
          . Phone from public site: <strong>07534 441810</strong>.
        </p>
      </section>

      <section className="mx-auto mt-8 w-full max-w-7xl overflow-hidden rounded-2xl border border-[var(--accent)]/15 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-[var(--accent-soft)] text-xs uppercase tracking-wide text-[var(--ink)]/60">
            <tr>
              <th className="px-4 py-3">Service</th>
              <th className="px-4 py-3">Guide</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.service} className="border-t border-[var(--accent)]/10">
                <td className="px-4 py-4">
                  <p className="font-semibold">{r.service}</p>
                  <p className="text-xs text-[var(--ink)]/60">{r.note}</p>
                </td>
                <td className="px-4 py-4 font-display text-lg font-bold text-[var(--accent)]">{r.from}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}

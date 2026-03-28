import type { Metadata } from "next";

export const metadata: Metadata = { title: "Services & prices" };

const rows = [
  { service: "Wellness groom", note: "Bath, dry, brush-out, nails, ears", from: "From £—" },
  { service: "Full coat work", note: "Dematting / coat reset where safe", from: "From £—" },
  { service: "Maintenance plan", note: "Personalised revisit rhythm", from: "Ask" },
];

export default function PricesPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="font-display text-3xl font-bold">Services &amp; prices</h1>
      <p className="mt-2 text-sm text-[var(--ink)]/70">
        Illustrative pricing table — replace with live figures from{" "}
        <a href="https://awesomepawscatgrooming.co.uk/services-prices/" className="underline">
          official price list
        </a>
        . Phone from public site: <strong>07534 441810</strong>.
      </p>
      <div className="mt-8 overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-rose-50 text-xs uppercase tracking-wide text-[var(--ink)]/60">
            <tr>
              <th className="px-4 py-3">Service</th>
              <th className="px-4 py-3">Guide</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.service} className="border-t border-rose-100">
                <td className="px-4 py-4">
                  <p className="font-semibold">{r.service}</p>
                  <p className="text-xs text-[var(--ink)]/60">{r.note}</p>
                </td>
                <td className="px-4 py-4 font-display text-lg font-bold text-[var(--paw)]">{r.from}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

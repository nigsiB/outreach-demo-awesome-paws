import type { Metadata } from "next";
import Link from "next/link";
import { Nunito, Quicksand } from "next/font/google";

import "./globals.css";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const quicksand = Quicksand({ subsets: ["latin"], variable: "--font-quicksand" });

export const metadata: Metadata = {
  title: {
    default: "Awesome Paws | Cat grooming Cranleigh",
    template: "%s | Awesome Paws",
  },
  description:
    "Exclusive cat-only grooming salon at Smithbrook Kilns, Cranleigh. Calm, qualified feline grooming — demo concept.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${nunito.variable} ${quicksand.variable}`}>
      <body className="antialiased">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 px-4 py-5">
          <Link href="/" className="font-display text-xl font-bold tracking-tight text-[var(--accent)]">
            Awesome Paws
          </Link>
          <nav className="flex gap-4 text-sm font-semibold text-[var(--ink)]/80">
            <Link href="/prices" className="rounded-full px-3 py-1 hover:bg-white/80 hover:text-[var(--accent)]">
              Services &amp; prices
            </Link>
            <Link href="/contact" className="rounded-full px-3 py-1 hover:bg-white/80 hover:text-[var(--accent)]">
              Enquire
            </Link>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}

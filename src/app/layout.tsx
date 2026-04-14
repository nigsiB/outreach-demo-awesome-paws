import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Nunito, Quicksand } from "next/font/google";
import { Facebook, Instagram, MessageCircleHeart } from "lucide-react";

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
        <header className="border-b border-[var(--accent)]/10 bg-white/75 backdrop-blur">
          <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-5 lg:px-8">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/awesome-paws-logo.png"
                alt="Awesome Paws"
                width={150}
                height={48}
                className="h-auto w-[150px] md:w-[170px]"
                priority
              />
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
        </header>
        {children}
        <div className="fixed inset-x-0 bottom-3 z-50 px-4 md:hidden">
          <Link
            href="/contact"
            className="mx-auto flex w-full max-w-sm items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[var(--accent-soft)] transition hover:bg-[var(--accent-hover)]"
          >
            <MessageCircleHeart className="h-4 w-4" aria-hidden />
            Quick enquiry
          </Link>
        </div>
        <footer className="mt-20 border-t border-[var(--accent)]/15 bg-[var(--ink)] text-white">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 lg:grid-cols-3 lg:px-8">
            <div>
              <Image src="/awesome-paws-logo.png" alt="Awesome Paws" width={170} height={55} className="h-auto w-[170px]" />
              <p className="mt-3 max-w-sm text-sm text-white/75">
                Calm, cat-only grooming in Cranleigh. A gentle salon setup for feline comfort, confidence, and healthy coats.
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-rose-200">Visit &amp; contact</p>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                <li>Smithbrook Kilns, Cranleigh</li>
                <li>
                  <a href="tel:07534441810" className="hover:text-rose-200">
                    07534 441810
                  </a>
                </li>
                <li>
                  <a href="mailto:info@awesomepawscatgrooming.co.uk" className="hover:text-rose-200">
                    info@awesomepawscatgrooming.co.uk
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-rose-200">Quick links</p>
              <div className="mt-3 flex flex-wrap gap-3 text-sm font-semibold">
                <Link href="/" className="rounded-full border border-white/30 px-4 py-1.5 hover:bg-white/10">
                  Home
                </Link>
                <Link href="/prices" className="rounded-full border border-white/30 px-4 py-1.5 hover:bg-white/10">
                  Services &amp; prices
                </Link>
                <Link href="/contact" className="rounded-full border border-white/30 px-4 py-1.5 hover:bg-white/10">
                  Enquire
                </Link>
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a
                  href="https://www.instagram.com/awesomepawscatgrooming/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border border-white/30 p-2 hover:bg-white/10"
                  aria-label="Awesome Paws Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://www.facebook.com/AwesomePawsCatGroomingUK/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border border-white/30 p-2 hover:bg-white/10"
                  aria-label="Awesome Paws Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-4 text-xs text-white/60">Purr-fect grooms, calm cats, happy humans.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

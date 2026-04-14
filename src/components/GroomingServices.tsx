import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { CalendarClock, Heart, Scissors, Sparkles, Stethoscope, Wind } from "lucide-react";

type ServiceItem = {
  title: string;
  description: string;
  Icon: LucideIcon;
  ring: string;
  iconClass: string;
  imageSrc: string;
  imageAlt: string;
};

const items: ServiceItem[] = [
  {
    title: "Wellness bath & groom",
    description:
      "Hydraulic bath, fluff-dry, brush-out, sanitary trim, nails and ears — the full reset for a soft, fresh coat without stripping natural oils.",
    Icon: Sparkles,
    ring: "bg-rose-100",
    iconClass: "text-rose-600",
    imageSrc:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1800&q=90",
    imageAlt: "Relaxed cat portrait after grooming",
  },
  {
    title: "Brush-out & dematting",
    description:
      "Patient line-brushing and safe dematting where the skin allows — we stop before stress wins, and teach you home tools that match your cat’s coat.",
    Icon: Wind,
    ring: "bg-sky-100",
    iconClass: "text-sky-600",
    imageSrc:
      "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=1800&q=90",
    imageAlt: "Soft cat resting indoors",
  },
  {
    title: "Clip & style",
    description:
      "Lion cuts, breed-appropriate trims, and tidy-ups when the coat demands clippers — always with blade hygiene and temperature checks front of mind.",
    Icon: Scissors,
    ring: "bg-violet-100",
    iconClass: "text-violet-600",
    imageSrc:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1800&q=90",
    imageAlt: "Cat looking up",
  },
  {
    title: "Kitten introductions",
    description:
      "Short, gentle first sessions so young cats learn the salon isn’t scary — handling, sounds, and drying introduced at their pace.",
    Icon: Heart,
    ring: "bg-amber-100",
    iconClass: "text-amber-700",
    imageSrc:
      "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?auto=format&fit=crop&w=1800&q=90",
    imageAlt: "Playful kitten",
  },
  {
    title: "Seniors & special needs",
    description:
      "Extra time for arthritis, anxiety, or post-vet recovery — we adapt tables, holds, and breaks so dignity and safety stay non-negotiable.",
    Icon: Stethoscope,
    ring: "bg-emerald-100",
    iconClass: "text-emerald-700",
    imageSrc:
      "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=1800&q=90",
    imageAlt: "Senior cat resting",
  },
  {
    title: "Maintenance plans",
    description:
      "Revisit rhythm tailored to coat density and season — fewer emergency shaves, more predictable coats, and honest advice for brushing between visits.",
    Icon: CalendarClock,
    ring: "bg-fuchsia-100",
    iconClass: "text-fuchsia-700",
    imageSrc:
      "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?auto=format&fit=crop&w=1800&q=90",
    imageAlt: "Cat relaxing at home on soft furnishings",
  },
];

export function GroomingServices() {
  return (
    <section className="mx-auto mt-16 w-full max-w-7xl px-1">
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent)]">What we do</p>
        <h2 className="font-display mt-2 text-3xl font-bold text-[var(--ink)] md:text-4xl">Grooming services</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[var(--ink)]/70">
          Cat-only techniques, tools, and timing — every service is built around feline behaviour, not dog-salon defaults.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {items.map(({ title, description, Icon, ring, iconClass, imageSrc, imageAlt }) => (
          <article
            key={title}
            className="overflow-hidden rounded-2xl border border-[var(--accent)]/15 bg-white shadow-md shadow-[var(--accent-soft)]">
            <div className="relative aspect-[16/10] w-full">
              <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="(min-width: 640px) 45vw, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <span className={`inline-flex rounded-full ${ring} p-2.5`}>
                  <Icon className={`h-6 w-6 ${iconClass}`} strokeWidth={1.75} aria-hidden />
                </span>
                <span className="font-display text-lg font-bold text-white drop-shadow">{title}</span>
              </div>
            </div>
            <div className="p-5">
              <p className="text-sm leading-relaxed text-[var(--ink)]/75">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

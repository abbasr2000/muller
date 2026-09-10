"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Zap,
  CircleDashed,
  Sparkles,
  Wrench,
  AlignHorizontalDistributeCenter,
  CalendarCheck,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type Concern = {
  id: string;
  label: string;
  icon: LucideIcon;
  headline: string;
  description: string;
  href: string;
  cta: string;
};

const CONCERNS: Concern[] = [
  {
    id: "tooth-pain",
    label: "Tooth pain",
    icon: Zap,
    headline: "Let's relieve that pain",
    description:
      "Persistent or severe tooth pain often points to an infected nerve. Root canal therapy can relieve the pain and save your natural tooth — and if it's urgent, we keep room for same-day emergencies.",
    href: "/services/root-canal",
    cta: "Explore root canal therapy",
  },
  {
    id: "missing-tooth",
    label: "Missing tooth",
    icon: CircleDashed,
    headline: "Replace a missing tooth",
    description:
      "Replacing a missing tooth restores your bite, protects neighbouring teeth, and brings back your smile. Dental implants are a long-lasting option we plan carefully with 3D imaging.",
    href: "/services/dental-implants",
    cta: "Explore dental implants",
  },
  {
    id: "chipped-tooth",
    label: "Chipped or broken tooth",
    icon: Wrench,
    headline: "Restore a damaged tooth",
    description:
      "A chipped or broken tooth can usually be rebuilt with a natural-looking crown, filling, or cosmetic bonding — restoring both strength and appearance.",
    href: "/services/crowns-bridges",
    cta: "Explore crowns & bridges",
  },
  {
    id: "stains",
    label: "Yellowing or stains",
    icon: Sparkles,
    headline: "Brighten your smile",
    description:
      "Professional whitening and custom veneers can lift stains and yellowing for a brighter, more confident smile.",
    href: "/services/cosmetic-dentistry",
    cta: "Explore cosmetic dentistry",
  },
  {
    id: "crowded",
    label: "Crooked or crowded",
    icon: AlignHorizontalDistributeCenter,
    headline: "Improve alignment & appearance",
    description:
      "If crooked or crowded teeth bother you, we can talk through cosmetic options to improve how your smile looks and functions.",
    href: "/services/cosmetic-dentistry",
    cta: "Explore your options",
  },
  {
    id: "checkup",
    label: "Time for a checkup",
    icon: CalendarCheck,
    headline: "Keep your smile healthy",
    description:
      "Regular cleanings and checkups keep your smile healthy and catch small issues before they become big ones. New patients are always welcome.",
    href: "/services/cleanings-checkups",
    cta: "Explore cleanings & checkups",
  },
];

export const SymptomPicker = () => {
  const [selectedId, setSelectedId] = useState<string>(CONCERNS[0].id);

  const handleSelect = (id: string) => setSelectedId(id);

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    id: string
  ) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    setSelectedId(id);
  };

  const selected =
    CONCERNS.find((concern) => concern.id === selectedId) ?? CONCERNS[0];

  return (
    <section className="border-y border-primary/10 bg-gradient-to-br from-secondary/20 via-background to-background py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            No commitment — just a starting point
          </p>
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Where should we start?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Tell us what you notice about your smile and we&apos;ll point you to
            the care that tends to help.
          </p>
        </div>

        <div
          className="mt-10 flex flex-wrap justify-center gap-3"
          role="group"
          aria-label="Choose what you notice about your smile"
        >
          {CONCERNS.map((concern) => {
            const isActive = concern.id === selectedId;
            return (
              <button
                key={concern.id}
                type="button"
                onClick={() => handleSelect(concern.id)}
                onKeyDown={(event) => handleKeyDown(event, concern.id)}
                aria-pressed={isActive}
                className={
                  isActive
                    ? "inline-flex items-center gap-2 rounded-full border border-primary bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    : "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition-all hover:border-primary/40 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                }
              >
                <concern.icon className="size-4" aria-hidden />
                {concern.label}
              </button>
            );
          })}
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-card/70 p-8 sm:p-10 shadow-xl backdrop-blur-xl">
            <div className="absolute top-0 right-0 -z-10 size-[240px] -translate-y-1/3 translate-x-1/3 rounded-full bg-primary/10 blur-[80px]" />
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <selected.icon className="size-6" aria-hidden />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                  {selected.headline}
                </h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {selected.description}
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="rounded-full">
                <Link href={selected.href}>
                  {selected.cta}
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/book">Request an appointment</Link>
              </Button>
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Not sure which fits? That&apos;s completely fine — we&apos;ll help you
            figure it out at your visit.
          </p>
        </div>
      </div>
    </section>
  );
};

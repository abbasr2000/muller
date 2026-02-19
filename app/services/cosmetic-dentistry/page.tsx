import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Cosmetic Dentistry | St. John's NL",
  description:
    "Cosmetic dentistry in St. John's, Newfoundland: whitening, veneers, and smile makeovers. Enhance your smile at David Muller Dentistry.",
  keywords: ["cosmetic dentist St. John's", "teeth whitening Newfoundland", "veneers NL"],
};

export default function CosmeticDentistryPage() {
  return (
    <div className="flex flex-col">
      <section className="border-b border-border/60 bg-muted/30 py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Cosmetic Dentistry
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            Whitening, veneers, and smile makeovers to help you look and feel
            your best. Modern options for a brighter, more confident smile.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold text-foreground mt-8 scroll-mt-16">
            What We Offer
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-2">
            Our cosmetic options include professional teeth whitening to brighten
            your smile, veneers to reshape or cover discoloured or slightly
            misaligned teeth, and bonding or contouring for subtle improvements.
            We tailor treatment to your goals and oral health.
          </p>
          <h2 className="text-2xl font-semibold text-foreground mt-10 scroll-mt-16">
            A Smile You’ll Love
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-2">
            Whether you want a whiter smile or a more even appearance, we’ll
            discuss the best options for you and explain what to expect. Many
            treatments can be completed in just a few visits.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <Button asChild>
            <Link href="/contact">Book a Consultation</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/services">All Services</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Dental Implants | St. John's NL",
  description:
    "Dental implants in St. John's, Newfoundland. Permanent tooth replacement that looks and feels natural. David Muller Dentistry.",
  keywords: ["dental implants St. John's", "implant dentist Newfoundland", "teeth implants NL"],
};

export default function DentalImplantsPage() {
  return (
    <div className="flex flex-col">
      <section className="border-b border-border/60 bg-muted/30 py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Dental Implants
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            Permanent tooth replacement that looks and feels natural. Implants
            provide a stable foundation for crowns, bridges, or dentures.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold text-foreground mt-8 scroll-mt-16">
            What Are Dental Implants?
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-2">
            A dental implant is a small titanium post placed in the jawbone to
            act as a replacement root. Once it has integrated with the bone, we
            attach an abutment and a custom crown (or other restoration). The
            result is a strong, natural-looking tooth that can last a lifetime
            with good care.
          </p>
          <h2 className="text-2xl font-semibold text-foreground mt-10 scroll-mt-16">
            Benefits
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-2">
            Implants don’t rely on neighbouring teeth for support, preserve jaw
            bone, and feel like your own teeth. They can replace a single tooth
            or support bridges and dentures for a more secure fit. We’ll assess
            your oral health and bone structure to determine if implants are
            right for you.
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

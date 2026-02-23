import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Crowns & Bridges | St. John's NL",
  description:
    "Dental crowns and bridges in St. John's, Newfoundland. Restore strength and appearance with custom restorations. Dr. Muller Dentistry.",
  keywords: ["dental crowns St. John's", "dental bridge Newfoundland", "crown and bridge NL"],
};

export default function CrownsBridgesPage() {
  return (
    <div className="flex flex-col">
      <section className="border-b border-border/60 bg-muted/30 py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Crowns & Bridges
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            Custom crowns and bridges to restore damaged or missing teeth—strong,
            natural-looking, and built to last.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold text-foreground mt-8 scroll-mt-16">
            Dental Crowns
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-2">
            A crown is a cap that fits over a damaged or root-canaled tooth to
            protect it and restore its shape, strength, and appearance. Crowns
            can be made from materials like porcelain, ceramic, or metal,
            depending on the tooth and your goals. We take impressions (or
            digital scans) and often place a temporary crown until your
            permanent one is ready.
          </p>
          <h2 className="text-2xl font-semibold text-foreground mt-10 scroll-mt-16">
            Dental Bridges
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-2">
            A bridge replaces one or more missing teeth by anchoring to the
            teeth on either side (or to implants). The result is a natural-looking
            restoration that restores your bite and smile. We’ll explain the
            process and care so your bridge lasts for years.
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

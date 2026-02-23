import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Emergency Dental | St. John's NL",
  description:
    "Emergency dental care in St. John's, Newfoundland. Same-day care for pain, trauma, and urgent dental issues. Dr. Muller Dentistry.",
  keywords: ["emergency dentist St. John's", "dental emergency Newfoundland", "urgent dentist NL"],
};

export default function EmergencyDentalPage() {
  return (
    <div className="flex flex-col">
      <section className="border-b border-border/60 bg-muted/30 py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Emergency Dental Care
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            Dental pain or trauma? We do our best to accommodate urgent cases
            and provide same-day care when possible.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-2xl border-2 border-primary/20 bg-card p-8 text-center shadow-sm">
          <p className="text-lg font-medium text-foreground">
            For dental emergencies, please call us as soon as possible.
          </p>
          <a
            href={`tel:${SITE.phone.replace(/\D/g, "")}`}
            className="mt-4 inline-flex items-center gap-2 text-xl font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
          >
            <Phone className="size-5" aria-hidden />
            {SITE.phone}
          </a>
        </div>

        <div className="mt-12 prose prose-neutral dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold text-foreground scroll-mt-16">
            What Counts as a Dental Emergency?
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-2">
            Severe toothache, a knocked-out or loosened tooth, a cracked or
            broken tooth with pain, significant bleeding from the mouth, or
            swelling that affects breathing or swallowing are all reasons to
            seek emergency care. If you’re unsure, call us—we’ll help you
            decide the best next step.
          </p>
          <h2 className="text-2xl font-semibold text-foreground mt-10 scroll-mt-16">
            What to Do Before You Come In
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-2">
            For a knocked-out tooth, keep it moist (in milk or saliva) and try
            to see us within an hour. For broken teeth, rinse with warm water
            and apply a cold compress to reduce swelling. Avoid aspirin
            directly on the gum. When you call, we’ll give you specific
            instructions based on your situation.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <Button asChild size="lg">
            <a href={`tel:${SITE.phone.replace(/\D/g, "")}`}>Call Now</a>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contact & Location</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

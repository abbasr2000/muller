import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Cleanings & Checkups | St. John's NL",
  description:
    "Professional dental cleanings and checkups in St. John's, Newfoundland. Keep your smile healthy with regular care at David Muller Dentistry.",
  keywords: ["dental cleaning St. John's", "dental checkup Newfoundland", "teeth cleaning NL"],
};

export default function CleaningsCheckupsPage() {
  return (
    <div className="flex flex-col">
      <section className="border-b border-border/60 bg-muted/30 py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Cleanings & Checkups
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            Professional cleanings and comprehensive exams to maintain your oral
            health and catch issues early.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold text-foreground mt-8 scroll-mt-16">
            Why Regular Cleanings Matter
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-2">
            Professional cleanings remove plaque and tartar that brushing and
            flossing can&apos;t reach, helping prevent cavities and gum disease.
            Combined with a thorough exam, we can spot early signs of decay,
            gum issues, or other concerns and recommend treatment when needed.
          </p>
          <h2 className="text-2xl font-semibold text-foreground mt-10 scroll-mt-16">
            What to Expect
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-2">
            A typical visit includes scaling to remove buildup, polishing, and
            an examination of your teeth and gums. We may take X-rays
            periodically and discuss your hygiene habits and any follow-up
            care. Most patients benefit from cleanings and checkups every six
            months.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <Button asChild>
            <Link href="/contact">Book a Cleaning</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/services">All Services</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

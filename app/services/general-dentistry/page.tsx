import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "General Dentistry | St. John's NL",
  description:
    "General dentistry in St. John's, Newfoundland: exams, preventive care, fillings, and routine treatments for the whole family. Dr. Muller Dentistry.",
  keywords: ["general dentist St. John's", "family dentist Newfoundland", "NL dental care"],
};

export default function GeneralDentistryPage() {
  return (
    <div className="flex flex-col">
      <section className="border-b border-border/60 bg-muted/30 py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            General Dentistry
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            Complete exams, preventive care, and routine treatments to keep you
            and your family smiling. Serving St. John&apos;s and Newfoundland.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold text-foreground mt-8 scroll-mt-16">
            What We Offer
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-2">
            Our general dentistry services include comprehensive dental exams,
            professional cleanings, fluoride treatments, sealants, fillings,
            and education on oral hygiene and diet. We focus on preventing
            problems before they start and treating issues early when they do.
          </p>
          <h2 className="text-2xl font-semibold text-foreground mt-10 scroll-mt-16">
            Who It&apos;s For
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-2">
            From children to seniors, we welcome patients of all ages. Regular
            checkups and cleanings are the foundation of good oral health and
            help us catch concerns like decay or gum disease early.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <Button asChild>
            <Link href="/contact">Book an Appointment</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/services">All Services</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

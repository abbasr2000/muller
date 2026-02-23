import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Dental Fillings | St. John's NL",
  description:
    "Tooth-colored dental fillings in St. John's, Newfoundland. Restore teeth affected by decay with natural-looking, durable fillings. Dr. Muller Dentistry.",
  keywords: ["dental fillings St. John's", "tooth filling Newfoundland", "cavity filling NL"],
};

export default function FillingsPage() {
  return (
    <div className="flex flex-col">
      <section className="border-b border-border/60 bg-muted/30 py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Fillings
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            Tooth-colored fillings to restore teeth affected by decay—strong,
            natural-looking, and durable.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold text-foreground mt-8 scroll-mt-16">
            When Fillings Are Needed
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-2">
            When decay creates a cavity, we remove the damaged part of the tooth
            and fill the space with a durable material. This stops the decay,
            restores shape and function, and helps prevent further damage.
          </p>
          <h2 className="text-2xl font-semibold text-foreground mt-10 scroll-mt-16">
            Modern Fillings
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-2">
            We use tooth-colored (composite) fillings that blend with your
            natural teeth. They bond well to the tooth, are strong and
            long-lasting, and can be completed in a single visit. We’ll numb
            the area so the procedure is comfortable.
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

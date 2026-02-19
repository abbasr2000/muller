import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SERVICES } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Dental Services | St. John's NL",
  description:
    "Full range of dental services in St. John's, Newfoundland: root canal therapy, cleanings, fillings, crowns, implants, cosmetic dentistry, and emergency care. David Muller Dentistry.",
  keywords: [
    "dental services St. John's",
    "dentist Newfoundland",
    "root canal NL",
    "dental treatments St. John's",
  ],
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <section className="border-b border-border/60 bg-muted/30 py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Services
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            From root canal therapy to routine cleanings and cosmetic
            dentistry, we offer comprehensive dental care for St. John&apos;s
            and Newfoundland.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Card
              key={service.slug}
              className="border-border/80 transition-shadow hover:shadow-md flex flex-col"
            >
              <CardHeader>
                <h2 className="text-lg font-semibold text-foreground">
                  {service.title}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {service.shortDescription}
                </p>
              </CardHeader>
              <CardContent className="mt-auto pt-0">
                <Button asChild variant="outline" size="sm" className="gap-2">
                  <Link href={`/services/${service.slug}`}>
                    Learn more
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

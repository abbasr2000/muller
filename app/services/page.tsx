import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SERVICES } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Dental Services | St. John's NL",
  description:
    "Full range of dental services in St. John's, Newfoundland: root canal therapy, cleanings, fillings, crowns, implants, cosmetic dentistry, and emergency care. Dr. Muller Dentistry.",
  alternates: {
    canonical: "/services",
  },
  keywords: [
    "dental services St. John's",
    "dentist Newfoundland",
    "root canal NL",
    "dental treatments St. John's",
  ],
  openGraph: {
    title: "Dental Services | Dr. Muller Dentistry St. John's NL",
    description: "Full range of dental services in St. John's, Newfoundland: root canal therapy, cleanings, fillings, crowns, implants, cosmetic dentistry, and emergency care.",
    url: "https://drmullerdentistry.com/services",
    siteName: "Dr. Muller Dentistry",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/services-hero.png",
        width: 1200,
        height: 630,
        alt: "Dental Services at Dr. Muller Dentistry",
      }
    ],
  },

};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden border-b border-primary/5 bg-gradient-to-br from-background via-muted/30 to-background py-16 md:py-24">
        <div className="absolute -top-24 -right-24 -z-10 size-[400px] rounded-full bg-primary/10 blur-[100px]" />

        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="order-2 lg:order-1 max-w-2xl text-center lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
                Our Services
              </h1>
              <p className="mt-6 text-lg text-muted-foreground sm:text-xl leading-relaxed text-balance">
                From root canal therapy to routine cleanings and cosmetic
                dentistry, we offer comprehensive dental care for St. John&apos;s
                and Newfoundland. Our focus is on your comfort and long-term oral health.
              </p>
            </div>

            <div className="order-1 lg:order-2 group relative mx-auto w-full max-w-lg lg:max-w-none shadow-xl rounded-[2rem] overflow-hidden border border-primary/20 bg-background/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay z-10 pointer-events-none transition-opacity duration-700 group-hover:opacity-70"></div>
              <Image
                src="/services-hero.png"
                alt="Clean, professional dental tools"
                width={800}
                height={800}
                className="object-cover w-full h-auto transform transition-transform duration-1000 group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Card
              key={service.slug}
              className="group border-primary/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 flex flex-col overflow-hidden bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="p-8 pb-4">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <ArrowRight className="size-6 -rotate-45" />
                </div>
                <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {service.shortDescription}
                </p>
              </CardHeader>
              <CardContent className="mt-auto p-8 pt-0">
                <Button asChild variant="ghost" className="gap-2 p-0 h-auto hover:bg-transparent text-primary font-semibold group/btn">
                  <Link href={`/services/${service.slug}`}>
                    Learn more
                    <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform" />
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

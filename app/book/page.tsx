import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Instagram, Map, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/booking-form";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Book an Appointment | Dr. Muller Dentistry St. John's NL",
  description:
    "Book a dental appointment at Dr. Muller Dentistry in St. John's, Newfoundland. Request your visit online, or find our address, phone, email, and opening hours. We'll call or text to confirm.",
  alternates: {
    canonical: "/book",
  },
  keywords: [
    "book dentist St. John's",
    "dental appointment Newfoundland",
    "contact Dr. Muller Dentistry",
    "dentist St. John's NL",
    "root canal appointment St. John's",
  ],
  openGraph: {
    title: "Book an Appointment | Dr. Muller Dentistry St. John's NL",
    description:
      "Book a dental appointment in St. John's, Newfoundland. Request your visit online, or reach us by phone, email, or in person.",
    url: "https://drmullerdentistry.com/book",
    siteName: "Dr. Muller Dentistry",
    locale: "en_CA",
    type: "website",
  },
};

export default function BookPage() {
  const phoneDigits = SITE.phone.replace(/\D/g, "").slice(0, 10);

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden border-b border-primary/10 bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-20">
        <div className="absolute top-0 right-0 -z-10 size-[500px] rounded-full bg-primary/10 blur-[130px]" />
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center text-balance">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Book an Appointment
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl leading-relaxed">
              Request your visit below and we&apos;ll call or text to confirm — or
              reach us directly by phone, email, or in person. We welcome new
              patients from across St. John&apos;s and Newfoundland.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left: contact details + reassurance */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Location &amp; Hours
              </h2>
              <address className="space-y-4 text-muted-foreground not-italic">
                <a
                  href={SITE.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-4 -ml-4 rounded-2xl hover:bg-primary/5 hover:text-foreground transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <MapPin className="size-6 shrink-0" aria-hidden />
                  </div>
                  <div className="pt-1">
                    <span className="font-semibold text-foreground block mb-1">
                      Clinic Address
                    </span>
                    {SITE.address}
                    <br />
                    {SITE.city}, NL {SITE.postalCode}
                  </div>
                </a>

                <a
                  href={`tel:${phoneDigits}`}
                  className="group flex items-start gap-4 p-4 -ml-4 rounded-2xl hover:bg-primary/5 hover:text-foreground transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Phone className="size-6 shrink-0" aria-hidden />
                  </div>
                  <div className="pt-1">
                    <span className="font-semibold text-foreground block mb-1">
                      Phone
                    </span>
                    {SITE.phone}
                  </div>
                </a>

                <a
                  href={`mailto:${SITE.email}`}
                  className="group flex items-start gap-4 p-4 -ml-4 rounded-2xl hover:bg-primary/5 hover:text-foreground transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Mail className="size-6 shrink-0" aria-hidden />
                  </div>
                  <div className="pt-1">
                    <span className="font-semibold text-foreground block mb-1">
                      Email
                    </span>
                    {SITE.email}
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 -ml-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Clock className="size-6 shrink-0" aria-hidden />
                  </div>
                  <div className="pt-1">
                    <span className="font-semibold text-foreground block mb-1">
                      Operating Hours
                    </span>
                    {SITE.hours}
                  </div>
                </div>
              </address>

              <div className="mt-6">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
                >
                  <a href={SITE.mapUrl} target="_blank" rel="noopener noreferrer">
                    <Map className="size-5" aria-hidden />
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-destructive" />
              <h2 className="font-semibold text-destructive">
                Dental emergency?
              </h2>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Please call us right away — don&apos;t wait for a form. We do our
                best to see urgent cases the same day.
              </p>
              <Button asChild variant="destructive" className="mt-4 rounded-full">
                <Link href="/services/emergency-dental">
                  Emergency Dental Information
                </Link>
              </Button>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 relative overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <CreditCard className="size-5 shrink-0" aria-hidden />
                </div>
                <h2 className="font-semibold text-foreground">
                  Direct billing &amp; CDCP
                </h2>
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                We offer direct billing to all major insurance providers and
                accept the Canadian Dental Care Plan (CDCP).
              </p>
              <Button asChild variant="outline" className="mt-4 rounded-full">
                <Link href="/insurance">Insurance &amp; Direct Billing</Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-2">
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-medium text-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 rounded-full bg-muted group-hover:bg-primary/10 transition-colors">
                  <Instagram className="size-5" aria-hidden />
                </div>
                Instagram
              </a>
              <Link
                href="/map"
                className="flex items-center gap-3 text-sm font-medium text-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 rounded-full bg-muted group-hover:bg-primary/10 transition-colors">
                  <Map className="size-5" aria-hidden />
                </div>
                Google Reviews
              </Link>
            </div>
          </div>

          {/* Right: the booking form */}
          <div>
            <BookingForm />
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/30 py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold text-foreground">
              Serving St. John&apos;s and Newfoundland
            </h2>
            <p className="mt-2 text-muted-foreground">
              Our practice is conveniently located on Stavanger Drive. We serve
              patients from the St. John&apos;s metro area, Mount Pearl, Paradise,
              and throughout Newfoundland and Labrador.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

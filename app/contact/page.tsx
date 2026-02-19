import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Instagram, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact | Book an Appointment St. John's NL",
  description: `Contact David Muller Dentistry in St. John's, Newfoundland. Address: ${SITE.address}. Book root canal, cleanings, and dental appointments. ${SITE.phone}.`,
  keywords: [
    "contact David Muller Dentistry",
    "dentist St. John's",
    "book dentist Newfoundland",
    "St. John's NL dental appointment",
  ],
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <section className="border-b border-primary/15 bg-gradient-to-b from-primary/10 to-muted/30 py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            Get in touch to book an appointment or ask a question. We look
            forward to hearing from you.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-foreground">
              Location & Hours
            </h2>
            <address className="mt-4 space-y-4 text-muted-foreground not-italic">
              <a
                href={SITE.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
              >
                <MapPin className="size-5 mt-0.5 shrink-0" aria-hidden />
                <span>
                  {SITE.address}
                  <br />
                  {SITE.city}, NL {SITE.postalCode}
                </span>
              </a>
              <a
                href={`tel:${SITE.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-3 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg w-fit"
              >
                <Phone className="size-5 shrink-0" aria-hidden />
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg w-fit"
              >
                <Mail className="size-5 shrink-0" aria-hidden />
                {SITE.email}
              </a>
              <p className="flex items-center gap-3">
                <Clock className="size-5 shrink-0" aria-hidden />
                {SITE.hours}
              </p>
            </address>
            <div className="mt-6">
              <Button asChild>
                <a
                  href={SITE.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-muted/30 p-6">
            <h2 className="text-xl font-semibold text-foreground">
              Book an Appointment
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Call us at {SITE.phone} to schedule your visit. We welcome new
              patients from St. John&apos;s, Mount Pearl, and across
              Newfoundland and Labrador.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              For dental emergencies, please call as soon as possible. We do our
              best to accommodate urgent cases.
            </p>
            <Button asChild className="mt-6">
              <Link href="/services/emergency-dental">
                Emergency Dental Care
              </Link>
            </Button>
            <div className="mt-6 pt-6 border-t border-border space-y-2">
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <Instagram className="size-4" aria-hidden />
                Follow us on Instagram
              </a>
              <Link href="/map" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <Map className="size-4" aria-hidden />
                Map & Google reviews
              </Link>
            </div>
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

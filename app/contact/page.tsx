import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Instagram, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact | Book an Appointment St. John's NL",
  description: `Contact Dr. Muller Dentistry in St. John's, Newfoundland. Address: ${SITE.address}. Book root canal, cleanings, and dental appointments. ${SITE.phone}.`,
  keywords: [
    "contact Dr. Muller Dentistry",
    "dentist St. John's",
    "book dentist Newfoundland",
    "St. John's NL dental appointment",
  ],
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden border-b border-primary/10 bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-24">
        <div className="absolute top-0 right-0 -z-10 size-[500px] rounded-full bg-primary/10 blur-[130px]" />
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="max-w-2xl text-center lg:text-left text-balance">
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Contact Us
              </h1>
              <p className="mt-6 text-lg text-muted-foreground sm:text-xl leading-relaxed">
                Get in touch to book an appointment or ask a question. We look
                forward to welcoming you to our St. John&apos;s practice.
              </p>
            </div>

            <div className="group relative mx-auto w-full max-w-lg lg:max-w-none shadow-xl rounded-[2rem] overflow-hidden border border-primary/20 bg-background/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent mix-blend-overlay z-10 pointer-events-none transition-opacity duration-700 group-hover:opacity-70"></div>
              <Image
                src="/contact-page-hero.png"
                alt="Booking a dental appointment online"
                width={800}
                height={800}
                className="object-cover w-full h-auto transform transition-transform duration-1000 group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Location & Hours
              </h2>
              <address className="space-y-6 text-muted-foreground not-italic">
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
                    <span className="font-semibold text-foreground block mb-1">Clinic Address</span>
                    {SITE.address}
                    <br />
                    {SITE.city}, NL {SITE.postalCode}
                  </div>
                </a>

                <a
                  href={`tel:${SITE.phone.replace(/\D/g, "")}`}
                  className="group flex items-start gap-4 p-4 -ml-4 rounded-2xl hover:bg-primary/5 hover:text-foreground transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Phone className="size-6 shrink-0" aria-hidden />
                  </div>
                  <div className="pt-1">
                    <span className="font-semibold text-foreground block mb-1">Phone</span>
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
                    <span className="font-semibold text-foreground block mb-1">Email</span>
                    {SITE.email}
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 -ml-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Clock className="size-6 shrink-0" aria-hidden />
                  </div>
                  <div className="pt-1">
                    <span className="font-semibold text-foreground block mb-1">Operating Hours</span>
                    {SITE.hours}
                  </div>
                </div>
              </address>
              <div className="mt-8">
                <Button asChild size="lg" className="rounded-full shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
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
          </div>

          <div className="flex flex-col justify-center">
            <div className="rounded-[2.5rem] border border-white/20 bg-card/60 p-8 sm:p-12 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -z-10 size-[300px] -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/10 blur-[80px]" />
              <h2 className="text-2xl font-bold text-foreground">
                Book an Appointment
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Call us at <strong className="text-foreground">{SITE.phone}</strong> to schedule your visit. We welcome new
                patients from St. John&apos;s, Mount Pearl, and across
                Newfoundland and Labrador.
              </p>

              <div className="mt-8 p-6 rounded-2xl bg-destructive/5 border border-destructive/20 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-destructive"></div>
                <h3 className="font-semibold text-destructive mb-2">Need Emergency Care?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For dental emergencies, please call as soon as possible. We do our
                  best to accommodate urgent cases immediately.
                </p>
                <Button asChild variant="destructive" className="mt-4 rounded-full w-full sm:w-auto">
                  <Link href="/services/emergency-dental">
                    Emergency Dental Information
                  </Link>
                </Button>
              </div>

              <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row gap-6">
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

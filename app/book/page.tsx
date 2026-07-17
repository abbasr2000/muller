import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/booking-form";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Book an Appointment | Dr. Muller Dentistry St. John's NL",
  description:
    "Request a dental appointment at Dr. Muller Dentistry in St. John's, Newfoundland. Choose your service and preferred time — we'll call or text to confirm.",
  alternates: {
    canonical: "/book",
  },
  keywords: [
    "book dentist St. John's",
    "dental appointment Newfoundland",
    "request dentist appointment",
    "Dr. Muller Dentistry booking",
  ],
  openGraph: {
    title: "Book an Appointment | Dr. Muller Dentistry St. John's NL",
    description:
      "Request a dental appointment online. Choose your service and preferred time — we'll call or text to confirm.",
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
              Tell us a little about your visit and when suits you best. We&apos;ll
              call or text to confirm your appointment.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
          {/* Left: reassurance + contact details */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Clock className="size-6 shrink-0" aria-hidden />
                </div>
                <div>
                  <h2 className="font-semibold text-foreground">Opening hours</h2>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {SITE.hours}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <ShieldCheck className="size-6 shrink-0" aria-hidden />
                </div>
                <div>
                  <h2 className="font-semibold text-foreground">
                    New patients welcome
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    We welcome patients from St. John&apos;s, Mount Pearl,
                    Paradise, and across Newfoundland and Labrador.
                  </p>
                </div>
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
              <Button
                asChild
                variant="destructive"
                className="mt-4 rounded-full"
              >
                <a href={`tel:${phoneDigits}`}>
                  <Phone className="size-4" aria-hidden />
                  Call (709) 400-7474
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Prefer email or directions?{" "}
              <Link href="/contact" className="font-medium text-primary">
                Visit our contact page
              </Link>
              .
            </p>
          </div>

          {/* Right: the form */}
          <div>
            <BookingForm />
          </div>
        </div>
      </section>
    </div>
  );
}

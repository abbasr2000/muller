import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Implant Restoration | St. John's NL | Dr. Muller Dentistry",
  description: "Custom implant restorations in St. John's that look and feel natural while restoring bite function.",
  alternates: {
    canonical: "/services/implant-restoration",
  },
  openGraph: {
    title: "Implant Restoration | Dr. Muller Dentistry",
    description: "Custom crowns and prostheses that complete your implant treatment beautifully.",
    url: "https://drmullerdentistry.com/services/implant-restoration",
    siteName: "Dr. Muller Dentistry",
    locale: "en_CA",
    type: "website",
  },
};

export default function ImplantRestorationPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden border-b border-primary/10 bg-gradient-to-br from-background via-muted/30 to-background py-16 md:py-24">
        <div className="absolute top-0 right-0 -z-10 size-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <ArrowRight className="size-4" />
            <span className="text-foreground font-medium">Implant Restoration</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
            Implant Restoration
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed text-balance">
            We design and place custom crowns and prosthetics that complete your implant treatment and blend seamlessly with your smile.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full shadow-lg shadow-primary/20 px-8 h-12">
              <Link href="/contact">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-primary/10 shadow-xl bg-card">
            <img
              src="/implant-restorations.jpg"
              alt="Dental restoration work on an implant crown"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground">
            <h2 className="text-3xl font-bold text-foreground mb-6">A Natural Finish for Every Implant</h2>
            <p className="mb-6">
              Once the implant is healed, the final step is attaching a restoration that looks, feels, and functions like a natural tooth. We focus on shade, contour, and bite balance so the result feels effortless.
            </p>
            <p>
              Each restoration is tailored to your smile and designed to support comfortable chewing, clear speech, and lasting confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-primary/5 bg-muted/20 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-primary/10 bg-card p-8 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3 w-max mb-6">
                <Sparkles className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Life-Like Aesthetics</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">We match the crown shape and shade carefully for a seamless appearance.</p>
            </div>
            <div className="rounded-2xl border border-primary/10 bg-card p-8 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3 w-max mb-6">
                <ShieldCheck className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Strong Function</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">The final restoration is crafted for strong chewing and long-term durability.</p>
            </div>
            <div className="rounded-2xl border border-primary/10 bg-card p-8 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3 w-max mb-6">
                <CheckCircle2 className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Personalized Care</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">We tailor every restoration to your anatomy, goals, and smile preferences.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

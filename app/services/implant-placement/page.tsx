import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, CheckCircle2, Microscope, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Implant Placement | St. John's NL | Dr. Muller Dentistry",
  description: "Precise implant placement in St. John's with guided planning for strong, long-lasting tooth replacement.",
  alternates: {
    canonical: "/services/implant-placement",
  },
  openGraph: {
    title: "Implant Placement | Dr. Muller Dentistry",
    description: "Precision implant placement in St. John's for single or multiple missing teeth.",
    url: "https://drmullerdentistry.com/services/implant-placement",
    siteName: "Dr. Muller Dentistry",
    locale: "en_CA",
    type: "website",
  },
};

export default function ImplantPlacementPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden border-b border-primary/10 bg-gradient-to-br from-background via-muted/30 to-background py-16 md:py-24">
        <div className="absolute top-0 right-0 -z-10 size-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <ArrowRight className="size-4" />
            <span className="text-foreground font-medium">Implant Placement</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
            Implant Placement
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed text-balance">
            Our implant placement process combines careful diagnosis, digital planning, and precise surgical execution to restore function and confidence.
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
              alt="Dental implant placement in a modern clinic"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground">
            <h2 className="text-3xl font-bold text-foreground mb-6">Planning for Predictable Results</h2>
            <p className="mb-6">
              Every implant case begins with a comprehensive evaluation of your oral health, jawbone, and smile goals. We use advanced planning to place each implant accurately and support long-term stability.
            </p>
            <p>
              Whether you are replacing a single tooth or planning a broader restoration, our approach focuses on comfort, precision, and a natural-looking outcome.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-primary/5 bg-muted/20 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-primary/10 bg-card p-8 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3 w-max mb-6">
                <Microscope className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Precise Planning</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">We evaluate bone volume and surrounding anatomy before planning the ideal implant position.</p>
            </div>
            <div className="rounded-2xl border border-primary/10 bg-card p-8 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3 w-max mb-6">
                <ShieldCheck className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Gentle Procedure</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">Our process is designed to minimize discomfort and help you recover quickly after surgery.</p>
            </div>
            <div className="rounded-2xl border border-primary/10 bg-card p-8 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3 w-max mb-6">
                <CalendarDays className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Long-Term Support</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">We guide you through healing and connect the final restoration at the right time.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl border border-primary/10 bg-card/80 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-foreground mb-4">What to Expect</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3"><CheckCircle2 className="mt-1 size-5 text-primary" />A consultation and review of your medical and dental history.</li>
            <li className="flex items-start gap-3"><CheckCircle2 className="mt-1 size-5 text-primary" />A tailored treatment plan and clear timeline for healing and restoration.</li>
            <li className="flex items-start gap-3"><CheckCircle2 className="mt-1 size-5 text-primary" />Ongoing guidance to keep your implant healthy long after placement.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

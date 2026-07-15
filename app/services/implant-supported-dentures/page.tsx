import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Implant-Supported Dentures | St. John's NL | Dr. Muller Dentistry",
  description: "Stable implant-supported dentures in St. John's that improve comfort, confidence, and chewing function.",
  alternates: {
    canonical: "/services/implant-supported-dentures",
  },
  openGraph: {
    title: "Implant-Supported Dentures | Dr. Muller Dentistry",
    description: "Secure, comfortable dentures anchored by dental implants.",
    url: "https://drmullerdentistry.com/services/implant-supported-dentures",
    siteName: "Dr. Muller Dentistry",
    locale: "en_CA",
    type: "website",
  },
};

export default function ImplantSupportedDenturesPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden border-b border-primary/10 bg-gradient-to-br from-background via-muted/30 to-background py-16 md:py-24">
        <div className="absolute top-0 right-0 -z-10 size-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <ArrowRight className="size-4" />
            <span className="text-foreground font-medium">Implant-Supported Dentures</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
            Implant-Supported Dentures
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed text-balance">
            Enjoy the stability of dental implants with the convenience of a full or partial denture solution.
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
              src="/Implant-supported-dentures.jpg"
              alt="Implant-supported dentures in a dental office"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground">
            <h2 className="text-3xl font-bold text-foreground mb-6">Greater Stability and Comfort</h2>
            <p className="mb-6">
              Implant-supported dentures are a secure alternative to traditional removable dentures. They stay in place more reliably and help preserve the jawbone over time.
            </p>
            <p>
              This approach offers better chewing function and improved confidence for patients who want a more permanent solution.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-primary/5 bg-muted/20 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-primary/10 bg-card p-8 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3 w-max mb-6">
                <ShieldCheck className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Secure Fit</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">Implants anchor the denture so it stays firmly in place during daily activities.</p>
            </div>
            <div className="rounded-2xl border border-primary/10 bg-card p-8 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3 w-max mb-6">
                <Smile className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">More Confidence</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">Patients often feel more comfortable speaking and smiling with a stable denture.</p>
            </div>
            <div className="rounded-2xl border border-primary/10 bg-card p-8 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3 w-max mb-6">
                <CheckCircle2 className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Better Function</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">A stable fit improves chewing and helps maintain oral health over time.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

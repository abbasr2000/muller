import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Fillings | St. John's NL | Dr. Muller Dentistry",
  description: "Invisible, tooth-colored composite resin fillings to beautifully restore teeth affected by decay.",
  keywords: ["Fillings St. John's", "dentist Newfoundland", "Dr. Muller Dentistry", "dental Fillings"],
  alternates: {
    canonical: "/services/fillings",
  },
  openGraph: {
    title: "Fillings | Dr. Muller Dentistry",
    description: "Invisible, tooth-colored composite resin fillings to beautifully restore teeth affected by decay.",
    url: "https://drmullerdentistry.com/services/fillings",
    siteName: "Dr. Muller Dentistry",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/services-hero.png",
        width: 1200,
        height: 630,
        alt: "Fillings at Dr. Muller Dentistry",
      }
    ],
  },
};

export default function ServicePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{"@type": "Question", "name": "How long does it typically take to get a filling?", "acceptedAnswer": {"@type": "Answer", "text": "Getting a standard filling is a very fast and efficient procedure that usually takes between just 30 to 45 minutes per tooth, largely dependent on the size, depth, and specific location of the cavity being removed."}}, {"@type": "Question", "name": "Are modern composite fillings truly as strong as old silver (amalgam) fillings?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Modern cosmetic composite materials are highly engineered to be incredibly durable and withstand the heavy forces of daily chewing phenomenally well. While dark metal fillings were traditionally considered stronger decades ago, today's advanced bonding composites offer exceptional, reliable longevity for the vast majority of cavities."}}, {"@type": "Question", "name": "Will my tooth be sensitive right after getting a filling?", "acceptedAnswer": {"@type": "Answer", "text": "It is completely normal to experience some minor, fleeting sensitivity to extreme hot or cold for a few days up to a week after getting a new filling as the inner tooth nerve settles down. However, if the sensitivity persists for longer, or if you feel a sharp, shooting pain specifically when biting down, please call us so we can quickly and easily adjust your bite!"}}]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://drmullerdentistry.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://drmullerdentistry.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Fillings",
        "item": "https://drmullerdentistry.com/services/fillings"
      }
    ]
  };

  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Fillings",
    "description": "Invisible, tooth-colored composite resin fillings to beautifully restore teeth affected by decay.",
    "url": "https://drmullerdentistry.com/services/fillings",
    "procedureType": "https://health-lifesci.schema.org/NoninvasiveProcedure",
    "body" : {
      "@type": "AnatomicalStructure",
      "name": "Mouth"
    },
    "availableService": {
      "@type": "MedicalTherapy",
      "name": "Fillings",
      "provider": {
        "@type": "Dentist",
        "@id": "https://drmullerdentistry.com/#dentist"
      }
    }
  };

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
      />
      <section className="relative overflow-hidden border-b border-primary/5 bg-gradient-to-br from-background via-muted/30 to-background py-16 md:py-24">
        <div className="absolute top-0 right-0 -z-10 size-[500px] rounded-full bg-primary/10 blur-[130px]" />
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <ChevronRight className="size-4" />
            <span className="text-foreground font-medium">Fillings</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
            Fillings
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed text-balance">
            Invisible, tooth-colored composite resin fillings to beautifully restore teeth affected by decay.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
        <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed">
          <p className="mb-6">Dental fillings are undoubtedly one of the most common, foundational, and essential procedures we perform daily. When a tooth sustains a cavity—caused when acidic plaque bacteria eat away at the hard outer enamel—removing that active decay and tightly sealing the space is absolutely necessary to stop the cavity from reaching the highly sensitive nerve inside.</p>
          <p className="mb-6">If cavities are ignored, they will continuously grow deeper, eventually resulting in severe pain, infection, and the need for a much more complex root canal or full extraction. Catching and filling a cavity early is the key to minimizing pain and preserving your natural smile.</p>
          <p className="mb-6">At Dr. Muller Dentistry, we are proud to be a modern, mercury-free practice. We exclusively utilize advanced, tooth-colored composite resin materials for all our fillings. Not only do these highly aesthetic fillings blend seamlessly with the natural shade of your teeth, but they also chemically bond directly to the tooth structure. This bonding provides phenomenal strength and durability, reinforcing the tooth from the inside out without the dark, metallic appearance of traditional amalgam.</p>
        </div>

        <div className="my-16 grid gap-6 sm:grid-cols-2">
          <div className="flex items-start gap-3 p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:border-primary/20">
            <div className="mt-1 rounded-full bg-primary/10 p-1 shrink-0">
              <ArrowRight className="size-4 text-primary" />
            </div>
            <p className="font-medium text-foreground m-0 leading-snug">{`Immediately halts the dangerous progression of tooth decay`}</p>
          </div>
          <div className="flex items-start gap-3 p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:border-primary/20">
            <div className="mt-1 rounded-full bg-primary/10 p-1 shrink-0">
              <ArrowRight className="size-4 text-primary" />
            </div>
            <p className="font-medium text-foreground m-0 leading-snug">{`Restores the structural integrity, strength, and original shape of the tooth`}</p>
          </div>
          <div className="flex items-start gap-3 p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:border-primary/20">
            <div className="mt-1 rounded-full bg-primary/10 p-1 shrink-0">
              <ArrowRight className="size-4 text-primary" />
            </div>
            <p className="font-medium text-foreground m-0 leading-snug">{`Advanced tooth-colored material blends invisibly with your natural smile`}</p>
          </div>
          <div className="flex items-start gap-3 p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:border-primary/20">
            <div className="mt-1 rounded-full bg-primary/10 p-1 shrink-0">
              <ArrowRight className="size-4 text-primary" />
            </div>
            <p className="font-medium text-foreground m-0 leading-snug">{`Composite resin tightly bonds to the tooth, requiring less removing of healthy enamel`}</p>
          </div>

        </div>

        <h2 className="text-3xl font-extrabold text-foreground mt-20 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto max-w-3xl space-y-4">
          <details className="group rounded-2xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm open:bg-card/80 transition-all duration-300 shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground text-lg group-open:text-primary transition-colors">
              <span className="pr-6">{`How long does it typically take to get a filling?`}</span>
              <span className="shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary">
                <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
              {`Getting a standard filling is a very fast and efficient procedure that usually takes between just 30 to 45 minutes per tooth, largely dependent on the size, depth, and specific location of the cavity being removed.`}
            </p>
          </details>
          <details className="group rounded-2xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm open:bg-card/80 transition-all duration-300 shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground text-lg group-open:text-primary transition-colors">
              <span className="pr-6">{`Are modern composite fillings truly as strong as old silver (amalgam) fillings?`}</span>
              <span className="shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary">
                <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
              {`Yes. Modern cosmetic composite materials are highly engineered to be incredibly durable and withstand the heavy forces of daily chewing phenomenally well. While dark metal fillings were traditionally considered stronger decades ago, today's advanced bonding composites offer exceptional, reliable longevity for the vast majority of cavities.`}
            </p>
          </details>
          <details className="group rounded-2xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm open:bg-card/80 transition-all duration-300 shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground text-lg group-open:text-primary transition-colors">
              <span className="pr-6">{`Will my tooth be sensitive right after getting a filling?`}</span>
              <span className="shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary">
                <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
              {`It is completely normal to experience some minor, fleeting sensitivity to extreme hot or cold for a few days up to a week after getting a new filling as the inner tooth nerve settles down. However, if the sensitivity persists for longer, or if you feel a sharp, shooting pain specifically when biting down, please call us so we can quickly and easily adjust your bite!`}
            </p>
          </details>

        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 pb-32">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/20 bg-background/50 p-10 sm:p-16 text-center shadow-2xl backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5 pointer-events-none"></div>
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl relative z-10">
            Ready to Schedule Your Appointment?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground relative z-10 max-w-2xl mx-auto">
            Contact Dr. Muller Dentistry today to book your visit.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 relative z-10">
            <Button asChild size="lg" className="rounded-full shadow-lg shadow-primary/20 px-8">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

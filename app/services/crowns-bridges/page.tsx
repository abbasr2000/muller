import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Crowns & Bridges | St. John's NL | Dr. Muller Dentistry",
  description: "Restore structural strength and visual appearance with custom crowns and bridges.",
  keywords: ["Crowns & Bridges St. John's", "dentist Newfoundland", "Dr. Muller Dentistry", "dental Crowns & Bridges"],
  alternates: {
    canonical: "/services/crowns-bridges",
  },
  openGraph: {
    title: "Crowns & Bridges | Dr. Muller Dentistry",
    description: "Restore structural strength and visual appearance with custom crowns and bridges.",
    url: "https://drmullerdentistry.com/services/crowns-bridges",
    siteName: "Dr. Muller Dentistry",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/services-hero.png",
        width: 1200,
        height: 630,
        alt: "Crowns & Bridges at Dr. Muller Dentistry",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crowns & Bridges | Dr. Muller Dentistry",
    description: "Restore structural strength and visual appearance with custom crowns and bridges.",
    images: ["/services-hero.png"],
  },
};

export default function ServicePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{"@type": "Question", "name": "How long does it take to get a crown or a bridge?", "acceptedAnswer": {"@type": "Answer", "text": "The standard process typically requires two focused visits. During your first visit, the target teeth are prepared, precise digital or physical impressions are taken, and a protective temporary restoration is placed. Your custom-milled crown or bridge will be permanently cemented during your second visit, usually about two weeks later."}}, {"@type": "Question", "name": "How long do crowns and bridges usually last?", "acceptedAnswer": {"@type": "Answer", "text": "With excellent oral hygiene at home and regular professional dental checkups, high-quality ceramic crowns and bridges can last 10 to 15 years, and very often much longer. They do not naturally decay, but the natural tooth structure holding them still can, which is why brushing is vital!"}}, {"@type": "Question", "name": "Does getting a crown hurt?", "acceptedAnswer": {"@type": "Answer", "text": "Getting a crown is a very routine procedure that is performed under profound local anesthesia. Your tooth and the surrounding gums will be completely numb, making the experience very similar to getting a standard filling in terms of absolute comfort."}}]
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
        "name": "Crowns & Bridges",
        "item": "https://drmullerdentistry.com/services/crowns-bridges"
      }
    ]
  };

  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Crowns & Bridges",
    "description": "Restore structural strength and visual appearance with custom crowns and bridges.",
    "url": "https://drmullerdentistry.com/services/crowns-bridges",
    "procedureType": "https://health-lifesci.schema.org/NoninvasiveProcedure",
    "body" : {
      "@type": "AnatomicalStructure",
      "name": "Mouth"
    },
    "availableService": {
      "@type": "MedicalTherapy",
      "name": "Crowns & Bridges",
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
            <span className="text-foreground font-medium">Crowns & Bridges</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
            Crowns & Bridges
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed text-balance">
            Restore structural strength and visual appearance with custom crowns and bridges.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
        <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed">
          <p className="mb-6">When a tooth is severely damaged by deep decay, cracked by trauma, or completely missing, it can severely impact your ability to chew, speak, and smile with confidence. Crowns and bridges offer highly durable, incredibly natural-looking solutions to permanently restore both the structural function and aesthetic appearance of your teeth.</p>
          <p className="mb-6">A dental crown (sometimes traditionally referred to as a 'cap') is a custom-made, hollow artificial tooth that fits perfectly over a weakened or heavily filled tooth. It acts like a protective helmet, preventing the natural tooth underneath from fracturing while restoring its original shape and brilliant color. We often highly recommend crowns after a tooth has undergone a root canal to ensure it does not split under chewing pressure.</p>
          <p className="mb-6">A dental bridge is a beautiful and effective way to fill the gap left by one or more consecutively missing teeth. It is quite literally a 'bridge' formed by anchoring a false tooth (or teeth) between two protective crowns placed on the healthy adjacent teeth. At Dr. Muller Dentistry, we utilize state-of-the-art digital scanning and high-strength ceramics (like Zirconia and E-max) to craft crowns and bridges that are virtually indistinguishable from your natural teeth.</p>
        </div>

        <div className="my-16 grid gap-6 sm:grid-cols-2">
          <div className="flex items-start gap-3 p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:border-primary/20">
            <div className="mt-1 rounded-full bg-primary/10 p-1 shrink-0">
              <ArrowRight className="size-4 text-primary" />
            </div>
            <p className="font-medium text-foreground m-0 leading-snug">{`Provides a structural shield for weak, cracked, or root-canaled teeth`}</p>
          </div>
          <div className="flex items-start gap-3 p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:border-primary/20">
            <div className="mt-1 rounded-full bg-primary/10 p-1 shrink-0">
              <ArrowRight className="size-4 text-primary" />
            </div>
            <p className="font-medium text-foreground m-0 leading-snug">{`Quickly restores your ability to chew food and speak clearly`}</p>
          </div>
          <div className="flex items-start gap-3 p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:border-primary/20">
            <div className="mt-1 rounded-full bg-primary/10 p-1 shrink-0">
              <ArrowRight className="size-4 text-primary" />
            </div>
            <p className="font-medium text-foreground m-0 leading-snug">{`Prevents remaining healthy teeth from slowly shifting out of alignment`}</p>
          </div>
          <div className="flex items-start gap-3 p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:border-primary/20">
            <div className="mt-1 rounded-full bg-primary/10 p-1 shrink-0">
              <ArrowRight className="size-4 text-primary" />
            </div>
            <p className="font-medium text-foreground m-0 leading-snug">{`Uses premium materials to look and feel exactly like natural teeth`}</p>
          </div>

        </div>

        <h2 className="text-3xl font-extrabold text-foreground mt-20 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto max-w-3xl space-y-4">
          <details className="group rounded-2xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm open:bg-card/80 transition-all duration-300 shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground text-lg group-open:text-primary transition-colors">
              <span className="pr-6">{`How long does it take to get a crown or a bridge?`}</span>
              <span className="shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary">
                <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
              {`The standard process typically requires two focused visits. During your first visit, the target teeth are prepared, precise digital or physical impressions are taken, and a protective temporary restoration is placed. Your custom-milled crown or bridge will be permanently cemented during your second visit, usually about two weeks later.`}
            </p>
          </details>
          <details className="group rounded-2xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm open:bg-card/80 transition-all duration-300 shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground text-lg group-open:text-primary transition-colors">
              <span className="pr-6">{`How long do crowns and bridges usually last?`}</span>
              <span className="shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary">
                <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
              {`With excellent oral hygiene at home and regular professional dental checkups, high-quality ceramic crowns and bridges can last 10 to 15 years, and very often much longer. They do not naturally decay, but the natural tooth structure holding them still can, which is why brushing is vital!`}
            </p>
          </details>
          <details className="group rounded-2xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm open:bg-card/80 transition-all duration-300 shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground text-lg group-open:text-primary transition-colors">
              <span className="pr-6">{`Does getting a crown hurt?`}</span>
              <span className="shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary">
                <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
              {`Getting a crown is a very routine procedure that is performed under profound local anesthesia. Your tooth and the surrounding gums will be completely numb, making the experience very similar to getting a standard filling in terms of absolute comfort.`}
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

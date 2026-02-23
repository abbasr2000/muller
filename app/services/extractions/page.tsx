import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Tooth Extractions | St. John's NL | Dr. Muller Dentistry",
  description: "Safe, painless, and highly comfortable extractions when a tooth simply cannot be saved.",
  keywords: ["Tooth Extractions St. John's", "dentist Newfoundland", "Dr. Muller Dentistry", "dental Tooth Extractions"],
  alternates: {
    canonical: "/services/extractions",
  },
  openGraph: {
    title: "Tooth Extractions | Dr. Muller Dentistry",
    description: "Safe, painless, and highly comfortable extractions when a tooth simply cannot be saved.",
    url: "https://drmullerdentistry.com/services/extractions",
    siteName: "Dr. Muller Dentistry",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/services-hero.png",
        width: 1200,
        height: 630,
        alt: "Tooth Extractions at Dr. Muller Dentistry",
      }
    ],
  },
};

export default function ServicePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{"@type": "Question", "name": "What exactly should I expect during a typical tooth extraction?", "acceptedAnswer": {"@type": "Answer", "text": "Before doing anything, we will test the area to ensure it is profoundly numb. You will feel a sensation of firm pressure or pushing during the procedure, but you should absolutely not feel any sharp or pinching pain. Due to our advanced techniques, the extraction itself is often surprisingly rapid."}}, {"@type": "Question", "name": "Do you handle the removal of wisdom teeth?", "acceptedAnswer": {"@type": "Answer", "text": "Yes! We routinely handle many simple and moderately complex wisdom tooth extractions right here in our St. John's office. If your specific case is evaluated via 3D scan to be exceptionally complex or deeply impacted near a major nerve, we will seamlessly refer you to a trusted local oral surgeon specialist."}}, {"@type": "Question", "name": "How long is the typical recovery period?", "acceptedAnswer": {"@type": "Answer", "text": "The initial soft-tissue healing and clotting usually takes about one week, though the underlying bone will take a few months to fully solidify. Before you leave, we will provide you with highly detailed post-operative instructions on what to eat and how to clean the area to ensure a smooth recovery and help you avoid any complications like dry socket."}}]
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
        "name": "Tooth Extractions",
        "item": "https://drmullerdentistry.com/services/extractions"
      }
    ]
  };

  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Tooth Extractions",
    "description": "Safe, painless, and highly comfortable extractions when a tooth simply cannot be saved.",
    "url": "https://drmullerdentistry.com/services/extractions",
    "procedureType": "https://health-lifesci.schema.org/NoninvasiveProcedure",
    "body" : {
      "@type": "AnatomicalStructure",
      "name": "Mouth"
    },
    "availableService": {
      "@type": "MedicalTherapy",
      "name": "Tooth Extractions",
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
            <span className="text-foreground font-medium">Tooth Extractions</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
            Tooth Extractions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed text-balance">
            Safe, painless, and highly comfortable extractions when a tooth simply cannot be saved.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
        <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed">
          <p className="mb-6">At Dr. Muller Dentistry, our primary and ultimate goal is always to save your natural teeth whenever medically possible. However, there are unfortunate situations where a tooth extraction becomes the best—or the only—option to eliminate severe pain and protect your overall systemic and oral health. </p>
          <p className="mb-6">Extractions are commonly necessary when dealing with extreme, unrestorable tooth decay, highly advanced periodontal (gum) disease that has destroyed the supporting bone, severe physical trauma, or problematic wisdom teeth that are heavily impacted. Leaving a severely infected tooth in the mouth can lead to dangerous abscesses and swelling that can affect your entire body.</p>
          <p className="mb-6">We deeply understand that the mere idea of having a tooth 'pulled' can cause significant dental anxiety. Dr. Muller specializes in utilizing incredibly precise, atraumatic techniques combined with modern, profound local anesthesia to ensure you remain completely numb and entirely comfortable throughout the entire procedure. Our focus is on making the experience as smooth and stress-free as possible.</p>
        </div>

        <div className="my-16 grid gap-6 sm:grid-cols-2">
          <div className="flex items-start gap-3 p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:border-primary/20">
            <div className="mt-1 rounded-full bg-primary/10 p-1 shrink-0">
              <ArrowRight className="size-4 text-primary" />
            </div>
            <p className="font-medium text-foreground m-0 leading-snug">{`Immediately eliminates severe, throbbing pain from damaged teeth`}</p>
          </div>
          <div className="flex items-start gap-3 p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:border-primary/20">
            <div className="mt-1 rounded-full bg-primary/10 p-1 shrink-0">
              <ArrowRight className="size-4 text-primary" />
            </div>
            <p className="font-medium text-foreground m-0 leading-snug">{`Stops and prevents the dangerous spread of infection to other teeth or your bloodstream`}</p>
          </div>
          <div className="flex items-start gap-3 p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:border-primary/20">
            <div className="mt-1 rounded-full bg-primary/10 p-1 shrink-0">
              <ArrowRight className="size-4 text-primary" />
            </div>
            <p className="font-medium text-foreground m-0 leading-snug">{`Relieves painful crowding issues and impacted wisdom teeth`}</p>
          </div>
          <div className="flex items-start gap-3 p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:border-primary/20">
            <div className="mt-1 rounded-full bg-primary/10 p-1 shrink-0">
              <ArrowRight className="size-4 text-primary" />
            </div>
            <p className="font-medium text-foreground m-0 leading-snug">{`Creates necessary space for vital orthodontic treatment or future implants`}</p>
          </div>

        </div>

        <h2 className="text-3xl font-extrabold text-foreground mt-20 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto max-w-3xl space-y-4">
          <details className="group rounded-2xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm open:bg-card/80 transition-all duration-300 shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground text-lg group-open:text-primary transition-colors">
              <span className="pr-6">{`What exactly should I expect during a typical tooth extraction?`}</span>
              <span className="shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary">
                <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
              {`Before doing anything, we will test the area to ensure it is profoundly numb. You will feel a sensation of firm pressure or pushing during the procedure, but you should absolutely not feel any sharp or pinching pain. Due to our advanced techniques, the extraction itself is often surprisingly rapid.`}
            </p>
          </details>
          <details className="group rounded-2xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm open:bg-card/80 transition-all duration-300 shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground text-lg group-open:text-primary transition-colors">
              <span className="pr-6">{`Do you handle the removal of wisdom teeth?`}</span>
              <span className="shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary">
                <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
              {`Yes! We routinely handle many simple and moderately complex wisdom tooth extractions right here in our St. John's office. If your specific case is evaluated via 3D scan to be exceptionally complex or deeply impacted near a major nerve, we will seamlessly refer you to a trusted local oral surgeon specialist.`}
            </p>
          </details>
          <details className="group rounded-2xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm open:bg-card/80 transition-all duration-300 shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground text-lg group-open:text-primary transition-colors">
              <span className="pr-6">{`How long is the typical recovery period?`}</span>
              <span className="shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary">
                <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
              {`The initial soft-tissue healing and clotting usually takes about one week, though the underlying bone will take a few months to fully solidify. Before you leave, we will provide you with highly detailed post-operative instructions on what to eat and how to clean the area to ensure a smooth recovery and help you avoid any complications like dry socket.`}
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

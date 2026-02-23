import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Emergency Dental Care | St. John's NL | Dr. Muller Dentistry",
  description: "Immediate, same-day emergency dental care in St. John's for severe pain, trauma, and urgent issues.",
  keywords: ["Emergency Dental Care St. John's", "dentist Newfoundland", "Dr. Muller Dentistry", "dental Emergency Dental Care"],
  alternates: {
    canonical: "/services/emergency-dental",
  },
  openGraph: {
    title: "Emergency Dental Care | Dr. Muller Dentistry",
    description: "Immediate, same-day emergency dental care in St. John's for severe pain, trauma, and urgent issues.",
    url: "https://drmullerdentistry.com/services/emergency-dental",
    siteName: "Dr. Muller Dentistry",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/services-hero.png",
        width: 1200,
        height: 630,
        alt: "Emergency Dental Care at Dr. Muller Dentistry",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emergency Dental Care | Dr. Muller Dentistry",
    description: "Immediate, same-day emergency dental care in St. John's for severe pain, trauma, and urgent issues.",
    images: ["/services-hero.png"],
  },
};

export default function ServicePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{"@type": "Question", "name": "What exactly qualifies as a true 'Dental Emergency'?", "acceptedAnswer": {"@type": "Answer", "text": "A true dental emergency includes severe, unmanageable toothaches, a tooth that has been knocked entirely out of the mouth, a cracked or badly broken tooth accompanied by sharp pain, significant and uncontrollable bleeding from the gums, or large facial swelling. Extreme swelling that affects breathing or swallowing is a critical medical emergency and warrants an immediate trip to the nearest hospital ER."}}, {"@type": "Question", "name": "What should I do immediately if my tooth gets knocked completely out?", "acceptedAnswer": {"@type": "Answer", "text": "Time is highly critical! Handle the tooth only by the crown (the top part), NEVER the root. Do not scrub it. Gently rinse it with water if dirty, and try your best to temporarily place it back into the socket. If that is impossible, keep it fully submerged in a small cup of milk or your own saliva, and rush to see us within 60 minutes for the highest chance of saving it."}}, {"@type": "Question", "name": "Should I go to the hospital emergency room for my toothache?", "acceptedAnswer": {"@type": "Answer", "text": "In the vast majority of standard toothache cases, a hospital ER can only provide pain medication or temporary antibiotics; they do not have the tools to actually fix the tooth. You must see a dentist to properly resolve the underlying root cause. However, if your dental infection is causing severe, rapid swelling that impacts your ability to breathe, swallow, or see, you MUST go to the hospital ER immediately."}}]
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
        "name": "Emergency Dental Care",
        "item": "https://drmullerdentistry.com/services/emergency-dental"
      }
    ]
  };

  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Emergency Dental Care",
    "description": "Immediate, same-day emergency dental care in St. John's for severe pain, trauma, and urgent issues.",
    "url": "https://drmullerdentistry.com/services/emergency-dental",
    "procedureType": "https://health-lifesci.schema.org/NoninvasiveProcedure",
    "body" : {
      "@type": "AnatomicalStructure",
      "name": "Mouth"
    },
    "availableService": {
      "@type": "MedicalTherapy",
      "name": "Emergency Dental Care",
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
            <span className="text-foreground font-medium">Emergency Dental Care</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
            Emergency Dental Care
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed text-balance">
            Immediate, same-day emergency dental care in St. John's for severe pain, trauma, and urgent issues.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
        <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed">
          <p className="mb-6">We know firsthand that a sudden dental emergency can be an incredibly painful, alarming, and highly stressful experience. Whether you’ve woken up with an excruciating, throbbing toothache or suffered an unexpected physical trauma that cracked a tooth, getting professional help rapidly is critical.</p>
          <p className="mb-6">At Dr. Muller Dentistry, we prioritize dental emergencies. We actively build buffer time into our daily St. John's schedule specifically so we can do our absolute best to accommodate urgent, severe cases and provide same-day palliative care to get you swiftly out of pain.</p>
          <p className="mb-6">Our clinic is fully equipped with advanced diagnostic tools to instantly determine the exact root cause of your pain. Dr. Muller will quickly assess the damage, numb the area with profound local anesthesia to provide immediate relief, and immediately discuss the most effective treatment plan with you to permanently resolve the issue.</p>
        </div>

        <div className="my-16 grid gap-6 sm:grid-cols-2">
          <div className="flex items-start gap-3 p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:border-primary/20">
            <div className="mt-1 rounded-full bg-primary/10 p-1 shrink-0">
              <ArrowRight className="size-4 text-primary" />
            </div>
            <p className="font-medium text-foreground m-0 leading-snug">{`Rapid, incredible relief from severe, throbbing dental pain`}</p>
          </div>
          <div className="flex items-start gap-3 p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:border-primary/20">
            <div className="mt-1 rounded-full bg-primary/10 p-1 shrink-0">
              <ArrowRight className="size-4 text-primary" />
            </div>
            <p className="font-medium text-foreground m-0 leading-snug">{`Immediate professional intervention to save knocked-out or badly fractured teeth`}</p>
          </div>
          <div className="flex items-start gap-3 p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:border-primary/20">
            <div className="mt-1 rounded-full bg-primary/10 p-1 shrink-0">
              <ArrowRight className="size-4 text-primary" />
            </div>
            <p className="font-medium text-foreground m-0 leading-snug">{`Prevents dangerous underlying dental infections from spreading to the bloodstream`}</p>
          </div>
          <div className="flex items-start gap-3 p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:border-primary/20">
            <div className="mt-1 rounded-full bg-primary/10 p-1 shrink-0">
              <ArrowRight className="size-4 text-primary" />
            </div>
            <p className="font-medium text-foreground m-0 leading-snug">{`Restores your profound peace of mind through rapid, expert diagnosis`}</p>
          </div>

        </div>

        <h2 className="text-3xl font-extrabold text-foreground mt-20 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto max-w-3xl space-y-4">
          <details className="group rounded-2xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm open:bg-card/80 transition-all duration-300 shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground text-lg group-open:text-primary transition-colors">
              <span className="pr-6">{`What exactly qualifies as a true 'Dental Emergency'?`}</span>
              <span className="shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary">
                <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
              {`A true dental emergency includes severe, unmanageable toothaches, a tooth that has been knocked entirely out of the mouth, a cracked or badly broken tooth accompanied by sharp pain, significant and uncontrollable bleeding from the gums, or large facial swelling. Extreme swelling that affects breathing or swallowing is a critical medical emergency and warrants an immediate trip to the nearest hospital ER.`}
            </p>
          </details>
          <details className="group rounded-2xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm open:bg-card/80 transition-all duration-300 shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground text-lg group-open:text-primary transition-colors">
              <span className="pr-6">{`What should I do immediately if my tooth gets knocked completely out?`}</span>
              <span className="shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary">
                <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
              {`Time is highly critical! Handle the tooth only by the crown (the top part), NEVER the root. Do not scrub it. Gently rinse it with water if dirty, and try your best to temporarily place it back into the socket. If that is impossible, keep it fully submerged in a small cup of milk or your own saliva, and rush to see us within 60 minutes for the highest chance of saving it.`}
            </p>
          </details>
          <details className="group rounded-2xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm open:bg-card/80 transition-all duration-300 shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground text-lg group-open:text-primary transition-colors">
              <span className="pr-6">{`Should I go to the hospital emergency room for my toothache?`}</span>
              <span className="shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary">
                <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
              {`In the vast majority of standard toothache cases, a hospital ER can only provide pain medication or temporary antibiotics; they do not have the tools to actually fix the tooth. You must see a dentist to properly resolve the underlying root cause. However, if your dental infection is causing severe, rapid swelling that impacts your ability to breathe, swallow, or see, you MUST go to the hospital ER immediately.`}
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

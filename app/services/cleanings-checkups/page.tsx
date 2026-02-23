import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Cleanings & Checkups | St. John's NL | Dr. Muller Dentistry",
  description: "Professional cleanings and comprehensive dental exams to keep your smile healthy.",
  keywords: ["Cleanings & Checkups St. John's", "dentist Newfoundland", "Dr. Muller Dentistry", "dental Cleanings & Checkups"],
  alternates: {
    canonical: "/services/cleanings-checkups",
  },
  openGraph: {
    title: "Cleanings & Checkups | Dr. Muller Dentistry",
    description: "Professional cleanings and comprehensive dental exams to keep your smile healthy.",
    url: "https://drmullerdentistry.com/services/cleanings-checkups",
    siteName: "Dr. Muller Dentistry",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/services-hero.png",
        width: 1200,
        height: 630,
        alt: "Cleanings & Checkups at Dr. Muller Dentistry",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cleanings & Checkups | Dr. Muller Dentistry",
    description: "Professional cleanings and comprehensive dental exams to keep your smile healthy.",
    images: ["/services-hero.png"],
  },
};

export default function ServicePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{"@type": "Question", "name": "How often should I get a dental cleaning?", "acceptedAnswer": {"@type": "Answer", "text": "For a majority of our patients, we strongly recommend a professional cleaning and checkup every 6 months. However, if you have a history of active gum disease, orthodontic braces, or other specific medical conditions, we may suggest visiting every 3 to 4 months for optimal care."}}, {"@type": "Question", "name": "Does a dental cleaning hurt?", "acceptedAnswer": {"@type": "Answer", "text": "A routine dental cleaning is typically painless and very well-tolerated. If you have highly sensitive teeth, sensitive gums, or dental anxiety, please let our team know ahead of time! We can apply a numbing gel or take extra gentle care to ensure you are 100% comfortable."}}, {"@type": "Question", "name": "Will X-rays be taken during my checkup?", "acceptedAnswer": {"@type": "Answer", "text": "We generally recommend updating your diagnostic dental X-rays once a year to check for hidden decay between tight teeth or issues deep below the gumline. If you are a brand new patient, we will likely take a full set of X-rays to establish a comprehensive baseline of your oral health."}}]
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
        "name": "Cleanings & Checkups",
        "item": "https://drmullerdentistry.com/services/cleanings-checkups"
      }
    ]
  };

  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Cleanings & Checkups",
    "description": "Professional cleanings and comprehensive dental exams to keep your smile healthy.",
    "url": "https://drmullerdentistry.com/services/cleanings-checkups",
    "procedureType": "https://health-lifesci.schema.org/NoninvasiveProcedure",
    "body" : {
      "@type": "AnatomicalStructure",
      "name": "Mouth"
    },
    "availableService": {
      "@type": "MedicalTherapy",
      "name": "Cleanings & Checkups",
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
            <span className="text-foreground font-medium">Cleanings & Checkups</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
            Cleanings & Checkups
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed text-balance">
            Professional cleanings and comprehensive dental exams to keep your smile healthy.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
        <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed">
          <p className="mb-6">Regular dental cleanings and checkups are the absolute foundation of a healthy smile. At Dr. Muller Dentistry in St. John's, we believe that preventive care is the most effective way to protect your long-term oral health and avoid complex dental issues in the future.</p>
          <p className="mb-6">Our thorough, gentle cleanings are designed to remove stubborn plaque and calculus (tartar) buildup that regular brushing and flossing at home simply cannot reach. This process is crucial for preventing tooth decay, halting the early stages of gum disease (gingivitis), and keeping your breath fresh. Our highly trained dental hygienists use specialized tools to carefully clean all surfaces of your teeth, including slightly beneath the gumline. We finish by polishing your teeth, removing surface stains from coffee, tea, and food to leave your smile bright and feeling completely refreshed.</p>
          <p className="mb-6">Following your cleaning, Dr. Muller will perform a comprehensive dental examination. This includes a meticulous check of each tooth for signs of decay, an assessment of your periodontium (gums and supporting bone), and a routine oral cancer screening. When necessary, we utilize state-of-the-art digital X-rays to look beneath the surface and catch any potential issues before they become major problems. We pride ourselves on taking the time to explain our findings clearly and transparently, answering any questions you may have without rushing you.</p>
        </div>

        <div className="my-16 grid gap-6 sm:grid-cols-2">
          <div className="flex items-start gap-3 p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:border-primary/20">
            <div className="mt-1 rounded-full bg-primary/10 p-1 shrink-0">
              <ArrowRight className="size-4 text-primary" />
            </div>
            <p className="font-medium text-foreground m-0 leading-snug">{`Prevents tooth decay and cavities actively`}</p>
          </div>
          <div className="flex items-start gap-3 p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:border-primary/20">
            <div className="mt-1 rounded-full bg-primary/10 p-1 shrink-0">
              <ArrowRight className="size-4 text-primary" />
            </div>
            <p className="font-medium text-foreground m-0 leading-snug">{`Helps stop and reverse early gum disease (gingivitis)`}</p>
          </div>
          <div className="flex items-start gap-3 p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:border-primary/20">
            <div className="mt-1 rounded-full bg-primary/10 p-1 shrink-0">
              <ArrowRight className="size-4 text-primary" />
            </div>
            <p className="font-medium text-foreground m-0 leading-snug">{`Brightens your overall smile by removing deep surface stains`}</p>
          </div>
          <div className="flex items-start gap-3 p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:border-primary/20">
            <div className="mt-1 rounded-full bg-primary/10 p-1 shrink-0">
              <ArrowRight className="size-4 text-primary" />
            </div>
            <p className="font-medium text-foreground m-0 leading-snug">{`Ensures early detection of oral health issues and cancers`}</p>
          </div>

        </div>

        <h2 className="text-3xl font-extrabold text-foreground mt-20 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto max-w-3xl space-y-4">
          <details className="group rounded-2xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm open:bg-card/80 transition-all duration-300 shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground text-lg group-open:text-primary transition-colors">
              <span className="pr-6">{`How often should I get a dental cleaning?`}</span>
              <span className="shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary">
                <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
              {`For a majority of our patients, we strongly recommend a professional cleaning and checkup every 6 months. However, if you have a history of active gum disease, orthodontic braces, or other specific medical conditions, we may suggest visiting every 3 to 4 months for optimal care.`}
            </p>
          </details>
          <details className="group rounded-2xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm open:bg-card/80 transition-all duration-300 shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground text-lg group-open:text-primary transition-colors">
              <span className="pr-6">{`Does a dental cleaning hurt?`}</span>
              <span className="shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary">
                <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
              {`A routine dental cleaning is typically painless and very well-tolerated. If you have highly sensitive teeth, sensitive gums, or dental anxiety, please let our team know ahead of time! We can apply a numbing gel or take extra gentle care to ensure you are 100% comfortable.`}
            </p>
          </details>
          <details className="group rounded-2xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm open:bg-card/80 transition-all duration-300 shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground text-lg group-open:text-primary transition-colors">
              <span className="pr-6">{`Will X-rays be taken during my checkup?`}</span>
              <span className="shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary">
                <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
              {`We generally recommend updating your diagnostic dental X-rays once a year to check for hidden decay between tight teeth or issues deep below the gumline. If you are a brand new patient, we will likely take a full set of X-rays to establish a comprehensive baseline of your oral health.`}
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

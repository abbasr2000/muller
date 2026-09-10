import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Oral Sedation Dentistry | St. John's NL | Dr. Muller Dentistry",
  description:
    "Relaxing oral sedation dentistry in St. John's, Newfoundland. Stay calm and comfortable during tooth extractions, wisdom teeth removal, and root canal therapy with Dr. Muller Dentistry.",
  keywords: [
    "oral sedation St. John's",
    "sedation dentistry Newfoundland",
    "sedation for wisdom teeth St. John's",
    "sedation root canal NL",
    "anxiety-free dentist St. John's",
  ],
  alternates: {
    canonical: "/services/oral-sedation",
  },
  openGraph: {
    title: "Oral Sedation Dentistry | Dr. Muller Dentistry",
    description:
      "Relaxing oral sedation to keep you calm and comfortable during extractions, wisdom teeth removal, and root canal therapy in St. John's, Newfoundland.",
    url: "https://drmullerdentistry.com/services/oral-sedation",
    siteName: "Dr. Muller Dentistry",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/services-hero.png",
        width: 1200,
        height: 630,
        alt: "Oral Sedation Dentistry at Dr. Muller Dentistry",
      },
    ],
  },
};

export default function OralSedationPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is oral sedation dentistry?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oral sedation uses a prescribed medication, taken by mouth before your appointment, to help you feel deeply relaxed and calm during treatment. You remain awake and able to respond, but many patients feel drowsy and remember little of the procedure.",
        },
      },
      {
        "@type": "Question",
        name: "Can I have sedation for wisdom teeth or extractions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Oral sedation is a popular option for tooth extractions and wisdom teeth removal. It pairs with our local anaesthesia to keep you comfortable and calm throughout the procedure.",
        },
      },
      {
        "@type": "Question",
        name: "Is oral sedation available for root canals?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Oral sedation is well suited to root canal therapy, helping anxious patients stay relaxed while we save the tooth. It is combined with local anaesthesia so the area is fully numb.",
        },
      },
      {
        "@type": "Question",
        name: "Will I need someone to drive me home after sedation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Because oral sedation can leave you drowsy for several hours, you will need a responsible adult to drive you to and from your appointment and stay with you afterward. We will review all instructions with you beforehand.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://drmullerdentistry.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://drmullerdentistry.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Oral Sedation",
        item: "https://drmullerdentistry.com/services/oral-sedation",
      },
    ],
  };

  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Oral Sedation Dentistry",
    description:
      "Oral sedation to keep patients calm and comfortable during extractions, wisdom teeth removal, and root canal therapy.",
    url: "https://drmullerdentistry.com/services/oral-sedation",
    procedureType: "https://health-lifesci.schema.org/NoninvasiveProcedure",
    body: {
      "@type": "AnatomicalStructure",
      name: "Mouth",
    },
    availableService: {
      "@type": "MedicalTherapy",
      name: "Oral Sedation Dentistry",
      provider: {
        "@type": "Dentist",
        "@id": "https://drmullerdentistry.com/#dentist",
      },
    },
  };

  const useCases = [
    {
      title: "Tooth Extractions",
      text: "Stay calm and comfortable while a damaged or infected tooth is removed.",
      href: "/services/extractions",
    },
    {
      title: "Wisdom Teeth Removal",
      text: "Oral sedation helps ease anxiety during the removal of impacted or crowded wisdom teeth.",
      href: "/services/extractions",
    },
    {
      title: "Root Canal Therapy",
      text: "Relax through your root canal while we save your natural tooth and relieve pain.",
      href: "/services/root-canal",
    },
  ];

  const benefits = [
    "Eases dental anxiety and fear so you can get the care you need",
    "Keeps you deeply relaxed and comfortable during longer procedures",
    "Works alongside local anaesthesia to keep the area fully numb",
    "Time often seems to pass quickly — many patients remember little of the visit",
    "Helps sensitive patients tolerate extractions, wisdom teeth, and root canals",
    "Taken by mouth — no needles required to begin sedation",
  ];

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
            <Link href="/services" className="hover:text-primary transition-colors">
              Services
            </Link>
            <ChevronRight className="size-4" aria-hidden />
            <span className="text-foreground font-medium">Oral Sedation</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
            Oral Sedation Dentistry
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed text-balance">
            Relaxing oral sedation to keep you calm and comfortable during
            extractions, wisdom teeth removal, and root canal therapy — so anxiety
            never stands between you and a healthy smile.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
        <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed">
          <p className="mb-6">
            For many people, dental anxiety is the biggest barrier to getting the
            treatment they need. At Dr. Muller Dentistry, oral sedation is a
            simple, safe way to help you feel calm and at ease so you can get
            comfortable, effective care in St. John&apos;s.
          </p>
          <p className="mb-6">
            Oral sedation involves taking a prescribed medication by mouth before
            your appointment. You stay awake and able to respond, but you&apos;ll
            feel deeply relaxed — and many patients remember very little of the
            procedure afterward. It works alongside our local anaesthesia, which
            keeps the treatment area completely numb.
          </p>
          <p className="mb-6">
            It&apos;s an especially popular option for procedures that take a
            little longer or that make nervous patients uneasy, including tooth
            extractions, wisdom teeth removal, and root canal therapy.
          </p>
        </div>

        <h2 className="text-3xl font-extrabold text-foreground mt-16 mb-10 text-center">
          When Oral Sedation Helps Most
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {useCases.map((useCase) => (
            <Link
              key={useCase.title}
              href={useCase.href}
              className="group flex flex-col rounded-3xl border border-primary/10 bg-card/50 p-8 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {useCase.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {useCase.text}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Learn more
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" aria-hidden />
              </span>
            </Link>
          ))}
        </div>

        <div className="my-16 grid gap-6 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-start gap-3 p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:border-primary/20"
            >
              <div className="mt-1 rounded-full bg-primary/10 p-1 shrink-0">
                <ArrowRight className="size-4 text-primary" aria-hidden />
              </div>
              <p className="font-medium text-foreground m-0 leading-snug">{benefit}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
          <h2 className="text-xl font-bold text-foreground">Is oral sedation safe?</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Oral sedation has a long track record of safety when provided by a
            trained dental team. We review your medical history and medications
            first, monitor you throughout your visit, and give you clear
            instructions for before and after. Because the effects can linger for
            several hours, you&apos;ll need a responsible adult to drive you home
            and stay with you afterward.
          </p>
        </div>

        <h2 className="text-3xl font-extrabold text-foreground mt-20 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto max-w-3xl space-y-4">
          {[
            {
              q: "What is oral sedation dentistry?",
              a: "Oral sedation uses a prescribed medication, taken by mouth before your appointment, to help you feel deeply relaxed and calm during treatment. You remain awake and able to respond, but many patients feel drowsy and remember little of the procedure.",
            },
            {
              q: "Can I have sedation for wisdom teeth or extractions?",
              a: "Yes. Oral sedation is a popular option for tooth extractions and wisdom teeth removal. It pairs with our local anaesthesia to keep you comfortable and calm throughout the procedure.",
            },
            {
              q: "Is oral sedation available for root canals?",
              a: "Absolutely. Oral sedation is well suited to root canal therapy, helping anxious patients stay relaxed while we save the tooth. It is combined with local anaesthesia so the area is fully numb.",
            },
            {
              q: "Will I need someone to drive me home after sedation?",
              a: "Yes. Because oral sedation can leave you drowsy for several hours, you will need a responsible adult to drive you to and from your appointment and stay with you afterward. We will review all instructions with you beforehand.",
            },
          ].map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm open:bg-card/80 transition-all duration-300 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground text-lg group-open:text-primary transition-colors">
                <span className="pr-6">{item.q}</span>
                <span className="shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary">
                  <ChevronRight className="size-5 rotate-90" aria-hidden />
                </span>
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 pb-32">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/20 bg-background/50 p-10 sm:p-16 text-center shadow-2xl backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5 pointer-events-none" />
          <h2 className="relative z-10 text-3xl font-extrabold text-foreground sm:text-4xl">
            Nervous about your next visit?
          </h2>
          <p className="relative z-10 mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Ask us about oral sedation for your extraction, wisdom teeth, or root
            canal. We&apos;ll help you feel calm, comfortable, and cared for.
          </p>
          <div className="relative z-10 mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20">
              <Link href="/book">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

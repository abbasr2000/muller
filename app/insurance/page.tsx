import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  CreditCard,
  ShieldCheck,
  FileCheck,
  HeartHandshake,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Insurance & Direct Billing | CDCP | Dr. Muller Dentistry St. John's NL",
  description:
    "Dr. Muller Dentistry offers direct billing to all major insurance providers and the Canadian Dental Care Plan (CDCP) in St. John's, Newfoundland. Learn about CDCP eligibility and how to apply.",
  alternates: {
    canonical: "/insurance",
  },
  keywords: [
    "direct billing dentist St. John's",
    "CDCP dentist Newfoundland",
    "Canadian Dental Care Plan St. John's",
    "dental insurance St. John's NL",
    "CDCP dental provider Newfoundland",
  ],
  openGraph: {
    title: "Insurance & Direct Billing | CDCP | Dr. Muller Dentistry",
    description:
      "Direct billing to all major insurance providers and the Canadian Dental Care Plan (CDCP) in St. John's, Newfoundland.",
    url: "https://drmullerdentistry.com/insurance",
    siteName: "Dr. Muller Dentistry",
    locale: "en_CA",
    type: "website",
  },
};

const CDCP_APPLY_URL =
  "https://www.canada.ca/en/services/benefits/dental/dental-care-plan/apply.html";
const CDCP_INFO_URL =
  "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html";

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
      name: "Insurance & Direct Billing",
      item: "https://drmullerdentistry.com/insurance",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you offer direct billing to insurance in St. John's?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Dr. Muller Dentistry offers direct billing to all major dental insurance providers. In most cases we submit your claim electronically so you only pay any remaining balance after your plan pays its portion.",
      },
    },
    {
      "@type": "Question",
      name: "Do you accept the Canadian Dental Care Plan (CDCP)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We are a participating provider for the Canadian Dental Care Plan (CDCP) and bill Sun Life directly for eligible patients. Bring your CDCP member card to your appointment.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for the Canadian Dental Care Plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can apply online through the Government of Canada website at canada.ca. Eligibility is based on your adjusted family net income (under $90,000), being a Canadian resident for tax purposes, having filed your tax return, and not having access to private dental insurance.",
      },
    },
  ],
};

const billingHighlights = [
  {
    icon: CreditCard,
    title: "Direct billing to all insurers",
    text: "We submit claims electronically to all major providers, so you usually pay only the portion your plan does not cover.",
  },
  {
    icon: ShieldCheck,
    title: "CDCP participating provider",
    text: "We accept the Canadian Dental Care Plan and bill Sun Life directly for eligible patients.",
  },
  {
    icon: FileCheck,
    title: "Clear, up-front estimates",
    text: "Before treatment, we explain what your plan is expected to cover and what your out-of-pocket cost will be.",
  },
  {
    icon: HeartHandshake,
    title: "Help with the paperwork",
    text: "Our team is happy to help you understand your coverage and get the most from your benefits.",
  },
];

export default function InsurancePage() {
  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative overflow-hidden border-b border-primary/10 bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-16 md:py-24">
        <div className="absolute top-0 right-0 -z-10 size-[500px] rounded-full bg-primary/10 blur-[130px]" />
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="size-4" aria-hidden />
            <span className="text-foreground font-medium">Insurance &amp; Direct Billing</span>
          </div>
          <p className="mb-5 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Affordable care made simple
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
            Insurance &amp; Direct Billing
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed text-balance">
            We offer direct billing to all major insurance providers and proudly
            accept the Canadian Dental Care Plan (CDCP) — so quality dental care
            in St. John&apos;s stays accessible and stress-free.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20">
              <Link href="/book">Book an Appointment</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <a href={CDCP_APPLY_URL} target="_blank" rel="noopener noreferrer">
                Apply for CDCP
                <ExternalLink className="size-4" aria-hidden />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Direct Billing on All Insurances
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Dr. Muller Dentistry bills your insurance company directly whenever
            possible. That means less paperwork for you and no waiting to be
            reimbursed — in most cases you simply pay any remaining balance after
            your plan pays its share.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {billingHighlights.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-2xl border border-primary/10 bg-card/50 p-6 shadow-sm backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <item.icon className="size-6" aria-hidden />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-1 text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="cdcp"
        className="scroll-mt-24 border-y border-primary/10 bg-secondary/20 py-16 md:py-24"
      >
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Government of Canada program
              </p>
              <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
                The Canadian Dental Care Plan (CDCP)
              </h2>
              <p className="mt-5 max-w-3xl text-lg text-muted-foreground leading-relaxed">
                The Canadian Dental Care Plan helps ease the cost of dental care
                for eligible Canadian residents who do not have access to private
                dental insurance. It is administered by Sun Life, and Dr. Muller
                Dentistry is a participating provider — we bill Sun Life directly
                so eligible patients can focus on their smile, not the invoice.
              </p>

              <h3 className="mt-8 text-xl font-bold text-foreground">
                Who is eligible?
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                You may qualify for the CDCP if you:
              </p>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                {[
                  "Do not have access to private dental insurance",
                  "Have an adjusted family net income of less than $90,000 per year",
                  "Are a Canadian resident for tax purposes",
                  "Have filed your tax return for the previous year",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 rounded-full bg-primary/10 p-1">
                      <ArrowRight className="size-4 text-primary" aria-hidden />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Final eligibility and coverage details are determined by the
                Government of Canada and Sun Life. Amounts and criteria may
                change — always confirm the latest details on the official
                Government of Canada website.
              </p>
            </div>

            <div className="rounded-[2rem] border border-primary/20 bg-card/70 p-8 shadow-xl backdrop-blur-xl">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <ShieldCheck className="size-7" aria-hidden />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-foreground">
                How to apply for the CDCP
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Applying is free and takes just a few minutes online through the
                official Government of Canada website.
              </p>
              <ol className="mt-5 space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    1
                  </span>
                  <span>Check your eligibility on the Government of Canada website.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    2
                  </span>
                  <span>Apply online and wait for your welcome package from Sun Life.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    3
                  </span>
                  <span>Bring your CDCP member card to your appointment — we handle the rest.</span>
                </li>
              </ol>
              <div className="mt-8 flex flex-col gap-3">
                <Button asChild size="lg" className="rounded-full shadow-lg shadow-primary/20">
                  <a href={CDCP_APPLY_URL} target="_blank" rel="noopener noreferrer">
                    Apply for the CDCP
                    <ExternalLink className="size-4" aria-hidden />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <a href={CDCP_INFO_URL} target="_blank" rel="noopener noreferrer">
                    Learn more about the CDCP
                    <ExternalLink className="size-4" aria-hidden />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-3xl px-4 py-16 md:py-24">
        <h2 className="text-3xl font-extrabold text-foreground text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            {
              q: "Do you offer direct billing to insurance in St. John's?",
              a: "Yes. We offer direct billing to all major dental insurance providers. In most cases we submit your claim electronically so you only pay any remaining balance after your plan pays its portion.",
            },
            {
              q: "Do you accept the Canadian Dental Care Plan (CDCP)?",
              a: "Yes. We are a participating provider for the CDCP and bill Sun Life directly for eligible patients. Just bring your CDCP member card to your appointment.",
            },
            {
              q: "How do I apply for the Canadian Dental Care Plan?",
              a: "You can apply online through the Government of Canada website. Eligibility is based on your adjusted family net income (under $90,000), being a Canadian resident for tax purposes, having filed your tax return, and not having access to private dental insurance.",
            },
            {
              q: "What if I'm not sure what my plan covers?",
              a: "No problem — our team is happy to help you understand your coverage and provide a clear estimate before any treatment begins. Call or text us anytime.",
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

      <section className="container mx-auto max-w-7xl px-4 pb-24">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/20 bg-background/50 p-10 sm:p-16 text-center shadow-2xl backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5 pointer-events-none" />
          <h2 className="relative z-10 text-3xl font-extrabold text-foreground sm:text-4xl">
            Questions about coverage or CDCP?
          </h2>
          <p className="relative z-10 mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We&apos;re happy to help you make the most of your benefits. Book an
            appointment or reach out and we&apos;ll walk you through it.
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

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "General Dentistry | St. John's NL | Dr. Muller Dentistry",
  description: "Complete, comprehensive exams, advanced preventive care, and routine treatments for the entire family.",
  keywords: ["General Dentistry St. John's", "dentist Newfoundland", "Dr. Muller Dentistry"],
};

export default function ServicePage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden border-b border-primary/5 bg-gradient-to-br from-background via-muted/30 to-background py-16 md:py-24">
        <div className="absolute top-0 right-0 -z-10 size-[500px] rounded-full bg-primary/10 blur-[130px]" />
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <ChevronRight className="size-4" />
            <span className="text-foreground font-medium">General Dentistry</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
            General Dentistry
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed text-balance">
            Complete, comprehensive exams, advanced preventive care, and routine treatments for the entire family.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
        <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed">
          <p className="mb-6">General dentistry is the absolute cornerstone of maintaining a healthy, beautiful, and pain-free smile for a lifetime. As your dedicated primary dental care provider in St. John's, our comprehensive approach focuses heavily on prevention, highly accurate diagnostic imaging, and utilizing conservative treatments for patients of every age.</p>
          <p className="mb-6">We firmly believe that preventing a dental problem is vastly superior to fixing one. By establishing a strong, routine relationship with our clinic, we can continuously monitor the minute changes in your oral health over time. From routine deep-cleaning examinations and vital oral cancer screenings to creating custom sports mouthguards and providing TMJ (jaw joint) therapy, our overarching goal is to catch potential problems when they are entirely microscopic.</p>
          <p className="mb-6">At Dr. Muller Dentistry, we are passionate about patient communication. We take the time to comprehensively educate our patients using high-definition intraoral cameras, allowing you to see exactly what we see on screen. We ensure you fully understand the current state of your oral health and exactly how best to care for it effectively at home.</p>
        </div>

        <div className="my-16 grid gap-6 sm:grid-cols-2">
          <div className="flex items-start gap-3 p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:border-primary/20">
            <div className="mt-1 rounded-full bg-primary/10 p-1 shrink-0">
              <ArrowRight className="size-4 text-primary" />
            </div>
            <p className="font-medium text-foreground m-0 leading-snug">{`A centralized hub for comprehensive dental care for your entire family`}</p>
          </div>
          <div className="flex items-start gap-3 p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:border-primary/20">
            <div className="mt-1 rounded-full bg-primary/10 p-1 shrink-0">
              <ArrowRight className="size-4 text-primary" />
            </div>
            <p className="font-medium text-foreground m-0 leading-snug">{`A hyper-focus on preventing major, painful, and costly dental issues down the road`}</p>
          </div>
          <div className="flex items-start gap-3 p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:border-primary/20">
            <div className="mt-1 rounded-full bg-primary/10 p-1 shrink-0">
              <ArrowRight className="size-4 text-primary" />
            </div>
            <p className="font-medium text-foreground m-0 leading-snug">{`Highly personalized, transparent treatment plans tailored to your unique biology`}</p>
          </div>
          <div className="flex items-start gap-3 p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:border-primary/20">
            <div className="mt-1 rounded-full bg-primary/10 p-1 shrink-0">
              <ArrowRight className="size-4 text-primary" />
            </div>
            <p className="font-medium text-foreground m-0 leading-snug">{`Ongoing education on utilizing the best modern practices for at-home oral care`}</p>
          </div>

        </div>

        <h2 className="text-3xl font-extrabold text-foreground mt-20 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto max-w-3xl space-y-4">
          <details className="group rounded-2xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm open:bg-card/80 transition-all duration-300 shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground text-lg group-open:text-primary transition-colors">
              <span className="pr-6">{`Are you currently accepting new patients into the practice?`}</span>
              <span className="shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary">
                <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
              {`Absolutely, yes! We are currently actively welcoming new patients and families from across St. John's and the surrounding Newfoundland areas. We would be absolutely thrilled to have you join our dental family and experience our premium care.`}
            </p>
          </details>
          <details className="group rounded-2xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm open:bg-card/80 transition-all duration-300 shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground text-lg group-open:text-primary transition-colors">
              <span className="pr-6">{`At exactly what age should I bring my toddler in for their very first dental visit?`}</span>
              <span className="shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary">
                <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
              {`We highly recommend bringing your child in for their first dedicated dental visit by their first birthday, or within six short months after their very first baby tooth officially erupts. Early, fun visits help them get incredibly comfortable with the dentist chair environment and allow us to closely monitor their early jaw development.`}
            </p>
          </details>
          <details className="group rounded-2xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm open:bg-card/80 transition-all duration-300 shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground text-lg group-open:text-primary transition-colors">
              <span className="pr-6">{`What should I bring with me to my first new patient appointment?`}</span>
              <span className="shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary">
                <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
              {`Please bring a valid piece of photo ID, your active dental insurance card (if applicable so we can help you with billing), and a completely updated list of any and all medical prescriptions you are currently taking. We will also happily provide you with our streamlined new patient intake forms to easily fill out upon arrival.`}
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

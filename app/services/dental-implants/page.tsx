import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  CheckCircle2,
  ShieldCheck,
  Activity,
  Smile,
  ThumbsUp,
  Layers,
  ScanLine,
  CalendarDays,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Dental Implants in St. John's, NL | Dr. Muller Dentistry",
  description:
    "Permanent, natural-looking tooth replacement in St. John's, Newfoundland. How dental implants work, who's a candidate, the step-by-step process, cost factors, and what to expect — then book a consultation.",
  alternates: { canonical: "/services/dental-implants" },
  keywords: [
    "dental implants St. John's",
    "dental implants Newfoundland",
    "tooth replacement St. John's",
    "dental implant cost St. John's",
    "single tooth implant",
    "missing tooth replacement NL",
  ],
  openGraph: {
    title: "Dental Implants in St. John's, NL | Dr. Muller Dentistry",
    description:
      "Permanent, natural-looking tooth replacement in St. John's, Newfoundland. Learn how dental implants work, the process, and what to expect.",
    url: "https://drmullerdentistry.com/services/dental-implants",
    siteName: "Dr. Muller Dentistry",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/dental-implants-hero.png",
        width: 1024,
        height: 1024,
        alt: "Dental implant model showing the post, abutment, and crown",
      },
    ],
  },
};

const FAQS: { question: string; answer: string }[] = [
  {
    question: "What is a dental implant?",
    answer:
      "A dental implant is a small, biocompatible titanium post that acts as an artificial tooth root. It is placed into the jawbone, where it fuses with the bone over a few months in a process called osseointegration. A custom crown is then attached on top, giving you a replacement tooth that looks and functions like a natural one.",
  },
  {
    question: "Are dental implants painful?",
    answer:
      "The placement is performed under local anaesthesia, so you should not feel pain during the procedure. Most patients find the recovery more comfortable than expected — often milder than a tooth extraction — and manageable with over-the-counter pain relief for a few days.",
  },
  {
    question: "Am I a good candidate for dental implants?",
    answer:
      "Many adults in reasonably good general health with one or more missing teeth are candidates. The main requirements are enough healthy jawbone to support the implant and healthy gums. If bone volume is limited — common when a tooth has been missing for a while — a bone graft can often rebuild the site first. The only way to know for certain is a consultation and 3D imaging.",
  },
  {
    question: "How long do dental implants last?",
    answer:
      "With good oral hygiene and regular checkups, the titanium implant itself is designed to last many years, often a lifetime. The crown on top experiences daily wear and may need replacement after many years of use. Caring for implants is the same as caring for natural teeth: brush, floss, and see us for regular visits.",
  },
  {
    question: "How much do dental implants cost in St. John's?",
    answer:
      "Cost depends on how many teeth are being replaced, whether a bone graft or extraction is needed first, and the materials used. Because every case is different, we provide a clear written estimate at your consultation and can review your insurance coverage. You can read more in our guide to dental implant cost in St. John's.",
  },
  {
    question: "How long does the whole implant process take?",
    answer:
      "Timelines vary by patient. After the implant is placed, it typically needs a few months to fuse with the bone before the final crown is attached. Some cases move faster and some (for example, when grafting is needed) take longer. We'll map out your expected timeline at the planning stage.",
  },
  {
    question: "Are implants better than a bridge or dentures?",
    answer:
      "Each option has its place. Implants are the only choice that replaces the tooth root, which helps preserve the jawbone and doesn't require altering neighbouring teeth the way a bridge does. Compared with removable dentures, implants stay fixed in place. We'll help you compare implants, bridges, and dentures honestly based on your situation.",
  },
  {
    question: "What happens if I don't replace a missing tooth?",
    answer:
      "A gap can allow neighbouring teeth to drift, change your bite, and lead to bone loss in the jaw over time. Replacing the tooth — with an implant or another option — helps protect your remaining teeth and long-term oral health.",
  },
];

export default function DentalImplantsPage() {
  const phoneDigits = SITE.phone.replace(/\D/g, "").slice(0, 10);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://drmullerdentistry.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://drmullerdentistry.com/services" },
      { "@type": "ListItem", position: 3, name: "Dental Implants", item: "https://drmullerdentistry.com/services/dental-implants" },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Dental Implants",
    procedureType: "https://health-lifesci.schema.org/SurgicalProcedure",
    description:
      "Placement of titanium dental implants to replace one or more missing teeth, restoring function and appearance.",
    url: "https://drmullerdentistry.com/services/dental-implants",
    bodyLocation: "Jaw",
    howPerformed:
      "A titanium implant is placed in the jawbone, allowed to integrate with the bone, and restored with a custom crown, bridge, or denture.",
    provider: {
      "@type": "Dentist",
      name: "Dr. Muller Dentistry",
      address: {
        "@type": "PostalAddress",
        streetAddress: "386 Stavanger Dr",
        addressLocality: "St. John's",
        addressRegion: "NL",
        postalCode: "A1A 5M9",
        addressCountry: "CA",
      },
      telephone: "+17094007474",
      areaServed: "St. John's, Newfoundland and Labrador",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const types = [
    {
      icon: Smile,
      title: "Single tooth implant",
      body: "One implant and crown to replace a single missing tooth — without grinding down the healthy teeth on either side.",
    },
    {
      icon: Layers,
      title: "Multiple teeth",
      body: "Two or more implants can support a fixed bridge to replace several missing teeth in a row.",
      href: "/services/crowns-bridges",
      linkLabel: "Crowns & bridges",
    },
    {
      icon: Activity,
      title: "Implant-supported overdentures",
      body: "A removable denture that snaps securely onto implants for far more stability than a conventional denture.",
      href: "/services/implant-supported-overdentures",
      linkLabel: "Overdentures",
    },
    {
      icon: ShieldCheck,
      title: "Full-arch (All-on-4 / All-on-X)",
      body: "A fixed, full-arch set of teeth supported by as few as four implants for suitable candidates.",
      href: "/services/all-on-4-all-on-x",
      linkLabel: "All-on-4 / All-on-X",
    },
  ];

  const benefits = [
    { icon: Activity, title: "Preserves your jawbone", body: "An implant stimulates the jaw like a natural root, helping to slow the bone loss that follows tooth loss and preserve your facial structure." },
    { icon: ShieldCheck, title: "Built to last", body: "A well-integrated titanium implant is designed to last many years — often a lifetime — and can't develop a cavity." },
    { icon: ThumbsUp, title: "Natural bite force", body: "Because implants anchor into bone, they restore chewing strength so you can comfortably eat the foods you enjoy." },
    { icon: Smile, title: "Looks and feels natural", body: "A custom, colour-matched crown is shaped to blend with your surrounding teeth so your smile looks like you." },
    { icon: CheckCircle2, title: "Protects neighbouring teeth", body: "Unlike a traditional bridge, an implant stands on its own and doesn't require reshaping the healthy teeth beside the gap." },
    { icon: ScanLine, title: "Precisely planned", body: "3D CBCT imaging lets us map bone and nerves before treatment, so placement is planned around your individual anatomy." },
  ];

  const steps = [
    { title: "Consultation & 3D imaging", body: "We examine the area and take a 3D CBCT scan to assess bone volume and plan the ideal implant position. If more bone is needed, we'll discuss grafting options first." },
    { title: "Implant placement", body: "The titanium implant is placed into the jawbone under local anaesthesia. Many patients are surprised by how straightforward this appointment is, and you won't leave with a visible gap." },
    { title: "Healing (osseointegration)", body: "Over the following months, the bone naturally fuses to the implant, creating a stable foundation. You carry on with daily life during this phase." },
    { title: "Final crown", body: "Once integration is confirmed, we attach the abutment and your custom crown — matched to your natural teeth for a seamless, functional result." },
  ];

  return (
    <div className="flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-primary/10 bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-16 md:py-24">
        <div className="absolute top-0 right-0 -z-10 size-[500px] rounded-full bg-primary/10 blur-[130px]" />
        <div className="container mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
              <ChevronRight className="size-4" />
              <span className="font-medium text-foreground">Dental Implants</span>
            </div>
            <h1 className="text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Dental Implants in St. John&apos;s
            </h1>
            <p className="mt-6 text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">
              The modern standard for replacing missing teeth. Dental implants restore your bite, protect your jawbone,
              and give you a permanent, natural-looking tooth — planned individually for you here in Newfoundland.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full shadow-lg shadow-primary/20">
                <Link href="/book">Book a consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a href={`tel:${phoneDigits}`}>Call (709) 400-7474</a>
              </Button>
            </div>
          </div>
          <div className="group relative mx-auto aspect-square w-full max-w-lg overflow-hidden rounded-[2rem] border border-primary/15 bg-card shadow-xl">
            <Image
              src="/dental-implants-hero.png"
              alt="Dental implant model showing the titanium post, abutment, and crown"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="container mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1.15fr_.85fr] md:py-24">
        <div>
          <h2 className="text-3xl font-bold text-foreground">The closest thing to a natural tooth</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Losing a tooth affects more than your smile — it changes how you chew and speak, and over time the jawbone
            beneath the gap begins to shrink. A dental implant is the only tooth-replacement option that addresses all of
            this, because it replaces the root as well as the visible tooth.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            An implant has three parts: a titanium post placed in the jaw, an abutment that connects to it, and a custom
            crown on top. The post fuses with your bone through a process called <em>osseointegration</em>, creating a
            stable, long-lasting foundation. The result is a replacement tooth that looks, feels, and works like the one
            you lost — with no slipping and no special cleaning routine.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            At our St. John&apos;s practice, every implant plan starts with a careful assessment and 3D imaging so that
            treatment is designed around your anatomy, your health, and your goals.
          </p>
        </div>
        <aside className="self-start rounded-3xl border border-primary/10 bg-card p-7">
          <h2 className="text-xl font-bold text-foreground">At a glance</h2>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            <li className="flex gap-3"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />Replaces one, several, or a full arch of teeth</li>
            <li className="flex gap-3"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />Helps preserve jawbone and facial structure</li>
            <li className="flex gap-3"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />Planned with 3D CBCT imaging</li>
            <li className="flex gap-3"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />Designed to last for many years</li>
          </ul>
          <Button asChild className="mt-6 w-full rounded-full">
            <Link href="/book">Check if implants are right for you</Link>
          </Button>
        </aside>
      </section>

      {/* TYPES */}
      <section className="border-y border-primary/10 bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Ways implants can replace missing teeth</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Whether you&apos;re missing one tooth or an entire arch, there&apos;s an implant-based solution to consider.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {types.map((t) => (
              <article key={t.title} className="rounded-3xl border border-primary/10 bg-card p-7">
                <div className="w-max rounded-full bg-primary/10 p-3"><t.icon className="size-6 text-primary" /></div>
                <h3 className="mt-4 text-xl font-bold text-foreground">{t.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{t.body}</p>
                {t.href && (
                  <Link href={t.href} className="mt-4 inline-flex items-center gap-2 font-semibold text-primary">
                    {t.linkLabel} <ArrowRight className="size-4" />
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
        <h2 className="text-center text-3xl font-extrabold text-foreground sm:text-4xl">Why patients choose implants</h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <article key={b.title} className="rounded-3xl border border-primary/10 bg-card p-7">
              <div className="w-max rounded-full bg-primary/10 p-3"><b.icon className="size-6 text-primary" /></div>
              <h3 className="mt-4 text-xl font-bold text-foreground">{b.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{b.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CANDIDACY */}
      <section className="border-y border-primary/10 bg-secondary/10 py-16 md:py-24">
        <div className="container mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-foreground">Are you a candidate?</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Most adults with one or more missing teeth can be considered for implants. The key factors are having
              enough healthy jawbone and gums to support the implant. If some bone has been lost, a bone graft can often
              rebuild the area first — so patients who were told years ago they weren&apos;t suitable are frequently
              candidates today.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Smoking, uncontrolled diabetes, and certain medical conditions can affect healing, so we review your full
              health picture as part of planning. The most reliable way to find out is a consultation with 3D imaging.
            </p>
          </div>
          <div className="rounded-3xl border border-primary/10 bg-card p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Technology that supports your plan</p>
            <h3 className="mt-2 text-2xl font-bold text-foreground">Planned with 3D CBCT imaging</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              A cone-beam CT scan gives us a detailed 3D view of your jaw so we can assess bone and place implants with
              precision — not guesswork.
            </p>
            <Button asChild variant="outline" className="mt-6 rounded-full">
              <Link href="/technology">See our technology <ArrowRight className="size-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">The implant process, step by step</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Implant treatment takes place over a few appointments. Here&apos;s the typical path from consultation to your
            new tooth.
          </p>
        </div>
        <ol className="mt-12 grid gap-5 md:grid-cols-2">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-3xl border border-primary/10 bg-card p-7 pl-20">
              <span className="absolute left-7 top-7 flex size-9 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">{i + 1}</span>
              <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* COST */}
      <section className="border-y border-primary/10 bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">What do dental implants cost?</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            There&apos;s no single price, because the cost of dental implants depends on how many teeth you&apos;re
            replacing, whether a bone graft or extraction is needed first, and the materials used. Implants are a larger
            investment than some alternatives up front, but because they can last for decades and help protect your
            remaining teeth, they&apos;re often the more economical choice over a lifetime.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            We provide a clear, written estimate at your consultation and will help you understand any insurance
            coverage. For a detailed breakdown of what drives the price, read our guide below.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild className="rounded-full">
              <Link href="/blog/dental-implant-cost-st-johns">Read: implant cost in St. John&apos;s</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/blog/dental-implants-vs-dentures-bridge">Implants vs. dentures vs. bridges</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Compare your options</p>
        <h2 className="mt-2 text-3xl font-extrabold text-foreground">Other tooth-replacement options</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            { title: "Dentures", body: "Modern removable full and partial dentures for comfort, function, and appearance.", href: "/services/dentures" },
            { title: "Implant-supported overdentures", body: "Removable dentures that snap onto implants for extra stability.", href: "/services/implant-supported-overdentures" },
            { title: "All-on-4 / All-on-X", body: "A fixed full-arch restoration supported by implants for suitable candidates.", href: "/services/all-on-4-all-on-x" },
          ].map((r) => (
            <article key={r.href} className="rounded-3xl border border-primary/10 bg-card p-7">
              <h3 className="text-xl font-bold text-foreground">{r.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{r.body}</p>
              <Link href={r.href} className="mt-5 inline-flex items-center gap-2 font-semibold text-primary">Explore <ArrowRight className="size-4" /></Link>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-primary/10 bg-secondary/10 py-16 md:py-24">
        <div className="container mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <h2 className="text-3xl font-extrabold text-foreground">Dental implant FAQs</h2>
            <div className="mt-6 space-y-3">
              {FAQS.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-primary/10 bg-card px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground group-open:text-primary">
                    <span className="pr-6">{faq.question}</span>
                    <ChevronRight className="size-5 shrink-0 text-primary transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
          <aside className="self-start rounded-3xl bg-primary p-8 text-primary-foreground">
            <h2 className="text-2xl font-bold">Ready for a permanent smile?</h2>
            <p className="mt-3 leading-relaxed text-primary-foreground/85">
              Book a consultation and we&apos;ll assess your jaw, explain your options, and build a plan that fits you.
            </p>
            <Button asChild variant="secondary" className="mt-7 rounded-full">
              <Link href="/book">Book a consultation</Link>
            </Button>
            <a href={`tel:${phoneDigits}`} className="mt-4 flex items-center gap-2 text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground">
              <CalendarDays className="size-4" /> Or call (709) 400-7474
            </a>
          </aside>
        </div>
      </section>
    </div>
  );
}

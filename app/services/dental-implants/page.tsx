import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Phone, CheckCircle2, ShieldCheck, Microscope, ThumbsUp, CalendarDays, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Dental Implants | St. John's NL | Dr. Muller Dentistry",
  description: "Permanent, natural-looking dental implants in St. John's. Restore your smile, bite force, and confidence with advanced implant dentistry.",
  keywords: ["Dental Implants St. John's", "tooth replacement NL", "implant dentist Newfoundland", "Dr. Muller implants"],
  alternates: {
    canonical: "/services/dental-implants",
  },
  openGraph: {
    title: "Dental Implants | Dr. Muller Dentistry St. John's",
    description: "Permanent, natural-looking dental implants in St. John's. Restore your smile, bite force, and confidence.",
    url: "https://drmullerdentistry.com/services/dental-implants",
    siteName: "Dr. Muller Dentistry",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/blog-rct-vs-extraction.png",
        width: 1200,
        height: 630,
        alt: "Dental Implants at Dr. Muller Dentistry",
      }
    ],
  },
};

export default function DentalImplantsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are dental implants painful?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most patients are surprised to learn that dental implant surgery is relatively comfortable. The procedure is performed under profound local anesthesia, so you won't feel pain during the surgery. Post-surgical discomfort is typically milder than a tooth extraction and can usually be managed effectively with over-the-counter pain relievers for a few days."
        }
      },
      {
        "@type": "Question",
        "name": "How long do dental implants last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With proper care, the titanium implant post itself is incredibly durable and designed to last a lifetime. The custom crown placed on top experiences daily wear and tear and may need replacement after 15-20 years. Maintaining excellent oral hygiene and regular dental checkups maximizes their lifespan."
        }
      },
      {
        "@type": "Question",
        "name": "Am I a good candidate for dental implants?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most adults in good general health with missing teeth are excellent candidates. The primary requirement is having adequate jawbone density to support the implant and healthy gums. If you have experienced bone loss, we can often perform a bone graft procedure to rebuild the area prior to implant placement."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the entire implant process take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The timeline varies per patient. Typically, after the initial surgery, the implant needs 3 to 6 months to permanently fuse with your jawbone (osseointegration). Once healed, the final permanent crown is attached. In total, expect the process to take anywhere from 3 to 9 months depending on your specific healing rate and if bone grafting was needed."
        }
      },
      {
        "@type": "Question",
        "name": "Are dental implants better than dentures or bridges?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For most patients, yes. Implants are the only tooth replacement option that preserves jawbone health, preventing the sunken facial appearance associated with tooth loss. Unlike bridges, they don't require altering adjacent healthy teeth. Unlike removable dentures, they are permanently fixed, allowing you to eat tough foods (like steak or apples) with 100% natural bite force."
        }
      },
      {
        "@type": "Question",
        "name": "How much are dental implants in St. John's, NL?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The total cost for a single dental implant in St. John's, including the titanium post, abutment, and custom porcelain crown, generally ranges from $3,500 to $5,500. While the initial investment is higher than other options, dental implants are often more cost-effective long-term as they are designed to last a lifetime with proper care."
        }
      }
    ]
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
        "name": "Dental Implants",
        "item": "https://drmullerdentistry.com/services/dental-implants"
      }
    ]
  };

  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Dental Implant Surgery",
    "description": "Surgical placement of titanium dental implants to permanently replace missing teeth.",
    "url": "https://drmullerdentistry.com/services/dental-implants",
    "procedureType": "https://health-lifesci.schema.org/SurgicalProcedure",
    "body": {
      "@type": "AnatomicalStructure",
      "name": "Jaw Bone and Teeth"
    },
    "availableService": {
      "@type": "MedicalTherapy",
      "name": "Implant Dentistry",
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

      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-primary/5 bg-gradient-to-br from-background via-muted/30 to-background py-16 md:py-24">
        <div className="absolute top-0 right-0 -z-10 size-[500px] rounded-full bg-primary/10 blur-[130px]" />
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <ChevronRight className="size-4" />
            <span className="text-foreground font-medium">Dental Implants</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
            Dental Implants
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed text-balance">
            The gold standard in modern tooth replacement. Restore your smile, unmatched bite force, and your confidence with permanent, natural-looking dental implants in St. John&apos;s.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full shadow-lg shadow-primary/20 px-8 h-12">
              <Link href="/contact">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* OVERVIEW & IMAGE */}
      <section className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-primary/10 shadow-xl bg-card">
            <Image
              src="/blog-rct-vs-extraction.png"
              alt="Dental implants vs natural teeth model"
              fill
              quality={100}
              unoptimized
              className="object-cover"
              priority
            />
          </div>
          <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none text-muted-foreground">
            <h2 className="text-3xl font-bold text-foreground mb-6">The Closest Thing to Your Natural Teeth</h2>
            <p className="mb-6">
              Losing a tooth impacts far more than just your smile. It affects how you chew, how you speak, and over time, it fundamentally changes the structure of your jaw and face. Dental implants are the only restorative treatment that fully addresses all of these issues.
            </p>
            <p className="mb-6">
              A dental implant is essentially an artificial tooth root. Made from biocompatible titanium, the implant is placed directly into your jawbone, where it permanently fuses with the bone tissue through a remarkable process called <em>osseointegration</em>.
            </p>
            <p>
              Once healed, we attach a custom-crafted, highly realistic porcelain crown to the implant. The result? A tooth that looks, feels, and functions exactly like the one you lost. No slipping, no dietary restrictions, and no special cleaning required.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE IMPLANTS (GRID) */}
      <section className="border-y border-primary/5 bg-muted/20 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl text-balance">
              Why Implants are the Gold Standard
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-balance">
              Compared to traditional bridges or dentures, dental implants offer profound, life-changing benefits that simply can't be matched by older technologies.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-primary/10 bg-card p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
              <div className="rounded-full bg-primary/10 p-3 w-max mb-6">
                <Activity className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Preserves Jawbone</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                When you lose a tooth, the jawbone underneath quickly begins to shrink (resorb). Implants artificially stimulate the bone just like a natural root, completely halting bone loss and preserving your facial structure.
              </p>
            </div>

            <div className="rounded-2xl border border-primary/10 bg-card p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
              <div className="rounded-full bg-primary/10 p-3 w-max mb-6">
                <ShieldCheck className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Permanent & Durable</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                While bridges usually need replacing every 10 years, a successfully placed titanium implant is designed to last the rest of your life. It cannot get cavities or decay.
              </p>
            </div>

            <div className="rounded-2xl border border-primary/10 bg-card p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
              <div className="rounded-full bg-primary/10 p-3 w-max mb-6">
                <ThumbsUp className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">100% Bite Force</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Dentures significantly reduce your ability to chew tough foods. Implants are anchored directly into your skeletal structure, restoring your bite force completely. Eat apples, steak, and corn on the cob without hesitation.
              </p>
            </div>

            <div className="rounded-2xl border border-primary/10 bg-card p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
              <div className="rounded-full bg-primary/10 p-3 w-max mb-6">
                <Microscope className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Protects Other Teeth</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                To place a traditional bridge, the healthy teeth on either side of the gap must be severely ground down to serve as anchors. Implants stand independently, perfectly preserving your adjacent healthy teeth.
              </p>
            </div>

            <div className="rounded-2xl border border-primary/10 bg-card p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
              <div className="rounded-full bg-primary/10 p-3 w-max mb-6">
                <CheckCircle2 className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Zero Slippage</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Say goodbye to messy denture adhesives. Implants never move, click, or slip while you speak, laugh, or eat. You treat them exactly like natural teeth.
              </p>
            </div>

            <div className="rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/10 to-primary/5 p-8 shadow-sm transition-all hover:shadow-md flex flex-col justify-center text-center">
              <h3 className="text-xl font-bold text-foreground mb-3">The Smart Investment</h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                Though the upfront cost is higher, implants are often more economical over a lifetime because they don't require cyclical replacement.
              </p>
              <Button asChild size="sm" className="rounded-full">
                <Link href="/contact">Ask About Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROCESS STEP-BY-STEP */}
      <section className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
        <h2 className="text-3xl font-extrabold text-foreground mb-4 text-center">
          The Implant Process
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-16">
          Implant dentistry requires patience and precision. Here is the step-by-step roadmap to your permanent new smile.
        </p>

        <div className="space-y-12">
          {/* STEP 1 */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 relative">
            <div className="hidden md:flex flex-col items-center">
              <div className="size-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-black z-10 shadow-lg shadow-primary/30">1</div>
              <div className="w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent mt-4"></div>
            </div>
            <div className="flex-1 md:pt-2">
              <div className="md:hidden inline-flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground font-bold mb-4">1</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Comprehensive Consultation & 3D Imaging</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                First, we need to ensure your jawbone is ready to accept an implant. We take advanced 3D digital scans to evaluate your bone density and map exactly where the nerves and sinuses are located. If bone density is too low (common if the tooth has been missing for years), we may recommend a minor bone graft first to build a solid foundation.
              </p>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 relative">
            <div className="hidden md:flex flex-col items-center">
              <div className="size-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-black z-10 shadow-lg shadow-primary/30">2</div>
              <div className="w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent mt-4"></div>
            </div>
            <div className="flex-1 md:pt-2">
              <div className="md:hidden inline-flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground font-bold mb-4">2</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">The Surgical Placement</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Using local anesthesia to ensure you are entirely entirely comfortable and pain-free, Dr. Muller precisely places the titanium implant post into the designated spot in your jawbone. This appointment is surprisingly quick, often taking less than an hour. You will go home with a temporary tooth covering the area so you never have a visible gap in your smile.
              </p>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 relative">
            <div className="hidden md:flex flex-col items-center">
              <div className="size-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-black z-10 shadow-lg shadow-primary/30">3</div>
              <div className="w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent mt-4"></div>
            </div>
            <div className="flex-1 md:pt-2">
              <div className="md:hidden inline-flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground font-bold mb-4">3</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Healing (Osseointegration)</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                This is where the magic of science happens. Over the next 3 to 6 months, the jawbone cells naturally grow up to and permanently bond with the microscopic ridges of the titanium implant. Your jaw literally accepts the titanium as part of the body. You live your life normally during this healing phase.
              </p>
            </div>
          </div>

          {/* STEP 4 */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 relative">
            <div className="hidden md:flex flex-col items-center">
              <div className="size-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-black z-10 shadow-lg shadow-primary/30">4</div>
            </div>
            <div className="flex-1 md:pt-2">
              <div className="md:hidden inline-flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground font-bold mb-4">4</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">The Final Crown placement</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Once fusion is confirmed, we attach a small connector piece called an abutment. Finally, we craft and attach your custom porcelain crown. This crown is color-matched, shaped, and polished to perfectly mimic your surrounding natural teeth. You leave with a fully restored, incredibly strong new smile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="container mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-3xl font-extrabold text-foreground mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <details className="group rounded-2xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm open:bg-card/80 transition-all duration-300 shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground text-lg group-open:text-primary transition-colors">
              <span className="pr-6">Are dental implants painful?</span>
              <span className="shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary">
                <ChevronRight className="size-5" />
              </span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
              Most patients are surprised to learn that dental implant surgery is relatively comfortable. The procedure is performed under profound local anesthesia, so you won&apos;t feel pain during the surgery. Post-surgical discomfort is typically milder than a tooth extraction and can usually be managed effectively with over-the-counter pain relievers for a few days.
            </p>
          </details>
          <details className="group rounded-2xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm open:bg-card/80 transition-all duration-300 shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground text-lg group-open:text-primary transition-colors">
              <span className="pr-6">How long do dental implants last?</span>
              <span className="shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary">
                <ChevronRight className="size-5" />
              </span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
              With proper care, the titanium implant post itself is incredibly durable and designed to last a lifetime. The custom crown placed on top experiences daily wear and tear and may need replacement after 15-20 years. Maintaining excellent oral hygiene and regular dental checkups maximizes their lifespan.
            </p>
          </details>
          <details className="group rounded-2xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm open:bg-card/80 transition-all duration-300 shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground text-lg group-open:text-primary transition-colors">
              <span className="pr-6">Am I a good candidate for dental implants?</span>
              <span className="shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary">
                <ChevronRight className="size-5" />
              </span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
              Most adults in good general health with missing teeth are excellent candidates. The primary requirement is having adequate jawbone density to support the implant and healthy gums. If you have experienced bone loss, we can often perform a bone graft procedure to rebuild the area prior to implant placement.
            </p>
          </details>
          <details className="group rounded-2xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm open:bg-card/80 transition-all duration-300 shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground text-lg group-open:text-primary transition-colors">
              <span className="pr-6">How long does the entire implant process take?</span>
              <span className="shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary">
                <ChevronRight className="size-5" />
              </span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
              The timeline varies per patient. Typically, after the initial surgery, the implant needs 3 to 6 months to permanently fuse with your jawbone (osseointegration). Once healed, the final permanent crown is attached. In total, expect the process to take anywhere from 3 to 9 months depending on your specific healing rate and if bone grafting was needed.
            </p>
          </details>
          <details className="group rounded-2xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm open:bg-card/80 transition-all duration-300 shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground text-lg group-open:text-primary transition-colors">
              <span className="pr-6">Are dental implants better than dentures or bridges?</span>
              <span className="shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary">
                <ChevronRight className="size-5" />
              </span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
              For most patients, yes. Implants are the only tooth replacement option that preserves jawbone health, preventing the sunken facial appearance associated with tooth loss. Unlike bridges, they don&apos;t require altering adjacent healthy teeth. Unlike removable dentures, they are permanently fixed, allowing you to eat tough foods (like steak or apples) with 100% natural bite force.
            </p>
          </details>
          <details className="group rounded-2xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm open:bg-card/80 transition-all duration-300 shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground text-lg group-open:text-primary transition-colors">
              <span className="pr-6">What is the cost of dental implants in St. John&apos;s, NL?</span>
              <span className="shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary">
                <ChevronRight className="size-5" />
              </span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
              The total cost for a single dental implant in St. John&apos;s, including the titanium post, abutment, and custom porcelain crown, generally ranges from $3,500 to $5,500. While the initial investment is higher than other options, dental implants are often more cost-effective long-term as they are designed to last a lifetime with proper care.
            </p>
          </details>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container mx-auto max-w-7xl px-4 pb-32">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/20 bg-background/50 p-10 sm:p-16 text-center shadow-2xl backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5 pointer-events-none"></div>
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl relative z-10">
            Ready for a Permanent Smile?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground relative z-10 max-w-2xl mx-auto">
            Schedule a comprehensive implant consultation with Dr. Muller today. We&apos;ll evaluate your jawbone, explain your options, and build a custom plan to restore your teeth.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 relative z-10">
            <Button asChild size="lg" className="rounded-full shadow-lg shadow-primary/20 px-8 h-14 text-lg">
              <a href={`tel:${SITE.phone.replace(/\D/g, "")}`}>
                <CalendarDays className="mr-2 size-5" />
                Book Consultation
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14">
              <Link href="/contact">Location & Hours</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

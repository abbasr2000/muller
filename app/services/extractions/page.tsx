import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Tooth Extractions | St. John's NL",
  description:
    "Safe, comfortable tooth extractions in St. John's, Newfoundland. When a tooth can't be saved, we perform extractions with care. Dr. Muller Dentistry.",
  keywords: ["tooth extraction St. John's", "dental extraction Newfoundland", "pull tooth NL"],
};

export default function ExtractionsPage() {
  return (
    <div className="flex flex-col">
      <section className="border-b border-border/60 bg-muted/30 py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Tooth Extractions
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            When a tooth cannot be saved, we perform extractions with care and
            comfort in mind. We also discuss replacement options when
            appropriate.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold text-foreground mt-8 scroll-mt-16">
            When Extraction Is Needed
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-2">
            Extractions may be recommended when a tooth is too damaged or
            infected to repair (e.g. with a root canal or filling), when there
            is severe crowding, or when wisdom teeth cause problems. We always
            explore saving the tooth when possible.
          </p>
          <h2 className="text-2xl font-semibold text-foreground mt-10 scroll-mt-16">
            The Procedure and Aftercare
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-2">
            The area is numbed so you stay comfortable. We remove the tooth
            carefully and give you clear aftercare instructions to promote
            healing and avoid complications. We can also discuss options like
            dental implants or bridges to replace the missing tooth if needed.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <Button asChild>
            <Link href="/contact">Book a Consultation</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/services/dental-implants">Dental Implants</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Dr. Muller | Dentist St. John's Newfoundland",
  description: `Meet Dr. David Muller, DDS – University of Toronto trained, ICOI & AAIP Fellow. With extensive training in root canal therapy and dental care in St. John's, NL. ${SITE.address}.`,
  keywords: [
    "Dr. David Muller",
    "dentist St. John's",
    "Newfoundland dental practice",
    "St. John's NL dentist",
    "root canal specialist St. John's",
  ],
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="border-b border-primary/15 bg-gradient-to-b from-primary/10 to-muted/30 py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            About David Muller Dentistry
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            Proudly serving St. John&apos;s and the greater Newfoundland and
            Labrador community with quality dental care.
          </p>
        </div>
      </section>

      <section className="border-y border-primary/15 bg-muted/40 py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
            About Dr. Muller
          </h2>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Doctor of Dental Surgery — trained at the University of Toronto, with international training in implantology and oral surgery.
          </p>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div className="relative aspect-[3/4] max-h-[480px] w-full overflow-hidden rounded-2xl border border-border bg-muted lg:max-h-none">
              <Image
                src="/dr-muller.png"
                alt="Dr. David Muller, Doctor of Dental Surgery"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 400px"
                priority
              />
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Dr. Muller graduated from the University of Toronto, Faculty of Dentistry, where he was heavily involved in the Endodontics (Root Canal Specialty) Department.
              </p>
              <p>
                In his time at UofT, he received one-on-one training from Endodontists, engaged in extensive Endodontic research, and has published several Endodontic articles in world-renowned journals. He also completed several continuing education courses in Endodontics.
              </p>
              <h3 className="text-lg font-semibold text-foreground pt-2">
                Scholarships & Awards
              </h3>
              <ul className="space-y-2 list-none">
                <li className="flex flex-col gap-0.5">
                  <span className="font-medium text-foreground">Gary Glassman Endodontic Award</span>
                  <span className="text-sm">Awarded for Outstanding Clinical and Academic Performance in Endodontics</span>
                </li>
                <li className="flex flex-col gap-0.5">
                  <span className="font-medium text-foreground">Piret Truuvert Memorial Award</span>
                  <span className="text-sm">Awarded to a Student with the Highest Overall Achievement in Second, Third and Fourth Year Preventive Dentistry</span>
                </li>
                <li className="font-medium text-foreground">Dr. Michael Oliver Memorial Scholarship</li>
                <li className="font-medium text-foreground">Dr. Howard Rocket Preventive Scholarship</li>
                <li className="font-medium text-foreground">Wallace Seccombe Memorial Scholarship</li>
              </ul>
              <p>
                After graduating, he continued his education with international oral surgery training in the fields of Surgical Implantology and Extractions.
              </p>
              <h3 className="text-lg font-semibold text-foreground pt-2">
                Fellowships
              </h3>
              <p>
                Dr. Muller has been awarded prestigious Fellowships from two of the world&apos;s leading implant organizations: the <strong className="text-foreground">ICOI</strong> (International Congress of Oral Implantologists) and the <strong className="text-foreground">AAIP</strong> (Academy of Advanced Implant Prosthodontics).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl font-semibold text-foreground">
              Our Practice
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              At David Muller Dentistry, we believe in a modern, patient-centred
              approach to dental care. Located at 386 Stavanger Dr in St.
              John&apos;s, we offer a full range of services with a particular
              focus on root canal therapy, helping our patients keep their
              natural teeth and maintain healthy smiles for life.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our team is committed to making every visit comfortable and
              stress-free. Whether you&apos;re coming in for a routine cleaning,
              a root canal, or an emergency, we treat every patient with care and
              professionalism.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted">
            <Image
              src="/logo.png"
              alt="David Muller Dentistry logo"
              fill
              className="object-contain p-8 invert"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Why Choose Us
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li className="rounded-lg border border-border bg-card p-4 shadow-sm">
              <h3 className="font-medium text-foreground">
                Root Canal Expertise
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Root canal therapy is a core part of our practice. We use
                modern techniques to make the procedure as comfortable as
                possible.
              </p>
            </li>
            <li className="rounded-lg border border-border bg-card p-4 shadow-sm">
              <h3 className="font-medium text-foreground">
                Full Range of Services
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                From checkups and cleanings to crowns, implants, and cosmetic
                dentistry, we offer comprehensive care under one roof.
              </p>
            </li>
            <li className="rounded-lg border border-border bg-card p-4 shadow-sm">
              <h3 className="font-medium text-foreground">
                Convenient St. John&apos;s Location
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Easy to find on Stavanger Drive, with parking and access for
                patients across the St. John&apos;s metro and Newfoundland area.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm md:p-12">
          <h2 className="text-2xl font-semibold text-foreground">
            Ready to Book?
          </h2>
          <p className="mt-2 text-muted-foreground">
            New and existing patients are welcome. Contact us to schedule an
            appointment in St. John&apos;s, NL.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

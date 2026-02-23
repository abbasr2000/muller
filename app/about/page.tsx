import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Dr. Muller | Dentist St. John's Newfoundland",
  description: `Meet Dr. David Muller, DDS – University of Toronto trained, ICOI & AAIP Fellow. With extensive training in root canal therapy and dental care in St. John's, NL. ${SITE.address}.`,
  alternates: {
    canonical: "/about",
  },
  keywords: [
    "Dr. David Muller",
    "dentist St. John's",
    "Newfoundland dental practice",
    "St. John's NL dentist",
    "root canal specialist St. John's",
  ],
  openGraph: {
    title: "About Dr. Muller | Dentist St. John's Newfoundland",
    description: "Meet Dr. David Muller, DDS – University of Toronto trained, ICOI & AAIP Fellow. With extensive training in root canal therapy and dental care.",
    url: "https://drmullerdentistry.com/about",
    siteName: "Dr. Muller Dentistry",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/dr-muller.png",
        width: 1200,
        height: 630,
        alt: "Dr. David Muller",
      }
    ],
  },

};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden border-b border-primary/10 bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-24">
        <div className="absolute top-0 right-0 -z-10 size-[500px] rounded-full bg-primary/10 blur-[130px]" />
        <div className="container mx-auto max-w-7xl px-4 text-center lg:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
            About Dr. Muller Dentistry
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed text-balance">
            Proudly serving St. John&apos;s and the greater Newfoundland and
            Labrador community with quality dental care and expert root canal therapy.
          </p>
        </div>
      </section>

      <section className="relative border-y border-primary/10 bg-muted/40 py-24 overflow-hidden">
        <div className="absolute bottom-0 left-0 -z-10 size-[600px] rounded-full bg-secondary/5 blur-[120px]" />
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20 items-start">
            <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-[2.5rem] border border-white/20 shadow-2xl bg-muted transition-all duration-700 hover:shadow-primary/10">
              <Image
                src="/dr-muller.png"
                alt="Dr. David Muller, Doctor of Dental Surgery"
                fill
                className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 500px"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/80 to-transparent p-8 text-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-sm font-semibold text-primary uppercase tracking-wider">Doctor of Dental Surgery</p>
              </div>
            </div>
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl mb-6">
                  Meet Dr. David Muller
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                  Dr. Muller graduated from the University of Toronto, Faculty of Dentistry, where he was heavily involved in the Endodontics (Root Canal Specialty) Department.
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <span className="size-2 rounded-full bg-primary" />
                    Scholarships & Awards
                  </h3>
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    <li className="p-4 rounded-2xl bg-background/50 border border-primary/5 hover:border-primary/20 transition-colors">
                      <span className="font-bold text-foreground block mb-1">Gary Glassman Endodontic Award</span>
                      Outstanding Clinical and Academic Performance in Endodontics
                    </li>
                    <li className="p-4 rounded-2xl bg-background/50 border border-primary/5 hover:border-primary/20 transition-colors">
                      <span className="font-bold text-foreground block mb-1">Piret Truuvert Memorial Award</span>
                      Highest Overall Achievement in Preventive Dentistry
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <span className="size-2 rounded-full bg-secondary" />
                    Fellowships & Specialization
                  </h3>
                  <div className="p-6 rounded-2xl bg-background/50 border border-primary/5 space-y-4">
                    <p className="text-sm leading-relaxed">
                      Dr. Muller has been awarded prestigious Fellowships from two of the world&apos;s leading implant organizations: the <strong className="text-foreground">ICOI</strong> and the <strong className="text-foreground">AAIP</strong>.
                    </p>
                    <p className="text-sm leading-relaxed">
                      He also completed international oral surgery training in Surgical Implantology and Extractions.
                    </p>
                  </div>
                </div>
              </div>
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
              At Dr. Muller Dentistry, we believe in a modern, patient-centred
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
              alt="Dr. Muller Dentistry logo"
              fill
              className="object-contain p-8 invert"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-primary/10 bg-gradient-to-br from-background via-muted/30 to-background py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -z-10 size-[600px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
              Why Choose Us
            </h2>
          </div>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <li className="group rounded-[2rem] border border-primary/10 bg-card/60 p-8 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/30">
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                Root Canal Expertise
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Root canal therapy is a core part of our practice. We use
                modern techniques to make the procedure as absolutely comfortable as
                possible.
              </p>
            </li>
            <li className="group rounded-[2rem] border border-primary/10 bg-card/60 p-8 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/30">
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                Full Range of Services
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                From checkups and cleanings to crowns, implants, and cosmetic
                dentistry, we offer highly comprehensive care under one roof.
              </p>
            </li>
            <li className="group rounded-[2rem] border border-primary/10 bg-card/60 p-8 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/30">
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                Convenient Location
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Easy to find on Stavanger Drive, with open parking and priority access for
                patients across the St. John&apos;s metro and Newfoundland area.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 py-16 pb-32">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/20 bg-background/50 p-10 sm:p-16 text-center shadow-2xl backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5 pointer-events-none"></div>
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl relative z-10">
            Ready to Book?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground relative z-10 max-w-2xl mx-auto">
            New and existing patients are welcome. Contact us directly to schedule your
            appointment in St. John&apos;s, NL.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 relative z-10">
            <Button asChild size="lg" className="rounded-full shadow-lg shadow-primary/20 px-8">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 hover:bg-primary/5">
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

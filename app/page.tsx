import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Phone, Stethoscope, Star, Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SITE, SERVICES } from "@/lib/site-config";

export default function HomePage() {
  const otherServices = SERVICES.filter((s) => !s.featured).slice(0, 4);

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden border-b border-primary/20 bg-gradient-to-b from-primary/15 via-primary/5 to-background">
        <div className="absolute -top-40 -right-40 -z-10 size-[500px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute top-20 -left-20 -z-10 size-[400px] rounded-full bg-secondary/20 blur-[100px]" />

        <div className="container mx-auto max-w-7xl px-4 py-16 sm:py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="max-w-2xl text-center lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
                Quality Dental Care in St. John&apos;s, Newfoundland
              </h1>
              <p className="mt-6 text-lg text-muted-foreground sm:text-xl text-balance leading-relaxed">
                Root canal therapy, general dentistry, and comprehensive
                dental services for you and your family. Proudly serving St.
                John&apos;s and the greater Newfoundland area.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Button asChild size="lg" className="gap-2 rounded-full h-12 px-8 text-base shadow-lg shadow-primary/20 transition-all hover:scale-105">
                  <Link href="/contact">
                    Book an Appointment
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full h-12 px-8 text-base transition-all hover:scale-105 bg-background/50 backdrop-blur-md border-primary/20 hover:bg-primary/5 hover:border-primary/40">
                  <Link href="/services/root-canal">Learn About Root Canals</Link>
                </Button>
              </div>
            </div>

            <div className="group relative mx-auto w-full max-w-lg lg:max-w-none shadow-2xl rounded-[2rem] overflow-hidden border border-white/20 dark:border-white/10 bg-white/10 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent mix-blend-overlay z-10 pointer-events-none transition-opacity duration-700 group-hover:opacity-70"></div>
              <Image
                src="/front-page-hero-2.png"
                alt="A healthy, radiant smile representing quality dental care"
                width={800}
                height={800}
                className="object-cover w-full h-auto transform transition-transform duration-1000 group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
            Our Location
          </h2>
          <p className="mt-2 text-muted-foreground">
            Conveniently located on Stavanger Drive in St. John&apos;s, NL.
          </p>
        </div>
        <div className="mt-8 flex flex-col items-center gap-6 rounded-2xl border border-primary/20 bg-card p-8 text-center shadow-sm sm:flex-row sm:justify-center sm:gap-10">
          <a
            href={SITE.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
          >
            <MapPin className="size-5 shrink-0" aria-hidden />
            <span className="text-left">
              {SITE.address}
              <br />
              {SITE.city}, NL {SITE.postalCode}
            </span>
          </a>
          <a
            href={`tel:${SITE.phone.replace(/\D/g, "")}`}
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
          >
            <Phone className="size-5 shrink-0" aria-hidden />
            {SITE.phone}
          </a>
        </div>
      </section>

      <section className="relative border-y border-primary/10 bg-gradient-to-br from-background via-muted/30 to-background py-24 md:py-32 overflow-hidden">
        <div className="absolute top-1/2 right-0 -z-10 size-[600px] -translate-y-1/2 translate-x-1/3 rounded-full bg-primary/5 blur-[120px]" />

        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="group relative mx-auto w-full max-w-md lg:max-w-none shadow-2xl rounded-3xl overflow-hidden border border-primary/10 bg-background/50 backdrop-blur-sm lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10 pointer-events-none"></div>
              <Image
                src="/root-canal-hero.png"
                alt="Advanced Root Canal Therapy"
                width={800}
                height={800}
                className="object-cover w-full h-auto transform transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <div className="inline-flex items-center gap-2 rounded-full bg-background/80 backdrop-blur-md px-4 py-2 text-sm font-semibold text-foreground shadow-lg">
                  <span className="size-2 rounded-full bg-primary animate-pulse" />
                  Specialized Treatment
                </div>
              </div>
            </div>

            <div className="lg:order-1 space-y-8 text-center lg:text-left">
              <div>
                <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl md:text-5xl leading-tight">
                  <span className="text-primary block mb-2">Root Canal Therapy</span>
                  A Core Focus
                </h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  We provide specialized root canal treatment to save your natural teeth and
                  relieve pain. Our modern, patient-first approach ensures the procedure is
                  surprisingly comfortable and highly efficient.
                </p>
                <ul className="mt-8 space-y-4 text-left">
                  {[
                    "Pain relief and infection treatment",
                    "Preservation of your natural tooth",
                    "Modern anaesthesia for maximum comfort",
                    "Efficient procedures"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <div className="rounded-full bg-primary/10 p-1">
                        <ArrowRight className="size-4 text-primary" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20 w-full sm:w-auto">
                  <Link href="/contact">Book Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 w-full sm:w-auto hover:bg-primary/5">
                  <Link href="/services/root-canal">Comprehensive Guide</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 py-24">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            All Dental Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From routine checkups to advanced implants, we offer a full range of treatments in St.
            John&apos;s.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {otherServices.map((service) => (
            <Card
              key={service.slug}
              className="group border-primary/10 transition-all hover:shadow-xl hover:border-primary/30 p-2"
            >
              <CardHeader className="flex flex-row items-center justify-between gap-6 p-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {service.shortDescription}
                  </p>
                </div>
                <Button asChild size="icon" variant="ghost" className="shrink-0 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Link href={`/services/${service.slug}`} aria-label={`View ${service.title}`}>
                    <ArrowRight className="size-5" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button asChild variant="outline" size="lg" className="rounded-full px-10">
            <Link href="/services">Discover All Services</Link>
          </Button>
        </div>
      </section>

      <section className="border-y border-primary/15 bg-primary/5 py-10">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <Link
              href="/map"
              className="flex items-center gap-3 rounded-xl border border-primary/20 bg-card px-6 py-4 shadow-sm hover:border-primary/40 hover:shadow transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Star className="size-8 text-amber-400 fill-amber-400 shrink-0" aria-hidden />
              <div className="text-left">
                <span className="font-semibold text-foreground">Google Reviews</span>
                <p className="text-sm text-muted-foreground">See what patients say</p>
              </div>
              <ArrowRight className="size-4 text-primary shrink-0" aria-hidden />
            </Link>
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-primary/20 bg-card px-6 py-4 shadow-sm hover:border-primary/40 hover:shadow transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Instagram className="size-8 text-primary shrink-0" aria-hidden />
              <div className="text-left">
                <span className="font-semibold text-foreground">Follow on Instagram</span>
                <p className="text-sm text-muted-foreground">Smiles & updates</p>
              </div>
              <ArrowRight className="size-4 text-primary shrink-0" aria-hidden />
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-primary/15 bg-gradient-to-b from-muted/50 to-background py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              What Our Patients Say
            </h2>
            <p className="mt-2 text-muted-foreground">
              Real reviews from patients in St. John&apos;s and across Newfoundland.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border-primary/15 bg-card">
              <CardContent className="pt-6">
                <div className="flex gap-1 text-amber-400 mb-3" aria-hidden>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic">
                  &ldquo;Dr. Muller is a really calm, soothing and just hands down a really good dentist. I had to get a Root Canal recently done by him... He was that good he made me fall asleep in the dental chair. The procedure I had done was completely painless.&rdquo;
                </p>
                <p className="mt-3 text-xs font-medium text-foreground">— Austin Fowler</p>
              </CardContent>
            </Card>
            <Card className="border-primary/15 bg-card">
              <CardContent className="pt-6">
                <div className="flex gap-1 text-amber-400 mb-3" aria-hidden>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic">
                  &ldquo;I had an amazing experience with David. From the very first conversation, he was incredibly warm and welcoming, making every appointment something to genuinely look forward to.&rdquo;
                </p>
                <p className="mt-3 text-xs font-medium text-foreground">— Hussain Ahmad</p>
              </CardContent>
            </Card>
            <Card className="border-primary/15 bg-card">
              <CardContent className="pt-6">
                <div className="flex gap-1 text-amber-400 mb-3" aria-hidden>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic">
                  &ldquo;Dr. Muller is extremely gifted in his work. For many years I have always had negative experiences visiting the dentist. That has now changed after my appointment with Dr. Muller.&rdquo;
                </p>
                <p className="mt-3 text-xs font-medium text-foreground">— Chris Henein</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="gap-2">
              <Link href="/map">
                Read all reviews
                <ExternalLink className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/40 py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between md:gap-12">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                New Patients Welcome
              </h2>
              <p className="mt-3 text-muted-foreground">
                Whether you need a routine cleaning, root canal therapy, or
                emergency care, we&apos;re here for you. Serving St. John&apos;s,
                Mount Pearl, and the greater Newfoundland area.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4 md:justify-start">
                <Button asChild>
                  <Link href="/contact">Book Now</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/about">About Us</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 px-8 py-6">
              <Stethoscope
                className="size-24 text-primary/50"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

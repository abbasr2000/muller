import Link from "next/link";
import { ArrowRight, MapPin, Phone, Stethoscope, Star, Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SITE, SERVICES } from "@/lib/site-config";

export default function HomePage() {
  const featured = SERVICES.filter((s) => s.featured);
  const otherServices = SERVICES.filter((s) => !s.featured).slice(0, 4);

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden border-b border-primary/20 bg-gradient-to-b from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto max-w-6xl px-4 py-16 sm:py-24 md:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Quality Dental Care in St. John&apos;s, Newfoundland
            </h1>
            <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
              Expert root canal therapy, general dentistry, and comprehensive
              dental services for you and your family. Proudly serving St.
              John&apos;s and the greater Newfoundland area.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href="/contact">
                  Book an Appointment
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services/root-canal">Learn About Root Canals</Link>
              </Button>
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

      <section className="border-y border-primary/15 bg-muted/40 py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              <span className="border-b-2 border-primary/40 pb-1">Root Canal Therapy</span> — A Core Focus
            </h2>
            <p className="mt-2 text-muted-foreground">
              We specialize in root canal treatment to save your tooth and
              relieve pain. Many patients find the procedure more comfortable
              than they expect.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((service) => (
              <Card
                key={service.slug}
                className="border-primary/15 transition-shadow hover:shadow-md hover:border-primary/25"
              >
                <CardHeader>
                  <h3 className="text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.shortDescription}
                  </p>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <Link href={`/services/${service.slug}`}>
                      Learn more
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild>
              <Link href="/services/root-canal">Full Root Canal Guide</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
            All Dental Services
          </h2>
          <p className="mt-2 text-muted-foreground">
            From checkups to implants, we offer a full range of treatments in St.
            John&apos;s.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {otherServices.map((service) => (
            <Card
              key={service.slug}
              className="border-primary/15 transition-shadow hover:shadow-md hover:border-primary/25"
            >
              <CardHeader className="flex flex-row items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {service.shortDescription}
                  </p>
                </div>
                <Button asChild size="sm" variant="ghost" className="shrink-0">
                  <Link href={`/services/${service.slug}`}>View</Link>
                </Button>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link href="/services">View All Services</Link>
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

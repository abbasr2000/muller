import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Root Canal Therapy | St. John's NL | Dr. Muller Dentistry",
  description:
    "Expert root canal treatment in St. John's, Newfoundland. Save your tooth, relieve pain, and restore oral health. Modern techniques and compassionate care. Dr. Muller Dentistry.",
  keywords: [
    "root canal St. John's",
    "root canal Newfoundland",
    "root canal therapy NL",
    "endodontist St. John's",
    "root canal dentist St. John's",
  ],
};

export default function RootCanalPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden border-b border-primary/10 bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-24">
        <div className="absolute top-0 right-0 -z-10 size-[600px] rounded-full bg-primary/10 blur-[150px]" />

        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="max-w-2xl">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                Advanced Treatment
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
                Root Canal Therapy
              </h1>
              <p className="mt-6 text-lg text-muted-foreground sm:text-xl leading-relaxed text-balance">
                Root canal therapy is a core focus of our practice. We use modern
                techniques to save your tooth and keep your smile healthy—with care
                and comfort in mind.
              </p>
            </div>

            <div className="group relative mx-auto w-full max-w-lg lg:max-w-none shadow-xl rounded-[2rem] overflow-hidden border border-primary/20 bg-background/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent mix-blend-overlay z-10 pointer-events-none transition-opacity duration-700 group-hover:opacity-70"></div>
              <Image
                src="/root-canal-hero.png"
                alt="Advanced Root Canal Therapy"
                width={800}
                height={800}
                className="object-cover w-full h-auto transform transition-transform duration-1000 group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold text-foreground mt-8 scroll-mt-16">
            What Is a Root Canal?
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-2">
            A root canal is a dental procedure that treats the inside of the
            tooth when the pulp (the soft tissue containing nerves and blood
            vessels) becomes infected or damaged. Instead of removing the tooth,
            we remove the infected pulp, clean and disinfect the root canals,
            then seal the tooth. This saves your natural tooth and relieves
            pain while preventing further infection.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 scroll-mt-16">
            Why You Might Need a Root Canal
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-2">
            Root canal therapy is typically recommended when:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-2">
            <li>Deep decay has reached the tooth pulp</li>
            <li>You have a cracked or chipped tooth that has exposed the pulp</li>
            <li>Repeated dental procedures on the same tooth have stressed the pulp</li>
            <li>You have severe sensitivity to hot or cold that doesn’t go away</li>
            <li>You experience persistent pain, swelling, or tenderness in the gums</li>
            <li>An abscess (infection) has developed at the root of the tooth</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Ignoring these signs can lead to worse pain, spread of infection,
            and possible tooth loss. Root canal therapy in St. John&apos;s at
            our practice helps you avoid extraction and keep your natural smile.
          </p>

          <h2 className="text-3xl font-extrabold text-foreground mt-20 mb-10 text-center">
            The Root Canal Process
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Examination & X-rays", desc: "We examine the tooth and take X-rays to see the shape of the root canals and any signs of infection." },
              { title: "Anaesthesia", desc: "We numb the area so you stay comfortable. Many patients report it feels similar to having a routine filling." },
              { title: "Access Opening", desc: "A small opening is made in the crown of the tooth to reach the pulp chamber and root canals." },
              { title: "Removal of Pulp", desc: "The infected or damaged pulp is carefully removed from the chamber and canals for deep cleaning." },
              { title: "Cleaning & Shaping", desc: "The inside of the tooth is cleaned, disinfected, and shaped to prepare for the final filling." },
              { title: "Filling & Sealing", desc: "The empty canals are filled with a biocompatible material and sealed to prevent any future re-infection." },
              { title: "Restoration", desc: "The access opening is sealed. Often a crown is recommended to protect the tooth and restore full function." }
            ].map((step, i) => (
              <div key={i} className="group relative p-8 rounded-3xl border border-primary/10 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-xl">
                <div className="absolute -top-4 -left-4 size-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shadow-lg">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Root canal therapy may be completed in one or two visits, depending
            on the complexity of your case. We’ll explain your treatment plan
            before we begin.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 scroll-mt-16">
            Does a Root Canal Hurt?
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-2">
            Modern root canal treatment is designed to relieve pain, not cause
            it. With proper anaesthesia, most patients experience little to no
            discomfort during the procedure. Any soreness afterward is usually
            mild and can be managed with over-the-counter pain relievers. We
            prioritize your comfort and will answer any questions you have about
            pain management.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 scroll-mt-16">
            After Your Root Canal
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-2">
            After root canal therapy, it’s important to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-2">
            <li>Avoid chewing on the treated tooth until it’s fully restored (e.g. with a crown)</li>
            <li>Follow any prescribed or recommended pain relief and care instructions</li>
            <li>Attend follow-up appointments and complete the restoration (crown) if recommended</li>
            <li>Maintain good oral hygiene and regular checkups</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            A restored root-canaled tooth can last a lifetime with proper care.
          </p>

          <h2 className="text-3xl font-extrabold text-foreground mt-20 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-3xl space-y-4">
            <details className="group rounded-2xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm open:bg-card/80 transition-all duration-300">
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground text-lg group-open:text-primary transition-colors">
                How long does a root canal take?
                <span className="ml-4 transition-transform duration-300 group-open:rotate-180 text-primary">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
                Most root canals take one to two visits, each typically between 60 and 90 minutes, depending on the tooth and complexity.
              </p>
            </details>

            <details className="group rounded-2xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm open:bg-card/80 transition-all duration-300">
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground text-lg group-open:text-primary transition-colors">
                Is a root canal better than pulling the tooth?
                <span className="ml-4 transition-transform duration-300 group-open:rotate-180 text-primary">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
                Saving your natural tooth with a root canal is usually the preferred option. It preserves your bite, avoids shifting of neighbouring teeth, and looks and feels like your own tooth once restored with a crown.
              </p>
            </details>

            <details className="group rounded-2xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm open:bg-card/80 transition-all duration-300">
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground text-lg group-open:text-primary transition-colors">
                Do I need a crown after a root canal?
                <span className="ml-4 transition-transform duration-300 group-open:rotate-180 text-primary">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
                For back teeth (molars and premolars), a crown is usually recommended to protect the tooth from fracture. Front teeth may sometimes be restored with a filling. We’ll recommend what’s best for your case.
              </p>
            </details>

            <details className="group rounded-2xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm open:bg-card/80 transition-all duration-300">
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground text-lg group-open:text-primary transition-colors">
                Where can I get a root canal in St. John&apos;s or Newfoundland?
                <span className="ml-4 transition-transform duration-300 group-open:rotate-180 text-primary">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
                Dr. Muller Dentistry provides root canal therapy at our St. John&apos;s location on Stavanger Drive. We welcome patients from across the St. John&apos;s metro area and Newfoundland and Labrador.
              </p>
            </details>
          </div>

          <h2 className="text-2xl font-semibold text-foreground mt-10 scroll-mt-16">
            Why Choose Us for Root Canal Therapy in St. John&apos;s
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-2">
            At Dr. Muller Dentistry, root canal therapy is a central part of
            what we do. We combine experience, modern techniques, and a
            patient-first approach so you can keep your natural teeth and enjoy
            a healthy, comfortable smile. We serve patients from St. John&apos;s,
            and across Newfoundland and Labrador.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <Card className="border-border/80">
            <CardHeader>
              <h3 className="font-semibold text-foreground">
                Ready to Book?
              </h3>
              <p className="text-sm text-muted-foreground">
                Schedule your root canal consultation or treatment in St. John&apos;s.
              </p>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="border-border/80">
            <CardHeader>
              <h3 className="font-semibold text-foreground">
                Other Services
              </h3>
              <p className="text-sm text-muted-foreground">
                We also offer crowns, fillings, cleanings, and full general dentistry.
              </p>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline">
                <Link href="/services">View All Services</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

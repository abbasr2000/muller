import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Root Canal Therapy | St. John's NL | David Muller Dentistry",
  description:
    "Expert root canal treatment in St. John's, Newfoundland. Save your tooth, relieve pain, and restore oral health. Modern techniques and compassionate care. David Muller Dentistry.",
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
      <section className="border-b border-border/60 bg-muted/30 py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Root Canal Therapy
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            Root canal therapy is a core focus of our practice. We use modern
            techniques to save your tooth and keep your smile healthy—with care
            and comfort in mind.
          </p>
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

          <h2 className="text-2xl font-semibold text-foreground mt-10 scroll-mt-16">
            The Root Canal Process: Step by Step
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-2">
            Understanding the steps can help ease anxiety. Here’s what typically
            happens during root canal therapy at David Muller Dentistry:
          </p>
          <ol className="list-decimal pl-6 text-muted-foreground space-y-3 mt-4">
            <li>
              <strong className="text-foreground">Examination and X-rays</strong> —
              We examine the tooth and take X-rays to see the shape of the root
              canals and any signs of infection.
            </li>
            <li>
              <strong className="text-foreground">Anaesthesia</strong> — We
              numb the area so you stay comfortable throughout the procedure.
              Many patients report that the process feels similar to having a
              filling.
            </li>
            <li>
              <strong className="text-foreground">Access opening</strong> — A
              small opening is made in the crown of the tooth to reach the pulp
              chamber and root canals.
            </li>
            <li>
              <strong className="text-foreground">Removal of pulp</strong> —
              The infected or damaged pulp is carefully removed from the chamber
              and canals.
            </li>
            <li>
              <strong className="text-foreground">Cleaning and shaping</strong> —
              The inside of the tooth is cleaned, disinfected, and shaped to
              prepare for filling.
            </li>
            <li>
              <strong className="text-foreground">Filling the canals</strong> —
              The empty canals are filled with a biocompatible material and
              sealed to prevent re-infection.
            </li>
            <li>
              <strong className="text-foreground">Restoration</strong> — The
              access opening is sealed. Often we recommend a crown to protect
              the tooth and restore full function.
            </li>
          </ol>
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

          <h2 className="text-2xl font-semibold text-foreground mt-10 scroll-mt-16">
            Frequently Asked Questions About Root Canals
          </h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="font-medium text-foreground">How long does a root canal take?</h3>
              <p className="mt-1 text-muted-foreground">
                Most root canals take one to two visits, each typically between 60 and 90 minutes, depending on the tooth and complexity.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground">Is a root canal better than pulling the tooth?</h3>
              <p className="mt-1 text-muted-foreground">
                Saving your natural tooth with a root canal is usually the preferred option. It preserves your bite, avoids shifting of neighbouring teeth, and looks and feels like your own tooth once restored with a crown.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground">Do I need a crown after a root canal?</h3>
              <p className="mt-1 text-muted-foreground">
                For back teeth (molars and premolars), a crown is usually recommended to protect the tooth from fracture. Front teeth may sometimes be restored with a filling. We’ll recommend what’s best for your case.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground">Where can I get a root canal in St. John&apos;s or Newfoundland?</h3>
              <p className="mt-1 text-muted-foreground">
                David Muller Dentistry provides root canal therapy at our St. John&apos;s location on Stavanger Drive. We welcome patients from across the St. John&apos;s metro area and Newfoundland and Labrador.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-foreground mt-10 scroll-mt-16">
            Why Choose Us for Root Canal Therapy in St. John&apos;s
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-2">
            At David Muller Dentistry, root canal therapy is a central part of
            what we do. We combine experience, modern techniques, and a
            patient-first approach so you can keep your natural teeth and enjoy
            a healthy, comfortable smile. We serve patients from St. John&apos;s,
            Mount Pearl, and across Newfoundland and Labrador.
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

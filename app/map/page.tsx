import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Star,
  ExternalLink,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Map & Reviews | Find Us | St. John's NL",
  description: `Find David Muller Dentistry on the map. ${SITE.address}. Read Google reviews and follow us on Instagram. St. John's, Newfoundland.`,
  keywords: [
    "David Muller Dentistry map",
    "dentist St. John's location",
    "Google reviews St. John's dentist",
  ],
};

// Google Maps embed - shows the map with the place marked
// Standard embed format that works reliably without API key
const MAP_EMBED_SRC =
  `https://www.google.com/maps?q=386+Stavanger+Dr,+St+John's,+NL+A1A+5M9&output=embed&zoom=15`;

export default function MapPage() {
  return (
    <div className="flex flex-col">
      <section className="border-b border-border/60 bg-gradient-to-b from-primary/10 from-10% via-background to-background py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Map & Reviews
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            Find us on Stavanger Drive, read what patients say on Google, and
            follow along on Instagram.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
              <iframe
                src={MAP_EMBED_SRC}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="David Muller Dentistry location on Google Maps"
                className="min-h-[320px] w-full"
              />
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <a
                href={SITE.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
              >
                <MapPin className="size-4" aria-hidden />
                Open in Google Maps
                <ExternalLink className="size-3.5" aria-hidden />
              </a>
              <p className="text-sm text-muted-foreground">
                {SITE.address}, {SITE.city}, NL {SITE.postalCode}
              </p>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-2">
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                  <Star className="size-5 fill-amber-400 text-amber-400" aria-hidden />
                  Google Reviews
                </h2>
                <p className="text-sm text-muted-foreground">
                  See what patients are saying about us. Your feedback helps others find great care.
                </p>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <a
                    href={SITE.googleReviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Google
                    <ExternalLink className="size-4" aria-hidden />
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a
                    href={SITE.googleReviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Leave a review on Google"
                  >
                    <MessageCircle className="size-4" aria-hidden />
                    Leave a review
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                  <Instagram className="size-5" aria-hidden />
                  Follow on Instagram
                </h2>
                <p className="text-sm text-muted-foreground">
                  Smiles, tips, and updates from the practice.
                </p>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full gap-2">
                  <a
                    href={SITE.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="size-5" aria-hidden />
                    @drmullerdentistry
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/30 py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold text-foreground">
            What Patients Say
          </h2>
          <p className="mt-2 text-muted-foreground max-w-xl">
            We&apos;re grateful for every review. Read more on Google or leave your own experience.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border-border/80 bg-card">
              <CardContent className="pt-6">
                <div className="flex gap-1 text-amber-400" aria-hidden>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-sm text-muted-foreground italic">
                  &ldquo;Dr. Muller is a really calm, soothing and just hands down a really good dentist. I had to get a Root Canal recently done by him tbh I was a little bit nervous at first but when I sat in the chair and was told how the procedure works and put on some calming music or just any music you like I felt fine. He was that good he made me fall asleep in the dental chair lolol. The procedure I had done was completely painless.&rdquo;
                </p>
                <p className="mt-2 text-xs text-muted-foreground">— Austin Fowler</p>
              </CardContent>
            </Card>
            <Card className="border-border/80 bg-card">
              <CardContent className="pt-6">
                <div className="flex gap-1 text-amber-400" aria-hidden>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-sm text-muted-foreground italic">
                  &ldquo;I had an amazing experience with David. From the very first conversation, he was incredibly warm and welcoming, making every appointment something to genuinely look forward to. He offered thoughtful advice and guidance throughout the entire process, helping me with all of my dental needs.&rdquo;
                </p>
                <p className="mt-2 text-xs text-muted-foreground">— Hussain Ahmad</p>
              </CardContent>
            </Card>
            <Card className="border-border/80 bg-card">
              <CardContent className="pt-6">
                <div className="flex gap-1 text-amber-400" aria-hidden>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-sm text-muted-foreground italic">
                  &ldquo;My experience with Dr. Muller was very pleasant. I am usually very nervous going to the Dentist, but he put me at ease in no time. He was so gentle and showed great compassion during my visit. Great Guy, and a greater Dentist!&rdquo;
                </p>
                <p className="mt-2 text-xs text-muted-foreground">— Sharon McLean</p>
              </CardContent>
            </Card>
            <Card className="border-border/80 bg-card">
              <CardContent className="pt-6">
                <div className="flex gap-1 text-amber-400" aria-hidden>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-sm text-muted-foreground italic">
                  &ldquo;I&apos;ve known Dr. Muller since his training days, and it&apos;s been wonderful to see him grow into such a skilled and compassionate dentist. He truly cares about his patients and provides excellent care. Highly recommend him and his practice!&rdquo;
                </p>
                <p className="mt-2 text-xs text-muted-foreground">— Kenneth Liu</p>
              </CardContent>
            </Card>
            <Card className="border-border/80 bg-card">
              <CardContent className="pt-6">
                <div className="flex gap-1 text-amber-400" aria-hidden>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-sm text-muted-foreground italic">
                  &ldquo;Dr. Muller is extremely gifted in his work. For many years I have always had negative experiences visiting the dentist. That has now changed after my appointment with Dr. Muller. I highly recommend him to anyone who is looking for a dentist. He will get the job done!&rdquo;
                </p>
                <p className="mt-2 text-xs text-muted-foreground">— Chris Henein</p>
              </CardContent>
            </Card>
            <Card className="border-border/80 bg-card">
              <CardContent className="pt-6">
                <div className="flex gap-1 text-amber-400" aria-hidden>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-sm text-muted-foreground italic">
                  &ldquo;I had a great experience with Dr. Muller and his assistant! A display of friendliness and professionalism made for a smooth experience!&rdquo;
                </p>
                <p className="mt-2 text-xs text-muted-foreground">— Nick</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <a
                href={SITE.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more reviews on Google
                <ExternalLink className="size-4 ml-2" aria-hidden />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

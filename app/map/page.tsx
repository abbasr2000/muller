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
  description: `Find Dr. Muller Dentistry on the map. ${SITE.address}. Read Google reviews and follow us on Instagram. St. John's, Newfoundland.`,
  alternates: {
    canonical: "/map",
  },
  keywords: [
    "Dr. Muller Dentistry map",
    "dentist St. John's location",
    "Google reviews St. John's dentist",
  ],
  openGraph: {
    title: "Map & Reviews | Dr. Muller Dentistry St. John's NL",
    description: "Find Dr. Muller Dentistry on the map. Read Google reviews and follow us on Instagram. St. John's, Newfoundland.",
    url: "https://drmullerdentistry.com/map",
    siteName: "Dr. Muller Dentistry",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/front-page-hero-2.png",
        width: 1200,
        height: 630,
        alt: "Map and Location of Dr. Muller Dentistry",
      }
    ],
  },

};

// Google Maps embed - shows the map with the place marked
// Standard embed format that works reliably without API key
const MAP_EMBED_SRC =
  `https://www.google.com/maps?q=386+Stavanger+Dr,+St+John's,+NL+A1A+5M9&output=embed&zoom=15`;

export default function MapPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden border-b border-primary/5 bg-gradient-to-br from-background via-muted/30 to-background py-16 md:py-24">
        <div className="absolute top-0 right-0 -z-10 size-[500px] rounded-full bg-primary/10 blur-[130px]" />
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
            Map & Reviews
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed text-balance">
            Find us on Stavanger Drive, read what patients say on Google, and
            follow along on Instagram. We&apos;re proud of the care we provide.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="group overflow-hidden rounded-[2rem] border border-primary/20 shadow-2xl bg-card/60 backdrop-blur-md p-2">
              <div className="overflow-hidden rounded-[1.5rem]">
                <iframe
                  src={MAP_EMBED_SRC}
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dr. Muller Dentistry location on Google Maps"
                  className="w-full grayscale-[20%] contrast-125 transition-all duration-700 group-hover:grayscale-0"
                />
              </div>
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
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-primary/20 bg-card/60 p-8 shadow-xl backdrop-blur-md transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>

              <div className="relative z-10 flex-1">
                <h2 className="flex items-center gap-2 text-2xl font-extrabold text-foreground">
                  <Star className="size-7 fill-amber-400 text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]" aria-hidden />
                  Google Reviews
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  See what patients are saying about us on Google. Your feedback continually helps others find great care in St. John's.
                </p>
              </div>

              <div className="relative z-10 mt-8 flex flex-col gap-4">
                <Button asChild size="lg" className="rounded-full shadow-lg shadow-primary/20 h-12 w-full text-base font-semibold">
                  <a href={SITE.googleReviewsUrl} target="_blank" rel="noopener noreferrer">
                    View on Google <ExternalLink className="ml-2 size-4" aria-hidden />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full bg-background/50 h-12 w-full text-base backdrop-blur-sm border-primary/20 hover:bg-primary/5">
                  <a href={SITE.googleReviewsUrl} target="_blank" rel="noopener noreferrer" aria-label="Leave a review on Google">
                    <MessageCircle className="mr-2 size-4" aria-hidden />
                    Leave a review
                  </a>
                </Button>
              </div>
            </div>

            <div className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-primary/20 bg-card/60 p-8 shadow-xl backdrop-blur-md transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>

              <div className="relative z-10 flex-1">
                <h2 className="flex items-center gap-2 text-2xl font-extrabold text-foreground">
                  <Instagram className="size-7 text-pink-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]" aria-hidden />
                  Follow Our Journey
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Join our amazing community. Connect with us for smiles, dental tips, and updates straight from the practice.
                </p>
              </div>

              <div className="relative z-10 mt-8">
                <Button asChild variant="outline" size="lg" className="w-full h-12 text-base rounded-full bg-background/50 backdrop-blur-sm border-pink-500/20 hover:bg-pink-500/10 hover:text-pink-600 transition-colors">
                  <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 size-5" aria-hidden />
                    @drmullerdentistry
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/10 bg-gradient-to-br from-muted/20 to-muted/40 py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -z-10 size-[600px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />

        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
              What Our Patients Say
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We&apos;re grateful for every review. Here are some experiences from our patients.
            </p>
          </div>

          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                text: "Dr. Muller is a really calm, soothing and just hands down a really good dentist. I had to get a Root Canal recently done by him tbh I was a little bit nervous at first but when I sat in the chair and was told how the procedure works and put on some calming music... he made me fall asleep in the dental chair lolol. The procedure I had done was completely painless.",
                author: "Austin Fowler"
              },
              {
                text: "I had an amazing experience with David. From the very first conversation, he was incredibly warm and welcoming, making every appointment something to genuinely look forward to. He offered thoughtful advice and guidance throughout the entire process, helping me with all of my dental needs.",
                author: "Hussain Ahmad"
              },
              {
                text: "My experience with Dr. Muller was very pleasant. I am usually very nervous going to the Dentist, but he put me at ease in no time. He was so gentle and showed great compassion during my visit. Great Guy, and a greater Dentist!",
                author: "Sharon McLean"
              },
              {
                text: "I've known Dr. Muller since his training days, and it's been wonderful to see him grow into such a skilled and compassionate dentist. He truly cares about his patients and provides excellent care. Highly recommend him and his practice!",
                author: "Kenneth Liu"
              },
              {
                text: "Dr. Muller is extremely gifted in his work. For many years I have always had negative experiences visiting the dentist. That has now changed after my appointment with Dr. Muller. I highly recommend him to anyone who is looking for a dentist. He will get the job done!",
                author: "Chris Henein"
              },
              {
                text: "I had a great experience with Dr. Muller and his assistant! A display of friendliness and professionalism made for a smooth experience!",
                author: "Nick"
              }
            ].map((review, i) => (
              <Card key={i} className="group border-primary/10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/30 bg-card/60 backdrop-blur-md h-full flex flex-col">
                <CardContent className="p-8 flex-1 flex flex-col">
                  <div className="flex gap-1 text-amber-500 mb-6" aria-hidden>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="size-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic flex-1 mb-6">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 mt-auto pt-6 border-t border-border/50">
                    <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                      {review.author.charAt(0)}
                    </div>
                    <p className="font-semibold text-foreground">— {review.author}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button asChild size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20">
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

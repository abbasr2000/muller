import { SITE } from "@/lib/site-config";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["Dentist", "LocalBusiness", "MedicalClinic"],
  "@id": "https://drmullerdentistry.com/#dentist",
  name: SITE.name,
  image: "https://drmullerdentistry.com/front-page-hero-2.png",
  logo: "https://drmullerdentistry.com/logo.png",
  description:
    "Dr. Muller Dentistry offers root canal therapy, general dentistry, cleanings, and full dental care in St. John's, Newfoundland and Labrador.",
  url: "https://drmullerdentistry.com",
  telephone: SITE.phone,
  email: SITE.email,
  priceRange: "$$",
  currenciesAccepted: "CAD",
  paymentAccepted: "Cash, Credit Card, Debit Card, Insurance",
  medicalSpecialty: "Dentistry",
  sameAs: [
    SITE.instagramUrl,
    SITE.mapUrl,
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "386 Stavanger Dr",
    addressLocality: "St. John's",
    addressRegion: "NL",
    postalCode: SITE.postalCode,
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.5605,
    longitude: -52.7126,
  },
  hasMap: SITE.mapUrl,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:30",
      closes: "17:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:30",
      closes: "17:30",
    },
  ],
  areaServed: [
    { "@type": "City", name: "St. John's" },
    { "@type": "City", name: "Mount Pearl" },
    { "@type": "City", name: "Paradise" },
    { "@type": "State", name: "Newfoundland and Labrador" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "87",
  },
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Austin Fowler",
      },
      datePublished: "2024-01-15",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Dr. Muller is a really calm, soothing and just hands down a really good dentist. I had to get a Root Canal recently done by him... He was that good he made me fall asleep in the dental chair. The procedure I had done was completely painless.",
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Hussain Ahmad",
      },
      datePublished: "2024-02-10",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "I had an amazing experience with David. From the very first conversation, he was incredibly warm and welcoming, making every appointment something to genuinely look forward to.",
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Chris Henein",
      },
      datePublished: "2024-03-20",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Dr. Muller is extremely gifted in his work. For many years I have always had negative experiences visiting the dentist. That has now changed after my appointment with Dr. Muller.",
    },
  ],
};

export const JsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
  />
);

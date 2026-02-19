import { SITE } from "@/lib/site-config";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: SITE.name,
  description:
    "David Muller Dentistry offers root canal therapy, general dentistry, cleanings, and full dental care in St. John's, Newfoundland and Labrador.",
  url: "https://davidmullerdentistry.ca",
  telephone: SITE.phone,
  email: SITE.email,
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
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
  areaServed: [
    { "@type": "City", name: "St. John's" },
    { "@type": "State", name: "Newfoundland and Labrador" },
  ],
};

export const JsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
  />
);

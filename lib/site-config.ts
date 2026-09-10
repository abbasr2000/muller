export const SITE = {
  name: "Dr. Muller Dentistry St. John's",
  tagline: "Quality implants, root canals, and family dental care in St. John's, Newfoundland",
  address: "386 Stavanger Dr, St. John's, NL A1A 5M9",
  city: "St. John's",
  province: "Newfoundland and Labrador",
  postalCode: "A1A 5M9",
  phone: "(709) 400-7474, Text:(709)-700-1300",
  // Clean, single-purpose values so tel:/sms: links and labels stay correct.
  phoneDisplay: "(709) 400-7474",
  textDisplay: "(709) 700-1300",
  phoneHref: "+17094007474",
  textHref: "+17097001300",
  email: "drmullerdentistry@gmail.com",
  hours:
    "Monday to Saturday 8:30 AM – 7:00 PM, Sundays By Appointment Only. Only office in Newfoundland with 24/7 access to a dentist via SMS/calls for questions, concerns, and emergencies.",
  googlePlaceId: "ChIJFS-nL7W9DEsRgUonFckNA3Y",
  // Maps URLs API — works on desktop web and mobile (iOS/Android Maps).
  // The old `?q=place_id:` format often fails to open the listing on phones.
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Dr+Muller+Dentistry+386+Stavanger+Dr+St+John's+NL&query_place_id=ChIJFS-nL7W9DEsRgUonFckNA3Y",
  googleReviewsUrl:
    "https://search.google.com/local/reviews?placeid=ChIJFS-nL7W9DEsRgUonFckNA3Y",
  googleWriteReviewUrl:
    "https://search.google.com/local/writereview?placeid=ChIJFS-nL7W9DEsRgUonFckNA3Y",
  mapEmbedSrc:
    "https://www.google.com/maps?q=386+Stavanger+Dr,+St+John's,+NL+A1A+5M9&output=embed&zoom=15",
  instagramUrl: "https://instagram.com/drmullerdentistry",
} as const;

// Structured opening hours for display (e.g. the location hours table).
export const OFFICE_HOURS: Array<{ day: string; hours: string }> = [
  { day: "Monday", hours: "8:30 AM – 7:00 PM" },
  { day: "Tuesday", hours: "8:30 AM – 7:00 PM" },
  { day: "Wednesday", hours: "8:30 AM – 7:00 PM" },
  { day: "Thursday", hours: "8:30 AM – 7:00 PM" },
  { day: "Friday", hours: "8:30 AM – 7:00 PM" },
  { day: "Saturday", hours: "8:30 AM – 7:00 PM" },
  { day: "Sunday", hours: "By appointment only" },
];

// Quick trust signals shown across the site (top strip on the homepage).
export const TRUST_POINTS: string[] = [
  "Open Monday–Saturday",
  "24/7 dentist access by call or text",
  "Same-day emergencies",
  "New patients welcome",
  "Direct billing to all insurers",
  "CDCP patients welcome",
  "Oral sedation available",
  "Free on-site parking",
];

// ─────────────────────────────────────────────────────────────────────────────
// BOOKING FORM SETUP  ← paste your Web3Forms key on the line below.
//
// The /book page emails each appointment request to drmullerdentistry@gmail.com.
// It needs a FREE access key (takes ~2 minutes, no account/password):
//   1. Go to https://web3forms.com
//   2. Enter drmullerdentistry@gmail.com and press the button
//   3. Check that inbox for the "access key" (a long code with dashes)
//   4. Replace the text between the quotes below with that key, then save.
//
// Until a real key is pasted in, the form works but submissions won't send.
// ─────────────────────────────────────────────────────────────────────────────
export const WEB3FORMS_ACCESS_KEY = "5008b12a-8b19-4f09-be53-012da4c7f3ac";

export type ServiceSlug =
  | "root-canal"
  | "general-dentistry"
  | "cleanings-checkups"
  | "fillings"
  | "extractions"
  | "crowns-bridges"
  | "dental-implants"
  | "dentures"
  | "implant-supported-overdentures"
  | "all-on-4-all-on-x"
  | "cosmetic-dentistry"
  | "oral-sedation"
  | "emergency-dental";

export const SERVICES: Array<{
  slug: ServiceSlug;
  title: string;
  shortDescription: string;
  featured?: boolean;
}> = [
    {
      slug: "root-canal",
      title: "Root Canal Therapy",
      shortDescription:
        "Root canal treatment to save your tooth and relieve pain. A core focus of our St. John's practice.",
      featured: true,
    },
    {
      slug: "general-dentistry",
      title: "General Dentistry",
      shortDescription: "Complete exams, preventive care, and routine treatments for the whole family.",
    },
    {
      slug: "cleanings-checkups",
      title: "Cleanings & Checkups",
      shortDescription: "Professional cleanings and comprehensive dental exams to keep your smile healthy.",
    },
    {
      slug: "fillings",
      title: "Fillings",
      shortDescription: "Tooth-colored fillings to restore teeth affected by decay.",
    },
    {
      slug: "extractions",
      title: "Tooth Extractions",
      shortDescription: "Safe, comfortable extractions when a tooth cannot be saved.",
    },
    {
      slug: "crowns-bridges",
      title: "Crowns & Bridges",
      shortDescription: "Restore strength and appearance with custom crowns and bridges.",
    },
    {
      slug: "dental-implants",
      title: "Dental Implants",
      shortDescription: "A carefully planned option for replacing one or more missing teeth.",
    },
    {
      slug: "dentures",
      title: "Dentures",
      shortDescription: "Modern full and partial removable tooth-replacement options.",
    },
    {
      slug: "implant-supported-overdentures",
      title: "Implant-Supported Overdentures",
      shortDescription: "Removable snap-in dentures designed for added stability and support.",
    },
    {
      slug: "all-on-4-all-on-x",
      title: "All-on-4 / All-on-X",
      shortDescription: "A fixed full-arch implant option for suitable candidates.",
    },
    {
      slug: "cosmetic-dentistry",
      title: "Cosmetic Dentistry",
      shortDescription: "Whitening, veneers, and smile makeovers in St. John's.",
    },
    {
      slug: "oral-sedation",
      title: "Oral Sedation",
      shortDescription:
        "Relaxing oral sedation to keep you calm and comfortable during extractions, wisdom teeth removal, and root canals.",
    },
    {
      slug: "emergency-dental",
      title: "Emergency Dental",
      shortDescription: "Same-day emergency care when you need it most.",
    },
  ];

export const NAV_MAIN = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/services/root-canal", label: "Root Canal" },
  { href: "/technology", label: "Technology" },
  { href: "/map", label: "Map & Reviews" },
  { href: "/insurance", label: "Insurance" },
  { href: "/blog", label: "Blog" },
  { href: "/book", label: "Contact" },
] as const;

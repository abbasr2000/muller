export const SITE = {
  name: "Dr. Muller Dentistry",
  tagline: "Quality dental care in St. John's, Newfoundland",
  address: "386 Stavanger Dr, St. John's, NL A1A 5M9",
  city: "St. John's",
  province: "Newfoundland and Labrador",
  postalCode: "A1A 5M9",
  phone: "(709) 400-7474",
  email: "drmullerdentistry@gmail.com",
  hours: "Mon–Thurs & every other Saturday 8:30 AM – 5:30 PM",
  googlePlaceId: "ChIJFS-nL7W9DEsRgUonFckNA3Y",
  mapUrl:
    "https://www.google.com/maps/place/?q=place_id:ChIJFS-nL7W9DEsRgUonFckNA3Y",
  // Google Business Profile URL using Place ID - links directly to reviews
  googleReviewsUrl:
    "https://www.google.com/maps/place/?q=place_id:ChIJFS-nL7W9DEsRgUonFckNA3Y",
  instagramUrl: "https://instagram.com/drmullerdentistry",
} as const;

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
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

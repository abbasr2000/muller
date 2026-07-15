export const SITE = {
  name: "Dr. Muller Dentistry St. John's",
  tagline: "Quality implants, root canals, and family dental care in St. John's, Newfoundland",
  address: "386 Stavanger Dr, St. John's, NL A1A 5M9",
  city: "St. John's",
  province: "Newfoundland and Labrador",
  postalCode: "A1A 5M9",
  phone: "(709) 400-7474, Text: (709) 700-1300",
  email: "drmullerdentistry@gmail.com",
  hours:
    "Monday to Saturday 8:00 AM – 7:30 PM, Sundays by appointment only. Only office in Newfoundland with 24/7 access to a dentist via SMS/calls for questions, concerns, and emergencies.",
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
  | "implant-placement"
  | "implant-restoration"
  | "implant-supported-dentures"
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
      shortDescription: "Permanent tooth replacement that looks and feels natural.",
    },
    {
      slug: "implant-placement",
      title: "Implant Placement",
      shortDescription: "Precision implant surgery and guided planning for long-term stability.",
    },
    {
      slug: "implant-restoration",
      title: "Implant Restoration",
      shortDescription: "Custom crowns and prosthetics that complete your implant smile beautifully.",
    },
    {
      slug: "implant-supported-dentures",
      title: "Implant-Supported Dentures",
      shortDescription: "Secure, comfortable dentures anchored by dental implants.",
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
  { href: "/map", label: "Map & Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

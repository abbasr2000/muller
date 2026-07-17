import type { Metadata } from "next";
import { RestorationPage } from "@/components/restoration-page";
import { RESTORATION_PAGES } from "@/lib/restoration-content";

export const metadata: Metadata = {
  title: "Dentures in St. John's, NL | Full & Partial | Dr. Muller Dentistry",
  description:
    "Custom full and partial dentures in St. John's, Newfoundland. Comfortable, natural-looking removable tooth replacement tailored to your smile — learn your options and book a consultation.",
  alternates: { canonical: "/services/dentures" },
  keywords: [
    "dentures St. John's",
    "partial dentures Newfoundland",
    "full dentures NL",
    "removable tooth replacement St. John's",
  ],
  openGraph: {
    title: "Dentures in St. John's, NL | Dr. Muller Dentistry",
    description:
      "Custom full and partial dentures in St. John's, Newfoundland — comfortable, natural-looking removable tooth replacement.",
    url: "https://drmullerdentistry.com/services/dentures",
    siteName: "Dr. Muller Dentistry",
    locale: "en_CA",
    type: "website",
    images: [{ url: "/dentures-hero.png", width: 1024, height: 1024, alt: "Custom denture model at Dr. Muller Dentistry" }],
  },
};

export default function Page() { return <RestorationPage content={RESTORATION_PAGES["dentures"]} />; }

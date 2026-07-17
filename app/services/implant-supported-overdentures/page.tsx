import type { Metadata } from "next";
import { RestorationPage } from "@/components/restoration-page";
import { RESTORATION_PAGES } from "@/lib/restoration-content";

export const metadata: Metadata = {
  title: "Implant-Supported Overdentures in St. John's, NL | Dr. Muller Dentistry",
  description:
    "Snap-in dentures that attach securely to implants in St. John's, Newfoundland. A more stable, confident alternative to conventional dentures — learn how they work and book a consultation.",
  alternates: { canonical: "/services/implant-supported-overdentures" },
  keywords: [
    "implant supported dentures St. John's",
    "snap-in dentures Newfoundland",
    "overdentures NL",
    "implant dentures St. John's",
  ],
  openGraph: {
    title: "Implant-Supported Overdentures in St. John's, NL | Dr. Muller Dentistry",
    description:
      "Snap-in dentures that attach to implants for a secure, stable fit in St. John's, Newfoundland.",
    url: "https://drmullerdentistry.com/services/implant-supported-overdentures",
    siteName: "Dr. Muller Dentistry",
    locale: "en_CA",
    type: "website",
    images: [{ url: "/implant-supported-overdentures-hero.png", width: 1024, height: 1024, alt: "Implant-supported overdenture model at Dr. Muller Dentistry" }],
  },
};

export default function Page() { return <RestorationPage content={RESTORATION_PAGES["implant-supported-overdentures"]} />; }

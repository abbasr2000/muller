import type { Metadata } from "next";
import { RestorationPage } from "@/components/restoration-page";
import { RESTORATION_PAGES } from "@/lib/restoration-content";

export const metadata: Metadata = {
  title: "All-on-4 & All-on-X Implants in St. John's, NL | Dr. Muller Dentistry",
  description:
    "Fixed full-arch tooth replacement with All-on-4 / All-on-X dental implants in St. John's, Newfoundland. A permanent set of teeth for suitable candidates — learn more and book a consultation.",
  alternates: { canonical: "/services/all-on-4-all-on-x" },
  keywords: [
    "All-on-4 St. John's",
    "All-on-X Newfoundland",
    "full arch dental implants NL",
    "fixed implant teeth St. John's",
  ],
  openGraph: {
    title: "All-on-4 & All-on-X Dental Implants in St. John's, NL | Dr. Muller Dentistry",
    description:
      "Fixed full-arch tooth replacement supported by implants in St. John's, Newfoundland — a permanent option for suitable candidates.",
    url: "https://drmullerdentistry.com/services/all-on-4-all-on-x",
    siteName: "Dr. Muller Dentistry",
    locale: "en_CA",
    type: "website",
    images: [{ url: "/all-on-x-hero.png", width: 1024, height: 1024, alt: "Full-arch All-on-X implant restoration model at Dr. Muller Dentistry" }],
  },
};

export default function Page() { return <RestorationPage content={RESTORATION_PAGES["all-on-4-all-on-x"]} />; }

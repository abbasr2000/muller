import type { Metadata } from "next";
import { RestorationPage } from "@/components/restoration-page";
import { RESTORATION_PAGES } from "@/lib/restoration-content";

export const metadata: Metadata = {
  title: "Dental Implants | St. John's NL",
  description: "Learn about Dental Implants at Dr. Muller Dentistry in St. John's, Newfoundland.",
  alternates: { canonical: "/services/dental-implants" },
  openGraph: { images: [{ url: "/dental-implants-hero.png", width: 1024, height: 1024, alt: "Dental Implants at Dr. Muller Dentistry" }] },
};

export default function Page() { return <RestorationPage content={RESTORATION_PAGES["dental-implants"]} />; }

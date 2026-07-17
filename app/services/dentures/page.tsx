import type { Metadata } from "next";
import { RestorationPage } from "@/components/restoration-page";
import { RESTORATION_PAGES } from "@/lib/restoration-content";

export const metadata: Metadata = {
  title: "Dentures | St. John's NL",
  description: "Learn about Dentures at Dr. Muller Dentistry in St. John's, Newfoundland.",
  alternates: { canonical: "/services/dentures" },
  openGraph: { images: [{ url: "/dentures-hero.png", width: 1024, height: 1024, alt: "Dentures at Dr. Muller Dentistry" }] },
};

export default function Page() { return <RestorationPage content={RESTORATION_PAGES["dentures"]} />; }

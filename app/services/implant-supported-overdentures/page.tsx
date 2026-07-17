import type { Metadata } from "next";
import { RestorationPage } from "@/components/restoration-page";
import { RESTORATION_PAGES } from "@/lib/restoration-content";

export const metadata: Metadata = {
  title: "Implant-Supported Overdentures | St. John's NL",
  description: "Learn about Implant-Supported Overdentures at Dr. Muller Dentistry in St. John's, Newfoundland.",
  alternates: { canonical: "/services/implant-supported-overdentures" },
  openGraph: { images: [{ url: "/implant-supported-overdentures-hero.png", width: 1024, height: 1024, alt: "Implant-Supported Overdentures at Dr. Muller Dentistry" }] },
};

export default function Page() { return <RestorationPage content={RESTORATION_PAGES["implant-supported-overdentures"]} />; }

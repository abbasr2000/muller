import type { Metadata } from "next";
import { RestorationPage } from "@/components/restoration-page";
import { RESTORATION_PAGES } from "@/lib/restoration-content";

export const metadata: Metadata = {
  title: "All-on-4 / All-on-X | St. John's NL",
  description: "Learn about All-on-4 / All-on-X at Dr. Muller Dentistry in St. John's, Newfoundland.",
  alternates: { canonical: "/services/all-on-4-all-on-x" },
  openGraph: { images: [{ url: "/all-on-x-hero.png", width: 1024, height: 1024, alt: "All-on-4 / All-on-X at Dr. Muller Dentistry" }] },
};

export default function Page() { return <RestorationPage content={RESTORATION_PAGES["all-on-4-all-on-x"]} />; }

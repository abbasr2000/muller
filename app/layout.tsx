import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://davidmullerdentistry.ca"),
  title: {
    default:
      "David Muller Dentistry | St. John's NL | Root Canal & Dental Care",
    template: "%s | David Muller Dentistry St. John's",
  },
  description:
    "David Muller Dentistry in St. John's, Newfoundland. Expert root canal therapy, general dentistry, cleanings, and full dental care. 386 Stavanger Dr, St. John's NL.",
  keywords: [
    "dentist St. John's",
    "root canal St. John's NL",
    "dentist Newfoundland",
    "David Muller Dentistry",
    "dental clinic St. John's",
    "NL dentist",
  ],
  openGraph: {
    locale: "en_CA",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}

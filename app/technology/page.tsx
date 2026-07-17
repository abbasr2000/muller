import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Box, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Dental Technology in St. John's, NL | CBCT & Microscopes",
  description:
    "CBCT 3D imaging and surgical/endodontic microscopes at Dr. Muller Dentistry in St. John's, Newfoundland — modern tools that support precise implant planning and detailed root canal care.",
  alternates: { canonical: "/technology" },
  keywords: [
    "dental technology St. John's",
    "CBCT 3D imaging Newfoundland",
    "dental cone beam CT St. John's",
    "dental microscope root canal",
  ],
  openGraph: {
    title: "Dental Technology in St. John's, NL | CBCT & Microscopes",
    description:
      "CBCT 3D imaging and surgical/endodontic microscopes that support precise implant planning and detailed root canal care in St. John's.",
    url: "https://drmullerdentistry.com/technology",
    siteName: "Dr. Muller Dentistry",
    locale: "en_CA",
    type: "website",
    images: [{ url: "/technology-hero.png", width: 1024, height: 1024, alt: "CBCT and microscope technology at Dr. Muller Dentistry" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://drmullerdentistry.com" },
    { "@type": "ListItem", position: 2, name: "Technology", item: "https://drmullerdentistry.com/technology" },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Dental Technology in St. John's, NL",
  url: "https://drmullerdentistry.com/technology",
  description:
    "CBCT 3D imaging and surgical/endodontic microscopes that support implant planning and root canal care at Dr. Muller Dentistry.",
  about: { "@type": "Dentist", "@id": "https://drmullerdentistry.com/#dentist" },
};

const links = [
  { title: "Dental Implants", text: "CBCT can support detailed assessment and implant planning when clinically appropriate.", href: "/services/dental-implants" },
  { title: "All-on-4 / All-on-X", text: "3D planning supports a careful conversation about fixed full-arch treatment options.", href: "/services/all-on-4-all-on-x" },
  { title: "Root Canal Therapy", text: "Microscope-assisted care can support detailed endodontic assessment and treatment.", href: "/services/root-canal" },
];

export default function TechnologyPage() {
  return <div>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
    <section className="relative overflow-hidden border-b border-primary/10 bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-16 md:py-24"><div className="container mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2"><div><p className="mb-5 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Modern diagnostic and treatment tools</p><h1 className="text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">Technology with a purpose</h1><p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">Our CBCT 3D imaging and surgical/endodontic microscopes help us assess details, plan thoughtfully, and explain your care clearly.</p><Button asChild size="lg" className="mt-8 rounded-full"><Link href="/book">Book a consultation</Link></Button></div><div className="relative mx-auto aspect-square w-full max-w-lg overflow-hidden rounded-[2rem] border border-primary/15 shadow-xl"><Image src="/technology-hero.png" alt="A modern dental clinic with CBCT imaging and a microscope" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div></div></section>
    <section id="cbct" className="scroll-mt-24 border-b border-primary/10 py-16 md:py-24"><div className="container mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[auto_1fr]"><div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10"><Box className="size-7 text-primary" /></div><div><p className="text-sm font-semibold uppercase tracking-wider text-primary">CBCT 3D imaging</p><h2 className="mt-2 text-3xl font-bold text-foreground">A three-dimensional view when it matters</h2><p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">Cone-beam computed tomography (CBCT) creates a 3D view of teeth, bone, and nearby anatomy. It is used selectively, when the clinical question and your individual needs make the additional information useful.</p><p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">For implant and full-arch planning, CBCT can help us review the anatomy involved and have a clearer planning conversation with you.</p><div className="mt-7 flex flex-wrap gap-3"><Button asChild variant="outline" className="rounded-full"><Link href="/services/dental-implants">Dental implants <ArrowRight className="size-4" /></Link></Button><Button asChild variant="outline" className="rounded-full"><Link href="/services/all-on-4-all-on-x">All-on-4 / All-on-X <ArrowRight className="size-4" /></Link></Button></div></div></div></section>
    <section id="microscope" className="scroll-mt-24 bg-muted/30 py-16 md:py-24"><div className="container mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[auto_1fr]"><div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10"><Microscope className="size-7 text-primary" /></div><div><p className="text-sm font-semibold uppercase tracking-wider text-primary">Surgical & endodontic microscopes</p><h2 className="mt-2 text-3xl font-bold text-foreground">Magnification and illumination for detailed care</h2><p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">A surgical/endodontic microscope provides magnification and illumination that can help us see fine details during assessment and treatment. This can be particularly useful for root canal therapy and endodontic surgical care.</p><p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">Technology is one part of your care. We combine it with a careful examination, clinical judgement, and a treatment plan built around you.</p><Button asChild variant="outline" className="mt-7 rounded-full"><Link href="/services/root-canal">Explore root canal therapy <ArrowRight className="size-4" /></Link></Button></div></div></section>
    <section className="container mx-auto max-w-7xl px-4 py-16 md:py-24"><p className="text-sm font-semibold uppercase tracking-wider text-primary">See it in context</p><h2 className="mt-2 text-3xl font-extrabold text-foreground">Technology connected to your treatment</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{links.map((link) => <article key={link.href} className="rounded-3xl border border-primary/10 bg-card p-7"><h3 className="text-xl font-bold text-foreground">{link.title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{link.text}</p><Link href={link.href} className="mt-5 inline-flex items-center gap-2 font-semibold text-primary">Explore treatment <ArrowRight className="size-4" /></Link></article>)}</div></section>
  </div>;
}

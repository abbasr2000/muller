import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { SITE, NAV_MAIN, SERVICES } from "@/lib/site-config";

export const Footer = () => {
  return (
    <footer className="relative border-t border-primary/10 bg-background overflow-hidden">
      <div className="absolute top-0 left-1/2 -px-1/2 h-[1px] w-3/4 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute bottom-0 right-0 -z-10 size-[400px] translate-y-1/2 translate-x-1/2 bg-primary/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto max-w-7xl px-4 py-16 md:py-20 relative z-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-6 lg:col-span-1">
            <Link
              href="/"
              className="group flex flex-col gap-3 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
              aria-label="Dr. Muller Dentistry - Home"
            >
              <div className="p-3 bg-primary/10 rounded-2xl w-fit group-hover:bg-primary/20 transition-colors">
                <Image
                  src="/logo.png"
                  alt="Dr. Muller Dentistry Logo"
                  width={32}
                  height={32}
                  className="object-contain dark:invert"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                Dr. Muller Dentistry
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-xs">
              Quality dental care for St. John&apos;s and Newfoundland. Root canal
              therapy, general dentistry, top-tier comfort and highly efficient procedures.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Location</h3>
            <address className="text-sm text-muted-foreground not-italic space-y-2">
              <a
                href={SITE.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
              >
                <MapPin className="size-4 mt-0.5 shrink-0" aria-hidden />
                <span>
                  {SITE.address}
                  <br />
                  {SITE.city}, NL {SITE.postalCode}
                </span>
              </a>
              <a
                href={`tel:${SITE.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-2 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded w-fit"
              >
                <Phone className="size-4 shrink-0" aria-hidden />
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded w-fit"
              >
                <Mail className="size-4 shrink-0" aria-hidden />
                {SITE.email}
              </a>
              <p className="flex items-center gap-2">
                <Clock className="size-4 shrink-0" aria-hidden />
                {SITE.hours}
              </p>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded w-fit"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="size-4 shrink-0" aria-hidden />
                Instagram
              </a>
            </address>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {NAV_MAIN.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Services</h3>
            <ul className="space-y-2 text-sm">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  All services →
                </Link>
              </li>
              <li>
                <Link
                  href="/map"
                  className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  Map & reviews
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Dr. Muller Dentistry. Serving St.
            John&apos;s, Newfoundland and Labrador.
          </p>
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-primary hover:underline"
            aria-label="Instagram"
          >
            <Instagram className="size-4" aria-hidden />
            Follow us
          </a>
        </div>
      </div>
    </footer>
  );
};

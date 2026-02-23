import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { SITE, NAV_MAIN, SERVICES } from "@/lib/site-config";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
              aria-label="Dr. Muller Dentistry - Home"
            >
              <Image
                src="/logo.png"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 object-contain invert"
              />
              <span className="font-semibold text-foreground">
                Dr. Muller Dentistry
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Quality dental care for St. John&apos;s and Newfoundland. Root canal
              therapy, general dentistry, and more.
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

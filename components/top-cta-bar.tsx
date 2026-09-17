import Link from "next/link";
import { CalendarCheck, MapPin, MessageSquareText, Phone } from "lucide-react";
import { CONTACT, SITE } from "@/lib/site-config";

// Shared look for every segment in the bar. On phones the segments split the
// width evenly with hairline dividers; from md up they shrink to their content
// and sit on the right of the bar.
const segment =
  "flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap px-2 text-xs font-semibold leading-none transition-colors hover:bg-white/15 active:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/80 border-l border-white/20 first:border-l-0 sm:text-sm md:flex-none md:gap-2 md:border-l-0 md:px-4";

/**
 * Always-visible contact bar that rides above the header. Paired with the
 * header inside one sticky wrapper in the root layout, so it stays on screen
 * as the page scrolls — the same behaviour as the bottom bar on mobile.
 */
export const TopCtaBar = () => {
  return (
    <div className="w-full bg-primary text-primary-foreground">
      <div className="container mx-auto flex h-10 max-w-7xl items-stretch justify-between px-0 md:h-11 md:px-4">
        {/* Address + hours: desktop only, where there is room for it. */}
        <a
          href={CONTACT.directions.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 whitespace-nowrap rounded-full px-3 text-sm font-medium text-primary-foreground/90 transition-colors hover:text-primary-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/80 lg:flex"
        >
          <MapPin className="size-4 shrink-0" aria-hidden />
          <span>
            {SITE.address} — {CONTACT.directions.label}
          </span>
        </a>

        <div className="flex flex-1 items-stretch md:flex-none md:items-center md:gap-1">
          <a
            href={CONTACT.call.href}
            className={segment}
            aria-label={`Call Dr. Muller Dentistry at ${CONTACT.call.display}`}
          >
            <Phone className="size-4 shrink-0" aria-hidden />
            <span className="md:hidden">Call</span>
            <span className="hidden md:inline">
              Call {CONTACT.call.display}
            </span>
          </a>

          <a
            href={CONTACT.text.href}
            className={segment}
            aria-label={`Text Dr. Muller Dentistry at ${CONTACT.text.display}`}
          >
            <MessageSquareText className="size-4 shrink-0" aria-hidden />
            <span className="md:hidden">Text</span>
            <span className="hidden md:inline">
              Text {CONTACT.text.display}
            </span>
          </a>

          <Link
            href={CONTACT.book.href}
            className={`${segment} bg-white/15 md:my-1.5 md:rounded-full md:bg-background md:px-5 md:text-primary md:hover:bg-background/90`}
            aria-label="Book an appointment online"
          >
            <CalendarCheck className="size-4 shrink-0" aria-hidden />
            <span className="md:hidden">Book</span>
            <span className="hidden md:inline">Book Appointment</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

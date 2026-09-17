import Link from "next/link";
import { CalendarCheck, MapPin, MessageSquareText, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CONTACT, SITE } from "@/lib/site-config";

// Shared look for every segment. On phones the three segments split the width
// evenly with hairline dividers and stack their label over the number; from md
// up they shrink to their content and read as one line on the right.
const segment =
  "flex min-w-0 flex-1 items-center justify-center gap-1 whitespace-nowrap px-1 font-semibold sm:gap-1.5 sm:px-1.5 transition-colors hover:bg-white/15 active:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/80 border-l border-white/20 first:border-l-0 md:flex-none md:gap-2 md:border-l-0 md:px-4 md:text-sm";

type Cta = {
  key: string;
  href: string;
  Icon: LucideIcon;
  label: string;
  detail: string;
  ariaLabel: string;
  /** Routed with next/link rather than a plain anchor. */
  internal?: boolean;
  /** Extra classes that lift one action above the others. */
  emphasis?: string;
};

const CTAS: Cta[] = [
  {
    key: "call",
    href: CONTACT.call.href,
    Icon: Phone,
    label: "Call",
    detail: CONTACT.call.display,
    ariaLabel: `Call Dr. Muller Dentistry at ${CONTACT.call.display}`,
  },
  {
    key: "text",
    href: CONTACT.text.href,
    Icon: MessageSquareText,
    label: "Text",
    detail: CONTACT.text.display,
    ariaLabel: `Text Dr. Muller Dentistry at ${CONTACT.text.display}`,
  },
  {
    key: "book",
    href: CONTACT.book.href,
    Icon: CalendarCheck,
    label: "Book",
    detail: "Appointment",
    ariaLabel: "Book an appointment online",
    internal: true,
    // Reads as a filled pill on desktop, a lighter segment on phones.
    emphasis:
      "bg-white/15 md:my-1.5 md:rounded-full md:bg-background md:px-5 md:text-primary md:hover:bg-background/90",
  },
];

/**
 * Always-visible contact bar that rides above the header. Paired with the
 * header inside one sticky wrapper in the root layout, so it stays on screen
 * as the page scrolls — the same behaviour as the bottom bar on mobile.
 */
export const TopCtaBar = () => {
  return (
    <div className="w-full bg-primary text-primary-foreground">
      <div className="container mx-auto flex h-12 max-w-7xl items-stretch justify-between px-0 md:h-11 md:px-4">
        {/* Address + directions: wide screens only, where there is room. */}
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
          {CTAS.map(({ key, href, Icon, label, detail, ariaLabel, internal, emphasis }) => {
            const Tag = internal ? Link : "a";
            return (
              <Tag
                key={key}
                href={href}
                aria-label={ariaLabel}
                className={`${segment}${emphasis ? ` ${emphasis}` : ""}`}
              >
                <Icon className="size-4 shrink-0" aria-hidden />
                {/* Phones: label above the number. md+: a single line. */}
                <span className="flex flex-col items-start leading-tight md:flex-row md:items-center md:gap-1.5 md:leading-none">
                  <span className="text-[0.8125rem] md:text-sm">{label}</span>
                  <span className="text-[0.625rem] font-medium tabular-nums text-primary-foreground/85 md:text-sm md:font-semibold md:text-inherit">
                    {detail}
                  </span>
                </span>
              </Tag>
            );
          })}
        </div>
      </div>
    </div>
  );
};

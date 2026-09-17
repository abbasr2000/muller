import Link from "next/link";
import { CalendarCheck, MessageSquareText, Phone } from "lucide-react";
import { CONTACT } from "@/lib/site-config";

/**
 * Fixed contact bar pinned to the bottom of the viewport on phones. Calling
 * stays the dominant action and keeps the number visible; texting and booking
 * sit beside it so every way of reaching the office is one tap away.
 */
export const MobileCtaBar = () => {
    return (
        <div className="fixed bottom-0 inset-x-0 z-50 md:hidden">
            <div className="flex items-stretch bg-primary text-primary-foreground shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
                <a
                    href={CONTACT.call.href}
                    className="flex flex-[3] items-center justify-center gap-2 px-3 py-4 font-semibold text-sm transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/80"
                    aria-label={`Call Dr. Muller Dentistry at ${CONTACT.call.display}`}
                >
                    <Phone className="size-5 shrink-0 animate-pulse" aria-hidden />
                    Call {CONTACT.call.display}
                </a>

                <a
                    href={CONTACT.text.href}
                    className="flex flex-1 flex-col items-center justify-center gap-1 border-l border-white/25 px-2 py-2 text-[0.7rem] font-semibold leading-none transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/80"
                    aria-label={`Text Dr. Muller Dentistry at ${CONTACT.text.display}`}
                >
                    <MessageSquareText className="size-5 shrink-0" aria-hidden />
                    Text
                </a>

                <Link
                    href={CONTACT.book.href}
                    className="flex flex-1 flex-col items-center justify-center gap-1 border-l border-white/25 px-2 py-2 text-[0.7rem] font-semibold leading-none transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/80"
                    aria-label="Book an appointment online"
                >
                    <CalendarCheck className="size-5 shrink-0" aria-hidden />
                    Book
                </Link>
            </div>
        </div>
    );
};

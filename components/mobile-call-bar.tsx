"use client";

import { Phone } from "lucide-react";
import { SITE } from "@/lib/site-config";

export const MobileCallBar = () => {
    return (
        <div className="fixed bottom-0 inset-x-0 z-50 md:hidden">
            <a
                href={`tel:${SITE.phone.replace(/\D/g, "")}`}
                className="flex items-center justify-center gap-3 bg-primary text-primary-foreground py-4 px-6 font-semibold text-base shadow-[0_-4px_20px_rgba(0,0,0,0.15)] transition-all active:scale-[0.98]"
                aria-label={`Call Dr. Muller Dentistry at ${SITE.phone}`}
            >
                <Phone className="size-5 animate-pulse" aria-hidden />
                Call Now — {SITE.phone}
            </a>
        </div>
    );
};

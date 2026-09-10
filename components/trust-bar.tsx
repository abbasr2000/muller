import { Check } from "lucide-react";
import { TRUST_POINTS } from "@/lib/site-config";

export const TrustBar = () => (
  <div className="border-b border-primary/10 bg-primary/5">
    <div className="container mx-auto max-w-7xl px-4">
      <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-3 text-sm text-foreground/80">
        {TRUST_POINTS.map((point) => (
          <li key={point} className="inline-flex items-center gap-1.5">
            <Check className="size-4 shrink-0 text-primary" aria-hidden />
            <span className="font-medium">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

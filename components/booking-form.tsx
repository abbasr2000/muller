"use client";

import { useMemo, useState } from "react";
import { toast } from "sonner";
import { CheckCircle2, CalendarClock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, SERVICES, WEB3FORMS_ACCESS_KEY } from "@/lib/site-config";

const TIME_BLOCKS = [
  "Morning (8:30 AM – 11:00 AM)",
  "Midday (11:00 AM – 2:00 PM)",
  "Afternoon (2:00 PM – 5:00 PM)",
  "Evening (5:00 PM – 7:00 PM)",
] as const;

// Phone number, digits only, for the tel: fallback link.
const PHONE_DIGITS = SITE.phone.replace(/\D/g, "").slice(0, 10);
const PHONE_DISPLAY = "(709) 400-7474";

const fieldClasses =
  "w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";

const labelClasses = "block text-sm font-medium text-foreground mb-1.5";

export const BookingForm = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  // Minimum selectable date is today (computed on the client to avoid
  // server/client hydration mismatches on a static page).
  const today = useMemo(() => {
    const now = new Date();
    const offset = now.getTimezoneOffset();
    return new Date(now.getTime() - offset * 60_000).toISOString().slice(0, 10);
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("submitting");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New appointment request — ${data.name ?? ""}`,
          from_name: "Dr. Muller Dentistry website",
          ...data,
        }),
      });
      const result = await response.json();

      if (result.success) {
        setStatus("success");
        toast.success("Request sent! We'll call or text to confirm.");
      } else {
        setStatus("idle");
        toast.error(
          `Sorry, that didn't go through. Please call us at ${PHONE_DISPLAY}.`
        );
      }
    } catch {
      setStatus("idle");
      toast.error(
        `Something went wrong. Please call us at ${PHONE_DISPLAY}.`
      );
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-[2rem] border border-primary/20 bg-card/60 p-8 sm:p-12 text-center shadow-2xl backdrop-blur-xl">
        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="size-9" aria-hidden />
        </div>
        <h2 className="mt-6 text-2xl font-bold text-foreground">
          Request received
        </h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Thanks for reaching out. Our team will call or text you shortly to
          confirm your appointment time. For anything urgent, call us directly
          at{" "}
          <a href={`tel:${PHONE_DIGITS}`} className="font-semibold text-primary">
            {PHONE_DISPLAY}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-white/20 bg-card/60 p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 -z-10 size-[300px] -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/10 blur-[80px]" />

      {/* Honeypot: hidden from users, catches bots. */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className={labelClasses}>
            Full name <span className="text-destructive">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Smith"
            className={fieldClasses}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email <span className="text-destructive">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={fieldClasses}
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone <span className="text-destructive">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(709) 000-0000"
            className={fieldClasses}
          />
        </div>

        <div className="sm:col-span-2">
          <span className={labelClasses}>
            Are you a new or existing patient?{" "}
            <span className="text-destructive">*</span>
          </span>
          <div className="flex flex-wrap gap-3">
            {["New patient", "Existing patient"].map((option, index) => (
              <label
                key={option}
                className="flex flex-1 min-w-[9rem] cursor-pointer items-center gap-2 rounded-xl border border-border bg-background/70 px-4 py-3 text-sm text-foreground shadow-sm transition-colors hover:bg-primary/5 has-[:checked]:border-primary has-[:checked]:bg-primary/10"
              >
                <input
                  type="radio"
                  name="patient_type"
                  value={option}
                  required
                  defaultChecked={index === 0}
                  className="accent-primary"
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="service" className={labelClasses}>
            Service <span className="text-destructive">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className={fieldClasses}
          >
            <option value="" disabled>
              Select a service…
            </option>
            {SERVICES.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Not sure / General enquiry">
              Not sure / General enquiry
            </option>
          </select>
        </div>

        <div>
          <label htmlFor="preferred_date" className={labelClasses}>
            Preferred date <span className="text-destructive">*</span>
          </label>
          <input
            id="preferred_date"
            name="preferred_date"
            type="date"
            required
            min={today}
            className={fieldClasses}
          />
        </div>

        <div>
          <label htmlFor="preferred_time" className={labelClasses}>
            Preferred time <span className="text-destructive">*</span>
          </label>
          <select
            id="preferred_time"
            name="preferred_time"
            required
            defaultValue=""
            className={fieldClasses}
          >
            <option value="" disabled>
              Select a time…
            </option>
            {TIME_BLOCKS.map((block) => (
              <option key={block} value={block}>
                {block}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClasses}>
            Anything we should know? (optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Reason for visit, symptoms, questions…"
            className={`${fieldClasses} resize-y`}
          />
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="mt-8 w-full rounded-full shadow-lg shadow-primary/20 transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="size-5 animate-spin" aria-hidden />
            Sending request…
          </>
        ) : (
          <>
            <CalendarClock className="size-5" aria-hidden />
            Request appointment
          </>
        )}
      </Button>

      <p className="mt-4 text-center text-xs text-muted-foreground">
        This sends a request — we&apos;ll call or text to confirm your time.
        Prefer to talk now? Call{" "}
        <a href={`tel:${PHONE_DIGITS}`} className="font-medium text-primary">
          {PHONE_DISPLAY}
        </a>
        .
      </p>
    </form>
  );
};

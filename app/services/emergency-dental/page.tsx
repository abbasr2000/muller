import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, Phone, AlertCircle, Clock, ShieldCheck, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Emergency Dental Care | St. John's NL | Dr. Muller Dentistry",
  description: "Immediate, same-day emergency dental care in St. John's for severe pain, trauma, and urgent issues. Call (709) 400-7474 for urgent appointments.",
  keywords: ["Emergency Dental Care St. John's", "dentist Newfoundland", "Dr. Muller Dentistry", "dental Emergency Dental Care", "emergency dentist NL", "same day dentist St. John's"],
  alternates: {
    canonical: "/services/emergency-dental",
  },
  openGraph: {
    title: "Emergency Dental Care | Dr. Muller Dentistry",
    description: "Immediate, same-day emergency dental care in St. John's for severe pain, trauma, and urgent issues.",
    url: "https://drmullerdentistry.com/services/emergency-dental",
    siteName: "Dr. Muller Dentistry",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/services-hero.png",
        width: 1200,
        height: 630,
        alt: "Emergency Dental Care at Dr. Muller Dentistry",
      }
    ],
  },
};

export default function EmergencyDentalPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{ "@type": "Question", "name": "What exactly qualifies as a true 'Dental Emergency'?", "acceptedAnswer": { "@type": "Answer", "text": "A true dental emergency includes severe, unmanageable toothaches, a tooth that has been knocked entirely out of the mouth, a cracked or badly broken tooth accompanied by sharp pain, significant and uncontrollable bleeding from the gums, or large facial swelling. Extreme swelling that affects breathing or swallowing is a critical medical emergency and warrants an immediate trip to the nearest hospital ER." } }, { "@type": "Question", "name": "What should I do immediately if my tooth gets knocked completely out?", "acceptedAnswer": { "@type": "Answer", "text": "Time is highly critical! Handle the tooth only by the crown (the top part), NEVER the root. Do not scrub it. Gently rinse it with water if dirty, and try your best to temporarily place it back into the socket. If that is impossible, keep it fully submerged in a small cup of milk or your own saliva, and rush to see us within 60 minutes for the highest chance of saving it." } }, { "@type": "Question", "name": "Should I go to the hospital emergency room for my toothache?", "acceptedAnswer": { "@type": "Answer", "text": "In the vast majority of standard toothache cases, a hospital ER can only provide pain medication or temporary antibiotics; they do not have the tools to actually fix the tooth. You must see a dentist to properly resolve the underlying root cause. However, if your dental infection is causing severe, rapid swelling that impacts your ability to breathe, swallow, or see, you MUST go to the hospital ER immediately." } }, { "@type": "Question", "name": "How quickly can I be seen for a dental emergency?", "acceptedAnswer": { "@type": "Answer", "text": "We actively build buffer time into our daily schedule specifically for emergency patients. In most cases, we can see you the same day you call. For severe trauma like a knocked-out tooth, we prioritize getting you in as quickly as possible — ideally within the hour." } }, { "@type": "Question", "name": "What should I do if I crack or break a tooth?", "acceptedAnswer": { "@type": "Answer", "text": "Rinse your mouth gently with warm water. If there is swelling, apply a cold compress to the outside of your cheek for 15–20 minutes at a time. Save any broken pieces of the tooth if possible. Avoid chewing on that side. Take ibuprofen for pain if needed and call us immediately. Do not apply aspirin directly to the gum — this can cause a chemical burn." } }]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://drmullerdentistry.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://drmullerdentistry.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Emergency Dental Care",
        "item": "https://drmullerdentistry.com/services/emergency-dental"
      }
    ]
  };

  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Emergency Dental Care",
    "description": "Immediate, same-day emergency dental care in St. John's for severe pain, trauma, and urgent issues.",
    "url": "https://drmullerdentistry.com/services/emergency-dental",
    "procedureType": "https://health-lifesci.schema.org/NoninvasiveProcedure",
    "body": {
      "@type": "AnatomicalStructure",
      "name": "Mouth"
    },
    "availableService": {
      "@type": "MedicalTherapy",
      "name": "Emergency Dental Care",
      "provider": {
        "@type": "Dentist",
        "@id": "https://drmullerdentistry.com/#dentist"
      }
    }
  };

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
      />

      {/* ========== EMERGENCY HERO — RED THEME ========== */}
      <section className="relative overflow-hidden border-b border-red-900/10 bg-gradient-to-br from-red-50 via-background to-background py-16 md:py-24 dark:from-red-950/20 dark:via-background dark:border-red-500/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 size-[600px] rounded-full bg-red-500/10 blur-[120px]" />

        <div className="container mx-auto max-w-7xl px-4 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/services" className="hover:text-red-500 transition-colors">Services</Link>
            <ChevronRight className="size-4" />
            <span className="text-foreground font-medium flex items-center gap-1.5">
              <AlertCircle className="size-4 text-red-500" />
              Emergency Care
            </span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
            Emergency Dental Care
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed text-balance">
            Dental pain or trauma? We deliberately build buffer time into our daily schedule to accommodate urgent cases and provide same-day care.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/30 px-8 text-lg h-14"
            >
              <a href={`tel:${SITE.phone.replace(/\D/g, "")}`}>
                <Phone className="mr-2 size-5 animate-pulse" />
                Call Now: {SITE.phone}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 h-14 border-red-200 hover:bg-red-50 dark:border-red-900 dark:hover:bg-red-950/50"
            >
              <Link href="/contact">Location & Hours</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ========== SAME-DAY ALERT BANNER ========== */}
      <div className="container mx-auto max-w-4xl px-4 -mt-8 relative z-20">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center shadow-lg dark:bg-red-950/30 dark:border-red-900/50">
          <div className="rounded-full bg-red-100 p-4 shrink-0 dark:bg-red-900/50">
            <Clock className="size-8 text-red-600 dark:text-red-400" />
          </div>
          <div className="text-left flex-1">
            <h3 className="text-xl font-bold text-red-900 dark:text-red-200 mb-2">Same-Day Relief</h3>
            <p className="text-red-800/80 dark:text-red-200/80 leading-relaxed m-0">
              When you&apos;re in severe pain, you shouldn&apos;t have to wait days for an appointment. Call us immediately and we will do our absolute best to see you today. We understand that dental emergencies don&apos;t happen on a convenient schedule.
            </p>
          </div>
        </div>
      </div>

      {/* ========== MAIN CONTENT ========== */}
      <section className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
        <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed">
          <p className="mb-6">
            We know firsthand that a sudden dental emergency can be an incredibly painful, alarming, and highly stressful experience. Whether you&apos;ve woken up with an excruciating, throbbing toothache or suffered an unexpected physical trauma that cracked a tooth, getting professional help rapidly is critical.
          </p>
          <p className="mb-6">
            At Dr. Muller Dentistry, we prioritize dental emergencies. We actively build buffer time into our daily St. John&apos;s schedule specifically so we can do our absolute best to accommodate urgent, severe cases and provide same-day palliative care to get you swiftly out of pain.
          </p>
          <p className="mb-6">
            Our clinic is fully equipped with advanced diagnostic tools to instantly determine the exact root cause of your pain. Dr. Muller will quickly assess the damage, numb the area with profound local anesthesia to provide immediate relief, and immediately discuss the most effective treatment plan with you to permanently resolve the issue.
          </p>
        </div>

        {/* ========== WHAT COUNTS AS AN EMERGENCY? ========== */}
        <h2 className="text-3xl font-extrabold text-foreground mt-20 mb-8">
          What Counts as a Dental Emergency?
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          Not every dental issue is an emergency — but the following situations require immediate attention. If you&apos;re experiencing any of these, call us right away:
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex items-start gap-4 p-6 rounded-2xl border border-red-100 bg-red-50/50 dark:bg-red-950/10 dark:border-red-900/30 transition-all hover:shadow-md">
            <div className="mt-1 rounded-full bg-red-100 p-1.5 shrink-0 dark:bg-red-900/50">
              <AlertCircle className="size-4 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1">Severe Toothache</h3>
              <p className="text-muted-foreground text-sm leading-relaxed m-0">Intense, throbbing pain that doesn&apos;t respond to over-the-counter painkillers, especially if it keeps you awake at night or prevents you from eating.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 rounded-2xl border border-red-100 bg-red-50/50 dark:bg-red-950/10 dark:border-red-900/30 transition-all hover:shadow-md">
            <div className="mt-1 rounded-full bg-red-100 p-1.5 shrink-0 dark:bg-red-900/50">
              <AlertCircle className="size-4 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1">Knocked-Out Tooth</h3>
              <p className="text-muted-foreground text-sm leading-relaxed m-0">A tooth completely knocked out of its socket from a fall, sports injury, or accident. Time is critical — we need to see you within 60 minutes.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 rounded-2xl border border-red-100 bg-red-50/50 dark:bg-red-950/10 dark:border-red-900/30 transition-all hover:shadow-md">
            <div className="mt-1 rounded-full bg-red-100 p-1.5 shrink-0 dark:bg-red-900/50">
              <AlertCircle className="size-4 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1">Cracked or Broken Tooth</h3>
              <p className="text-muted-foreground text-sm leading-relaxed m-0">A visible crack or break in a tooth, especially with sharp pain when biting. This can expose the nerve and lead to rapid infection if untreated.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 rounded-2xl border border-red-100 bg-red-50/50 dark:bg-red-950/10 dark:border-red-900/30 transition-all hover:shadow-md">
            <div className="mt-1 rounded-full bg-red-100 p-1.5 shrink-0 dark:bg-red-900/50">
              <AlertCircle className="size-4 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1">Facial Swelling</h3>
              <p className="text-muted-foreground text-sm leading-relaxed m-0">Swelling in the jaw, cheek, or around the eye caused by a dental infection. If swelling affects breathing or swallowing, go to the ER immediately.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 rounded-2xl border border-red-100 bg-red-50/50 dark:bg-red-950/10 dark:border-red-900/30 transition-all hover:shadow-md">
            <div className="mt-1 rounded-full bg-red-100 p-1.5 shrink-0 dark:bg-red-900/50">
              <AlertCircle className="size-4 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1">Uncontrolled Bleeding</h3>
              <p className="text-muted-foreground text-sm leading-relaxed m-0">Bleeding from the gums or mouth that won&apos;t stop after applying firm pressure with gauze for 15–20 minutes.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 rounded-2xl border border-red-100 bg-red-50/50 dark:bg-red-950/10 dark:border-red-900/30 transition-all hover:shadow-md">
            <div className="mt-1 rounded-full bg-red-100 p-1.5 shrink-0 dark:bg-red-900/50">
              <AlertCircle className="size-4 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1">Lost Crown or Filling</h3>
              <p className="text-muted-foreground text-sm leading-relaxed m-0">A fallen-out crown or filling exposes the inner tooth to bacteria, temperature, and pressure. Keep the crown safe and call us to get it re-cemented quickly.</p>
            </div>
          </div>
        </div>

        {/* ========== WHAT TO DO BEFORE YOU COME IN ========== */}
        <h2 className="text-3xl font-extrabold text-foreground mt-20 mb-4">
          What to Do Before You Come In
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          While you wait to see us, here&apos;s what you can do at home to manage the situation and protect your tooth:
        </p>

        <div className="space-y-6">
          <div className="rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm p-6 sm:p-8 shadow-sm">
            <h3 className="flex items-center gap-3 text-xl font-bold text-foreground mb-3">
              <span className="flex items-center justify-center size-8 rounded-full bg-red-100 text-red-600 font-extrabold text-sm dark:bg-red-900/50 dark:text-red-400">1</span>
              Knocked-Out Tooth
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Time is critical — the first 60 minutes are everything. Pick up the tooth by the <strong>crown only</strong> (the white part you see when you smile). <strong>Never touch the root.</strong> If it&apos;s dirty, rinse it gently under water for no more than 10 seconds — do not scrub it. Try to place it back into the socket and hold it in place by gently biting on a clean cloth. If you can&apos;t reinsert it, keep the tooth submerged in a small cup of <strong>cold milk</strong> or your own <strong>saliva</strong>. Do not let it dry out. Call us immediately and get to our office as fast as you can.
            </p>
          </div>

          <div className="rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm p-6 sm:p-8 shadow-sm">
            <h3 className="flex items-center gap-3 text-xl font-bold text-foreground mb-3">
              <span className="flex items-center justify-center size-8 rounded-full bg-red-100 text-red-600 font-extrabold text-sm dark:bg-red-900/50 dark:text-red-400">2</span>
              Cracked or Broken Tooth
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Rinse your mouth gently with warm water to clean the area. If there is swelling, apply a cold compress (or a bag of frozen peas wrapped in a towel) to the outside of your cheek — 15 minutes on, 15 minutes off. Save any broken pieces of tooth if you can find them. <strong>Avoid chewing on that side entirely.</strong> Take ibuprofen (Advil) for pain — <strong>never apply aspirin directly to the gum</strong> as it causes chemical burns. If there&apos;s a sharp edge cutting your tongue or cheek, cover it with a small piece of sugar-free gum or dental wax until you reach us.
            </p>
          </div>

          <div className="rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm p-6 sm:p-8 shadow-sm">
            <h3 className="flex items-center gap-3 text-xl font-bold text-foreground mb-3">
              <span className="flex items-center justify-center size-8 rounded-full bg-red-100 text-red-600 font-extrabold text-sm dark:bg-red-900/50 dark:text-red-400">3</span>
              Severe Toothache
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Rinse with warm salt water (half a teaspoon of salt in a cup of warm water) to reduce bacteria and soothe the area. Take ibuprofen or acetaminophen as directed on the packaging. <strong>Do not place any painkiller directly on the gum tissue.</strong> If the pain is throbbing and keeps you awake, it likely indicates an infection inside the tooth that requires professional treatment — over-the-counter medicine will not fix the underlying cause. Avoid very hot, very cold, or sweet foods and drinks until you see us.
            </p>
          </div>

          <div className="rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm p-6 sm:p-8 shadow-sm">
            <h3 className="flex items-center gap-3 text-xl font-bold text-foreground mb-3">
              <span className="flex items-center justify-center size-8 rounded-full bg-red-100 text-red-600 font-extrabold text-sm dark:bg-red-900/50 dark:text-red-400">4</span>
              Swelling or Abscess
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              An abscess is a dental infection that has formed a pocket of pus, usually at the root of the tooth. You may see a small bump on the gum that looks like a pimple. Rinse with mild salt water several times a day to draw the infection toward the surface and reduce discomfort. Apply a cold compress to the outside of your face. <strong>Do not try to pop or drain the abscess yourself.</strong> If swelling is spreading rapidly, if you develop a fever, or if the swelling is making it difficult to breathe or swallow, <strong>go to the hospital emergency room immediately</strong> — this can be life-threatening.
            </p>
          </div>

          <div className="rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm p-6 sm:p-8 shadow-sm">
            <h3 className="flex items-center gap-3 text-xl font-bold text-foreground mb-3">
              <span className="flex items-center justify-center size-8 rounded-full bg-red-100 text-red-600 font-extrabold text-sm dark:bg-red-900/50 dark:text-red-400">5</span>
              Lost Crown or Filling
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              If a crown falls off, try to keep it safe and clean. You can temporarily place it back on the tooth using a small amount of denture adhesive or toothpaste — <strong>do not use superglue</strong>. If a filling has fallen out, you can place a small piece of sugar-free gum over the exposed cavity as a temporary cover. Avoid chewing on that side. This isn&apos;t as urgent as trauma, but you should still call us within a day or two to prevent further damage or infection.
            </p>
          </div>
        </div>

        {/* ========== WHAT HAPPENS WHEN YOU ARRIVE ========== */}
        <h2 className="text-3xl font-extrabold text-foreground mt-20 mb-4">
          What Happens When You Arrive
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          We know you&apos;re in pain, so we move fast. Here&apos;s what to expect when you walk through our door:
        </p>

        <div className="space-y-6">
          <div className="flex items-start gap-5 p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm">
            <div className="rounded-full bg-primary/10 p-3 shrink-0 mt-1">
              <Stethoscope className="size-5 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground text-lg mb-2">Immediate Assessment</h3>
              <p className="text-muted-foreground leading-relaxed m-0">
                Dr. Muller will examine the affected area, take any necessary x-rays, and determine exactly what&apos;s causing your pain. We use digital x-rays that provide instant results — no waiting around for film to develop.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5 p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm">
            <div className="rounded-full bg-primary/10 p-3 shrink-0 mt-1">
              <ShieldCheck className="size-5 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground text-lg mb-2">Pain Relief First</h3>
              <p className="text-muted-foreground leading-relaxed m-0">
                Our first priority is always getting you out of pain. We&apos;ll numb the area with local anesthesia so you can finally relax. Depending on the situation, we may prescribe antibiotics to control any infection, pain medication for at-home recovery, or begin immediate treatment.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5 p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm">
            <div className="rounded-full bg-primary/10 p-3 shrink-0 mt-1">
              <ArrowRight className="size-5 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground text-lg mb-2">Treatment Plan</h3>
              <p className="text-muted-foreground leading-relaxed m-0">
                Once the immediate crisis is managed, Dr. Muller will sit down with you and explain exactly what happened, what needs to happen next, and all of your options. We never pressure you into a decision. If the tooth needs a root canal, an extraction, or a crown, we&apos;ll explain why, what it costs, and how long recovery takes — in plain language, not dental jargon.
              </p>
            </div>
          </div>
        </div>

        {/* ========== ER vs DENTIST ========== */}
        <h2 className="text-3xl font-extrabold text-foreground mt-20 mb-4">
          Emergency Room vs. Dentist: Where Should You Go?
        </h2>
        <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed">
          <p className="mb-6">
            This is one of the most common questions we get, and the answer matters. In most dental emergencies, <strong>coming to us is faster and more effective than going to the ER</strong>. Hospital emergency rooms can prescribe painkillers and antibiotics, but they don&apos;t have dental chairs, dental x-ray machines, or the instruments needed to actually fix the tooth. You&apos;ll wait for hours and leave with a prescription — not a solution.
          </p>
          <p className="mb-6">
            At our clinic, we can diagnose the problem with digital x-rays, numb the area, perform emergency root canals, temporarily re-cement a crown, splint a loose tooth, drain an abscess, extract a tooth that can&apos;t be saved — and do it all in the same visit.
          </p>
          <p className="mb-6">
            <strong>However — and this is important — go to the hospital ER immediately if you experience any of the following:</strong>
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 mb-8">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200 dark:bg-red-950/20 dark:border-red-900/40">
            <AlertCircle className="size-5 text-red-600 shrink-0 dark:text-red-400" />
            <p className="text-sm font-medium text-red-900 m-0 dark:text-red-200">Swelling that affects your breathing or ability to swallow</p>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200 dark:bg-red-950/20 dark:border-red-900/40">
            <AlertCircle className="size-5 text-red-600 shrink-0 dark:text-red-400" />
            <p className="text-sm font-medium text-red-900 m-0 dark:text-red-200">Uncontrolled bleeding that won&apos;t stop with firm pressure</p>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200 dark:bg-red-950/20 dark:border-red-900/40">
            <AlertCircle className="size-5 text-red-600 shrink-0 dark:text-red-400" />
            <p className="text-sm font-medium text-red-900 m-0 dark:text-red-200">Facial trauma with suspected broken jaw</p>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200 dark:bg-red-950/20 dark:border-red-900/40">
            <AlertCircle className="size-5 text-red-600 shrink-0 dark:text-red-400" />
            <p className="text-sm font-medium text-red-900 m-0 dark:text-red-200">High fever accompanying facial swelling (sign of spreading infection)</p>
          </div>
        </div>

        <p className="text-muted-foreground text-lg leading-relaxed mb-4">
          In these cases, the ER is equipped to manage the immediate life-threatening situation. Once stabilized, follow up with us for the dental treatment itself.
        </p>

        {/* ========== PREVENTING EMERGENCIES ========== */}
        <h2 className="text-3xl font-extrabold text-foreground mt-20 mb-4">
          How to Prevent Dental Emergencies
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          While accidents happen, many dental emergencies are preventable with good habits:
        </p>

        <div className="my-8 grid gap-4 sm:grid-cols-2">
          <div className="flex items-start gap-3 p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:border-primary/20">
            <div className="mt-1 rounded-full bg-primary/10 p-1 shrink-0">
              <ArrowRight className="size-4 text-primary" />
            </div>
            <p className="font-medium text-foreground m-0 leading-snug">Wear a mouthguard during contact sports (hockey, basketball, martial arts)</p>
          </div>
          <div className="flex items-start gap-3 p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:border-primary/20">
            <div className="mt-1 rounded-full bg-primary/10 p-1 shrink-0">
              <ArrowRight className="size-4 text-primary" />
            </div>
            <p className="font-medium text-foreground m-0 leading-snug">Don&apos;t chew ice, hard candy, or popcorn kernels — these are the top three tooth-crackers</p>
          </div>
          <div className="flex items-start gap-3 p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:border-primary/20">
            <div className="mt-1 rounded-full bg-primary/10 p-1 shrink-0">
              <ArrowRight className="size-4 text-primary" />
            </div>
            <p className="font-medium text-foreground m-0 leading-snug">Keep up with regular cleanings and checkups — we catch cracks and infections before they become emergencies</p>
          </div>
          <div className="flex items-start gap-3 p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:border-primary/20">
            <div className="mt-1 rounded-full bg-primary/10 p-1 shrink-0">
              <ArrowRight className="size-4 text-primary" />
            </div>
            <p className="font-medium text-foreground m-0 leading-snug">Replace old, large fillings before they weaken and fracture the remaining tooth</p>
          </div>
          <div className="flex items-start gap-3 p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:border-primary/20">
            <div className="mt-1 rounded-full bg-primary/10 p-1 shrink-0">
              <ArrowRight className="size-4 text-primary" />
            </div>
            <p className="font-medium text-foreground m-0 leading-snug">If you grind your teeth at night, ask us about a custom night guard to protect your teeth while you sleep</p>
          </div>
          <div className="flex items-start gap-3 p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:border-primary/20">
            <div className="mt-1 rounded-full bg-primary/10 p-1 shrink-0">
              <ArrowRight className="size-4 text-primary" />
            </div>
            <p className="font-medium text-foreground m-0 leading-snug">Never use your teeth as tools — opening bottles, tearing tape, or holding objects</p>
          </div>
        </div>

        {/* ========== FAQ SECTION ========== */}
        <h2 className="text-3xl font-extrabold text-foreground mt-20 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto max-w-3xl space-y-4">
          <details className="group rounded-2xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm open:bg-card/80 transition-all duration-300 shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground text-lg group-open:text-red-600 dark:group-open:text-red-400 transition-colors">
              <span className="pr-6">{`What exactly qualifies as a true 'Dental Emergency'?`}</span>
              <span className="shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary group-open:text-red-600 dark:group-open:text-red-400">
                <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
              {`A true dental emergency includes severe, unmanageable toothaches, a tooth that has been knocked entirely out of the mouth, a cracked or badly broken tooth accompanied by sharp pain, significant and uncontrollable bleeding from the gums, or large facial swelling. Extreme swelling that affects breathing or swallowing is a critical medical emergency and warrants an immediate trip to the nearest hospital ER.`}
            </p>
          </details>
          <details className="group rounded-2xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm open:bg-card/80 transition-all duration-300 shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground text-lg group-open:text-red-600 dark:group-open:text-red-400 transition-colors">
              <span className="pr-6">{`What should I do immediately if my tooth gets knocked completely out?`}</span>
              <span className="shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary group-open:text-red-600 dark:group-open:text-red-400">
                <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
              {`Time is highly critical! Handle the tooth only by the crown (the top part), NEVER the root. Do not scrub it. Gently rinse it with water if dirty, and try your best to temporarily place it back into the socket. If that is impossible, keep it fully submerged in a small cup of milk or your own saliva, and rush to see us within 60 minutes for the highest chance of saving it.`}
            </p>
          </details>
          <details className="group rounded-2xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm open:bg-card/80 transition-all duration-300 shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground text-lg group-open:text-red-600 dark:group-open:text-red-400 transition-colors">
              <span className="pr-6">{`Should I go to the hospital emergency room for my toothache?`}</span>
              <span className="shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary group-open:text-red-600 dark:group-open:text-red-400">
                <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
              {`In the vast majority of standard toothache cases, a hospital ER can only provide pain medication or temporary antibiotics; they do not have the tools to actually fix the tooth. You must see a dentist to properly resolve the underlying root cause. However, if your dental infection is causing severe, rapid swelling that impacts your ability to breathe, swallow, or see, you MUST go to the hospital ER immediately.`}
            </p>
          </details>
          <details className="group rounded-2xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm open:bg-card/80 transition-all duration-300 shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground text-lg group-open:text-red-600 dark:group-open:text-red-400 transition-colors">
              <span className="pr-6">{`How quickly can I be seen for a dental emergency?`}</span>
              <span className="shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary group-open:text-red-600 dark:group-open:text-red-400">
                <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
              {`We actively build buffer time into our daily schedule specifically for emergency patients. In most cases, we can see you the same day you call. For severe trauma like a knocked-out tooth, we prioritize getting you in as quickly as possible — ideally within the hour.`}
            </p>
          </details>
          <details className="group rounded-2xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm open:bg-card/80 transition-all duration-300 shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground text-lg group-open:text-red-600 dark:group-open:text-red-400 transition-colors">
              <span className="pr-6">{`What should I do if I crack or break a tooth?`}</span>
              <span className="shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary group-open:text-red-600 dark:group-open:text-red-400">
                <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
              {`Rinse your mouth gently with warm water. If there is swelling, apply a cold compress to the outside of your cheek for 15–20 minutes at a time. Save any broken pieces of the tooth if possible. Avoid chewing on that side. Take ibuprofen for pain if needed and call us immediately. Do not apply aspirin directly to the gum — this can cause a chemical burn.`}
            </p>
          </details>
        </div>
      </section>

      {/* ========== BOTTOM CTA ========== */}
      <section className="container mx-auto max-w-7xl px-4 pb-32">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-red-500/20 bg-red-50/50 dark:bg-red-950/20 p-10 sm:p-16 text-center shadow-2xl backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 via-transparent to-red-500/5 pointer-events-none"></div>
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl relative z-10">
            Don&apos;t Wait in Pain.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground relative z-10 max-w-2xl mx-auto">
            Dental emergencies get worse with time, not better. Call Dr. Muller Dentistry now and let us take care of you today.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 relative z-10">
            <Button asChild size="lg" className="rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/20 px-8 h-14 text-lg">
              <a href={`tel:${SITE.phone.replace(/\D/g, "")}`}>
                <Phone className="mr-2 size-5" />
                Call {SITE.phone}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14">
              <Link href="/contact">Get Directions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

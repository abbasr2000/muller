import os
import json

base_dir = "/Users/abbasrizvi/muller/app/services"

services_data = {
    "cleanings-checkups": {
        "title": "Cleanings & Checkups",
        "desc": "Professional cleanings and comprehensive dental exams to keep your smile healthy.",
        "content": [
            "Regular dental cleanings and checkups are the absolute foundation of a healthy smile. At Dr. Muller Dentistry in St. John's, we believe that preventive care is the most effective way to protect your long-term oral health and avoid complex dental issues in the future.",
            "Our thorough, gentle cleanings are designed to remove stubborn plaque and calculus (tartar) buildup that regular brushing and flossing at home simply cannot reach. This process is crucial for preventing tooth decay, halting the early stages of gum disease (gingivitis), and keeping your breath fresh. Our highly trained dental hygienists use specialized tools to carefully clean all surfaces of your teeth, including slightly beneath the gumline. We finish by polishing your teeth, removing surface stains from coffee, tea, and food to leave your smile bright and feeling completely refreshed.",
            "Following your cleaning, Dr. Muller will perform a comprehensive dental examination. This includes a meticulous check of each tooth for signs of decay, an assessment of your periodontium (gums and supporting bone), and a routine oral cancer screening. When necessary, we utilize state-of-the-art digital X-rays to look beneath the surface and catch any potential issues before they become major problems. We pride ourselves on taking the time to explain our findings clearly and transparently, answering any questions you may have without rushing you."
        ],
        "benefits": ["Prevents tooth decay and cavities actively", "Helps stop and reverse early gum disease (gingivitis)", "Brightens your overall smile by removing deep surface stains", "Ensures early detection of oral health issues and cancers"],
        "faqs": [
            {"q": "How often should I get a dental cleaning?", "a": "For a majority of our patients, we strongly recommend a professional cleaning and checkup every 6 months. However, if you have a history of active gum disease, orthodontic braces, or other specific medical conditions, we may suggest visiting every 3 to 4 months for optimal care."},
            {"q": "Does a dental cleaning hurt?", "a": "A routine dental cleaning is typically painless and very well-tolerated. If you have highly sensitive teeth, sensitive gums, or dental anxiety, please let our team know ahead of time! We can apply a numbing gel or take extra gentle care to ensure you are 100% comfortable."},
            {"q": "Will X-rays be taken during my checkup?", "a": "We generally recommend updating your diagnostic dental X-rays once a year to check for hidden decay between tight teeth or issues deep below the gumline. If you are a brand new patient, we will likely take a full set of X-rays to establish a comprehensive baseline of your oral health."}
        ]
    },
    "cosmetic-dentistry": {
        "title": "Cosmetic Dentistry",
        "desc": "Professional whitening, custom veneers, and total smile makeovers in St. John's.",
        "content": [
            "Your smile is often the very first thing people notice about you, and it plays a massive role in your self-confidence. If you find yourself hiding your teeth in photos or when laughing because of stubborn stains, minor chips, noticeable gaps, or slight misalignment, our advanced cosmetic dentistry services can help you achieve the bright, beautiful smile you've always wanted.",
            "Cosmetic dentistry has evolved significantly over the years, and today's treatments are more effective, natural-looking, and accessible than ever before. Whether you are looking for a quick and brilliant professional teeth whitening treatment before a major life event, or a complete structural transformation using custom-crafted porcelain veneers, we have the technology to make it happen.",
            "Dr. Muller treats cosmetic dentistry as an art form combined with clinical precision. We start every cosmetic journey with a detailed, pressure-free consultation. We will discuss your specific aesthetic goals, take detailed photographs and impressions, and use these to design a custom smile makeover. Throughout the process, we use the highest-grade dental ceramics and modern bonding agents to ensure that your new smile is not only stunningly beautiful, but also durable and fully functional."
        ],
        "benefits": ["Dramatically enhances the appearance of your smile", "Significantly boosts your self-confidence in social settings", "Customized treatments for a natural, non-artificial look", "Provides long-lasting, durable aesthetic improvements"],
        "faqs": [
            {"q": "What exact cosmetic treatments do you offer?", "a": "We offer a diverse range of cosmetic services tailored to your needs, including high-strength professional teeth whitening, custom ultra-thin porcelain veneers, cosmetic dental bonding for chips, and full-mouth smile makeovers."},
            {"q": "How long does professional teeth whitening last?", "a": "The bright results of professional teeth whitening can last from several months up to a few years. This heavily depends on your specific lifestyle habits (such as smoking, or drinking coffee, tea, and red wine) and how consistently you maintain your at-home oral hygiene."},
            {"q": "Are porcelain veneers permanent?", "a": "Veneers are considered a permanent and irreversible cosmetic solution because a very small, microscopic amount of your natural tooth enamel must be removed to place them flush. However, with excellent care, premium porcelain veneers can last 10-15 years or more before they may need replacement or maintenance."}
        ]
    },
    "crowns-bridges": {
        "title": "Crowns & Bridges",
        "desc": "Restore structural strength and visual appearance with custom crowns and bridges.",
        "content": [
            "When a tooth is severely damaged by deep decay, cracked by trauma, or completely missing, it can severely impact your ability to chew, speak, and smile with confidence. Crowns and bridges offer highly durable, incredibly natural-looking solutions to permanently restore both the structural function and aesthetic appearance of your teeth.",
            "A dental crown (sometimes traditionally referred to as a 'cap') is a custom-made, hollow artificial tooth that fits perfectly over a weakened or heavily filled tooth. It acts like a protective helmet, preventing the natural tooth underneath from fracturing while restoring its original shape and brilliant color. We often highly recommend crowns after a tooth has undergone a root canal to ensure it does not split under chewing pressure.",
            "A dental bridge is a beautiful and effective way to fill the gap left by one or more consecutively missing teeth. It is quite literally a 'bridge' formed by anchoring a false tooth (or teeth) between two protective crowns placed on the healthy adjacent teeth. At Dr. Muller Dentistry, we utilize state-of-the-art digital scanning and high-strength ceramics (like Zirconia and E-max) to craft crowns and bridges that are virtually indistinguishable from your natural teeth."
        ],
        "benefits": ["Provides a structural shield for weak, cracked, or root-canaled teeth", "Quickly restores your ability to chew food and speak clearly", "Prevents remaining healthy teeth from slowly shifting out of alignment", "Uses premium materials to look and feel exactly like natural teeth"],
        "faqs": [
            {"q": "How long does it take to get a crown or a bridge?", "a": "The standard process typically requires two focused visits. During your first visit, the target teeth are prepared, precise digital or physical impressions are taken, and a protective temporary restoration is placed. Your custom-milled crown or bridge will be permanently cemented during your second visit, usually about two weeks later."},
            {"q": "How long do crowns and bridges usually last?", "a": "With excellent oral hygiene at home and regular professional dental checkups, high-quality ceramic crowns and bridges can last 10 to 15 years, and very often much longer. They do not naturally decay, but the natural tooth structure holding them still can, which is why brushing is vital!"},
            {"q": "Does getting a crown hurt?", "a": "Getting a crown is a very routine procedure that is performed under profound local anesthesia. Your tooth and the surrounding gums will be completely numb, making the experience very similar to getting a standard filling in terms of absolute comfort."}
        ]
    },
    "dental-implants": {
        "title": "Dental Implants",
        "desc": "The gold-standard, permanent tooth replacement that looks and feels totally natural.",
        "content": [
            "If you are suffering from one or more missing teeth, dental implants are widely considered by modern dentistry to be the absolute gold standard for replacement. Unlike traditional removable dentures or resting bridges, implants are the only solution that replaces both the visible biting tooth and the missing internal root, providing unmatched chewing stability.",
            "A dental implant is essentially a small, highly biocompatible titanium post that is surgically placed directly into the jawbone. Over a few months, the bone actually naturally fuses to this titanium in a process called osseointegration. Once fully healed, a beautiful custom ceramic crown is securely attached to the post, giving you a brand new tooth that functions, feels, and looks identical to the real thing.",
            "Dr. Muller brings an exceptional level of expertise to this precise procedure, holding prestigious Fellowships from both the ICOI and AAIP. Our St. John's practice utilizes highly advanced 3D CBCT imaging to virtually plan your implant surgery before it even begins, ensuring perfect angulation, maximum safety, and an incredibly fast healing response. Whether you are replacing a single tooth or securing a full lower denture, we can help."
        ],
        "benefits": ["The most permanent, incredibly stable solution for missing teeth", "Actively stimulates the jaw and preserves facial bone structure", "Functions flawlessly like a natural tooth for eating apples or steak", "Completely standalone; does not require grinding down adjacent healthy teeth"],
        "faqs": [
            {"q": "Am I a good candidate for dental implants?", "a": "The vast majority of adults with good general health and sufficient jawbone density are excellent candidates for implants. Even if you have experienced significant bone loss due to long-term missing teeth, advanced procedures like bone grafting can often rebuild the area to make implants possible. We offer very comprehensive consultations to determine your exact candidacy."},
            {"q": "Is the actual implant surgical procedure painful?", "a": "The precise implant placement is performed under profound local anesthesia. Because the jawbone itself has very few nerve endings, most patients are incredibly surprised to report that the procedure is often less uncomfortable than a standard tooth extraction. Minor swelling and mild soreness for a few days afterward are perfectly normal and easily managed with over-the-counter medication."},
            {"q": "How much do dental implants cost?", "a": "The total cost varies significantly depending on exactly how many teeth need replacing, the type of implant required, and whether any preparatory procedures (like gentle bone grafting or sinus lifting) are needed. We will provide a completely detailed, transparent financial estimate during your personal consultation so there are no surprises."}
        ]
    },
    "extractions": {
        "title": "Tooth Extractions",
        "desc": "Safe, painless, and highly comfortable extractions when a tooth simply cannot be saved.",
        "content": [
            "At Dr. Muller Dentistry, our primary and ultimate goal is always to save your natural teeth whenever medically possible. However, there are unfortunate situations where a tooth extraction becomes the best—or the only—option to eliminate severe pain and protect your overall systemic and oral health. ",
            "Extractions are commonly necessary when dealing with extreme, unrestorable tooth decay, highly advanced periodontal (gum) disease that has destroyed the supporting bone, severe physical trauma, or problematic wisdom teeth that are heavily impacted. Leaving a severely infected tooth in the mouth can lead to dangerous abscesses and swelling that can affect your entire body.",
            "We deeply understand that the mere idea of having a tooth 'pulled' can cause significant dental anxiety. Dr. Muller specializes in utilizing incredibly precise, atraumatic techniques combined with modern, profound local anesthesia to ensure you remain completely numb and entirely comfortable throughout the entire procedure. Our focus is on making the experience as smooth and stress-free as possible."
        ],
        "benefits": ["Immediately eliminates severe, throbbing pain from damaged teeth", "Stops and prevents the dangerous spread of infection to other teeth or your bloodstream", "Relieves painful crowding issues and impacted wisdom teeth", "Creates necessary space for vital orthodontic treatment or future implants"],
        "faqs": [
            {"q": "What exactly should I expect during a typical tooth extraction?", "a": "Before doing anything, we will test the area to ensure it is profoundly numb. You will feel a sensation of firm pressure or pushing during the procedure, but you should absolutely not feel any sharp or pinching pain. Due to our advanced techniques, the extraction itself is often surprisingly rapid."},
            {"q": "Do you handle the removal of wisdom teeth?", "a": "Yes! We routinely handle many simple and moderately complex wisdom tooth extractions right here in our St. John's office. If your specific case is evaluated via 3D scan to be exceptionally complex or deeply impacted near a major nerve, we will seamlessly refer you to a trusted local oral surgeon specialist."},
            {"q": "How long is the typical recovery period?", "a": "The initial soft-tissue healing and clotting usually takes about one week, though the underlying bone will take a few months to fully solidify. Before you leave, we will provide you with highly detailed post-operative instructions on what to eat and how to clean the area to ensure a smooth recovery and help you avoid any complications like dry socket."}
        ]
    },
    "fillings": {
        "title": "Fillings",
        "desc": "Invisible, tooth-colored composite resin fillings to beautifully restore teeth affected by decay.",
        "content": [
            "Dental fillings are undoubtedly one of the most common, foundational, and essential procedures we perform daily. When a tooth sustains a cavity—caused when acidic plaque bacteria eat away at the hard outer enamel—removing that active decay and tightly sealing the space is absolutely necessary to stop the cavity from reaching the highly sensitive nerve inside.",
            "If cavities are ignored, they will continuously grow deeper, eventually resulting in severe pain, infection, and the need for a much more complex root canal or full extraction. Catching and filling a cavity early is the key to minimizing pain and preserving your natural smile.",
            "At Dr. Muller Dentistry, we are proud to be a modern, mercury-free practice. We exclusively utilize advanced, tooth-colored composite resin materials for all our fillings. Not only do these highly aesthetic fillings blend seamlessly with the natural shade of your teeth, but they also chemically bond directly to the tooth structure. This bonding provides phenomenal strength and durability, reinforcing the tooth from the inside out without the dark, metallic appearance of traditional amalgam."
        ],
        "benefits": ["Immediately halts the dangerous progression of tooth decay", "Restores the structural integrity, strength, and original shape of the tooth", "Advanced tooth-colored material blends invisibly with your natural smile", "Composite resin tightly bonds to the tooth, requiring less removing of healthy enamel"],
        "faqs": [
            {"q": "How long does it typically take to get a filling?", "a": "Getting a standard filling is a very fast and efficient procedure that usually takes between just 30 to 45 minutes per tooth, largely dependent on the size, depth, and specific location of the cavity being removed."},
            {"q": "Are modern composite fillings truly as strong as old silver (amalgam) fillings?", "a": "Yes. Modern cosmetic composite materials are highly engineered to be incredibly durable and withstand the heavy forces of daily chewing phenomenally well. While dark metal fillings were traditionally considered stronger decades ago, today's advanced bonding composites offer exceptional, reliable longevity for the vast majority of cavities."},
            {"q": "Will my tooth be sensitive right after getting a filling?", "a": "It is completely normal to experience some minor, fleeting sensitivity to extreme hot or cold for a few days up to a week after getting a new filling as the inner tooth nerve settles down. However, if the sensitivity persists for longer, or if you feel a sharp, shooting pain specifically when biting down, please call us so we can quickly and easily adjust your bite!"}
        ]
    },
    "general-dentistry": {
        "title": "General Dentistry",
        "desc": "Complete, comprehensive exams, advanced preventive care, and routine treatments for the entire family.",
        "content": [
            "General dentistry is the absolute cornerstone of maintaining a healthy, beautiful, and pain-free smile for a lifetime. As your dedicated primary dental care provider in St. John's, our comprehensive approach focuses heavily on prevention, highly accurate diagnostic imaging, and utilizing conservative treatments for patients of every age.",
            "We firmly believe that preventing a dental problem is vastly superior to fixing one. By establishing a strong, routine relationship with our clinic, we can continuously monitor the minute changes in your oral health over time. From routine deep-cleaning examinations and vital oral cancer screenings to creating custom sports mouthguards and providing TMJ (jaw joint) therapy, our overarching goal is to catch potential problems when they are entirely microscopic.",
            "At Dr. Muller Dentistry, we are passionate about patient communication. We take the time to comprehensively educate our patients using high-definition intraoral cameras, allowing you to see exactly what we see on screen. We ensure you fully understand the current state of your oral health and exactly how best to care for it effectively at home."
        ],
        "benefits": ["A centralized hub for comprehensive dental care for your entire family", "A hyper-focus on preventing major, painful, and costly dental issues down the road", "Highly personalized, transparent treatment plans tailored to your unique biology", "Ongoing education on utilizing the best modern practices for at-home oral care"],
        "faqs": [
            {"q": "Are you currently accepting new patients into the practice?", "a": "Absolutely, yes! We are currently actively welcoming new patients and families from across St. John's and the surrounding Newfoundland areas. We would be absolutely thrilled to have you join our dental family and experience our premium care."},
            {"q": "At exactly what age should I bring my toddler in for their very first dental visit?", "a": "We highly recommend bringing your child in for their first dedicated dental visit by their first birthday, or within six short months after their very first baby tooth officially erupts. Early, fun visits help them get incredibly comfortable with the dentist chair environment and allow us to closely monitor their early jaw development."},
            {"q": "What should I bring with me to my first new patient appointment?", "a": "Please bring a valid piece of photo ID, your active dental insurance card (if applicable so we can help you with billing), and a completely updated list of any and all medical prescriptions you are currently taking. We will also happily provide you with our streamlined new patient intake forms to easily fill out upon arrival."}
        ]
    },
    "emergency-dental": {
        "title": "Emergency Dental Care",
        "desc": "Immediate, same-day emergency dental care in St. John's for severe pain, trauma, and urgent issues.",
        "content": [
            "We know firsthand that a sudden dental emergency can be an incredibly painful, alarming, and highly stressful experience. Whether you’ve woken up with an excruciating, throbbing toothache or suffered an unexpected physical trauma that cracked a tooth, getting professional help rapidly is critical.",
            "At Dr. Muller Dentistry, we prioritize dental emergencies. We actively build buffer time into our daily St. John's schedule specifically so we can do our absolute best to accommodate urgent, severe cases and provide same-day palliative care to get you swiftly out of pain.",
            "Our clinic is fully equipped with advanced diagnostic tools to instantly determine the exact root cause of your pain. Dr. Muller will quickly assess the damage, numb the area with profound local anesthesia to provide immediate relief, and immediately discuss the most effective treatment plan with you to permanently resolve the issue."
        ],
        "benefits": ["Rapid, incredible relief from severe, throbbing dental pain", "Immediate professional intervention to save knocked-out or badly fractured teeth", "Prevents dangerous underlying dental infections from spreading to the bloodstream", "Restores your profound peace of mind through rapid, expert diagnosis"],
        "faqs": [
            {"q": "What exactly qualifies as a true 'Dental Emergency'?", "a": "A true dental emergency includes severe, unmanageable toothaches, a tooth that has been knocked entirely out of the mouth, a cracked or badly broken tooth accompanied by sharp pain, significant and uncontrollable bleeding from the gums, or large facial swelling. Extreme swelling that affects breathing or swallowing is a critical medical emergency and warrants an immediate trip to the nearest hospital ER."},
            {"q": "What should I do immediately if my tooth gets knocked completely out?", "a": "Time is highly critical! Handle the tooth only by the crown (the top part), NEVER the root. Do not scrub it. Gently rinse it with water if dirty, and try your best to temporarily place it back into the socket. If that is impossible, keep it fully submerged in a small cup of milk or your own saliva, and rush to see us within 60 minutes for the highest chance of saving it."},
            {"q": "Should I go to the hospital emergency room for my toothache?", "a": "In the vast majority of standard toothache cases, a hospital ER can only provide pain medication or temporary antibiotics; they do not have the tools to actually fix the tooth. You must see a dentist to properly resolve the underlying root cause. However, if your dental infection is causing severe, rapid swelling that impacts your ability to breathe, swallow, or see, you MUST go to the hospital ER immediately."}
        ]
    }
}

template = """import type {{ Metadata }} from "next";
import Link from "next/link";
import {{ ArrowRight, ChevronRight }} from "lucide-react";
import {{ Button }} from "@/components/ui/button";

export const metadata: Metadata = {{
  title: "{title} | St. John's NL | Dr. Muller Dentistry",
  description: "{desc}",
  keywords: ["{title} St. John's", "dentist Newfoundland", "Dr. Muller Dentistry", "dental {title}"],
  alternates: {{
    canonical: "/services/{slug}",
  }},
  openGraph: {{
    title: "{title} | Dr. Muller Dentistry",
    description: "{desc}",
    url: "https://drmullerdentistry.com/services/{slug}",
    siteName: "Dr. Muller Dentistry",
    locale: "en_CA",
    type: "website",
    images: [
      {{
        url: "/services-hero.png",
        width: 1200,
        height: 630,
        alt: "{title} at Dr. Muller Dentistry",
      }}
    ],
  }},
}};

export default function ServicePage() {{
  const faqSchema = {{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": {faq_schema_json}
  }};

  const breadcrumbSchema = {{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://drmullerdentistry.com"
      }},
      {{
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://drmullerdentistry.com/services"
      }},
      {{
        "@type": "ListItem",
        "position": 3,
        "name": "{title}",
        "item": "https://drmullerdentistry.com/services/{slug}"
      }}
    ]
  }};

  const procedureSchema = {{
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "{title}",
    "description": "{desc}",
    "url": "https://drmullerdentistry.com/services/{slug}",
    "procedureType": "https://health-lifesci.schema.org/NoninvasiveProcedure",
    "body" : {{
      "@type": "AnatomicalStructure",
      "name": "Mouth"
    }},
    "availableService": {{
      "@type": "MedicalTherapy",
      "name": "{title}",
      "provider": {{
        "@type": "Dentist",
        "@id": "https://drmullerdentistry.com/#dentist"
      }}
    }}
  }};

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{{{ __html: JSON.stringify(faqSchema) }}}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{{{ __html: JSON.stringify(breadcrumbSchema) }}}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{{{ __html: JSON.stringify(procedureSchema) }}}}
      />
      <section className="relative overflow-hidden border-b border-primary/5 bg-gradient-to-br from-background via-muted/30 to-background py-16 md:py-24">
        <div className="absolute top-0 right-0 -z-10 size-[500px] rounded-full bg-primary/10 blur-[130px]" />
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <ChevronRight className="size-4" />
            <span className="text-foreground font-medium">{title}</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed text-balance">
            {desc}
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
        <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed">
{content_blocks}
        </div>

        <div className="my-16 grid gap-6 sm:grid-cols-2">
{benefits_blocks}
        </div>

        <h2 className="text-3xl font-extrabold text-foreground mt-20 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto max-w-3xl space-y-4">
{faqs_blocks}
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 pb-32">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/20 bg-background/50 p-10 sm:p-16 text-center shadow-2xl backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5 pointer-events-none"></div>
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl relative z-10">
            Ready to Schedule Your Appointment?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground relative z-10 max-w-2xl mx-auto">
            Contact Dr. Muller Dentistry today to book your visit.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 relative z-10">
            <Button asChild size="lg" className="rounded-full shadow-lg shadow-primary/20 px-8">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}}
"""

for slug, data in services_data.items():
    content_blocks = "\n".join([f'          <p className="mb-6">{p}</p>' for p in data["content"]])
    
    benefits_html = ""
    for benefit in data["benefits"]:
        benefits_html += f"""          <div className="flex items-start gap-3 p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:border-primary/20">
            <div className="mt-1 rounded-full bg-primary/10 p-1 shrink-0">
              <ArrowRight className="size-4 text-primary" />
            </div>
            <p className="font-medium text-foreground m-0 leading-snug">{{`{benefit}`}}</p>
          </div>\n"""
          
    faqs_html = ""
    for faq in data["faqs"]:
        faqs_html += f"""          <details className="group rounded-2xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm open:bg-card/80 transition-all duration-300 shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground text-lg group-open:text-primary transition-colors">
              <span className="pr-6">{{`{faq["q"]}`}}</span>
              <span className="shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary">
                <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
              {{`{faq["a"]}`}}
            </p>
          </details>\n"""

    faq_entities = []
    for faq in data["faqs"]:
        faq_entities.append({
            "@type": "Question",
            "name": faq["q"],
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq["a"]
            }
        })

    final_content = template.format(
        title=data["title"],
        desc=data["desc"],
        slug=slug,
        content_blocks=content_blocks,
        benefits_blocks=benefits_html,
        faqs_blocks=faqs_html,
        faq_schema_json=json.dumps(faq_entities)
    )
    
    filepath = os.path.join(base_dir, slug, "page.tsx")
    with open(filepath, "w") as f:
        f.write(final_content)
    print(f"Generated extended page for {slug}")

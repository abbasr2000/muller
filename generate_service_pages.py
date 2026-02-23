import os
import json

base_dir = "/Users/abbasrizvi/muller/app/services"

services_data = {
    "cleanings-checkups": {
        "title": "Cleanings & Checkups",
        "desc": "Professional cleanings and comprehensive dental exams to keep your smile healthy.",
        "content": [
            "Regular dental cleanings and checkups are the foundation of a healthy smile. Our St. John's practice provides thorough, gentle care to prevent cavities, gum disease, and other oral health issues before they become major problems.",
            "During your visit, our experienced hygienists will remove plaque and tartar buildup that regular brushing and flossing might miss. Dr. Muller will then perform a comprehensive exam to check for any signs of decay, oral cancer, or other concerns."
        ],
        "benefits": ["Prevents tooth decay and cavities", "Helps stop gum disease (gingivitis)", "Brightens your smile by removing stains", "Early detection of oral health issues"],
        "faqs": [
            {"q": "How often should I get a dental cleaning?", "a": "For most patients, we recommend a professional cleaning and checkup every 6 months. However, if you have a history of gum disease or other specific conditions, we may suggest visiting every 3 to 4 months."},
            {"q": "Does a dental cleaning hurt?", "a": "A routine dental cleaning is typically painless. If you have sensitive teeth or gums, please let our team know so we can take extra care to ensure your comfort."},
            {"q": "Will X-rays be taken during my checkup?", "a": "We generally recommend updating your dental X-rays once a year to check for hidden decay between teeth or issues below the gumline. If you are a new patient, we will likely take a full set of X-rays to establish a baseline."}
        ]
    },
    "cosmetic-dentistry": {
        "title": "Cosmetic Dentistry",
        "desc": "Whitening, veneers, and smile makeovers in St. John's.",
        "content": [
            "Your smile is often the first thing people notice about you. If you're hiding your teeth because of stains, chips, gaps, or misalignment, our cosmetic dentistry services can help you achieve the bright, beautiful smile you've always wanted.",
            "Dr. Muller combines artistry with advanced dental techniques to design custom smile makeovers. Whether you need a simple professional whitening treatment or a complete transformation with porcelain veneers, we'll work with you to understand your goals and create a personalized treatment plan."
        ],
        "benefits": ["Enhances the appearance of your smile", "Boosts your self-confidence", "Customized treatments for natural-looking results", "Long-lasting improvements"],
        "faqs": [
            {"q": "What cosmetic treatments do you offer?", "a": "We offer a range of cosmetic services, including professional teeth whitening, porcelain veneers, dental bonding, and full smile makeovers."},
            {"q": "How long does teeth whitening last?", "a": "The results of professional teeth whitening can last from several months to a few years, depending on your lifestyle habits (such as smoking or drinking coffee/tea) and how well you maintain your oral hygiene."},
            {"q": "Are porcelain veneers permanent?", "a": "Veneers are considered a permanent cosmetic solution because a small amount of enamel must be removed to place them. With proper care, they can last 10-15 years or more before needing replacement."}
        ]
    },
    "crowns-bridges": {
        "title": "Crowns & Bridges",
        "desc": "Restore strength and appearance with custom crowns and bridges.",
        "content": [
            "When a tooth is severely damaged or missing, crowns and bridges offer durable, natural-looking solutions to restore both function and aesthetics. At Dr. Muller Dentistry, we use high-quality materials to create restorations that blend seamlessly with your natural teeth.",
            "A dental crown (or 'cap') fits over a weakened or broken tooth to protect it and restore its shape. A bridge is used to fill the gap left by one or more missing teeth, anchored in place by crowns on the adjacent healthy teeth."
        ],
        "benefits": ["Protects weak or cracked teeth", "Restores the ability to chew and speak properly", "Prevents shifting of adjacent teeth", "Looks and feels like natural teeth"],
        "faqs": [
            {"q": "How long does it take to get a crown or bridge?", "a": "The process typically requires two visits. During the first visit, the tooth is prepared, an impression is taken, and a temporary restoration is placed. Your custom crown or bridge will be permanently placed during your second visit, usually about two weeks later."},
            {"q": "How long do crowns and bridges last?", "a": "With good oral hygiene and regular dental checkups, quality crowns and bridges can last 10 to 15 years, and often much longer."},
            {"q": "Does getting a crown hurt?", "a": "Getting a crown is a routine procedure that is performed under local anesthesia, making it very similar to getting a standard filling in terms of comfort."}
        ]
    },
    "dental-implants": {
        "title": "Dental Implants",
        "desc": "Permanent tooth replacement that looks and feels natural.",
        "content": [
            "Dental implants are widely considered the gold standard for replacing missing teeth. Unlike traditional dentures or bridges, implants replace both the visible tooth and the root, providing unmatched stability and preventing bone loss in your jaw.",
            "Dr. Muller, who holds Fellowships from the ICOI and AAIP, has extensive training in surgical implantology. He uses advanced 3D imaging and precise surgical techniques to ensure your implant is placed safely and securely, giving you a functional, beautiful new tooth."
        ],
        "benefits": ["Permanent, stable solution for missing teeth", "Preserves jawbone health and facial structure", "Functions and feels exactly like a natural tooth", "Does not require altering adjacent healthy teeth"],
        "faqs": [
            {"q": "Am I a good candidate for dental implants?", "a": "Most adults with good general health and sufficient jawbone density are excellent candidates for implants. If you have experienced bone loss, procedures like bone grafting may be performed to make implants possible. We offer comprehensive consultations to determine if implants are right for you."},
            {"q": "Is the implant procedure painful?", "a": "The implant placement is typically done under local anesthesia, and most patients report that it is less uncomfortable than a tooth extraction. Mild soreness for a few days afterward is normal and easily managed with over-the-counter pain medication."},
            {"q": "How much do dental implants cost?", "a": "The cost varies depending on how many teeth need replacing and whether any preparatory procedures (like bone grafting) are required. We will provide a detailed, transparent estimate during your consultation."}
        ]
    },
    "extractions": {
        "title": "Tooth Extractions",
        "desc": "Safe, comfortable extractions when a tooth cannot be saved.",
        "content": [
            "While our primary goal is always to save your natural teeth, there are times when an extraction is the best or only option to protect your overall oral health. Whether you're dealing with severe decay, advanced gum disease, or problematic wisdom teeth, we provide safe and gentle extraction services.",
            "We understand that the idea of having a tooth pulled can cause anxiety. Dr. Muller uses precise techniques and modern local anesthesia to ensure you remain completely numb and comfortable throughout the procedure."
        ],
        "benefits": ["Eliminates pain from severely damaged teeth", "Prevents the spread of infection", "Relieves crowding issues", "Creates space for necessary orthodontic treatment"],
        "faqs": [
            {"q": "What should I expect during a tooth extraction?", "a": "We will numb the area completely before starting. You will feel pressure during the procedure, but you should not feel any pain. The extraction itself is often surprisingly quick."},
            {"q": "Do you remove wisdom teeth?", "a": "Yes, we handle many wisdom tooth extractions in our office. For highly complex or impacted cases, we may refer you to a trusted oral surgeon specialist."},
            {"q": "How long is the recovery?", "a": "Initial healing usually takes about a week, though the bone will take a few months to fully fill in. We will provide detailed post-operative instructions to ensure a smooth recovery and help you avoid complications like dry socket."}
        ]
    },
    "fillings": {
        "title": "Fillings",
        "desc": "Tooth-colored fillings to restore teeth affected by decay.",
        "content": [
            "Dental fillings are one of the most common and essential procedures we perform. When a tooth has a cavity caused by decay, removing that decay and filling the space is necessary to stop the damage and restore the tooth's structure.",
            "At Dr. Muller Dentistry, we exclusively use modern, tooth-colored composite resin fillings. Not only do these fillings blend seamlessly with the natural color of your teeth, but they also bond directly to the tooth structure, providing excellent durability without the need for mercury-containing amalgam."
        ],
        "benefits": ["Stops the progression of tooth decay", "Restores the strength and shape of the tooth", "Tooth-colored material blends naturally with your smile", "Composite resin bonds tightly to the tooth for added support"],
        "faqs": [
            {"q": "How long does it take to get a filling?", "a": "Getting a filling is a quick procedure that usually takes between 30 to 60 minutes per tooth, depending on the size and location of the cavity."},
            {"q": "Are composite fillings as strong as metal (amalgam) fillings?", "a": "Modern composite fillings are highly durable and withstand the forces of normal chewing very well. While metal fillings were traditionally considered stronger for large back molars, today's advanced composites offer excellent longevity for most cavities."},
            {"q": "Will my tooth be sensitive after a filling?", "a": "It is normal to experience some mild sensitivity to hot or cold for a few days after getting a filling as the tooth settles. If the sensitivity persists for more than a week, or if you feel a sharp pain when biting down, let us know so we can adjust it."}
        ]
    },
    "general-dentistry": {
        "title": "General Dentistry",
        "desc": "Complete exams, preventive care, and routine treatments for the whole family.",
        "content": [
            "General dentistry is the cornerstone of maintaining a healthy, beautiful smile for a lifetime. As your primary dental care provider in St. John's, we focus on prevention, accurate diagnosis, and comprehensive treatment for patients of all ages.",
            "From routine examinations and oral cancer screenings to custom night guards and TMJ therapy, our goal is to catch potential problems early and keep your teeth and gums in optimal condition. We take the time to educate our patients, ensuring you understand your oral health and how best to care for it."
        ],
        "benefits": ["Comprehensive care for the entire family", "Focus on preventing major dental issues", "Personalized treatment plans based on your unique needs", "Education on best practices for at-home oral care"],
        "faqs": [
            {"q": "Do you accept new patients?", "a": "Yes! We are currently welcoming new patients from St. John's and the surrounding areas. We’d love to have you join our dental family."},
            {"q": "At what age should I bring my child in for their first visit?", "a": "We recommend bringing your child in for their first dental visit by their first birthday, or within six months after their first tooth erupts. Early visits help them get comfortable with the dentist and allow us to monitor their development."},
            {"q": "What should I bring to my first appointment?", "a": "Please bring a piece of photo ID, your dental insurance card (if applicable), and a list of any medications you are currently taking. We will also have some new patient forms for you to fill out."}
        ]
    }
}

template = """import type {{ Metadata }} from "next";
import Link from "next/link";
import {{ ArrowRight, ChevronRight }} from "lucide-react";
import {{ Button }} from "@/components/ui/button";
import {{ SITE }} from "@/lib/site-config";

export const metadata: Metadata = {{
  title: "{title} | St. John's NL | Dr. Muller Dentistry",
  description: "{desc}",
  keywords: ["{title} St. John's", "dentist Newfoundland", "Dr. Muller Dentistry"],
}};

export default function ServicePage() {{
  return (
    <div className="flex flex-col">
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
        <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none">
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
    content_blocks = "\n".join([f"<p>{p}</p>" for p in data["content"]])
    
    benefits_html = ""
    for benefit in data["benefits"]:
        benefits_html += f"""
          <div className="flex items-start gap-3 p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm">
            <div className="mt-1 rounded-full bg-primary/10 p-1">
              <ArrowRight className="size-4 text-primary" />
            </div>
            <p className="font-medium text-foreground m-0">{benefit}</p>
          </div>"""
          
    faqs_html = ""
    for faq in data["faqs"]:
        faqs_html += f"""
          <details className="group rounded-2xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm open:bg-card/80 transition-all duration-300">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground text-lg group-open:text-primary transition-colors">
              {faq["q"]}
              <span className="ml-4 transition-transform duration-300 group-open:rotate-180 text-primary">
                <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
              {faq["a"]}
            </p>
          </details>"""

    final_content = template.format(
        title=data["title"],
        desc=data["desc"],
        content_blocks=content_blocks,
        benefits_blocks=benefits_html,
        faqs_blocks=faqs_html
    )
    
    filepath = os.path.join(base_dir, slug, "page.tsx")
    with open(filepath, "w") as f:
        f.write(final_content)
    print(f"Generated complete structural page for {slug}")


import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export type RestorationContent = {
  eyebrow: string; title: string; description: string; image: string; imageAlt: string;
  overviewTitle: string; overview: string[];
  benefits: { title: string; description: string }[];
  considerations: { title: string; description: string }[];
  steps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  related: { title: string; description: string; href: string }[];
  technology?: { title: string; description: string; href: string };
};

export function RestorationPage({ content }: { content: RestorationContent }) {
  return <div>
    <section className="relative overflow-hidden border-b border-primary/10 bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-16 md:py-24">
      <div className="container mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        <div><p className="mb-5 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">{content.eyebrow}</p>
          <h1 className="text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">{content.title}</h1>
          <p className="mt-6 text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">{content.description}</p>
          <div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg" className="rounded-full"><Link href="/contact">Book a consultation</Link></Button><Button asChild variant="outline" size="lg" className="rounded-full"><Link href="/services">Explore options</Link></Button></div>
        </div>
        <div className="group relative mx-auto aspect-square w-full max-w-lg overflow-hidden rounded-[2rem] border border-primary/15 bg-card shadow-xl"><Image src={content.image} alt={content.imageAlt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" /></div>
      </div>
    </section>
    <section className="container mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1.15fr_.85fr] md:py-24"><div><h2 className="text-3xl font-bold text-foreground">{content.overviewTitle}</h2>{content.overview.map((text) => <p key={text} className="mt-5 text-lg leading-relaxed text-muted-foreground">{text}</p>)}</div><aside className="rounded-3xl border border-primary/10 bg-card p-7"><h2 className="text-xl font-bold text-foreground">A plan made for you</h2><p className="mt-3 leading-relaxed text-muted-foreground">Your oral health, goals, timeline, and preferences all matter. We&apos;ll explain the options that fit your situation at your consultation.</p></aside></section>
    {content.technology && <section className="border-y border-primary/10 bg-secondary/20 py-10"><div className="container mx-auto flex max-w-6xl flex-col gap-5 px-4 md:flex-row md:items-center md:justify-between"><div><p className="text-sm font-semibold uppercase tracking-wider text-primary">Technology that supports your plan</p><h2 className="mt-2 text-2xl font-bold text-foreground">{content.technology.title}</h2><p className="mt-2 max-w-3xl text-muted-foreground">{content.technology.description}</p></div><Button asChild variant="outline" className="w-fit rounded-full"><Link href={content.technology.href}>Learn more <ArrowRight className="size-4" /></Link></Button></div></section>}
    <section className="container mx-auto max-w-7xl px-4 py-16 md:py-24"><h2 className="text-center text-3xl font-extrabold text-foreground">What this option can offer</h2><div className="mt-10 grid gap-5 md:grid-cols-3">{content.benefits.map((item) => <article key={item.title} className="rounded-3xl border border-primary/10 bg-card p-7"><CheckCircle2 className="size-7 text-primary" /><h3 className="mt-4 text-xl font-bold text-foreground">{item.title}</h3><p className="mt-2 leading-relaxed text-muted-foreground">{item.description}</p></article>)}</div><div className="mt-6 grid gap-4 md:grid-cols-3">{content.considerations.map((item) => <div key={item.title} className="rounded-2xl bg-muted/40 p-6"><h3 className="font-bold text-foreground">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p></div>)}</div></section>
    <section className="border-y border-primary/10 bg-muted/30 py-16"><div className="container mx-auto max-w-6xl px-4"><h2 className="text-center text-3xl font-extrabold text-foreground">What to expect</h2><ol className="mt-10 grid gap-5 md:grid-cols-2">{content.steps.map((step, i) => <li key={step.title} className="relative rounded-3xl border border-primary/10 bg-card p-7 pl-20"><span className="absolute left-7 top-7 flex size-9 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">{i + 1}</span><h3 className="text-xl font-bold text-foreground">{step.title}</h3><p className="mt-2 leading-relaxed text-muted-foreground">{step.description}</p></li>)}</ol></div></section>
    <section className="container mx-auto max-w-7xl px-4 py-16 md:py-24"><p className="text-sm font-semibold uppercase tracking-wider text-primary">Compare your options</p><h2 className="mt-2 text-3xl font-extrabold text-foreground">Related tooth-replacement options</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{content.related.map((item) => <article key={item.href} className="rounded-3xl border border-primary/10 bg-card p-7"><h3 className="text-xl font-bold text-foreground">{item.title}</h3><p className="mt-2 leading-relaxed text-muted-foreground">{item.description}</p><Link href={item.href} className="mt-5 inline-flex items-center gap-2 font-semibold text-primary">Explore <ArrowRight className="size-4" /></Link></article>)}</div></section>
    <section className="border-t border-primary/10 bg-secondary/10 py-16"><div className="container mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1.2fr_.8fr]"><div><h2 className="text-3xl font-extrabold text-foreground">Questions are welcome</h2><div className="mt-6 space-y-3">{content.faqs.map((faq) => <details key={faq.question} className="rounded-2xl border border-primary/10 bg-card px-6 py-5"><summary className="cursor-pointer font-semibold text-foreground">{faq.question}</summary><p className="mt-3 leading-relaxed text-muted-foreground">{faq.answer}</p></details>)}</div></div><aside className="self-start rounded-3xl bg-primary p-8 text-primary-foreground"><h2 className="text-2xl font-bold">Start with a conversation</h2><p className="mt-3 leading-relaxed text-primary-foreground/85">We&apos;ll listen to what you want to change and explain the next step that makes sense for you.</p><Button asChild variant="secondary" className="mt-7 rounded-full"><Link href="/contact">Book a consultation</Link></Button></aside></div></section>
  </div>;
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BLOG_POSTS } from "@/lib/blog-data";

export const metadata: Metadata = {
    title: "Blog | Root Canal & Dental Health Articles",
    description:
        "Read articles by Dr. David Muller about root canal therapy, dental health, and oral care tips for patients in St. John's, Newfoundland.",
    alternates: {
        canonical: "/blog",
    },
    openGraph: {
        title: "Blog | Dr. Muller Dentistry",
        description:
            "Read articles by Dr. David Muller about root canal therapy, dental health, and oral care tips.",
        url: "https://drmullerdentistry.com/blog",
        siteName: "Dr. Muller Dentistry",
        locale: "en_CA",
        type: "website",
        images: [
            {
                url: "/front-page-hero-2.png",
                width: 1200,
                height: 630,
                alt: "Dr. Muller Dentistry Blog",
            },
        ],
    },
};

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-CA", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export default function BlogPage() {
    const [featured, ...rest] = BLOG_POSTS;

    return (
        <div className="flex flex-col">
            <section className="relative overflow-hidden border-b border-primary/5 bg-gradient-to-br from-background via-muted/30 to-background py-16 md:py-24">
                <div className="absolute top-0 right-0 -z-10 size-[500px] rounded-full bg-primary/10 blur-[130px]" />
                <div className="container mx-auto max-w-7xl px-4 text-center">
                    <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                        From Dr. Muller
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
                        Dental Health Blog
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed text-balance">
                        Honest, practical articles about root canal therapy and dental care
                        — written by Dr. David Muller for patients in St. John&apos;s and
                        Newfoundland.
                    </p>
                </div>
            </section>

            <section className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
                {/* Featured latest post */}
                <Link
                    href={`/blog/${featured.slug}`}
                    className="block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl mb-12"
                >
                    <div className="overflow-hidden rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/20 hover:-translate-y-1">
                        <div className="relative aspect-[2.2/1] overflow-hidden">
                            <Image
                                src={featured.image}
                                alt={featured.imageAlt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 z-10">
                                <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground mb-3">
                                    Latest
                                </span>
                                <h2 className="text-2xl font-bold text-foreground sm:text-3xl leading-tight">
                                    {featured.title}
                                </h2>
                            </div>
                        </div>
                        <div className="p-6 sm:p-8">
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                                <span className="inline-flex items-center gap-1.5">
                                    <Calendar className="size-3.5" aria-hidden />
                                    {formatDate(featured.date)}
                                </span>
                                <span className="inline-flex items-center gap-1.5">
                                    <Clock className="size-3.5" aria-hidden />
                                    {featured.readTime}
                                </span>
                                <span className="inline-flex items-center gap-1.5">
                                    <User className="size-3.5" aria-hidden />
                                    {featured.author}
                                </span>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                {featured.description}
                            </p>
                            <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                                Read article
                                <ArrowRight className="size-4" />
                            </div>
                        </div>
                    </div>
                </Link>

                {/* Other posts grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {rest.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
                        >
                            <div className="h-full overflow-hidden rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 flex flex-col">
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.imageAlt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                                        <span className="inline-flex items-center gap-1">
                                            <Calendar className="size-3" aria-hidden />
                                            {formatDate(post.date)}
                                        </span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
                                        {post.title}
                                    </h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1">
                                        {post.description}
                                    </p>
                                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                                        Read more
                                        <ArrowRight className="size-3.5" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-muted-foreground mb-6">
                        Have a question about root canal therapy or dental health?
                    </p>
                    <Button
                        asChild
                        size="lg"
                        className="rounded-full px-8 shadow-lg shadow-primary/20"
                    >
                        <Link href="/contact">Ask Dr. Muller</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}

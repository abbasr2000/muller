import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BLOG_POSTS } from "@/lib/blog-data";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    if (!post) return {};

    return {
        title: post.title,
        description: post.description,
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
        openGraph: {
            title: `${post.title} | Dr. Muller Dentistry`,
            description: post.description,
            url: `https://drmullerdentistry.com/blog/${post.slug}`,
            siteName: "Dr. Muller Dentistry",
            locale: "en_CA",
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
            images: [
                {
                    url: post.image,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
    };
}

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-CA", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    if (!post) notFound();

    const postIndex = BLOG_POSTS.findIndex((p) => p.slug === slug);
    const relatedPosts = BLOG_POSTS.filter((_, i) => i !== postIndex).slice(0, 2);

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        author: {
            "@type": "Person",
            name: post.author,
            jobTitle: "Dentist",
            worksFor: {
                "@type": "Dentist",
                "@id": "https://drmullerdentistry.com/#dentist",
            },
        },
        publisher: {
            "@type": "Organization",
            name: "Dr. Muller Dentistry",
            url: "https://drmullerdentistry.com",
        },
        mainEntityOfPage: `https://drmullerdentistry.com/blog/${post.slug}`,
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://drmullerdentistry.com",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://drmullerdentistry.com/blog",
            },
            {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: `https://drmullerdentistry.com/blog/${post.slug}`,
            },
        ],
    };

    return (
        <div className="flex flex-col">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <section className="relative overflow-hidden border-b border-primary/5 bg-gradient-to-br from-background via-muted/30 to-background py-12 md:py-20">
                <div className="absolute top-0 right-0 -z-10 size-[500px] rounded-full bg-primary/10 blur-[130px]" />
                <div className="container mx-auto max-w-4xl px-4">
                    <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-8">
                        <Link
                            href="/blog"
                            className="hover:text-primary transition-colors"
                        >
                            Blog
                        </Link>
                        <ChevronRight className="size-4" />
                        <span className="text-foreground font-medium line-clamp-1">
                            {post.title}
                        </span>
                    </div>

                    <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                            <User className="size-3.5" aria-hidden />
                            {post.author}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                            <Calendar className="size-3.5" aria-hidden />
                            {formatDate(post.date)}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                            <Clock className="size-3.5" aria-hidden />
                            {post.readTime}
                        </span>
                    </div>
                </div>
            </section>

            <div className="container mx-auto max-w-3xl px-4 mt-10">
                <div className="relative aspect-[2/1] overflow-hidden rounded-2xl shadow-lg">
                    <Image
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            <article className="container mx-auto max-w-3xl px-4 py-12 md:py-20">
                <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed">
                    {post.content.map((paragraph, i) => (
                        <p
                            key={i}
                            className="mb-6"
                            dangerouslySetInnerHTML={{ __html: paragraph }}
                        />
                    ))}
                </div>

                <div className="mt-16 flex flex-wrap items-center gap-2">
                    {post.tags.map((tag) => (
                        <span
                            key={tag}
                            className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <hr className="my-16 border-primary/10" />

                <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-background/50 p-8 sm:p-12 text-center shadow-xl backdrop-blur-xl mb-16">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5 pointer-events-none" />
                    <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl relative z-10">
                        Need Root Canal Therapy?
                    </h2>
                    <p className="mt-3 text-muted-foreground relative z-10 max-w-xl mx-auto">
                        Dr. Muller and the team are here to help. Book an appointment at our
                        St. John&apos;s office.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4 relative z-10">
                        <Button
                            asChild
                            size="lg"
                            className="rounded-full shadow-lg shadow-primary/20 px-8"
                        >
                            <Link href="/contact">Book Appointment</Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="rounded-full px-8"
                        >
                            <Link href="/services/root-canal">Learn About Root Canals</Link>
                        </Button>
                    </div>
                </div>

                {relatedPosts.length > 0 && (
                    <div>
                        <h3 className="text-xl font-bold text-foreground mb-6">
                            More Articles
                        </h3>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {relatedPosts.map((related) => (
                                <Link
                                    key={related.slug}
                                    href={`/blog/${related.slug}`}
                                    className="group block overflow-hidden rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:border-primary/20 hover:-translate-y-0.5"
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <Image
                                            src={related.image}
                                            alt={related.imageAlt}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <p className="text-xs text-muted-foreground mb-2">
                                            {formatDate(related.date)}
                                        </p>
                                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                                            {related.title}
                                        </h4>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                <div className="mt-12">
                    <Button asChild variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
                        <Link href="/blog">
                            <ArrowLeft className="size-4" />
                            Back to all articles
                        </Link>
                    </Button>
                </div>
            </article>
        </div>
    );
}

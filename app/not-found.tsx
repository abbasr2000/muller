import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Page Not Found",
    description: "The page you're looking for doesn't exist. Return to Dr. Muller Dentistry homepage.",
    robots: {
        index: false,
        follow: true,
    },
};

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
            <div className="relative mb-8">
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-[80px] size-[300px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                <p className="relative text-[8rem] font-extrabold text-primary/20 leading-none select-none">
                    404
                </p>
            </div>

            <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl mb-4">
                Page Not Found
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-10 leading-relaxed">
                Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
                have been moved or no longer exists.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
                <Button asChild size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20">
                    <Link href="/">
                        <Home className="mr-2 size-4" />
                        Back to Home
                    </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                    <Link href="/services">
                        <ArrowLeft className="mr-2 size-4" />
                        View Services
                    </Link>
                </Button>
            </div>
        </div>
    );
}

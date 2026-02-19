"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_MAIN } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleToggleMenu = () => setMobileOpen((prev) => !prev);
  const handleCloseMenu = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
          aria-label="David Muller Dentistry - Home"
          onClick={handleCloseMenu}
        >
          <Image
            src="/logo.png"
            alt="David Muller Dentistry logo"
            width={48}
            height={48}
            className="h-10 w-10 object-contain invert sm:h-12 sm:w-12"
          />
          <span className="font-semibold text-foreground hidden sm:inline">
            David Muller Dentistry
          </span>
        </Link>

        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {NAV_MAIN.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="sm" className="ml-2">
            <Link href="/contact">Book Appointment</Link>
          </Button>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={handleToggleMenu}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden border-t border-border/60 bg-background px-4 py-4"
          role="dialog"
          aria-label="Mobile menu"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_MAIN.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2.5 text-sm font-medium text-foreground rounded-md hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                onClick={handleCloseMenu}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={handleCloseMenu} className="mt-2">
              <Button className="w-full">Book Appointment</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

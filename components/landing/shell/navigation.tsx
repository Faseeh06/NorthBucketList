"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Discover", href: "/discover" },
  { name: "Feedbacks", href: "/feedbacks" },
  { name: "Trips", href: "/trips" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const solidNav = isScrolled || !isHome;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Same floating frame on every route (inset, max-width, height transition). Home hero uses transparent bar + light links until scroll. */
  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4 transition-all duration-500 sm:px-5">
      <nav
        className={`relative z-[60] w-full max-w-[min(100%,1760px)] pointer-events-auto transition-all duration-500 ${
          solidNav
            ? "rounded-2xl border border-foreground/10 bg-background/80 shadow-lg backdrop-blur-xl"
            : "rounded-2xl border border-transparent bg-transparent"
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 px-4 sm:px-5 lg:px-6 ${
            solidNav ? "min-h-16 py-1.5" : isHome ? "min-h-24 py-2" : "min-h-16 py-1.5"
          }`}
        >
          <Link href="/" className="group flex shrink-0 items-center">
            <Image
              src="/images/logo.png"
              alt="NorthBucket List"
              width={400}
              height={96}
              priority
              className={`h-11 w-auto max-w-[min(100%,320px)] object-contain object-left transition-all duration-500 sm:h-12 md:h-14 ${
                solidNav ? "opacity-100" : "brightness-0 invert drop-shadow-md"
              }`}
            />
          </Link>

          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors duration-300 relative group ${
                  solidNav
                    ? "text-foreground/70 hover:text-foreground"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                    solidNav ? "bg-foreground" : "bg-white"
                  }`}
                />
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              size="sm"
              className={`rounded-full font-mono text-xs ${
                solidNav
                  ? "bg-foreground hover:bg-foreground/90 text-background px-4 h-8"
                  : "bg-white hover:bg-white/95 text-black px-5 h-9 shadow-md shadow-black/20"
              }`}
              asChild
            >
              <Link href="/contact">Plan a trip</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-500 ${
              isMobileMenuOpen || solidNav ? "text-foreground" : "text-white drop-shadow-md"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden fixed inset-0 z-40 bg-background transition-all duration-500 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: 0 }}
      >
        <div className="flex h-full flex-col px-8 pb-8 pt-24">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="mb-8 inline-block w-fit">
            <Image
              src="/images/logo.png"
              alt="NorthBucket List"
              width={400}
              height={96}
              className="h-12 w-auto max-w-[90vw] object-contain object-left sm:h-14"
            />
          </Link>
          <div className="flex flex-1 flex-col justify-center gap-8">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-5xl font-display text-foreground hover:text-muted-foreground transition-all duration-500 ${
                  isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${i * 75}ms` : "0ms" }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div
            className={`flex flex-col gap-3 pt-8 border-t border-foreground/10 transition-all duration-500 ${
              isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "300ms" : "0ms" }}
          >
            <Button variant="outline" className="w-full rounded-full h-14 text-base" asChild>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
            </Button>
            <Button className="w-full bg-foreground text-background rounded-full h-14 text-base" asChild>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Plan a trip
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

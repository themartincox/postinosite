"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavigationItem {
  href: string;
  label: string;
  special?: boolean;
}

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  // Handle scroll effect with throttling for better performance
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine nav colors based on page and scroll state
  const getNavColors = () => {
    if (isScrolled) {
      return {
        nav: "bg-white shadow-lg",
        logo: "text-midnight-blue",
        links: "text-gray-600",
        activeLinks: "text-midnight-blue",
        contactBtn:
          "border-2 border-coral-red text-coral-red hover:bg-coral-red hover:text-white",
      };
    }

    // Get page-specific hero colors when not scrolled
    if (pathname === "/") {
      return {
        nav: "bg-gradient-to-r from-midnight-blue to-forest-green",
        logo: "text-white",
        links: "text-white/80",
        activeLinks: "text-white",
        contactBtn:
          "border-2 border-coral-red text-coral-red hover:bg-coral-red hover:text-white",
      };
    }
    if (pathname.startsWith("/growth-marketing")) {
      return {
        nav: "bg-forest-green",
        logo: "text-white",
        links: "text-white/80",
        activeLinks: "text-white",
        contactBtn:
          "border-2 border-coral-red text-coral-red hover:bg-coral-red hover:text-white",
      };
    }
    if (pathname.startsWith("/ai-automation")) {
      return {
        nav: "bg-coral-red",
        logo: "text-white",
        links: "text-white/80",
        activeLinks: "text-white",
        contactBtn:
          "border-2 border-coral-red text-white hover:bg-coral-red hover:text-midnight-blue bg-coral-red/20",
      };
    }
    if (pathname === "/case-studies") {
      return {
        nav: "bg-gradient-to-br from-midnight-blue to-forest-green",
        logo: "text-white",
        links: "text-white/80",
        activeLinks: "text-white",
        contactBtn:
          "border-2 border-coral-red text-coral-red hover:bg-coral-red hover:text-white",
      };
    }
    if (pathname.startsWith("/industries")) {
      return {
        nav: "bg-gradient-to-br from-midnight-blue to-forest-green",
        logo: "text-white",
        links: "text-white/80",
        activeLinks: "text-white",
        contactBtn:
          "border-2 border-coral-red text-coral-red hover:bg-coral-red hover:text-white",
      };
    }

    // Default colors for other pages
    return {
      nav: "bg-white shadow-sm",
      logo: "text-midnight-blue",
      links: "text-gray-600",
      activeLinks: "text-midnight-blue",
      contactBtn:
        "border-2 border-coral-red text-coral-red hover:bg-coral-red hover:text-white",
    };
  };

  const navColors = getNavColors();

  const navigationItems = [
    { href: "/growth-marketing", label: "Growth Marketing" },
    { href: "/ai-automation", label: "AI & Automation" },
    { href: "/nottingham/services", label: "Nottingham Services" },
    { href: "/industries", label: "Industries" },
    { href: "/ai-automation-hub", label: "AI Hub", special: true },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <nav
      className={`${navColors.nav} border-b border-white/10 sticky top-0 z-50 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className={`text-2xl font-heading font-bold ${navColors.logo} hover:text-coral-red transition-colors duration-200`}
            >
              Postino.
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              if (item.special) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2 bg-gradient-to-r from-coral-red to-forest-green text-white rounded-lg font-heading font-semibold hover:from-coral-red/90 hover:to-forest-green/90 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    {item.label}
                  </Link>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-heading font-medium transition-all duration-200 relative group ${
                    isActive(item.href)
                      ? `${navColors.activeLinks} font-semibold`
                      : `${navColors.links} hover:text-white`
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-coral-red rounded-full" />
                  )}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coral-red rounded-full group-hover:w-full transition-all duration-200" />
                </Link>
              );
            })}
            <Button
              asChild
              variant="outline"
              className={`${navColors.contactBtn} font-heading font-semibold transition-all duration-200`}
            >
              <Link href="/contact">Contact</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`${navColors.logo} hover:text-coral-red transition-colors p-2`}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/20 py-4 space-y-3">
            {navigationItems.map((item) => {
              if (item.special) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block mx-4 px-4 py-2 bg-gradient-to-r from-coral-red to-forest-green text-white rounded-lg font-heading font-semibold text-center"
                  >
                    {item.label}
                  </Link>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 font-heading font-medium transition-colors rounded-lg ${
                    isActive(item.href)
                      ? `${navColors.activeLinks} bg-white/10 font-semibold`
                      : `${navColors.links} hover:text-white hover:bg-white/10`
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="px-4 pt-2">
              <Button
                asChild
                variant="outline"
                className={`w-full ${navColors.contactBtn} font-heading font-semibold`}
              >
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

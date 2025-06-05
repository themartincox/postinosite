"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  const navigationItems = [
    { href: "/growth-marketing", label: "Growth Marketing" },
    { href: "/ai-automation", label: "AI & Automation" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
  ]

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-heading font-bold text-midnight-blue hover:text-coral-red transition-colors duration-200"
            >
              Postino.
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-heading font-medium transition-all duration-200 relative group ${
                  isActive(item.href)
                    ? 'text-midnight-blue font-semibold'
                    : 'text-gray-600 hover:text-midnight-blue'
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-coral-red rounded-full" />
                )}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coral-red rounded-full group-hover:w-full transition-all duration-200" />
              </Link>
            ))}
            <Button
              asChild
              variant="outline"
              className="border-midnight-blue text-midnight-blue hover:bg-midnight-blue hover:text-white transition-all duration-200"
            >
              <Link href="/contact">Contact</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-midnight-blue hover:text-coral-red transition-colors p-2"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-3">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 font-heading font-medium transition-colors rounded-lg ${
                  isActive(item.href)
                    ? 'text-midnight-blue bg-coral-red/5 font-semibold'
                    : 'text-gray-600 hover:text-midnight-blue hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Button
                asChild
                variant="outline"
                className="w-full border-midnight-blue text-midnight-blue hover:bg-midnight-blue hover:text-white"
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
  )
}

"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import Script from "next/script";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  showHome?: boolean;
  showSchema?: boolean;
}

export function Breadcrumb({
  items,
  className = "",
  showHome = true,
  showSchema = true
}: BreadcrumbProps) {
  // Create breadcrumb list with home if requested
  const breadcrumbItems = showHome ? [
    { label: "Home", href: "/" },
    ...items
  ] : items;

  // Generate schema markup
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.href ? `https://postino.cc${item.href}` : undefined
    }))
  };

  return (
    <nav
      className={`flex items-center space-x-1 text-sm text-gray-600 ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-1">
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="h-4 w-4 text-gray-400 mx-1" />
            )}

            {item.href && !item.current ? (
              <Link
                href={item.href}
                className="hover:text-blue-600 transition-colors flex items-center"
              >
                {index === 0 && showHome && (
                  <Home className="h-4 w-4 mr-1" />
                )}
                {item.label}
              </Link>
            ) : (
              <span
                className={`flex items-center ${
                  item.current ? 'text-gray-900 font-medium' : 'text-gray-600'
                }`}
                aria-current={item.current ? 'page' : undefined}
              >
                {index === 0 && showHome && (
                  <Home className="h-4 w-4 mr-1" />
                )}
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>

      {/* Breadcrumb Schema Markup */}
      {showSchema && (
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      )}
    </nav>
  );
}

export default Breadcrumb;

"use client";

import { useState, useCallback, useMemo } from "react";
import { ChevronDown, ChevronUp, ExternalLink, ArrowRight } from "lucide-react";
import Script from "next/script";
import Link from "next/link";

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface RelatedLink {
  title: string;
  href: string;
  description?: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
  relatedQuestions?: RelatedLink[];
  relatedServices?: RelatedLink[];
  className?: string;
  showSchema?: boolean;
  schemaId?: string;
}

export function FAQSection({
  title = "Frequently Asked Questions",
  subtitle,
  items,
  relatedQuestions = [],
  relatedServices = [],
  className = "",
  showSchema = true,
  schemaId = "faq-schema"
}: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = useCallback((index: number) => {
    setOpenItems(prev => {
      const newOpenItems = new Set(prev);
      if (newOpenItems.has(index)) {
        newOpenItems.delete(index);
      } else {
        newOpenItems.add(index);
      }
      return newOpenItems;
    });
  }, []);

  // Memoize schema to prevent regeneration on each render
  const faqSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }), [items]);

  // Lazy load FAQ answers - only render content when expanded
  const renderFAQAnswer = useCallback((item: FAQItem, index: number) => {
    if (!openItems.has(index)) return null;

    return (
      <div
        id={`faq-answer-${index}`}
        className="px-6 py-4 bg-white border-t border-gray-200"
      >
        <div
          className="text-gray-700 leading-relaxed prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: item.answer }}
        />
      </div>
    );
  }, [openItems]);

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                aria-expanded={openItems.has(index)}
                aria-controls={`faq-answer-${index}`}
                type="button"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  {item.question}
                </h3>
                {openItems.has(index) ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" aria-hidden="true" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" aria-hidden="true" />
                )}
              </button>
              {renderFAQAnswer(item, index)}
            </div>
          ))}
        </div>

        {(relatedQuestions.length > 0 || relatedServices.length > 0) && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              {relatedQuestions.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2" aria-hidden="true" />
                    Related Questions
                  </h3>
                  <div className="space-y-3">
                    {relatedQuestions.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-blue-900 group-hover:text-blue-700">
                            {link.title}
                          </h4>
                          <ExternalLink className="h-4 w-4 text-blue-600" aria-hidden="true" />
                        </div>
                        {link.description && (
                          <p className="text-sm text-blue-700 mt-1">
                            {link.description}
                          </p>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {relatedServices.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <ArrowRight className="h-5 w-5 text-emerald-600 mr-2" aria-hidden="true" />
                    Related Services
                  </h3>
                  <div className="space-y-3">
                    {relatedServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="block p-3 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-emerald-900 group-hover:text-emerald-700">
                            {service.title}
                          </h4>
                          <ExternalLink className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                        </div>
                        {service.description && (
                          <p className="text-sm text-emerald-700 mt-1">
                            {service.description}
                          </p>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {showSchema && (
        <Script
          id={schemaId}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}
    </section>
  );
}

export default FAQSection;

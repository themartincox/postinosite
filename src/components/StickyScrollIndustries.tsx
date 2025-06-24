"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

interface Industry {
  name: string;
  icon: React.ReactNode;
  subtitle: string;
  badge: string;
  badgeColor: string;
  packages: Array<{
    name: string;
    setup: string;
    monthly: string;
    description: string;
  }>;
  features: string[];
  results: string;
  link: string;
}

interface StickyScrollIndustriesProps {
  industries: Industry[];
}

export default function StickyScrollIndustries({ industries }: StickyScrollIndustriesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Calculate progress through the container
      const startTrigger = containerTop - windowHeight;
      const endTrigger = containerTop + containerHeight - windowHeight;
      const progress = Math.max(0, Math.min(1, (scrollY - startTrigger) / (endTrigger - startTrigger)));

      setScrollProgress(progress);

      // Determine active card based on scroll progress
      const totalCards = industries.length;
      const activeCard = Math.min(totalCards - 1, Math.floor(progress * totalCards));
      setActiveIndex(activeCard);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [industries.length]);

  return (
    <div ref={containerRef} className="relative">
      {/* Progress indicator */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-30 hidden lg:flex flex-col space-y-3">
        {industries.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? 'bg-coral-red scale-125 shadow-lg'
                : index < activeIndex
                ? 'bg-coral-red/50'
                : 'bg-gray-300'
            }`}
          />
        ))}
        <div className="w-0.5 bg-gray-300 absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 -z-10">
          <div
            className="w-full bg-coral-red transition-all duration-300 ease-out"
            style={{
              height: `${scrollProgress * 100}%`
            }}
          />
        </div>
      </div>

      {/* Sticky scroll cards */}
      <div className="space-y-0">
        {industries.map((industry, index) => {
          const isReverse = index % 2 === 1;
          const isActive = index === activeIndex;
          const isPast = index < activeIndex;
          const isFuture = index > activeIndex;

          return (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`sticky top-0 min-h-screen flex items-center transition-all duration-500 ${
                isPast ? 'opacity-20' : isFuture ? 'opacity-60' : 'opacity-100'
              }`}
              style={{
                zIndex: industries.length - index,
                transform: isPast
                  ? 'translateY(-20px) scale(0.95)'
                  : isFuture
                  ? 'translateY(20px)'
                  : 'translateY(0)',
              }}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <Card className="overflow-hidden shadow-2xl border-0 bg-white">
                  <div className={`grid lg:grid-cols-2 gap-0 ${isReverse ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Content Side */}
                    <div className={`p-8 lg:p-12 ${isReverse ? 'lg:col-start-2' : ''}`}>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="text-midnight-blue">
                          {industry.icon}
                        </div>
                        <h3 className="text-2xl font-heading font-bold text-midnight-blue">
                          {industry.name}
                        </h3>
                        <Badge className={`${industry.badgeColor} text-white ml-auto`}>
                          {industry.badge}
                        </Badge>
                      </div>

                      <p className="font-body text-gray-600 mb-6 italic text-lg">
                        {industry.subtitle}
                      </p>

                      <div className="space-y-4 mb-6">
                        {industry.packages.map((pkg, pkgIndex) => (
                          <div key={pkgIndex} className="bg-soft-gray p-4 rounded-lg">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-heading font-semibold text-midnight-blue">
                                {pkg.name}
                              </h4>
                              <div className="text-right">
                                <div className="text-lg font-heading font-bold text-coral-red">
                                  {pkg.setup}
                                </div>
                                <div className="text-sm text-gray-600">
                                  {pkg.monthly}
                                </div>
                              </div>
                            </div>
                            <p className="text-sm font-body text-gray-600">
                              {pkg.description}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mb-6">
                        <h4 className="font-heading font-semibold text-midnight-blue mb-3">
                          Key Features:
                        </h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {industry.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center font-body text-gray-600 text-sm">
                              <Check className="h-4 w-4 text-forest-green mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-forest-green/10 p-4 rounded-lg mb-6">
                        <p className="font-heading font-semibold text-forest-green">
                          Typical Results: {industry.results}
                        </p>
                      </div>

                      <Button asChild className="bg-coral-red hover:bg-coral-red/90 text-white">
                        <Link href={industry.link}>
                          View {industry.name} Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>

                    {/* Visual Side */}
                    <div className={`bg-gradient-to-br from-midnight-blue/5 to-forest-green/5 p-8 lg:p-12 flex items-center ${isReverse ? 'lg:col-start-1' : ''}`}>
                      <div className="w-full">
                        <div className="w-32 h-32 bg-gradient-to-br from-coral-red to-coral-red/70 rounded-full flex items-center justify-center mx-auto mb-6 transform transition-transform duration-500 hover:scale-110">
                          <div className="text-white text-6xl">
                            {industry.icon}
                          </div>
                        </div>
                        <div className="text-center">
                          <h4 className="text-xl font-heading font-bold text-midnight-blue mb-2">
                            Ready to Transform Your {industry.name}?
                          </h4>
                          <p className="font-body text-gray-600">
                            Get a free consultation and revenue forecast
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

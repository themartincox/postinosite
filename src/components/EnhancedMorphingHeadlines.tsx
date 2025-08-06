"use client";

import { useState, useEffect, useCallback } from "react";

const headlines = [
  { primary: "We're Postino.", secondary: "We Deliver:", highlight: "Strategic Innovation" },
  { primary: "We're Postino.", secondary: "We Deliver:", highlight: "AI-Powered Results" },
  { primary: "We're Postino.", secondary: "We Deliver:", highlight: "Measurable Growth" },
  { primary: "We're Postino.", secondary: "We Deliver:", highlight: "Intelligent Automation" },
  { primary: "We're Postino.", secondary: "We Deliver:", highlight: "Exceptional Value" },
];

export default function EnhancedMorphingHeadlines() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  const nextHeadline = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % headlines.length);
      setIsVisible(true);
    }, 300);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(nextHeadline, 4000);
    return () => clearInterval(interval);
  }, [mounted, nextHeadline]);

  // Prevent hydration mismatch and layout shifts
  if (!mounted) {
    return (
      <div className="morphing-container min-h-[400px] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl lg:text-9xl font-heading font-bold mb-6 text-white">
            <span className="block">We're Postino.</span>
            <span className="block">We Deliver:</span>
            <span className="block text-orange-200">Strategic Innovation</span>
          </h1>
        </div>
      </div>
    );
  }

  const currentHeadline = headlines[currentIndex];

  return (
    <div className="morphing-container min-h-[400px] flex items-center justify-center">
      <div className="text-center relative">
        {/* Fixed structure to prevent layout shifts */}
        <h1 className="text-6xl lg:text-9xl font-heading font-bold mb-6 text-white leading-tight">
          <span className="block mb-2">{currentHeadline.primary}</span>
          <span className="block mb-2">{currentHeadline.secondary}</span>
          <span
            className={`block text-orange-200 transition-all duration-500 ease-in-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{
              textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
              minHeight: 'clamp(80px, 10vw, 200px)' // Prevent height changes
            }}
          >
            {currentHeadline.highlight}
          </span>
        </h1>
      </div>
    </div>
  );
}

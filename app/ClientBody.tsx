"use client";

import { useEffect } from "react";
import { initPerformanceMonitoring } from "@/lib/performance-monitoring";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";

    // Initialize performance monitoring
    initPerformanceMonitoring();
  }, []);

  return <div className="antialiased">{children}</div>;
}

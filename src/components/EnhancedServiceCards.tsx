"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Target } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useRef, useState } from "react";

export default function EnhancedServiceCards() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      className="grid lg:grid-cols-2 gap-8 relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      ref={cardRef}
      onMouseMove={handleMouseMove}
    >
      {/* Growth Marketing Card */}
      <motion.div variants={cardVariants}>
        <Link href="/growth-marketing" className="block">
          <Card
            className={`bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden group ${
              hoveredCard === "growth" ? "scale-105 shadow-2xl" : ""
            }`}
            onMouseEnter={() => setHoveredCard("growth")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-forest-green/5 via-transparent to-coral-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <CardHeader className="text-center pb-4 relative z-10">
              <motion.div
                className="w-20 h-20 bg-forest-green rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Target className="h-10 w-10 text-white" />
              </motion.div>
              <CardTitle className="text-3xl font-heading text-midnight-blue mb-2">
                Growth Marketing Services
              </CardTitle>
              <CardDescription className="text-lg font-heading font-medium text-gray-600">
                Expert strategies that drive measurable growth
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 relative z-10">
              <div className="space-y-4">
                {[
                  {
                    label: "Inbound",
                    desc: "SEO, Content Strategy, Email Marketing, Social Media",
                  },
                  {
                    label: "Branding",
                    desc: "Brand Identity, Design, Website Development, Conversion Funnels",
                  },
                  {
                    label: "Strategy",
                    desc: "Market Research, Planning, Analytics, CRO",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <Badge
                      variant="secondary"
                      className="bg-forest-green/15 text-forest-green font-heading font-semibold flex-shrink-0 mt-0.5"
                    >
                      {item.label}
                    </Badge>
                    <p className="font-heading text-gray-700 text-sm font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="text-center mt-6 pt-4 border-t border-gray-100"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="font-heading font-semibold text-forest-green flex items-center justify-center">
                  Explore Growth Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </motion.div>
            </CardContent>

            {/* Mouse-following particles */}
            {hoveredCard === "growth" && (
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 8 }, (_, i) => (
                  <motion.div
                    key={`growth-particle-${i}`}
                    className="absolute w-2 h-2 bg-forest-green rounded-full"
                    initial={{
                      x: Math.random() * 400,
                      y: Math.random() * 300,
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{
                      x: mousePosition.x + (Math.random() - 0.5) * 80,
                      y: mousePosition.y + (Math.random() - 0.5) * 80,
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            )}
          </Card>
        </Link>
      </motion.div>

      {/* AI Automation Card */}
      <motion.div variants={cardVariants}>
        <Link href="/ai-automation" className="block">
          <Card
            className={`bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden group ${
              hoveredCard === "ai" ? "scale-105 shadow-2xl" : ""
            }`}
            onMouseEnter={() => setHoveredCard("ai")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-coral-red/5 via-transparent to-midnight-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <CardHeader className="text-center pb-4 relative z-10">
              <motion.div
                className="w-20 h-20 bg-coral-red rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Brain className="h-10 w-10 text-white" />
              </motion.div>
              <CardTitle className="text-3xl font-heading text-midnight-blue mb-2">
                AI & Automation Solutions
              </CardTitle>
              <CardDescription className="text-lg font-heading font-medium text-gray-600">
                Intelligent systems that scale your operations
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 relative z-10">
              <div className="space-y-4">
                {[
                  {
                    label: "Process",
                    desc: "Business Process Automation, Workflow Optimisation",
                  },
                  {
                    label: "Intelligence",
                    desc: "Data Analysis, CRM Automation, Customer Insights",
                  },
                  {
                    label: "Custom AI",
                    desc: "Chatbots, Lead Routing, Task Management",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <Badge
                      variant="secondary"
                      className="bg-coral-red/15 text-coral-red font-heading font-semibold flex-shrink-0 mt-0.5"
                    >
                      {item.label}
                    </Badge>
                    <p className="font-heading text-gray-700 text-sm font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="text-center mt-6 pt-4 border-t border-gray-100"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="font-heading font-semibold text-coral-red flex items-center justify-center">
                  Discover AI Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </motion.div>
            </CardContent>

            {/* Mouse-following particles */}
            {hoveredCard === "ai" && (
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 8 }, (_, i) => (
                  <motion.div
                    key={`ai-particle-${i}`}
                    className="absolute w-2 h-2 bg-coral-red rounded-full"
                    initial={{
                      x: Math.random() * 400,
                      y: Math.random() * 300,
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{
                      x: mousePosition.x + (Math.random() - 0.5) * 80,
                      y: mousePosition.y + (Math.random() - 0.5) * 80,
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            )}
          </Card>
        </Link>
      </motion.div>
    </motion.div>
  );
}

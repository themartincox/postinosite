import * as React from "react"
import { cn } from "@/lib/utils"

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {}

export function Breadcrumb({ children, ...props }: BreadcrumbProps) {
  return (
    <nav className="flex" aria-label="Breadcrumb" {...props}>
      <ol className="flex items-center space-x-4">{children}</ol>
    </nav>
  )
}

export function BreadcrumbList({ children }: { children: React.ReactNode }) {
  return <ol className="flex items-center space-x-4">{children}</ol>
}

export function BreadcrumbItem({ children }: { children: React.ReactNode }) {
  return <li className="flex items-center">{children}</li>
}

export function BreadcrumbLink({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <a
      href={href}
      className={cn("text-sm font-medium text-muted-foreground hover:text-primary", className)}
    >
      {children}
    </a>
  )
}

export function BreadcrumbSeparator() {
  return <span className="mx-2 text-muted-foreground">/</span>
}

export function BreadcrumbPage({ children }: { children: React.ReactNode }) {
  return <span className="text-sm font-medium text-foreground">{children}</span>
}

// Export all for use in individual imports
export {
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
}

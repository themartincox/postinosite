import type * as React from "react"
import { cn } from "@/lib/utils"

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {}

function Breadcrumb({ children, ...props }: BreadcrumbProps) {
  return (
    <nav className="flex" aria-label="Breadcrumb" {...props}>
      <ol className="flex items-center space-x-4">{children}</ol>
    </nav>
  )
}

const BreadcrumbList = ({ children }: { children: React.ReactNode }) => (
  <ol className="flex items-center space-x-4">{children}</ol>
)

const BreadcrumbItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-center">{children}</li>
)

const BreadcrumbLink = ({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) => (
  <a
    href={href}
    className={cn("text-sm font-medium text-muted-foreground hover:text-primary", className)}
  >
    {children}
  </a>
)

const BreadcrumbSeparator = () => (
  <span className="mx-2 text-muted-foreground">/</span>
)

const BreadcrumbPage = ({ children }: { children: React.ReactNode }) => (
  <span className="text-sm font-medium text-foreground">{children}</span>
)

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
}
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const navigation = [
  {
    title: "Getting Started",
    links: [
      { title: "Installation", href: "/docs/installation" },
      { title: "Quick Start", href: "/docs/quick-start" },
      { title: "Configuration", href: "/docs/configuration" },
    ],
  },
  {
    title: "Core Concepts",
    links: [
      { title: "Architecture", href: "/docs/architecture" },
      { title: "State Machine", href: "/docs/state-machine" },
      { title: "Character Consistency", href: "/docs/characters" },
      { title: "Visual Grounding", href: "/docs/visual-grounding" },
    ],
  },
  {
    title: "API Reference",
    links: [
      { title: "VideoOrchestrator", href: "/docs/api/orchestrator" },
      { title: "Providers", href: "/docs/api/providers" },
      { title: "Request Types", href: "/docs/api/request" },
    ],
  },
  {
    title: "Guides",
    links: [
      { title: "First Production", href: "/docs/guides/first-production" },
      { title: "Multi-Shot Sequences", href: "/docs/guides/multi-shot" },
      { title: "Custom Styles", href: "/docs/guides/custom-styles" },
    ],
  },
]

export function DocsSidebar() {
  const pathname = usePathname()
  const [expanded, setExpanded] = useState<string | null>("Getting Started")

  return (
    <aside className="w-64 border-r border-border bg-background sticky top-0 h-screen overflow-y-auto">
      <div className="p-6 border-b border-border">
        <Link href="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
          MiniStudio
        </Link>
      </div>

      <nav className="px-4 py-6">
        {navigation.map((section) => (
          <div key={section.title} className="mb-8">
            <button
              onClick={() => setExpanded(expanded === section.title ? null : section.title)}
              className="flex items-center justify-between w-full px-2 py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              {section.title}
              <ChevronDown
                className={cn("w-4 h-4 transition-transform", expanded === section.title && "rotate-180")}
              />
            </button>

            {expanded === section.title && (
              <ul className="space-y-1 mt-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "block px-2 py-1.5 text-sm rounded-md transition-colors",
                        pathname === link.href
                          ? "bg-primary text-primary-foreground font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-card"
                      )}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </aside>
  )
}

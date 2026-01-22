"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ChevronDown, Menu, X } from "lucide-react"
import { useState } from "react"

const navigation = [
  {
    title: "Getting Started",
    links: [
      { title: "Installation", href: "/docs/installation" },
      { title: "Quick Start", href: "/docs/quick-start" },
      { title: "How We Built It", href: "/docs/how-we-built-it" },
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const SidebarContent = () => (
    <>
      <div className="p-4 sm:p-6 border-b border-white/10">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="MiniStudio Logo" className="w-6 h-6" />
          <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            MINISTUDIO
          </span>
        </Link>
      </div>

      <nav className="px-3 sm:px-4 py-4 sm:py-6">
        {navigation.map((section) => (
          <div key={section.title} className="mb-6 sm:mb-8">
            <button
              onClick={() => setExpanded(expanded === section.title ? null : section.title)}
              className="flex items-center justify-between w-full px-2 py-2 text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
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
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "block px-2 py-1.5 text-sm rounded-md transition-colors",
                        pathname === link.href
                          ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 font-medium border border-cyan-500/30"
                          : "text-white/60 hover:text-white hover:bg-white/5"
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
    </>
  )

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-black/80 backdrop-blur border border-white/10 text-white"
      >
        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:sticky top-0 h-screen overflow-y-auto bg-black border-r border-white/10 z-40 transition-transform duration-300",
          "w-64 sm:w-72",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <SidebarContent />
      </aside>
    </>
  )
}

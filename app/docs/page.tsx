import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DocsPage() {
  const sections = [
    {
      title: "Getting Started",
      description: "Learn how to install and configure MiniStudio",
      items: [
        { title: "Installation", href: "/docs/installation" },
        { title: "Quick Start", href: "/docs/quick-start" },
        { title: "Configuration", href: "/docs/configuration" },
      ],
    },
    {
      title: "Core Concepts",
      description: "Understand the architecture and key features",
      items: [
        { title: "Architecture", href: "/docs/architecture" },
        { title: "State Machine", href: "/docs/state-machine" },
        { title: "Character Consistency", href: "/docs/characters" },
      ],
    },
    {
      title: "API Reference",
      description: "Complete API documentation",
      items: [
        { title: "VideoOrchestrator", href: "/docs/api/orchestrator" },
        { title: "Providers", href: "/docs/api/providers" },
      ],
    },
  ]

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-foreground">Documentation</h1>
        <p className="text-lg text-muted-foreground">
          Everything you need to know about MiniStudio, from getting started to advanced usage.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {sections.map((section) => (
          <div key={section.title} className="border border-border rounded-lg p-6 bg-card hover:border-primary/50 transition-colors">
            <h2 className="text-2xl font-bold mb-2 text-foreground">{section.title}</h2>
            <p className="text-muted-foreground mb-6">{section.description}</p>
            <ul className="space-y-3">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-primary hover:underline flex items-center gap-2 group">
                    {item.title}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border border-border rounded-lg p-8 bg-card">
        <h2 className="text-2xl font-bold mb-4 text-foreground">Quick Links</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/docs/installation">
            <Button variant="outline" className="w-full justify-start bg-transparent">
              Installation Guide
            </Button>
          </Link>
          <Link href="/docs/quick-start">
            <Button variant="outline" className="w-full justify-start bg-transparent">
              Quick Start
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

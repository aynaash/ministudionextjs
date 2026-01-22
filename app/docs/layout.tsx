import React from "react"
import { DocsSidebar } from "@/components/docs-sidebar"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Documentation - MiniStudio",
  description: "MiniStudio documentation and API reference",
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background">
      <DocsSidebar />
      <main className="flex-1 px-8 py-12 max-w-4xl overflow-auto">
        <article className="prose prose-invert max-w-none text-foreground">{children}</article>
      </main>
    </div>
  )
}

import React from "react"
import { DocsSidebar } from "@/components/docs-sidebar"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Documentation - MiniStudio",
  description: "MiniStudio documentation and API reference",
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-black">
      <DocsSidebar />
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-4xl overflow-auto lg:ml-0 ml-0">
        <article className="prose prose-invert max-w-none text-white prose-headings:text-white prose-a:text-cyan-400 prose-code:text-pink-300">
          {children}
        </article>
      </main>
    </div>
  )
}

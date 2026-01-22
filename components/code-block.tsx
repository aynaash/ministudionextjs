"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

interface CodeBlockProps {
  code: string
  language?: string
}

export function CodeBlock({ code, language = "bash" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group my-6">
      <button
        onClick={copyToClipboard}
        className="absolute right-3 top-3 p-2 rounded-md bg-primary/20 hover:bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity text-primary"
        title="Copy code"
      >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      </button>
      <pre className="bg-card border border-border rounded-lg p-4 overflow-x-auto text-foreground font-mono text-sm">
        <code>{code}</code>
      </pre>
    </div>
  )
}

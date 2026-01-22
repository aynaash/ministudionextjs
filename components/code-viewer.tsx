'use client'

import { useState } from 'react'
import { Copy, Check, ExternalLink } from 'lucide-react'

interface CodeViewerProps {
    code: string
    language?: string
    filename: string
    githubUrl: string
}

export function CodeViewer({ code, language = 'python', filename, githubUrl }: CodeViewerProps) {
    const [copied, setCopied] = useState(false)

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative bg-slate-900 rounded-xl border border-white/20 overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-slate-800/50">
                    <div className="flex items-center gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        <span className="text-sm text-white/70 font-mono ml-2">{filename}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={copyToClipboard}
                            className="p-2 rounded-lg hover:bg-white/10 transition text-white/60 hover:text-white"
                            title="Copy code"
                        >
                            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg hover:bg-white/10 transition text-white/60 hover:text-white"
                            title="View on GitHub"
                        >
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Code Content */}
                <div className="overflow-x-auto">
                    <pre className="p-6 text-sm leading-relaxed">
                        <code className="text-white/90 font-mono">{code}</code>
                    </pre>
                </div>
            </div>
        </div>
    )
}

"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ToolCard } from "./tool-card"
import type { Tool } from "@/lib/video-tools-data"

interface Phase {
  phase: string
  title: string
  description: string
  tools: string[]
}

interface PhaseSectionProps {
  phase: Phase
  phaseTools: Tool[]
}

const phaseIcons = {
  "phase-1": "🚀",
  "phase-2": "⚡",
  "phase-3": "✨",
}

const phaseBgColors = {
  "phase-1": "bg-red-500/10 border-red-500/30",
  "phase-2": "bg-yellow-500/10 border-yellow-500/30",
  "phase-3": "bg-purple-500/10 border-purple-500/30",
}

export function PhaseSection({ phase, phaseTools }: PhaseSectionProps) {
  return (
    <div className="space-y-6">
      <Card className={`p-8 border ${phaseBgColors[phase.phase as keyof typeof phaseBgColors]}`}>
        <div className="flex items-start gap-4">
          <span className="text-4xl">{phaseIcons[phase.phase as keyof typeof phaseIcons]}</span>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-foreground mb-2">{phase.title}</h3>
            <p className="text-muted-foreground mb-4">{phase.description}</p>
            <div className="flex flex-wrap gap-2">
              {phaseTools.map((tool) => (
                <Badge key={tool.id} variant="secondary" className="text-xs">
                  {tool.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {phaseTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  )
}

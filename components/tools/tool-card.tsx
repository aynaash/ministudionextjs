"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Tool } from "@/lib/video-tools-data"

interface ToolCardProps {
  tool: Tool
}

export function ToolCard({ tool }: ToolCardProps) {
  const priorityColors = {
    high: "bg-red-500/20 text-red-300 border-red-500/30",
    medium: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    specialized: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  }

  const phaseLabels = {
    "phase-1": "Phase 1",
    "phase-2": "Phase 2",
    "phase-3": "Phase 3",
  }

  return (
    <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors group">
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {tool.name}
          </h3>
          <Badge className={`text-xs whitespace-nowrap ${priorityColors[tool.priority]}`}>
            {tool.priority.charAt(0).toUpperCase() + tool.priority.slice(1)}
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground">{tool.purpose}</p>

        <div className="pt-2 border-t border-border">
          <p className="text-xs text-muted-foreground mb-3">
            <span className="font-semibold text-foreground">Why consider:</span> {tool.whyConsider}
          </p>

          <div className="bg-background rounded px-3 py-2 mb-4">
            <code className="text-xs font-mono text-primary">{tool.install}</code>
          </div>

          <div className="flex flex-wrap gap-1">
            {tool.useCase.map((use) => (
              <Badge
                key={use}
                variant="outline"
                className="text-xs bg-accent/10 text-accent border-accent/30"
              >
                {use}
              </Badge>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <Badge variant="outline" className="text-xs border-border text-muted-foreground">
            {phaseLabels[tool.phase]}
          </Badge>
        </div>
      </div>
    </Card>
  )
}

"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface UseCase {
  title: string
  description: string
  tools: string[]
}

interface UseCaseGridProps {
  useCases: UseCase[]
}

export function UseCaseGrid({ useCases }: UseCaseGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {useCases.map((useCase) => (
        <Card key={useCase.title} className="p-5 bg-card border-border">
          <h4 className="font-semibold text-foreground mb-2">{useCase.title}</h4>
          <p className="text-sm text-muted-foreground mb-3">{useCase.description}</p>
          <div className="flex flex-wrap gap-2">
            {useCase.tools.map((tool) => (
              <Badge
                key={tool}
                variant="secondary"
                className="text-xs bg-secondary/20 text-secondary border-secondary/30"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}

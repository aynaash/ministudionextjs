"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Question } from "@/lib/video-tools-data"

interface DeveloperSectionProps {
  questions: Question[]
}

export function DeveloperSection({ questions }: DeveloperSectionProps) {
  return (
    <div className="space-y-8">
      {/* Action Items */}
      <div>
        <h3 className="text-2xl font-bold mb-6">Developer Action Items</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Evaluate", description: "Test each tool with MiniStudio's current workflow" },
            { title: "Benchmark", description: "Compare performance (speed, memory, quality)" },
            { title: "Critique", description: "Identify issues, limitations, or better alternatives" },
            { title: "Propose", description: "Suggest which tools to integrate and in what order" },
            { title: "Document", description: "Update this list with findings and recommendations" },
            { title: "Feedback", description: "Share any concerns or suggestions for improvement" },
          ].map((item, idx) => (
            <Card key={idx} className="p-4 bg-card border-border hover:border-primary/50 transition-colors">
              <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Questions for Developers */}
      <div>
        <h3 className="text-2xl font-bold mb-6">Questions for Developers</h3>
        <div className="space-y-4">
          {questions.map((question) => (
            <Card key={question.id} className="p-6 bg-card border-border">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg">Q{question.id.slice(1)}.</span>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground text-lg">{question.question}</p>
                    <p className="text-sm text-muted-foreground mt-1 italic">{question.context}</p>
                  </div>
                </div>
                <textarea
                  placeholder="Share your evaluation and recommendation..."
                  className="w-full min-h-24 p-3 bg-input border border-border rounded text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50"
                />
                <div className="flex justify-end">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Submit Feedback
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Feedback Section */}
      <div>
        <h3 className="text-2xl font-bold mb-6">Share Your Feedback</h3>
        <Card className="p-8 bg-card border-border">
          <div className="space-y-4 max-w-2xl">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Are there better alternatives to these tools?
              </label>
              <textarea className="w-full min-h-20 p-3 bg-input border border-border rounded text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Which features are most valuable for MiniStudio users?
              </label>
              <textarea className="w-full min-h-20 p-3 bg-input border border-border rounded text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                What's the right balance between features and complexity?
              </label>
              <textarea className="w-full min-h-20 p-3 bg-input border border-border rounded text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary" />
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
              Submit All Feedback
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

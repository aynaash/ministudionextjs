"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { tools, phases, useCases, developerQuestions, type Priority } from "@/lib/video-tools-data"
import { ToolCard } from "./tools/tool-card"
import { PhaseSection } from "./tools/phase-section"
import { UseCaseGrid } from "./tools/use-case-grid"
import { DeveloperSection } from "./tools/developer-section"
import { Header } from "./tools/header"

export function VideoToolsDocumentation() {
  const [searchTerm, setSearchTerm] = useState("")
  const [priorityFilter, setPriorityFilter] = useState<Priority | "all">("all")
  const [activeTab, setActiveTab] = useState("overview")

  const filteredTools = tools.filter((tool) => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.purpose.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPriority = priorityFilter === "all" || tool.priority === priorityFilter
    return matchesSearch && matchesPriority
  })

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Navigation Tabs */}
      <nav className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === "overview"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("tools")}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === "tools"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Tools
            </button>
            <button
              onClick={() => setActiveTab("phases")}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === "phases"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Implementation
            </button>
            <button
              onClick={() => setActiveTab("developers")}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === "developers"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Developer
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Getting Started</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                MiniStudio uses a curated collection of Python libraries for video processing. This reference guide helps you understand each tool's purpose, evaluate their fit for our workflow, and plan implementation across three phases.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 border-border bg-card">
                <h3 className="text-xl font-semibold mb-2">Fast Processing</h3>
                <p className="text-sm text-muted-foreground">
                  10-100x performance improvements with FFmpeg-Python and OpenCV
                </p>
              </Card>
              <Card className="p-6 border-border bg-card">
                <h3 className="text-xl font-semibold mb-2">Complete Toolset</h3>
                <p className="text-sm text-muted-foreground">
                  Video editing, audio processing, text overlays, and frame extraction
                </p>
              </Card>
              <Card className="p-6 border-border bg-card">
                <h3 className="text-xl font-semibold mb-2">Structured Plan</h3>
                <p className="text-sm text-muted-foreground">
                  Three implementation phases balancing features with complexity
                </p>
              </Card>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Use Cases</h3>
              <UseCaseGrid useCases={useCases} />
            </div>
          </div>
        )}

        {/* Tools Tab */}
        {activeTab === "tools" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Video Processing Tools</h2>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Input
                  placeholder="Search tools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 bg-input border-border"
                />
                <Select value={priorityFilter} onValueChange={(value: any) => setPriorityFilter(value)}>
                  <SelectTrigger className="w-full sm:w-48 bg-input border-border">
                    <SelectValue placeholder="All Priorities" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Priorities</SelectItem>
                    <SelectItem value="high">High Priority</SelectItem>
                    <SelectItem value="medium">Medium Priority</SelectItem>
                    <SelectItem value="specialized">Specialized</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* High Priority Tools */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">High Priority</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTools
                  .filter((t) => t.priority === "high")
                  .map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
              </div>
            </div>

            {/* Medium Priority Tools */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-secondary">Medium Priority</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTools
                  .filter((t) => t.priority === "medium")
                  .map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
              </div>
            </div>

            {/* Specialized Tools */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Specialized Use Cases</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTools
                  .filter((t) => t.priority === "specialized")
                  .map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
              </div>
            </div>

            {filteredTools.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No tools match your search criteria</p>
              </div>
            )}
          </div>
        )}

        {/* Phases Tab */}
        {activeTab === "phases" && (
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Implementation Phases</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                A three-phase approach to integrating video processing tools while balancing features and complexity.
              </p>
            </div>

            {phases.map((phase) => (
              <PhaseSection
                key={phase.phase}
                phase={phase}
                phaseTools={tools.filter((t) => t.phase === phase.phase)}
              />
            ))}
          </div>
        )}

        {/* Developer Tab */}
        {activeTab === "developers" && (
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Developer Action Items</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                Please evaluate, benchmark, and provide feedback on these tools to help us make informed decisions.
              </p>
            </div>

            <DeveloperSection questions={developerQuestions} />
          </div>
        )}
      </div>
    </div>
  )
}

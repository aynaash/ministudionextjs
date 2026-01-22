import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function GettingStartedPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-foreground">Getting Started with MiniStudio</h1>
        <p className="text-lg text-muted-foreground">
          Welcome to MiniStudio! Follow these steps to get up and running with the cinematic AI engine.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-6 text-foreground">Quick Navigation</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="/docs/installation"
            className="border border-border rounded-lg p-6 bg-card hover:border-primary/50 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Installation</h3>
                <p className="text-sm text-muted-foreground">Set up MiniStudio on your system</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
            </div>
          </Link>

          <Link
            href="/docs/quick-start"
            className="border border-border rounded-lg p-6 bg-card hover:border-primary/50 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Quick Start</h3>
                <p className="text-sm text-muted-foreground">Generate your first video</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
            </div>
          </Link>

          <Link
            href="/docs/configuration"
            className="border border-border rounded-lg p-6 bg-card hover:border-primary/50 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Configuration</h3>
                <p className="text-sm text-muted-foreground">Configure providers and settings</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
            </div>
          </Link>

          <Link
            href="/docs/architecture"
            className="border border-border rounded-lg p-6 bg-card hover:border-primary/50 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Architecture</h3>
                <p className="text-sm text-muted-foreground">Understand how MiniStudio works</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
            </div>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">The MiniStudio Difference</h2>
        <div className="space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <h3 className="font-semibold text-foreground mb-2">Programmable Workflows</h3>
            <p className="text-muted-foreground text-sm">
              Define complex video generation pipelines using Python. From single shots to multi-scene sequences, MiniStudio handles the orchestration.
            </p>
          </div>

          <div className="border border-border rounded-lg p-4 bg-card">
            <h3 className="font-semibold text-foreground mb-2">Character Consistency</h3>
            <p className="text-muted-foreground text-sm">
              Using Identity Grounding 2.0, maintain perfect character consistency across multiple shots without manual intervention.
            </p>
          </div>

          <div className="border border-border rounded-lg p-4 bg-card">
            <h3 className="font-semibold text-foreground mb-2">Temporal Continuity</h3>
            <p className="text-muted-foreground text-sm">
              The Invisible Weave algorithm ensures smooth transitions and environmental consistency throughout your sequences.
            </p>
          </div>

          <div className="border border-border rounded-lg p-4 bg-card">
            <h3 className="font-semibold text-foreground mb-2">Model Agnostic</h3>
            <p className="text-muted-foreground text-sm">
              Work with any video generation provider through a unified interface. Support for Vertex AI, OpenAI Sora, and more.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">What You'll Learn</h2>
        <ol className="space-y-3 text-muted-foreground">
          <li className="flex gap-3">
            <span className="text-primary font-semibold">1.</span>
            <span>How to install MiniStudio and its dependencies</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-semibold">2.</span>
            <span>How to set up your first video generation project</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-semibold">3.</span>
            <span>How to generate single shots and multi-shot sequences</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-semibold">4.</span>
            <span>How to maintain character and environmental consistency</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-semibold">5.</span>
            <span>How to optimize your workflows for production</span>
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Ready to Begin?</h2>
        <p className="text-muted-foreground mb-6">
          Start with the installation guide, then move to the quick start tutorial to generate your first video.
        </p>
        <div className="flex gap-4">
          <Link
            href="/docs/installation"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            Install MiniStudio
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/docs/quick-start"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-card transition-colors font-semibold text-foreground"
          >
            Quick Start
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

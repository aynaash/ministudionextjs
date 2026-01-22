import { Callout } from "@/components/callout"

export default function ArchitecturePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-foreground">Architecture</h1>
        <p className="text-lg text-muted-foreground">
          Understanding the core architecture of MiniStudio
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Overview</h2>
        <p className="text-muted-foreground mb-4">
          MiniStudio is built on a modular, provider-agnostic architecture that allows you to compose complex video generation workflows with state management, character consistency, and temporal continuity.
        </p>

        <div className="space-y-4 my-8">
          <div className="border border-border rounded-lg p-4 bg-card">
            <h3 className="font-semibold text-foreground mb-2">VideoOrchestrator</h3>
            <p className="text-sm text-muted-foreground">
              The main orchestration engine that manages video generation workflows, state transitions, and result aggregation.
            </p>
          </div>

          <div className="border border-border rounded-lg p-4 bg-card">
            <h3 className="font-semibold text-foreground mb-2">Provider Interface</h3>
            <p className="text-sm text-muted-foreground">
              Abstraction layer supporting multiple video generation backends (Vertex AI, Sora, custom providers).
            </p>
          </div>

          <div className="border border-border rounded-lg p-4 bg-card">
            <h3 className="font-semibold text-foreground mb-2">State Machine</h3>
            <p className="text-sm text-muted-foreground">
              Manages continuity between shots using the Invisible Weave algorithm for environment and character consistency.
            </p>
          </div>

          <div className="border border-border rounded-lg p-4 bg-card">
            <h3 className="font-semibold text-foreground mb-2">Identity Grounding</h3>
            <p className="text-sm text-muted-foreground">
              Ensures character consistency across multiple shots using Identity Grounding 2.0 technology.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Key Components</h2>

        <h3 className="text-xl font-semibold mb-3 text-foreground">VideoGenerationRequest</h3>
        <p className="text-muted-foreground mb-4">
          Encapsulates a single video generation request with prompt, duration, aspect ratio, and optional state parameters.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-foreground">VideoGenerationResult</h3>
        <p className="text-muted-foreground mb-4">
          Contains the generated video path, metadata, frame data for continuity, and any state information for multi-shot sequences.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-foreground">Provider</h3>
        <p className="text-muted-foreground mb-4">
          Abstract base class that all video generation providers must implement. Standardizes how requests are sent and results are returned.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Data Flow</h2>
        <div className="bg-card border border-border rounded-lg p-6 my-6">
          <div className="space-y-4 text-sm text-muted-foreground">
            <div>1. User creates VideoGenerationRequest with prompt and parameters</div>
            <div>2. VideoOrchestrator receives request and checks state machine</div>
            <div>3. Request is sent to configured Provider</div>
            <div>4. Provider generates video and returns result</div>
            <div>5. State machine is updated with frame data and continuity info</div>
            <div>6. Result is returned to user with video path and metadata</div>
          </div>
        </div>

        <Callout type="info">
          For multi-shot sequences, the state machine automatically extracts key frames from each shot to maintain continuity in the next shot.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Design Principles</h2>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex gap-3">
            <span className="text-primary">•</span>
            <span><strong>Modularity:</strong> Each component has a single responsibility and can be extended independently.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">•</span>
            <span><strong>Provider Agnosticism:</strong> Works with any video generation API through the Provider interface.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">•</span>
            <span><strong>State Management:</strong> Built-in state machine for maintaining continuity across shots.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">•</span>
            <span><strong>Async-First:</strong> All operations are async-compatible for high-performance workflows.</span>
          </li>
        </ul>
      </section>
    </div>
  )
}

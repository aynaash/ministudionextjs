import { CodeBlock } from "@/components/code-block"
import { Callout } from "@/components/callout"

export default function OrchestratorPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-foreground">VideoOrchestrator</h1>
        <p className="text-lg text-muted-foreground">
          The main orchestration class for managing video generation workflows.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Constructor</h2>
        <CodeBlock
          code={`VideoOrchestrator(provider: VideoProvider)`}
          language="python"
        />

        <h3 className="text-xl font-semibold mb-3 text-foreground">Parameters</h3>
        <div className="space-y-3 mb-4">
          <div className="border border-border rounded p-3 bg-card">
            <p className="font-mono text-sm text-primary">provider</p>
            <p className="text-sm text-muted-foreground">VideoProvider - The video generation provider to use</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-3 text-foreground">Example</h3>
        <CodeBlock
          code={`from ministudio import VideoOrchestrator, VertexAIProvider

provider = VertexAIProvider()
orchestrator = VideoOrchestrator(provider)`}
          language="python"
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Methods</h2>

        <h3 className="text-xl font-semibold mb-4 text-foreground">generate_shot()</h3>
        <p className="text-muted-foreground mb-4">Generate a single video shot.</p>

        <CodeBlock
          code={`async def generate_shot(
    request: VideoGenerationRequest
) -> VideoGenerationResult`}
          language="python"
        />

        <h4 className="font-semibold text-foreground mb-2">Parameters</h4>
        <div className="space-y-3 mb-4">
          <div className="border border-border rounded p-3 bg-card">
            <p className="font-mono text-sm text-primary">request</p>
            <p className="text-sm text-muted-foreground">VideoGenerationRequest - The generation request configuration</p>
          </div>
        </div>

        <h4 className="font-semibold text-foreground mb-2">Returns</h4>
        <div className="border border-border rounded p-3 bg-card mb-4">
          <p className="font-mono text-sm text-primary">VideoGenerationResult</p>
          <p className="text-sm text-muted-foreground">The result containing the generated video</p>
        </div>

        <h4 className="font-semibold text-foreground mb-2">Example</h4>
        <CodeBlock
          code={`result = await orchestrator.generate_shot(
    VideoGenerationRequest(
        prompt="A scientist in a laboratory",
        duration_seconds=8
    )
)

if result.success:
    print(f"Video generated: {result.video_path}")
else:
    print(f"Error: {result.error}")`}
          language="python"
        />

        <Callout type="info">
          generate_shot() is an async function. Use it with await or asyncio.run().
        </Callout>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">generate_sequence()</h3>
        <p className="text-muted-foreground mb-4">Generate a multi-shot sequence with automatic continuity.</p>

        <CodeBlock
          code={`async def generate_sequence(
    shots: List[VideoGenerationRequest]
) -> List[VideoGenerationResult]`}
          language="python"
        />

        <h4 className="font-semibold text-foreground mb-2">Parameters</h4>
        <div className="space-y-3 mb-4">
          <div className="border border-border rounded p-3 bg-card">
            <p className="font-mono text-sm text-primary">shots</p>
            <p className="text-sm text-muted-foreground">List[VideoGenerationRequest] - List of shot requests to generate</p>
          </div>
        </div>

        <h4 className="font-semibold text-foreground mb-2">Returns</h4>
        <div className="border border-border rounded p-3 bg-card mb-4">
          <p className="font-mono text-sm text-primary">List[VideoGenerationResult]</p>
          <p className="text-sm text-muted-foreground">Results for each shot in the sequence</p>
        </div>

        <h4 className="font-semibold text-foreground mb-2">Example</h4>
        <CodeBlock
          code={`shots = [
    VideoGenerationRequest(
        prompt="A researcher enters the laboratory",
        duration_seconds=5
    ),
    VideoGenerationRequest(
        prompt="The researcher examines equipment",
        duration_seconds=6
    ),
    VideoGenerationRequest(
        prompt="The researcher makes notes",
        duration_seconds=4
    )
]

results = await orchestrator.generate_sequence(shots)
video_paths = [r.video_path for r in results if r.success]`}
          language="python"
        />

        <Callout type="info">
          The orchestrator automatically handles frame extraction and state management for continuity between shots.
        </Callout>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">get_state()</h3>
        <p className="text-muted-foreground mb-4">Get the current state of the orchestrator.</p>

        <CodeBlock
          code={`def get_state() -> OrchestratorState`}
          language="python"
        />

        <h4 className="font-semibold text-foreground mb-2">Returns</h4>
        <div className="border border-border rounded p-3 bg-card mb-4">
          <p className="font-mono text-sm text-primary">OrchestratorState</p>
          <p className="text-sm text-muted-foreground">Current state including shot history and continuity data</p>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">reset()</h3>
        <p className="text-muted-foreground mb-4">Reset the orchestrator state for a new sequence.</p>

        <CodeBlock
          code={`def reset() -> None`}
          language="python"
        />

        <h4 className="font-semibold text-foreground mb-2">Example</h4>
        <CodeBlock
          code={`# Finish first sequence
results1 = await orchestrator.generate_sequence(shots1)

# Reset for new sequence
orchestrator.reset()

# Start new sequence
results2 = await orchestrator.generate_sequence(shots2)`}
          language="python"
        />
      </section>
    </div>
  )
}

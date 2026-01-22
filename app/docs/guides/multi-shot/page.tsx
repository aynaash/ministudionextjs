import { CodeBlock } from "@/components/code-block"
import { Callout } from "@/components/callout"

export default function MultiShotPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-foreground">Multi-Shot Sequences</h1>
        <p className="text-lg text-muted-foreground">
          Create cinematic sequences with multiple shots while maintaining consistency
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Planning Your Sequence</h2>
        <p className="text-muted-foreground mb-4">
          Before generating, plan your sequence like a script:
        </p>
        <ul className="space-y-2 text-muted-foreground mb-4">
          <li className="flex gap-2">
            <span className="text-primary">1.</span>
            <span>Define the location and environment</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">2.</span>
            <span>Introduce your characters and their appearance</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">3.</span>
            <span>Plan shot transitions and camera movements</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">4.</span>
            <span>Write detailed prompts that reference previous shots</span>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Complete Example</h2>
        <CodeBlock
          code={`import asyncio
from ministudio import VideoOrchestrator, VideoGenerationRequest
from ministudio.providers import VertexAIProvider

async def main():
    # Initialize
    provider = VertexAIProvider()
    orchestrator = VideoOrchestrator(provider)
    
    # Define sequence
    shots = [
        VideoGenerationRequest(
            prompt="Wide shot of a modern glass skyscraper at sunrise, golden light reflecting off the windows",
            duration_seconds=6,
            aspect_ratio="16:9",
            quality="high"
        ),
        VideoGenerationRequest(
            prompt="Inside a sleek office conference room. A woman in business attire stands by a window overlooking the city",
            duration_seconds=8,
            aspect_ratio="16:9",
            quality="high"
        ),
        VideoGenerationRequest(
            prompt="Close-up of the same woman looking confident, city skyline visible through window behind her",
            duration_seconds=5,
            aspect_ratio="16:9",
            quality="high"
        ),
        VideoGenerationRequest(
            prompt="The woman walks toward a table with laptop and documents, the cityscape still visible",
            duration_seconds=6,
            aspect_ratio="16:9",
            quality="high"
        ),
    ]
    
    # Generate sequence
    results = await orchestrator.generate_sequence(shots)
    
    # Process results
    for i, result in enumerate(results):
        if result.success:
            print(f"Shot {i+1}: {result.video_path}")
            print(f"Duration: {result.duration_seconds}s")
        else:
            print(f"Shot {i+1} failed: {result.error}")
    
    print(f"Sequence complete! Total duration: {orchestrator.get_state().total_duration}s")

if __name__ == "__main__":
    asyncio.run(main())`}
          language="python"
        />

        <Callout type="info">
          The orchestrator automatically extracts the last frame from each shot to maintain continuity in the next shot.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Tips for Better Sequences</h2>

        <h3 className="text-xl font-semibold mb-3 text-foreground">Maintain Consistency</h3>
        <ul className="space-y-2 text-muted-foreground mb-4">
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Use the same character descriptions across shots</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Reference visual elements from previous shots</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Mention time of day or lighting consistency</span>
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-3 text-foreground">Camera Work</h3>
        <ul className="space-y-2 text-muted-foreground mb-4">
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Start with wide shots to establish location</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Move to medium shots for interactions</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Use close-ups for emotional moments</span>
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-3 text-foreground">Pacing</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Longer shots (8-10s) for establishing scenes</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Medium shots (6-8s) for action</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Short shots (3-5s) for emphasis or dialogue</span>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Managing State Between Sequences</h2>
        <CodeBlock
          code={`# Complete first sequence
results1 = await orchestrator.generate_sequence(indoor_shots)

# Reset state for different location
orchestrator.reset()

# Generate new sequence without interference
results2 = await orchestrator.generate_sequence(outdoor_shots)`}
          language="python"
        />
      </section>
    </div>
  )
}

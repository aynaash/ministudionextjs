import { CodeBlock } from "@/components/code-block"
import { Callout } from "@/components/callout"

export default function CharactersPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-foreground">Character Consistency</h1>
        <p className="text-lg text-muted-foreground">
          Maintain character identity across multiple shots using Identity Grounding 2.0
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Introduction</h2>
        <p className="text-muted-foreground mb-4">
          One of the biggest challenges in AI-generated video is maintaining consistent character appearance across shots. MiniStudio solves this with Identity Grounding 2.0, a powerful system that ensures your characters look the same every time they appear.
        </p>

        <Callout type="info">
          Identity Grounding works by analyzing the initial character appearance and creating a consistent representation that's referenced throughout the video generation process.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">How It Works</h2>
        <p className="text-muted-foreground mb-4">
          The character consistency system uses multiple techniques:
        </p>

        <ul className="space-y-4 text-muted-foreground">
          <li className="flex gap-3">
            <span className="text-primary flex-shrink-0 mt-1">1.</span>
            <span><strong>Initial Character Extraction:</strong> From the first shot, the system extracts and encodes the character's identity features.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary flex-shrink-0 mt-1">2.</span>
            <span><strong>Identity Embedding:</strong> Creates a compact representation of the character that can be referenced across shots.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary flex-shrink-0 mt-1">3.</span>
            <span><strong>Consistency Checks:</strong> Validates that generated frames match the character identity within acceptable thresholds.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary flex-shrink-0 mt-1">4.</span>
            <span><strong>Adaptive Refinement:</strong> Adjusts the generation parameters if consistency falls below targets.</span>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Using Character Consistency</h2>

        <h3 className="text-xl font-semibold mb-3 text-foreground">Basic Usage</h3>
        <CodeBlock
          code={`from ministudio import VideoOrchestrator, VideoGenerationRequest

orchestrator = VideoOrchestrator(provider)

# First shot - establishes character identity
request1 = VideoGenerationRequest(
    prompt="A scientist in a white coat works at a laboratory bench",
    duration_seconds=8,
    aspect_ratio="16:9"
)

result1 = await orchestrator.generate_shot(request1)

# Second shot - maintains character consistency
request2 = VideoGenerationRequest(
    prompt="The same scientist looks at test results on a screen",
    duration_seconds=8,
    aspect_ratio="16:9",
    character_identity=result1.character_identity  # Reference first shot's character
)

result2 = await orchestrator.generate_shot(request2)`}
          language="python"
        />

        <h3 className="text-xl font-semibold mb-3 text-foreground mt-6">Advanced Configuration</h3>
        <CodeBlock
          code={`from ministudio import VideoGenerationRequest, CharacterConsistencyConfig

# Fine-tune consistency behavior
consistency_config = CharacterConsistencyConfig(
    enabled=True,
    confidence_threshold=0.85,  # How strict consistency checks are (0-1)
    allow_pose_variation=True,  # Allow different poses for same character
    allow_lighting_variation=False  # Keep lighting consistent
)

request = VideoGenerationRequest(
    prompt="The scientist walks across the laboratory",
    duration_seconds=8,
    aspect_ratio="16:9",
    character_consistency=consistency_config,
    character_identity=result1.character_identity
)

result = await orchestrator.generate_shot(request)`}
          language="python"
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Best Practices</h2>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex gap-3">
            <span className="text-primary">✓</span>
            <span>Start with a clear, well-lit shot of your character for the initial frame.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">✓</span>
            <span>Use detailed character descriptions in your prompts to reinforce identity.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">✓</span>
            <span>Keep the confidence threshold high (0.8+) for strict consistency.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">✗</span>
            <span>Avoid drastically changing the character's appearance between shots.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">✗</span>
            <span>Don't use completely different camera angles without context.</span>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Troubleshooting</h2>

        <div className="bg-card border border-border rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-foreground mb-2">Character appearance changes between shots</h3>
          <p className="text-muted-foreground text-sm">Increase the confidence_threshold value and ensure your prompts consistently describe the character.</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-foreground mb-2">Consistency errors blocking generation</h3>
          <p className="text-muted-foreground text-sm">Lower the confidence_threshold slightly or enable pose/lighting variation to allow more flexibility.</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-4">
          <h3 className="font-semibold text-foreground mb-2">Character identity not extracting properly</h3>
          <p className="text-muted-foreground text-sm">Ensure the initial shot has good lighting and a clear view of the character's face.</p>
        </div>
      </section>
    </div>
  )
}

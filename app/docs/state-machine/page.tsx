import { Callout } from "@/components/callout"
import { CodeBlock } from "@/components/code-block"

export default function StateMachinePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-foreground">State Machine</h1>
        <p className="text-lg text-muted-foreground">
          Understanding the Invisible Weave and state management in MiniStudio
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">The Invisible Weave</h2>
        <p className="text-muted-foreground mb-4">
          The Invisible Weave is MiniStudio's proprietary state machine algorithm that ensures temporal continuity and environmental consistency across multiple shots in a sequence.
        </p>

        <Callout type="info">
          The Invisible Weave automatically extracts key frames from each shot and uses them as conditioning inputs for subsequent shots, creating smooth transitions and consistent environments.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">How State Management Works</h2>

        <h3 className="text-xl font-semibold mb-3 text-foreground">Shot State</h3>
        <p className="text-muted-foreground mb-4">
          Each shot maintains state information including:
        </p>
        <ul className="space-y-2 text-muted-foreground mb-4">
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Final frame data for continuity</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Environmental context (lighting, camera position, etc.)</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Character positions and poses</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Object locations and states</span>
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-3 text-foreground">State Extraction</h3>
        <CodeBlock
          code={`# State is automatically extracted after each shot
result = await orchestrator.generate_shot(request)

# Access state information
state = orchestrator.get_state()
print(f"Last frame shape: {state.last_frame.shape}")
print(f"Environment context: {state.environment_context}")
print(f"Character positions: {state.character_positions}")`}
          language="python"
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Best Practices</h2>

        <h3 className="text-xl font-semibold mb-3 text-foreground">Maintain Continuity</h3>
        <p className="text-muted-foreground mb-4">
          Write your prompts with awareness of the previous shot:
        </p>
        <CodeBlock
          code={`# Shot 1: Establish the scene
shots = [
    VideoGenerationRequest(
        prompt="A wide shot of a modern office building exterior at sunset",
        duration_seconds=6
    ),
    # Shot 2: Reference the environment from shot 1
    VideoGenerationRequest(
        prompt="Inside the office, a woman walks toward a window overlooking the sunset",
        duration_seconds=5
    ),
    # Shot 3: Continue the established environment
    VideoGenerationRequest(
        prompt="Close-up of the woman at the desk, the sunset visible in the window behind her",
        duration_seconds=4
    )
]`}
          language="python"
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">State Reset</h2>
        <p className="text-muted-foreground mb-4">
          When starting a new sequence or changing location, reset the state:
        </p>
        <CodeBlock
          code={`# Complete first sequence
results1 = await orchestrator.generate_sequence(indoor_shots)

# Reset state for outdoor sequence
orchestrator.reset()

# Generate new sequence without interference from previous state
results2 = await orchestrator.generate_sequence(outdoor_shots)`}
          language="python"
        />
      </section>
    </div>
  )
}

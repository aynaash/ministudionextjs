import { CodeBlock } from "@/components/code-block"
import { Callout } from "@/components/callout"

export default function VisualGroundingPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-foreground">Visual Grounding</h1>
        <p className="text-lg text-muted-foreground">
          Maintain visual consistency using reference images and environmental context
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Overview</h2>
        <p className="text-muted-foreground mb-4">
          Visual Grounding allows you to provide reference images to MiniStudio, ensuring that generated videos stay visually consistent with your specifications. This is particularly powerful when combined with character consistency and the Invisible Weave algorithm.
        </p>

        <Callout type="info">
          Visual Grounding works alongside the automatic state extraction from previous shots to create a comprehensive continuity system.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Using Reference Images</h2>

        <h3 className="text-xl font-semibold mb-3 text-foreground">Environment Reference</h3>
        <CodeBlock
          code={`from ministudio import VideoGenerationRequest
import base64

# Load reference image
with open("office_environment.jpg", "rb") as f:
    reference_image = base64.b64encode(f.read()).decode()

request = VideoGenerationRequest(
    prompt="A CEO walks through the modern office",
    duration_seconds=8,
    aspect_ratio="16:9",
    reference_image=reference_image,
    reference_type="environment"
)`}
          language="python"
        />

        <h3 className="text-xl font-semibold mb-3 text-foreground mt-6">Character Reference</h3>
        <CodeBlock
          code={`request = VideoGenerationRequest(
    prompt="The character smiles and waves",
    duration_seconds=5,
    reference_image=reference_image,
    reference_type="character"
)`}
          language="python"
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Best Practices</h2>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex gap-3">
            <span className="text-primary">✓</span>
            <span>Use high-quality reference images (1920x1080 or higher)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">✓</span>
            <span>Ensure reference images match your desired aspect ratio</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">✓</span>
            <span>Use the same reference for all shots in a sequence</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">✗</span>
            <span>Avoid using references with excessive motion blur</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">✗</span>
            <span>Don't change references between related shots</span>
          </li>
        </ul>
      </section>
    </div>
  )
}

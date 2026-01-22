import { CodeBlock } from "@/components/code-block"
import { Callout } from "@/components/callout"

export default function ConfigurationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-foreground">Configuration</h1>
        <p className="text-lg text-muted-foreground">Set up MiniStudio with your preferred video generation provider.</p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Environment Variables</h2>
        <p className="text-muted-foreground mb-4">Configure MiniStudio using environment variables:</p>
        <CodeBlock
          code={`# Google Vertex AI
export GOOGLE_API_KEY="your-api-key-here"
export GOOGLE_PROJECT_ID="your-project-id"

# OpenAI Sora (coming soon)
export OPENAI_API_KEY="your-api-key-here"`}
          language="bash"
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Provider Configuration</h2>

        <h3 className="text-xl font-semibold mb-3 text-foreground">Google Vertex AI</h3>
        <CodeBlock
          code={`from ministudio import VideoOrchestrator
from ministudio.providers import VertexAIProvider

# Initialize with Vertex AI
provider = VertexAIProvider(
    api_key="your-api-key",
    project_id="your-project-id",
    location="us-central1"
)
orchestrator = VideoOrchestrator(provider)`}
          language="python"
        />

        <h3 className="text-xl font-semibold mb-3 text-foreground mt-6">Mock Provider (Testing)</h3>
        <CodeBlock
          code={`from ministudio import VideoOrchestrator
from ministudio.providers import MockVideoProvider

# Use mock provider for testing (no API keys needed)
provider = MockVideoProvider()
orchestrator = VideoOrchestrator(provider)`}
          language="python"
        />

        <Callout type="info">
          The MockVideoProvider is perfect for testing and development without using API credits.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Configuration File</h2>
        <p className="text-muted-foreground mb-4">Optionally create a ministudio.yaml file in your project root:</p>
        <CodeBlock
          code={`provider:
  type: vertex_ai
  api_key: \${GOOGLE_API_KEY}
  project_id: \${GOOGLE_PROJECT_ID}
  location: us-central1

video:
  default_duration: 8
  default_aspect_ratio: "16:9"
  output_format: "mp4"

state_machine:
  enable_invisible_weave: true
  character_consistency: true`}
          language="yaml"
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Verify Configuration</h2>
        <CodeBlock
          code={`from ministudio.config import load_config

# Load and validate configuration
config = load_config()
print(f"Provider: {config.provider.type}")
print(f"Configuration loaded successfully!")`}
          language="python"
        />
      </section>
    </div>
  )
}

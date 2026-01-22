import { CodeBlock } from "@/components/code-block"
import { Callout } from "@/components/callout"

export default function ProvidersPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-foreground">Providers</h1>
        <p className="text-lg text-muted-foreground">
          Configure and use different video generation providers with MiniStudio
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Available Providers</h2>

        <h3 className="text-xl font-semibold mb-3 text-foreground">VertexAIProvider</h3>
        <p className="text-muted-foreground mb-4">Generate videos using Google Vertex AI</p>
        <CodeBlock
          code={`from ministudio.providers import VertexAIProvider

provider = VertexAIProvider(
    api_key="your-api-key",
    project_id="your-project-id",
    location="us-central1"
)`}
          language="python"
        />

        <h3 className="text-xl font-semibold mb-3 text-foreground mt-6">MockVideoProvider</h3>
        <p className="text-muted-foreground mb-4">Perfect for testing and development (no API keys needed)</p>
        <CodeBlock
          code={`from ministudio.providers import MockVideoProvider

provider = MockVideoProvider()`}
          language="python"
        />

        <Callout type="info">
          The MockVideoProvider returns placeholder videos instantly, making it ideal for testing workflows.
        </Callout>

        <h3 className="text-xl font-semibold mb-3 text-foreground mt-6">Custom Provider (Coming Soon)</h3>
        <p className="text-muted-foreground mb-4">
          Implement your own provider by extending the VideoProvider base class.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Provider Configuration</h2>

        <h3 className="text-xl font-semibold mb-3 text-foreground">Environment Variables</h3>
        <CodeBlock
          code={`# Google Vertex AI
export GOOGLE_API_KEY="your-api-key"
export GOOGLE_PROJECT_ID="your-project-id"
export GOOGLE_LOCATION="us-central1"`}
          language="bash"
        />

        <h3 className="text-xl font-semibold mb-3 text-foreground mt-6">Configuration File</h3>
        <p className="text-muted-foreground mb-4">Create ministudio.yaml:</p>
        <CodeBlock
          code={`provider:
  type: vertex_ai
  api_key: \${GOOGLE_API_KEY}
  project_id: \${GOOGLE_PROJECT_ID}
  location: us-central1
  timeout_seconds: 600`}
          language="yaml"
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Switching Providers</h2>
        <CodeBlock
          code={`from ministudio import VideoOrchestrator
from ministudio.providers import VertexAIProvider, MockVideoProvider

# Use Vertex AI for production
if environment == "production":
    provider = VertexAIProvider()
else:
    # Use mock for development
    provider = MockVideoProvider()

orchestrator = VideoOrchestrator(provider)`}
          language="python"
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Provider Methods</h2>

        <h3 className="text-xl font-semibold mb-3 text-foreground">generate_video()</h3>
        <p className="text-muted-foreground mb-4">Core method for video generation</p>
        <CodeBlock
          code={`async def generate_video(
    request: VideoGenerationRequest
) -> VideoGenerationResult`}
          language="python"
        />

        <h3 className="text-xl font-semibold mb-3 text-foreground mt-6">is_available()</h3>
        <p className="text-muted-foreground mb-4">Check if the provider is available and configured</p>
        <CodeBlock
          code={`if provider.is_available():
    # Provider is ready to use
    result = await orchestrator.generate_shot(request)`}
          language="python"
        />
      </section>
    </div>
  )
}

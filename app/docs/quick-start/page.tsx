import { CodeBlock } from "@/components/code-block"
import { Callout } from "@/components/callout"
import Link from "next/link"

export default function QuickStartPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-foreground">Quick Start</h1>
        <p className="text-lg text-muted-foreground">Generate your first video with MiniStudio in under 5 minutes.</p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Step 1: Set Up Credentials</h2>
        <p className="text-muted-foreground mb-4">
          MiniStudio supports multiple providers. For this guide, we'll use the Mock provider (no API keys required).
        </p>
        <CodeBlock code={`# For Vertex AI (optional)
export GOOGLE_API_KEY="your-key-here"`} language="bash" />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Step 2: Create Your First Script</h2>
        <p className="text-muted-foreground mb-4">Create a file called first_video.py:</p>
        <CodeBlock
          code={`import asyncio
from ministudio import VideoOrchestrator, MockVideoProvider

async def main():
    # Initialize the provider
    provider = MockVideoProvider()
    orchestrator = VideoOrchestrator(provider)
    
    # Define your shot
    from ministudio import VideoGenerationRequest
    
    request = VideoGenerationRequest(
        prompt="A lone researcher discovers a glowing orb in a dark laboratory",
        duration_seconds=8,
        aspect_ratio="16:9"
    )
    
    # Generate the video
    result = await orchestrator.generate_shot(request)
    
    if result.success:
        print(f"Video saved to: {result.video_path}")
    else:
        print(f"Error: {result.error}")

if __name__ == "__main__":
    asyncio.run(main())`}
          language="python"
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Step 3: Run Your Script</h2>
        <CodeBlock code={`python first_video.py`} language="bash" />

        <Callout type="success">Congratulations! You've generated your first video with MiniStudio.</Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">What's Next?</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/docs/characters" className="text-primary hover:underline">
              Character Consistency
            </Link>
            {" - Learn how to maintain character identity"}
          </li>
          <li>
            <Link href="/docs/guides/multi-shot" className="text-primary hover:underline">
              Multi-Shot Sequences
            </Link>
            {" - Create longer productions"}
          </li>
          <li>
            <Link href="/docs/api/orchestrator" className="text-primary hover:underline">
              API Reference
            </Link>
            {" - Explore all available options"}
          </li>
        </ul>
      </section>
    </div>
  )
}

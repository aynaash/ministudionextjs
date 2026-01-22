import { CodeBlock } from "@/components/code-block"
import { Callout } from "@/components/callout"
import Link from "next/link"

export default function FirstProductionPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-foreground">Your First Production</h1>
        <p className="text-lg text-muted-foreground">
          A complete walkthrough for creating your first video project with MiniStudio
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Project Setup</h2>

        <h3 className="text-xl font-semibold mb-3 text-foreground">1. Create Project Structure</h3>
        <CodeBlock
          code={`mkdir my_first_video
cd my_first_video
mkdir output
touch generate.py
mkdir prompts`}
          language="bash"
        />

        <h3 className="text-xl font-semibold mb-3 text-foreground mt-6">2. Set Up Environment</h3>
        <CodeBlock
          code={`# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\\Scripts\\activate

# Install MiniStudio
pip install -e /path/to/ministudio

# Set API key
export GOOGLE_API_KEY="your-api-key-here"`}
          language="bash"
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Write Your Script</h2>

        <p className="text-muted-foreground mb-4">Create generate.py with your production script:</p>

        <CodeBlock
          code={`import asyncio
import os
from datetime import datetime
from ministudio import VideoOrchestrator, VideoGenerationRequest
from ministudio.providers import VertexAIProvider

async def main():
    # Initialize provider
    api_key = os.getenv("GOOGLE_API_KEY")
    if not api_key:
        raise ValueError("GOOGLE_API_KEY not set")
    
    provider = VertexAIProvider(api_key=api_key)
    orchestrator = VideoOrchestrator(provider)
    
    # Create output directory with timestamp
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    output_dir = f"output/{timestamp}"
    os.makedirs(output_dir, exist_ok=True)
    
    print(f"Starting production: {timestamp}")
    
    # Define your production
    production = [
        VideoGenerationRequest(
            prompt="A serene mountain landscape at golden hour, snow-capped peaks glowing in warm sunlight",
            duration_seconds=8,
            aspect_ratio="16:9",
            quality="high"
        ),
        VideoGenerationRequest(
            prompt="Camera zooms in on a cozy mountain cabin nestled in a valley, smoke rising from the chimney",
            duration_seconds=8,
            aspect_ratio="16:9",
            quality="high"
        ),
        VideoGenerationRequest(
            prompt="Inside the cabin, warm firelight illuminates wooden walls, a figure sits reading by the window",
            duration_seconds=8,
            aspect_ratio="16:9",
            quality="high"
        ),
    ]
    
    # Generate production
    results = await orchestrator.generate_sequence(production)
    
    # Save metadata
    state = orchestrator.get_state()
    metadata = {
        "timestamp": timestamp,
        "total_shots": len(results),
        "total_duration": state.total_duration,
        "successful_shots": sum(1 for r in results if r.success),
        "failed_shots": sum(1 for r in results if not r.success),
        "output_directory": output_dir,
    }
    
    # Report results
    print("\\nProduction Results:")
    print(f"Shots Generated: {metadata['successful_shots']}/{metadata['total_shots']}")
    print(f"Total Duration: {metadata['total_duration']:.1f} seconds")
    
    for i, result in enumerate(results, 1):
        if result.success:
            print(f"✓ Shot {i}: {result.video_path}")
        else:
            print(f"✗ Shot {i}: {result.error}")
    
    print(f"\\nOutput saved to: {output_dir}")

if __name__ == "__main__":
    asyncio.run(main())`}
          language="python"
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Run Your Production</h2>

        <CodeBlock code={`python generate.py`} language="bash" />

        <Callout type="success">
          Your production is now running! The script will generate each shot in sequence and save them to the output directory.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Next Steps</h2>

        <h3 className="text-xl font-semibold mb-3 text-foreground">Enhance Your Production</h3>
        <ul className="space-y-3 text-muted-foreground mb-6">
          <li className="flex gap-3">
            <span className="text-primary">→</span>
            <span>
              <Link href="/docs/characters" className="text-primary hover:underline">
                Add Character Consistency
              </Link>
              {" for repeating characters"}
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">→</span>
            <span>
              <Link href="/docs/visual-grounding" className="text-primary hover:underline">
                Use Visual Grounding
              </Link>
              {" with reference images"}
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">→</span>
            <span>
              <Link href="/docs/guides/multi-shot" className="text-primary hover:underline">
                Extend Multi-Shot Sequences
              </Link>
              {" for longer videos"}
            </span>
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-3 text-foreground">Post-Production</h3>
        <p className="text-muted-foreground mb-4">After generating your videos, consider:</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Combining shots into a final video using FFmpeg</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Adding audio and background music</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Applying color grading and effects</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Adding text overlays and titles</span>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Troubleshooting</h2>

        <div className="bg-card border border-border rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-foreground mb-2">API Key Error</h3>
          <p className="text-muted-foreground text-sm mb-2">Make sure GOOGLE_API_KEY is set:</p>
          <CodeBlock code={`export GOOGLE_API_KEY="your-actual-key"`} language="bash" />
        </div>

        <div className="bg-card border border-border rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-foreground mb-2">Generation Timeout</h3>
          <p className="text-muted-foreground text-sm">
            Video generation can take several minutes. Be patient and check your API provider's status.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-4">
          <h3 className="font-semibold text-foreground mb-2">Low Quality Output</h3>
          <p className="text-muted-foreground text-sm">
            Use more detailed prompts and set quality="high" or quality="ultra" for better results.
          </p>
        </div>
      </section>
    </div>
  )
}

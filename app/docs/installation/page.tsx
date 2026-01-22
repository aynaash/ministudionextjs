import { CodeBlock } from "@/components/code-block"
import { Callout } from "@/components/callout"
import Link from "next/link"

export default function InstallationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-foreground">Installation</h1>
        <p className="text-lg text-muted-foreground">Get started with MiniStudio in minutes.</p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Prerequisites</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Python 3.8 or higher</li>
          <li>pip package manager</li>
          <li>(Optional) Google Cloud account for Vertex AI</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Install from Source</h2>
        <p className="text-muted-foreground mb-4">Clone the repository and install in development mode:</p>
        <CodeBlock code={`git clone https://github.com/aynaash/ministudio.git
cd ministudio
pip install -e .`} language="bash" />

        <Callout type="info">
          Installing in development mode (-e) allows you to modify the source code and see changes immediately.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Verify Installation</h2>
        <p className="text-muted-foreground mb-4">Check that MiniStudio is installed correctly:</p>
        <CodeBlock code={`from ministudio import VideoOrchestrator
print("MiniStudio installed successfully!")`} language="python" />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Next Steps</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/docs/quick-start" className="text-primary hover:underline">
              Quick Start Guide
            </Link>
            {" - Generate your first video"}
          </li>
          <li>
            <Link href="/docs/configuration" className="text-primary hover:underline">
              Configuration
            </Link>
            {" - Set up API credentials"}
          </li>
        </ul>
      </section>
    </div>
  )
}

import { CodeBlock } from "@/components/code-block"
import { Callout } from "@/components/callout"

export default function CustomStylesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-foreground">Custom Visual Styles</h1>
        <p className="text-lg text-muted-foreground">
          Guide your video generation with specific visual styles and aesthetics
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Using Style Parameters</h2>

        <p className="text-muted-foreground mb-4">
          The style parameter helps guide the visual appearance of your generated videos:
        </p>

        <CodeBlock
          code={`from ministudio import VideoGenerationRequest

request = VideoGenerationRequest(
    prompt="A spaceship interior with futuristic technology",
    duration_seconds=8,
    style="cyberpunk, neon lights, dark moody atmosphere"
)`}
          language="python"
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Style Categories</h2>

        <h3 className="text-xl font-semibold mb-3 text-foreground">Cinematic Styles</h3>
        <div className="space-y-2 text-muted-foreground mb-6">
          <p className="flex gap-2"><span className="text-primary">•</span> <span>cinematic, dramatic lighting, film noir</span></p>
          <p className="flex gap-2"><span className="text-primary">•</span> <span>documentary, realism, naturalistic</span></p>
          <p className="flex gap-2"><span className="text-primary">•</span> <span>high fashion, glamorous, luxury</span></p>
        </div>

        <h3 className="text-xl font-semibold mb-3 text-foreground">Mood & Atmosphere</h3>
        <div className="space-y-2 text-muted-foreground mb-6">
          <p className="flex gap-2"><span className="text-primary">•</span> <span>dark, moody, melancholic</span></p>
          <p className="flex gap-2"><span className="text-primary">•</span> <span>bright, cheerful, energetic</span></p>
          <p className="flex gap-2"><span className="text-primary">•</span> <span>mysterious, suspenseful, thrilling</span></p>
          <p className="flex gap-2"><span className="text-primary">•</span> <span>romantic, dreamy, ethereal</span></p>
        </div>

        <h3 className="text-xl font-semibold mb-3 text-foreground">Artistic Styles</h3>
        <div className="space-y-2 text-muted-foreground mb-6">
          <p className="flex gap-2"><span className="text-primary">•</span> <span>watercolor, oil painting, impressionist</span></p>
          <p className="flex gap-2"><span className="text-primary">•</span> <span>comic book, graphic novel, animated</span></p>
          <p className="flex gap-2"><span className="text-primary">•</span> <span>photorealistic, hyperrealistic, 3D rendered</span></p>
        </div>

        <h3 className="text-xl font-semibold mb-3 text-foreground">Genre Styles</h3>
        <div className="space-y-2 text-muted-foreground">
          <p className="flex gap-2"><span className="text-primary">•</span> <span>sci-fi, cyberpunk, steampunk</span></p>
          <p className="flex gap-2"><span className="text-primary">•</span> <span>fantasy, magical, mystical</span></p>
          <p className="flex gap-2"><span className="text-primary">•</span> <span>horror, gothic, dark fantasy</span></p>
          <p className="flex gap-2"><span className="text-primary">•</span> <span>action, adventure, thrilling</span></p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Style Combinations</h2>

        <p className="text-muted-foreground mb-4">Combine styles for more specific results:</p>

        <CodeBlock
          code={`# Example 1: Cinematic Sci-Fi
request1 = VideoGenerationRequest(
    prompt="A bustling futuristic city",
    style="cyberpunk, neon lights, dystopian, cinematic"
)

# Example 2: Fantasy Adventure
request2 = VideoGenerationRequest(
    prompt="A magical forest with ancient ruins",
    style="fantasy, mystical, magical, dramatic lighting, oil painting"
)

# Example 3: Contemporary Drama
request3 = VideoGenerationRequest(
    prompt="A quiet moment in a coffee shop",
    style="naturalistic, intimate, warm lighting, documentary"
)`}
          language="python"
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Lighting Descriptions</h2>

        <p className="text-muted-foreground mb-4">Specific lighting styles for consistent atmosphere:</p>

        <CodeBlock
          code={`request = VideoGenerationRequest(
    prompt="A scientist works in a laboratory",
    style="cool blue lighting, fluorescent, sterile, professional"
)

# Other lighting options:
# - golden hour lighting, warm and amber
# - neon glow, electric, futuristic
# - candlelit, warm shadows, intimate
# - overcast, soft diffused light, moody
# - dramatic shadows, high contrast, noir
# - bright sunlight, clear day, cheerful`}
          language="python"
        />

        <Callout type="info">
          Lighting descriptions should match your scene for the best results. Consistent lighting across shots maintains visual continuity.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Color Palettes</h2>

        <p className="text-muted-foreground mb-4">Describe color palettes in your style parameter:</p>

        <CodeBlock
          code={`# Cool, icy palette
request1 = VideoGenerationRequest(
    prompt="An arctic landscape",
    style="cool tones, icy blue and white, minimalist, serene"
)

# Warm, earthy palette
request2 = VideoGenerationRequest(
    prompt="A desert sunset",
    style="warm tones, gold and orange, earthy, vibrant"
)

# Vibrant, saturated palette
request3 = VideoGenerationRequest(
    prompt="A carnival scene",
    style="vibrant colors, saturated, rich tones, energetic"
)`}
          language="python"
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Best Practices</h2>

        <h3 className="text-xl font-semibold mb-3 text-foreground">Do's</h3>
        <ul className="space-y-2 text-muted-foreground mb-6">
          <li className="flex gap-2">
            <span className="text-primary">✓</span>
            <span>Keep styles consistent across shots in a sequence</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">✓</span>
            <span>Combine 2-3 descriptive style terms for best results</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">✓</span>
            <span>Use specific color descriptions for color control</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">✓</span>
            <span>Reference mood and lighting for atmosphere control</span>
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-3 text-foreground">Don'ts</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-primary">✗</span>
            <span>Don't use too many conflicting styles (e.g., "bright dark")</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">✗</span>
            <span>Don't change styles drastically between related shots</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">✗</span>
            <span>Don't rely solely on style for quality - detailed prompts matter</span>
          </li>
        </ul>
      </section>
    </div>
  )
}

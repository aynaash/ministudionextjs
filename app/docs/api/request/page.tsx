import { CodeBlock } from "@/components/code-block"

export default function RequestPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-foreground">Request Types</h1>
        <p className="text-lg text-muted-foreground">
          API data types for video generation requests and results
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">VideoGenerationRequest</h2>
        <p className="text-muted-foreground mb-4">
          Defines a single video generation request with all necessary parameters.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-foreground">Parameters</h3>
        <CodeBlock
          code={`class VideoGenerationRequest:
    prompt: str  # The description of the video to generate
    duration_seconds: int = 8  # Duration in seconds (1-120)
    aspect_ratio: str = "16:9"  # "16:9", "9:16", "1:1", etc.
    quality: str = "high"  # "standard", "high", "ultra"
    character_identity: Optional[str] = None  # Reference to previous character
    character_consistency: Optional[CharacterConsistencyConfig] = None
    reference_image: Optional[str] = None  # Base64 encoded reference image
    reference_type: Optional[str] = None  # "character" or "environment"
    negative_prompt: Optional[str] = None  # Things to avoid generating
    seed: Optional[int] = None  # For reproducibility
    style: Optional[str] = None  # Visual style guidance
    metadata: Optional[Dict[str, Any]] = None  # Custom metadata`}
          language="python"
        />

        <h3 className="text-xl font-semibold mb-3 text-foreground mt-6">Example</h3>
        <CodeBlock
          code={`from ministudio import VideoGenerationRequest

request = VideoGenerationRequest(
    prompt="A scientist discovers a glowing crystal in an ancient temple",
    duration_seconds=10,
    aspect_ratio="16:9",
    quality="high",
    negative_prompt="blurry, low quality, watermark",
    style="cinematic, dramatic lighting"
)`}
          language="python"
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">VideoGenerationResult</h2>
        <p className="text-muted-foreground mb-4">
          Contains the result of a video generation request.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-foreground">Properties</h3>
        <CodeBlock
          code={`class VideoGenerationResult:
    success: bool  # Whether generation succeeded
    video_path: Optional[str]  # Path to generated video file
    duration_seconds: float  # Actual duration of generated video
    resolution: Tuple[int, int]  # Video resolution (width, height)
    frame_count: int  # Number of frames in video
    character_identity: Optional[str]  # Character identity from this shot
    environment_state: Optional[Dict]  # Environmental state for continuity
    last_frame_data: Optional[bytes]  # Last frame for continuity
    error: Optional[str]  # Error message if failed
    generation_time_seconds: float  # How long generation took
    metadata: Dict[str, Any]  # Additional metadata`}
          language="python"
        />

        <h3 className="text-xl font-semibold mb-3 text-foreground mt-6">Example</h3>
        <CodeBlock
          code={`result = await orchestrator.generate_shot(request)

if result.success:
    print(f"Video: {result.video_path}")
    print(f"Duration: {result.duration_seconds}s")
    print(f"Resolution: {result.resolution}")
    print(f"Generation time: {result.generation_time_seconds}s")
else:
    print(f"Error: {result.error}")`}
          language="python"
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">CharacterConsistencyConfig</h2>
        <p className="text-muted-foreground mb-4">
          Configuration for character consistency behavior.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-foreground">Parameters</h3>
        <CodeBlock
          code={`class CharacterConsistencyConfig:
    enabled: bool = True  # Enable character consistency
    confidence_threshold: float = 0.85  # Strictness (0-1)
    allow_pose_variation: bool = True  # Allow different poses
    allow_lighting_variation: bool = False  # Consistent lighting
    allow_clothing_change: bool = False  # Same clothing
    auto_correction: bool = True  # Automatically fix inconsistencies`}
          language="python"
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">OrchestratorState</h2>
        <p className="text-muted-foreground mb-4">
          Current state of the orchestrator.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-foreground">Properties</h3>
        <CodeBlock
          code={`class OrchestratorState:
    shot_count: int  # Number of shots generated
    shot_history: List[VideoGenerationResult]  # All previous results
    last_frame: Optional[np.ndarray]  # Last generated frame
    character_identity: Optional[str]  # Current character identity
    environment_context: Dict[str, Any]  # Environmental state
    character_positions: List[Dict]  # Character positions
    total_duration: float  # Total duration of sequence`}
          language="python"
        />

        <h3 className="text-xl font-semibold mb-3 text-foreground mt-6">Accessing State</h3>
        <CodeBlock
          code={`state = orchestrator.get_state()
print(f"Shots generated: {state.shot_count}")
print(f"Total duration: {state.total_duration}s")
print(f"Character positions: {state.character_positions}")`}
          language="python"
        />
      </section>
    </div>
  )
}

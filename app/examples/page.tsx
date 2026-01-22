'use client'

import { useState } from 'react'
import { Film, Users, Sparkles, Zap, BookOpen, Palette, Video, Brain, ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'
import { CodeViewer } from '@/components/code-viewer'

// Import example code as strings
const exampleCodes = {
    'basic_usage.py': `"""
Basic usage example for Ministudio.
=========================================

This example shows how to generate a single video using the mock provider.
No API keys required - perfect for getting started.
"""

import asyncio
from ministudio import Ministudio


async def main():
    """Generate a basic video using Ministudio"""

    print(" Ministudio Basic Usage Example")
    print("=" * 40)

    # 1. Create a provider
    # Use mock provider for testing (no API keys needed)
    print("1. Creating mock provider...")
    provider = Ministudio.create_provider("mock")
    print(f"   Provider: {provider.name}")

    # 2. Create Ministudio instance
    print("2. Creating Ministudio instance...")
    studio = Ministudio(provider=provider)
    print(f"   Output directory: {studio.output_dir}")

    # 3. Generate a video
    print("3. Generating video...")
    concept = "Machine Learning"
    action = "orb sorting colorful data points"

    result = await studio.generate_concept_video(
        concept=concept,
        action=action,
        duration=8
    )

    # 4. Check results
    print("4. Results:")
    print(f"   Success: {result.success}")
    print(f"   Provider used: {result.provider}")
    print(f"   Video generated: {result.has_video}")

    if result.success and result.video_path:
        print(f"   Video saved to: {result.video_path}")
        print(f"   File size: {result.video_path.stat().st_size} bytes")
    elif result.error:
        print(f"   Error: {result.error}")

    print("\\nExample completed!")


if __name__ == "__main__":
    asyncio.run(main())`,

    'character_demo.py': `"""
Character consistency demo for Ministudio.
============================================

This example demonstrates Ministudio's core innovation: character consistency.
The same character appears in multiple videos with the same appearance.
"""

import asyncio
from ministudio import Ministudio, StyleConfig


async def main():
    """Demonstrate character consistency across multiple generations"""

    print("🎭 Ministudio Character Consistency Demo")
    print("=" * 45)

    # 1. Define a custom character style
    print("1. Defining character style...")
    custom_style = StyleConfig(
        name="demo_style",
        description="Educational demonstration style",
        characters={
            "orb": {
                "appearance": "Golden glowing orb with warm inner light",
                "surface": "Translucent with gentle data-circuit patterns flowing inside",
                "glow": "Soft golden with ethereal teal accents",
                "motion": "Slow floating drift, gentle bobbing",
                "size": "tennis ball sized"
            }
        },
        environment={
            "setting": "Clean educational space with soft lighting",
            "lighting": "Warm, professional studio lighting",
            "color_palette": "Warm golds, deep teals, clean whites",
            "texture": "Smooth, modern, educational feel"
        },
        technical={
            "fps": 24,
            "motion_style": "Smooth, deliberate movements",
            "depth_of_field": "Shallow, cinematic focus",
            "continuity": "Maintain character appearance across all frames"
        }
    )

    # 2. Create provider and studio
    print("2. Setting up Ministudio...")
    provider = Ministudio.create_provider("mock")
    studio = Ministudio(provider=provider, style_config=custom_style)

    # 3. Generate multiple videos with the same character
    print("3. Generating consistent character videos...")

    videos = [
        {"concept": "Mathematics", "action": "orb solving geometric equations visually"},
        {"concept": "Physics", "action": "orb demonstrating gravitational waves"},
        {"concept": "Computer Science", "action": "orb sorting algorithms with data structures"}
    ]

    results = []
    for i, video_spec in enumerate(videos, 1):
        print(f"   Generating video {i}/3: {video_spec['concept']}")
        result = await studio.generate_concept_video(
            concept=video_spec["concept"],
            action=video_spec["action"],
            duration=8,
            mood="educational"
        )
        results.append(result)

    print("\\nCharacter consistency demo completed!")
    print("\\nKey Innovation: Define once, consistent everywhere")


if __name__ == "__main__":
    asyncio.run(main())`
}

export default function ExamplesPage() {
    const [expandedExample, setExpandedExample] = useState<string | null>(null)

    const examples = [
        {
            title: "Basic Usage",
            description: "Get started with MiniStudio - generate your first AI video with consistent characters. This example uses the mock provider, so no API keys are required!",
            explanation: "This is the perfect starting point. It demonstrates how to create a Ministudio instance, configure a provider, and generate a simple concept video. The mock provider allows you to test the workflow without any API credentials.",
            file: "basic_usage.py",
            icon: <Zap className="w-6 h-6" />,
            category: "Getting Started",
            difficulty: "Beginner",
            color: "from-cyan-500 to-blue-500",
            hasCode: true
        },
        {
            title: "Character Demo",
            description: "Create videos with persistent character identity across multiple shots. Define a character once, use it everywhere with perfect consistency.",
            explanation: "This example showcases MiniStudio's core innovation: character consistency. You define a character's appearance, motion, and style once using StyleConfig, then generate multiple videos where the character maintains the exact same appearance. This solves the biggest problem in AI video generation.",
            file: "character_demo.py",
            icon: <Users className="w-6 h-6" />,
            category: "Characters",
            difficulty: "Beginner",
            color: "from-purple-500 to-pink-500",
            hasCode: true
        },
        {
            title: "Consistent Story Demo",
            description: "Build a multi-scene narrative with maintained character and environment consistency throughout the entire story.",
            file: "consistent_story_demo.py",
            icon: <BookOpen className="w-6 h-6" />,
            category: "Storytelling",
            difficulty: "Intermediate",
            color: "from-green-500 to-emerald-500"
        },
        {
            title: "Complex Story Demo",
            description: "Advanced storytelling with multiple characters, environments, and seamless scene transitions.",
            file: "complex_story_demo.py",
            icon: <Film className="w-6 h-6" />,
            category: "Storytelling",
            difficulty: "Advanced",
            color: "from-orange-500 to-red-500"
        },
        {
            title: "Ghibli Studio Demo",
            description: "Create Studio Ghibli-style animated videos with custom visual styling and artistic direction.",
            file: "ghibli_studio_demo.py",
            icon: <Palette className="w-6 h-6" />,
            category: "Styling",
            difficulty: "Intermediate",
            color: "from-pink-500 to-rose-500"
        },
        {
            title: "Quantum TikTok Demo",
            description: "Create short-form educational content with engaging visuals explaining complex quantum mechanics concepts.",
            file: "quantum_tiktok_demo.py",
            icon: <Brain className="w-6 h-6" />,
            category: "Education",
            difficulty: "Advanced",
            color: "from-teal-500 to-cyan-500"
        }
    ]

    const toggleExample = (file: string) => {
        setExpandedExample(expandedExample === file ? null : file)
    }

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative py-24 px-6 overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                    <div className="absolute top-40 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
                </div>

                <div className="relative max-w-7xl mx-auto text-center z-10">
                    <h1 className="text-5xl sm:text-6xl font-black mb-6 tracking-tighter">
                        <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Example Gallery
                        </span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
                        Explore real-world examples with full source code and explanations. Learn how to build consistent AI videos from simple demos to complex narratives.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        <a
                            href="https://github.com/aynaash/ministudio/tree/main/examples"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition inline-flex items-center gap-2"
                        >
                            <Film className="w-4 h-4" />
                            View All on GitHub
                        </a>
                        <Link
                            href="/community"
                            className="px-6 py-3 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition inline-flex items-center gap-2"
                        >
                            <Users className="w-4 h-4" />
                            Join Community
                        </Link>
                    </div>
                </div>
            </section>

            {/* Examples List */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto space-y-8">
                    {examples.map((example, idx) => (
                        <div key={idx} className="group">
                            <div className={`relative rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/30 transition-all overflow-hidden`}>
                                {/* Example Header */}
                                <div className="p-6">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className={`p-3 rounded-lg bg-gradient-to-r ${example.color} text-white flex-shrink-0`}>
                                            {example.icon}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between mb-2">
                                                <h3 className="text-2xl font-bold">{example.title}</h3>
                                                <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80">
                                                    {example.difficulty}
                                                </span>
                                            </div>
                                            <p className="text-white/70 mb-3">{example.description}</p>
                                            {example.explanation && (
                                                <p className="text-sm text-white/50 italic">{example.explanation}</p>
                                            )}
                                            <div className="flex items-center gap-4 mt-4">
                                                <span className="text-xs text-white/50">{example.category}</span>
                                                <span className="text-xs text-white/40 font-mono">{example.file}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3">
                                        {example.hasCode && (
                                            <button
                                                onClick={() => toggleExample(example.file)}
                                                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-sm font-semibold inline-flex items-center gap-2"
                                            >
                                                {expandedExample === example.file ? (
                                                    <>
                                                        <ChevronUp className="w-4 h-4" />
                                                        Hide Code
                                                    </>
                                                ) : (
                                                    <>
                                                        <ChevronDown className="w-4 h-4" />
                                                        View Code
                                                    </>
                                                )}
                                            </button>
                                        )}
                                        <a
                                            href={`https://github.com/aynaash/ministudio/blob/main/examples/${example.file}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 rounded-lg border border-white/30 hover:bg-white/10 transition text-sm font-semibold inline-flex items-center gap-2"
                                        >
                                            View on GitHub →
                                        </a>
                                    </div>
                                </div>

                                {/* Code Viewer */}
                                {example.hasCode && expandedExample === example.file && exampleCodes[example.file as keyof typeof exampleCodes] && (
                                    <div className="px-6 pb-6">
                                        <CodeViewer
                                            code={exampleCodes[example.file as keyof typeof exampleCodes]}
                                            filename={example.file}
                                            githubUrl={`https://github.com/aynaash/ministudio/blob/main/examples/${example.file}`}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* More Examples CTA */}
            <section className="py-16 px-6 bg-white/[0.02] border-t border-white/10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Want to See More?</h2>
                    <p className="text-white/70 mb-6">
                        We have {12} total examples covering everything from basic usage to advanced storytelling.
                    </p>
                    <a
                        href="https://github.com/aynaash/ministudio/tree/main/examples"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-bold text-lg transition inline-flex items-center justify-center gap-2"
                    >
                        Browse All Examples on GitHub
                    </a>
                </div>
            </section>

            {/* Getting Started CTA */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Create Your Own?</h2>
                    <p className="text-xl text-white/70 mb-8">
                        Start with our Quick Start guide and build your first AI video in minutes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/docs/installation"
                            className="px-8 py-4 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold text-lg transition inline-flex items-center justify-center gap-2"
                        >
                            Get Started
                        </Link>
                        <Link
                            href="/docs"
                            className="px-8 py-4 rounded-lg border-2 border-white/30 text-white font-bold text-lg hover:bg-white/10 transition inline-flex items-center gap-2"
                        >
                            View Documentation
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

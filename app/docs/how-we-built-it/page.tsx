'use client'

import React from 'react'
import { Layers, Shield, Video, ArrowRight, CheckCircle2, Zap, Brain } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function HowWeBuiltItPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        How We Built MiniStudio
                    </h1>
                    <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                        Solving the consistency problem in AI video generation through a three-layer architecture
                    </p>
                </div>

                {/* Logo Visual */}
                <div className="mb-16 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 p-8">
                    <img
                        src="/ministudio-logo-visual.jpg"
                        alt="MiniStudio - The Cinematic AI Engine"
                        className="w-full h-auto rounded-lg shadow-2xl"
                    />
                    <p className="text-center text-sm text-white/50 mt-4">
                        MiniStudio: A circular flow of consistent video generation
                    </p>
                </div>

                {/* The Problem */}
                <section className="mb-20">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white flex items-center gap-3">
                        <span className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-2xl">
                            ⚠️
                        </span>
                        The Problem
                    </h2>
                    <div className="bg-gradient-to-br from-red-900/20 to-red-950/10 border border-red-500/20 rounded-xl p-6 sm:p-8">
                        <p className="text-lg text-white/80 mb-4 leading-relaxed">
                            Traditional AI video generation tools create beautiful individual shots, but they fail at storytelling.
                            Characters change appearance between frames, environments shift unpredictably, and spatial consistency is lost.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4 mt-6">
                            <div className="flex items-start gap-3">
                                <div className="text-red-400 mt-1">❌</div>
                                <div>
                                    <h4 className="font-semibold text-red-200 mb-1">Character Drift</h4>
                                    <p className="text-sm text-red-200/70">Hair color changes, clothing morphs, facial features shift</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="text-red-400 mt-1">❌</div>
                                <div>
                                    <h4 className="font-semibold text-red-200 mb-1">Environment Shimmer</h4>
                                    <p className="text-sm text-red-200/70">Backgrounds shift, walls move, objects disappear</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Architecture Diagram */}
                <section className="mb-20">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white flex items-center gap-3">
                        <span className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                            <Brain className="w-6 h-6" />
                        </span>
                        Our Three-Layer Architecture
                    </h2>
                    <div className="rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 p-8">
                        <img
                            src="/architecture-diagram.jpg"
                            alt="MiniStudio Architecture: Identity Grounding 2.0, The Invisible Weave, Sequential Memory"
                            className="w-full h-auto rounded-lg shadow-2xl"
                        />
                        <p className="text-center text-sm text-white/50 mt-4">
                            The three foundational layers that power MiniStudio's consistency engine
                        </p>
                    </div>
                </section>

                {/* Layer 1: Identity Grounding 2.0 */}
                <section className="mb-16">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 text-white flex items-center justify-center font-bold text-2xl">
                            1
                        </div>
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 flex items-center gap-3">
                                <Shield className="w-8 h-8 text-cyan-400" />
                                Identity Grounding 2.0
                            </h3>
                            <p className="text-white/60 text-lg">Master reference portraits for every character</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6 sm:p-8">
                        <p className="text-white/80 mb-6 leading-relaxed">
                            Every character in MiniStudio has a <strong className="text-cyan-300">master reference portrait</strong> that
                            gets injected into every single generation step. This isn't just a text description—it's a visual anchor
                            that the AI uses to maintain consistency.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Visual Identity Persistence</h4>
                                    <p className="text-sm text-white/70">
                                        Characters like "Grandfather Elias" maintain their white beard, wise blue eyes, and moss-green
                                        cardigan across all 60+ shots in a production.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Multi-Character Support</h4>
                                    <p className="text-sm text-white/70">
                                        Each character has their own identity profile with unique visual markers, voice profiles,
                                        and personality traits.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Provider-Agnostic</h4>
                                    <p className="text-sm text-white/70">
                                        Works with Vertex AI (Veo 3.1), OpenAI Sora, or any custom provider—the identity system
                                        adapts to each model's capabilities.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                            <p className="text-sm text-cyan-200">
                                <strong>Technical Implementation:</strong> Master reference images are encoded and passed as
                                visual conditioning parameters to the video generation model, ensuring pixel-level consistency.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Layer 2: The Invisible Weave */}
                <section className="mb-16">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center font-bold text-2xl">
                            2
                        </div>
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 flex items-center gap-3">
                                <Layers className="w-8 h-8 text-purple-400" />
                                The Invisible Weave
                            </h3>
                            <p className="text-white/60 text-lg">State machine for environment and character tracking</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6 sm:p-8">
                        <p className="text-white/80 mb-6 leading-relaxed">
                            The Invisible Weave is our <strong className="text-purple-300">state machine</strong> that remembers
                            environment geometry, character positions, and scene context across generations. It's the "memory"
                            that prevents spatial drift.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Environment Persistence</h4>
                                    <p className="text-sm text-white/70">
                                        A Victorian study with oak paneling and bookshelves maintains its spatial layout.
                                        The mahogany armchair stays in the same corner, the rug remains on the floor.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Character State Tracking</h4>
                                    <p className="text-sm text-white/70">
                                        Tracks character positions, poses, and emotional states. If Grandfather is sitting,
                                        he stays sitting unless the script explicitly changes his state.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Scene Transitions</h4>
                                    <p className="text-sm text-white/70">
                                        Handles smooth transitions between locations. When moving from the study to the warehouse,
                                        the state machine ensures logical continuity.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                            <p className="text-sm text-purple-200">
                                <strong>Technical Implementation:</strong> A finite state machine tracks environment variables,
                                character positions, and scene metadata, injecting this context into each generation prompt.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Layer 3: Sequential Memory */}
                <section className="mb-16">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 text-white flex items-center justify-center font-bold text-2xl">
                            3
                        </div>
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 flex items-center gap-3">
                                <Video className="w-8 h-8 text-pink-400" />
                                Sequential Memory
                            </h3>
                            <p className="text-white/60 text-lg">Frame-to-frame visual continuity</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6 sm:p-8">
                        <p className="text-white/80 mb-6 leading-relaxed">
                            Sequential Memory ensures that each new video generation is <strong className="text-pink-300">grounded
                                by the final frames</strong> of the previous shot. This creates seamless visual continuity between segments.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-white mb-1">First-Frame Continuity</h4>
                                    <p className="text-sm text-white/70">
                                        The last frame of Shot A becomes the visual reference for the first frame of Shot B,
                                        ensuring smooth transitions.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Lighting Consistency</h4>
                                    <p className="text-sm text-white/70">
                                        When the Villain moves to the warehouse, the lighting, shadows, and color grading
                                        carry forward from the previous scene.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Motion Continuity</h4>
                                    <p className="text-sm text-white/70">
                                        If a character is walking in Shot A, their motion vector is preserved into Shot B,
                                        creating natural movement flow.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 p-4 bg-pink-500/10 border border-pink-500/20 rounded-lg">
                            <p className="text-sm text-pink-200">
                                <strong>Technical Implementation:</strong> Extracts final frames from each generated video,
                                encodes them as reference images, and injects them into the next generation request.
                            </p>
                        </div>
                    </div>
                </section>

                {/* The Result */}
                <section className="mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white flex items-center gap-3">
                        <span className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                            <Zap className="w-6 h-6" />
                        </span>
                        The Result
                    </h2>
                    <div className="bg-gradient-to-br from-green-900/20 to-emerald-950/10 border border-green-500/20 rounded-xl p-6 sm:p-8">
                        <p className="text-lg text-white/80 mb-6 leading-relaxed">
                            By combining these three layers, MiniStudio achieves <strong className="text-green-300">100% character
                                consistency</strong> and <strong className="text-green-300">spatial coherence</strong> across multi-shot
                            sequences. You can now tell coherent stories with AI-generated video.
                        </p>

                        <div className="grid sm:grid-cols-3 gap-6 mt-8">
                            <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                                <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                    60+
                                </div>
                                <div className="text-sm text-white/60">Shots per production</div>
                            </div>
                            <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                                <div className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                                    100%
                                </div>
                                <div className="text-sm text-white/60">Character consistency</div>
                            </div>
                            <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                                <div className="text-3xl font-black bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                                    8s
                                </div>
                                <div className="text-sm text-white/60">Per shot generation</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Code Example */}
                <section className="mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                        See It In Action
                    </h2>
                    <div className="bg-slate-900 rounded-xl p-6 border border-white/20 overflow-x-auto">
                        <pre className="text-sm text-white/90">
                            <code>{`from ministudio import Ministudio, Character, Environment

# Layer 1: Identity Grounding 2.0
GRANDFATHER = Character(
    name="Grandfather Elias",
    identity={
        "hair_style": "thick white messy hair and matching white beard",
        "eye_color": "bright wise blue eyes",
        "clothing": "moss-green wool cardigan over white shirt"
    }
)

# Layer 2: The Invisible Weave
STUDY = Environment(
    location="Victorian study with oak paneling",
    identity={
        "architecture": "floor-to-ceiling bookshelves",
        "base_color": "warm browns, brass, velvet greens"
    }
)

# Layer 3: Sequential Memory (automatic)
studio = Ministudio(provider)
results = await studio.generate_film({
    "title": "Quantum Mechanics Masterclass",
    "characters": [GRANDFATHER],
    "environment": STUDY,
    "scenes": [
        {"action": "Grandfather explains Double-Slit Experiment"},
        {"action": "Grandfather demonstrates with visual aids"},
        {"action": "Grandfather concludes the lesson"}
    ]
})

# Result: 60+ shots, perfect consistency, cinematic quality`}</code>
                        </pre>
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center py-12 px-6 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 rounded-2xl border border-white/10">
                    <h2 className="text-3xl font-bold mb-4 text-white">
                        Ready to Build Consistent AI Videos?
                    </h2>
                    <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                        Start creating cinematic AI videos with MiniStudio's three-layer architecture
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/docs/getting-started">
                            <Button className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white px-8 py-6 text-lg">
                                Get Started
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                        <Link href="/docs/architecture">
                            <Button variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent px-8 py-6 text-lg">
                                View Architecture Docs
                            </Button>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    )
}

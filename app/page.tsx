'use client'

import React, { useState, useEffect, useRef } from 'react'
import { ArrowRight, Zap, Shield, Layers, Film, Users, Sparkles, Code2, Video, CheckCircle2, Menu, X, TrendingUp, Brain, Search, MessageCircle, Flame, Eye, Plus, Trophy, Compass, Bell, GitBranch, SettingsIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const canvasRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    const handleScroll = () => setScrollY(window.scrollY)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let time = 0
    const particles = []

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        size: Math.random() * 4 + 1,
        life: 1
      })
    }

    const animate = () => {
      time++

      ctx.fillStyle = 'rgba(10, 10, 15, 0.02)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        p.x += p.vx + Math.sin(time * 0.01 + i) * 0.5
        p.y += p.vy + Math.cos(time * 0.01 + i) * 0.5

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        const hue = (i * 10 + time * 2) % 360
        const saturation = 100
        const lightness = 50 + Math.sin(time * 0.02 + i) * 20

        ctx.fillStyle = `hsl(${hue}, ${saturation}%, ${lightness}%)`
        ctx.globalAlpha = 0.6 * p.life
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        particles.forEach((other, j) => {
          if (i !== j) {
            const dx = p.x - other.x
            const dy = p.y - other.y
            const dist = Math.sqrt(dx * dx + dy * dy)

            if (dist < 200) {
              ctx.strokeStyle = `hsl(${hue}, 80%, 50%, ${0.1 * (1 - dist / 200)})`
              ctx.lineWidth = 0.5
              ctx.globalAlpha = 0.2
              ctx.beginPath()
              ctx.moveTo(p.x, p.y)
              ctx.lineTo(other.x, other.y)
              ctx.stroke()
            }
          }
        })

        ctx.globalAlpha = 1
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navItems = [
    { label: 'Documentation', href: '/docs', icon: <Code2 className="w-4 h-4" /> },
    { label: 'Examples', href: '/examples', icon: <Film className="w-4 h-4" /> },
    { label: 'Community', href: '/community', icon: <Users className="w-4 h-4" /> },
  ]

  return (
    <div className="relative min-h-screen bg-black">
      {/* Animated Background Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ mixBlendMode: 'screen' }} />

      {/* Animated Mouse Trail */}
      <div className="fixed w-72 h-72 pointer-events-none z-10"
        style={{
          left: `${mousePos.x - 144}px`,
          top: `${mousePos.y - 144}px`,
          background: `radial-gradient(circle, rgba(${Math.sin(scrollY * 0.01) * 100 + 155}, 50, 255, 0.2) 0%, transparent 70%)`,
          filter: 'blur(80px)',
          transition: 'all 0.05s ease-out'
        }}
      />

      {/* Scanline Overlay */}
      <div className="fixed inset-0 pointer-events-none z-5 opacity-[0.02]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,.05) 2px, rgba(255,255,255,.05) 4px)',
          animation: 'scanlines 8s linear infinite'
        }}
      />

      {/* Header */}
      <header className="fixed top-0 w-full z-40 px-4 sm:px-6 py-3 sm:py-4 backdrop-blur-md bg-black/40 border-b border-white/5 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <img src="/logo.png" alt="MiniStudio Logo" className="w-6 h-6 sm:w-8 sm:h-8" />
          <div className="text-base sm:text-lg font-black tracking-tighter">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              MINISTUDIO
            </span>
          </div>
          <span className="hidden sm:inline text-xs text-white/40 font-mono">v1.0</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="flex items-center gap-2 text-white/60 hover:text-white transition">
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/docs/getting-started" className="px-3 py-2 sm:px-6 sm:py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs sm:text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition inline-flex items-center gap-1 sm:gap-2">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Get Started</span>
            <span className="sm:hidden">Start</span>
          </Link>
          <a href="https://github.com/aynaash/ministudio" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex px-4 py-2 text-sm font-semibold text-white/60 hover:text-white transition items-center gap-2">
            <Code2 className="w-4 h-4" />
            GitHub
          </a>
          <button
            className="md:hidden p-2 text-white/60"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-black/80 backdrop-blur border-b border-white/5 p-6 space-y-4 md:hidden">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="flex items-center gap-2 text-white/60 hover:text-white text-sm">
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden pt-20 sm:pt-16">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="relative z-20 text-center max-w-5xl mx-auto w-full">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black leading-tight sm:leading-none mb-6 sm:mb-8 tracking-tighter px-2">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              The Cinematic AI Engine
            </span>
          </h1>

          <p className="text-base sm:text-xl md:text-3xl font-light mb-4 sm:mb-6 text-slate-300 leading-relaxed max-w-3xl mx-auto px-4">
            Programmable, <span className="text-cyan-300 font-bold">Stateful</span>, and Model-Agnostic
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Orchestration for <span className="text-pink-300 font-bold">High-Fidelity</span> Video Production
            <br />
            <span className="text-xs sm:text-sm text-white/40 block mt-2">Solve the consistency problem. Ship cinematic AI videos.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 sm:mt-12 mb-8 sm:mb-12 px-4">
            <Link href="/docs/getting-started" className="group relative px-6 sm:px-10 py-3 sm:py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-base sm:text-lg overflow-hidden inline-flex items-center justify-center gap-2">
              Get Started <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition" />
            </Link>
            <Link href="/docs" className="px-6 sm:px-10 py-3 sm:py-4 rounded-2xl border-2 border-white/30 text-white font-bold text-base sm:text-lg hover:bg-white/10 transition inline-flex items-center gap-2">
              <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
              View Docs →
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 md:gap-16 text-xs sm:text-sm font-mono px-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">3+</div>
              <div className="text-white/40 mt-1">AI providers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">8s</div>
              <div className="text-white/40 mt-1">per shot</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">100%</div>
              <div className="text-white/40 mt-1">consistent</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Stats */}
      <section className="relative py-16 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatCard number="3+" label="Supported Providers" />
            <StatCard number="8s" label="Per Shot Generation" />
            <StatCard number="100%" label="Character Consistency" />
            <StatCard number="Open" label="Source & Free" />
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-gradient-to-b from-black to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-white">The Consistency Problem</h2>
              <p className="text-xl text-white/70">
                Traditional AI video generation creates beautiful individual shots, but fails at storytelling
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <ProblemCard
                title="Character Drift"
                description="Emma looks different in every shot. Her hair color changes. Her clothing morphs. The AI forgets who she is."
                icon={<Users className="w-6 h-6" />}
              />
              <ProblemCard
                title="Environment Shimmer"
                description="The laboratory background shifts between frames. Walls move. Objects disappear. Spatial consistency is lost."
                icon={<Film className="w-6 h-6" />}
              />
            </div>

            <div className="text-center p-8 rounded-lg bg-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-white/20 transition">
              <p className="text-lg text-white font-medium mb-2">
                Result: Disjointed, unprofessional videos that break immersion
              </p>
              <p className="text-white/60">
                You can't tell a coherent story when your characters and environments change every 8 seconds
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-24 bg-gradient-to-b from-black to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-white">How MiniStudio Solves This</h2>
              <p className="text-xl text-white/70">
                A three-layer architecture that treats video generation like code
              </p>
            </div>

            <div className="space-y-8">
              <SolutionCard
                number="1"
                title="Identity Grounding 2.0"
                description="Master Reference portraits are injected into every generation step. Your character Grandfather Elias maintains consistent white beard, wise blue eyes, and moss-green cardigan across all 60 shots."
                icon={<Shield className="w-8 h-8" />}
                color="from-cyan-500 to-purple-500"
              />
              <SolutionCard
                number="2"
                title="The Invisible Weave (State Machine)"
                description="Remembers environment geometry and character state. The Victorian study with oak paneling and bookshelves maintains spatial consistency. Grandfather stays in his mahogany armchair, Young Maya on the rug."
                icon={<Layers className="w-8 h-8" />}
                color="from-purple-500 to-pink-500"
              />
              <SolutionCard
                number="3"
                title="Sequential Memory"
                description="Each generation is grounded by the final frames of the previous shot. When the Villain moves to the warehouse, the lighting, characters, and spatial continuity carry forward seamlessly."
                icon={<Video className="w-8 h-8" />}
                color="from-pink-500 to-cyan-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Code Example */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-white">Simple, Powerful API</h2>
            <p className="text-center text-white/70 mb-12">
              Generate consistent multi-shot sequences with just a few lines of code
            </p>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-slate-900 rounded-xl p-6 overflow-x-auto border border-white/20">
                <pre className="text-sm text-white/90">
                  <code>{`from ministudio import Ministudio, Character, Environment

# Define Grandfather - persistent across all shots
GRANDFATHER = Character(
    name="Grandfather Elias",
    identity={
        "hair_style": "thick white messy hair and matching white beard",
        "eye_color": "bright wise blue eyes",
        "clothing": "moss-green wool cardigan over white shirt"
    },
    voice_id="en-US-Neural2-D",
    voice_profile={"style": "warm and academic", "pitch": -2.0}
)

# Define the consistent study environment
STUDY = Environment(
    location="Victorian study with oak paneling",
    identity={
        "architecture": "floor-to-ceiling bookshelves",
        "base_color": "warm browns, brass, velvet greens"
    }
)

# Generate teaching sequence - 60+ shots, perfect consistency
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
})`}</code>
                </pre>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/docs/quick-start">
                <Button className="group bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500">
                  Try the Full Tutorial
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gradient-to-b from-black to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Built for Developers</h2>
          <p className="text-center text-white/70 mb-16 max-w-2xl mx-auto">
            Pythonic API, model-agnostic design, and production-ready infrastructure
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Code2 className="w-8 h-8" />}
              title="Pythonic API"
              description="Clean, intuitive Python interface. Define characters once, use everywhere. No complex configuration."
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="Model Agnostic"
              description="Works with Vertex AI (Veo 3.1), OpenAI Sora, or custom providers. Switch models without changing code."
            />
            <FeatureCard
              icon={<Brain className="w-8 h-8" />}
              title="State Machine Driven"
              description="Stateful orchestration ensures consistency. The engine remembers context across generations."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black relative overflow-hidden border-y border-white/10">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>

        <div className="relative container mx-auto px-4 text-center z-20">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Build Consistent AI Videos?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join developers building the future of AI video production with MiniStudio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/docs">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white">
                Browse Documentation
              </Button>
            </Link>
            <Link href="https://github.com/aynaash/ministudio">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                View on GitHub
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-16 px-6 z-20 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-lg font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  MINISTUDIO
                </div>
              </div>
              <p className="text-sm text-white/50 leading-relaxed">
                Programmable, Stateful, and Model-Agnostic Orchestration for High-Fidelity Video Production
              </p>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Product</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/docs" className="text-white/50 hover:text-white transition">Documentation</Link></li>
                <li><Link href="/examples" className="text-white/50 hover:text-white transition">Examples</Link></li>
                <li><Link href="/changelog" className="text-white/50 hover:text-white transition">Changelog</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Community</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-white/50 hover:text-white transition">Discord</a></li>
                <li><a href="#" className="text-white/50 hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="text-white/50 hover:text-white transition">GitHub</a></li>
                <li><a href="#" className="text-white/50 hover:text-white transition">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Resources</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-white/50 hover:text-white transition">API Reference</a></li>
                <li><a href="#" className="text-white/50 hover:text-white transition">Tutorials</a></li>
                <li><a href="#" className="text-white/50 hover:text-white transition">Contributing</a></li>
                <li><a href="#" className="text-white/50 hover:text-white transition">License</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8" />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-2">
              <p className="text-sm text-white/40">© 2026 MiniStudio. All rights reserved.</p>
              <p className="text-xs text-white/30">Solving the consistency problem in AI video generation</p>
            </div>

            <div className="flex gap-6 text-sm text-white/50">
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Terms</a>
              <a href="#" className="hover:text-white transition">Security</a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}

// Component Definitions

function ProblemCard({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="group p-6 rounded-xl bg-gradient-to-br from-red-900/20 to-red-950/10 border border-red-500/20 hover:border-red-500/40 transition-all hover:scale-105">
      <div className="text-red-400 group-hover:text-red-300 mb-3 transition">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-red-100">{title}</h3>
      <p className="text-red-200/70 text-sm">{description}</p>
    </div>
  )
}

function SolutionCard({
  number,
  title,
  description,
  icon,
  color,
}: {
  number: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
}) {
  return (
    <div className="group flex gap-6 p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/30 transition-all hover:scale-105">
      <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${color} text-white flex items-center justify-center font-bold text-xl group-hover:scale-110 transition`}>
        {number}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <div className="text-cyan-400 group-hover:text-cyan-300 transition">{icon}</div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-white/70">{description}</p>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/30 transition-all hover:scale-105">
      <div className="text-cyan-400 group-hover:text-cyan-300 mb-4 transition">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  )
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="group">
      <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text mb-2 group-hover:scale-110 transition-transform">{number}</div>
      <div className="text-sm text-white/50">{label}</div>
    </div>
  )
}
'use client'

import { useState } from 'react'
import { Users, MessageCircle, Github, Twitter, BookOpen, Sparkles, Heart, Code2, Video, Zap } from 'lucide-react'
import Link from 'next/link'

export default function CommunityPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative py-24 px-6 overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                    <div className="absolute top-40 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
                </div>

                <div className="relative max-w-7xl mx-auto text-center z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-6">
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm font-medium">We're Building Together</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl font-black mb-6 tracking-tighter">
                        <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Join the MiniStudio Community
                        </span>
                    </h1>

                    <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
                        We're actively building a vibrant community of developers, creators, and AI enthusiasts pushing the boundaries of AI video generation.
                    </p>

                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 text-green-300 mb-8">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="font-semibold">Community actively growing</span>
                    </div>
                </div>
            </section>

            {/* Community Channels */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Connect With Us</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* GitHub */}
                        <a
                            href="https://github.com/aynaash/ministudio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative block"
                        >
                            <div className="absolute -inset-0.5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-gray-500 to-slate-500" />

                            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/30 transition-all h-full">
                                <div className="p-4 rounded-lg bg-gradient-to-r from-gray-500 to-slate-500 text-white w-fit mb-4">
                                    <Github className="w-8 h-8" />
                                </div>

                                <h3 className="text-2xl font-bold mb-2">GitHub</h3>
                                <p className="text-white/70 mb-4">
                                    Contribute code, report issues, and collaborate on features. Star the repo to stay updated!
                                </p>

                                <div className="flex items-center gap-2 text-sm text-white/50">
                                    <Code2 className="w-4 h-4" />
                                    <span>Open Source</span>
                                </div>
                            </div>
                        </a>

                        {/* Discord (Coming Soon) */}
                        <div className="group relative">
                            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 h-full">
                                <div className="p-4 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white w-fit mb-4 opacity-50">
                                    <MessageCircle className="w-8 h-8" />
                                </div>

                                <h3 className="text-2xl font-bold mb-2">Discord</h3>
                                <p className="text-white/70 mb-4">
                                    Real-time chat, support, and collaboration. Share your creations and get help from the community.
                                </p>

                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-300 text-sm">
                                    <Zap className="w-3 h-3" />
                                    <span>Coming Soon</span>
                                </div>
                            </div>
                        </div>

                        {/* Twitter (Coming Soon) */}
                        <div className="group relative">
                            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 h-full">
                                <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white w-fit mb-4 opacity-50">
                                    <Twitter className="w-8 h-8" />
                                </div>

                                <h3 className="text-2xl font-bold mb-2">Twitter</h3>
                                <p className="text-white/70 mb-4">
                                    Follow for updates, announcements, and showcases of amazing videos created with MiniStudio.
                                </p>

                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-300 text-sm">
                                    <Zap className="w-3 h-3" />
                                    <span>Coming Soon</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Contribute */}
            <section className="py-16 px-6 bg-white/[0.02] border-y border-white/10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">How to Contribute</h2>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white">
                                    <Code2 className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold">Code Contributions</h3>
                            </div>
                            <p className="text-white/70 mb-4">
                                Submit pull requests for bug fixes, new features, or improvements. Check our GitHub issues for good first issues.
                            </p>
                            <a
                                href="https://github.com/aynaash/ministudio/issues"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold inline-flex items-center gap-1"
                            >
                                View Issues →
                            </a>
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                                    <BookOpen className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold">Documentation</h3>
                            </div>
                            <p className="text-white/70 mb-4">
                                Help improve our docs, write tutorials, or create example projects. Great documentation helps everyone.
                            </p>
                            <Link
                                href="/docs"
                                className="text-purple-400 hover:text-purple-300 text-sm font-semibold inline-flex items-center gap-1"
                            >
                                View Docs →
                            </Link>
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 text-white">
                                    <Video className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold">Share Your Work</h3>
                            </div>
                            <p className="text-white/70 mb-4">
                                Created something cool with MiniStudio? Share it with the community! We love seeing what you build.
                            </p>
                            <Link
                                href="/examples"
                                className="text-pink-400 hover:text-pink-300 text-sm font-semibold inline-flex items-center gap-1"
                            >
                                View Examples →
                            </Link>
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                                    <Heart className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold">Spread the Word</h3>
                            </div>
                            <p className="text-white/70 mb-4">
                                Star us on GitHub, share on social media, or tell your friends. Help us grow the community!
                            </p>
                            <a
                                href="https://github.com/aynaash/ministudio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-400 hover:text-green-300 text-sm font-semibold inline-flex items-center gap-1"
                            >
                                Star on GitHub →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Community Stats */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Growing Together</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">12+</div>
                            <div className="text-sm text-white/50">Example Projects</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">3+</div>
                            <div className="text-sm text-white/50">AI Providers</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-2">100%</div>
                            <div className="text-sm text-white/50">Open Source</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">∞</div>
                            <div className="text-sm text-white/50">Possibilities</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 bg-white/[0.02] border-t border-white/10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Get Involved?</h2>
                    <p className="text-xl text-white/70 mb-8">
                        Whether you're a developer, creator, or enthusiast, there's a place for you in our community.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://github.com/aynaash/ministudio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-bold text-lg transition inline-flex items-center justify-center gap-2"
                        >
                            <Github className="w-5 h-5" />
                            View on GitHub
                        </a>
                        <Link
                            href="/docs/installation"
                            className="px-8 py-4 rounded-lg border-2 border-white/30 text-white font-bold text-lg hover:bg-white/10 transition inline-flex items-center gap-2"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

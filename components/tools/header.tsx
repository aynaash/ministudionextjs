"use client"

export function Header() {
  return (
    <header className="border-b border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-sm text-primary font-medium mb-4">
            Python Video Tools
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-balance">
            MiniStudio Video Tools
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive reference guide to Python libraries for video processing. Explore tools, implementation phases, and developer recommendations.
          </p>
          <p className="text-sm text-muted-foreground italic">
            This is a living document. Please update with your findings, critiques, and recommendations.
          </p>
        </div>
      </div>
    </header>
  )
}

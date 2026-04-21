import { useEffect, useState } from 'react'

const roles = ['Software Developer', 'Backend Engineer', 'AI / ML Enthusiast', 'Competitive Programmer']

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    const current = roles[roleIdx]
    let timeout

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx(i => i + 1), 70)
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(i => i - 1), 40)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setRoleIdx(i => (i + 1) % roles.length)
    }

    setDisplayed(current.slice(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, roleIdx])

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Subtle background grain */}
      <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundSize: '256px' }}
      />

      {/* Decorative corner lines */}
      <div className="absolute top-24 left-8 w-16 h-16 border-t border-l border-accent/30 hidden md:block" />
      <div className="absolute bottom-16 right-8 w-16 h-16 border-b border-r border-accent/30 hidden md:block" />

      <div className="max-w-3xl w-full text-center animate-fade-in">
        {/* Pre-heading label */}
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-6">
          ✦ Welcome to my portfolio ✦
        </p>

        {/* Name */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-ink-900 dark:text-cream-100 leading-tight mb-4">
          Yash Sachdeva
        </h1>

        {/* Typewriter role */}
        <div className="h-10 flex items-center justify-center mb-6">
          <span className="font-mono text-lg sm:text-xl text-ink-500 dark:text-cream-300">
            {displayed}
            <span className="inline-block w-0.5 h-5 bg-accent align-middle ml-0.5 animate-blink" />
          </span>
        </div>

        {/* Tagline */}
        <p className="text-ink-500 dark:text-ink-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10 font-light">
          Building high-performance backend systems and intelligent applications.
          Based in <span className="text-accent font-medium">Dehradun, Uttarakhand</span> — open to new opportunities.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-7 py-3 bg-accent text-cream-50 font-mono text-xs tracking-widest uppercase rounded-sm hover:bg-accent-dark transition-colors duration-200 shadow-sm"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-7 py-3 border border-ink-800/20 dark:border-cream-200/20 text-ink-700 dark:text-cream-200 font-mono text-xs tracking-widest uppercase rounded-sm hover:border-accent/50 hover:text-accent dark:hover:text-accent-light transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-ink-400 dark:text-ink-500 animate-bounce">
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}


export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-ink-800/8 dark:border-cream-200/8 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-ink-400 dark:text-ink-500 tracking-wider">
          <span className="text-accent">{'< '}</span>YS<span className="text-accent">{' />'}</span>
        </p>
        <p className="font-mono text-xs text-ink-400 dark:text-ink-500 tracking-wider text-center">
          © {year} Yash Sachdeva · Crafted with care
        </p>
        <div className="flex items-center gap-1 font-mono text-[10px] text-ink-400 dark:text-ink-500 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block mr-1" />
          Available for work
        </div>
      </div>
    </footer>
  )
}


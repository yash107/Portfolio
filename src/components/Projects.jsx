import useInView from '../hooks/useInView'

const projects = [
  {
    number: '01',
    title: 'Holiday Management System',
    description: 'End-to-end enterprise system built at Wissen Technology for 100+ employees. Features role-based access (HR, Employee, Admin), session-based authentication, protected routing, and real-time leave tracking — reducing HR workload by 40%.',
    tech: ['Spring Boot', 'React.js', 'PostgreSQL', 'REST API', 'Microservices'],
    github: '#',
    live: null,
    featured: true,
  },
  {
    number: '02',
    title: 'File Integrity Monitoring System',
    description: 'GUI-integrated Python tool for file and directory integrity monitoring using hash-based verification. Secures 1,000+ files, supports 5+ file formats (.doc, .txt, .rtf, .ppt, .xlsx) with 99.9% tamper detection accuracy and 80% expanded detection coverage.',
    tech: ['Python', 'Tkinter', 'Hashlib', 'Cybersecurity'],
    github: '#',
    live: null,
    featured: false,
  },
  {
    number: '03',
    title: 'Image Compressor GUI App',
    description: 'Python desktop application enabling single and batch image compression with customizable quality settings (High, Medium, Low). Features intuitive UI, flexible output management, and real-time progress updates via a status bar.',
    tech: ['Python', 'PyQt5', 'PIL / Pillow'],
    github: '#',
    live: null,
    featured: false,
  },
]

function ExternalIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  )
}

export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-2">04 — Projects</p>
          <h2 className="section-heading text-ink-900 dark:text-cream-100">Selected Work</h2>
          <div className="retro-line" />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <div
              key={p.number}
              className={`project-card group relative transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100 + 100}ms` }}
            >
              {p.featured && (
                <span className="absolute top-4 right-4 font-mono text-[9px] tracking-widest uppercase text-accent border border-accent/30 px-2 py-0.5 rounded-sm">
                  Featured
                </span>
              )}

              <div className="flex items-start gap-3 mb-3">
                <span className="font-mono text-xs text-accent/50 mt-1 shrink-0">{p.number}</span>
                <h3 className="font-serif text-xl font-semibold text-ink-900 dark:text-cream-100 group-hover:text-accent dark:group-hover:text-accent-light transition-colors">
                  {p.title}
                </h3>
              </div>

              <p className="text-sm text-ink-500 dark:text-cream-300/70 leading-relaxed mb-5 ml-6">
                {p.description}
              </p>

              <div className="ml-6 flex flex-wrap gap-1.5 mb-5">
                {p.tech.map(t => (
                  <span key={t} className="font-mono text-[10px] tracking-wider bg-cream-200/60 dark:bg-ink-700/50 text-ink-600 dark:text-cream-300/80 px-2 py-0.5 rounded-sm">
                    {t}
                  </span>
                ))}
              </div>

              <div className="ml-6 flex items-center gap-4">
                <a href={p.github} className="flex items-center gap-1.5 font-mono text-xs text-ink-400 dark:text-ink-500 hover:text-accent dark:hover:text-accent-light transition-colors">
                  <GithubIcon /> Code
                </a>
                {p.live && (
                  <a href={p.live} className="flex items-center gap-1.5 font-mono text-xs text-ink-400 dark:text-ink-500 hover:text-accent dark:hover:text-accent-light transition-colors">
                    <ExternalIcon /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-10 text-center transition-all duration-700 delay-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-ink-400 dark:text-ink-500 hover:text-accent dark:hover:text-accent-light transition-colors">
            <GithubIcon /> View more on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}


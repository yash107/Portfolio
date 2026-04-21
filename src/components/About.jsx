import useInView from '../hooks/useInView'

const stats = [
  { value: '8.98', label: 'CGPA' },
  { value: '1874', label: 'LeetCode Rating' },
  { value: '2M+', label: 'Trades / Day' },
]

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-2">01 — About</p>
          <h2 className="section-heading text-ink-900 dark:text-cream-100">The Person Behind the Code</h2>
          <div className="retro-line" />
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Photo column */}
          <div className={`md:col-span-2 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="relative inline-block w-full">
              {/* Photo placeholder */}
              <div className="aspect-[4/5] bg-cream-200 dark:bg-ink-800 rounded-sm overflow-hidden border border-ink-800/10 dark:border-cream-200/10 flex items-center justify-center">
                <div className="text-center text-ink-400 dark:text-ink-500">
                  <svg className="w-16 h-16 mx-auto mb-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                  <p className="font-mono text-xs tracking-widest opacity-50">YOUR PHOTO</p>
                </div>
              </div>
              {/* Offset decorative border */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-accent/25 rounded-sm -z-10" />
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-2">
              {stats.map(s => (
                <div key={s.label} className="text-center p-3 border border-ink-800/8 dark:border-cream-200/8 rounded-sm">
                  <p className="font-serif text-2xl font-bold text-accent">{s.value}</p>
                  <p className="font-mono text-[10px] tracking-wider uppercase text-ink-400 dark:text-ink-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bio column */}
          <div className={`md:col-span-3 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <p className="text-ink-600 dark:text-cream-300 leading-relaxed text-base mb-5">
              Hello! I'm <span className="font-semibold text-ink-900 dark:text-cream-100">Yash Sachdeva</span>, a Computer Science graduate from Graphic Era University with a CGPA of 8.98. I'm passionate about building backend systems that scale and intelligent applications that matter.
            </p>
            <p className="text-ink-600 dark:text-cream-300 leading-relaxed text-base mb-5">
              Currently working as a Trainee Analyst at Wissen Technology, collaborating with Morgan Stanley's Trades & Reporting team to architect microservices that process 2M+ trades per day using Java, Spring Boot, and PostgreSQL.
            </p>
            <p className="text-ink-600 dark:text-cream-300 leading-relaxed text-base mb-8">
              Beyond backend engineering, I have a deep interest in AI/ML — selected for the Amazon Machine Learning Summer School 2024 out of 60K+ applicants. When I'm not coding, I'm sharpening problem-solving on LeetCode (Knight, 1874 rating) or contributing to open source.
            </p>

            {/* Quick facts */}
            <div className="space-y-2 mb-8">
              {[
                ['Location', 'Dehradun, Uttarakhand'],
                ['Education', 'B.Tech CSE — Graphic Era University'],
                ['Availability', 'Open to opportunities'],
                ['Languages', 'English, Hindi'],
              ].map(([k, v]) => (
                <div key={k} className="flex items-start gap-3">
                  <span className="font-mono text-xs text-accent mt-0.5">▸</span>
                  <span className="font-mono text-xs text-ink-400 dark:text-ink-500 uppercase tracking-wider w-24 shrink-0">{k}</span>
                  <span className="text-sm text-ink-700 dark:text-cream-200">{v}</span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase px-5 py-2.5 border border-accent/50 text-accent hover:bg-accent hover:text-cream-50 rounded-sm transition-all duration-200"
            >
              Download CV
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-4-4-4 4m0 0-4-4m4 4V4" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


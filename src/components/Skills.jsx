import useInView from '../hooks/useInView'

const categories = [
  {
    title: 'Languages',
    icon: '◈',
    skills: ['Python', 'Java', 'C / C++', 'JavaScript', 'HTML / CSS', 'SQL'],
  },
  {
    title: 'Backend & Databases',
    icon: '◆',
    skills: ['Spring Boot', 'REST APIs', 'Microservices', 'PostgreSQL', 'MySQL', 'DB2'],
  },
  {
    title: 'AI / ML & Tools',
    icon: '◇',
    skills: ['Scikit-learn', 'LangChain', 'OpenCV', 'NLP / LLM', 'Streamlit', 'Git & GitHub'],
  },
]

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="py-24 px-6 bg-cream-200/40 dark:bg-ink-800/30">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-2">03 — Skills</p>
          <h2 className="section-heading text-ink-900 dark:text-cream-100">Toolkit & Expertise</h2>
          <div className="retro-line" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, ci) => (
            <div
              key={cat.title}
              className={`project-card transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${ci * 120 + 100}ms` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-accent text-lg leading-none">{cat.icon}</span>
                <h3 className="font-serif text-lg font-semibold text-ink-900 dark:text-cream-100">{cat.title}</h3>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className="retro-tag hover:border-accent hover:text-accent dark:hover:text-accent-light transition-colors duration-150 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Extra: proficiency dots row */}
        <div
          className={`mt-12 p-6 border border-ink-800/8 dark:border-cream-200/8 rounded-sm bg-white/40 dark:bg-ink-800/20 transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-ink-400 dark:text-ink-500 mb-5">Also familiar with</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {['React.js', 'Eureka Server', 'API Gateway', 'Tkinter', 'PyQt5', 'PIL / Pillow', 'ChatGPT API', 'Linux', 'VS Code', 'Windows'].map(t => (
              <span key={t} className="font-mono text-xs text-ink-500 dark:text-cream-300/70 flex items-center gap-1.5">
                <span className="text-accent/60">·</span> {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


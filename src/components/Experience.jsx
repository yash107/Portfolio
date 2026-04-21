import useInView from '../hooks/useInView'

const experiences = [
  {
    company: 'Wissen Technology',
    companyNote: 'Client: Morgan Stanley',
    roles: [
      {
        title: 'Trainee Analyst',
        period: 'July 2025 – Present',
        tech: ['Java', 'Spring Boot', 'PostgreSQL', 'DB2'],
        bullets: [
          'Collaborating with the Trades & Reporting team at Morgan Stanley to design and scale high-performance trade reporting systems for multi-asset financial clients.',
          'Architected and optimized backend microservices and data processing pipelines, increasing system throughput from 700K to 2M+ trades per day.',
          'Achieved a measurable 25% latency reduction by adopting scalable architectures, improving stability under high-load scenarios.',
          'Supporting the full SDLC — backend development, testing, deployment, and CI/CD pipelines — while ensuring financial regulatory compliance.',
        ],
      },
      {
        title: 'Trainee Analyst Intern',
        period: 'January 2025 – June 2025',
        tech: ['Spring Boot', 'React.js', 'PostgreSQL', 'REST API'],
        bullets: [
          'Built an end-to-end Holiday Management System with role-based access (HR, Employee, Admin), secure session-based auth, and protected routing — enabling 100+ employees to access client-specific holidays.',
          'Reduced HR manual workload by 40% through automation and real-time leave tracking.',
          'Implemented Microservices Architecture using Eureka Server and API Gateway for scalable service discovery and inter-service communication.',
        ],
      },
    ],
  },
]

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-2">02 — Experience</p>
          <h2 className="section-heading text-ink-900 dark:text-cream-100">Work Experience</h2>
          <div className="retro-line" />
        </div>

        <div className="space-y-10">
          {experiences.map((exp, ei) => (
            <div
              key={exp.company}
              className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${ei * 100 + 100}ms` }}
            >
              {/* Company header */}
              <div className="flex flex-wrap items-baseline gap-3 mb-6">
                <h3 className="font-serif text-2xl font-semibold text-ink-900 dark:text-cream-100">{exp.company}</h3>
                <span className="font-mono text-xs tracking-wider text-accent border border-accent/30 px-2 py-0.5 rounded-sm">{exp.companyNote}</span>
              </div>

              {/* Roles */}
              <div className="space-y-8 pl-0 md:pl-4 border-l border-accent/20">
                {exp.roles.map((role, ri) => (
                  <div key={role.title} className={`pl-6 relative transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${(ei * 2 + ri) * 120 + 200}ms` }}>
                    {/* Timeline dot */}
                    <span className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-cream-100 dark:bg-ink-900 border-2 border-accent" />

                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <h4 className="font-serif text-lg font-semibold text-ink-800 dark:text-cream-200">{role.title}</h4>
                      <span className="font-mono text-xs text-ink-400 dark:text-ink-500 whitespace-nowrap">{role.period}</span>
                    </div>

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {role.tech.map(t => (
                        <span key={t} className="font-mono text-[10px] tracking-wider bg-cream-200/60 dark:bg-ink-700/50 text-ink-600 dark:text-cream-300/80 px-2 py-0.5 rounded-sm">{t}</span>
                      ))}
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2">
                      {role.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-2.5 text-sm text-ink-500 dark:text-cream-300/70 leading-relaxed">
                          <span className="text-accent mt-1 shrink-0 text-xs">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


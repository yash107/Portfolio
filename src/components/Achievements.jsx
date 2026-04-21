import useInView from '../hooks/useInView'

const achievements = [
  {
    icon: '◈',
    title: 'Amazon ML Summer School 2024',
    desc: 'Selected out of 60,000+ applicants for Amazon\'s prestigious Machine Learning Summer School program.',
    tag: 'AI / ML',
  },
  {
    icon: '◈',
    title: 'PwC Cybersecurity Launchpad',
    desc: 'Chosen from 10,000+ applicants for the PwC Cybersecurity, Risk and Regulatory Launchpad programme.',
    tag: 'Cybersecurity',
  },
  {
    icon: '◇',
    title: 'LeetCode Knight',
    desc: 'Attained the title of Knight with a peak rating of 1874 on LeetCode through consistent competitive programming.',
    tag: 'Competitive Programming',
  },
  {
    icon: '◇',
    title: 'NIT-K E-Summit\'22 — UI/UX',
    desc: 'Secured 3rd place in the UI/UX Design Competition out of 200+ teams at NIT Karnataka\'s E-Summit 2022.',
    tag: 'Design',
  },
  {
    icon: '◆',
    title: 'Google Kickstart',
    desc: 'Participated in 4+ rounds of Google Kickstart with a best global rank of 2583 in Round H 2022.',
    tag: 'Competitive Programming',
  },
  {
    icon: '◆',
    title: 'Hacktoberfest 2022',
    desc: 'Successfully participated in one of the world\'s largest open source contribution events — Hacktoberfest 2022.',
    tag: 'Open Source',
  },
]

const tagColor = {
  'AI / ML': 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-700/40',
  'Cybersecurity': 'bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-700/40',
  'Competitive Programming': 'bg-sky-50 dark:bg-sky-900/20 text-sky-700 dark:text-sky-400 border-sky-200 dark:border-sky-700/40',
  'Design': 'bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-400 border-violet-200 dark:border-violet-700/40',
  'Open Source': 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-700/40',
}

export default function Achievements() {
  const [ref, inView] = useInView()

  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-2">05 — Achievements</p>
          <h2 className="section-heading text-ink-900 dark:text-cream-100">Recognition & Highlights</h2>
          <div className="retro-line" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((a, i) => (
            <div
              key={a.title}
              className={`project-card group transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 90 + 100}ms` }}
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <span className="font-mono text-accent text-base leading-none mt-0.5">{a.icon}</span>
                <span className={`font-mono text-[9px] tracking-widest uppercase border px-2 py-0.5 rounded-sm ${tagColor[a.tag]}`}>
                  {a.tag}
                </span>
              </div>
              <h3 className="font-serif text-base font-semibold text-ink-900 dark:text-cream-100 mb-2 group-hover:text-accent dark:group-hover:text-accent-light transition-colors leading-snug">
                {a.title}
              </h3>
              <p className="text-sm text-ink-500 dark:text-cream-300/70 leading-relaxed">
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


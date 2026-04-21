import { useState } from 'react'
import useInView from '../hooks/useInView'

const socials = [
  {
    name: 'GitHub',
    href: 'https://github.com/yashsachdeva12703',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/yash-sachdeva',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Twitter / X',
    href: 'https://x.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    // Replace with your form handling (e.g. EmailJS / Formspree)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  const inputCls = 'w-full bg-white/50 dark:bg-ink-800/50 border border-ink-800/12 dark:border-cream-200/12 rounded-sm px-4 py-3 text-sm text-ink-800 dark:text-cream-200 placeholder:text-ink-400 dark:placeholder:text-ink-500 focus:outline-none focus:border-accent/50 transition-colors font-sans'

  return (
    <section id="contact" className="py-24 px-6 bg-cream-200/40 dark:bg-ink-800/30">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-2">06 — Contact</p>
          <h2 className="section-heading text-ink-900 dark:text-cream-100">Let's Work Together</h2>
          <div className="retro-line" />
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Left: copy + socials */}
          <div className={`md:col-span-2 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <p className="text-ink-500 dark:text-cream-300/80 leading-relaxed mb-6 text-sm">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="space-y-3 mb-8">
              <a href="mailto:yashsachdeva12703@gmail.com" className="flex items-center gap-3 font-mono text-xs text-ink-500 dark:text-ink-400 hover:text-accent dark:hover:text-accent-light transition-colors group">
                <span className="text-accent">✉</span> yashsachdeva12703@gmail.com
              </a>
              <span className="flex items-center gap-3 font-mono text-xs text-ink-500 dark:text-ink-400">
                <span className="text-accent">◉</span> Dehradun, Uttarakhand
              </span>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-widest uppercase text-ink-400 dark:text-ink-500 mb-3">Find me on</p>
              <div className="flex items-center gap-3">
                {socials.map(s => (
                  <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}
                    className="w-9 h-9 flex items-center justify-center border border-ink-800/12 dark:border-cream-200/12 rounded-sm text-ink-500 dark:text-ink-400 hover:border-accent/40 hover:text-accent dark:hover:text-accent-light transition-all duration-200">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className={`md:col-span-3 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full min-h-48 text-center gap-3">
                <span className="text-3xl">✦</span>
                <p className="font-serif text-xl text-ink-900 dark:text-cream-100">Message sent!</p>
                <p className="font-mono text-xs text-ink-400 dark:text-ink-500">I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[10px] tracking-widest uppercase text-ink-400 dark:text-ink-500 mb-1.5">Name</label>
                    <input name="name" value={form.name} onChange={handle} required placeholder="John Doe" className={inputCls} />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] tracking-widest uppercase text-ink-400 dark:text-ink-500 mb-1.5">Email</label>
                    <input type="email" name="email" value={form.email} onChange={handle} required placeholder="john@example.com" className={inputCls} />
                  </div>
                </div>
                <div>
                  <label className="block font-mono text-[10px] tracking-widest uppercase text-ink-400 dark:text-ink-500 mb-1.5">Message</label>
                  <textarea name="message" value={form.message} onChange={handle} required rows={5} placeholder="Tell me about your project..." className={`${inputCls} resize-none`} />
                </div>
                <button type="submit" className="w-full py-3 bg-accent text-cream-50 font-mono text-xs tracking-widest uppercase rounded-sm hover:bg-accent-dark transition-colors duration-200">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}


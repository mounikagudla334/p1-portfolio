import { profile } from '../../data/portfolio'

export function Hero() {
  return (
    <section id="top" className="max-w-content mx-auto px-6 md:px-10 pt-20 pb-24 md:pt-28 md:pb-32">
      <p className="font-mono text-sm text-teal-dark mb-6">{profile.role}</p>
      <h1 className="font-display text-4xl md:text-6xl leading-[1.1] max-w-3xl">
        {profile.tagline}
      </h1>
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#work"
          className="inline-flex items-center px-5 py-3 bg-ink text-paper font-body text-sm rounded-sm hover:bg-teal-dark transition-colors"
        >
          See the work
        </a>
        <a
          href="#contact"
          className="inline-flex items-center px-5 py-3 border border-ink/20 font-body text-sm rounded-sm hover:border-teal hover:text-teal-dark transition-colors"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}

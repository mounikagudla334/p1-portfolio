import { profile } from '../../data/portfolio'

export function Contact() {
  return (
    <section id="contact" className="border-t border-line bg-ink text-paper">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
        <p className="font-mono text-sm text-paper/50 mb-4">Contact</p>
        <h2 className="font-display text-3xl md:text-5xl leading-tight max-w-2xl">
          Have a data or analytics problem worth solving? Let's talk.
        </h2>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex items-center px-5 py-3 bg-teal text-paper font-body text-sm rounded-sm hover:bg-teal-dark transition-colors"
        >
          {profile.email}
        </a>
      </div>
    </section>
  )
}

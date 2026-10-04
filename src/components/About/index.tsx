import { profile } from '../../data/portfolio'

export function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20 grid md:grid-cols-[1fr_2fr] gap-8">
        <p className="font-mono text-sm text-ink/50">About</p>
        <div className="max-w-2xl">
          <p className="font-display text-2xl md:text-3xl leading-snug text-ink/90">
            {profile.bio}
          </p>
          <p className="mt-6 font-body text-sm text-ink/60">{profile.location}</p>
        </div>
      </div>
    </section>
  )
}

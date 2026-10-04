import { skills } from '../../data/portfolio'

export function Skills() {
  return (
    <section className="border-t border-line">
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20 grid md:grid-cols-[1fr_2fr] gap-8">
        <p className="font-mono text-sm text-ink/50">Skills</p>
        <div className="grid sm:grid-cols-3 gap-8">
          {skills.map((group) => (
            <div key={group.category}>
              <h4 className="font-display text-lg mb-3">{group.category}</h4>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-ink/70">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { profile } from '../../data/portfolio'

export function Footer() {
  return (
    <footer className="bg-ink text-paper/50">
      <div className="max-w-content mx-auto px-6 md:px-10 py-6 flex justify-between text-xs font-mono">
        <span>{profile.name}</span>
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}

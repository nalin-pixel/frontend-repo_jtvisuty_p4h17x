import { Github, Globe } from 'lucide-react'

const projects = [
  {
    title: 'Interactive Dashboard',
    description:
      'A high-performance analytics dashboard with real-time charts and micro-interactions.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    links: { live: '#', github: '#' },
  },
  {
    title: 'Design System Kit',
    description:
      'A scalable component library with tokens, theming, and accessibility baked in.',
    tags: ['Storybook', 'Radix UI', 'CVA'],
    links: { live: '#', github: '#' },
  },
  {
    title: '3D Product Teaser',
    description:
      'Playful 3D hero built with Spline + React for a cutting-edge launch page.',
    tags: ['Spline', 'React', 'Animations'],
    links: { live: '#', github: '#' },
  },
]

export default function Projects() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <article
          key={p.title}
          className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/60 p-5 backdrop-blur transition hover:shadow-xl dark:border-white/10 dark:bg-white/10"
        >
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-transparent via-white/10 to-white/30 opacity-0 transition group-hover:opacity-100" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{p.title}</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{p.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="rounded-full border border-white/20 bg-white/60 px-2.5 py-1 text-xs text-gray-700 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-gray-200">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-5 flex items-center gap-3">
            <a href={p.links.live} className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              <Globe size={14} /> Live
            </a>
            <a href={p.links.github} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/50 px-3 py-1.5 text-xs font-semibold text-gray-800 hover:bg-white/70 dark:border-white/10 dark:bg-white/10 dark:text-gray-200">
              <Github size={14} /> Code
            </a>
          </div>
        </article>
      ))}
    </div>
  )
}

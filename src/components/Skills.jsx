const skills = [
  { name: 'React', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Tailwind', level: 92 },
  { name: 'Framer Motion', level: 88 },
  { name: 'Accessibility', level: 85 },
  { name: 'Design Systems', level: 87 },
]

export default function Skills() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {skills.map((s) => (
        <div key={s.name} className="rounded-2xl border border-white/20 bg-white/60 p-5 backdrop-blur dark:border-white/10 dark:bg-white/10">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">{s.name}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">{s.level}%</span>
          </div>
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/50 dark:bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              style={{ width: `${s.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

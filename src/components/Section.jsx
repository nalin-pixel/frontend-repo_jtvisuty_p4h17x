export default function Section({ id, eyebrow, title, children, gradient='from-indigo-500 via-purple-500 to-pink-500' }) {
  return (
    <section id={id} className="relative isolate py-20 sm:py-28">
      <div className="absolute inset-0 -z-0">
        <div className={`pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_-10%,rgba(99,102,241,0.12),transparent_60%)]`} />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/50 px-3 py-1 text-xs font-semibold text-gray-700 backdrop-blur dark:bg-black/40 dark:text-gray-300">
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              {title}
            </h2>
          )}
        </div>
        <div className="mt-10">
          {children}
        </div>
      </div>
      <div className={`pointer-events-none absolute inset-x-0 bottom-0 -z-0 h-px bg-gradient-to-r ${gradient} opacity-40`} />
    </section>
  )
}

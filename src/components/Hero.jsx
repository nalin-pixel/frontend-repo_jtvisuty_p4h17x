import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-28">
      <div className="absolute inset-0 -z-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(99,102,241,0.15),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/40 to-white" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div className="relative z-10 py-10 sm:py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/50 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur dark:bg-black/40 dark:text-gray-200">
            Available for freelance — Let’s build something delightful
          </div>
          <h1 className="mt-6 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            I craft elegant, performant interfaces
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-300">
            Frontend engineer focused on React, TypeScript, motion, and world-class UX. I turn complex problems into smooth, playful experiences.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">View work</a>
            <a href="#contact" className="rounded-full border border-gray-300 bg-white/60 px-5 py-2.5 text-sm font-semibold text-gray-900 backdrop-blur hover:bg-white/80 dark:border-white/20 dark:bg-white/10 dark:text-white">Contact</a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <span>React</span>
            <span>TypeScript</span>
            <span>Tailwind</span>
            <span>Framer Motion</span>
          </div>
        </div>

        <div className="relative z-0 aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/20 shadow-inner sm:aspect-[16/12] md:aspect-[16/10] lg:aspect-[4/3]">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#work', label: 'Work' },
    { href: '#skills', label: 'Skills' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/20 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 shadow-sm dark:border-white/10 dark:bg-black/40">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#home" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
              <span className="text-sm font-semibold tracking-wide text-gray-800 dark:text-gray-100">
                Frontend Developer
              </span>
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm font-medium text-gray-700 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                className="rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                Let’s talk
              </a>
            </nav>

            <button
              onClick={() => setOpen((o) => !o)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 bg-white/50 text-gray-800 backdrop-blur transition hover:bg-white md:hidden dark:bg-black/40 dark:text-white"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="border-t border-white/30 px-4 py-3 sm:px-6 md:hidden dark:border-white/10">
              <div className="flex flex-col gap-2">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-gray-800 hover:bg-white/60 dark:text-gray-100 dark:hover:bg-white/10"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="rounded-lg bg-gray-900 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                >
                  Let’s talk
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

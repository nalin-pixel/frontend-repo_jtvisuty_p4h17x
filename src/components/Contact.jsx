import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Thanks! I will get back to you soon.')
    e.currentTarget.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input required name="name" placeholder="Your name" className="rounded-xl border border-white/20 bg-white/60 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none backdrop-blur focus:ring-2 focus:ring-indigo-400 dark:border-white/10 dark:bg-white/10 dark:text-white" />
        <input required type="email" name="email" placeholder="Email address" className="rounded-xl border border-white/20 bg-white/60 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none backdrop-blur focus:ring-2 focus:ring-indigo-400 dark:border-white/10 dark:bg-white/10 dark:text-white" />
      </div>
      <textarea required name="message" placeholder="Tell me about your project" rows="5" className="w-full rounded-xl border border-white/20 bg-white/60 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none backdrop-blur focus:ring-2 focus:ring-indigo-400 dark:border-white/10 dark:bg-white/10 dark:text-white" />
      <div className="flex items-center justify-between">
        <button type="submit" className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">Send</button>
        <p className="text-sm text-gray-600 dark:text-gray-300">{status}</p>
      </div>
    </form>
  )
}

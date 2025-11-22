import { useState } from 'react'

function Connect() {
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending...')

    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!res.ok) throw new Error(await res.text())
      const data = await res.json()
      setStatus(`Thanks! Message received. id=${data.id}`)
      e.currentTarget.reset()
    } catch (err) {
      setStatus(`Error: ${err.message?.slice(0,120)}`)
    }
  }

  return (
    <section id="connect" className="relative bg-slate-950 text-white py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_circle_at_50%_120%,rgba(56,189,248,0.10),transparent_60%)]" />
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold">Connect</h2>
          <p className="text-sky-200/80 mt-2">Say hi — collaborations, questions, or just to chat.</p>
        </div>

        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" placeholder="Your name" required minLength={2} maxLength={100} className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-sky-400/40" />
            <input name="email" type="email" placeholder="Email" required className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-sky-400/40" />
          </div>
          <input name="company" placeholder="Company (optional)" maxLength={120} className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-sky-400/40" />
          <textarea name="message" placeholder="Your message" required minLength={5} maxLength={5000} rows={6} className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-sky-400/40" />

          <button className="mt-2 inline-flex items-center justify-center rounded-xl bg-sky-500/20 text-sky-100 border border-sky-400/30 hover:bg-sky-500/30 px-5 py-3 transition">Send</button>
          {status && (
            <p className="text-sky-200/90 text-sm">{status}</p>
          )}
        </form>

        <div className="mt-8 flex gap-4 text-sky-200/80">
          <a href="#" className="hover:text-sky-300">GitHub</a>
          <a href="#" className="hover:text-sky-300">LinkedIn</a>
          <a href="mailto:hello@example.com" className="hover:text-sky-300">Email</a>
        </div>
      </div>
    </section>
  )
}

export default Connect

import { useEffect } from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Work from './components/Work'
import Connect from './components/Connect'
import { AnimatePresence, motion } from 'framer-motion'

function App() {
  // smooth scroll behavior for in-page links
  useEffect(() => {
    if ('scrollBehavior' in document.documentElement.style) return
    // Fallback: JS smooth scroll
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href')?.slice(1)
      const el = id ? document.getElementById(id) : null
      if (el) {
        e.preventDefault()
        window.scrollTo({ top: el.offsetTop - 56, behavior: 'smooth' })
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/50 border-b border-white/10">
        <nav className="container mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="text-sky-200 font-medium">AKILAN Y</a>
          <div className="flex items-center gap-6 text-sky-200/80 text-sm">
            <a href="#projects" className="hover:text-sky-300">Projects</a>
            <a href="#work" className="hover:text-sky-300">Work</a>
            <a href="#connect" className="hover:text-sky-300">Connect</a>
          </div>
        </nav>
      </header>

      <main className="pt-14">
        <AnimatePresence mode="wait">
          <motion.div
            key="page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Hero />
            <Projects />
            <Work />
            <Connect />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="container mx-auto px-6 py-8 text-sky-200/60 text-sm">
          © {new Date().getFullYear()} AKILAN Y — All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App

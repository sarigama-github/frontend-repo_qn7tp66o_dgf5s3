import Hero from './components/Hero'
import Projects from './components/Projects'
import Work from './components/Work'
import Connect from './components/Connect'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/50 border-b border-white/10">
        <nav className="container mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="text-sky-200 font-medium">flames.blue</a>
          <div className="flex items-center gap-6 text-sky-200/80 text-sm">
            <a href="#projects" className="hover:text-sky-300">Projects</a>
            <a href="#work" className="hover:text-sky-300">Work</a>
            <a href="#connect" className="hover:text-sky-300">Connect</a>
          </div>
        </nav>
      </header>

      <main className="pt-14">
        <Hero />
        <Projects />
        <Work />
        <Connect />
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="container mx-auto px-6 py-8 text-sky-200/60 text-sm">
          © {new Date().getFullYear()} Flames Blue — All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App

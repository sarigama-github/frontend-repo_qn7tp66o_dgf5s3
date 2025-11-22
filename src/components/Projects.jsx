function Projects() {
  const items = [
    {
      title: 'Neon Commerce',
      blurb: 'Modern storefront with headless CMS and blazing-fast UX.',
      link: '#'
    },
    {
      title: 'Realtime Dashboard',
      blurb: 'Operational metrics with websockets and animated charts.',
      link: '#'
    },
    {
      title: 'Generative Playground',
      blurb: 'AI-driven content tools with slick, minimal UI.',
      link: '#'
    },
    {
      title: 'AR Product Teaser',
      blurb: '3D product launch site with immersive interactions.',
      link: '#'
    },
  ]

  return (
    <section id="projects" className="relative bg-slate-950 text-white py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_circle_at_20%_10%,rgba(56,189,248,0.10),transparent_50%)]" />
      <div className="container mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>
          <p className="text-sky-200/80 mt-2">A curated selection of recent work.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <a key={i} href={p.link} target="_blank" rel="noreferrer" className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition overflow-hidden">
              <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-[radial-gradient(400px_circle_at_var(--x,50%)_var(--y,50%),rgba(56,189,248,0.18),transparent_40%)]" />
              <div className="relative">
                <div className="h-36 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 mb-4 shadow-[0_0_40px_rgba(56,189,248,0.15)_inset]" />
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="text-sky-200/80 text-sm mt-1">{p.blurb}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

import { motion } from 'framer-motion'

function Work() {
  const roles = [
    { company: 'Flames', role: 'Design Engineer', years: '2023–Now', bullets: ['Interfaces that feel fast and intentional.'] },
    { company: 'Nova Labs', role: 'Frontend Lead', years: '2021–2023', bullets: ['Scaled component systems across teams.'] },
    { company: 'Freelance', role: 'Creative Dev', years: '2019–2021', bullets: ['Immersive sites for tech brands.'] },
  ]

  return (
    <section id="work" className="relative bg-slate-950 text-white py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_circle_at_80%_0%,rgba(56,189,248,0.10),transparent_50%)]" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-semibold">Work</h2>
          <p className="text-sky-200/80 mt-2">Selective history of roles and collaborations.</p>
        </motion.div>

        <ol className="relative border-l border-white/10 ml-3">
          {roles.map((r, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
              className="mb-10 ml-4"
            >
              <div className="absolute -left-1.5 mt-1 w-3 h-3 rounded-full bg-sky-400/80 shadow-[0_0_20px_rgba(56,189,248,0.6)]" />
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">{r.company} • {r.role}</h3>
                  <span className="text-sky-200/70 text-sm">{r.years}</span>
                </div>
                <ul className="list-disc pl-5 mt-2 text-sky-200/90 text-sm">
                  {r.bullets.map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Work

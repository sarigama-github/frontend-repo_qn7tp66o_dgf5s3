import Spline from '@splinetool/react-spline'

function Hero() {
  const videoSrc = import.meta.env.VITE_BG_VIDEO
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.12),transparent_60%)]" />

      {/* Background layer: prefers video if provided, otherwise Spline scene */}
      <div className="absolute inset-0 opacity-70">
        {videoSrc ? (
          <video
            className="h-full w-full object-cover"
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-6">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            AKILAN Y
          </h1>
          <p className="mt-4 text-sky-200/90 md:text-lg">
            Futuristic, minimal, and fast. Real‑time visuals with a cinematic backdrop.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-xl bg-sky-500/20 text-sky-200 hover:bg-sky-500/30 border border-sky-400/30 transition">
              View Projects
            </a>
            <a href="#connect" className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition">
              Contact
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  )
}

export default Hero

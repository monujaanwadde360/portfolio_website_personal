import { useEffect, useRef } from "react"
import Typed from "typed.js"

function Home() {
  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full-Stack Developer",
        "Websites Developer",
      ],
      typeSpeed: 40,
      backSpeed: 30,
      backDelay: 1200,
      startDelay: 300,
      loop: true,
    })

    return () => typed.destroy()
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-slate-100 overflow-hidden font-serif font-bold tracking-wide"
    >

      {/* ===== Hero Content ===== */}
      <div className="relative z-10 text-center px-6 max-w-4xl">

        {/* Small Intro */}
        <div
          className="
            uppercase
            inline-flex
            items-center
            mt-8
            mb-6
            gap-2
            px-5
            py-2
            rounded-full
            border
            border-black/10
            bg-white/40
            backdrop-blur-md
            text-xs
            shadow-sm
          "
        >
          <span
            className="
              w-2
              h-2
              bg-green-500
              rounded-full
              animate-pulse
            "
          ></span>

          Welcome to My Portfolio
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-5
          bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 
          bg-clip-text text-transparent whitespace-nowrap">
          Monujaan Wadde
        </h1>

        {/* Dynamic Role */}
        <h2 className="text-2xl md:text-3xl mb-5">
          I'm a <span ref={typedRef} className="text-cyan-400"></span>
        </h2>

        {/* Description */}
        <p className="max-w-3xl text-[20px]
            md:text-[22px] mx-auto mb-10 leading-relaxed">
          I am a full-stack developer who enjoys building websites and working with new technologies.
          I also explore cybersecurity and IoT projects. I like solving real-world problems and
          creating simple, secure, and useful solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-3 md:gap-6 flex-nowrap">
          <a
            href="#contact"
            className="px-4 md:px-8 py-2 md:py-3 whitespace-nowrap
            rounded-full bg-gradient-to-r from-cyan-500 to-purple-600
            hover:scale-105 transition-transform duration-300
            shadow-lg shadow-cyan-500/40 text-sm md:text-base"
          >
            Let's Work Together
          </a>

          <a
            href="#projects"
            className="px-4 md:px-8 py-2 md:py-3 whitespace-nowrap
            rounded-full bg-gradient-to-r from-cyan-500 to-purple-600
            hover:scale-105 transition-transform duration-300
            shadow-lg shadow-cyan-500/40 text-sm md:text-base"
          >
            Explore My Work
          </a>
        </div>

      </div>
    </section>
  )
}

export default Home

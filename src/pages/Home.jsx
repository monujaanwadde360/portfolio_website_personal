import { useEffect, useRef } from "react"
import Typed from "typed.js"
import Particles from "@tsparticles/react"
import { FaChevronDown } from "react-icons/fa"

function Home() {
  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full-Stack Developer",
        "Cybersecurity Learner",
        "IoT Developer",
        "Problem Solver",
      ],
      typeSpeed: 40,
      backSpeed: 30,
      backDelay: 1200,
      startDelay: 300,
      loop: true,
    })

    return () => typed.destroy()
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden"
    >
      {/* ===== Particles Background ===== */}
      <Particles
        id="tsparticles"
        className="absolute inset-0"
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: { value: 60 },
            color: { value: "#ffffff" },
            size: { value: 3 },
            links: {
              enable: true,
              distance: 140,
              color: "#22d3ee",
              opacity: 0.2,
            },
            move: {
              enable: true,
              speed: 1.5,
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
            },
          },
        }}
      />

      {/* ===== Hero Content ===== */}
      <div className="relative z-10 text-center px-6 max-w-4xl">

        {/* Small Intro */}
        <div className="uppercase mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs text-gray-300">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          Welcome to My Portfolio
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 
          bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 
          bg-clip-text text-transparent whitespace-nowrap">
          Monujaan Wadde
        </h1>

        {/* Dynamic Role */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          I'm a <span ref={typedRef} className="text-cyan-400"></span>
        </h2>

        {/* Description */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
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

      {/* ===== SCROLL INDICATOR ===== */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20">

        <span className="text-xs uppercase tracking-widest text-gray-400 mb-5">
          Scroll
        </span>

        <button
          onClick={() => scrollToSection("about")}
          className="cursor-pointer group"
          aria-label="Scroll down"
        >
          <div className="p-3 rounded-full bg-white/5 backdrop-blur-sm 
                          border border-white/10 
                          group-hover:border-cyan-500/50 
                          transition-all duration-300
                          animate-bounce
                          group-hover:scale-110
                          group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">

            <FaChevronDown className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
          </div>
        </button>
      </div>

    </section>
  )
}

export default Home
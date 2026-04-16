import { useState, useEffect } from "react"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"

function Projects() {
  const [filter, setFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 3

  const projects = [
    {
      category: "development",
      title: "ESP-32 Device Control",
      shortDesc: "Control home devices using a mobile app.",
      image: "/images/heading.jpg",
      tech: ["ESP32", "Android", "IoT"],
      live: "#",
      code: "#",
    },
    {
      category: "design",
      title: "Portfolio Website",
      shortDesc: "Personal portfolio with modern UI.",
      image: "/images/heading.jpg",
      tech: ["React", "Tailwind"],
      live: "#",
      code: "#",
    },
    {
      category: "security",
      title: "Penetration Testing Tool",
      shortDesc: "Basic security testing setup.",
      image: "/images/heading.jpg",
      tech: ["Kali Linux", "Networking"],
      live: "#",
      code: "#",
    },
    {
      category: "development",
      title: "Distance Monitoring System",
      shortDesc: "Measure distance using sensors.",
      image: "/images/heading.jpg",
      tech: ["Raspberry Pi", "Sensors"],
      live: "#",
      code: "#",
    },
    {
      category: "security",
      title: "Phishing Awareness Demo",
      shortDesc: "Demo for security awareness.",
      image: "/images/heading.jpg",
      tech: ["Security", "Web"],
      live: "#",
      code: "#",
    },
  ]

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter)

  const totalPages = Math.ceil(filtered.length / projectsPerPage)
  const startIndex = (currentPage - 1) * projectsPerPage
  const currentProjects = filtered.slice(
    startIndex,
    startIndex + projectsPerPage
  )

  useEffect(() => {
    setCurrentPage(1)
  }, [filter])

  return (
    <section
      id="projects"
      className="relative bg-black text-white py-24 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex items-center justify-center mb-6">
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-cyan-400"></div>

          <h2 className="mx-6 text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            My Projects
          </h2>

          <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-purple-500"></div>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-gray-400">
            Here are some of the projects I have worked on. I focus on building
            simple and useful solutions.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-6 mb-16 flex-wrap">
          {["all", "design", "development", "security"].map((btn) => (
            <button
              key={btn}
              onClick={() => setFilter(btn)}
              className={`px-6 py-2 rounded-full border transition ${filter === btn
                ? "bg-gradient-to-r from-cyan-500 to-purple-600 border-transparent"
                : "border-white/20 hover:bg-white/10"
                }`}
            >
              {btn}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/20 transition"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <span className="text-xs text-cyan-400 uppercase">
                  {project.category}
                </span>

                <h3 className="text-xl font-semibold mt-2 mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.shortDesc}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-white/10 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-5 mt-5">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-1.5 text-sm rounded-full 
    bg-cyan-500 hover:bg-cyan-600 transition"
                  >
                    <FaExternalLinkAlt size={12} />
                    Live
                  </a>

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-1.5 text-sm rounded-full 
    border border-white/20 hover:bg-white/10 transition"
                  >
                    <FaGithub size={13} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-16 gap-4">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-full border ${currentPage === i + 1
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 border-transparent"
                  : "border-white/20 hover:bg-white/10"
                  }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
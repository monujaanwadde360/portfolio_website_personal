import {
  FaPaintBrush,
  FaUserShield,
  FaNetworkWired,
  FaMicrochip,
  FaBroadcastTower,
  FaRulerCombined,
} from "react-icons/fa"

function Services() {
  const services = [
    {
      icon: FaPaintBrush,
      title: "Website Design",
      description:
        "I design clean and responsive websites that work well on all devices. My focus is on simple layouts, smooth user experience, and fast performance.",
      tech: ["HTML", "CSS", "React", "Tailwind", "React.js", "Next.js", "Node.js", "MongoDB"],
    },
    {
      icon: FaUserShield,
      title: "Ethical Hacking",
      description:
        "I practice basic penetration testing to find common security issues in systems and applications, helping improve safety and awareness.",
      tech: ["Kali Linux", "Networking"],
    },
    {
      icon: FaNetworkWired,
      title: "Phishing & Social Engineering",
      description:
        "I create controlled phishing demos to understand real-world attacks and spread awareness about online security risks.",
      tech: ["Security", "Testing"],
    },
    {
      icon: FaMicrochip,
      title: "IoT Experiments",
      description:
        "I build small IoT projects using sensors and microcontrollers to learn automation and real-time data handling.",
      tech: ["Arduino", "Raspberry Pi"],
    },
    {
      icon: FaBroadcastTower,
      title: "ESP-32 Device Control",
      description:
        "I create systems to control devices remotely using ESP-32 and mobile apps, focusing on simple and useful automation.",
      tech: ["ESP32", "Android"],
    },
    {
      icon: FaRulerCombined,
      title: "Distance Monitoring",
      description:
        "I develop sensor-based systems to measure distance and display real-time data using microcontrollers.",
      tech: ["Sensors", "Embedded"],
    },
  ]

  return (
    <section
      id="services"
      className="relative bg-black text-white py-24 px-6 overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute -z-10 top-[-150px] right-[-150px] w-[400px] h-[400px] bg-purple-600 rounded-full blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto">

        {/* Premium Title */}
        <div className="flex items-center justify-center mb-6">
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-cyan-400"></div>

          <h2 className="mx-6 text-3xl sm:text-4xl md:text-5xl font-bold whitespace-nowrap bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            My Services
          </h2>

          <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-purple-500"></div>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-gray-400 leading-relaxed">
            Here are the services I work on. I focus on building clean websites,
            exploring cybersecurity, and creating practical IoT solutions.
            My goal is to keep things simple, useful, and easy to understand.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="
  p-6 rounded-2xl
  bg-white/5
  border border-white/10
  hover:border-cyan-400/40
  hover:shadow-lg hover:shadow-cyan-500/20
  hover:-translate-y-2
  transition-all duration-300
  group
  flex flex-col justify-between
  "
              >
                {/* Top Content */}
                <div>
                  {/* Icon */}
                  <div
                    className="
      w-12 h-12 flex items-center justify-center rounded-xl
      bg-gradient-to-r from-cyan-500 to-purple-600
      shadow-lg shadow-cyan-500/30
      mb-4
      group-hover:scale-110
      transition-transform
      "
                  >
                    <Icon className="text-white text-lg" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Content */}
                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {service.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Small use-case line */}
                  <p className="text-xs text-gray-500">
                    Focused on simple and practical solutions
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
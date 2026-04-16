import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa"

function Footer() {
  return (
    <footer className="relative bg-black text-white pt-20 pb-10 px-6 overflow-hidden">

      {/* Top Gradient Divider */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>

      <div className="max-w-7xl mx-auto">

        {/* Main Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Logo + About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/images/logo.ico"
                alt="logo"
                className="w-10 h-10 rounded-full shadow-lg shadow-cyan-500/40"
              />
              <h3 className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Monujaan Wadde
              </h3>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              I am a full-stack developer with an interest in cybersecurity and IoT.
              I enjoy working on real-world projects and continuously improving my skills.
              I focus on building simple, secure, and useful solutions.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-center">Quick Links</h4>

            <ul className="space-y-3 text-gray-400 text-sm text-center">
              {[
                "home",
                "about",
                "services",
                "projects",
                "skills",
                "contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="hover:text-cyan-400 transition relative group"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-cyan-400 transition-all group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>

            <div className="flex space-x-4">
              {[
                {
                  icon: FaFacebookF,
                  link: "https://facebook.com/yourusername",
                },
                {
                  icon: FaTwitter,
                  link: "https://twitter.com/yourusername",
                },
                {
                  icon: FaInstagram,
                  link: "https://instagram.com/yourusername",
                },
                {
                  icon: FaLinkedinIn,
                  link: "https://linkedin.com/in/yourusername",
                },
                {
                  icon: FaGithub,
                  link: "https://github.com/yourusername",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-110 transition"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-center text-gray-400 text-sm">

          <span>
            © {new Date().getFullYear()} Monujaan Wadde. All rights reserved.
          </span>

        </div>

      </div>

      {/* Background Glow */}
      <div className="absolute -z-10 bottom-[-150px] left-[-150px] w-[400px] h-[400px] bg-purple-600 rounded-full blur-3xl opacity-10"></div>
    </footer>
  )
}

export default Footer
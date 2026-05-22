import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="
        relative
        bg-neutral-100
        pt-20
        pb-10
        px-6
        overflow-hidden
        font-serif
        font-bold
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* ================= MAIN GRID ================= */}
        <div className="grid md:grid-cols-3 gap-12 mb-14">

          {/* ================= LOGO + ABOUT ================= */}
          <div>

            {/* LOGO */}
            <div className="flex items-center gap-3 mb-5">

              <img
                src="/images/logo.ico"
                alt="logo"
                className="
                  w-11
                  h-11
                  rounded-full
                  shadow-lg
                  shadow-cyan-500/40
                "
              />

              <h3
                className="
                  text-2xl
                  bg-gradient-to-r
                  from-cyan-400
                  to-purple-500
                  bg-clip-text
                  text-transparent
                "
              >
                Monujaan Wadde
              </h3>
            </div>

            {/* DESCRIPTION */}
            <p
              className="
                text-gray-700
                text-sm
                leading-relaxed
              "
            >
              I am a full-stack developer with an
              interest in cybersecurity and IoT.
              I enjoy building modern applications,
              solving real-world problems, and
              continuously improving my skills.
            </p>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>

            <h4
              className="
                text-xl
                mb-5
                text-center
                text-cyan-400
              "
            >
              Quick Links
            </h4>

            <ul
              className="
                space-y-3
                text-sm
                text-center
              "
            >

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
                    className="
                      text-black
                      hover:text-cyan-400
                      transition
                      relative
                      inline-block
                      group
                    "
                  >
                    {item.charAt(0).toUpperCase() +
                      item.slice(1)}

                    <span
                      className="
                        absolute
                        left-0
                        -bottom-1
                        w-0
                        h-[1px]
                        bg-cyan-400
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                    ></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= SOCIAL LINKS ================= */}
          <div>

            <h4
              className="
                text-xl
                mb-5
                text-grey-400
              "
            >
              Follow Me
            </h4>

            <div className="flex gap-4 flex-wrap">

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
                    className="
                      w-11
                      h-11
                      flex
                      items-center
                      justify-center
                      rounded-full
                      bg-violet-500
                      border
                      border-black/10
                      text-red-800
                      hover:bg-gradient-to-r
                      hover:from-cyan-500
                      hover:to-purple-600
                      hover:scale-110
                      hover:shadow-lg
                      hover:shadow-cyan-500/30
                      transition-all
                      duration-300
                    "
                  >
                    <Icon className="text-sm" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div
          className="
            border-t
            border-black/30
            pt-6
            flex
            flex-col
            md:flex-row
            items-center
            justify-center
            text-sm
          "
        >

          <span>
            © {new Date().getFullYear()} Monujaan
            Wadde. All rights reserved.
          </span>
        </div>
      </div>

      {/* ================= GLOW ================= */}
      <div
        className="
          absolute
          -z-10
          bottom-[-150px]
          left-[-150px]
          w-[400px]
          h-[400px]
          bg-purple-600
          rounded-full
          blur-3xl
          opacity-10
        "
      ></div>
    </footer>
  );
}

export default Footer;

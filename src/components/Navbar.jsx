import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.ico";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);

      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const id = section.getAttribute("id");

        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(id);
        }
      });
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navItems = [
    "home",
    "about",
    "services",
    "skills",
    "projects",
    "contact",
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
      ${
        sticky
          ? "py-4 bg-indigo-100 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] border-b border-white/20"
          : "py-5 bg-indigo-50 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
      }`}
    >
      {/* Gradient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* LOGO */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <img
            src={logo}
            alt="logo"
            className="w-9 h-9 rounded-full transition duration-300 group-hover:scale-110"
          />

          <span
            className="text-2xl font-extrabold tracking-wide
            bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500
            bg-clip-text text-transparent
            drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
          >
            Monujaan
          </span>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center space-x-4 font-medium text-base">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`px-4 py-2 border rounded-full transition-all duration-300 ${
                  active === item
                    ? "border-cyan-500 text-black font-semibold"
                    : "border-gray-300 text-black hover:border-cyan-500"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-black text-2xl hover:scale-110 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden absolute top-full right-4 mt-2 w-64 backdrop-blur-2xl bg-white/80 rounded-2xl border border-white/30 shadow-xl transition-all duration-300 ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center p-5 space-y-3">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className={`inline-block px-5 py-2 border rounded-full transition-all duration-300 ${
                  active === item
                    ? "border-blue-500 bg-blue-50 text-blue-600 font-semibold"
                    : "border-gray-300 text-black hover:border-indigo-500 hover:text-indigo-500"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

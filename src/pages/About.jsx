import { useState, useRef, useEffect } from "react"

/* ================= PARTICLE IMAGE COMPONENT ================= */
function ParticleImage({ src, className }) {
  const canvasRef = useRef(null);
  const [particles, setParticles] = useState([]);
  const mouseRef = useRef({ x: null, y: null });

  // Scan the image to create particles
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });

    const image = new Image();
    image.src = src;

    image.onload = () => {
      // Set canvas size to match image (scaled down slightly for performance)
      const width = 400;
      const height = 500;
      canvas.width = width;
      canvas.height = height;

      // Draw image to get data
      ctx.drawImage(image, 0, 0, width, height);
      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;

      const newParticles = [];
      const gap = 4; // Skip every 4 pixels to optimize performance (smaller gap = more particles)

      for (let y = 0; y < height; y += gap) {
        for (let x = 0; x < width; x += gap) {
          const index = (y * width + x) * 4;
          const alpha = data[index + 3];
          const r = data[index];
          const g = data[index + 1];
          const b = data[index + 2];

          // Only create particles for visible, non-black pixels
          if (alpha > 128 && (r + g + b) > 100) {
            newParticles.push({
              x: Math.random() * width,
              y: Math.random() * height,
              originX: x,
              originY: y,
              color: `rgb(${r},${g},${b})`,
              size: Math.random() * 1.5 + 0.5,
            });
          }
        }
      }
      setParticles(newParticles);
    };
  }, [src]);

  // Handle Mouse Move
  useEffect(() => {
    const canvas = canvasRef.current;
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();

      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;

      mouseRef.current = {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY
      };
    };
    const handleMouseLeave = () => {
      mouseRef.current = { x: null, y: null };
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      const radius = 60; // Mouse repulsion radius

      particles.forEach((p) => {
        // Physics: Return to origin
        let dx = p.originX - p.x;
        let dy = p.originY - p.y;
        let distanceToOrigin = Math.sqrt(dx * dx + dy * dy);

        // Force to pull back
        let forceDirectionX = dx / distanceToOrigin;
        let forceDirectionY = dy / distanceToOrigin;
        let force = distanceToOrigin * 0.05; // Elasticity

        // Physics: Mouse Repulsion
        if (mouse.x !== null) {
          let dxMouse = mouse.x - p.x;
          let dyMouse = mouse.y - p.y;
          let distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

          if (distanceMouse < radius) {
            const angle = Math.atan2(dyMouse, dxMouse);
            const moveForce = (radius - distanceMouse) / radius;
            const moveX = Math.cos(angle) * moveForce * 20; // Push strength
            const moveY = Math.sin(angle) * moveForce * 20;

            p.x -= moveX;
            p.y -= moveY;
          }
        }

        // Apply movement towards origin
        if (distanceToOrigin > 0) {
          p.x += forceDirectionX * force;
          p.y += forceDirectionY * force;
        }

        // Draw Particle
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [particles]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      // Scale the canvas visual size via CSS while keeping resolution constant
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
  );
}

function About() {
  const [activeTab, setActiveTab] = useState("education")

  const experienceData = [
    {
      date: "2023 - 2025",
      title: "Web Development Projects",
      company: "Personal Portfolio",
      description:
        "Designed and developed responsive portfolio websites using modern UI/UX principles.",
    },
    {
      date: "2023 - 2025",
      title: "Ethical Hacking & Security Research",
      company: "Independent Projects",
      description:
        "Performed penetration testing on Android and Windows systems.",
    },
    {
      date: "2022 - 2025",
      title: "IoT Systems Development",
      company: "Independent Projects",
      description:
        "Built IoT systems using Raspberry Pi, Arduino, and ESP-32.",
    },
  ]

  const educationData = [
    {
      date: "2024 - 2026",
      title: "M.Sc. in Computer Science",
      institution: "Ramakrishna Mission Residential College (Autonomous), Narendrapur",
      university: "University of Calcutta",
      website: "https://rkmrc.in/",
      description:
        "Currently pursuing Master's degree focused on advanced computing and research.",
    },
    {
      date: "2021 - 2024",
      title: "B.Sc. (Hons) in Computer Science",
      institution: "Ramakrishna Mission Vidyamandira (Autonomous), Belur Math",
      university: "University of Calcutta",
      website: "https://vidyamandira.ac.in/",
      description:
        "Built strong foundation in programming, algorithms, cybersecurity, and system design.",
    },
  ]

  const data = activeTab === "experience" ? experienceData : educationData

  return (
    <section id="about" className="bg-black text-white py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <div className="flex items-center justify-center mb-16">
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-cyan-400"></div>
          <h2 className="mx-6 text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-purple-500"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Particle Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-2xl opacity-30"></div>

              <div className="relative w-80 h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <ParticleImage
                  src="/images/userimg.jpg"
                  className="rounded-3xl"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              I'm <span className="text-cyan-400">Monujaan Wadde</span>, a{" "}
              <span className="text-purple-400">Full-Stack Developer</span>
            </h3>

            <p className="text-gray-400 mb-8 leading-relaxed">
              I am a full-stack developer focused on building modern web applications,
              with a growing interest in cybersecurity and IoT systems.
              I enjoy working on real-world projects and continuously learning new technologies.
              I aim to create solutions that are simple, secure, and useful.
            </p>

            {/* Tabs */}
            <div className="flex gap-6 mb-10">
              {["education", "experience"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative pb-2 font-medium transition ${activeTab === tab
                    ? "text-cyan-400"
                    : "text-gray-400 hover:text-white"
                    }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}

                  {activeTab === tab && (
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition"
                >
                  {/* Date */}
                  <p className="text-sm text-cyan-400 mb-1">{item.date}</p>

                  {/* Title */}
                  <h4 className="text-lg font-semibold">{item.title}</h4>

                  {/* Institution / Company */}
                  <p className="text-purple-400 text-sm">
                    {item.website ? (
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 underline underline-offset-4"
                      >
                        {item.institution}
                      </a>
                    ) : (
                      item.company || item.institution
                    )}
                  </p>

                  {/* University */}
                  {item.university && (
                    <p className="text-gray-500 text-xs mb-2">
                      {item.university}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-10 flex gap-6 flex-wrap px-7">
              <a
                href="#"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 transition shadow-lg shadow-cyan-500/30"
              >
                Download CV
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
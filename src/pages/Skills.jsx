import { useEffect, useRef, useState } from "react";

import SkillCard from "../components/SkillCard";

import { skillsData } from "../data/skillsData";

function Skills() {
  const [animate, setAnimate] = useState(false);

  const sectionRef = useRef(null);

  /* ================= INTERSECTION ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },

      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="
        relative
        py-24
        px-6
        overflow-hidden
        font-serif
        font-bold
      "
    >

      {/* GLOW */}
      <div
        className="
          absolute
          -z-10
          bottom-[-150px]
          left-[-150px]
          w-[400px]
          h-[400px]
          bg-cyan-500
          rounded-full
          blur-3xl
          opacity-10
        "
      ></div>

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="flex items-center justify-center mb-12">

          <div
            className="
              h-[1px]
              w-20
              bg-gradient-to-r
              from-transparent
              to-cyan-400
            "
          ></div>

          <h2
            className="
              mx-6
              text-3xl
              sm:text-4xl
              md:text-5xl
              whitespace-nowrap
              bg-gradient-to-r
              from-cyan-400
              to-purple-500
              bg-clip-text
              text-transparent
            "
          >
            My Skills
          </h2>

          <div
            className="
              h-[1px]
              w-20
              bg-gradient-to-l
              from-transparent
              to-purple-500
            "
          ></div>
        </div>

        {/* DESCRIPTION */}
        <div className="max-w-3xl mx-auto text-center mb-16">

          <h3 className="text-2xl font-semibold mb-4">
            Skills & Technologies
          </h3>

          <p className="leading-relaxed mb-8">
            I have experience working with modern web
            technologies and building full-stack applications.
            I am also interested in cybersecurity and IoT,
            and I enjoy solving real-world problems through
            clean, scalable, and practical solutions.
          </p>

          <a
            href="#projects"
            className="
              px-6
              py-3
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              to-purple-600
              hover:scale-105
              transition
              shadow-lg
              shadow-cyan-500/30
              inline-block
            "
          >
            View My Projects
          </a>
        </div>

        {/* GRID */}
        <div
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >

          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              skill={skill}
              animate={animate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

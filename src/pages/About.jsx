import { useState } from "react";

import ParticleImage from "../components/ParticleImage";
import AboutTimelineCard from "../components/AboutTimelineCard";

import {
  educationData,
  experienceData,
} from "../data/aboutData";

function About() {
  const [activeTab, setActiveTab] = useState("education");

  const data =
    activeTab === "experience"
      ? experienceData
      : educationData;

  return (
    <section
      id="about"
      className="
        py-24
        px-6
        bg-indigo-100
        font-serif font-bold tracking-wide
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="flex items-center justify-center mb-20">

          <div className="h-[2px] w-16 bg-cyan-400"></div>

          <h2 className="mx-6 text-4xl md:text-5xl font-bold">
            About Me
          </h2>

          <div className="h-[2px] w-16 bg-purple-500"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center">

            <div
              className="
                relative
                w-80
                h-[420px]
                rounded-[35px]
                overflow-hidden
                border border-black/20
                shadow-2xl
                bg-trasparent
              "
            >
              <ParticleImage
                src="/images/userimg.jpg"
                className="rounded-[35px]"
              />

              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/20
                  to-transparent
                  pointer-events-none
                "
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>

            <h3 className="text-3xl md:text-4xl mb-6 leading-snug">
              I'm{" "}
              <span className="text-cyan-500">
                Monujaan Wadde
              </span>
              , a{" "}
              <span className="text-purple-500">
                Full-Stack Developer
              </span>
            </h3>

            <p className="leading-relaxed mb-10 text-[20px]">
              I specialize in building modern web applications,
              cybersecurity solutions, and IoT systems.
              Passionate about clean UI, secure systems,
              and innovative real-world projects.
            </p>

            {/* TABS */}
            <div className="flex gap-5 mb-10 flex-wrap text-[18px]">

              {["education", "experience"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    px-6 py-2 rounded-full
                    transition-all duration-300
                    border

                    ${
                      activeTab === tab
                        ? "bg-blue-500 text-white border-grey"
                        : "border-black/20 hover:bg-cyan-500 hover:text-white"
                    }
                  `}
                >
                  {tab.charAt(0).toUpperCase() +
                    tab.slice(1)}
                </button>
              ))}
            </div>

            {/* TIMELINE */}
            <div className="space-y-6">

              {data.map((item, index) => (
                <AboutTimelineCard
                  key={index}
                  item={item}
                />
              ))}
            </div>

            {/* BUTTONS */}
            <div className="mt-12 flex flex-wrap gap-5">

              <a
                href="#"
                className="
                  px-7 py-3
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-500
                  to-purple-600
                  text-white
                  shadow-lg
                  hover:scale-105
                  transition
                "
              >
                Download CV
              </a>

              <a
                href="#contact"
                className="
                  px-7 py-3
                  rounded-full
                  bg-indigo-500
                  text-white
                  border border-black/20
                  hover:bg-purple-800
                  hover:text-white
                  transition
                "
              >
                Contact Me
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

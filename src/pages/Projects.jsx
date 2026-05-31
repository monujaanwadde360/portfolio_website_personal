import { useEffect, useState } from "react";

import ProjectCard from "../components/ProjectCard";

import { projectsData } from "../data/projectsData";

function Projects() {
  const [filter, setFilter] = useState("all");

  const [currentPage, setCurrentPage] = useState(1);

  const projectsPerPage = 3;

  /* ================= FILTER ================= */
  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter(
          (project) =>
            project.category === filter
        );

  /* ================= PAGINATION ================= */
  const totalPages = Math.ceil(
    filteredProjects.length / projectsPerPage
  );

  const startIndex =
    (currentPage - 1) * projectsPerPage;

  const currentProjects =
    filteredProjects.slice(
      startIndex,
      startIndex + projectsPerPage
    );

  /* ================= RESET PAGE ================= */
  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  return (
    <section
      id="projects"
      className="
        relative
        py-24
        px-6
        overflow-hidden
        font-serif
        font-bold
        text-black
      "
    >

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="flex items-center justify-center mb-6">

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
              bg-gradient-to-r
              from-cyan-400
              to-purple-500
              bg-clip-text
              text-transparent
            "
          >
            My Projects
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

          <p className="leading-relaxed text-[18px]">
            Here are some of the projects I have worked on.
            I focus on building clean, practical,
            and real-world solutions.
          </p>
        </div>

        {/* FILTER BUTTONS */}
        <div
          className="
            flex
            justify-center
            gap-5
            mb-16
            flex-wrap
          "
        >

          {[
            "all",
            "design",
            "development",
            "security",
          ].map((btn) => (
            <button
              key={btn}
              onClick={() => setFilter(btn)}
              className={`
                px-6
                py-2
                rounded-full
                border
                transition-all
                duration-300

                ${
                  filter === btn
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 border-transparent"
                    : "border-black/20 hover:bg-white/10"
                }
              `}
            >
              {btn}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            gap-10
          "
        >

          {currentProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
            />
          ))}
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-16 gap-4">

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() =>
                  setCurrentPage(index + 1)
                }
                className={`
                  w-10
                  h-10
                  rounded-full
                  border
                  transition-all
                  duration-300

                  ${
                    currentPage === index + 1
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 border-transparent text-white"
                      : "border-black/20 hover:bg-white/10"
                  }
                `}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;

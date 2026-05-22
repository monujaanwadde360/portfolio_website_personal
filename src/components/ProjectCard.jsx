import {
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <div
      className="
        rounded-3xl
        overflow-hidden
        bg-white/5
        border
        border-white/10
        hover:border-cyan-400/40
        hover:shadow-lg
        hover:shadow-cyan-500/20
        hover:-translate-y-2
        transition-all
        duration-300
      "
    >

      {/* IMAGE */}
      <div className="overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="
            w-full
            h-52
            object-cover
            hover:scale-105
            transition-transform
            duration-500
          "
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">

        {/* CATEGORY */}
        <span
          className="
            text-xs
            uppercase
            tracking-wider
            text-cyan-400
          "
        >
          {project.category}
        </span>

        {/* TITLE */}
        <h3
          className="
            text-2xl
            font-semibold
            mt-3
            mb-3
          "
        >
          {project.title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
            text-gray-400
            text-sm
            leading-relaxed
            mb-5
          "
        >
          {project.shortDesc}
        </p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 mb-6">

          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="
                text-xs
                px-3
                py-1
                rounded-full
                bg-white/10
                border
                border-black/10
                text-gray-700
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex gap-4">

          {/* LIVE */}
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              to-purple-600
              text-sm
              text-white
              hover:scale-105
              transition-all
              duration-300
            "
          >
            <FaExternalLinkAlt size={12} />

            Live
          </a>

          {/* CODE */}
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              border
              border-black/20
              text-sm
              hover:bg-white/10
              transition-all
              duration-300
            "
          >
            <FaGithub size={13} />

            Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
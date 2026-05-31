function SkillCard({ skill, animate }) {
  const Icon = skill.icon;

  return (
    <div
      className="
        p-6
        rounded-3xl
        bg-white/40
        border
        border-white/40
        hover:border-cyan-400/40
        hover:shadow-lg
        hover:shadow-cyan-500/20
        hover:-translate-y-2
        transition-all
        duration-300
      "
    >

      {/* ICON */}
      <div className="mb-5 text-cyan-400 text-3xl">
        <Icon />
      </div>

      {/* TITLE */}
      <h3 className="text-xl font-semibold mb-3">
        {skill.name}
      </h3>

      {/* DESCRIPTION */}
      <p
        className="
          text-sm
          leading-relaxed
          mb-5
        "
      >
        {skill.description}
      </p>

      {/* PROGRESS HEADER */}
      <div className="flex justify-between text-sm mb-2">

        <span className="text-back">
          Proficiency
        </span>

        <span className="text-rose-500">
          {skill.percent}%
        </span>
      </div>

      {/* PROGRESS BAR */}
      <div
        className="
          w-full
          h-2
          bg-white/10
          rounded-full
          overflow-hidden
        "
      >
        <div
          className="
            h-full
            bg-gradient-to-r
            from-cyan-400
            to-purple-500
            transition-all
            duration-[1500ms]
          "
          style={{
            width: animate
              ? `${skill.percent}%`
              : "0%",
          }}
        ></div>
      </div>

      {/* LINK */}
      <a
        href={skill.link}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-block
          mt-5
          text-sm
          text-cyan-400
          hover:text-purple-400
          transition
        "
      >
        Learn More →
      </a>
    </div>
  );
}

export default SkillCard;

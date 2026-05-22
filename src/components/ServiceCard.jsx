function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <div
      className="
        p-6
        rounded-3xl
        border
        border-black/15
        bg-white
        hover:border-cyan-400/40
        hover:shadow-xl
        hover:shadow-cyan-500/10
        hover:-translate-y-2
        transition-all
        duration-300
        group
        flex
        flex-col
        justify-between
      "
    >

      {/* TOP */}
      <div>

        {/* ICON */}
        <div
          className="
            w-14
            h-14
            flex
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-r
            from-cyan-500
            to-purple-600
            shadow-lg
            shadow-cyan-500/30
            mb-5
            group-hover:scale-110
            transition-transform
            duration-300
          "
        >
          <Icon className="text-white text-xl" />
        </div>

        {/* TITLE */}
        <h3 className="text-xl mb-3 text-rose-600 text-[22px]">
          {service.title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
            text-sm
            leading-relaxed
            mb-5
            text-[16px]
          "
        >
          {service.description}
        </p>
      </div>

      {/* BOTTOM */}
      <div>

        {/* TECH TAGS */}
        <div className="flex flex-wrap gap-2 mb-4">

          {service.tech.map((tech, index) => (
            <span
              key={index}
              className="
                text-xs
                px-3
                py-1
                rounded-full
                bg-slate-100
                border
                border-black/10
                text-gray-700
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
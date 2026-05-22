function AboutTimelineCard({ item }) {
  return (
    <div
      className="
        group
        p-6
        rounded-3xl
        bg-white/5
        border border-black/10
        hover:border-cyan-400/50
        transition-all duration-300
        hover:-translate-y-1
        
      "
    >
      <p className="text-sm text-rose-500 mb-2 text-[18px]">
        {item.date}
      </p>

      <h4 className="text-xl mb-2">
        {item.title}
      </h4>

      <p className="text-purple-500 text-sm mb-2 text-[18px]">
        {item.website ? (
          <a
            href={item.website}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-500 transition underline underline-offset-4"
          >
            {item.institution}
          </a>
        ) : (
          item.company
        )}
      </p>

      {item.university && (
        <p className="text-xs mb-3 text-[18px]">
          {item.university}
        </p>
      )}

      <p className="text-sm leading-relaxed text-[18px] text-mauve-700">
        {item.description}
      </p>
    </div>
  );
}

export default AboutTimelineCard;
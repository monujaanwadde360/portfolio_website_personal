function SocialIcon({ item }) {
  const Icon = item.icon;

  return (
    <a
      href={item.link}
      title={item.title}
      target="_blank"
      rel="noopener noreferrer"
      className="
        w-11
        h-11
        flex
        items-center
        justify-center
        rounded-full
        bg-violet-600
        text-red-500
        border
        border-black/10
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
}

export default SocialIcon;
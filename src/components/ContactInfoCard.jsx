function ContactInfoCard({ item }) {
  const Icon = item.icon;

  return (
    <div className="flex items-start gap-4">

      <div
        className="
          w-11
          h-11
          rounded-full
          bg-white/80
          border
          border-white/10
          flex
          items-center
          justify-center
        "
      >
        <Icon className={item.color} />
      </div>

      <div>
        <div className="text-sm text-gray-500">
          {item.label}
        </div>

        <div className="text-grey-800">
          {item.value}
        </div>
      </div>
    </div>
  );
}

export default ContactInfoCard;

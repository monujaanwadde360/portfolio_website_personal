import ServiceCard from "../components/ServiceCard";
import { servicesData } from "../data/servicesData";

function Services() {
  return (
    <section
      id="services"
      className="
        relative
        py-24
        px-6
        overflow-hidden
        font-serif
        font-bold
        tracking-wide
      "
    >

      {/* GLOW */}
      <div
        className="
          absolute
          -z-10
          top-[-150px]
          right-[-150px]
          w-[400px]
          h-[400px]
          bg-purple-600
          rounded-full
          blur-3xl
          opacity-10
        "
      ></div>

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
              whitespace-nowrap
              bg-gradient-to-r
              from-cyan-400
              to-purple-500
              bg-clip-text
              text-transparent
            "
          >
            My Services
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

          <p className="leading-relaxed text-[20px]">
            Here are the services I work on. I focus on
            building clean websites, exploring cybersecurity,
            and creating practical IoT solutions.
            My goal is to keep things simple, useful,
            and easy to understand.
          </p>
        </div>

        {/* GRID */}
        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-10
          "
        >

          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

import { useState } from "react";

import ContactInfoCard from "../components/ContactInfoCard";
import SocialIcon from "../components/SocialIcon";

import {
  contactInfo,
  socialLinks,
} from "../data/contactData";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  /* ================= HANDLE SUBMIT ================= */
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setStatus("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="
        relative
        bg-slate-100
        py-24
        px-6
        overflow-hidden
        font-serif
        font-bold
        tracking-wide
      "
    >

      <div className="max-w-7xl mx-auto">

        {/* ================= TITLE ================= */}
        <div className="flex items-center justify-center mb-16">

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
              from-cyan-500
              to-purple-600
              bg-clip-text
              text-transparent
            "
          >
            Contact Me
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

        <div className="grid lg:grid-cols-2 gap-16">

          {/* ================= LEFT SIDE ================= */}
          <div>

            {/* HEADING */}
            <h3 className="text-3xl font-semibold mb-5 text-black">
              Get in Touch
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-700 mb-10 leading-relaxed">
              Feel free to reach out for collaborations,
              freelance work, or project discussions.
              I'm always open to creative ideas and
              meaningful opportunities.
            </p>

            {/* CONTACT INFO */}
            <div className="space-y-6">

              {contactInfo.map((item, index) => (
                <ContactInfoCard
                  key={index}
                  item={item}
                />
              ))}
            </div>

            {/* ================= SOCIAL SECTION ================= */}
            <div className="mt-15">

              {/* FOLLOW ME HEADING */}
              <h2
                className="
                  text-xl
                  font-bold
                  mb-7
                  text-black
                  font-serif
                "
              >
                Follow Me
              </h2>

              {/* SOCIAL ICONS */}
              <div className="flex gap-4 flex-wrap">

                {socialLinks.map((item, index) => (
                  <SocialIcon
                    key={index}
                    item={item}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div>

            {/* FORM HEADING */}
            <h3 className="text-3xl font-semibold mb-6 text-black">
              Message Me
            </h3>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* NAME + EMAIL */}
              <div className="grid sm:grid-cols-2 gap-6">

                <input
                  type="text"
                  name="name"
                  placeholder="Name..."
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="
                    bg-white
                    border
                    border-black/10
                    rounded-2xl
                    px-5
                    py-3
                    text-black
                    placeholder:text-gray-400
                    focus:outline-none
                    focus:border-cyan-400
                  "
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email..."
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="
                    bg-white
                    border
                    border-black/10
                    rounded-2xl
                    px-5
                    py-3
                    text-black
                    placeholder:text-gray-400
                    focus:outline-none
                    focus:border-cyan-400
                  "
                />
              </div>

              {/* SUBJECT */}
              <input
                type="text"
                name="subject"
                placeholder="Subject..."
                value={formData.subject}
                onChange={handleChange}
                required
                className="
                  w-full
                  bg-white
                  border
                  border-black/10
                  rounded-2xl
                  px-5
                  py-3
                  text-black
                  placeholder:text-gray-400
                  focus:outline-none
                  focus:border-cyan-400
                "
              />

              {/* MESSAGE */}
              <textarea
                name="message"
                placeholder="Message..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="
                  w-full
                  bg-white
                  border
                  border-black/10
                  rounded-2xl
                  px-5
                  py-3
                  text-black
                  placeholder:text-gray-400
                  focus:outline-none
                  focus:border-cyan-400
                "
              ></textarea>

              {/* BUTTON */}
              <button
                type="submit"
                className="
                  px-7
                  py-3
                  rounded-full
                  text-white
                  bg-gradient-to-r
                  from-cyan-500
                  to-purple-600
                  hover:scale-105
                  transition-all
                  duration-300
                  shadow-lg
                  shadow-cyan-500/20
                "
              >
                Send Message
              </button>

              {/* STATUS */}
              {status && (
                <div className="text-green-500 text-sm">
                  {status}
                </div>
              )}
            </form>

            {/* ================= MAP ================= */}
            <div
              className="
                mt-10
                rounded-3xl
                overflow-hidden
                border
                border-black/10
                shadow-lg
              "
            >
              <iframe
                src="https://www.google.com/maps?q=Narayanpur,Chhattisgarh,India&output=embed"
                width="100%"
                height="300"
                loading="lazy"
                title="Narayanpur India Map"
                className="rounded-3xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

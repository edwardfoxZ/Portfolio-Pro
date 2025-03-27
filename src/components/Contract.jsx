import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Contract = () => {
  return (
    <div id="contact" className="relative max-w-[1100px] mx-auto p-5 py-32">
      <div className="glass my-5 p-10 space-y-10 md:p-32 rounded-xl flex flex-col md:flex-row gap-4 md:items-center">
        <div className="md:w-1/2 flex flex-col gap-12">
          <div className="flex items-center gap-4">
            <FaLinkedin
              size={window.innerWidth > 768 ? 90 : 50}
              className="text-white/50"
            />
            <div>
              <h2 className="text-white md:text-2xl font-bold">Contact </h2>
              <h2 className="text-white/50 text-lg md:text-xl">Mobile: xxx</h2>
              <h2 className="text-white/50 text-lg md:text-xl">Email: xxx</h2>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaGithub
              size={window.innerWidth > 768 ? 90 : 50}
              className="text-white/50"
            />
            <div>
              <h2 className="text-white md:text-2xl font-bold">
                Working Hours{" "}
              </h2>
              <h2 className="text-white/50 text-lg md:text-xl">
                Mo-Fri: 10am-5pm
              </h2>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col gap-4">
          <input
            type="name"
            placeholder="Your Name..."
            className="w-full p-2 rounded-lg input-glass text-white placeholder:text-white/50 outline-none border border-white/20 focus:border-white/40 transition duration-300"
          />
          <input
            type="email"
            placeholder="Your Email..."
            className="w-full p-2 rounded-lg input-glass text-white placeholder:text-white/50 outline-none border border-white/20 focus:border-white/40 transition duration-300"
          />
          <textarea
            placeholder="Your Message..."
            className="w-full min-h-[120px] p-2 rounded-lg input-glass text-white placeholder:text-white/50 outline-none border border-white/20 focus:border-white/40 transition duration-300"
          />
          <button
            className="bg-[linear-gradient(to_right,#4db5d2,#3472a1)] text-white md:text-3xl px-10 py-2 rounded-xl border border-transparent
                  hover:shadow-xl transition-shadow duration-300"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

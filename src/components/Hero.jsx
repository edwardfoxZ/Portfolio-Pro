import React from "react";
import { TypeAnimation } from "react-type-animation";
import harald from "../assets/Neon Modern Worship Night Poster.png";
import { ShinyEffect } from "./ShinyEffect";
export const Hero = () => {
  return (
    <div className="relative grid md:grid lg:grid-cols-2 place-items-center max-w-[1250px] container mx-auto mb-8 my-14 md:mb-32">
      <div className="absolute inset-0 overflow-hidden md:overflow-visible">
        <div className="hidden md:block">
          <ShinyEffect left={3} top={200} size={1000} />
        </div>
        <ShinyEffect left={-100} top={20} size={700} />
      </div>

      <div className="text-white z-30">
        <h1 className="text-3xl md:text-5xl">HEY,I AM</h1>
        <h1 className="text-3xl md:text-5xl">HARALD HARDRADA</h1>
        <TypeAnimation
          className="text-3xl md:text-5xl italic"
          sequence={[
            "Webdesigner",
            1000,
            "Consultant",
            1000,
            "Developer",
            1000,
          ]}
          speed={50}
          repeat={Infinity}
          role="p"
        />
        <h2 className="text-gray-300 font-extrabold">
          with 5+ years of experience
        </h2>

        <div className="flex flex-row space-x-4 text-white font-bold mt-10">
          <button
            className="bg-[linear-gradient(to_right,#4db5d2,#3472a1)] p-2 px-10 rounded-xl border border-transparent
                  hover:shadow-xl transition-shadow duration-300"
          >
            Download CV
          </button>
          <button
            className="bg-transparent border border-white p-2 px-10 rounded-xl
                  hover:shadow-xl transition-shadow duration-300"
          >
            View Works
          </button>
        </div>
      </div>

      <img
        draggable={false}
        src={harald}
        alt="title-image"
        className="w-[500px]"
      />
    </div>
  );
};

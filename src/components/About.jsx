import React from "react";
import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di";

import pr1 from "../assets/project1.png";
import pr2 from "../assets/project2.png";
import pr3 from "../assets/project7.png";

export const About = () => {
  return (
    <div
      id="about"
      className="max-[1300px] mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center py-32"
    >
      <div className="md:hidden bg-white bg-opacity-10 backdrop-blur-lg rounded-lg glass p-6">
        <div className="flex flex-wrap gap-4 text-4xl justify-center">
          <DiHtml5 className="text-orange-600" />
          <DiCss3 className="text-blue-600" />
          <DiSass className="text-pink-600" />
          <DiBootstrap className="text-purple-600" />
          <DiJavascript1 className="text-yellow-500" />
          <DiReact className="text-blue-500" />
          <DiNodejsSmall className="text-green-500" />
        </div>
      </div>

      {/* Skills section */}
      <div className="relative group">
        <div
          className="w-full h-full -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg
              blur opacity-25 group-hover:opacity-100 transition-all duration-300 absolute"
        ></div>
        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
          <img
            draggable={false}
            className="rounded-lg md:max-w-[500px]"
            src={pr1}
            alt="project1"
          />
        </div>
      </div>

      <div className="text-white space-y-5 max-w-[500px]">
        <h2 className="text-2xl md:text-4xl font-extrabold">Skills</h2>
        <p className="  ">
          As a passionate web front-end developer with over 5 years of
          experience, I have a proven track record of creating visually stunning
          and responsive websites.
        </p>
        <div className="md:flex flex-wrap space-x-5 text-4xl justify-center hidden">
          <DiHtml5 className="text-orange-600" />
          <DiCss3 className="text-blue-600" />
          <DiSass className="text-pink-600" />
          <DiBootstrap className="text-purple-600" />
          <DiJavascript1 className="text-yellow-500" />
          <DiReact className="text-blue-500" />
          <DiNodejsSmall className="text-green-500" />
          <DiGithubBadge className="text-gray-600" />
        </div>
      </div>

      {/* Frontend section */}
      <div className="md:hidden relative group">
        <div
          className="w-full h-full -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg
              blur opacity-25 group-hover:opacity-100 transition-all duration-300 absolute"
        ></div>
        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
          <img
            draggable={false}
            className="rounded-lg md:max-w-[500px]"
            src={pr2}
            alt="project2"
          />
        </div>
      </div>

      <div className="text-white space-y-5 max-w-[500px]">
        <h2 className="text-2xl md:text-4xl font-extrabold">
          Frontend Experience
        </h2>
        <p className="  ">
          Experienced in creating modern, responsive web applications using the
          latest frontend technologies.
        </p>
        <div className="flex flex-wrap space-x-5 text-4xl justify-center">
          <DiHtml5 className="text-orange-600" />
          <DiCss3 className="text-blue-600" />
          <DiSass className="text-pink-600" />
          <DiBootstrap className="text-purple-600" />
          <DiJavascript1 className="text-yellow-500" />
          <DiReact className="text-blue-500" />
        </div>
      </div>

      <div className="md:block hidden group">
        <div
          className="w-full h-full -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg
              blur opacity-25 group-hover:opacity-100 transition-all duration-300 absolute"
        ></div>
        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
          <img
            draggable={false}
            className="rounded-lg md:max-w-[500px]"
            src={pr2}
            alt="project2"
          />
        </div>
      </div>

      {/* Full Stack section */}
      <div className="relative group">
        <div
          className="w-full h-full -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg
              blur opacity-25 group-hover:opacity-100 transition-all duration-300 absolute"
        ></div>
        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
          <img
            draggable={false}
            className="rounded-lg md:max-w-[500px]"
            src={pr3}
            alt="project3"
          />
        </div>
      </div>

      <div className="text-white space-y-5 max-w-[500px]">
        <h2 className="text-2xl md:text-4xl font-extrabold">
          Fullstack Experience
        </h2>
        <p className="  ">
          Skilled in developing end-to-end solutions using fullstack
          technologies.
        </p>
        <div className="flex flex-wrap space-x-5 text-4xl justify-center">
          <DiNodejsSmall className="text-green-500" />
          <DiMongodb className="text-green-600" />
          <DiReact className="text-blue-500" />
          <DiGithubBadge className="text-gray-600" />
        </div>
      </div>
    </div>
  );
};

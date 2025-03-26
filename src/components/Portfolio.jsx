import React, { useState } from "react";
import { DiGithubBadge } from "react-icons/di";
import { ShinyEffect } from "./ShinyEffect";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";

const projects = [
  {
    img: project1,
    title: "Project #1",
    description: "UI for frontend development using React.",
    links: {
      site: "#",
      github: "#",
      npm: "#",
    },
  },
  {
    img: project2,
    title: "Project #2",
    description: "A fullstack application built with Node.js and MongoDB.",
    links: {
      site: "#",
      github: "#",
      npm: "#",
    },
  },
  {
    img: project3,
    title: "Project #3",
    description: "A responsive website designed with modern CSS.",
    links: {
      site: "#",
      github: "#",
      npm: "#",
    },
  },
  {
    img: project4,
    title: "Project #4",
    description: "An e-commerce platform with various features.",
    links: {
      site: "#",
      github: "#",
      npm: "#",
    },
  },
  {
    img: project5,
    title: "Project #5",
    description: "A mobile-friendly application using React Native.",
    links: {
      site: "#",
      github: "#",
      npm: "#",
    },
  },
  {
    img: project6,
    title: "Project #6",
    description:
      "A data visualization project using D3.js and other libraries.",
    links: {
      site: "#",
      github: "#",
      npm: "#",
    },
  },
];

export const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);

  return (
    <div
      id="portfolio"
      className="relative max-w-[800px] mx-auto md:my-20 flex flex-col md:flex-row p-6"
    >
      <div className=" bg-white glass w-full border-2 max-w-[600px] h-full rounded-xl p-6 z-30">
        <div className="w-full h-80">
          <img
            className="w-full h-full object-cover rounded-lg mb-4"
            src={projects[currentProject].img}
            alt={projects[currentProject].img}
          />
        </div>
        <p className="text-lg md:text-xl text-white font-bold my-5">
          {projects[currentProject].description}
        </p>

        <div className="flex flex-row gap-4 my-5">
          <button className="bg-gray-600 px-5 py-3 text-sm md:text-xl text-white rounded-xl hover:bg-gray-500 transition duration-300">
            View Site
          </button>
          <button className="bg-slate-900/80 px-5 py-3 text-xl md:text-3xl text-white rounded-xl hover:bg-slate-800 transition duration-300">
            <DiGithubBadge className="text-white" />
          </button>
        </div>
      </div>

      <div className="absolute inset-0 flex justify-end items-center">
        <div className="hidden md:block">
          <ShinyEffect left={300} top={-100} size={650} />
          <ShinyEffect left={300} top={100} size={800} />
        </div>

        <div className="hidden md:flex flex-col gap-4 ml-10">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`${
                currentProject === index
                  ? "bg-slate-900/80 hover:bg-slate-900/80"
                  : "bg-gray-600"
              } max-w-[150px] p-3 text-white rounded-xl hover:bg-slate-800 transition duration-300`}
            >
              <h2 className="text-white text-xl">{project.title}</h2>
            </button>
          ))}
        </div>

        <div className="md:hidden absolute top-1/2 -translate-y-1/2 left-0 z-30">
          <button
            onClick={() => setCurrentProject((prev) => Math.max(prev - 1, 0))}
            disabled={currentProject === 0}
            className="bg-slate-900/80 p-2 text-white rounded-xl hover:bg-slate-800 transition duration-300"
          >
            <MdNavigateBefore size={30} className="text-white" />
          </button>
        </div>
        <div className="md:hidden absolute top-1/2 -translate-y-1/2 right-0 z-30">
          <button
            onClick={() =>
              setCurrentProject((prev) =>
                Math.min(prev + 1, projects.length - 1)
              )
            }
            disabled={currentProject === projects.length - 1}
            className="bg-slate-900/80 p-2 text-white rounded-xl hover:bg-slate-800 transition duration-300"
          >
            <MdNavigateNext size={30} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

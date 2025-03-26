import React, { useState } from "react";
import { DiGithubBadge } from "react-icons/di";
import { ShinyEffect } from "./ShinyEffect";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { CircleLoader } from "react-spinners";

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
    description: "UI for frontend using React.",
  },
  {
    img: project2,
    title: "Project #2",
    description: "Fullstack app with Node.js and MongoDB.",
  },
  {
    img: project3,
    title: "Project #3",
    description: "Responsive website with modern CSS.",
  },
  {
    img: project4,
    title: "Project #4",
    description: "E-commerce platform with various features.",
  },
  {
    img: project5,
    title: "Project #5",
    description: "Mobile app using React Native.",
  },
  {
    img: project6,
    title: "Project #6",
    description: "Data visualization using D3.js.",
  },
];

export const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleImageChange = (index) => {
    setIsLoading(true);
    setError(false);
    setCurrentProject(index);
  };

  return (
    <div
      id="portfolio"
      className="relative max-w-[800px] mx-auto md:my-20 flex flex-col md:flex-row p-6"
    >
      <div className="bg-white glass w-full border-2 max-w-[600px] h-full rounded-xl p-6 z-30">
        <div className="w-full h-80 flex items-center justify-center relative">
          {isLoading && !error && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse rounded-lg">
              <CircleLoader color="gray" size={80} speedMultiplier={1.5} />
            </div>
          )}

          {!error ? (
            <img
              className={`w-full h-full object-cover rounded-lg mb-4 transition-opacity duration-300 ${
                isLoading ? "opacity-0" : "opacity-100"
              }`}
              src={projects[currentProject].img}
              alt={projects[currentProject].title}
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false);
                setError(true);
              }}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-red-500">
              ❌ Failed to load image
            </div>
          )}
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
              disabled={project.img === projects[currentProject].img}
              onClick={() => handleImageChange(index)}
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
            onClick={() => handleImageChange(Math.max(currentProject - 1, 0))}
            disabled={currentProject === 0}
            className={`bg-slate-900/80 p-2 text-white rounded-xl transition duration-300 ${
              currentProject === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-slate-800"
            }`}
          >
            <MdNavigateBefore size={30} className="text-white" />
          </button>
        </div>
        <div className="md:hidden absolute top-1/2 -translate-y-1/2 right-0 z-30">
          <button
            onClick={() =>
              handleImageChange(
                Math.min(currentProject + 1, projects.length - 1)
              )
            }
            disabled={currentProject === projects.length - 1}
            className={`bg-slate-900/80 p-2 text-white rounded-xl transition duration-300 ${
              currentProject === projects.length - 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-slate-800"
            }`}
          >
            <MdNavigateNext size={30} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

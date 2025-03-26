import React from "react";
import { FaGithubSquare, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <div className="max-w-[1100px] mx-auto p-5 my-10 flex flex-col items-center space-y-5 md:flex-row md:items-start justify-between text-white">
      <div className="flex flex-col items-start space-y-3">
        <h3 className="text-lg md:text-2xl font-semibold">H.HARDRADA</h3>
        <ul className="flex flex-row gap-4">
          <li>
            <Link to="/">
              <FaGithubSquare
                className="hover:text-blue-500 transition duration-300"
                size={30}
              />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaInstagram
                className="hover:text-blue-500 transition duration-300"
                size={30}
              />
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg md:text-2xl font-semibold">@ 2025 H.HARDRADA</h3>
      </div>
    </div>
  );
};

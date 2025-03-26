import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const links = [
  {
    name: "About",
    href: "about",
  },
  {
    name: "Portfolio",
    href: "portfolio",
  },
  {
    name: "Contact",
    href: "contact",
  },
];

export const Nav = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [nav]);

  return (
    <nav className="max-w-[3000px] flex flex-row items-center justify-between px-10 py-10 text-white">
      <h3 className="md:flex text-xl md:text-2xl font-bold flex-1 hidden">
        Harald
      </h3>

      {links.map((link, index) => (
        <ul key={index} className="hidden md:flex px-5 text-lg">
          <li className="relative group">
            <Link
              className="hover:text-gray-400 cursor-pointer text-xl"
              smooth={true}
              offset={50}
              duration={500}
              to={link.href}
            >
              {link.name}
            </Link>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </li>
        </ul>
      ))}

      <div className="md:hidden fixed z-50 right-5 bg-white p-1 rounded-lg border backdrop-blur-xl bg-opacity-5">
        {nav ? (
          <AiOutlineClose
            onClick={() => setNav(false)}
            className="cursor-pointer"
            size={30}
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setNav(true)}
            className="cursor-pointer"
            size={30}
          />
        )}
      </div>

      <div
        className={`md:hidden fixed inset-0 py-52 z-40 bg-[linear-gradient(135deg,#282727,#201e1e)] translate-x-0 ${
          !nav
            ? "translate-x-full opacity-100 transition-opacity duration-300 -translate-y-7"
            : ""
        } transition-transform duration-500 ease-in-out space-y-10`}
      >
        {links.map((link, index) => (
          <ul key={index} className="flex flex-col items-center">
            <li className="relative group">
              <Link
                className="text-3xl font-extrabold"
                smooth={true}
                offset={50}
                duration={500}
                onClick={() => setNav(false)}
                to={link.href}
              >
                {link.name}
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </nav>
  );
};

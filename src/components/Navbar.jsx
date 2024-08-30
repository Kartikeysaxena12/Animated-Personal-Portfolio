import React from "react";
import logos from "../assets/k_logo.png";
import {
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutube,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="mb-8 flex items-center justify-between py-4">
        <div className="flex flex-shrink-0 items-center lg:items-start   ">
          <img
            className="text-neutral-400 w-12 lg:w-20"
            src={logos}
            alt="logo"
          />
        </div>
        <div className="m-16 flex items-center justify-center gap-4 text-2xl ">
          <a
            href="http://www.linkedin.com/in/kartikeya-saxena-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Kartikeysaxena12/Animated-Personal-Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white"
          >
            <FaGithubSquare />
          </a>
          <a
            href="https://twitter.com/KartikeyaS75363"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white"
          >
            <FaTwitterSquare />
          </a>
          <a
            href="https://www.instagram.com/kartikkofficialll/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white"
          >
            <FaInstagramSquare />
          </a>
          <a
            href="https://www.youtube.com/@KartikeyaSaxena14"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white"
          >
            <FaYoutube />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

/* import React from "react";
//import logo from "../assets/kartik_logo.webp";
//import log from "../assets/k_logo.png";
import logos from "../assets/kevinRushLogo.png";

import {
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutube,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className=" mb-8 flex items-center justify-between py-4">
        <div className="flex flex-shrink-0 items-center lg:items-start">
          <img className="w-12 text-neutral-400" src={logos} alt="logo" />
        </div>
        <div className="m-20 flex items-center justify-center gap-4 text-2xl ">
          <FaLinkedin />
          <FaGithubSquare />
          <FaTwitterSquare />
          <FaInstagramSquare />
          <FaYoutube />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
*/

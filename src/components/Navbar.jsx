import React from "react";
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

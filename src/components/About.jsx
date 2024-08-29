import React from "react";
import Kartiktwo from "../assets/Kartiktwo.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="border-p border-neutral-900 p-4">
      <h1 className="my-20 text-center justify-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap ">
        <div className="lg:w-1/2 w-full lg:p-8">
          <div className="flex items-center justify-center">
            <img src={Kartiktwo} alt="about" className="rounded-2xl w-10/12" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 ">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-36 font-light tracking-tight">
              {ABOUT_TEXT}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

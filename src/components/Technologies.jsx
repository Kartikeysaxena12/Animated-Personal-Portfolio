import React from "react";
import { RiReactjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsFill className="text-7xl text-cyan-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiMongodb className="text-7xl text-green-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaJs className="text-7xl text-yellow-400 " />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaHtml5 className="text-7xl text-orange-500 bg-neutral-200" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssFill className="text-7xl text-cyan-500" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;

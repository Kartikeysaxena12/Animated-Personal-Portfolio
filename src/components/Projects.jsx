import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-p border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl text-neutral-400 my-20"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 mt-8 flex flex-wrap lg:justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 "
            >
              <img
                src={project.image}
                width={250}
                height={150}
                alt={project.title}
                className="rounded-lg sm:justify-center"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl  lg:w-3/4"
            >
              <h6 className="mb-2 mt-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded-md bg-neutral-900  py-1 text-sm p-2 font-semibold text-neutral-300 hover:text-neutral-900 hover:bg-purple-500 hover:font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-10 m-8">
                <h5 className="font-semibold text-neutral-400">
                  Available on:
                </h5>
                <ul className="list-disc pl-4">
                  {project.Links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-300 hover:text-purple-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

{
  /*<div>
{EXPERIENCES.map((experience, index) => (
  <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
    <div className="w-full w-1/4">
      <p className="mb-2 p-2 text-sm text-neutral-400">
        {experience.year}
      </p>
    </div>
    <div className="max-w-xl w-full lg:w-3/4 px-4 ">
      <h6 className="mb-2 font-semibold">
        {experience.role} -{" "}
        <span className="text-sm text-purple-100">
          {experience.company}
        </span>
      </h6>
      <p className="mb-4 font-semibold text-neutral-300">
        {experience.description}
      </p>
      {experience.technologies.map((tech, index) => (
        <span
          key={index}
          className="mr-2  bg-neutral-900  rounded-md text-sm font-medium text-purple-500 hover:text-neutral-900 hover:bg-purple-500 hover:font-semibold"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
))}
</div> */
}

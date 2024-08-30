import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
const Experience = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="text-center text-neutral-400 p-8 text-4xl"
      >
        Experience
      </motion.h1>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-12 flex flex-col sm:flex-row items-start mt-4"
          >
            <div className="w-full sm:w-40 text-left sm:text-right pr-0 sm:pr-8 mb-2 sm:mb-0">
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="text-sm text-neutral-400"
              >
                {experience.year}
              </motion.p>
            </div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="flex-1 max-w-xl pl-0 sm:pl-8"
            >
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 font-semibold text-neutral-300">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-neutral-900 rounded-md text-sm font-medium text-neutral-300 hover:text-neutral-900 hover:bg-neutral-300 hover:font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

/*import React from "react";
import { EXPERIENCES } from "../constants";


const Experience = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <h1 className="text-center text-neutral-400 p-8 text-4xl">Experience</h1>
      <div className="max-w-4xl mx-auto">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full w-1/4">
              <p className=" mb-2 text-sm text-neutral-400 ">
                {experience.year}
              </p>
            </div>
            <div className="max-w-xl w-full lg:w-3/4 p-4 ">
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
      </div>
    </div>
  );
};


export default Experience; */

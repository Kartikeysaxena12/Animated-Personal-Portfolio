import React from "react";
import { MUSIC } from "../constants/index";

const Music = () => {
  return (
    <div className="border-p border-neutral-900 pb-4">
      <h1 className="text-center text-4xl text-neutral-400 my-20">Music</h1>
      <div>
        {MUSIC.map((music, index) => (
          <div
            key={index}
            className="mb-8 mt-8 flex flex-wrap lg:justify-center"
          >
            <div className="w-full lg:w-1/4 ">
              <img
                src={music.image}
                width={200}
                height={150}
                alt={music.title}
                className="rounded-lg sm:justify-center"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 mt-3 font-semibold">{music.title}</h6>
              <p className="mb-4 text-neutral-400">{music.description}</p>
              <div className="flex flex-wrap gap-2">
                {music.setup.map((set, index) => (
                  <span
                    key={index}
                    className=" rounded-md bg-neutral-900   text-sm  font-semibold text-neutral-300
                  p-2 hover:text-neutral-900 hover:bg-purple-500 hover:font-semibold"
                  >
                    {set}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-10 m-8">
              <h5 className="font-semibold text-neutral-400">Available on:</h5>
              <ul className="list-disc pl-4">
                {music.Links.map((link, index) => (
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music;

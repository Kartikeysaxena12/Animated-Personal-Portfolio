import React from "react";
import { FaFilePdf } from "react-icons/fa"; // Import the icon here
import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <>
      <div className="border-b border-neutral-900 pb-2">
        <h1 className="text-center text-4xl my-10">Get In Touch</h1>
        <div className="tracking-tighter text-center pb-4">
          <p className="my-4">
            {CONTACT.Resume.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-purple-300"
              >
                <FaFilePdf className="inline-block mr-1 mb-1" />
                {link.name}
              </a>
            ))}
          </p>

          <a href={`mailto:${CONTACT.email}`} className="border-b">
            {CONTACT.email}
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;

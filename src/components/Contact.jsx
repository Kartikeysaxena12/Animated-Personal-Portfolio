import React from "react";
import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <>
      <div className="border-b border-neutral-900 pb-2">
        <h1 className="text-center text-4xl my-10 ">Get In Touch</h1>
        <div className="tracking-tighter text-center pb-4">
          <p className="my-4">{CONTACT.address}</p>
          <p className="my-4">{CONTACT.phoneNo}</p>
          <a href="#" className="border-b">
            {CONTACT.email}
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;

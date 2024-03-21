import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Navbar from "../../components/navbar/navbar";
import Skills from "../skills/skills";
import Projects from "../projects/projects";
import Contacts from "../contacts/contatcs";
import bg8bit from "../../assets/8bit-wallpaper.jpg";
import "../homepage/homepage.css";

const Homepage = () => {
  const [isShowing] = useState(true);
  return (
    <div className="mt-20">
      <div className="bg-gradient-to-b from-sky-50 via-sky-200 to-sky-300">
        <Navbar />
        <div className="flex" style={{ height: "600px" }}>
          <div className="flex sm:mb-auto sm:mt-auto items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
            <div>
              <Transition appear={true} show={isShowing}>
                <Transition.Child
                  enter="transition-opacity duration-1000"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                >
                  <h2 className="text-4xl font-semibold text-gray-800 md:text-4xl">
                    Hello, Im
                  </h2>
                    <p
                      data-glitch="Rizki Bagus Farizi"
                      className="glitch"
                    >
                      Rizki Bagus Farizi
                    </p>
                </Transition.Child>
                <Transition.Child
                  enter="transition-opacity duration-1000"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                >
                  <p className="mt-5 text-base/loose text-justify text-gray-500 md:text-base/loose lg:text-lg">
                    As a budding web developer MERN Stack, foundational
                    expertise in JavaScript-based website development has been
                    acquired. Proficiency extends to frontend development using
                    React.js and Tailwind CSS, Bootstrap CSS and Flowbite CSS
                    for styling, facilitating the crafting of engaging user
                    experiences. Currently, exploration into backend
                    technologies, such as Express, MongoDB, and PostgreSQL is
                    underway. Over the past year, Two independent website
                    projects have been completed, showcasing commitment to
                    practical application and continuous growth in this field.
                  </p>
                  <div className="flex justify-center lg:justify-start mt-6">
                    <a
                      className="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800"
                      href="#contact"
                    >
                      Contact Me
                    </a>
                    <a
                      className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400"
                      href="https://drive.google.com/uc?export=download&id=10a7OEi-fXyM2cimAo_uwKOpf3jBMUY-p"
                    >
                      Resume
                    </a>
                  </div>
                </Transition.Child>
              </Transition>
            </div>
          </div>
          <div
            className="hidden lg:block lg:w-1/2"
            style={{ clipPath: "polygon(23% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          >
            <div className="h-full w-full">
              <img src={bg8bit} className="h-full" />
              <div className="h-full bg-black opacity-25"></div>
            </div>
          </div>
        </div>
        <Skills />
        <Projects />
        <Contacts />
      </div>
    </div>
  );
};

export default Homepage;

import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import enighstore from "../../assets/Thumbnail-Enigh-Store-Page.jpg";
import portfolio from "../../assets/Thumnail-Portfolio.jpg";
import { FaReact } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";

const Projects = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h1
          className="sm:mb-10 sm:text-3xl lg:mb-3 text-2xl font-medium title-font font-boldmb-4 text-gray-900"
          id="projects"
        >
          Projects
        </h1>
      </div>
      <div className="md:mt-28">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <img
              alt="..."
              className="max-w-full rounded-lg shadow-lg"
              src={enighstore}
            />
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md: pr-12">
              <h3 className="sm: mt-10 text-2xl font-semibold">
                Enigh Store PC Shop
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                E-Store is a full-stack web development project aimed at
                creating an online store platform using the MERN stack –
                MongoDB, Express.js, React.js, and Node.js. This project
                leverages various technologies including PostgreSQL for the
                database, Bootstrap for styling, and a combination of HTML, CSS,
                and JavaScript for front-end and user interaction.
              </p>
              <ul className="list-none mt-6 ">
                <div className="flex">
                  <FaReact size={30} style={{ marginRight: "10px" }} />
                  <FaHtml5 size={30} style={{ marginRight: "10px" }} />
                  <FaCss3Alt size={30} style={{ marginRight: "10px" }} />
                  <IoLogoJavascript size={30} style={{ marginRight: "10px" }} />
                  <FaBootstrap size={30} style={{ marginRight: "10px" }} />
                  <SiExpress size={30} style={{ marginRight: "10px" }} />
                  <BiLogoPostgresql size={30} style={{ marginRight: "10px" }} />
                  <FaNode size={30} style={{ marginRight: "10px" }} />
                </div>
                <div className="text-black-600 p-3 text-center inline-flex items-center justify-center w-50 h-10 mb-6 shadow-lg rounded-lg bg-white mt-8">
                  <p
                    href="https://enighander-store-fe-trial.vercel.app/home"
                    className="fas fa-rocket text-xl sm:text-sm"
                  >
                    Link Here
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 ml-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                  <div className="ml-5 flex m-5">
                    <a href="https://github.com/Enighander/Enighander-Store-FE-Trial">
                      <FaGithub className="size-7 m-3" />
                    </a>
                    <a href="https://enighander-store-fe-trial.vercel.app/home">
                      <IoLogoVercel className="size-7 m-3" />
                    </a>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="md:mt-28">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <img
              alt="..."
              className="max-w-full rounded-lg shadow-lg"
              src={portfolio}
            />
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md: pr-12">
              <h3 className="sm: mt-5 text-2xl font-semibold">My Portfolio</h3>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                My Portfolio Website is a web development project focused on
                building a personal portfolio platform using HTML, JavaScript,
                React.js, and Tailwind CSS The project aims to showcase skills,
                projects, and experiences in a visually appealing and
                interactive manner. Key features include a modern design,
                responsive layout, portfolio showcase, about me page, contact
                form, skill showcase and interactive elements. The technologies
                used ensure fast build times, efficient styling, and seamless
                user experience across devices.
              </p>
              <ul className="list-none mt-6 ">
                <div className="flex">
                <FaReact size={30} style={{ marginRight: "10px" }} />
                <FaHtml5 size={30} style={{ marginRight: "10px" }} />
                <FaCss3Alt size={30} style={{ marginRight: "10px" }} />
                <IoLogoJavascript size={30} style={{ marginRight: "10px" }} />
                <SiTailwindcss size={30} style={{ marginRight: "10px" }}/>
                </div>
                <div className="text-black-600 p-3 text-center inline-flex items-center justify-center w-50 h-10 mb-6 shadow-lg rounded-lg bg-white mt-8">
                  <p
                    href="https://enighander-store-fe-trial.vercel.app/home"
                    className="fas fa-rocket text-xl sm:text-sm"
                  >
                    Link Here
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 ml-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                  <div className="ml-5 flex m-5">
                    <a href="https://github.com/Enighander/Enighander-Store-FE-Trial">
                      <FaGithub className="size-7 m-3" />
                    </a>
                    <a href="https://enighander-store-fe-trial.vercel.app/home">
                      <IoLogoVercel className="size-7 m-3" />
                    </a>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

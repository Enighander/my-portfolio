import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import Image1 from "../../assets/Thumbnail-Enigh-Store-Page.jpg";
import Image2 from "../../assets/nodejs_logo-removebg-preview.png";
import Image3 from "../../assets/React_Logo-removebg-preview.png";
import Image4 from "../../assets/PostgreSQL_logo-removebg-preview.png";
import Image5 from "../../assets/HTML-CSS-JS.png";
import Image6 from "../../assets/Express.png";

const Projects = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="sm:text-3xl text-2xl font-medium title-font font-boldmb-4 text-gray-900">
          Projects
        </h1>
      </div>
      <div className="md:mt-28">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <img
              alt="..."
              className="max-w-full rounded-lg shadow-lg"
              src={Image1}
            />
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md: pr-12">
              <h3 className="sm: mt-5 text-3xl font-semibold">
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
              <ul className="list-none mt-6">
                <div className="flex size-20 w-full">
                <img src={Image2} />
                <img src={Image3} />
                <img src={Image4} />
                <img src={Image5} />
                <img src={Image6} />
                </div>
                <div className="text-black-600 p-3 text-center inline-flex items-center justify-center w-50 h-10 mb-6 shadow-lg rounded-lg bg-white mt-8">
                  <p
                    href="https://enighander-store-fe-trial.vercel.app/home"
                    className="fas fa-rocket text-xl"
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

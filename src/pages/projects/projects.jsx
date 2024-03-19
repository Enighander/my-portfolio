import React, { useState } from "react";
import enighstore from "../../assets/Thumbnail-Enigh-Store-Page.png";
import portfolio from "../../assets/Thumnail-Portfolio.png";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNode,
  FaGithub,
} from "react-icons/fa";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import { IoLogoVercel, IoLogoJavascript } from "react-icons/io5";
import { Transition } from "@headlessui/react";
import { InView } from "react-intersection-observer";
import { BiLogoPostgresql } from "react-icons/bi";

const projectsData = [
  {
    id: 1,
    title: "Enigh Store PC Shop",
    description: `E-Store is a full-stack web development project aimed at creating an online 
    store platform using the MERN stack – MongoDB, Express.js, React.js, and Node.js. 
    This project leverages various technologies including PostgreSQL for the database, 
    Bootstrap for styling, and a combination of HTML, CSS, 
    and JavaScript for front-end and user interaction.`,
    technologies: [
      { icon: <FaReact />, name: "React" },
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3Alt />, name: "CSS3" },
      { icon: <IoLogoJavascript />, name: "JavaScript" },
      { icon: <FaBootstrap />, name: "Bootstrap" },
      { icon: <SiExpress />, name: "Express.js" },
      { icon: <BiLogoPostgresql />, name: "PostgreSQL" },
      { icon: <FaNode />, name: "Node.js" },
    ],
    githubLink: "https://github.com/Enighander/Enighander-Store-FE-Trial",
    demoLink: "https://enighander-store-fe-trial.vercel.app/home",
    imageSrc: enighstore,
  },
  {
    id: 2,
    title: "My Portfolio",
    description: `My Portfolio Website is a web development project focused on
    building a personal portfolio platform using HTML, JavaScript,
    React.js, and Tailwind CSS The project aims to showcase skills,
    projects, and experiences in a visually appealing and
    interactive manner. Key features include a modern design,
    responsive layout, portfolio showcase, about me page, contact
    form and skill showcase. The technologies
    used ensure fast build times, efficient styling, and seamless
    user experience across devices.`,
    technologies: [
      { icon: <FaReact />, name: "React" },
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3Alt />, name: "CSS3" },
      { icon: <IoLogoJavascript />, name: "JavaScript" },
      { icon: <SiTailwindcss />, name: "Tailwind" },
      { icon: <FaNode />, name: "Node.js" },
    ],
    githubLink: "https://github.com/Enighander/my-portfolio",
    demoLink: "https://my-portfolio-ringgo.vercel.app/homepage",
    imageSrc: portfolio,
  },
];

const Projects = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h1
          className="sm:mb-10 sm:text-3xl lg:mb-0 text-2xl font-medium title-font font-bold mb-4 text-gray-900"
          id="projects"
        >
          Projects
        </h1>
      </div>
      <div className="flex flex-wrap items-start">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const [inView, setInView] = useState(false);

  return (
    <InView onChange={setInView}>
      {({ ref }) => (
        <div ref={ref} className="w-full lg:w-5/12 ml-auto mr-auto px-4">
          <Transition.Root show={inView}>
            <Transition.Child
              as="div"
              enter="transition duration-1000"
              enterFrom="opacity-0 -translate-x-full"
              enterTo="opacity-100 translate-x-0"
            >
              <img
                src={project.imageSrc}
                alt="..."
                className="max-w-full sm:mt-5 rounded-lg shadow-lg"
              />
            </Transition.Child>
          </Transition.Root>
          <ProjectInfo project={project} />
        </div>
      )}
    </InView>
  );
};

const ProjectInfo = ({ project }) => {
  return (
    <div className="md:pr-12">
      <h3 className="sm:mt-10 text-2xl font-semibold">{project.title}</h3>
      <div className="w-full ">
        <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
          {project.description}
        </p>
      </div>
      <ul className="list-none mt-6">
        <div className="flex mt-auto">
          {project.technologies.map((tech, index) => (
            <div key={index}>
              {tech.icon &&
                React.cloneElement(tech.icon, { className: "w-8 h-8 mr-2" })}
            </div>
          ))}
        </div>
        <div className="text-black-600 p-3 text-center inline-flex items-center justify-center w-50 h-10 mb-6 shadow-lg rounded-lg bg-white mt-8">
          <p className="fas fa-rocket text-xl sm:text-sm">Link Here</p>
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
            <a href={project.githubLink}>
              <FaGithub className="size-7 m-3" />
            </a>
            <a href={project.demoLink}>
              <IoLogoVercel className="size-7 m-3" />
            </a>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Projects;

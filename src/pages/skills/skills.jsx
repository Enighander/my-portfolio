import React from "react";
import Image1 from "../../assets/HTML-CSS-JS.png";
import Image2 from "../../assets/MongoDB_logo-removebg-preview.png";
import Image3 from "../../assets/Express.png";
import Image4 from "../../assets/React_Logo-removebg-preview.png";
import Image5 from "../../assets/nodejs_logo-removebg-preview.png";
import Image6 from "../../assets/tailwindcss_logo_icon_170649.png";
import Image7 from "../../assets/PostgreSQL_logo-removebg-preview.png";
import Image8 from "../../assets/postman_macos_bigsur_icon_189815.png";
import Image9 from "../../assets/mysql_original_wordmark_logo_icon_146417.png";
import Image10 from "../../assets/figma_macos_bigsur_icon_190183.png";
import Image11 from "../../assets/redis_original_wordmark_logo_icon_146369.png";
import Image12 from "../../assets/github_original_wordmark_logo_icon_146506.png";
import Image13 from "../../assets/vite-js-512-logo.png";

const skillsData = [
  {
    id: 1,
    name: "HTML CSS JavaScript",
    description:
      "As a web developer, I possess a strong command of HTML, CSS, and JavaScript, the fundamental building blocks of modern web development.",
    imageSrc: Image1,
  },
  {
    id: 2,
    name: "MongoDB",
    description: ` I'm skilled in MongoDB, a versatile NoSQL database. I use
    MongoDB to store and organize data in a document format,
    making querying and indexing fast and efficient.`,
    imageSrc: Image2,
  },
  {
    id: 3,
    name: "Express.js",
    description: `I'm proficient in Express.js, a framework for building web
    applications with Node.js. Using Express.js, I create
    server-side applications, manage routing, integrate
    middleware, and interact with databases smoothly.`,
    imageSrc: Image3,
  },
  {
    id: 4,
    name: "React.js",
    description: ` I am proficient in React.js, a popular JavaScript library
    for building user interfaces. With React.js, I create
    dynamic and interactive frontend components, facilitating
    the development of fast and scalable web applications.`,
    imageSrc: Image4,
  },
  {
    id: 5,
    name: "Node.js",
    description: `I am proficient in Node.js, a powerful JavaScript runtime
    environment. With Node.js, I develop server-side
    applications, APIs, and real-time web applications
    efficiently.`,
    imageSrc: Image5,
  },
  {
    id: 6,
    name: "Tailwind CSS",
    description: ` I am skilled in Tailwind CSS, a utility-first CSS framework
    that enables rapid UI development with a focus on
    flexibility and maintainability. With Tailwind CSS, I
    streamline the styling process by utilizing pre-defined
    utility classes to build responsive and customizable user
    interfaces efficiently.`,
    imageSrc: Image6,
  },
  {
    id: 7,
    name: "PostgreSQL",
    description: ` I am proficient in PostgreSQL, a powerful open-source
    relational database management system. With PostgreSQL, I
    design and manage robust databases for web applications,
    ensuring data integrity, scalability, and performance.`,
    imageSrc: Image7,
  },
  {
    id: 8,
    name: "Postman",
    description: `I am proficient in Postman, a powerful tool for testing and
    debugging APIs. With Postman, I streamline the development
    process by creating and automating API requests, allowing
    for efficient testing and validation of endpoints.`,
    imageSrc: Image8,
  },
  {
    id: 9,
    name: "PostgreSQL",
    description: `possess a strong command of MySQL, a popular open-source
    relational database management system. With MySQL, I design
    and manage databases for web applications, ensuring
    efficient data storage, retrieval, and management.`,
    imageSrc: Image9,
  },
  {
    id: 10,
    name: "Figma",
    description: `As a web developer, I'm beginning to explore Figma, a
    user-friendly design tool for creating interfaces and
    prototypes. While my focus lies primarily in web
    development, I use Figma to collaborate with designers and
    translate their concepts into code.`,
    imageSrc: Image10,
  },
  {
    id: 11,
    name: "Redis",
    description: `I am proficient in Redis, an in-memory data structure store
    known for its speed and versatility. With Redis, I implement
    caching solutions to optimize performance in web
    applications, reducing database load and response times.`,
    imageSrc: Image11,
  },
  {
    id: 12,
    name: "GitHub",
    description: `I am skilled in GitHub, I manage code repositories, track
    changes, and collaborate with team members effectively
    through features such as pull requests, code reviews, and
    issue tracking.`,
    imageSrc: Image12,
  },
  {
    id: 13,
    name: "Vite",
    description: `I am skilled in Vite.js, a modern build tool that focuses on
    fast development server and instant hot module replacement
    (HMR). With Vite.js, I streamline the development workflow
    by providing a lightning-fast development experience,
    enabling quick iteration and feedback cycles.`,
    imageSrc: Image13,
  },
];

const Skills = () => {
  return (
    <div className="sm:mt-32">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full">
            <h1
              className="sm:mb-10 sm:text-3xl text-2xl font-medium title-font font-bold text-gray-900"
              id="skills"
            >
              Skills
            </h1>
          </div>
          <div className="flex flex-wrap">
            {skillsData.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const SkillCard = ({ skill }) => {
  return (
    <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative sm:min-h-32 xl:min-h-40">
        <img
          alt={skill.name}
          className="absolute inset-0 w-full h-full object-contain object-center sm:max-h-full lg:max-h-70"
          src={skill.imageSrc}
          style={{
            maxWidth: "100%",
            maxHeight: "60%",
          }}
        />
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 lg:block sm:hidden">
          <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
            {skill.name}
          </h2>
          <p className="leading-relaxed ">{skill.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;

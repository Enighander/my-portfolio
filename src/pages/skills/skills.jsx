import React from "react";
import Image1 from "../../assets/HTML-CSS-JS.png";
import Image2 from "../../assets/PostgreSQL_logo-removebg-preview.png";
import Image3 from "../../assets/Express.png";
import Image4 from "../../assets/MongoDB_logo-removebg-preview.png";
import Image5 from "../../assets/React_Logo-removebg-preview.png";
import Image6 from "../../assets/nodejs_logo-removebg-preview.png";
import Image7 from "../../assets/postman_macos_bigsur_icon_189815.png";
import Image8 from "../../assets/mysql_original_wordmark_logo_icon_146417.png";
import Image9 from "../../assets/figma_macos_bigsur_icon_190183.png";
import Image10 from "../../assets/redis_original_wordmark_logo_icon_146369.png";
import Image11 from "../../assets/github_original_wordmark_logo_icon_146506.png";
import Image12 from "../../assets/vite-js-512-logo.png";
import Image13 from "../../assets/tailwindcss_logo_icon_170649.png";

const Skills = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1
              className="sm:text-3xl text-2xl font-medium title-font font-boldmb-4 text-gray-900"
              id="skills"
            >
              Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4  ">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative sm:min-h-32 xl:min-h-40">
                <img
                  alt="HTML-CSS-JS"
                  className="absolute inset-0 w-full h-full object-contain object-center sm:max-h-full lg:max-h-70"
                  src={Image1}
                  style={{
                    maxWidth: "100%", 
                    maxHeight: "70%"
                  }}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 lg:block sm:hidden">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    HTML CSS JavaScript
                  </h2>
                  <p className="leading-relaxed ">
                    As a web developer, I possess a strong command of HTML, CSS,
                    and JavaScript, the fundamental building blocks of modern
                    web development.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative sm:min-h-32 xl:min-h-40">
                <img
                  alt="Express"
                  className="absolute inset-0 w-full h-full object-contain object-center lg:max-h-80 sm:max-h-full"
                  src={Image3}
                  style={{ 
                    maxWidth: "100%", 
                    maxHeight: "70%"
                  }}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 lg:block sm:hidden">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    {" "}
                    Express.Js
                  </h2>
                  <p className="leading-relaxed">
                    I'm proficient in Express.js, a framework for building web
                    applications with Node.js. Using Express.js, I create
                    server-side applications, manage routing, integrate
                    middleware, and interact with databases smoothly.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative sm:min-h-32 xl:min-h-40">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center lg:max-h-80 sm:max-h-full"
                  src={Image4}
                  style={{ 
                    maxWidth: "100%", 
                    maxHeight: "70%"
                  }}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 lg:block sm:hidden">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    MongoDB
                  </h2>
                  <p className="leading-relaxed">
                    I'm skilled in MongoDB, a versatile NoSQL database. I use
                    MongoDB to store and organize data in a document format,
                    making querying and indexing fast and efficient.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative sm:min-h-32 xl:min-h-40">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center lg:max-h-80 sm:max-h-full"
                  src={Image5}
                  style={{ 
                    maxWidth: "100%", 
                    maxHeight: "70%"
                  }}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 lg:block sm:hidden">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    React.Js
                  </h2>

                  <p className="leading-relaxed">
                    I am proficient in React.js, a popular JavaScript library
                    for building user interfaces. With React.js, I create
                    dynamic and interactive frontend components, facilitating
                    the development of fast and scalable web applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative sm:min-h-32 xl:min-h-40">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center lg:max-h-80 sm:max-h-full"
                  src={Image6}
                  style={{ 
                    maxWidth: "100%", 
                    maxHeight: "70%"
                  }}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 lg:block sm:hidden">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Node.Js
                  </h2>
                  <p className="leading-relaxed">
                    I am proficient in Node.js, a powerful JavaScript runtime
                    environment. With Node.js, I develop server-side
                    applications, APIs, and real-time web applications
                    efficiently.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative sm:min-h-32 xl:min-h-40">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center lg:max-h-80 sm:max-h-full"
                  src={Image2}
                  style={{ 
                    maxWidth: "100%", 
                    maxHeight: "70%"
                  }}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 lg:block sm:hidden">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    PostgreSQL
                  </h2>
                  <p className="leading-relaxed ">
                    I am proficient in PostgreSQL, a powerful open-source
                    relational database management system. With PostgreSQL, I
                    design and manage robust databases for web applications,
                    ensuring data integrity, scalability, and performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative sm:min-h-32 xl:min-h-40">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center lg:max-h-80 sm:max-h-full"
                  src={Image7}
                  style={{ 
                    maxWidth: "100%", 
                    maxHeight: "70%"
                  }}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 lg:block sm:hidden">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Postman
                  </h2>
                  <p className="leading-relaxed">
                    I am proficient in Postman, a powerful tool for testing and
                    debugging APIs. With Postman, I streamline the development
                    process by creating and automating API requests, allowing
                    for efficient testing and validation of endpoints.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative sm:min-h-32 xl:min-h-40">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center lg:max-h-80 sm:max-h-full"
                  src={Image13}
                  style={{
                  maxWidth: "100%", 
                  maxHeight: "70%"
                  }}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 lg:block sm:hidden">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Tailwind CSS
                  </h2>
                  <p className="leading-relaxed">
                    I am skilled in Tailwind CSS, a utility-first CSS framework
                    that enables rapid UI development with a focus on
                    flexibility and maintainability. With Tailwind CSS, I
                    streamline the styling process by utilizing pre-defined
                    utility classes to build responsive and customizable user
                    interfaces efficiently.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative sm:min-h-32 xl:min-h-40">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center lg:max-h-80 sm:max-h-full"
                  src={Image8}
                  style={{ 
                    maxWidth: "100%", 
                    maxHeight: "70%"
                  }}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 lg:block sm:hidden">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    MySQL
                  </h2>
                  <p className="leading-relaxed">
                    possess a strong command of MySQL, a popular open-source
                    relational database management system. With MySQL, I design
                    and manage databases for web applications, ensuring
                    efficient data storage, retrieval, and management.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative sm:min-h-32 xl:min-h-40">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center lg:max-h-80 sm:max-h-full"
                  src={Image9}
                  style={{ 
                    maxWidth: "100%", 
                    maxHeight: "70%"
                  }}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 lg:block sm:hidden">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Figma
                  </h2>
                  <p className="leading-relaxed">
                    As a web developer, I'm beginning to explore Figma, a
                    user-friendly design tool for creating interfaces and
                    prototypes. While my focus lies primarily in web
                    development, I use Figma to collaborate with designers and
                    translate their concepts into code.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative sm:min-h-32 xl:min-h-40">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center lg:max-h-80 sm:max-h-full"
                  src={Image10}
                  style={{ 
                    maxWidth: "100%", 
                    maxHeight: "70%"
                  }}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 lg:block sm:hidden">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Redis
                  </h2>
                  <p className="leading-relaxed">
                    I am proficient in Redis, an in-memory data structure store
                    known for its speed and versatility. With Redis, I implement
                    caching solutions to optimize performance in web
                    applications, reducing database load and response times.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative sm:min-h-32 xl:min-h-40">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center lg:max-h-80 sm:max-h-full"
                  src={Image11}
                  style={{ 
                    maxWidth: "100%", 
                    maxHeight: "70%"
                  }}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 lg:block sm:hidden">
                  <h2 className="tracking-widest text-sm title-font font-small text-indigo-500 mb-1">
                    GitHub
                  </h2>
                  <p className="leading-relaxed">
                    I am skilled in GitHub, I manage code repositories, track
                    changes, and collaborate with team members effectively
                    through features such as pull requests, code reviews, and
                    issue tracking.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative sm:min-h-32 xl:min-h-40">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center"
                  src={Image12}
                  style={{ 
                    maxWidth: "100%", 
                    maxHeight: "70%"
                  }}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 lg:block sm:hidden">
                  <h2 className="tracking-widest text-sm title-font font-small text-indigo-500 mb-1">
                    Vite.js
                  </h2>
                  <p className="leading-relaxed">
                    I am skilled in Vite.js, a modern build tool that focuses on
                    fast development server and instant hot module replacement
                    (HMR). With Vite.js, I streamline the development workflow
                    by providing a lightning-fast development experience,
                    enabling quick iteration and feedback cycles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;

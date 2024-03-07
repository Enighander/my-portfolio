import React from "react";
import Image1 from "../../assets/HTML-CSS-JS.png";
import Image2 from "../../assets/PostgreSQL_logo-removebg-preview.png";
import Image3 from "../../assets/Express.png";
import Image4 from "../../assets/MongoDB_logo-removebg-preview.png";
import Image5 from "../../assets/React_Logo-removebg-preview.png";
import Image6 from "../../assets/nodejs_logo-removebg-preview.png";

const Skills = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font font-boldmb-4 text-gray-900">
              Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center"
                  src={Image1}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    HTML CSS JavaScript
                  </h2>
                  <p className="leading-relaxed">
                    As a web developer, I possess a strong command of HTML, CSS,
                    and JavaScript, the fundamental building blocks of modern
                    web development.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center"
                  src={Image3}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
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
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center"
                  src={Image4}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
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
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center"
                  src={Image5}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
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
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center"
                  src={Image6}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
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
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center"
                  src={Image2}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    PostgreSQL
                  </h2>
                  <p className="leading-relaxed">
                    I am proficient in PostgreSQL, a powerful open-source
                    relational database management system. With PostgreSQL, I
                    design and manage robust databases for web applications,
                    ensuring data integrity, scalability, and performance.
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

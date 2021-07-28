import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto lg:px-40">
        <div className="flex flex-col w-full mb-16 text-center">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-white">
            Work I've Done
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here is some of the work Matthew's done recently. I added different types of Web Development work below. If you'd like to see some of Matthew's UX/UI & Graphic Design work, visit his <a className='underline text-green-500' href="https://www.behance.net/matthewrapp" rel="noopener noreferrer" target='_blank'>Behance Profile</a>.
          </p>
        </div>
        <div>
          {/* <h3 className="title-font text-white text-1xl sm:text2xl mb-6 pl-2">Development Projects</h3> */}
          <div className="flex flex-wrap -m-4 text-center mb-6">
            {projects.map((project) => (
              <a
                href={project.link}
                key={project.image}
                target='_blank'
                className="sm:w-1/2 w-100 p-4">
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full 2xl:h-full xl:h-full lg:h-full md:h-full sm:h-5/6 object-cover object-center"
                    src={project.image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* <div>
          <h3 className="title-font text-white text-1xl sm:text2xl mb-6 pl-2">UX/UI Projects</h3>
          <div className="flex flex-wrap -m-4 text-center">
            {uxprojects.map((project) => (
              <a
                href={project.link}
                key={project.image}
                className="sm:w-1/2 w-100 p-4">
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={project.image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div> */}

      </div>
    </section>
  );
}
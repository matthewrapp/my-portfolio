import React from "react";

export default function About() {
   return (
      <section id="about">
         <div className="container mx-auto flex px-10 py-16 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
               <h1 className="title-font sm:text-4xl text-3xl mb-2 font-bold text-white">
                  Matthew Rapp
                  <br className="hidden lg:inline-block" />
               </h1>
               <h3 className="title-font text-white text-1xl sm:text2xl mb-4">
                  Software Engineer
               </h3>
               {/* <p className="mb-8 leading-relaxed">
                  Dedicated full-stack developer / software engineer with a
                  desire to learn and grow. After working as a full stack
                  developer for Luminary Apps, I am looking for another
                  opportunity to surround myself with professional, experienced
                  engineers and to work for a company that makes a positive
                  impact within their given industry.
               </p> */}
               <p className="mb-8 leading-relaxed">
                  Currently working as a full-time software engineer for
                  Luminary Apps. December 2021, I graduated from BYU-Idaho with
                  a Bachelors of Science degree, emphasis Web Development &
                  Computer Science. I love to create software, finding ways to
                  improve my life and the life of someone else through different
                  technologies and software is something I enjoy. I also love to
                  write and produce music. You can listen to my music{" "}
                  <a
                     href="https://listen.mvttmusic.com/platforms"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-green-500 underline"
                  >
                     MVTT
                  </a>{" "}
                  if you'd like! This gives me more opportunities to be
                  creative, work with others, and strengthen my leadership and
                  communication skills.
               </p>
               <div className="flex justify-center">
                  <a
                     href="#projects"
                     className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
                  >
                     See Past Work
                  </a>
                  {/* <a
              href="#contact"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Contact Matthew
            </a> */}
               </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
               <img
                  className="object-cover object-center rounded lg:float-right md:float-right sm:float-none lg:w-3/4"
                  alt="hero"
                  src="./mattrapp-pic1.JPG"
               />
            </div>
         </div>
      </section>
   );
}

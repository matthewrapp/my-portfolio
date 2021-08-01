// import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="#about" className="title-font font-medium text-white mb-4 md:mb-0 md:ml-3 text-xl md:block hidden">
          Matthew Rapp
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base md:justify-center justify-around md:w-auto w-80">
          <a href="#projects" className="md:mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="md:mr-5 hover:text-white">
            Skills
          </a>
          <a href="https://drive.google.com/file/d/1bvNrZMAzQsrO1KGYPLydjVr2qKJxtHs7/view?usp=sharing" target='_blank' rel="noopener noreferrer" className="md:mr-5 hover:text-white">
            Resumé
          </a>
        </nav>
        {/* <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Contact Matthew
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a> */}
      </div>
    </header>
  );
}
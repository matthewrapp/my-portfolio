// import { ArrowRightIcon } from "@heroicons/react/solid";
import React, {useEffect, useState} from "react";

export default function Navbar() {
  const [showNav, setShowNav] = useState(true);

  // constructor
  useEffect(() => {
    if (window.innerWidth < 767) setShowNav(false)
    else setShowNav(true);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 767) setShowNav(false)
      else setShowNav(true);
    });

    return window.removeEventListener('resize', () => { return ;})
  });

  if (showNav) {
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
              <a href="https://drive.google.com/file/d/1486RclCQb9ZPYk3r0Rp_CrNt8Qx2fe20/view?usp=sharing" target='_blank' rel="noopener noreferrer" className="md:mr-5 hover:text-white">
                Resumé
              </a>
            </nav>
        </div>
      </header>)
    } else return null;
}
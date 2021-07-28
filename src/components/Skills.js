import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { devSkills, webDesignSkills, uxSkills } from "../data";

function skillBadges(array) {
  return array.map((skill) => (
      <div key={skill.skill} className="p-2 sm:w-1/3 w-full">
        <div className="bg-gray-800 rounded flex p-3 h-full items-center">
          <BadgeCheckIcon className={`${skill.lvl === 'great' ? 'text-green-400' : ''} ${skill.lvl === 'good' ? 'text-blue-400' : ''} ${skill.lvl === 'okay' ? 'text-yellow-400' : ''} w-6 h-6 flex-shrink-0 mr-4`} />
          <span className="title-font font-medium text-white">
            {skill.skill}
          </span>
        </div>
      </div>
    ))
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-16">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl title-font text-white mb-4 font-bold">
            Skills &amp; Technologies
          </h1>
          {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Some skills Matthew thinks would be valuable for employers to know.
          </p> */}
          <div className="flex flex-wrap justify-between sm:align-center xl:w-2/4 lg:w-2/4 md:w-3/4 sm:w-full mx-auto mt-4 mb-0">
            <div className="flex flex-wrap md:w-1/3 sm:w-full sm:justify-center sm:mb-2">
              <BadgeCheckIcon className='text-green-400 w-6 h-6 flex-shrink-0 mr-2' />
              <p>Most Comfortable</p>
            </div>
            <div className="flex flex-wrap md:w-1/3 sm:w-full sm:justify-center sm:mb-2">
              <BadgeCheckIcon className='text-blue-400 w-6 h-6 flex-shrink-0 mr-2' />
              <p>Comfortable</p>
            </div>
            <div className="flex flex-wrap md:w-1/3 sm:w-full sm:justify-center">
              <BadgeCheckIcon className='text-yellow-400 w-6 h-6 flex-shrink-0 mr-2' />
              <p>Some Experience</p>
            </div>
          </div>
        </div>
        <div className="lg:w-4/5 sm:mx-auto mb-6 -mx-2">
          <h3 className="title-font text-white text-1xl sm:text2xl mb-3 pl-2">Development/Programming Skills</h3>
          <div className="flex flex-wrap">
            {skillBadges(devSkills)}
          </div>
        </div>  
        <div className="lg:w-4/5 sm:mx-auto mb-6 -mx-2">
          <h3 className="title-font text-white text-1xl sm:text2xl mb-3 pl-2">Web Design Skills</h3>
          <div className="flex flex-wrap">
            {skillBadges(webDesignSkills)}
          </div>
        </div>  
        <div className="lg:w-4/5 sm:mx-auto mb-6 -mx-2">
          <h3 className="title-font text-white text-1xl sm:text2xl mb-3 pl-2">UX, UI & Graphic Design Skills</h3>
          <div className="flex flex-wrap">
            {skillBadges(uxSkills)}
          </div>
        </div>  
      </div>
    </section>
  );
}
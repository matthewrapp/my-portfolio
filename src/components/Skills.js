import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { relatedSkills, softSkills, unrelatedSkills } from "../data";

function skillBadges(array, index, limit) {
   const maxToReturn = limit + index;
   return array.map((skill, i) => {
      if (maxToReturn > i) {
         return (
            <div key={i} className="p-2 sm:w-1/3 w-full">
               <div className="bg-gray-800 rounded flex p-3 h-full items-center">
                  <BadgeCheckIcon
                     className={`${
                        skill.lvl === "great" ? "text-green-400" : ""
                     } ${skill.lvl === "good" ? "text-blue-400" : ""} ${
                        skill.lvl === "okay" ? "text-yellow-400" : ""
                     } w-6 h-6 flex-shrink-0 mr-4`}
                  />
                  <span className="title-font font-medium text-white">
                     {skill.skill}
                  </span>
               </div>
            </div>
         );
      } else return null;
   });
}

export default function Skills() {
   const LIMIT = 6;
   const [moreRelatedSkillsIndex, setMoreRelatedSkillsIndex] = useState(0);
   const [moreSoftSkillsIndex, setMoreSoftSkillsIndex] = useState(0);
   const [moreUnrelatedSkillsIndex, setMoreUnrelatedSkillsIndex] = useState(0);

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
                     <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-2" />
                     <p>Most Comfortable</p>
                  </div>
                  <div className="flex flex-wrap md:w-1/3 sm:w-full sm:justify-center sm:mb-2">
                     <BadgeCheckIcon className="text-blue-400 w-6 h-6 flex-shrink-0 mr-2" />
                     <p>Comfortable</p>
                  </div>
                  <div className="flex flex-wrap md:w-1/3 sm:w-full sm:justify-center">
                     <BadgeCheckIcon className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-2" />
                     <p>Some Experience</p>
                  </div>
               </div>
            </div>
            <div className="lg:w-4/5 sm:mx-auto mb-6 -mx-2">
               <div className="flex justify-between">
                  <h3 className="title-font text-white text-1xl sm:text2xl mb-3 pl-2">
                     Related
                  </h3>
                  {/* {relatedSkills.length > moreRelatedSkillsIndex + LIMIT && (
                     <button
                        className="inline-flex bg-transparent-500 border-0 focus:outline-none text-green-200 hover:text-green-400 rounded text-1xl sm:text2xl mb-3 px-2"
                        onClick={() =>
                           setMoreRelatedSkillsIndex(
                              (prevVal) => prevVal + LIMIT
                           )
                        }
                     >
                        See More Related Skills
                     </button>
                  )} */}
               </div>

               <div className="flex flex-wrap">
                  {/* {skillBadges(relatedSkills, moreRelatedSkillsIndex, LIMIT)} */}
                  {skillBadges(relatedSkills, 0, relatedSkills.length)}
               </div>

               {/* <div className="text-grey mt-4 text-1xl sm:text2xl text-right pr-2">
                  {relatedSkills.length <= moreRelatedSkillsIndex + LIMIT
                     ? `${relatedSkills.length} of ${relatedSkills.length} related skills showing`
                     : `${LIMIT + moreRelatedSkillsIndex} of ${
                          relatedSkills.length
                       } related skills showing`}
               </div> */}
            </div>

            <hr
               style={{
                  width: "200px",
                  margin: "20px auto",
                  borderTopWidth: ".5px",
               }}
            />

            <div className="lg:w-4/5 sm:mx-auto mb-6 -mx-2">
               <div className="flex justify-between">
                  <h3 className="title-font text-white text-1xl sm:text2xl mb-3 pl-2">
                     Soft
                  </h3>
                  {/* {softSkills.length > moreSoftSkillsIndex + LIMIT && (
                     <button
                        className="inline-flex bg-transparent-500 border-0 focus:outline-none text-green-200 hover:text-green-400 rounded text-1xl sm:text2xl mb-3 px-2"
                        onClick={() =>
                           setMoreSoftSkillsIndex((prevVal) => prevVal + LIMIT)
                        }
                     >
                        See More Soft Skills
                     </button>
                  )} */}
               </div>

               <div className="flex flex-wrap">
                  {/* {skillBadges(softSkills, moreSoftSkillsIndex, LIMIT)} */}
                  {skillBadges(
                     softSkills,
                     moreSoftSkillsIndex,
                     softSkills.length
                  )}
               </div>

               {/* <div className="text-grey mt-4 text-1xl sm:text2xl text-right pr-2">
                  {softSkills.length <= moreSoftSkillsIndex + LIMIT
                     ? `${softSkills.length} of ${softSkills.length} soft skills showing`
                     : `${LIMIT + moreSoftSkillsIndex} of ${
                          softSkills.length
                       } soft skills showing`}
               </div> */}
            </div>

            <hr
               style={{
                  width: "200px",
                  margin: "20px auto",
                  borderTopWidth: ".5px",
               }}
            />

            <div className="lg:w-4/5 sm:mx-auto mb-6 -mx-2">
               <h3 className="title-font text-white text-1xl sm:text2xl mb-3 pl-2">
                  Unrelated
               </h3>

               {/* {unrelatedSkills.length > moreUnrelatedSkillsIndex + LIMIT && (
                  <div className="text-center m-auto">
                     <button
                        className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
                        onClick={() =>
                           setMoreUnrelatedSkillsIndex(
                              (prevVal) => prevVal + LIMIT
                           )
                        }
                     >
                        See More Unrelated Skills
                     </button>
                  </div>
               )} */}

               <div className="flex flex-wrap">
                  {/* {skillBadges(
                     unrelatedSkills,
                     moreUnrelatedSkillsIndex,
                     LIMIT
                  )} */}
                  {skillBadges(
                     unrelatedSkills,
                     moreUnrelatedSkillsIndex,
                     unrelatedSkills.length
                  )}
               </div>

               {/* <div className="text-grey mt-4 text-1xl sm:text2xl text-right pr-2">
                  {unrelatedSkills.length <= moreUnrelatedSkillsIndex + LIMIT
                     ? `${unrelatedSkills.length} of ${unrelatedSkills.length} soft skills showing`
                     : `${LIMIT + moreUnrelatedSkillsIndex} of ${
                          unrelatedSkills.length
                       } soft skills showing`}
               </div> */}
            </div>
         </div>
      </section>
   );
}

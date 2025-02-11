import React, { useRef, useState } from "react";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Work from "./Work";
import Project from "./Project";
import Resume from "./Resume";
import { useReactToPrint } from "react-to-print";
const Title = ({ resumeRef }) => {
  const handlePrint = useReactToPrint({
    documentTitle: "Resume",
    contentRef: resumeRef,
  });

  const [tab, setTab] = useState("About");
  const data = ["About", "Education", "Skills", "Work", "Project"];

  const handleClick = (id) => {
    setTab(id);
  };

  return (
    <>
      <div className="my-3 mt-4 text-end mr-10">
        <button
          onClick={handlePrint}
          className="px-4 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Download Resume
        </button>
      </div>

      <div className="md:flex h-full px-4 my-7">
        <ul className=" flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
          {data.map((item, index) => {
            return (
              <li key={index} onClick={() => handleClick(item)}>
                <button
                  className={`inline-flex justify-center items-center px-4 py-3 rounded-lg w-full shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                ${
                  tab === item
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-black hover:bg-gray-200"
                }
                `}
                  aria-current="page"
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex  w-full gap-4 ">
          <div className="p-6 h-fit bg-gray-100 shadow-lg text-medium text-gray-500 rounded-lg w-[40%] ">
            {tab === "About" && <About />}
            {tab === "Education" && <Education />}
            {tab === "Skills" && <Skills />}
            {tab === "Work" && <Work />}
            {tab === "Project" && <Project />}
          </div>
          <div className="rounded-lg">
            <Resume ref={resumeRef} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Title;

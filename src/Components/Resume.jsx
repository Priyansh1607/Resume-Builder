import React, { forwardRef } from "react";
import { IoMdMail } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useResumeContext } from "../context/ResumeContext";
import { FaGithub } from "react-icons/fa";
const Resume = forwardRef((props, ref) => {
  const { formData } = useResumeContext();
  return (
    <>
      <div className="shadow-lg max-w-3xl bg-white rounded-lg ">
        <div className=" bg-white mx-auto p-6 rounded-lg " ref={ref}>
          {/* Header */}
          <h1 className="text-3xl font-bold text-black">
            {formData.fullName || "John Doe"}
          </h1>
          <p className="text-blue-500 text-lg">
            {formData.role || "Full Stack Web Developer"}
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-y-2 items-center gap-4 my-4 text-gray-700">
            <div className="flex items-center gap-2 rounded-md py-1.5 px-2  bg-[#CCE4F2]">
              <FaMobileAlt
                size={25}
                className="bg-[#F0F7FB] text-[#0077C0] rounded-full p-1.5"
              />{" "}
              {formData.phone || "+91 123456789"}
            </div>
            <div className="flex items-center gap-2 rounded-md py-1.5 px-2  bg-[#CCE4F2]">
              <IoMdMail
                size={25}
                className="bg-[#F0F7FB] text-[#0077C0] rounded-full p-1.5"
              />
              {formData.email || "johndoe@gmail.com"}
            </div>
            <div className="flex items-center gap-2 rounded-md py-1.5 px-2  bg-[#CCE4F2]">
              <FaMapMarkerAlt
                size={25}
                className="bg-[#F0F7FB] text-[#0077C0] rounded-full p-1.5"
              />{" "}
              {formData.address || "United States, New York, NY"}
            </div>
            <div className="flex items-center gap-2 rounded-md py-1.5 px-2  bg-[#CCE4F2]">
              <FaLinkedin
                size={25}
                className="bg-[#F0F7FB] text-[#0077C0] rounded-full p-1.5"
              />{" "}
              Linkedin
            </div>
          </div>

          {/* Professional Summary */}
          <h2 className="text-xl font-bold mt-6">PROFESSIONAL SUMMARY</h2>
          <p className="text-gray-700 mt-2">
            {formData.summary ||
              "Hardworking, highly motivated professional eager to lend combined knowledge and skills to enhance business performance. Operates well in both individual and team capacities, leveraging seasoned work ethic to quickly adapt to different processes and drive company objectives."}
          </p>

          {/* Skills */}
          <h2 className="text-xl font-bold mt-6">SKILLS</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {(formData.skills?.length
              ? formData.skills
              : [
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Angular",
                  "Java",
                  "Customer service",
                  "Team leadership",
                  "Decision-making",
                ]
            ).map((skill) => (
              <span
                key={skill}
                className="font-semibold capitalize w-fit rounded-md bg-[#CCE4F2] px-3 py-1 text-gray-800 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Experience */}
          {formData.workExperience.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mt-6">EXPERIENCE</h2>
              {formData.workExperience.map((exp, _) => (
                <div>
                  <p className="font-bold">{exp.position || "MANAGER"}</p>
                  <p className="text-blue-500 capitalize">
                    {exp.company || "TCS"} - {exp.employmentType || "FullTime"}
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(exp.startDate).toLocaleDateString()} -{" "}
                    {exp.endDate
                      ? new Date(exp.endDate).toLocaleDateString()
                      : "Present"}
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mt-2">
                    {exp.description.split("\n").map((line, index) => (
                      <li key={index}>
                        {line.trim() === ""
                          ? "Mentored and trained new employees on company policies procedures"
                          : line}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          {formData.education.length > 0 && (
            <div className="mt-6">
              <h2 className="text-xl font-bold mt-6">EDUCATION</h2>
              {formData.education.map((edu, _) => (
                <div>
                  <p className="font-bold">
                    {edu.degree || "B.TECH IN COMPUTER SCIENCE"}
                  </p>
                  <p className="text-blue-500">
                    {edu.school || "XYZ University"}
                  </p>
                  <p className="text-sm text-gray-500">
                    {edu.startYear || 2000} - {edu.endYear || 2004} |{" "}
                    {edu.grade || 8.45} Cgpa
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Projects */}
          {formData.projects.length > 0 && (
            <div className="mt-6">
              <h2 className="text-xl font-bold mt-6">PROJECTS</h2>
              {formData.projects.map((project, index) => (
                <div key={index} className="mb-4">
                  <p className="text-gray-700 flex items-center gap-5">
                    {project.name || "Project Name"}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600"
                    >
                      <FaGithub size={22} />
                    </a>
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mt-2">
                    {project.description.split("\n").map((line, index) => (
                      <li key={index}>
                        {line.trim() === "" ? "Sample 1" : line}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
});

export default Resume;

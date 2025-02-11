import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useResumeContext } from "../context/ResumeContext";
const Skills = () => {
  const { formData, addSkill, removeSkill } = useResumeContext();

  return (
    <>
      <div className="flex flex-col gap-4">
        <div>
          <label
            className="block mb-2 text-sm font-medium text-gray-900"
            htmlFor="skill"
          >
            Add Skills
          </label>
          <div className="flex  items-center gap-6">
            <input
              type="text"
              id="skill"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  addSkill(e.target.value);
                  e.target.value = "";
                }
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter a skill"
              required
            />
            <button
              onClick={() => {
                const input = document.querySelector(
                  'input[placeholder="Enter a skill"]'
                );
                addSkill(input.value);
                input.value = "";
              }}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Add
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {formData.skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2 rounded-full px-3 py-1.5 bg-blue-600 text-white capitalize"
            >
              <p className="text-sm">{skill}</p>
              <AiOutlineClose
                className="cursor-pointer hover:text-gray-200"
                onClick={() => removeSkill(skill)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;

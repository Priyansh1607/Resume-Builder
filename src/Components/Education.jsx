import React, { useState } from "react";
import { useResumeContext } from "../context/ResumeContext";

const Education = () => {
  const [showSingle, setShowSingle] = useState(null);

  const toggleSingle = (id) => {
    console.log(id);
    setShowSingle(id === showSingle ? null : id);
  };
  const { formData, updateEducation, removeEducation, addEducation } =
    useResumeContext();
  return (
    <>
      {formData.education.map((edu, index) => (
        <div className="w-full max-w-2xl mx-auto p-4">
          <div className="space-y-4">
            {/* Header with toggle */}
            <button
              onClick={() => toggleSingle(index)}
              className="flex items-center justify-between w-full text-left"
            >
              <h2 className="text-lg text-black font-medium">Degree</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transform transition-transform ${
                  showSingle === index ? "rotate-180" : "rotate-0"
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {/* Form content */}
            {showSingle === index && (
              <div className="space-y-4">
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) =>
                    updateEducation(index, "degree", e.target.value)
                  }
                  placeholder="Degree"
                  className="w-full p-2 rounded-md bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="text"
                  value={edu.school}
                  onChange={(e) =>
                    updateEducation(index, "school", e.target.value)
                  }
                  placeholder="School"
                  className="w-full p-2 rounded-md bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    value={edu.startYear}
                    onChange={(e) =>
                      updateEducation(index, "startYear", e.target.value)
                    }
                    type="text"
                    placeholder="Start Year"
                    className="w-full p-2 rounded-md bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    value={edu.endYear}
                    onChange={(e) =>
                      updateEducation(index, "endYear", e.target.value)
                    }
                    placeholder="End Year"
                    className="w-full p-2 rounded-md bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Grade"
                    value={edu.grade}
                    onChange={(e) =>
                      updateEducation(index, "grade", e.target.value)
                    }
                    className="w-full p-2 rounded-md bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button
                  onClick={() => removeEducation(index)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 flex items-center space-x-2"
                >
                  <span>Delete</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      ))}

      <button
        onClick={addEducation}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        {formData.education.length > 0 ? "Add More" : "Add"}
      </button>
    </>
  );
};

export default Education;

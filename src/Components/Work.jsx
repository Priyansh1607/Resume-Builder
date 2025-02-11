import React, { useState } from "react";
import { useResumeContext } from "../context/ResumeContext";

const Work = () => {
  const [showSingle, setShowSingle] = useState(null);

  const toggleSingle = (id) => {
    console.log(id);
    setShowSingle(id === showSingle ? null : id);   
  };

  const employmentTypes = [
    "Full-time",
    "Part-time",
    "Contract",
    "Internship",
    "Freelance",
  ];
  const {
    formData,
    updateWorkExperience,
    removeWorkExperience,
    addWorkExperience,
  } = useResumeContext();
  return (
    <>
      {formData.workExperience.map((exp, index) => (
        <div className="w-full max-w-2xl mx-auto p-4">
          <div className="space-y-4">
            <button
              onClick={() => toggleSingle(index)}
              className="flex items-center justify-between w-full text-left"
            >
              <h2 className="text-lg text-black font-medium">Position</h2>
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

            {showSingle == index && (
              <div className="space-y-4">
                <input
                  type="text"
                  value={exp.position}
                  onChange={(e) =>
                    updateWorkExperience(index, "position", e.target.value)
                  }
                  placeholder="Position"
                  className="w-full p-2 rounded-md bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    value={exp.company}
                    onChange={(e) =>
                      updateWorkExperience(index, "company", e.target.value)
                    }
                    type="text"
                    placeholder="Company"
                    className="w-full p-2 rounded-md bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />

                  <select
                    value={exp.employmentType}
                    onChange={(e) =>
                      updateWorkExperience(
                        index,
                        "employmentType",
                        e.target.value
                      )
                    }
                    className="w-full p-2 rounded-md bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
                  >
                    <option value="">Employment Type</option>
                    {employmentTypes.map((type) => (
                      <option key={type} value={type.toLowerCase()}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      value={exp.startDate}
                      onChange={(e) =>
                        updateWorkExperience(index, "startDate", e.target.value)
                      }
                      type="date"
                      placeholder="Start Date"
                      className="w-full p-2 rounded-md bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                  </div>

                  <div className="relative">
                    <input
                      type="date"
                      value={exp.endDate}
                      onChange={(e) =>
                        updateWorkExperience(index, "endDate", e.target.value)
                      }
                      placeholder="End Date"
                      className="w-full p-2 rounded-md bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                  </div>
                </div>

                <textarea
                  placeholder="Description..."
                  value={exp.description}
                  onChange={(e) =>
                    updateWorkExperience(index, "description", e.target.value)
                  }
                  rows={4}
                  className="w-full p-2 rounded-md bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => removeWorkExperience(index)}
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
              </div>
            )}
          </div>
        </div>
      ))}

      <button
        onClick={addWorkExperience}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        {formData.workExperience.length > 0 ? "Add More":"Add"}
      </button>
    </>
  );
};

export default Work;

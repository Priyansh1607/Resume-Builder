import { createContext, useContext, useState } from "react";

const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    role: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    summary: "",
    education: [],
    skills: [],
    workExperience: [],
    projects: [],
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const addSkill = (skill) => {
    if (skill && !formData.skills.includes(skill)) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, skill],
      }));
    }
  };

  const removeSkill = (skillToRemove) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }));
  };

  const addEducation = () => {
    setFormData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          degree: "",
          school: "",
          startYear: "",
          endYear: "",
          grade: "",
        },
      ],
    }));
  };

  const updateEducation = (index, field, value) => {
    setFormData((prev) => ({
      ...prev,
      education: prev.education.map((edu, i) =>
        i === index ? { ...edu, [field]: value } : edu
      ),
    }));
  };

  const removeEducation = (index) => {
    setFormData((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }));
  };

  const addWorkExperience = () => {
    setFormData((prev) => ({
      ...prev,
      workExperience: [
        ...prev.workExperience,
        {
          position: "",
          company: "",
          employmentType: "Full-time",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    }));
  };

  const updateWorkExperience = (index, field, value) => {
    setFormData((prev) => ({
      ...prev,
      workExperience: prev.workExperience.map((exp, i) =>
        i === index ? { ...exp, [field]: value } : exp
      ),
    }));
  };

  const removeWorkExperience = (index) => {
    setFormData((prev) => ({
      ...prev,
      workExperience: prev.workExperience.filter((_, i) => i !== index),
    }));
  };

  const addProject = () => {
    setFormData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          name: "",
          url: "",
          description: "",
        },
      ],
    }));
  };

  const updateProject = (index, field, value) => {
    setFormData((prev) => ({
      ...prev,
      projects: prev.projects.map((proj, i) =>
        i === index ? { ...proj, [field]: value } : proj
      ),
    }));
  };

  const removeProject = (index) => {
    setFormData((prev) => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index),
    }));
  };

  return (
    <ResumeContext.Provider
      value={{
        formData,
        handleInputChange,
        addSkill,
        removeSkill,
        updateEducation,
        addEducation,
        removeEducation,
        addWorkExperience,
        updateWorkExperience,
        removeWorkExperience,
        addProject,
        updateProject,
        removeProject,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export const useResumeContext = () => {
  return useContext(ResumeContext);
};

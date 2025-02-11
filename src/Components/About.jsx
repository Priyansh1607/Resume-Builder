import React, { useState } from "react";
import { useResumeContext } from "../context/ResumeContext";

const About = () => {
  const {handleInputChange, formData} = useResumeContext();
  console.log(formData);
  return (
    <>
      <div className="flex flex-col gap-5">
        <div>
          <label
            className="block mb-2 text-sm font-medium text-gray-900"
            htmlFor="summary"
          >
            Professional Summary
          </label>
          <textarea
          value={formData.summary}
          onChange={(e)=>handleInputChange("summary",e.target.value)}
                placeholder="Brief Summary.."
                id="summary"
                rows={3}
                className="w-full p-2 rounded-md bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
        </div>

        <div>
          <label
            htmlFor="full_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Full name
          </label>
          <input
            value={formData.fullName}
            onChange={(e)=>handleInputChange("fullName",e.target.value)}
            type="text"
            id="full_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Full Name"
            required
          />
        </div>
        <div>
          <label
            htmlFor="role"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Role
          </label>
          <input
            value={formData.role}
            onChange={(e)=>handleInputChange("role",e.target.value)}
            type="text"
            id="role"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Role"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email address
          </label>
          <input
            value={formData.email}
            onChange={(e)=>handleInputChange("email",e.target.value)}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="john.doe@company.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Phone number
          </label>
          <input
            value={formData.phone}
            onChange={(e)=>handleInputChange("phone",e.target.value)}
            type="tel"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="+91 1234567890"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
          />
        </div>

        <div>
          <label
            htmlFor="address"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            City
          </label>
          <input
          value={formData.address}
          onChange={(e)=>handleInputChange("address",e.target.value)}
            type="text"
            id="address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="City, State"
            required
          />
        </div>

        <div>
          <label
            htmlFor="website"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Linkedin
          </label>
          <input
          value={formData.linkedin}
          onChange={(e)=>handleInputChange("linkedin",e.target.value)}
            type="url"
            id="website"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="xyz.com"
            required
          />
        </div>
      </div>
    </>
  );
};

export default About;

import React, { useState } from "react";
import svg from "./assets/image.svg";
import img1 from "./assets/img1.png";
import Dashboard from "./Components/Dashboard";
import "./App.css";
import { ResumeProvider } from "./context/ResumeContext";
const App = () => {
  const [view, setView] = useState(false);

  const handleBuildbtn = () => {
    setView(!view);
  };

  return (
    <ResumeProvider>
      {view ? (
        <Dashboard />
      ) : (
        <div className="w-full h-screen flex flex-col">
          <nav className="flex bg-[#F7FAFC] px-11 py-5 items-center justify-between ">
            <h1 className="font-bold text-4xl" id="heading">ResumeEase</h1>
            <ul className="flex gap-7 text-lg items-center font-medium">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/Template">Templates</a>
              </li>
              <li>
                <a href="/About">About</a>
              </li>
              <li className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer">
                <a href="/Contact">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="flex bg-blue-100 items-center px-7">
            <div className="w-[50%] items-start flex flex-col gap-10">
              <h1 className="text-5xl font-bold text-[#1877F2]">
                ResumeEase - Simple & <br /> Fast CV Maker
              </h1>
              <p className="text-lg text-slate-800">
                Craft a professional resume effortlessly with ResumeEase. Our
                intuitive and user-friendly platform helps you build a standout
                CV in minutes, ensuring you make a lasting impression on
                recruiters. 🚀
              </p>
              <button
                onClick={handleBuildbtn}
                className="text-lg font-medium bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Build Resume
              </button>
            </div>
            <div className="w-[50%] h-[calc(100vh-84px)]">
              <img className="w-full h-full" src={svg} alt="ResumeEase" />
            </div>
          </div>
        </div>
      )}
    </ResumeProvider>
  );
};

export default App;

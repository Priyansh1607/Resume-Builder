import React, { useRef } from "react";
import Title from "./Title";

const Dashboard = () => {
  const resumeRef = useRef(null);
  return (
    <>
      <div className="bg-[#F7FAFC]">
        <div className="w-full flex flex-col gap-2 items-center">
          <p className="pt-7 text-center font-normal text-3xl">
            Resume Builder Dashboard
          </p>
          <span className="w-[35%] h-[4px] rounded-full bg-[#1877F2]"></span>
        </div>
        <Title resumeRef={resumeRef} />
      </div>
    </>
  );
};

export default Dashboard;

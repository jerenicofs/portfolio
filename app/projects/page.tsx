import Projects from "@/components/Projects";
import React from "react";

const page = () => {
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-x-hidden">
      <div className="max-w-7xl w-full min-h-screen">
        <Projects />
      </div>
    </div>
  );
};

export default page;

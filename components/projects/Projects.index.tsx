import React from "react";
import Left from "./Left";
import Right from "./Right";

const Projects = () => {
  return (
    <div className="w-full bg-bg__main py-[30px] lg:py-[70px] px-[30px] lg:px-[50px] 2xl:px-[100px] flex flex-col lg:flex-row justify-evenly gap-[30px] lg:gap-[50px]">
      <Left />
      <Right />
    </div>
  );
};

export default Projects;

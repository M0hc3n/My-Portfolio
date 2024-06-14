import React from "react";
import ProjectList from "./ProjectList";
import { projects } from "./data";

const Left = () => {
  return (
    <div className="flex flex-col gap-[40px]">
      <h1 className="text-white text-left text-[32px] font-bold font-montserrat">
        My Projects
      </h1>

      <ProjectList projects={projects.slice(0, 2)} />
    </div>
  );
};

export default Left;

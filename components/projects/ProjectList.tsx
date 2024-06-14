import React from "react";
import { Projects } from "./types/project";
import ProjectCard from "./Card/ProjectCard";

const ProjectList = ({ projects }: { projects: Projects }) => {
  return (
    <div className="flex flex-col gap-[50px]">
      {projects.map((project) => (
        <ProjectCard key={project.url} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;

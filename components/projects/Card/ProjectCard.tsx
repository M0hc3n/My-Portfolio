import React from "react";
import { Project } from "../types/project";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import Link from "next/link";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col gap-[10px]">
      <Link href={project.url} target="_blank">
        <div className="w-[300px] transition-all ease-in-out duration-400 hover:bg-gray-200  lg:w-[500px] h-[300px] cursor-pointer bg-white flex items-center justify-center rounded-[20px]">
          <Image
            src={project.image}
            alt={project.title}
            className="object-contain"
          />
        </div>
      </Link>
      <div className="flex flex-col gap-">
        <p className="text-white text-left text-[24px] font-montserrat">
          {project.title}
        </p>
        <p className=" text-gray-500 text-left capitalize text-[18px] font-montserrat">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;

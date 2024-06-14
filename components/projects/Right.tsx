import React from "react";
import ProjectList from "./ProjectList";
import { projects } from "./data";
import IconButton from "../utils/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Right = () => {
  return (
    <div className="flex flex-col gap-[30px] items-end">
      <ProjectList projects={projects.slice(2)} />
      <Link href="https://github.com/Mohcen2311" target="_blank">
        <IconButton
          label="Check More Projects"
          startIcon={
            <FontAwesomeIcon className="text-[24px]" icon={faGithub} />
          }
          className="bg-github-main max-w-fit text-white text-[20px] py-[30px] px-[30px] hover:bg-github-hovered"
        />
      </Link>
    </div>
  );
};

export default Right;

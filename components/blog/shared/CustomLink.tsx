import { Link } from "@nextui-org/react";
import React from "react";

const CustomLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className=" font-sans font-[1.3rem] text-main-contrast"
    >
      {text}{" "}
    </Link>
  );
};

export default CustomLink;

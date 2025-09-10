import React from "react";
import InfoCard from "./InfoCard";
import QantraLogo from "./QantraLogo";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div className="pb-[30px] px-[30px] lg:px-[50px] 2xl:px-[100px] flex flex-col justify-center  gap-[30px]">
      <h1 className="text-white text-left pt-[30px] text-[32px] font-bold font-montserrat">
        About Me
      </h1>
      <div className=" flex flex-col  gap-[20px] lg:gap[70px] ">
        <InfoCard />

        <div className="flex items-center gap-3 mt-[-30px] text-white text-[18px] font-montserrat">
          <span className="italic text-gray-600">Currently @</span>
          <Link href={"https://qantra.ai/"} target="_blank">
            <QantraLogo />
          </Link>
        </div>

        <p className="text-white text-left lg:leading-8 mt-[-15px] text-[18px] font-montserrat   ">
          Salam, I’m Mohcen Taher Chouireb, a Muslim from Algeria, and a person
          with a deep passion for computers. I spend most of my time either
          reading about trends in CS or writing incomprehensible text on them
          (my mom’s definition of coding). <br /> I specialize in developing
          high-quality websites using various technologies and solving
          real-world problems in my home country (and abroad) using magic!
          (mom’s interpretation of AI 🙃). Currently, I am a Final Year student
          at &nbsp;
          <a
            target="_blank"
            rel="noopener"
            href="https://www.ensia.edu.dz/"
            className="text-gray-600 underline"
          >
            ENSIA
          </a>{" "}
          .
          <br />
          In my spare time, I like to read/listen about history and geopolitics.
          I am deeply fascinated by how historical contexts shape the world we
          live in today!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;

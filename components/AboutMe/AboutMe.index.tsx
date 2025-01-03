import React from "react";
import InfoCard from "./InfoCard";

const AboutMe = () => {
  return (
    <div className="w-full bg-[#020202] pb-[30px] lg:pb-[100px] px-[30px] lg:px-[50px] 2xl:px-[100px] flex flex-col justify-center  gap-[50px]">
      <h1 className="text-white text-center text-[32px] font-bold font-montserrat">
        About Me
      </h1>
      <div className=" flex flex-col lg:flex-row items-center gap-[20px] lg:gap[50px] lg:justify-evenly ">
        <InfoCard />

        <p className="text-white text-center lg:leading-8 pt-[10px] text-[20px] font-montserrat  max-w-[560px]  ">
          Hello, it is Mohcen Taher Chouireb, a muslim from Algeria, and a
          person with deep passion for computers and spends most of his time
          either reading about trends in CS, or writing incomprehensible text on
          them (mom&apos;s definition of coding). <br /> I specialize in
          developing high-quality websites using different technologies and
          solving real-world problems in my home country (and abroad) using
          Magic ! (mom&apos;s definition of AI &#128579;). Currently, I am a 2
          CS student at &nbsp;
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
          In my spare time, I like to read about History and Geo-politics, I am
          very fascinated about how historical contexts shape the world we live
          in today !
        </p>
      </div>
    </div>
  );
};

export default AboutMe;

import React from "react";
import InfoCard from "./InfoCard";

const AboutMe = () => {
  return (
    <div className="w-full bg-[#020202] flex flex-col lg:flex-row items-center px-[30px] lg:px-[50px] 2xl:px-[100px] gap-[20px] lg:gap[50px] lg:justify-evenly ">
      <InfoCard />

      <p className="text-white text-center text-[20px] font-montserrat  max-w-[500px]  ">
        Hello, it is Mohcen Taher Chouireb from Algeria. I work in developing
        high-quality websites using different technologies and I am more
        specialized in front-end development, but also working on my skills in
        the back-end. Currently, I am a student at the National Higher School of
        Artificial Intelligence and I am willing to both learn and discover more
        about implementing AI in various fields.
      </p>
    </div>
  );
};

export default AboutMe;

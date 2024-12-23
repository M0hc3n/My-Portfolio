import React from "react";
import { interests } from "./data";
import InterestCard from "./Card/InterestCard";

const Interests = () => {
  return (
    <div className="w-full bg-[#020202] py-[30px] lg:py-[70px] px-[30px] lg:px-[50px] 2xl:px-[100px] flex flex-col justify-center  gap-[50px]">
      <h1 className="text-white text-left text-[32px] font-bold font-montserrat">
        My Interests
      </h1>

      <div className="flex flex-col gap-[30px] lg:flex-row justify-evenly ">
        {interests.map((interest) => (
          <InterestCard key={interest.title} interest={interest} />
        ))}
      </div>
    </div>
  );
};

export default Interests;

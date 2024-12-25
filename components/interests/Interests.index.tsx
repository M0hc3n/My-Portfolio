import React from "react";
import { interests } from "./data";
import InterestCard from "./Card/InterestCard";

const Interests = () => {
  return (
    <div className="w-full bg-[#020202] py-[30px] lg:py-[70px] px-[30px] lg:px-[50px] 2xl:px-[100px] flex flex-col justify-center  gap-[50px]">
      <h1 className="text-white text-left text-[32px] font-bold font-montserrat">
        My Interests
      </h1>

      <div className="flex flex-col gap-[40px] lg:flex-row lg:gap-[80px] justify-evenly ">
        {interests.map((interest) => (
          <InterestCard key={interest.title} interest={interest} />
        ))}
      </div>

      <span className="text-gray-400">
        and yeh... I am a fan of &nbsp;
        <a
          target="_blank"
          rel="noopener"
          href="https://dragons.fandom.com/wiki/Toothless"
          className="text-gray-600 underline"
        >
          Toothless
        </a>
        ... So I made those images using &nbsp;
        <a
          target="_blank"
          rel="noopener"
          href="https://replicate.com/black-forest-labs/flux-1.1-pro-ultra"
          className="text-gray-600 underline"
        >
          this
        </a>
        &nbsp;and &nbsp;
        <a
          target="_blank"
          rel="noopener"
          href="https://replicate.com/m0hc3n/toothless-images-generator"
          className="text-gray-600 underline"
        >
          this too
        </a>
        .
      </span>
    </div>
  );
};

export default Interests;

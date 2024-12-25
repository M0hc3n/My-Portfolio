import React from "react";
import { Interest } from "../types/interest";
import { Image } from "@nextui-org/react";

const InterestCard = ({ interest }: { interest: Interest }) => {
  return (
    <div className="flex flex-1 flex-col gap-[30px]">
      <div className="flex flex-col gap-[8px]">
        <Image
          src={interest.image}
          alt={interest.title}
          className="object-contain "
        />
        <p className="text-gray-400 text-left capitalize text-[18px] font-montserrat">
          {interest.subtitle}{" "}
        </p>
        <p className="text-white text-left font-bold text-[24px] font-montserrat">
          {interest.title}
        </p>
      </div>

      <p className="text-gray-600 text-left mt-[-20px] text-[18px] font-montserrat">
        {interest.description}{" "}
      </p>
    </div>
  );
};

export default InterestCard;

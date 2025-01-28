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
        <p className="text-white text-left font-bold text-[20px] font-montserrat">
          {interest.title}
        </p>
      </div>

      <p className="text-gray-600 text-left mt-[-20px] text-[16px] font-montserrat">
        {interest.description}{" "}
      </p>
    </div>
  );
};

export default InterestCard;

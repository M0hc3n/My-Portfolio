import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

const InfoCard = () => {
  return (
    <div className="h-[120px] w-[120px] rounded-xl lg:w-[120px] lg:h-[120px] ">
      <Image
        alt="Mohcen's picture"
        className=" object-contain rounded-xl "
        height={120}
        width={120}
        src="/images/me.jpg"
      />
    </div>
  );
};

export default InfoCard;

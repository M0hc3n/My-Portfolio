import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

const InfoCard = () => {
  return (
    <div className="h-[400px] w-[260px] lg:w-[350px]">
      <Image
        alt="Mohcen's picture"
        className=" object-contain rounded-md "
        src="/images/me.jpg"
      />
    </div>
  );
};

export default InfoCard;

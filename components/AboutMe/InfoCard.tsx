import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

const InfoCard = () => {
  return (
    <div className="h-[400px] w-[260px] lg:w-[350px]">
      <Image
        alt="Woman listing to music"
        className=" object-contain "
        src="/images/me.jpg"
      />
    </div>
  );
};

export default InfoCard;

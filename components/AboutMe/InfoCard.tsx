import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

const InfoCard = () => {
  return (
    <Card isFooterBlurred radius="lg" className="border-none max-w-fit">
      <div className="h-[400px] w-[250px] lg:h-[500px] lg:w-[350px]">
        <Image
          alt="Woman listing to music"
          className="object-cover"
          src="/images/me.jpg"
        />
      </div>
      <CardFooter className="justify-between mt-[-20px] before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Available soon.</p>
        <Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
        >
          Notify me
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InfoCard;

import { Image } from "@nextui-org/react";
import React from "react";

export default function ImageWithLegend({
  path,
  alt,
  legend,
}: {
  path: string;
  alt: string;
  legend: string;
}) {
  return (
    <div className=" w-[300px] lg:w-[800px] flex  flex-col gap-2 items-center justify-center">
      <Image
        src={path}
        alt={alt}
        height={100}
        width={160}
        className="object-contain w-[800px]"
      />

      <span className="font-sans text-gray-600">{legend}</span>
    </div>
  );
}

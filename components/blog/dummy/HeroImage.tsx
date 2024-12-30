import { Image } from "@nextui-org/react";
import React from "react";

export default function HeroImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className={"mdx-hero-image text-white "}>
      <Image src={src} alt={alt} height={350} width={800} className="object-contain" />
    </div> 
  );
}

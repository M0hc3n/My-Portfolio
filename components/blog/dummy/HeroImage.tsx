import React from "react";
import Image from "next/image";

export default function HeroImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className={"mdx-hero-image"}>
      <Image src={src} alt={alt} fill></Image>
    </div>
  );
}

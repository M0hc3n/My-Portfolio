import React from "react";

const HeroTitle = ({ title }: { title: string }) => {
  return (
    <section className="w-[800px]">
      <h1 className="font-medium text-[2rem] tracking-[-0.02em] leading-[1.25] mt-[1.5em] mb-[1em] text-white font-sans">
        {title}{" "}
      </h1>
    </section>
  );
};

export default HeroTitle;

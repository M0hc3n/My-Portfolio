import React from "react";

const HeroSubTitle = ({
  subtitle,
  date,
}: {
  subtitle: string;
  date: string;
}) => {
  return (
    <section className="w-[800px] flex flex-col gap-2">
      <h4 className=" text-[1.5rem] font-bold text-white  tracking-[-0.02em] leading-[1.25] mt-[1.5em] font-sans">
        {subtitle}{" "}
      </h4>

      <span className="text-main-contrast  font-bold font-sans">{date}</span>
    </section>
  );
};

export default HeroSubTitle;

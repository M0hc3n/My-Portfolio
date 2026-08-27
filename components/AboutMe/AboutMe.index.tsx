import React from "react";
import InfoCard from "./InfoCard";
import FollosoftLogo from "./FollosoftLogo";
import BetterfitLogo from "./BetterfitLogo";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div className="pb-[30px] px-[30px] lg:px-[50px] 2xl:px-[100px] flex flex-col justify-center  gap-[30px]">
      <h1 className="text-white text-left pt-[30px] text-[32px] font-bold font-montserrat">
        About Me
      </h1>
      <div className=" flex flex-col  gap-[20px] lg:gap[70px] ">
        <InfoCard />

        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[18px] font-montserrat">
          <span className="italic text-gray-400">Currently @</span>
          <Link
            href={"https://follosoft.com/en"}
            target="_blank"
            rel="noopener"
            aria-label="Follosoft"
            title="Follosoft"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2.5 text-white transition duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"
          >
            <FollosoftLogo className="h-6 w-6" />
          </Link>
          <span className="italic text-gray-400">via</span>
          <Link
            href={"https://www.betterfit.ca/"}
            target="_blank"
            rel="noopener"
            aria-label="Betterfit"
            title="Betterfit"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2.5 text-white transition duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"
          >
            <BetterfitLogo className="h-6 w-6" />
          </Link>
        </div>

        <p className="text-white text-left lg:leading-8 text-[18px] font-montserrat">
          Salam, I’m Mohcen Taher Chouireb, from Algeria, a guy with a deep
          passion for computers. I spend most of my time either reading about
          trends in CS or turning them into something that actually runs.
          <br />
          These days I build high-quality websites with all sorts of
          technologies, and I use a bit of magic (my mom’s interpretation of AI
          🙃) to solve real-world problems, both at home in Algeria and abroad. I
          recently wrapped up five years at{" "}
          <a
            target="_blank"
            rel="noopener"
            href="https://www.ensia.edu.dz/"
            className="text-gray-400 underline"
          >
            ENSIA
          </a>
          , the national school for AI, as part of its very first promo.
          <br />
          Off the keyboard, I’m usually reading or listening about history,
          geopolitics, and art. I’m fascinated by how the past quietly shapes
          the world we live in today.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;

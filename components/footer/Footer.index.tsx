import React from "react";
import { socialMedia } from "./data";
import IconButton from "../utils/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Cedarville_Cursive } from "next/font/google";
import Link from "next/link";

const cedarvilleFT = Cedarville_Cursive({
  subsets: ["latin"],
  weight: "400",
});

const Footer = () => {
  return (
    <div className="bg-black flex flex-col gap-[30px] py-[30px] lg:py-[50px]">
      <p
        className={`text-white text-left font-bold text-[18px] lg:text-[24px] font-montserrat`}
      >
        Share interests? Open to collaborate? Contact me:
      </p>

      <div className="flex gap-[20px]">
        {socialMedia.map((singleSM) => (
          <Link key={singleSM.url} target="_blank" href={singleSM.url}>
            <IconButton
              label=""
              startIcon={singleSM.icon}
              className={singleSM.className}
            />
          </Link>
        ))}
      </div>

      <div className="flex justify-between items-center gap-[20px]">
        <p
          className={`text-white ${cedarvilleFT.className} text-left font-bold text-[18px] lg:text-[24px] font-montserrat`}
        >
          Remember to enjoy the Ride !
        </p>
        <p className=" text-gray-600   text-center text-[14px] lg:text-[18px] font-montserrat">
          made with <i className="text-heart pr-1">&#10084;</i>
          {"   by me"}
        </p>
      </div>
    </div>
  );
};

export default Footer;

"use client";
import { motion, useScroll, useTransform } from "framer-motion";

import { Cedarville_Cursive } from "next/font/google";

import React, { useRef } from "react";

const cedarvilleFT = Cedarville_Cursive({
  subsets: ["latin"],
  weight: "400",
});

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["-300%", "100%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative flex justify-center items-center pb-[-20px] "
    >
      {/* <motion.h1
        style={{ y: textY }}
        className={`text-center flex px-[20px] xl:mb-[50px] flex-col gap-[10px] font-bold text-white text-4xl md:text-[45px] relative z-10 ${cedarvilleFT.className}`}
      >
        &quot;Amateurs seek the sun , get eaten. Power stays in the
        shadows.&quot;
        <br />
        <span className="text-end font-bold text-white text-2xl md:text-[35px] ">
          - Lewis Strauss
        </span>
      </motion.h1> */}

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/images/new-full-image.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(/images/new-part-image__2.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}

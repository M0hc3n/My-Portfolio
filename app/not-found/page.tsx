"use client";

import { NextUIProvider } from "@nextui-org/react";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <NextUIProvider>
      <div className="min-h-screen flex flex-col items-center justify-center lg:justify-start  p-4 text-center relative overflow-hidden bg-[#020202] ">
        <h1 className="text-[100px] lg:text-[350px] font-bold text-github-main tracking-wider  ">
          4.0.4
        </h1>

        <p className="text-gray-400">
          Are you lost ? Follow me mate... I shall guide you to the{" "}
          <Link href={"/"} className="text-gray-600 underline">
            {" "}
            entrance
          </Link>
        </p>
      </div>
    </NextUIProvider>
  );
}

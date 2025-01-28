import { Image } from "@nextui-org/react";
import React from "react";

export default function QuoteBlock({ quote }: { quote: string }) {
  return (
    <div
      className={
        " border-l-2 border-gray-600 pl-5 py-1 text-[1.2rem] text-gray-600 italic "
      }
    >
      {quote}
    </div>
  );
}

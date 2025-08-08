import React from "react";
import { netflixBgImage } from "../utils/formUtils";

export const Netflixbgimage = () => {
  return (
    <div className="relative">
      <img
        src={netflixBgImage}
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
  );
};

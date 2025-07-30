import React from "react";
import { netflixLogo } from "../utils/formUtils";

export const Header = () => {
  return (
    <div className="flex justify-between items-center max-w-[1400px] mx-auto fixed top-0 left-0 right-0 z-50 w-full">
      <img className="w-42" src={netflixLogo} alt="noImage" />
      <div className="text-xl text-red-600 tracking-wide cursor-pointer">
        Account
      </div>
    </div>
  );
};

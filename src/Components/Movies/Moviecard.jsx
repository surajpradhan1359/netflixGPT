import React from "react";
import { Loader } from "../Loader";

export const Moviecard = ({ data }) => {
  return (
    <div className="mr-4 rounded-2xl shrink-0 cursor-pointer">
      {console.log(data)}
      <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt="" className="h-[150px] sm:h-[150px] w-[150px] sm:w-[250px]" />
    </div>
  );
};

import React from "react";
import { Loader } from "../Loader";

export const Moviecard = ({ data }) => {
  return (
    <div className="h-[150px] w-[250px] mr-4 rounded-2xl shrink-0 cursor-pointer">
      {console.log(data)}
      <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt="" />
    </div>
  );
};

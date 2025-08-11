import React from "react";
import { useSelector } from "react-redux";
import { Moviecard } from "./Moviecard";
import { Animatedcard } from "./Animatedcard";
import { HorizentalScrollButtonLeft } from "../HorizentalScrollButtonLeft";
import { HorizentalScrollButtonRight } from "../HorizentalScrollButtonRight";
import { getMovies } from "../../helpers/moviesHelpers";

export const Movietype = ({ data,name }) => {
  //dummydata
  let dummyData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //ref
  const containerRef = React.useRef(null);
  return (
    <div className="my-5">
      <h1 className="text-2xl text-white font-bold tracking-wide mb-3">
        {name} Movies
      </h1>
      <div className="relative">
        <div
          className="flex flex-row overflow-x-auto overflow-y-hidden whitespace-nowrap hide-scrollbar"
          ref={containerRef}
        >
          {data
            ? data.map((item, index) => <Moviecard key={index} data={item} />)
            : dummyData.map((item, index) => <Animatedcard key={index} />)}
        </div>
        <HorizentalScrollButtonLeft containerRef={containerRef} />
        <HorizentalScrollButtonRight containerRef={containerRef} />
      </div>
    </div>
  );
};

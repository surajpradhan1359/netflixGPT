import React, { useEffect } from "react";
import { fetchNowPlayingMovies } from "../helpers/browseHelpers";
import { Primary } from "./Primary";
import { Secondary } from "./Secondary";

export const Body = () => {
  return (
    <div className="relative">
      <Primary />
      <Secondary />
    </div>
  );
};

import React, { useEffect } from "react";
import { fetchNowPlayingMovies } from "../helpers/browseHelpers";
import { Primary } from "./Primary";
import { Secondary } from "./Secondary";
import {
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchUpcomingMovies,
  fetchTopRatedMovies,
} from "../helpers/moviesHelpers";
import { useDispatch } from "react-redux";

export const Body = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    fetchNowPlayingMovies(dispatch);
    fetchPopularMovies(dispatch);
    fetchUpcomingMovies(dispatch);
    fetchTopRatedMovies(dispatch);
  }, []);

  return (
    <div className="relative">
      <Primary />
      <Secondary />
    </div>
  );
};

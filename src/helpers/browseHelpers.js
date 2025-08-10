import { combineSlices } from "@reduxjs/toolkit";
import { auth } from "../firebase/firebase";
import { option } from "../utils/tmDButils";

export const isEmailVerified = () => {
  const user = auth.currentUser;
  if (user) {
    console.log(user.uid);
  }
};

export const fetchNowPlayingMovies = async (setData) => {
  try {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      option
    );
    let data = await response.json();
    console.log(data);
    setData(data.results[0]);
  } catch (err) {
    console.log(err);
  }
};

export const fetchTheVideoOfMovie = async (id, setTrailerID) => {
  try {
    console.log("hey there");
    let movieTrailer = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      option
    );
    let movieTrailerData = await movieTrailer.json();
    console.log("movieTrailerData", movieTrailerData);
    //logic for getting trailer id
    let trailers = movieTrailerData.results.filter(
      (video) => video.type === "Trailer"
    );
    setTrailerID(trailers[0].key);
  } catch (err) {
    console.log(err);
  }
};

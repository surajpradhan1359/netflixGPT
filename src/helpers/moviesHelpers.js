import { option } from "../utils/tmDButils";
import {
  setNowPlayingMovies,
  setPoularMovies,
  setTopRatedMovies,
  setUpcomingMovies,
} from "../features/movies/moviesSlice.js";

export const fetchNowPlayingMovies = async (dispatch) => {
  try {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      option
    );
    let data = await response.json();
    dispatch(setNowPlayingMovies(data.results));
  } catch (err) {
    console.log(err);
  }
};

export const fetchPopularMovies = async (dispatch) => {
  try {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      option
    );
    let data = await response.json();
    dispatch(setPoularMovies(data.results));
  } catch (err) {
    console.log(err);
  }
};

export const fetchTopRatedMovies = async (dispatch) => {
  try {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      option
    );
    let data = await response.json();
    dispatch(setTopRatedMovies(data.results));
  } catch (err) {
    console.log(err);
  }
};

export const fetchUpcomingMovies = async (dispatch) => {
  try {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      option
    );
    let data = await response.json();
    dispatch(setUpcomingMovies(data.results));
  } catch (err) {
    console.log(err);
  }
};


export const fetchVideoID = async(movie_id,setTrailerID) =>{
  try {
    let movieID = String(movie_id).trim();
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`, option);
    const data = await response.json();
    let trailers = data.results.filter(
      (video) => video.type === "Trailer"
    );
    console.log(trailers);
    setTrailerID(trailers[0].key);
  } catch (err) {
    console.log(err);
  }
}

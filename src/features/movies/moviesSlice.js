import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    poularMovies: null,
    nowPlayingMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    setPoularMovies: (state, action) => {
      state.poularMovies = action.payload;
    },
    setNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    setTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    setUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
  },
});

export const {
  setPoularMovies,
  setNowPlayingMovies,
  setTopRatedMovies,
  setUpcomingMovies,
} = movieSlice.actions;

export default movieSlice.reducer;

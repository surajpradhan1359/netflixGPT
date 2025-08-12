import React from 'react'
import { Movietype } from './Movies/Movietype'
import { useSelector } from 'react-redux';

export const Secondary = () => {
    //nowplaying
  const nowplayingMovies = useSelector((state) => state.movies.nowPlayingMovies);
  //toprated
  const topratedMovies = useSelector((state) => state.movies.topRatedMovies);
  //upcoming
  const upcomingMovies = useSelector((state) => state.movies.upcomingMovies);
  //poular
  const poularMovies = useSelector((state) => state.movies.poularMovies);
  return (
    <div className='bg-black p-2 sm:p-0'>
      <div className='max-w-[1400px] mx-auto py-4'>
        <Movietype data={nowplayingMovies} name={"Now Playing"} upFlag={true}/>
        <Movietype data={topratedMovies} name={"Top Rated"}/>
        <Movietype data={upcomingMovies} name={"Upcoming"}/>
        <Movietype data={poularMovies} name={"Popular"}/>
      </div>
    </div>
  )
}

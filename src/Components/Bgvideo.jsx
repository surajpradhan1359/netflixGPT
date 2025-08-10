import React, { useEffect } from "react";
import { fetchTheVideoOfMovie } from "../helpers/browseHelpers";
import { Loader } from "./Loader";

export const Bgvideo = ({ id }) => {
  const [trailerID, setTrailerID] = React.useState(null);

  useEffect(() => {
    fetchTheVideoOfMovie(id, setTrailerID);
  }, []);

  return (
    <>
      {trailerID ? (
        <div className="w-full aspect-video relative">
          <div className="bg-black/40 absolute inset-0 z-10"></div>
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${trailerID}??modestbranding=1&rel=0&controls=1&autoplay=1&mute=1&loop=1&playlist=${trailerID}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

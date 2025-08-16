import React, { useEffect } from "react";
import { useParams } from "react-router";
import { fetchVideoID } from "../helpers/moviesHelpers";
import { Loader } from "./Loader";

export const Playtrailer = () => {
  const { id } = useParams();
  const [trailerID, setTrailerID] = React.useState(null);
  useEffect(() => {
    fetchVideoID(id, setTrailerID);
  }, []);
  return (
    <div className="w-full h-screen">
      {trailerID ? (
        <div className="w-full h-full md:aspect-video relative">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${trailerID}??modestbranding=1&rel=0&controls=1&autoplay=1&mute=1&loop=1&playlist=${trailerID}`}
            title="YouTube video player"
            allow="accelerometer; controls=1&autoplay=0; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

import React, { useEffect } from "react";
import { Content } from "./Content";
import { Bgvideo } from "./Bgvideo";
import { Loader } from "./Loader";
import { fetchNowPlayingMovies } from "../helpers/browseHelpers";

export const Primary = () => {
  const [data, setData] = React.useState(null);
  useEffect(() => {
    fetchNowPlayingMovies(setData);
  }, []);
  return (
    <div className="relative">
      {data ? (
        <div>
          <Content title={data.title} overview={data.overview} />
          <Bgvideo id={data.id} />
        </div>
      ) : (
        <Loader minheight={"h-screen"} />
      )}
    </div>
  );
};

import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "./Navbar";

import { useState, useEffect } from "react";

import { Cardvideo } from "./Cardvideo";

const ChannelCardVideos = () => {
  const [video, setVideo] = useState([]);
  const { channelId } = useParams();

  const key = "AIzaSyA82fnpCQ86CtAgV8qlgkgZdQtyI0mJfgU";

  const fecthData = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&maxResults=45&key=${key}`;
  const accessToken = localStorage.getItem("token");
  console.log("Main component : ", accessToken);

  useEffect(() => {
    fetch(fecthData, {
      method: "GET",
      headers: new Headers({ Authorization: `Bearer ${accessToken}` }),

    })
      .then((res) => res.json())
      .then((data) => setVideo(data.items));
  }, []);

  console.log("videdos abonnées : ", video);
  return (
    <div className="listCard">
      {video?.map(
        (item, id) => (
          <Link
            className="video__link__style"
            // to={`/chanelCardVideos/${item.id.videoId}`}
            to={`/videoplay/${item.id.videoId}/${item?.snippet?.channelId}`}
            key={id}
          >
            <Cardvideo key={id} video={item} />
          </Link>
        )
        /* } */
      )}
    </div>
  );
};

export default ChannelCardVideos;

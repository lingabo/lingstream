import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "./Navbar";

import { useState, useEffect } from "react";
import Card from "./Card";

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
    <div>
      <Navbar />
      
      <div>
        <div className="container">
          <div className="main_side">
            <div className="image__preview image__container">
              {video.map(
                (item, id) => (
                  <Link
                    className="video__link__style"
                    to={`/chanelCardVideos/${item.id.videoId}`}
                    key={id}
                  >
                    <Card key={id} video={item} />
                  </Link>
                )
                /* } */
              )}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelCardVideos;

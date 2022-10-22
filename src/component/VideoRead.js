import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cardvideo } from "./Cardvideo";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export function VideoRead() {
  const { id } = useParams();

  console.log(id);

  const [videos, setVideos] = useState([]);
  const key = "AIzaSyA82fnpCQ86CtAgV8qlgkgZdQtyI0mJfgU";

  const fecthData = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${id}&type=video&key=${key}`;

  const accessToken = localStorage.getItem("token");

  console.log("Main component : ", accessToken);

  useEffect(() => {
    fetch(fecthData, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setVideos(data.items));
  }, []);

  console.log("videos : ", videos);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container centerVideo" /* key={videos.id} */>
        <div className="col-md-8">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            /* allowfullscreen */
          ></iframe>
        </div>

        <div className="col-md-4">
          <h1>Video related</h1>

          
            <div className="row">
              {videos.map((item, id) => (
                
                  
                  <Cardvideo key={id} video={item} />
                
              ))}
            </div>
          
        </div>
      </div>
    </>
  );
}

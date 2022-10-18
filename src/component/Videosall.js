import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const API = "AIzaSyA82fnpCQ86CtAgV8qlgkgZdQtyI0mJfgU";
const urlallvideos = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=33&regionCode=US&key=${API}`;
export function Videosall() {
  const [allVideos, setAllvideos] = useState([]);
  useEffect(() => {
    fetch(urlallvideos)
      .then((response) => response.json())
      .then((data) => {
        /* const resultat = data.items.map((doc) => ({
          ...doc,
          Videolink: "https://www.youtube.com/embed/" + doc.id.videoId,
        })); */
        setAllvideos(data.items);
      });
  }, []);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-center">
          {allVideos.map((item) => (
            <div key={item.id}>
              <img src={item?.snippet?.thumbnails?.medium?.url} alt="" />
              <p>{item.snippet?.title}</p>
              <p>{item.contentDetails?.title}</p>
              <p>{item.description?.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

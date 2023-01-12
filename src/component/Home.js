import React from "react";
import { useEffect, useState } from "react";
import { Cardvideo } from "./Cardvideo";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { Loarding } from "./Loading";
import { Footer } from "./Footer";

function Home() {
 
  const [videos, setVideos] = useState([]);
   const [loading, setLoading] = useState(true);

  //behavior
  const key = "AIzaSyA82fnpCQ86CtAgV8qlgkgZdQtyI0mJfgU";
  const fecthData = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=US&key=${key}`;

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
       setLoading(false)

  }, [fecthData]);

  
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="Parentcontainer">
        <div className="listCard">
          {
            loading ?(
              <Loarding/>

            ) : videos ?(

              videos.map((item, id) => (
                <Link
                  className="video__link__style"
                  to={`/videoplay/${item.id}/${item?.snippet?.channelId}`}
                  key={id}
                >
                  <Cardvideo key={id} video={item} />
                </Link>
              ))) :(
                <>
                <h1>error</h1>
                </>
              )}
            
          
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default Home;

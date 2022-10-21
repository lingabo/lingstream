import { useEffect, useState } from "react";
import { Cardvideo } from "./Cardvideo";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
  //434501052002-0ra8d1qvse4bld75lch1jluo3sku62er.apps.googleusercontent.com : client id
  //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 : your client secret
  //state
  const [videos, setVideos] = useState([]);

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
        Accept: "application/json"
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
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-4 row-cols-md-4 justify-content-center">
          {videos.map((item, id) => (
            <Link
              className="video__link__style"
              to={`/videoplay/${item.id}`}
              key={id}
            >
              <Cardvideo key={id} video={item} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;

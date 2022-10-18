import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const API = "AIzaSyA82fnpCQ86CtAgV8qlgkgZdQtyI0mJfgU";
// const chanelId = "UC_x5XG1OV2P6uZZ5FSM9Ttw";
const fetchurl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=33&regionCode=US&key=${API}`;
function Home() {
  //434501052002-0ra8d1qvse4bld75lch1jluo3sku62er.apps.googleusercontent.com : client id
  //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 : your client secret

  const [allVideos, setAllvideos] = useState([]);
  const [videourl, setVideourl] = useState("tgbNymZ7vqY");
  useEffect(() => {
    fetch(fetchurl)
      .then((response) => response.json())
      .then((data) => {
        /* const resultat = data.items.map((doc) => ({
          ...doc,
          Videolink: "https://www.youtube.com/embed/" + doc.id.videoId,
        })); */
        setAllvideos(data.items);
      });
  }, []);
  
  function playitem(id) {
    
    setVideourl(id)
    console.log(videourl);
    return videourl;
  }
 
  console.log(videourl);
  console.log(allVideos);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1>Play video</h1>

            <iframe
              width="600"
              height="350"
              src={`https://www.youtube.com/embed/${videourl}`}

              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              /* allowfullscreen */
            ></iframe>
            
            {console.log(videourl)}
          </div>
          <div className="col-md-4">
            <p>All videos</p>
            <div>
              {allVideos.map((item) => (
                <div
                  onClick={() => {
                    playitem(item.id);
                  }}
                  key={item.id}
                >
                  <img src={item?.snippet?.thumbnails?.medium?.url} alt="" />
                  <p>{item.snippet?.title}</p>
                  <p>{item.id}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

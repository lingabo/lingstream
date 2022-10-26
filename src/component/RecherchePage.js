import React from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Loarding } from "./Loading";
import { Cardvideo } from "./Cardvideo";
import Navbar from "./Navbar";

export function RecherchePage(){

const navigate = useNavigate()
   const { searchWord } = useParams()
   const [videoFound, setVideoFound] = useState([])
   const key = "AIzaSyA82fnpCQ86CtAgV8qlgkgZdQtyI0mJfgU";
   const accessToken = localStorage.getItem('token')
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(false)

  const fectData = () => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=60&type=video&q=${searchWord}&safeSearch=none&key=${key}`
      )
      .then((response) => {
        setVideoFound(response?.data?.items);
        setLoading(false);
      })
      
  };

  useEffect(() => {
    fectData();
  }, [searchWord, accessToken]);

  useEffect(() => {
    if (!accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);

  return (
    <div>
        <div>
            <Navbar/>
        </div>
      <div className="grid_sidebar_searchbar">
      
          <div className="image__preview image__container">
            {!loading ? (
              videoFound?.map((item, id) => (
                <Link
                  className="video__link__style"
                  to={`/videoplay/${item.id.videoId}/${item?.snippet?.channelId}`}
                  key={id}
                >
                  <Cardvideo key={id} video={item} />
                </Link>
              ))
            ) : (
              <Loarding />
            )}
          </div>
    
      </div>
    </div>
  );

}

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "./Navbar";
export function Videochanel(){

 const { channelId } = useParams();
 const API = "AIzaSyA82fnpCQ86CtAgV8qlgkgZdQtyI0mJfgU";
 const [Channel, setChannel] = useState([]);
 const [isError, setIsError] = useState(false);
 useEffect(() => {
   fetch(
     `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&maxResults=10&key=${API}`
   )
     .then((response) => {
       return response.json();
     })
     .then((data) => {
       setChannel(data.items);
     })
     .catch(() => setIsError(true));
 }, []);
 if (isError) {
   return <div>not found</div>;
 }
 return (
   <>
     <Navbar/>
     
     <div className="videochannel">
       {Channel.map((video, index) => {
         const videoId = video.id.videoId;
         return (
           <Link
             key={index}
             className="video-channel"
             
           >
             <img src={video.snippet.thumbnails.medium.url} alt="" />
             <p>{video.snippet.title}</p>
           </Link>
         );
       })}
     </div>
   </>
 );
 

}
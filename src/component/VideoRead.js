

import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
export function VideoRead(){

     const { id } = useParams();
     console.log(id);
     return (
       <div>
         <Navbar />
        
         <div className="video__lecture" /* key={videos.id} */>
           <iframe
             width="560"
             height="315"
             src={`https://www.youtube.com/embed/${id}`}
             title="YouTube video player"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             /* allowfullscreen */
           ></iframe>
           {/* <p className="video__title">{videos?.snippet?.title}</p>
            <p>{videos?.snippet?.channelTitle}</p> */}
         </div>
       </div>
     );
}
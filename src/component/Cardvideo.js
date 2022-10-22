import React from "react";


export function Cardvideo({video}){

const chanelImage = localStorage.getItem('token');

return (
  <div>
    <div className="container">
      <div className="row padd">
        <img
          className="image"
          src={video?.snippet?.thumbnails?.medium?.url}
          alt="image video"
        />
        <p className="video__title">{video?.snippet?.title}</p>
        
      </div>

      
    </div>
  </div>
);

}
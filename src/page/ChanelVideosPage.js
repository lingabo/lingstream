import React from "react";
import ChannelCardVideos from "../component/ChannelCardVideos";
import Navbar from "../component/Navbar";


const ChanelVideosPage = () => { 
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="Parentcontainer">
        <ChannelCardVideos />
      </div>
    </>
  );
}

export default ChanelVideosPage;

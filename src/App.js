import "./App.css";

import React from "react";

import Login from "./component/Login";

import Home from "./component/Home";
import { Routes, Route } from "react-router-dom";
import Channels from "./component/Channels";
import { VideoRead } from "./component/VideoRead";

import Logout from "./component/Logout";

import ChanelVideosPage from "./page/ChanelVideosPage";
// import { LireChannelVideo } from "./component/LireChannelVideoo";
import { RecherchePage } from "./component/RecherchePage";

//AIzaSyDfeBZeHkXcARr4-0j5cSforPdmwdVMoz8 Apikey
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashbord" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/channel" element={<Channels />} />

          <Route
            path="/videoplay/:videoId/:channelId"
            element={<VideoRead />}
          />
          <Route
            path="/chanelVideosPage/:channelId"
            element={<ChanelVideosPage />}
          />
          <Route path="/searchpage/:searchWord" element={<RecherchePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

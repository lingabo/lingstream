import "./App.css";

import React, { useState, useEffect } from "react";

import { gapi } from "gapi-script";
import Login from "./component/Login";

import Home from "./component/Home";
import { Routes, Route } from "react-router-dom";
import { Videosall } from "./component/Videosall";

//AIzaSyDfeBZeHkXcARr4-0j5cSforPdmwdVMoz8 Apikey
function App() {
  // const [profile, setProfile] = useState([]);
  // const clientId =
  //   "434501052002-0ra8d1qvse4bld75lch1jluo3sku62er.apps.googleusercontent.com";
  // useEffect(() => {
  //   const initClient = () => {
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: "",
  //     });
  //   };
  //   gapi.load("client:auth2", initClient);
  // });

  // const onSuccess = (res) => {
  //   setProfile(res.profileObj);
  // };

  // const onFailure = (err) => {
  //   console.log("failed", err);
  // };

  // const logOut = () => {
  //   setProfile(null);
  // };

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashbord" element={<Home />} />
          <Route path="/abonnement" element={<Videosall />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

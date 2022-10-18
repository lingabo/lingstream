import "../App.css";
import logo from "./assets/images/logo.png";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [profile, setProfile] = useState([]);
  const clientId =
    "434501052002-0ra8d1qvse4bld75lch1jluo3sku62er.apps.googleusercontent.com";
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const navigate = useNavigate();
  const onSuccess = (res) => {
    setProfile(res.profileObj);
    navigate("/dashbord");
  };

  return (
    <div className="main">
      <div className="header-logo">
        <h1 className="text">Lingstream</h1>
        <img src={logo} alt="LingSt-Logo" className="logo" />
        <p>Une application qui vous permet de faire du streaming</p>

        <GoogleLogin
          clientId="434501052002-0ra8d1qvse4bld75lch1jluo3sku62er.apps.googleusercontent.com"
          buttonText="Se connecter avec son compte Google"
          onSuccess={onSuccess}
          cookiePolicy={"single_host_origin"}
          isSignedIn={false}
        />
      </div>
    </div>
  );
}

export default Login;

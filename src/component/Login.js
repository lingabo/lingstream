import "../App.css";
import logo from "./assets/images/logo.png";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const clientId =
    "434501052002-0ra8d1qvse4bld75lch1jluo3sku62er.apps.googleusercontent.com";
  // const clientId3 =
  //   "434501052002-0ra8d1qvse4bld75lch1jluo3sku62er.apps.googleusercontent.com";
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope:"https://www.googleapis.com/auth/youtube.readonly",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const navigate = useNavigate();
  const onSuccess = (res) => {
    console.log(res);
    const accessToken = res.accessToken;
    localStorage.setItem('token', accessToken);
    const images = res.profileObj["imageUrl"];
    localStorage.setItem("images", images);
    console.log("token : ", accessToken);

    
    navigate("/dashbord");
  };

  const accessToken = localStorage.getItem("token");
  useEffect(() => {
    if(!accessToken){
      navigate("/");
    }
  }, [accessToken, navigate]);

  return (
    <div className="main">
      <div className="header-logo">
        <h1 className="text">Lingstream</h1>
        <img src={logo} alt="LingSt-Logo" className="logo" />
        <p>Une application qui vous permet de faire du streaming</p>
        <div id="login">
          {/* 861476027861-544a7k37qnckg7mnltohcl885b53nl0t.apps.googleusercontent.com */}
          <GoogleLogin
            clientId="861476027861-544a7k37qnckg7mnltohcl885b53nl0t.apps.googleusercontent.com"
            buttonText="Se connecter avec son compte Google"
            onSuccess={onSuccess}
            cookiePolicy={"single_host_origin"}
            isSignedIn={false}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;

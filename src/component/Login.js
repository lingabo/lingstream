import "../App.css";
import logoo from "./assets/images/logo.png";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { render } from "@testing-library/react";

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
        <img src={logoo} alt="LingSt-Logo" className="logoo" />
        <h1 className="text">
          {" "}
          <b style={{ color: "#32AEE3" }}>Ling</b>Stream
        </h1>
        <p className="pcenter">Streaming in your hands</p>
        <div id="login">
          {/* 861476027861-544a7k37qnckg7mnltohcl885b53nl0t.apps.googleusercontent.com */}
          <GoogleLogin
            clientId="861476027861-544a7k37qnckg7mnltohcl885b53nl0t.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                className="btn-login"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <i className="fa fa-google google-icon"></i> Login with your
                google account
              </button>
            )}
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

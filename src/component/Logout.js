import React from "react";

import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";


const clientId =
  "434501052002-0ra8d1qvse4bld75lch1jluo3sku62er.apps.googleusercontent.com";

const Logout = () => {
  const navigate = useNavigate();
  const onSucces = () => {
   
    navigate("/");
    localStorage.removeItem("item");
    localStorage.removeItem("token");
  };


  return (
    <div className="logout__container">
      <div className="logout__ui">
        <GoogleLogout
          className="logout__ui"
          clientId={clientId}
          render={(renderProps) => (
            <button
              className="btn-logout"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <i className="fa-solid fa-right-from-bracket google-logout-icon"></i>{" "}
              Déconnexion
            </button>
          )}
          buttonText={"Logout"}
          onLogoutSuccess={onSucces}
        />
      </div>
    </div>
  );
};

export default Logout;

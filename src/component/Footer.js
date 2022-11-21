import React from "react"
import "./assets/images/footer.css"
import { Link } from "react-router-dom";
import logo from "./assets/images/logo.png"
export function Footer(){




    return (
      <>
        <div className="containerFooter">
          <div className="rowFooter">
            
              <div className="nav-items">
                <li>
                  <Link to={"/home"}>Accueil</Link>
                </li>
                <li>
                  <Link to={"/channel"}>Abonnement</Link>
                </li>
              </div>

                <div className="Footerlogo">
                    <img src={logo} className="logo"/>

                </div>


            </div>


          </div>
        
      </>
    );
}
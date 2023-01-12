import React from "react";
import { Link } from "react-router-dom";
import "./assets/style/commentStyle.css"

export default function Comments(){


    return (
      <>
        <div className="comment-part">
          <div className="comments">{"579k Commentaires"}</div>
          <div className="filter">
            <i className="fa-solid fa-bars-filter"></i> {"Trier par"}
          </div>
        </div>

        <div className="newComment">
          <div>
            <img
              src="https://avatars.githubusercontent.com/u/37625708?v=4"
              alt="Lingabo Jun"
              className="profile-picture"
            />
          </div>
          <div>
            <form action="" className="comment-input">
              <input
                type="text"
                placeholder="Ajouter votre commentaire..."
                name=""
                id=""
                className="Input"
              />
            </form>

            <button className="addComment" type="submit">Ajouter</button>
          </div>
        </div>

        <div>
          <img
            src="https://avatars.githubusercontent.com/u/37625708?v=4"
            alt="Lingabo Jun"
            className="profile-picture"
          />
        </div>
        <p className="lineComment">
          Great video! You may be one of the few that totally explains Express
          middleware. Also I agree that understanding middleware will help make
          you a better Express Developer. I feel like a better Express Dev
          already
        </p>

        <div>
          <Link>
          Repondre
          </Link>
        </div>

       
      </>
    );
    
}
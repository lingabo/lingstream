import { Link } from "react-router-dom";
import Logout from "./Logout";
import { Searchlist } from "./Searchlist";
import { FaBeer, FaYoutube } from "react-icons/fa";
import { useState } from "react";

function Navbar(props) {
  const profile = localStorage.getItem("images");
  const [openDropmenu, setOpenDropmenu] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="icon" onClick={() => setOpenDropmenu(!openDropmenu)}>
          <i className="fas fa-bars menuhumb"></i>
        </div>

        <div className="logot">
          <b style={{ color: "blue" }}>Ling</b>Stream
        </div>

        <div className="nav-items">
          <li>
            <Link to={"/home"}>Accueil</Link>
          </li>
          <li>
            <Link to={"/channel"}>Abonnement</Link>
          </li>
        </div>

        <Searchlist />
        <div className="nav-items profil">
          <img src={profile} className="circle" alt="userPhoto" />
          <li>
            <div>
              <Logout />
            </div>
          </li>
        </div>
      </nav>
      {openDropmenu && (
        <div className="Dropmenu">
          <div className="nav-items">
            <li>
              <Link to={"/home"}>Accueil</Link>
            </li>
            <li>
              <Link to={"/channel"}>Abonnement</Link>
            </li>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;

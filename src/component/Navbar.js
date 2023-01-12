import { Link } from "react-router-dom";
import Logout from "./Logout";
import { Searchlist } from "./Searchlist";

import Modal from "./Modal";

import { useState } from "react";

const Navbar = () => {
  const profile = localStorage.getItem("images");
  const [openDropmenu, setOpenDropmenu] = useState(false);
  const [modal, setModal] = useState(false);

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
            <Link to={"/home"}>
              <i className="fa-solid fa-house-chimney"></i>Accueil
            </Link>
          </li>
          <li>
            <Link to={"/channel"}>
              <i className="fa-solid fa-right-from-bracket google-logout-icon"></i>
              Abonnement
            </Link>
          </li>
        </div>
        <div className="dropmenu"></div>
        <Searchlist />
        <div className="nav-items profil">
          <img src={profile} className="circle" alt="userPhoto" onClick={()=>setModal(true)}/>
          {
            modal=== true &&(
            <Modal setModal = {setModal}/>
            )}

          <div>
            <Logout />
          </div>
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
            <li>
              <Link to={"/channel"}>Editer profil</Link>
            </li>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
